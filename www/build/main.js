webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StorageService = (function () {
    function StorageService() {
        this.storage = {};
    }
    StorageService.prototype.setValue = function (name, value) {
        if (value === null)
            return false;
        this.storage[name] = value;
        return true;
    };
    StorageService.prototype.getValue = function (name) {
        if (typeof this.storage[name] == 'undefined')
            return null;
        return this.storage[name];
    };
    return StorageService;
}());
StorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], StorageService);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSystemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileSystemService = (function () {
    function FileSystemService(file, alertCtrl) {
        this.file = file;
        this.alertCtrl = alertCtrl;
        this.dirname = 'Timelapser';
    }
    FileSystemService.prototype.checkDataDir = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(this.file.checkDir(this.file.externalRootDirectory, this.dirname).then(function () { console.log('Output directory already exists.'); }, function (err) {
            _this.file.createDir(_this.file.externalRootDirectory, _this.dirname, false).then(function () { console.log('Output directory created.'); }, function (err) {
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Unable to create output directory.',
                    buttons: ['OK']
                });
                alert.present();
            });
        }));
    };
    FileSystemService.prototype.getDataDir = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(this.file.listDir(this.file.externalRootDirectory, this.dirname).then(function (result) { return result; }, function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Unable to access output directory.',
                buttons: ['OK']
            });
            alert.present();
        }));
    };
    FileSystemService.prototype.getFreeSpace = function () {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(this.file.getFreeDiskSpace());
    };
    FileSystemService.prototype.saveFile = function (filename, content) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(this.file.writeFile(this.file.externalRootDirectory + this.dirname, filename, content)
            .then(function () { }, function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error writing file',
                subTitle: err.message,
                buttons: ['Sad']
            });
            alert.present();
        }));
    };
    FileSystemService.prototype.deleteFile = function (filename) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(this.file.removeFile(this.file.externalRootDirectory + this.dirname, filename).then(function () { return true; }, function (err) {
            _this.file.createDir(_this.file.externalRootDirectory, _this.dirname, false).then(function () { console.log('Output directory created.'); }, function (err) {
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Unable to delete file ' + filename,
                    buttons: ['OK']
                });
                alert.present();
                return false;
            });
        }));
    };
    FileSystemService.prototype.getFile = function (filename) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(new Promise(function (resolve, reject) {
            _this.file.resolveDirectoryUrl(_this.file.externalRootDirectory + _this.dirname).then(function (dirURL) {
                _this.file.getFile(dirURL, filename, {}).then(function (result) {
                    result.getMetadata(function (fileData) { return resolve(fileData); }, function (err) { return reject(err); });
                }, function (err) { return reject(err); });
            }, function (err) { return reject(err); });
        }));
    };
    return FileSystemService;
}());
FileSystemService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
], FileSystemService);

//# sourceMappingURL=filesystem.service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera_view_camera_view__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_images__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainTabsPage = (function () {
    function MainTabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__camera_view_camera_view__["a" /* CameraViewPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__images_images__["a" /* ImagesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
    }
    MainTabsPage.prototype.lofasz = function (event) {
        console.log(event);
    };
    return MainTabsPage;
}());
MainTabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main-tabs',template:/*ion-inline-start:"F:\Cordova\timelapser\src\pages\main-tabs\main-tabs.html"*/'<ion-tabs id="mainTabs-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Camera View" tabIcon="camera" id="mainTabs-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Images" tabIcon="images" id="mainTabs-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="settings" id="mainTabs-tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"F:\Cordova\timelapser\src\pages\main-tabs\main-tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], MainTabsPage);

//# sourceMappingURL=main-tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_mode__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_preview__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_storage_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_formatter_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_filesystem_service__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CameraViewPage = (function () {
    function CameraViewPage(navCtrl, cameraPreview, backgroundMode, screenOrientation, alertCtrl, platform, fileSystem, storageService, formatterService) {
        this.navCtrl = navCtrl;
        this.cameraPreview = cameraPreview;
        this.backgroundMode = backgroundMode;
        this.screenOrientation = screenOrientation;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.fileSystem = fileSystem;
        this.storageService = storageService;
        this.formatterService = formatterService;
        this.cameraPreviewOpts = {
            x: 0,
            y: 0,
            camera: 'BACK',
            toBack: true,
            tapPhoto: false,
            previewDrag: false
        };
        this.imageOptions = {
            width: 1280,
            height: 1024,
            quality: 85
        };
        this.panelHidden = false;
        this.noPhoto = true;
        this.floaterState = 'inside';
        this.imagesTaken = 0;
        this.lastTake = 'None';
    }
    CameraViewPage.prototype.ionViewWillLeave = function () {
        this.screenOrientation.unlock();
        if (this.storageService.getValue('cameraActive')) {
            var alert_1 = this.alertCtrl.create({
                title: 'Camera is stopped',
                subTitle: 'The camera can only run in Camera View mode.',
                buttons: ['Got it']
            });
            alert_1.present();
            this.storageService.setValue('cameraActive', false);
        }
    };
    CameraViewPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            _this.backgroundMode.enable();
            _this.storageService.setValue('cameraActive', false);
            //  lock screen in landscape mode                    
            _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.LANDSCAPE);
            //  check output directory and create if it doesn't exist
            _this.fileSystem.checkDataDir().subscribe(function (result) { }, function (err) { });
            // stop and restart camera
            var width = window.screen.width;
            var height = window.screen.height;
            if (width < height)
                _a = [height, width], width = _a[0], height = _a[1];
            _this.cameraPreviewOpts.width = width;
            _this.cameraPreviewOpts.height = width / 1.25;
            _this.cameraPreview.stopCamera()
                .then(function () { console.log('Camera stopped'); })
                .catch(function () { console.log('Camera NOT STOPPED'); });
            _this.cameraPreview.startCamera(_this.cameraPreviewOpts)
                .then(function () { _this.cameraPreview.show(); })
                .catch(function (err) {
                _this.noPhoto = true;
                var alert = _this.alertCtrl.create({
                    title: 'Camera error',
                    subTitle: err,
                    buttons: ['Right']
                });
                _this.storageService.setValue('cameraActive', false);
                alert.present();
                _this.noPhoto = false;
                return false;
            });
            //  activate camera timer
            var counter = 0;
            if (!_this.cameraTimer)
                _this.cameraTimer = setInterval(function () {
                    var currentTime = _this.formatterService.getCurrentTimeAsString();
                    counter += 5;
                    if (!_this.noPhoto &&
                        _this.storageService.getValue('cameraActive') &&
                        ((currentTime == _this.nextTake() && _this.lastTake != currentTime) ||
                            (_this.storageService.storage['photoInterval'] > 0 && counter % _this.storageService.storage['photoInterval'] == 0))) {
                        _this.lastTake = currentTime;
                        _this.takePhoto();
                        counter = 0;
                    }
                }, 5000);
            // get free space on device
            _this.fileSystem.getFreeSpace().subscribe(function (result) { return _this.freeSpace = result * 1024; });
            _this.noPhoto = false;
            var _a;
        });
    };
    CameraViewPage.prototype.takePhoto = function () {
        var _this = this;
        console.log('Attempting to take photo...');
        if (this.noPhoto)
            return false;
        this.noPhoto = true;
        this.cameraPreview.takePicture(this.imageOptions).then(function (imageData) {
            _this.fileSystem.saveFile(_this.formatterService.dateAsFilename() + '.jpg', _this.formatterService.base64toBlob(imageData[0], 'image/jpeg')).subscribe(function (success) {
                _this.imagesTaken++;
                _this.noPhoto = false;
            }, function (err) {
                _this.noPhoto = false;
            });
        }, function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Unable to take photo.',
                buttons: ['Damn!']
            });
            alert.present();
            _this.noPhoto = false;
        });
    };
    CameraViewPage.prototype.nextTake = function () {
        var times = this.storageService.getValue('times');
        if (!times || times.length <= 0)
            return 'No time set';
        //  get current hour
        var currentTime = this.formatterService.getCurrentTimeAsString();
        var nextTime = '';
        for (var t in this.storageService.storage['times']) {
            if (this.storageService.storage['times'][t] >= currentTime &&
                this.storageService.storage['times'][t] != this.lastTake &&
                nextTime == '')
                nextTime = this.storageService.storage['times'][t];
        }
        if (nextTime == '')
            nextTime = this.storageService.storage['times'][0];
        return nextTime;
    };
    CameraViewPage.prototype.hidePanel = function (event) {
        if (event.direction == 4)
            this.floaterState = 'inside';
        if (event.direction == 2)
            this.floaterState = 'outside';
    };
    CameraViewPage.prototype.activateCamera = function (value) {
        if (value && ((!this.storageService.storage['photoInterval'] ||
            this.storageService.storage['photoInterval'] == 0) &&
            (!this.storageService.storage['times'] ||
                this.storageService.storage['times'].length <= 0))) {
            var alert_2 = this.alertCtrl.create({
                title: 'No time or interval specified!',
                subTitle: 'Please set some time or an interval on the Settings page.',
                buttons: ['Right']
            });
            alert_2.present();
        }
        this.storageService.setValue('cameraActive', value);
    };
    CameraViewPage.prototype.getInterval = function () {
        if (this.storageService.storage['photoIntervalText'])
            return this.storageService.storage['photoIntervalText'];
        else
            return 'Not set';
    };
    return CameraViewPage;
}());
CameraViewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-camera-view',template:/*ion-inline-start:"F:\Cordova\timelapser\src\pages\camera-view\camera-view.html"*/'<ion-content class="background-color-transparent" padding id="page2">\n\n    <ion-card id="floater" [@floaterState]="floaterState" (swipe)="hidePanel($event)">\n        <ion-item>\n            <ion-label>\n                Camera active\n            </ion-label>\n            <ion-toggle color="danger" [(ngModel)]="storageService.storage[\'cameraActive\']" (ionChange)="activateCamera($event.value)"></ion-toggle>\n        </ion-item>\n\n        <button \n            [disabled]="noPhoto"\n            ion-button\n            color="positive"\n            block\n            (click)="takePhoto()">\n            <ion-icon name="time" *ngIf="noPhoto"></ion-icon>\n            <ion-icon name="camera" *ngIf="!noPhoto"></ion-icon>\n        </button>\n\n        <div id="infostuff">\n            Images taken: <b>{{ imagesTaken }}</b><br />\n            Last take: <b>{{ lastTake }}</b><br />\n            Next take: <b>{{ nextTake() }}</b><br />\n            Interval: <b>{{ getInterval() }}</b><br />\n            Free space: <b>{{ freeSpace | filesize }}</b><br />\n        </div>\n    </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"F:\Cordova\timelapser\src\pages\camera-view\camera-view.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["j" /* trigger */])('floaterState', [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* state */])('inside', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ left: '20px' })),
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* state */])('outside', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ left: '-240px' })),
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* transition */])('inside <=> outside', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('2s ease-in-out')),
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_preview__["a" /* CameraPreview */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_mode__["a" /* BackgroundMode */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_8__services_filesystem_service__["a" /* FileSystemService */],
        __WEBPACK_IMPORTED_MODULE_5__services_storage_service__["a" /* StorageService */],
        __WEBPACK_IMPORTED_MODULE_7__services_formatter_service__["a" /* FormatterService */]])
], CameraViewPage);

//# sourceMappingURL=camera-view.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_filesystem_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_formatter_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ImagesPage = (function () {
    function ImagesPage(navCtrl, file, fileSystem, loadingController, platform, formatterService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.file = file;
        this.fileSystem = fileSystem;
        this.loadingController = loadingController;
        this.platform = platform;
        this.formatterService = formatterService;
        this.alertCtrl = alertCtrl;
        this.album = [];
    }
    ImagesPage.prototype.deleteImage = function (e, index) {
        var _this = this;
        e.stopPropagation();
        var confirm = this.alertCtrl.create({
            title: 'Delete image',
            message: 'Delete file ' + this.album[index].name + '?',
            buttons: [
                {
                    text: 'No',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.fileSystem.deleteFile(_this.album[index].name).
                            subscribe(function (success) { _this.album.splice(index, 1); }, function (error) { console.log('File ' + _this.album[index].name + ' NOT deleted.'); });
                    }
                }
            ]
        });
        confirm.present();
    };
    ImagesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loader = this.loadingController.create({
            content: "Loading images...",
            dismissOnPageChange: true
        });
        this.loader.present();
        this.album = [];
        this.platform.ready().then(function (readySource) {
            //  check output directory and create if it doesn't exist
            _this.fileSystem.checkDataDir().subscribe(function () {
                //  get file list from /Timelapser
                _this.fileSystem.getDataDir().subscribe(function (result) {
                    var dir = result;
                    dir.forEach(function (element) {
                        if (element['isFile']) {
                            _this.fileSystem.getFile(element['name']).subscribe(function (fileData) {
                                _this.album.push({
                                    name: element['name'],
                                    size: fileData['size'],
                                    modificationTime: fileData['modificationTime'],
                                    nativeURL: element['nativeURL'],
                                });
                                _this.album.sort(function (a, b) {
                                    if (b.name > a.name)
                                        return 1;
                                    if (b.name == a.name)
                                        return 0;
                                    if (b.name < a.name)
                                        return -1;
                                });
                            }, function (error) { console.log(error); });
                        }
                    });
                    _this.loader.dismiss();
                }, function (err) { });
            }, function (err) {
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Unable to create or access data directory.',
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    ImagesPage.prototype.deleteAllImages = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Delete all images',
            message: 'Purge ALL images? Are you sure?',
            buttons: [
                {
                    text: 'No',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.loader = _this.loadingController.create({
                            content: "Deleting all images...",
                            dismissOnPageChange: false
                        });
                        _this.loader.present();
                        _this.album.forEach(function (element) {
                            _this.fileSystem.deleteFile(element.name).subscribe(function (success) { }, function (error) { });
                        });
                        _this.album = [];
                        _this.loader.dismiss();
                    }
                }
            ]
        });
        confirm.present();
    };
    ImagesPage.prototype.getNextImage = function (data) {
        var dir = -1;
        if (data.dir == 2)
            dir = 1;
        var index = -1;
        for (var t in this.album)
            if (this.album[t]['nativeURL'] == data.src)
                index = Number(t);
        if (index == -1)
            return false;
        index += dir;
        if (index < 0 || index > this.album.length - 1)
            return false;
        this.photoViewer.showPicture(this.album[index]['nativeURL'], this.album[index]['name']);
        console.log('Data request: ', data);
    };
    return ImagesPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('photoViewer'),
    __metadata("design:type", Object)
], ImagesPage.prototype, "photoViewer", void 0);
ImagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-images',template:/*ion-inline-start:"F:\Cordova\timelapser\src\pages\images\images.html"*/'<ion-content padding id="page3" overflow-scroll="true">\n\n    <photoviewer #photoViewer (getNextImage)="getNextImage($event)"></photoviewer>\n\n    <ion-card>\n        <ion-card-content>\n            {{ album?.length }} images\n        </ion-card-content>\n    </ion-card>\n\n    <ion-list>\n        <ion-item *ngFor="let image of album; let i=index"\n                  (click)="photoViewer.showPicture(image.nativeURL, image.name);">\n            <p>\n                <b>{{ image.name }}</b><br />\n                {{ image.size | filesize }}<br />\n                {{ image.modificationTime }}<br />\n            </p>\n            <ion-icon name="close" item-right (click)="deleteImage($event, i)"></ion-icon>\n        </ion-item>\n    </ion-list>\n\n    <ion-card>\n        <ion-card-content>\n            <button id="images-button4" ion-button color="assertive" block icon-left (click)="deleteAllImages()">\n                    <ion-icon name="trash" (click)="deleteAllImages()"></ion-icon>\n                Delete all images\n            </button>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"F:\Cordova\timelapser\src\pages\images\images.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_3__services_filesystem_service__["a" /* FileSystemService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__services_formatter_service__["a" /* FormatterService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ImagesPage);

//# sourceMappingURL=images.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsPage = (function () {
    // this tells the tabs component which Pages should be each tab's root Page
    function SettingsPage(navCtrl, alertCtrl, actionSheetCtrl, storageService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storageService = storageService;
        this.photoIntervals = [
            { type: 'radio', label: 'Not set', value: '0' },
            { type: 'radio', label: '5 seconds', value: '5' },
            { type: 'radio', label: '10 seconds', value: '10' },
            { type: 'radio', label: '15 seconds', value: '15' },
            { type: 'radio', label: '20 seconds', value: '20' },
            { type: 'radio', label: '30 seconds', value: '30' },
            { type: 'radio', label: '45 seconds', value: '45' },
            { type: 'radio', label: '1 minute', value: '60' },
            { type: 'radio', label: '90 seconds', value: '90' },
            { type: 'radio', label: '2 minutes', value: '120' },
            { type: 'radio', label: '3 minutes', value: '180' },
            { type: 'radio', label: '5 minutes', value: '300' },
            { type: 'radio', label: '10 minutes', value: '600' },
            { type: 'radio', label: '15 minutes', value: '900' },
            { type: 'radio', label: '20 minutes', value: '1200' },
            { type: 'radio', label: '30 minutes', value: '1800' },
            { type: 'radio', label: '45 minutes', value: '2700' },
            { type: 'radio', label: '1 hour', value: '3600' },
            { type: 'radio', label: '90 minutes', value: '5400' },
            { type: 'radio', label: '2 hours', value: '7200' },
            { type: 'radio', label: '3 hours', value: '10800' },
            { type: 'radio', label: '6 hours', value: '21600' }
        ];
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        if (!this.storageService.getValue('photoInterval')) {
            this.storageService.setValue('photoInterval', Number(this.photoIntervals[0].value));
            this.storageService.setValue('photoIntervalText', this.photoIntervals[0].label);
        }
    };
    SettingsPage.prototype.deleteTime = function (i) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Delete time',
            message: 'Remove time ' + this.storageService.storage['times'][i] + '?',
            buttons: [
                {
                    text: 'No',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.storageService.storage['times'].splice(i, 1);
                    }
                }
            ]
        });
        confirm.present();
    };
    SettingsPage.prototype.addTime = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) { }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        if (!_this.storageService.getValue('times'))
                            _this.storageService.setValue('times', []);
                        if (data.newtime != '')
                            _this.storageService.storage['times'].push(data.newtime);
                        _this.storageService.storage['times'].sort();
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.setPhotoInterval = function () {
        var _this = this;
        var intervalSelector = this.alertCtrl.create({
            title: 'Set interval',
            inputs: this.photoIntervals,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Set',
                    handler: function (data) {
                        _this.storageService.setValue('photoInterval', Number(data));
                        for (var t in _this.photoIntervals)
                            if (_this.photoIntervals[t].value == data) {
                                _this.storageService.setValue('photoIntervalText', _this.photoIntervals[t].label);
                            }
                    }
                }
            ]
        });
        intervalSelector.present();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"F:\Cordova\timelapser\src\pages\settings\settings.html"*/'<ion-content padding id="page4">\n\n    <ion-card>\n        <ion-card-header>\n            Take a photo at the following times every day:\n        </ion-card-header>\n        <ion-card-content>\n\n            <ion-list id="settings-list4" *ngIf="storageService.storage?.times?.length > 0">\n                <ion-item color="none" id="settings-list-item16" *ngFor="let time of storageService.storage.times; let i=index">\n                          {{ time }}\n                          <ion-icon name="close" item-right (click)="deleteTime(i)"></ion-icon>\n                </ion-item>\n            </ion-list>\n            <ion-list id="settings-list4" *ngIf="storageService.storage?.times?.length <= 0">\n                      <ion-item color="none" id="settings-list-item16">\n                    <ion-icon name="timer" item-left></ion-icon>\n                    No times defined\n                </ion-item>\n            </ion-list>\n            <button id="settings-button1" ion-button color="positive" block (click)="addTime()">Add new time</button>\n        </ion-card-content>\n    </ion-card>\n\n    <!----------------------------------------------------------------------------------------------------------->\n\n    <ion-card>\n        <ion-card-header>\n            Take photos infinitely at the following interval:\n        </ion-card-header>\n        <ion-card-content>\n\n            <ion-list>\n                <ion-item color="none" id="settings-list-item16">\n                    <ion-icon name="timer" item-left></ion-icon>\n                    {{ this.storageService.getValue(\'photoIntervalText\') }}\n                </ion-item>\n            </ion-list>\n\n            <button ion-button color="positive" block (click)="setPhotoInterval()">Set interval</button>\n        </ion-card-content>\n    </ion-card>\n    \n    <!----------------------------------------------------------------------------------------------------------->\n\n    <ion-card>\n        <ion-card-header>\n            Play sound when taking photo:\n        </ion-card-header>\n        <ion-card-content>\n            \n        </ion-card-content>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"F:\Cordova\timelapser\src\pages\settings\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_19" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera_preview__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_background_mode__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_camera_view_camera_view__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_images_images__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_main_tabs_main_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_storage_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_filesystem_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_formatter_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_photoviewer_photoviewer_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_formatter_pipe__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_camera_view_camera_view__["a" /* CameraViewPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_images_images__["a" /* ImagesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_main_tabs_main_tabs__["a" /* MainTabsPage */],
            __WEBPACK_IMPORTED_MODULE_18__components_photoviewer_photoviewer_component__["a" /* PhotoViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pipes_formatter_pipe__["c" /* FormatNumberPipe */],
            __WEBPACK_IMPORTED_MODULE_19__pipes_formatter_pipe__["d" /* FormatSecondsPipe */],
            __WEBPACK_IMPORTED_MODULE_19__pipes_formatter_pipe__["a" /* ChopStringPipe */],
            __WEBPACK_IMPORTED_MODULE_19__pipes_formatter_pipe__["b" /* FilesizePipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_camera_view_camera_view__["a" /* CameraViewPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_images_images__["a" /* ImagesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_main_tabs_main_tabs__["a" /* MainTabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_17__services_formatter_service__["a" /* FormatterService */],
            __WEBPACK_IMPORTED_MODULE_16__services_filesystem_service__["a" /* FileSystemService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera_preview__["a" /* CameraPreview */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_background_mode__["a" /* BackgroundMode */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_tabs_main_tabs__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_main_tabs_main_tabs__["a" /* MainTabsPage */];
        platform.ready().then(function () {
            console.log('Platform ready to go');
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\Cordova\timelapser\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"F:\Cordova\timelapser\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_screen_orientation__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//  Turn on enableProdMode() in main.ts to use this component!
//  Images won't load with the --livereload parameter!
var PhotoViewerComponent = (function () {
    function PhotoViewerComponent(_photoviewer, screenOrientation) {
        this._photoviewer = _photoviewer;
        this.screenOrientation = screenOrientation;
        this.show = false;
        this.imgClass = 'img-portrait';
        this.getNextImage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */];
    }
    PhotoViewerComponent.prototype.showPicture = function (src, label) {
        if (src) {
            this.src = src;
            this.label = label;
            this.show = true;
        }
        else
            this.show = false;
    };
    PhotoViewerComponent.prototype.setImageClass = function () {
        if (this.screenOrientation.type.indexOf('portrait') != -1)
            this.imgClass = 'img-portrait';
        else
            this.imgClass = 'img-landscape';
    };
    PhotoViewerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.setImageClass();
        this.screenOrientation.onChange().subscribe(function () {
            _this.setImageClass();
        });
        this._photoviewer.createEmbeddedView(this.photoViewer);
    };
    PhotoViewerComponent.prototype.nextImage = function (event) {
        this.getNextImage.emit({ src: this.src, dir: event.direction });
    };
    return PhotoViewerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('photoviewer'),
    __metadata("design:type", Object)
], PhotoViewerComponent.prototype, "photoViewer", void 0);
PhotoViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'photoviewer',template:/*ion-inline-start:"F:\Cordova\timelapser\src\components\photoviewer\photoviewer.component.html"*/'<ng-template #photoviewer>\n    <div id="container" *ngIf="show" (click)="show=false" (swipe)="nextImage($event)">\n        <div id="label" *ngIf="label">{{ label }}</div>\n        <img [src]="src" [class]="imgClass" />\n    </div>\n</ng-template>'/*ion-inline-end:"F:\Cordova\timelapser\src\components\photoviewer\photoviewer.component.html"*/,
        outputs: ['getNextImage']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
], PhotoViewerComponent);

//# sourceMappingURL=photoviewer.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FormatNumberPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FormatSecondsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChopStringPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FilesizePipe; });
/* unused harmony export CdvPhotoLibraryPipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_formatter_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//  --------------------------------------------------------------------------------------
//  Displays a long number nicely formatted by decimal groups
var FormatNumberPipe = (function () {
    function FormatNumberPipe() {
    }
    FormatNumberPipe.prototype.transform = function (value, thousandSeparator, decimalSeparator) {
        if (thousandSeparator === void 0) { thousandSeparator = ','; }
        if (decimalSeparator === void 0) { decimalSeparator = '.'; }
        var _formatterService = new __WEBPACK_IMPORTED_MODULE_1__services_formatter_service__["a" /* FormatterService */]();
        return _formatterService.formatNumber(value, thousandSeparator, decimalSeparator);
    };
    return FormatNumberPipe;
}());
FormatNumberPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'formatNumber' })
], FormatNumberPipe);

//  --------------------------------------------------------------------------------------
//  Pipe to display seconds formatted as time
var FormatSecondsPipe = (function () {
    function FormatSecondsPipe() {
    }
    FormatSecondsPipe.prototype.transform = function (value) {
        var _formatterService = new __WEBPACK_IMPORTED_MODULE_1__services_formatter_service__["a" /* FormatterService */]();
        var time = _formatterService.calculateTime(value);
        if (!time)
            return ('NaN');
        if (time['d'])
            return (time['d'] + 'd ' + time.hr + ':' + time.min + ':' + time.sec + '.' + time.ms);
        else
            return (time.hr + ':' + time.min + ':' + time.sec + '.' + time.ms);
    };
    return FormatSecondsPipe;
}());
FormatSecondsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'formatSeconds' })
], FormatSecondsPipe);

//  --------------------------------------------------------------------------------------
//  Pipe to chop off too long strings
var ChopStringPipe = (function () {
    function ChopStringPipe() {
    }
    ChopStringPipe.prototype.transform = function (value, length) {
        if (value.length <= length)
            return value;
        return value.substr(0, length) + '&hellip;';
    };
    return ChopStringPipe;
}());
ChopStringPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'chopString' })
], ChopStringPipe);

//  --------------------------------------------------------------------------------------
//  Pipe to format a number into filesize string (ie. 12,343.44 MB)
var FilesizePipe = (function () {
    function FilesizePipe() {
    }
    FilesizePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (isNaN(Number(value)))
            return '?';
        var measures = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
        var temp = 0;
        var val = Number(value);
        while (val > temp * 1024) {
            val = val / 1024;
            temp++;
        }
        var _formatterService = new __WEBPACK_IMPORTED_MODULE_1__services_formatter_service__["a" /* FormatterService */]();
        return _formatterService.formatNumber(val) + ' ' + measures[temp];
    };
    return FilesizePipe;
}());
FilesizePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'filesize' })
], FilesizePipe);

//  --------------------------------------------------------------------------------------
//  Bypasses the sanitizer to allow cdvPhotoLibrary links to be used
var CdvPhotoLibraryPipe = (function () {
    function CdvPhotoLibraryPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    CdvPhotoLibraryPipe.prototype.transform = function (url) {
        if (url != null) {
            return url.startsWith('cdvphotolibrary://') ? this.sanitizer.bypassSecurityTrustUrl(url) : url;
        }
    };
    return CdvPhotoLibraryPipe;
}());
CdvPhotoLibraryPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'cdvPhotoLibrary',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], CdvPhotoLibraryPipe);

//# sourceMappingURL=formatter.pipe.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormatterService = (function () {
    function FormatterService() {
    }
    //  Generates hours, minutes, seconds and milliseconds from a number of seconds
    FormatterService.prototype.calculateTime = function (seconds) {
        if (isNaN(seconds))
            return false;
        var d = 0;
        var hr = 0;
        var min = 0;
        var sec = Number(seconds);
        var ms = 0;
        ms = Math.round((sec - Math.floor(sec)) * 1000);
        if (sec >= 60) {
            min = sec / 60;
            sec = sec % 60;
        }
        if (min >= 60) {
            hr = min / 60;
            min = min % 60;
        }
        if (hr >= 24) {
            d = Math.floor(hr / 24);
            hr = hr % 24;
        }
        var strHr = String(Math.round(hr));
        var strMin = String(Math.round(min));
        var strSec = String(Math.round(sec));
        var strMs = String(ms);
        if (hr < 10)
            strHr = '0' + strHr;
        if (min < 10)
            strMin = '0' + strMin;
        if (sec < 10)
            strSec = '0' + strSec;
        if (ms < 10)
            strMs = '0' + strMs;
        if (ms < 100)
            strMs = '0' + strMs;
        var result = { hr: strHr, min: strMin, sec: strSec, ms: strMs };
        result['formatted'] = strHr + ':' + strMin + ':' + strSec + '.' + strMs;
        if (d > 0) {
            result['d'] = d;
            result['formatted'] = d + 'd ' + result['formatted'];
        }
        return (result);
    };
    //  Converts an UTC date string into a Date of local timezone
    FormatterService.prototype.UTCDatetoDate = function (date) {
        if (!(date instanceof Date))
            date = new Date(date);
        var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
        var offset = date.getTimezoneOffset() / 60;
        var hours = date.getHours();
        newDate.setHours(hours - offset);
        return newDate;
    };
    //  Formats a number
    FormatterService.prototype.formatNumber = function (value, thousandSeparator, decimalSeparator) {
        if (thousandSeparator === void 0) { thousandSeparator = ','; }
        if (decimalSeparator === void 0) { decimalSeparator = '.'; }
        if (isNaN(value))
            return false;
        var base = value > 0 ? String(Math.floor(Number(value))) : String(Math.ceil(Number(value)));
        var decimals = '';
        if (String(value).lastIndexOf('.') != -1)
            decimals = String(value).substr(String(value).lastIndexOf('.'), String(value).length);
        decimals = decimals.replace(/./, decimalSeparator);
        if (decimals.length > 3)
            decimals = decimals.substr(0, 3);
        var output = '';
        var counter = 0;
        for (var t = base.length - 1; t >= 0; t--) {
            counter++;
            output = base[t] + output;
            if (counter % 3 == 0 && (t > 0 && base[t - 1] != '-'))
                output = thousandSeparator + output;
        }
        return output + decimals;
    };
    //  Converts a base64 stream to a blob
    FormatterService.prototype.base64toBlob = function (base64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 1024;
        var byteCharacters = atob(base64Data);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);
        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min(begin + sliceSize, bytesLength);
            var bytes = new Array(end - begin);
            for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, { type: contentType });
    };
    //  Get current time as string
    FormatterService.prototype.getCurrentTimeAsString = function () {
        var date = new Date();
        var hourNow = String(date.getHours());
        if (Number(hourNow) < 10)
            hourNow = '0' + hourNow;
        var minuteNow = String(date.getMinutes());
        if (Number(minuteNow) < 10)
            minuteNow = '0' + minuteNow;
        var currentTime = hourNow + ':' + minuteNow;
        return currentTime;
    };
    //  Returns the current date formatted for filenames
    FormatterService.prototype.dateAsFilename = function (time, separator) {
        if (time === void 0) { time = true; }
        if (separator === void 0) { separator = '_'; }
        var now = new Date();
        var filename = String(now.getFullYear());
        var temp = String(now.getMonth() + 1);
        if (temp.length == 1)
            temp = '0' + temp;
        filename += temp;
        temp = String(now.getDate());
        if (temp.length == 1)
            temp = '0' + temp;
        if (time) {
            filename += temp + separator;
            temp = String(now.getHours());
            if (temp.length == 1)
                temp = '0' + temp;
            filename += temp;
            temp = String(now.getMinutes());
            if (temp.length == 1)
                temp = '0' + temp;
            filename += temp;
            temp = String(now.getSeconds());
            if (temp.length == 1)
                temp = '0' + temp;
            filename += temp;
        }
        return filename;
    };
    return FormatterService;
}());
FormatterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], FormatterService);

//# sourceMappingURL=formatter.service.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map