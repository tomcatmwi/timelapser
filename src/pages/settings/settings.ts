import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {StorageService} from '../../services/storage.service';
import { ActionSheetController } from 'ionic-angular';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})

export class SettingsPage {

    // this tells the tabs component which Pages should be each tab's root Page
    constructor(public navCtrl: NavController,
        public alertCtrl: AlertController,
        public actionSheetCtrl: ActionSheetController,
        public storageService: StorageService) {
    }

    photoIntervals = [
        {type: 'radio', label: 'Not set', value: '0'},
        {type: 'radio', label: '5 seconds', value: '5'},
        {type: 'radio', label: '10 seconds', value: '10'},
        {type: 'radio', label: '15 seconds', value: '15'},
        {type: 'radio', label: '20 seconds', value: '20'},
        {type: 'radio', label: '30 seconds', value: '30'},
        {type: 'radio', label: '45 seconds', value: '45'},
        {type: 'radio', label: '1 minute', value: '60'},
        {type: 'radio', label: '90 seconds', value: '90'},
        {type: 'radio', label: '2 minutes', value: '120'},
        {type: 'radio', label: '3 minutes', value: '180'},
        {type: 'radio', label: '5 minutes', value: '300'},
        {type: 'radio', label: '10 minutes', value: '600'},
        {type: 'radio', label: '15 minutes', value: '900'},
        {type: 'radio', label: '20 minutes', value: '1200'},
        {type: 'radio', label: '30 minutes', value: '1800'},
        {type: 'radio', label: '45 minutes', value: '2700'},
        {type: 'radio', label: '1 hour', value: '3600'},
        {type: 'radio', label: '90 minutes', value: '5400'},
        {type: 'radio', label: '2 hours', value: '7200'},
        {type: 'radio', label: '3 hours', value: '10800'},
        {type: 'radio', label: '6 hours', value: '21600'}
    ];
    
    ionViewWillEnter() {
        if (!this.storageService.getValue('photoInterval')) {
            this.storageService.setValue('photoInterval', Number(this.photoIntervals[0].value));        
            this.storageService.setValue('photoIntervalText', this.photoIntervals[0].label);
        }
    }

    deleteTime(i) {
        let confirm = this.alertCtrl.create({
            title: 'Delete time',
            message: 'Remove time ' + this.storageService.storage['times'][i] + '?',
            buttons: [
                {
                    text: 'No',
                    handler: () => {}
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.storageService.storage['times'].splice(i, 1);
                    }
                }
            ]
        });
        confirm.present();
    }

    addTime() {
        const alert = this.alertCtrl.create({
            title: 'Add new time',
            inputs: [
                {
                    name: 'newtime',
                    placeholder: 'Set time:',
                    type: 'time'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {}
                },
                {
                    text: 'Add',
                    handler: data => {
                        if (!this.storageService.getValue('times'))
                            this.storageService.setValue('times', []);
                        if (data.newtime != '')
                            this.storageService.storage['times'].push(data.newtime);
                        this.storageService.storage['times'].sort();
                    }
                }
            ]
        });
        alert.present();
    }

    setPhotoInterval() {
        
        let intervalSelector = this.alertCtrl.create({
            title: 'Set interval',
            inputs: this.photoIntervals,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {}
                },
                {
                    text: 'Set',
                    handler: data => {
                        this.storageService.setValue('photoInterval', Number(data));
                        for (var t in this.photoIntervals)
                            if (this.photoIntervals[t].value == data) {
                                this.storageService.setValue('photoIntervalText', this.photoIntervals[t].label);
                            }
                        
                    }
                }
            ]
        });
        intervalSelector.present();
    }

}
