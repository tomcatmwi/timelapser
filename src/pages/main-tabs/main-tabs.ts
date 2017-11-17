import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {CameraViewPage} from '../camera-view/camera-view';
import {ImagesPage} from '../images/images';
import {SettingsPage} from '../settings/settings';

@Component({
    selector: 'page-main-tabs',
    templateUrl: 'main-tabs.html'
})
export class MainTabsPage {
    
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root: any = CameraViewPage;
    tab2Root: any = ImagesPage;
    tab3Root: any = SettingsPage;
    
    constructor(
        public navCtrl: NavController) {
    }
    
    lofasz(event) {
        console.log(event);
    }
}
