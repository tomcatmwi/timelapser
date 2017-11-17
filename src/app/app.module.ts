import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {CameraPreview} from '@ionic-native/camera-preview';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoadingController} from 'ionic-angular';
import {File} from '@ionic-native/file';
import {Content} from 'ionic-angular';

import {CameraViewPage} from '../pages/camera-view/camera-view';
import {ImagesPage} from '../pages/images/images';
import {SettingsPage} from '../pages/settings/settings';
import {MainTabsPage} from '../pages/main-tabs/main-tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StorageService} from '../services/storage.service';
import {FileSystemService} from '../services/filesystem.service';
import {FormatterService} from '../services/formatter.service';
import {PhotoViewerComponent} from '../components/photoviewer/photoviewer.component';

import {FormatNumberPipe, FormatSecondsPipe, ChopStringPipe, FilesizePipe} from '../pipes/formatter.pipe';

@NgModule({
    declarations: [
        MyApp,
        CameraViewPage,
        ImagesPage,
        SettingsPage,
        MainTabsPage,
        PhotoViewerComponent,
        FormatNumberPipe,
        FormatSecondsPipe,
        ChopStringPipe,
        FilesizePipe,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        CameraViewPage,
        ImagesPage,
        SettingsPage,
        MainTabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        StorageService,
        FormatterService,
        FileSystemService,
        CameraPreview,
        ScreenOrientation,
        LoadingController,
        File,
        Content,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})

export class AppModule {}