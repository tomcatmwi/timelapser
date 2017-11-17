import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MainTabsPage } from '../pages/main-tabs/main-tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = MainTabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      console.log('Platform ready to go')
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
}
