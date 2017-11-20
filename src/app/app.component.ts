import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {MainTabsPage} from '../pages/main-tabs/main-tabs';
import {AlertController} from 'ionic-angular';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    rootPage: any = MainTabsPage;

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        alertCtrl: AlertController,
    ) {

        platform.ready().then(() => {
            
            statusBar.styleDefault();
            splashScreen.hide();
            
            //  remove loader message
            
            platform.registerBackButtonAction(() => {
                
                var alert = alertCtrl.create({
                    title: 'Exit',
                    message: 'Do you want to exit Timelapser?',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: () => {
                                alert = null;
                            }
                        },
                        {
                            text: 'Exit',
                            handler: () => {
                                platform.exitApp();
                            }
                        }
                    ]
                });
                alert.present();
            })
        })

    }

}
