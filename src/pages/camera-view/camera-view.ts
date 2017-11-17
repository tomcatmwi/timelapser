import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions} from '@ionic-native/camera-preview';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import {AlertController} from 'ionic-angular';
import {StorageService} from '../../services/storage.service';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Platform} from 'ionic-angular';
import {FormatterService} from '../../services/formatter.service';
import {FileSystemService} from '../../services/filesystem.service';

@Component({
    selector: 'page-camera-view',
    templateUrl: 'camera-view.html',

    animations: [
        trigger('floaterState', [
            state('inside', style({left: '20px'})),
            state('outside', style({left: '-240px'})),
            transition('inside <=> outside', animate('2s ease-in-out')),
        ])
    ]

})
export class CameraViewPage {

    constructor(public navCtrl: NavController,
        public cameraPreview: CameraPreview,
        public screenOrientation: ScreenOrientation,
        public alertCtrl: AlertController,
        public platform: Platform,
        public fileSystem: FileSystemService,
        public storageService: StorageService,
        public formatterService: FormatterService) {
    }
    
    cameraPreviewOpts: CameraPreviewOptions = {
        x: 0,
        y: 0,
        camera: 'BACK',
        toBack: true,
        tapPhoto: false,
        previewDrag: false
    };

    imageOptions: CameraPreviewPictureOptions = {
        width: 1280,
        height: 1024,
        quality: 85
    }

    panelHidden = false;
    getFreeSpace;
    noPhoto = true;

    floaterState = 'inside';
    imagesTaken = 0;
    lastTake = 'None';
    freeSpace;
    cameraTimer;
    
    ionViewWillLeave() {
        this.screenOrientation.unlock();
        if (this.storageService.getValue('cameraActive')) {
            let alert = this.alertCtrl.create({
                title: 'Camera is stopped',
                subTitle: 'The camera can only run in Camera View mode.',
                buttons: ['Got it']
            });
            alert.present();
            
            this.storageService.setValue('cameraActive', false);
        }
    }

    ionViewWillEnter() {

        this.platform.ready().then(readySource => {
            
            this.storageService.setValue('cameraActive', false);

            //  lock screen in landscape mode                    
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

            //  check output directory and create if it doesn't exist

            this.fileSystem.checkDataDir().subscribe(
                (result) => {},
                (err) => {}
            );

            // stop and restart camera

            var width = window.screen.width;
            var height = window.screen.height;
            if (width < height)[width, height] = [height, width];

            this.cameraPreviewOpts.width = width;
            this.cameraPreviewOpts.height = width / 1.25;

            this.cameraPreview.stopCamera()
                .then(() => {console.log('Camera stopped')})
                .catch(() => {console.log('Camera NOT STOPPED')});

            this.cameraPreview.startCamera(this.cameraPreviewOpts)
                .then(() => {this.cameraPreview.show();})
                .catch((err) => {
                    this.noPhoto = true;
                    let alert = this.alertCtrl.create({
                        title: 'Camera error',
                        subTitle: err,
                        buttons: ['Right']
                    });
                    this.storageService.setValue('cameraActive', false);
                    alert.present();
                    this.noPhoto = false;
                    return false;
                });

            //  activate camera timer

            var counter = 0;

            if (!this.cameraTimer)
                this.cameraTimer = setInterval(() => {
                    var currentTime = this.formatterService.getCurrentTimeAsString();
                    counter += 5;

                    if (
                        !this.noPhoto &&
                        this.storageService.getValue('cameraActive') &&
                        (
                            (currentTime == this.nextTake() && this.lastTake != currentTime) ||
                            (this.storageService.storage['photoInterval'] > 0 && counter % this.storageService.storage['photoInterval'] == 0))
                    ) {
                        this.lastTake = currentTime;
                        this.takePhoto();
                        counter = 0;
                    }
                }, 5000);

            // get free space on device

            this.fileSystem.getFreeSpace().subscribe(result => this.freeSpace = result * 1024);
            this.noPhoto = false;
        });
    }

    takePhoto() {
        console.log('Attempting to take photo...');
        
        if (this.noPhoto) return false;
        this.noPhoto = true;

        this.cameraPreview.takePicture(this.imageOptions).then(
            imageData => {

                this.fileSystem.saveFile(
                    this.formatterService.dateAsFilename() + '.jpg',
                    this.formatterService.base64toBlob(imageData[0], 'image/jpeg')
                ).subscribe(
                    success => {
                        this.imagesTaken++;
                        this.noPhoto = false;
                    },
                    err => {
                        this.noPhoto = false;
                    }
                    )
            },

            err => {
                let alert = this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Unable to take photo.',
                    buttons: ['Damn!']
                });
                alert.present();
                this.noPhoto = false;
            });
    }

    nextTake() {
        var times = this.storageService.getValue('times');
        if (!times || times.length <= 0) return 'No time set';

        //  get current hour
        var currentTime = this.formatterService.getCurrentTimeAsString();

        var nextTime = '';
        for (var t in this.storageService.storage['times']) {
            if (this.storageService.storage['times'][t] >= currentTime &&
                this.storageService.storage['times'][t] != this.lastTake &&
                nextTime == '')
                nextTime = this.storageService.storage['times'][t];
        }
        if (nextTime == '') nextTime = this.storageService.storage['times'][0];
        return nextTime;
    }

    hidePanel(event) {
        if (event.direction == 4)
            this.floaterState = 'inside';
        if (event.direction == 2)
            this.floaterState = 'outside';
    }

    activateCamera(value) {

        if (value && (
            (!this.storageService.storage['photoInterval'] ||
                this.storageService.storage['photoInterval'] == 0) &&
            (!this.storageService.storage['times'] ||
                this.storageService.storage['times'].length <= 0))) {
            
            let alert = this.alertCtrl.create({
                title: 'No time or interval specified!',
                subTitle: 'Please set some time or an interval on the Settings page.',
                buttons: ['Right']
            });
            alert.present();
        }

        this.storageService.setValue('cameraActive', value);
   }

getInterval() {
    if (this.storageService.storage['photoIntervalText'])
        return this.storageService.storage['photoIntervalText']
    else
        return 'Not set';
}

}
