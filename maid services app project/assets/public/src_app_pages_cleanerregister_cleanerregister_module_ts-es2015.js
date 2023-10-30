(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_cleanerregister_cleanerregister_module_ts"],{

/***/ 42465:
/*!*************************************************************************!*\
  !*** ./src/app/pages/cleanerregister/cleanerregister-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleanerregisterPageRoutingModule": function() { return /* binding */ CleanerregisterPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cleanerregister_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanerregister.page */ 15738);




const routes = [
    {
        path: '',
        component: _cleanerregister_page__WEBPACK_IMPORTED_MODULE_0__.CleanerregisterPage
    }
];
let CleanerregisterPageRoutingModule = class CleanerregisterPageRoutingModule {
};
CleanerregisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CleanerregisterPageRoutingModule);



/***/ }),

/***/ 68076:
/*!*****************************************************************!*\
  !*** ./src/app/pages/cleanerregister/cleanerregister.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleanerregisterPageModule": function() { return /* binding */ CleanerregisterPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cleanerregister_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanerregister-routing.module */ 42465);
/* harmony import */ var _cleanerregister_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cleanerregister.page */ 15738);







let CleanerregisterPageModule = class CleanerregisterPageModule {
};
CleanerregisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cleanerregister_routing_module__WEBPACK_IMPORTED_MODULE_0__.CleanerregisterPageRoutingModule
        ],
        declarations: [_cleanerregister_page__WEBPACK_IMPORTED_MODULE_1__.CleanerregisterPage]
    })
], CleanerregisterPageModule);



/***/ }),

/***/ 15738:
/*!***************************************************************!*\
  !*** ./src/app/pages/cleanerregister/cleanerregister.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleanerregisterPage": function() { return /* binding */ CleanerregisterPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cleanerregister_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cleanerregister.page.html */ 52902);
/* harmony import */ var _cleanerregister_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cleanerregister.page.scss */ 9466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local.service */ 85298);
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/rest.service */ 43006);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utility.service */ 67278);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/events.service */ 80106);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! onesignal-cordova-plugin */ 14868);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/camera */ 37673);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 39075);














let CleanerregisterPage = class CleanerregisterPage {
    constructor(platform, menu, localService, restService, utilityService, eventsService, router, actionSheetCtrl, toastCtrl, transfer, sanitizer) {
        this.platform = platform;
        this.menu = menu;
        this.localService = localService;
        this.restService = restService;
        this.utilityService = utilityService;
        this.eventsService = eventsService;
        this.router = router;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.transfer = transfer;
        this.sanitizer = sanitizer;
        this.cleaner = {
            name: '',
            email: '',
            phone: '',
            password: '',
            address: '',
            postcode: '',
        };
        this.verification = false;
        this.verificationCode = null;
        this.code = null;
        this.token = null;
        this.lastImage = null;
        this.imageToUpload = null;
        this.ext = null;
        this.cnfpassword = '';
        this.platform.ready().then(() => {
            onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6___default().setAppId(this.utilityService.config.onesignalAppId);
            onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6___default().getDeviceState((stateChanges) => {
                console.log('login: ' + JSON.parse(JSON.stringify(stateChanges)).userId);
                this.token = JSON.parse(JSON.stringify(stateChanges)).userId;
                console.log("this.token", this.token);
            });
        });
    }
    ngOnInit() { }
    user() {
        this.router.navigate(['/signup']);
    }
    login() {
        this.router.navigate(['/cleanerlogin']);
    }
    register() {
        if (this.cleaner.name === '') {
            return this.utilityService.openAlerts('Error', 'Name required.', 'ok');
        }
        if (this.cleaner.email === '') {
            return this.utilityService.openAlerts('Error', 'Email required.', 'ok');
        }
        if (this.cleaner.phone === '') {
            return this.utilityService.openAlerts('Error', 'Phone number required.', 'ok');
        }
        if (this.cleaner.password.length < 5) {
            return this.utilityService.openAlerts('Error', 'Password should be minimum 5 character.', 'ok');
        }
        if (this.cleaner.password !== this.cnfpassword) {
            return this.utilityService.openAlerts('Error', 'Password & confirm password must be same.', 'ok');
        }
        if (this.cleaner.address === '') {
            return this.utilityService.openAlerts('Error', 'Address required.', 'ok');
        }
        if (this.cleaner.postcode === '') {
            return this.utilityService.openAlerts('Error', 'Postcode required.', 'ok');
        }
        // image also required
        if (!this.lastImage) {
            return this.utilityService.openAlerts('Error', 'Profile image required.', 'ok');
        }
        this.cleaner.device = this.getPlatform();
        this.cleaner.token = this.token;
        this.utilityService.loadingOpen('Registering...');
        this.restService.postData('cleaner/register', this.cleaner).subscribe((data) => {
            this.utilityService.loadingClose();
            // now upload image of cleaner silently
            if (this.lastImage != null) {
                this.uploadImage(data.id);
            }
            // verify view
            //this.Verification = true;
            this.verificationCode = data.code;
            //
            this.cleaner = data;
            // no verification required =========
            this.utilityService.openAlerts('Registration Successful', 'You may login now.', 'ok');
            this.router.navigateByUrl('/cleanerlogin');
        }, (err) => {
            this.utilityService.loadingClose();
            if (err.status === 403 && err.error.error.email) {
                return this.utilityService.openAlerts('Error', 'The email has already been taken.', 'ok');
            }
            else if (err.status === 404) {
                return this.utilityService.openAlerts('Error', 'Please enter a valid address & postcode.', 'ok');
            }
            else {
                return this.utilityService.openAlerts('Error', 'Cleaner registration failed, please try again later.', 'ok');
            }
        });
    }
    verify() {
        if (this.cleaner.code === this.verificationCode) {
            // active the cleaner
            this.utilityService.loadingOpen('Verifying...');
            this.restService
                .postData('cleaner/verify', {
                email: this.cleaner.email,
                code: this.verificationCode,
            })
                .subscribe((data) => {
                this.utilityService.loadingClose();
                this.utilityService.openAlerts('Done', 'You can now login.', 'ok');
                this.router.navigateByUrl('/cleanerlogin');
            }, (err) => {
                this.utilityService.loadingClose();
                return this.utilityService.openAlerts('Error', 'Something not right at verification.', 'ok');
            });
        }
        else {
            return this.utilityService.openAlerts('Error', 'Inavalid code entered.', 'ok');
        }
    }
    getPlatform() {
        if (this.platform.is('ios') || this.platform.is('ipad')) {
            return 'ios';
        }
        else if (this.platform.is('android')) {
            return 'android';
        }
        else {
            return 'other';
        }
    }
    terms() {
        this.router.navigate(['/terms']);
    }
    // image uploading section =========================
    takePicture() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // Get the data of an image
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.Camera.getPhoto({
                quality: 60,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.CameraResultType.Uri,
            });
            this.imageToUpload = image.path;
            this.lastImage = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);
            this.ext = image.format;
        });
    }
    uploadImage(cleanerId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const options = {
                fileKey: 'image',
                fileName: `file-${cleanerId}.${this.ext}`,
                chunkedMode: false,
                mimeType: 'multipart/form-data',
                params: {
                    fileName: `file-${cleanerId}.${this.ext}`,
                    image: `file-${cleanerId}.${this.ext}`,
                },
            };
            const fileTransfer = this.transfer.create();
            fileTransfer
                .upload(this.imageToUpload, this.restService.baseURL + 'cleaner/update_cleaner_image/' + cleanerId, options)
                .then((data) => {
                console.log(data);
                // clear the last data
                this.lastImage = null;
                this.imageToUpload = null;
            }, (err) => {
                console.log(err);
            });
        });
    }
};
CleanerregisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController },
    { type: _services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService },
    { type: _services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__.EventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__.FileTransfer },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer }
];
CleanerregisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-cleanerregister',
        template: _raw_loader_cleanerregister_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cleanerregister_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CleanerregisterPage);



/***/ }),

/***/ 9466:
/*!*****************************************************************!*\
  !*** ./src/app/pages/cleanerregister/cleanerregister.page.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".uploader {\n  text-align: center;\n  margin: auto;\n}\n.uploader img {\n  text-align: center;\n  margin: auto;\n}\n.uploader .avatar {\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsZWFuZXJyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBRVI7QUFDSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDTiIsImZpbGUiOiJjbGVhbmVycmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAudXBsb2FkZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBpbWd7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cblxuICAgIC5hdmF0YXJ7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ 52902:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cleanerregister/cleanerregister.page.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <img class=\"logo\" src=\"{{utilityService.config.adminBaseUrl}}/uploads/images/{{localService.getSettings().image}}\" height=\"40\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"signup-container\" *ngIf=\"!verification\">\n      <h4 class=\"heading-title ion-text-center ion-text-uppercase\">Register as Cleaner</h4>\n      <div class=\"uploader\">\n        <img *ngIf=\"lastImage === null\" (click)=\"takePicture()\" src=\"/assets/images/profile-image-black.png\"/>\n        <img class=\"avatar\" *ngIf=\"lastImage !== null\" [src]=\"lastImage\"/>\n      </div>\n\n      <ion-input clearInput type=\"text\" placeholder=\"NAME\" [(ngModel)]=\"cleaner.name\"></ion-input>\n      <ion-input clearInput type=\"email\" placeholder=\"EMAIL ADDRESS\" [(ngModel)]=\"cleaner.email\" (ngModelChange)=\"cleaner.email = $event.toLocaleLowerCase()\"></ion-input>\n      <ion-input clearInput type=\"tel\" placeholder=\"PHONE NUMBER\" [(ngModel)]=\"cleaner.phone\"></ion-input>\n      <ion-input clearInput type=\"text\" placeholder=\"ADDRESS\" [(ngModel)]=\"cleaner.address\"></ion-input>\n      <ion-input clearInput type=\"text\" placeholder=\"POSTCODE\" [(ngModel)]=\"cleaner.postcode\" (ngModelChange)=\"cleaner.postcode = $event.toLocaleUpperCase()\"></ion-input>\n      <ion-input clearInput type=\"password\" placeholder=\"PASSWORD\" [(ngModel)]=\"cleaner.password\"></ion-input>\n      <ion-input clearInput type=\"password\" placeholder=\"CONFIRM PASSWORD\" [(ngModel)]=\"cnfpassword\"></ion-input>\n      <ion-button expand=\"block\" class=\"base-button\" (click)=\"register()\">REGISTER</ion-button>\n\n      <div class=\"action-links\">\n          <p class=\"terms\" (click)=\"terms()\">BY REGISTERING YOU ARE AGREEING TO OUR <span class=\"tnc\">TERMS AND CONDITIONS</span></p>\n          <p class=\"signin\" (click)=\"login()\">ALREADY REGISTERED? <span>SIGN IN</span></p>\n      </div>\n\n      <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"user()\">I'M A USER</ion-button>\n\n  </div>\n  <div class=\"signup-container\" *ngIf=\"verification\">\n    <h5 text-justify>Please enter the verification code sent to your email.</h5>\n    <p text-justify>This may take a few minutes to arrive, please remember to check your junk mail if you do not receive anything.</p>\n    <ion-input class=\"input\" type=\"tel\" maxlength=\"6\" placeholder=\"ENTER CODE\" [(ngModel)]=\"code\"></ion-input>\n    <ion-button expand=\"block\" class=\"base-button\" (click)=\"verify()\">VERIFY</ion-button>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cleanerregister_cleanerregister_module_ts-es2015.js.map