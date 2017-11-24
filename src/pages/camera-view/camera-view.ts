import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Insomnia} from '@ionic-native/insomnia';
import {CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions} from '@ionic-native/camera-preview';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import {AlertController} from 'ionic-angular';
import {StorageService} from '../../services/storage.service';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Platform} from 'ionic-angular';
import {FormatterService} from '../../services/formatter.service';
import {FileSystemService} from '../../services/filesystem.service';
import {AudioService} from '../../services/audio.service';
import {Diagnostic} from '@ionic-native/diagnostic';

@Component({
    selector: 'page-camera-view',
    templateUrl: 'camera-view.html',

    animations: [
        trigger('floaterState', [
            state('inside', style({left: '20px'})),
            state('outside', style({left: '-240px'})),
            transition('inside <=> outside', animate('70ms ease-out')),
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
        public audioService: AudioService,
        private insomnia: Insomnia,
        private diagnostic: Diagnostic,
        public formatterService: FormatterService) {
    }

    panelHidden = false;
    getFreeSpace;
    noPhoto = true;

    floaterState = 'inside';
    imagesTaken = 0;
    lastTake = 'None';
    freeSpace;
    cameraTimer;
    tabBarElement;

    imageOptions: CameraPreviewPictureOptions;

    fatalError(message) {
        let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: message,
            buttons: [{
                text: 'Quit',
                handler: () => {this.platform.exitApp()}
            }]
        });
        alert.present();
    }

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

        this.cameraPreview.stopCamera()
            .then(
            () => {console.log('Camera stopped');},
            (err) => {console.log('Camera NOT stopped, error: ', err);}
            );


    }

    ionViewWillEnter() {

        this.platform.ready().then(
            readySource => {

                new Promise(
                    (resolve, reject) => {

                        //  ----------------------------------------------------------------

                        window['cordova']['plugins']['diagnostic'].isCameraAuthorized(
                            result => {
                                console.log('Camera authorization state: ', result)
                                if (!result) {
                                    this.diagnostic.requestCameraAuthorization(true)
                                        .then(
                                        result => {
                                            if (result == 'GRANTED') resolve()
                                            else reject('Authorization denied - the app can\'t run!')
                                        },
                                        error => reject(error))
                                } else resolve(true);
                            },
                            error => reject(error),
                            true)
                    }).then(
                    success => this.initialize(),
                    error => this.fatalError(error)
                    ).catch(
                    error => this.fatalError(error)
                    )
            });
    }

    initialize() {
        this.storageService.setValue('cameraActive', false);

        //  lock screen in landscape mode
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

        //  check output directory and create if it doesn't exist
        this.fileSystem.checkDataDir().subscribe(
            (result) => {},
            (err) => {}
        );

        var cameraSettings = this.storageService.storage.cameraSettings;

        var cameraPreviewOpts: CameraPreviewOptions = {
            x: 0,
            y: 0,
            camera: cameraSettings.camera.value,
            toBack: true,
            tapPhoto: false,
            previewDrag: false
        };

        this.imageOptions = {
            width: this.storageService.storage.cameraSettings.resolution.value.width,
            height: this.storageService.storage.cameraSettings.resolution.value.height,
            quality: this.storageService.storage.cameraSettings.quality
        }

        // stop and restart camera

        var width = window.screen.width;
        var height = window.screen.height;
        if (width < height)[width, height] = [height, width];

        cameraPreviewOpts.width = width;
        cameraPreviewOpts.height = width / 1.25;

        new Promise((resolve, reject) => {

            this.cameraPreview.startCamera(cameraPreviewOpts).then(
                () => {console.log('Camera init OK')},
                (error) => {
                    this.noPhoto = true;
                    let alert = this.alertCtrl.create({
                        title: 'Camera error',
                        subTitle: error,
                        buttons: ['Right']
                    });
                    alert.present();
                    this.storageService.setValue('cameraActive', false);
                }
            )
                .then(() => {
                    this.cameraPreview.show().then(
                        () => {
                            setTimeout(() => {resolve();}, 1000);
                            console.log('Camera is showing OK')
                        },
                        (error) => {
                            this.noPhoto = true;
                            let alert = this.alertCtrl.create({
                                title: 'Camera error',
                                subTitle: error,
                                buttons: ['Right']
                            });
                            alert.present();
                            this.storageService.setValue('cameraActive', false);
                        }
                    )

                })
        })

            //  set flash ---------------------------------------------------------------------------------------

            .then(
            () => {
                this.cameraPreview.getSupportedFlashModes().then(
                    data => {
                        if (data.indexOf(cameraSettings.flash.value) != -1)
                            this.cameraPreview.setFlashMode(cameraSettings.flash.value).then(
                                () => console.log('Flash setting OK'),
                                (error) => {
                                    console.log('Flash: ', error);
                                    let alert = this.alertCtrl.create({
                                        title: 'Error',
                                        subTitle: 'The current flash setting is not supported on this device.',
                                        buttons: ['Right']
                                    });
                                    alert.present();
                                }
                            )
                    },
                    error => {
                        console.log('Flash error: ', error);
                    }
                )
            })

            //  set focus ---------------------------------------------------------------------------------------

            .then(
            () => {
                this.cameraPreview.getSupportedFocusModes().then(
                    data => {
                        if (data.indexOf(cameraSettings.focus.value) != -1)
                            this.cameraPreview.setFocusMode(cameraSettings.focus.value).then(
                                () => console.log('Focus setting OK'),
                                (error) => {
                                    console.log('Focus error: ', error);
                                    let alert = this.alertCtrl.create({
                                        title: 'Error',
                                        subTitle: 'The current focus setting is not supported on this device.',
                                        buttons: ['Right']
                                    });
                                    alert.present();
                                }
                            )
                    },
                    error => {
                        console.log('Focus error: ', error);
                    }
                )
            })

            //  set effect ---------------------------------------------------------------------------------------

            .then(
            () => {
                this.cameraPreview.setColorEffect(cameraSettings.effect.value).then(
                    () => console.log('Effect setting OK'),
                    (error) => {
                        console.log('Effect setting error: ', error);
                        let alert = this.alertCtrl.create({
                            title: 'Error',
                            subTitle: 'This picture effect is not supported on this device.',
                            buttons: ['Right']
                        });
                        alert.present();
                    }
                )
            })

            //  get supported image sizes --------------------------------------------------------------------------

            .then(
            () => {
                this.cameraPreview.getSupportedPictureSizes().then(
                    data => {
                        this.storageService.storage.cameraOptions.resolution = [];
                        data.forEach(element => {
                            this.storageService.storage.cameraOptions.resolution.push({
                                type: 'radio',
                                label: element.width + '×' + element.height,
                                value: element
                            });
                        })
                    }
                )
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

    }

    takePhoto() {
        if (this.noPhoto) return false;
        this.noPhoto = true;

        this.cameraPreview.takePicture(this.imageOptions).then(
            imageData => {

                var filename = this.formatterService.dateAsFilename() + '.jpg';

                if (this.storageService.storage.fileNamingConvention.value == '1') {
                    filename = String(this.imagesTaken) + '.jpg';
                    while (filename.length < 12)
                        filename = '0' + filename;
                }

                this.fileSystem.saveFile(
                    filename,
                    this.formatterService.base64toBlob(imageData[0], 'image/jpeg')
                ).subscribe(
                    success => {
                        this.imagesTaken++;
                        this.noPhoto = false;
                    },
                    err => {
                        this.noPhoto = false;
                        this.audioService.playSound('error');
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
                this.audioService.playSound('error');
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

        this.tabBarElement = document.querySelector('#mainTabs-tabs1 .tabbar');

        if (value) {
            this.insomnia.keepAwake().then(
                () => this.storageService.setValue('cameraActive', true),
                error => console.log('Unable to turn on Insomnia: ', error)
            )
        } else {
            this.insomnia.allowSleepAgain().then(
                () => this.storageService.setValue('cameraActive', false),
                error => console.log('Unable to turn off Insomnia: ', error)
            );
        }
    }

    getInterval() {
        if (this.storageService.storage['photoIntervalText'])
            return this.storageService.storage['photoIntervalText']
        else
            return 'Not set';
    }

}
