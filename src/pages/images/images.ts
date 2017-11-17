import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import {File} from '@ionic-native/file';
import {Platform} from 'ionic-angular';
import {FileSystemService} from '../../services/filesystem.service';
import {FormatterService} from '../../services/formatter.service';

@Component({
    selector: 'page-images',
    templateUrl: 'images.html'
})
export class ImagesPage {

    loader;
    album = [];

    constructor(public navCtrl: NavController,
        public file: File,
        public fileSystem: FileSystemService,
        public loadingController: LoadingController,
        public platform: Platform,
        public formatterService: FormatterService,
        public alertCtrl: AlertController) {
    }
    
    @ViewChild('photoViewer') photoViewer;

    deleteImage(e, index) {
        e.stopPropagation();
        let confirm = this.alertCtrl.create({
            title: 'Delete image',
            message: 'Delete file ' + this.album[index].name + '?',
            buttons: [
                {
                    text: 'No',
                    handler: () => {}
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.fileSystem.deleteFile(this.album[index].name).
                            subscribe(
                            success => {this.album.splice(index, 1);},
                            error => {console.log('File ' + this.album[index].name + ' NOT deleted.')},
                        )

                    }
                }
            ]
        });
        confirm.present();
    }

    ionViewWillEnter() {

        this.loader = this.loadingController.create({
            content: "Loading images...",
            dismissOnPageChange: true
        });

        this.loader.present();
        this.album = [];

        this.platform.ready().then(readySource => {

            //  check output directory and create if it doesn't exist

            this.fileSystem.checkDataDir().subscribe(
                () => {

                    //  get file list from /Timelapser
                    this.fileSystem.getDataDir().subscribe(
                        result => {

                            var dir = result as Array<any>;
                            dir.forEach(element => {
                                if (element['isFile']) {
                                    this.fileSystem.getFile(element['name']).subscribe(
                                        fileData => {

                                            this.album.push({
                                                name: element['name'],
                                                size: fileData['size'],
                                                modificationTime: fileData['modificationTime'],
                                                nativeURL: element['nativeURL'],
                                            });

                                            this.album.sort((a, b) => {
                                                if (b.name > a.name) return 1;
                                                if (b.name == a.name) return 0;
                                                if (b.name < a.name) return -1;
                                            });

                                        },
                                        error => {console.log(error);}
                                    );
                                }
                            });

                            this.loader.dismiss();
                        },
                        err => {});

                },
                (err) => {
                    let alert = this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Unable to create or access data directory.',
                        buttons: ['OK']
                    });
                    alert.present();
                });
        });
    }

    deleteAllImages() {
        let confirm = this.alertCtrl.create({
            title: 'Delete all images',
            message: 'Purge ALL images? Are you sure?',
            buttons: [
                {
                    text: 'No',
                    handler: () => {}
                },
                {
                    text: 'Yes',
                    handler: () => {

                        this.loader = this.loadingController.create({
                            content: "Deleting all images...",
                            dismissOnPageChange: false
                        });

                        this.loader.present();

                        this.album.forEach(element => {
                            this.fileSystem.deleteFile(element.name).subscribe(
                                success => {},
                                error => {}
                            );
                        });

                        this.album = [];
                        this.loader.dismiss();
                    }
                }
            ]
        });
        confirm.present();
    }
    
    getNextImage(data) {
        var dir = -1;
        if (data.dir == 2) dir = 1;
        var index = -1;
        for (let t in this.album)
            if (this.album[t]['nativeURL'] == data.src) index = Number(t);
        if (index == -1) return false;
        index += dir;
        if (index < 0 || index > this.album.length-1) return false;
        this.photoViewer.showPicture(this.album[index]['nativeURL'], this.album[index]['name']);
        console.log('Data request: ', data);
    }
}
