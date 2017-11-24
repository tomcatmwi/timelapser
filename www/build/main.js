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
        this.storage = {
            dimScreen: false,
            cameraActive: false,
            hideTabs: false,
            fileNamingConvention: { label: 'Timestamp', value: '0' },
            uploadGoogle: false,
            fileNamingConventions: [
                { type: 'radio', label: 'Timestamp', value: '0' },
                { type: 'radio', label: 'Number', value: '1' }
            ],
            cameraSettings: {
                focus: { value: 'auto', label: 'Auto' },
                camera: { value: 'rear', label: 'Rear' },
                effect: { value: 'none', label: 'None' },
                flash: { value: 'off', label: 'None' },
                resolution: { value: { width: 1024, height: 768 }, label: '1024×768' },
                quality: 85
            },
            cameraOptions: {
                focus: [
                    { type: 'radio', label: 'Fixed', value: 'fixed' },
                    { type: 'radio', label: 'Automatic', value: 'auto' },
                    { type: 'radio', label: 'Infinity', value: 'infinity' },
                    { type: 'radio', label: 'Macro', value: 'macro' }
                ],
                camera: [
                    { type: 'radio', label: 'Front', value: 'front' },
                    { type: 'radio', label: 'Rear', value: 'rear' },
                ],
                effect: [
                    { type: 'radio', label: 'None', value: 'none' },
                    { type: 'radio', label: 'Aqua', value: 'aqua' },
                    { type: 'radio', label: 'Blackboard', value: 'blackboard' },
                    { type: 'radio', label: 'Mono', value: 'mono' },
                    { type: 'radio', label: 'Negative', value: 'negative' },
                    { type: 'radio', label: 'Posterize', value: 'posterize' },
                    { type: 'radio', label: 'Sepia', value: 'sepia' },
                    { type: 'radio', label: 'Solarize', value: 'solarize' },
                    { type: 'radio', label: 'Whiteboard', value: 'whiteboard' },
                ],
                flash: [
                    { type: 'radio', label: 'Off', value: 'off' },
                    { type: 'radio', label: 'On', value: 'on' },
                    { type: 'radio', label: 'Auto', value: 'auto' },
                    { type: 'radio', label: 'Torch', value: 'torch' }
                ],
                resolution: [
                    { type: 'radio', label: '1024&times768', value: '1024;768' },
                    { type: 'radio', label: '2048&times1024', value: '1024;768' }
                ]
            }
        };
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
    StorageService.prototype.fixCameraSettings = function (id, values) {
        var _this = this;
        for (var t in this.storage.cameraOptions[id]) {
            var found = false;
            values.forEach(function (value) {
                if (_this.storage.cameraOptions[id][t]['value'] == value)
                    found = true;
            });
            if (!found)
                this.storage.cameraOptions[id].splice(t, 1);
        }
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSystemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__ = __webpack_require__(285);
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
    FileSystemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], FileSystemService);
    return FileSystemService;
}());

//# sourceMappingURL=filesystem.service.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera_view_camera_view__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_images__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(209);
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
    MainTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main-tabs',template:/*ion-inline-start:"f:\Cordova\timelapser\src\pages\main-tabs\main-tabs.html"*/'<ion-tabs id="mainTabs-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Camera View" tabIcon="camera" id="mainTabs-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Images" tabIcon="images" id="mainTabs-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="settings" id="mainTabs-tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"f:\Cordova\timelapser\src\pages\main-tabs\main-tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], MainTabsPage);
    return MainTabsPage;
}());

//# sourceMappingURL=main-tabs.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_insomnia__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_preview__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_storage_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_formatter_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_filesystem_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_audio_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__ = __webpack_require__(207);
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
    function CameraViewPage(navCtrl, cameraPreview, screenOrientation, alertCtrl, platform, fileSystem, storageService, audioService, insomnia, diagnostic, formatterService) {
        this.navCtrl = navCtrl;
        this.cameraPreview = cameraPreview;
        this.screenOrientation = screenOrientation;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.fileSystem = fileSystem;
        this.storageService = storageService;
        this.audioService = audioService;
        this.insomnia = insomnia;
        this.diagnostic = diagnostic;
        this.formatterService = formatterService;
        this.panelHidden = false;
        this.noPhoto = true;
        this.floaterState = 'inside';
        this.imagesTaken = 0;
        this.lastTake = 'None';
    }
    CameraViewPage.prototype.fatalError = function (message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: message,
            buttons: [{
                    text: 'Quit',
                    handler: function () { _this.platform.exitApp(); }
                }]
        });
        alert.present();
    };
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
        this.cameraPreview.stopCamera()
            .then(function () { console.log('Camera stopped'); }, function (err) { console.log('Camera NOT stopped, error: ', err); });
    };
    CameraViewPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            new Promise(function (resolve, reject) {
                //  ----------------------------------------------------------------
                window['cordova']['plugins']['diagnostic'].isCameraAuthorized(function (result) {
                    console.log('Camera authorization state: ', result);
                    if (!result) {
                        _this.diagnostic.requestCameraAuthorization(true)
                            .then(function (result) {
                            if (result == 'GRANTED')
                                resolve();
                            else
                                reject('Authorization denied - the app can\'t run!');
                        }, function (error) { return reject(error); });
                    }
                    else
                        resolve(true);
                }, function (error) { return reject(error); }, true);
            }).then(function (success) { return _this.initialize(); }, function (error) { return _this.fatalError(error); }).catch(function (error) { return _this.fatalError(error); });
        });
    };
    CameraViewPage.prototype.initialize = function () {
        var _this = this;
        this.storageService.setValue('cameraActive', false);
        //  lock screen in landscape mode
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        //  check output directory and create if it doesn't exist
        this.fileSystem.checkDataDir().subscribe(function (result) { }, function (err) { });
        var cameraSettings = this.storageService.storage.cameraSettings;
        var cameraPreviewOpts = {
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
        };
        // stop and restart camera
        var width = window.screen.width;
        var height = window.screen.height;
        if (width < height)
            _a = [height, width], width = _a[0], height = _a[1];
        cameraPreviewOpts.width = width;
        cameraPreviewOpts.height = width / 1.25;
        new Promise(function (resolve, reject) {
            _this.cameraPreview.startCamera(cameraPreviewOpts).then(function () { console.log('Camera init OK'); }, function (error) {
                _this.noPhoto = true;
                var alert = _this.alertCtrl.create({
                    title: 'Camera error',
                    subTitle: error,
                    buttons: ['Right']
                });
                alert.present();
                _this.storageService.setValue('cameraActive', false);
            })
                .then(function () {
                _this.cameraPreview.show().then(function () {
                    setTimeout(function () { resolve(); }, 1000);
                    console.log('Camera is showing OK');
                }, function (error) {
                    _this.noPhoto = true;
                    var alert = _this.alertCtrl.create({
                        title: 'Camera error',
                        subTitle: error,
                        buttons: ['Right']
                    });
                    alert.present();
                    _this.storageService.setValue('cameraActive', false);
                });
            });
        })
            .then(function () {
            _this.cameraPreview.getSupportedFlashModes().then(function (data) {
                if (data.indexOf(cameraSettings.flash.value) != -1)
                    _this.cameraPreview.setFlashMode(cameraSettings.flash.value).then(function () { return console.log('Flash setting OK'); }, function (error) {
                        console.log('Flash: ', error);
                        var alert = _this.alertCtrl.create({
                            title: 'Error',
                            subTitle: 'The current flash setting is not supported on this device.',
                            buttons: ['Right']
                        });
                        alert.present();
                    });
            }, function (error) {
                console.log('Flash error: ', error);
            });
        })
            .then(function () {
            _this.cameraPreview.getSupportedFocusModes().then(function (data) {
                if (data.indexOf(cameraSettings.focus.value) != -1)
                    _this.cameraPreview.setFocusMode(cameraSettings.focus.value).then(function () { return console.log('Focus setting OK'); }, function (error) {
                        console.log('Focus error: ', error);
                        var alert = _this.alertCtrl.create({
                            title: 'Error',
                            subTitle: 'The current focus setting is not supported on this device.',
                            buttons: ['Right']
                        });
                        alert.present();
                    });
            }, function (error) {
                console.log('Focus error: ', error);
            });
        })
            .then(function () {
            _this.cameraPreview.setColorEffect(cameraSettings.effect.value).then(function () { return console.log('Effect setting OK'); }, function (error) {
                console.log('Effect setting error: ', error);
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'This picture effect is not supported on this device.',
                    buttons: ['Right']
                });
                alert.present();
            });
        })
            .then(function () {
            _this.cameraPreview.getSupportedPictureSizes().then(function (data) {
                _this.storageService.storage.cameraOptions.resolution = [];
                data.forEach(function (element) {
                    _this.storageService.storage.cameraOptions.resolution.push({
                        type: 'radio',
                        label: element.width + '×' + element.height,
                        value: element
                    });
                });
            });
        });
        //  activate camera timer
        var counter = 0;
        if (!this.cameraTimer)
            this.cameraTimer = setInterval(function () {
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
        this.fileSystem.getFreeSpace().subscribe(function (result) { return _this.freeSpace = result * 1024; });
        this.noPhoto = false;
        var _a;
    };
    CameraViewPage.prototype.takePhoto = function () {
        var _this = this;
        if (this.noPhoto)
            return false;
        this.noPhoto = true;
        this.cameraPreview.takePicture(this.imageOptions).then(function (imageData) {
            var filename = _this.formatterService.dateAsFilename() + '.jpg';
            if (_this.storageService.storage.fileNamingConvention.value == '1') {
                filename = String(_this.imagesTaken) + '.jpg';
                while (filename.length < 12)
                    filename = '0' + filename;
            }
            _this.fileSystem.saveFile(filename, _this.formatterService.base64toBlob(imageData[0], 'image/jpeg')).subscribe(function (success) {
                _this.imagesTaken++;
                _this.noPhoto = false;
            }, function (err) {
                _this.noPhoto = false;
                _this.audioService.playSound('error');
            });
        }, function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Unable to take photo.',
                buttons: ['Damn!']
            });
            alert.present();
            _this.audioService.playSound('error');
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
        var _this = this;
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
        this.tabBarElement = document.querySelector('#mainTabs-tabs1 .tabbar');
        if (value) {
            this.insomnia.keepAwake().then(function () { return _this.storageService.setValue('cameraActive', true); }, function (error) { return console.log('Unable to turn on Insomnia: ', error); });
        }
        else {
            this.insomnia.allowSleepAgain().then(function () { return _this.storageService.setValue('cameraActive', false); }, function (error) { return console.log('Unable to turn off Insomnia: ', error); });
        }
    };
    CameraViewPage.prototype.getInterval = function () {
        if (this.storageService.storage['photoIntervalText'])
            return this.storageService.storage['photoIntervalText'];
        else
            return 'Not set';
    };
    CameraViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-camera-view',template:/*ion-inline-start:"f:\Cordova\timelapser\src\pages\camera-view\camera-view.html"*/'<ion-content class="background-color-transparent" padding id="page2">\n    <dimmer [show]="storageService.storage[\'cameraActive\'] && storageService.storage[\'dimCamera\']"></dimmer>\n\n    <ion-card id="floater" [@floaterState]="floaterState" (swipe)="hidePanel($event)">\n        <ion-item>\n            <ion-label>\n                Camera active\n            </ion-label>\n            <ion-toggle color="danger" [(ngModel)]="storageService.storage[\'cameraActive\']" (ionChange)="activateCamera($event.value)"></ion-toggle>\n        </ion-item>\n\n        <button \n            [disabled]="noPhoto"\n            ion-button\n            color="positive"\n            block\n            (click)="takePhoto()">\n            <ion-icon name="time" *ngIf="noPhoto"></ion-icon>\n            <ion-icon name="camera" *ngIf="!noPhoto"></ion-icon>\n        </button>\n\n        <div id="infostuff">\n            Images taken: <b>{{ imagesTaken }}</b><br />\n            Last take: <b>{{ lastTake }}</b><br />\n            Next take: <b>{{ nextTake() }}</b><br />\n            Interval: <b>{{ getInterval() }}</b><br />\n            Free space: <b>{{ freeSpace | filesize }}</b><br />\n        </div>\n    </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"f:\Cordova\timelapser\src\pages\camera-view\camera-view.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["j" /* trigger */])('floaterState', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* state */])('inside', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ left: '20px' })),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* state */])('outside', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ left: '-240px' })),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* transition */])('inside <=> outside', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('70ms ease-out')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_preview__["a" /* CameraPreview */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__services_filesystem_service__["a" /* FileSystemService */],
            __WEBPACK_IMPORTED_MODULE_5__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_9__services_audio_service__["a" /* AudioService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_insomnia__["a" /* Insomnia */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_7__services_formatter_service__["a" /* FormatterService */]])
    ], CameraViewPage);
    return CameraViewPage;
}());

//# sourceMappingURL=camera-view.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_audio__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AudioService = (function () {
    function AudioService(nativeAudio) {
        this.nativeAudio = nativeAudio;
        this.sounds = [
            { id: 'shutter', filename: 'assets/sound/shutter.wav' },
            { id: 'beep', filename: 'assets/sound/beep.wav' },
            { id: 'error', filename: 'assets/sound/buzzer.wav' },
        ];
    }
    AudioService.prototype.playSound = function (id) {
        var _this = this;
        for (var t in this.sounds)
            if (this.sounds[t].id == id)
                this.nativeAudio.preloadSimple(id, this.sounds[t].filename).then(function () {
                    _this.nativeAudio.play(id, function () {
                        _this.nativeAudio.unload(id).then(function () { }, function (err) { console.log('Error unloading sound "' + id + '" from memory: ', err); });
                    });
                }, function (err) { console.log('Unable to load sound "' + id + '": ', err); });
    };
    AudioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], AudioService);
    return AudioService;
}());

//# sourceMappingURL=audio.service.js.map

/***/ }),

/***/ 208:
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('photoViewer'),
        __metadata("design:type", Object)
    ], ImagesPage.prototype, "photoViewer", void 0);
    ImagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-images',template:/*ion-inline-start:"f:\Cordova\timelapser\src\pages\images\images.html"*/'<ion-content padding id="page3" overflow-scroll="true">\n\n    <photoviewer #photoViewer (getNextImage)="getNextImage($event)"></photoviewer>\n\n\n    <ion-card *ngIf="album.length > 0">\n        <ion-card-content>\n            <button id="images-button4" ion-button color="assertive" block icon-left (click)="deleteAllImages()">\n                    <ion-icon name="trash" (click)="deleteAllImages()"></ion-icon>\n                Delete all images\n            </button>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-list>\n        <ion-item *ngFor="let image of album; let i=index"\n                  (click)="photoViewer.showPicture(image.nativeURL, image.name);">\n            <p>\n                <b>{{ image.name }}</b><br />\n                {{ image.size | filesize }}<br />\n                {{ image.modificationTime }}<br />\n            </p>\n            <ion-icon name="close" item-right (click)="deleteImage($event, i)"></ion-icon>\n        </ion-item>\n    </ion-list>\n    \n    <ion-card>\n        <ion-card-content center *ngIf="album.length > 0">\n            Total: {{ album?.length }} images\n        </ion-card-content>\n        <ion-card-content center *ngIf="album.length <= 0">\n            No images\n        </ion-card-content>\n    </ion-card>\n    \n</ion-content>'/*ion-inline-end:"f:\Cordova\timelapser\src\pages\images\images.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3__services_filesystem_service__["a" /* FileSystemService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__services_formatter_service__["a" /* FormatterService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ImagesPage);
    return ImagesPage;
}());

//# sourceMappingURL=images.js.map

/***/ }),

/***/ 209:
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
        this.soundOptions = [
            { type: 'radio', label: 'No sound', value: '' },
            { type: 'radio', label: 'Camera shutter', value: 'shutter.wav' },
            { type: 'radio', label: 'Beep', value: 'beep.wav' }
        ];
        this.currentSound = 'No sound';
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        //  set photo intervals
        if (!this.storageService.getValue('photoInterval')) {
            this.storageService.setValue('photoInterval', Number(this.photoIntervals[0].value));
            this.storageService.setValue('photoIntervalText', this.photoIntervals[0].label);
        }
        //  set shutter sound - not currently used
        if (!localStorage.getItem('playSound'))
            localStorage.setItem('playSound', 'No sound');
        this.currentSound = localStorage.getItem('playSoundLabel');
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
    SettingsPage.prototype.setSound = function () {
        var _this = this;
        var intervalSelector = this.alertCtrl.create({
            title: 'Set sound',
            inputs: this.soundOptions,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Set',
                    handler: function (data) {
                        localStorage.setItem('playSound', data);
                        for (var t in _this.soundOptions)
                            if (_this.soundOptions[t].value == data)
                                localStorage.setItem('playSoundLabel', _this.soundOptions[t].label);
                        _this.currentSound = localStorage.getItem('playSoundLabel');
                    }
                }
            ]
        });
        intervalSelector.present();
    };
    SettingsPage.prototype.setValue = function (label, title) {
        var _this = this;
        var selector = this.alertCtrl.create({
            title: title,
            inputs: this.storageService.storage.cameraOptions[label],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Set',
                    handler: function (data) {
                        for (var t in _this.storageService.storage.cameraOptions[label]) {
                            if (_this.storageService.storage.cameraOptions[label][t].value == data)
                                _this.storageService.storage.cameraSettings[label] = {
                                    'label': _this.storageService.storage.cameraOptions[label][t].label,
                                    'value': data
                                };
                        }
                    }
                }
            ]
        });
        selector.present();
    };
    SettingsPage.prototype.setResolution = function () {
        var _this = this;
        var selector = this.alertCtrl.create({
            title: 'Set JPG resolution',
            inputs: this.storageService.storage.cameraOptions['resolution'],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Set',
                    handler: function (data) {
                        _this.storageService.storage.cameraSettings.resolution = data;
                    }
                }
            ]
        });
        selector.present();
    };
    SettingsPage.prototype.setImageQuality = function () {
        var _this = this;
        var selector = this.alertCtrl.create({
            title: 'Set JPG quality',
            inputs: [
                {
                    name: 'quality',
                    type: 'number',
                    value: String(this.storageService.storage.cameraSettings.quality)
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Set',
                    handler: function (data) {
                        _this.storageService.storage.cameraSettings.quality = Number(data);
                    }
                }
            ]
        });
        selector.present();
    };
    SettingsPage.prototype.setFileNamingConvention = function () {
        var _this = this;
        var selector = this.alertCtrl.create({
            title: 'File naming',
            inputs: this.storageService.storage.fileNamingConventions,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Set',
                    handler: function (data) {
                        for (var t in _this.storageService.storage.fileNamingConventions)
                            if (_this.storageService.storage.fileNamingConventions[t].value == data)
                                _this.storageService.storage.fileNamingConvention = _this.storageService.storage.fileNamingConventions[t];
                    }
                }
            ]
        });
        selector.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"f:\Cordova\timelapser\src\pages\settings\settings.html"*/'<ion-content padding id="page4">\n\n    <ion-card>\n        <ion-card-content>\n            <p>Take a photo at the following times every day:</p>\n            <ion-list id="settings-list4" *ngIf="storageService.storage?.times?.length > 0">\n                <ion-item color="none" id="settings-list-item16" *ngFor="let time of storageService.storage.times; let i=index">\n                          {{ time }}\n                          <ion-icon name="close" item-right (click)="deleteTime(i)"></ion-icon>\n                </ion-item>\n            </ion-list>\n            <ion-list id="settings-list4" *ngIf="storageService.storage?.times?.length <= 0">\n                <ion-item color="none" id="settings-list-item16">\n                    <ion-icon name="timer" item-left></ion-icon>\n                    No times defined\n                </ion-item>\n            </ion-list>\n            <button id="settings-button1" ion-button color="positive" block (click)="addTime()">Add new time</button>\n        </ion-card-content>\n    </ion-card>\n\n    <!----------------------------------------------------------------------------------------------------------->\n\n    <ion-card>\n        <ion-card-content>\n            <p>Take photos infinitely at the following interval:</p>\n            <ion-list>\n                <ion-item color="none" id="settings-list-item16" (click)="setPhotoInterval()">\n                    <ion-icon name="timer" item-left></ion-icon>\n                    {{ this.storageService.getValue(\'photoIntervalText\') }}\n                    <ion-icon name="ios-arrow-forward" item-right></ion-icon>\n                </ion-item>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n    \n    <!----------------------------------------------------------------------------------------------------------->\n\n    <ion-card>\n        <ion-card-content>\n            <p>File naming convention:</p>\n            <ion-list>\n                <ion-item color="none" id="settings-list-item16" (click)="setFileNamingConvention()">\n                    {{ this.storageService.storage?.fileNamingConvention?.label }}\n                    <ion-icon name="ios-arrow-forward" item-right></ion-icon>\n                </ion-item>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n\n    <!----------------------------------------------------------------------------------------------------------->\n\n    <ion-card>\n        <ion-card-content>\n        <ion-item>\n            <ion-label>\n            Turn off screen\n            </ion-label>\n            <ion-toggle [(ngModel)]="storageService.storage[\'dimCamera\']"></ion-toggle>\n        </ion-item>\n        </ion-card-content>\n    </ion-card>\n    \n    <!----------------------------------------------------------------------------------------------------------->\n    \n<!-- \n\n    DEACTIVATED until CameraPreview supports disabling the default shutter sound!\n\n    <ion-card>\n        <ion-card-content>\n            <p>Play sound when taking photo:</p>\n            <ion-list>\n                <ion-item color="none" id="settings-list-item16">\n                    <ion-icon name="volume-up" item-left (click)="playSound()"></ion-icon>\n                    {{ currentSound }}\n                </ion-item>\n            </ion-list>\n\n            <button ion-button color="positive" block (click)="setSound()">Set sound</button>\n            \n        </ion-card-content>\n    </ion-card>\n-->\n\n    <!----------------------------------------------------------------------------------------------------------->\n\n    <ion-card>\n        <ion-card-content>\n            <p>Camera options</p>\n            <ion-list>\n                <ion-item color="none" (click)="setValue(\'camera\', \'Camera\')">\n                        Camera: {{ storageService?.storage?.cameraSettings?.camera?.label }}\n                        <ion-icon name="ios-arrow-forward" item-right></ion-icon>\n                </ion-item>\n                <ion-item color="none" (click)="setValue(\'flash\', \'Flash mode\')">\n                        Flash: {{ storageService?.storage?.cameraSettings?.flash?.label }}\n                        <ion-icon name="ios-arrow-forward" item-right></ion-icon>\n                </ion-item>\n                <ion-item color="none" (click)="setValue(\'focus\', \'Focus mode\')">\n                        Focus mode: {{ storageService?.storage?.cameraSettings?.focus?.label }}\n                        <ion-icon name="ios-arrow-forward" item-right></ion-icon>\n                </ion-item>\n                <ion-item color="none" (click)="setValue(\'effect\', \'Color effect\')">\n                        Color effect: {{ storageService?.storage?.cameraSettings?.effect?.label }}\n                        <ion-icon name="ios-arrow-forward" item-right></ion-icon>\n                </ion-item>\n                <ion-item color="none" (click)="setValue(\'resolution\', \'Pikture size\')">\n                        Picture size: {{ storageService?.storage?.cameraSettings?.resolution?.value?.width }}&times;{{ storageService?.storage?.cameraSettings?.resolution?.value?.height }}\n                        <ion-icon name="ios-arrow-forward" item-right></ion-icon>\n                </ion-item>\n                <ion-item color="none" (click)="setImageQuality()">\n                        Photo quality: {{ storageService.storage.cameraSettings.quality }}\n                        <ion-icon name="ios-arrow-forward" item-right></ion-icon>\n                </ion-item>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"f:\Cordova\timelapser\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera_preview__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_insomnia__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_camera_view_camera_view__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_images_images__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_main_tabs_main_tabs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_photoviewer_photoviewer_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dimmer_dimmer_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_storage_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_filesystem_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_formatter_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_audio_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_formatter_pipe__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_camera_view_camera_view__["a" /* CameraViewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_images_images__["a" /* ImagesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_main_tabs_main_tabs__["a" /* MainTabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_photoviewer_photoviewer_component__["a" /* PhotoViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_dimmer_dimmer_component__["a" /* DimmerComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_formatter_pipe__["c" /* FormatNumberPipe */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_formatter_pipe__["d" /* FormatSecondsPipe */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_formatter_pipe__["a" /* ChopStringPipe */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_formatter_pipe__["b" /* FilesizePipe */],
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
                __WEBPACK_IMPORTED_MODULE_11__pages_camera_view_camera_view__["a" /* CameraViewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_images_images__["a" /* ImagesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_main_tabs_main_tabs__["a" /* MainTabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__services_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_21__services_formatter_service__["a" /* FormatterService */],
                __WEBPACK_IMPORTED_MODULE_20__services_filesystem_service__["a" /* FileSystemService */],
                __WEBPACK_IMPORTED_MODULE_22__services_audio_service__["a" /* AudioService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera_preview__["a" /* CameraPreview */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_insomnia__["a" /* Insomnia */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__["a" /* NativeAudio */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_tabs_main_tabs__ = __webpack_require__(201);
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
    function MyApp(platform, statusBar, splashScreen, alertCtrl) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_main_tabs_main_tabs__["a" /* MainTabsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            //  remove loader message
            platform.registerBackButtonAction(function () {
                var alert = alertCtrl.create({
                    title: 'Exit',
                    message: 'Do you want to exit Timelapser?',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                alert = null;
                            }
                        },
                        {
                            text: 'Exit',
                            handler: function () {
                                platform.exitApp();
                            }
                        }
                    ]
                });
                alert.present();
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"f:\Cordova\timelapser\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"f:\Cordova\timelapser\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 288:
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
        this.getNextImage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */];
    }
    PhotoViewerComponent.prototype.showPicture = function (src, label) {
        if (src === void 0) { src = null; }
        if (label === void 0) { label = ''; }
        this.tabBarElement = document.querySelector('#mainTabs-tabs1 .tabbar');
        if (src) {
            this.src = src;
            this.label = label;
            this.tabBarElement.style.display = 'none';
            this.show = true;
        }
        else {
            this.tabBarElement.style.display = 'flex';
            this.show = false;
        }
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('photoviewer'),
        __metadata("design:type", Object)
    ], PhotoViewerComponent.prototype, "photoViewer", void 0);
    PhotoViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'photoviewer',template:/*ion-inline-start:"f:\Cordova\timelapser\src\components\photoviewer\photoviewer.component.html"*/'<ng-template #photoviewer>\n    <div id="container" *ngIf="show" (click)="showPicture()" (swipe)="nextImage($event)">\n        <div id="label" *ngIf="label">{{ label }}</div>\n        <img [src]="src" [class]="imgClass" />\n    </div>\n</ng-template>'/*ion-inline-end:"f:\Cordova\timelapser\src\components\photoviewer\photoviewer.component.html"*/,
            outputs: ['getNextImage'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], PhotoViewerComponent);
    return PhotoViewerComponent;
}());

//# sourceMappingURL=photoviewer.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DimmerComponent; });
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

//  Turn on enableProdMode() in main.ts to use this component!
var DimmerComponent = (function () {
    function DimmerComponent(_dimmer, _ref, ngZone) {
        this._dimmer = _dimmer;
        this._ref = _ref;
        this.ngZone = ngZone;
    }
    Object.defineProperty(DimmerComponent.prototype, "show", {
        set: function (show) {
            var _this = this;
            this.tabBarElement = document.querySelector('#mainTabs-tabs1 .tabbar');
            if (show)
                this.tabBarElement.style.display = 'none';
            else
                this.tabBarElement.style.display = 'flex';
            setTimeout(function () {
                _this._show = show;
                _this.ngZone.run(function () { _this._ref.detectChanges(); });
            }, 1500);
        },
        enumerable: true,
        configurable: true
    });
    DimmerComponent.prototype.ngAfterViewInit = function () {
        this._dimmer.createEmbeddedView(this.dimmer);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('dimmer'),
        __metadata("design:type", Object)
    ], DimmerComponent.prototype, "dimmer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DimmerComponent.prototype, "show", null);
    DimmerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'dimmer',template:/*ion-inline-start:"f:\Cordova\timelapser\src\components\dimmer\dimmer.component.html"*/'<ng-template #dimmer>\n    <div id="dimmer-div" class="dimmer" *ngIf="_show" (click)="_show=false">\n    </div>\n</ng-template>'/*ion-inline-end:"f:\Cordova\timelapser\src\components\dimmer\dimmer.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], DimmerComponent);
    return DimmerComponent;
}());

//# sourceMappingURL=dimmer.component.js.map

/***/ }),

/***/ 290:
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
    FormatNumberPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'formatNumber' })
    ], FormatNumberPipe);
    return FormatNumberPipe;
}());

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
    FormatSecondsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'formatSeconds' })
    ], FormatSecondsPipe);
    return FormatSecondsPipe;
}());

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
    ChopStringPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'chopString' })
    ], ChopStringPipe);
    return ChopStringPipe;
}());

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
    FilesizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'filesize' })
    ], FilesizePipe);
    return FilesizePipe;
}());

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
    CdvPhotoLibraryPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'cdvPhotoLibrary',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], CdvPhotoLibraryPipe);
    return CdvPhotoLibraryPipe;
}());

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
    FormatterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FormatterService);
    return FormatterService;
}());

//# sourceMappingURL=formatter.service.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map