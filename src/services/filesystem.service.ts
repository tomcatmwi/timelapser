import {Injectable} from '@angular/core';
import {File} from '@ionic-native/file';
import {AlertController} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class FileSystemService {

    constructor(
        private file: File,
        private alertCtrl: AlertController
    ) {}

    dirname = 'Timelapser';

    checkDataDir() {
        return Observable.fromPromise(
            this.file.checkDir(this.file.externalRootDirectory, this.dirname).then(
                () => {console.log('Output directory already exists.')},
                (err) => {
                    this.file.createDir(this.file.externalRootDirectory, this.dirname, false).then(
                        () => {console.log('Output directory created.')},
                        err => {
                            let alert = this.alertCtrl.create({
                                title: 'Error',
                                subTitle: 'Unable to create output directory.',
                                buttons: ['OK']
                            });
                            alert.present();
                        }
                    );
                },
            )
        )
    }

    getDataDir() {
        return Observable.fromPromise(
            this.file.listDir(this.file.externalRootDirectory, this.dirname).then(
                result => result,
                err => {
                    let alert = this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Unable to access output directory.',
                        buttons: ['OK']
                    });
                    alert.present();
                }));
    }

    getFreeSpace() {
        return Observable.fromPromise(this.file.getFreeDiskSpace());
    }

    saveFile(filename, content) {
        return Observable.fromPromise(
            this.file.writeFile(this.file.externalRootDirectory + this.dirname, filename, content)
                .then(
                () => {},
                err => {
                    let alert = this.alertCtrl.create({
                        title: 'Error writing file',
                        subTitle: err.message,
                        buttons: ['Sad']
                    });
                    alert.present();
                })
        );
    }

    deleteFile(filename) {
        return Observable.fromPromise(
            this.file.removeFile(this.file.externalRootDirectory + this.dirname, filename).then(
                () => {return true},
                (err) => {
                    this.file.createDir(this.file.externalRootDirectory, this.dirname, false).then(
                        () => {console.log('Output directory created.')},
                        err => {
                            let alert = this.alertCtrl.create({
                                title: 'Error',
                                subTitle: 'Unable to delete file ' + filename,
                                buttons: ['OK']
                            });
                            alert.present();
                            return false;
                        }
                    );
                },
            )
        )
    }

    getFile(filename) {

        return Observable.fromPromise(
            new Promise((resolve, reject) => {
                this.file.resolveDirectoryUrl(this.file.externalRootDirectory + this.dirname).then(
                    dirURL => {
                        this.file.getFile(dirURL, filename, {}).then(
                            result => {
                                result.getMetadata(
                                    fileData => resolve(fileData),
                                    err => reject(err)
                                )
                            },
                            err => reject(err)
                        )
                    },
                    err => reject(err)
                )
            })
        );
    }

}
