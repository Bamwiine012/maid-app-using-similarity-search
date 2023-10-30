(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_signup_signup_module_ts"],{

/***/ 90392:
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": function() { return /* binding */ SignupPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 64374);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 17110:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": function() { return /* binding */ SignupPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 90392);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 64374);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 64374:
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": function() { return /* binding */ SignupPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 71979);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 69233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local.service */ 85298);
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/rest.service */ 43006);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utility.service */ 67278);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/events.service */ 80106);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! onesignal-cordova-plugin */ 14868);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6__);











let SignupPage = class SignupPage {
    constructor(platform, menu, localService, restService, utilityService, eventsService, router) {
        this.platform = platform;
        this.menu = menu;
        this.localService = localService;
        this.restService = restService;
        this.utilityService = utilityService;
        this.eventsService = eventsService;
        this.router = router;
        this.user = {
            name: '',
            email: '',
            phone: '',
            password: '',
        };
        this.verification = false;
        this.verificationCode = null;
        this.code = null;
        this.token = null;
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
    login() {
        this.router.navigate(['/login']);
    }
    cleaner() {
        this.router.navigate(['/cleanerregister']);
    }
    signUp() {
        if (this.user.name === '') {
            return this.utilityService.openAlerts('Error', 'Name required.', 'ok');
        }
        if (this.user.email === '') {
            return this.utilityService.openAlerts('Error', 'Email required.', 'ok');
        }
        if (this.user.phone === '') {
            return this.utilityService.openAlerts('Error', 'Phone number required.', 'ok');
        }
        if (this.user.password.length < 5) {
            return this.utilityService.openAlerts('Error', 'Password should be minimum 5 character.', 'ok');
        }
        if (this.user.password !== this.cnfpassword) {
            return this.utilityService.openAlerts('Error', 'Password & confirm password must be same.', 'ok');
        }
        this.user.device = this.getPlatform();
        this.user.token = this.token;
        this.utilityService.loadingOpen('Registering...');
        this.restService.postData('user/register', this.user).subscribe((data) => {
            // verify view
            // this.Verification = true;
            this.verificationCode = data.code;
            //
            this.user = data;
            this.utilityService.loadingClose();
            // no verification required =========
            this.utilityService.openAlerts('Registration Successful', 'You may login now.', 'ok');
            this.router.navigateByUrl('/login');
        }, (err) => {
            this.utilityService.loadingClose();
            if (err.status === 403 && err.error.error.email) {
                return this.utilityService.openAlerts('Error', 'The email has already been taken.', 'ok');
            }
            else {
                return this.utilityService.openAlerts('Error', 'User registration failed, please try again later.', 'ok');
            }
        });
    }
    verify() {
        if (this.user.code === this.verificationCode) {
            // active the user
            this.utilityService.loadingOpen('Verifying...');
            this.restService
                .postData('user/verify', {
                email: this.user.email,
                code: this.verificationCode,
            })
                .subscribe((data) => {
                this.utilityService.loadingClose();
                this.utilityService.openAlerts('Done', 'You can now login.', 'ok');
                this.router.navigateByUrl('/login');
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
};
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService },
    { type: _services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__.EventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 69233:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 71979:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <img class=\"logo\" src=\"{{utilityService.config.adminBaseUrl}}/uploads/images/{{localService.getSettings().image}}\" height=\"40\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n   <div class=\"signup-container\" *ngIf=\"!verification\">\n      <h4 class=\"heading-title ion-text-center ion-text-uppercase\">Register as User</h4>\n      <ion-input type=\"text\" placeholder=\"NAME\" [(ngModel)]=\"user.name\"></ion-input>\n      <ion-input clearInput type=\"email\" placeholder=\"EMAIL ADDRESS\" [(ngModel)]=\"user.email\" (ngModelChange)=\"user.email = $event.toLocaleLowerCase()\"></ion-input>\n      <ion-input clearInput type=\"tel\" placeholder=\"PHONE NUMBER\" [(ngModel)]=\"user.phone\"></ion-input>\n      <ion-input clearInput type=\"password\" placeholder=\"PASSWORD\" [(ngModel)]=\"user.password\"></ion-input>\n      <ion-input clearInput type=\"password\" placeholder=\"CONFIRM PASSWORD\" [(ngModel)]=\"cnfpassword\"></ion-input>\n      <ion-button expand=\"block\" class=\"base-button\" (click)=\"signUp()\">REGISTER</ion-button>\n\n      <div class=\"action-links\">\n          <p class=\"terms\" (click)=\"terms()\">BY REGISTERING YOU ARE AGREEING TO OUR <span class=\"tnc\">TERMS AND CONDITIONS</span></p>\n          <p class=\"signin\" (click)=\"login()\">ALREADY REGISTERED? <span>SIGN IN</span></p>\n      </div>\n\n      <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"cleaner()\">I'M A CLEANER</ion-button>\n\n  </div>\n  <div class=\"signup-container\" *ngIf=\"verification\">\n    <h5 text-justify>Please enter the verification code sent to your email.</h5>\n    <p text-justify>This may take a few minutes to arrive, please remember to check your junk mail if you do not receive anything.</p>\n    <ion-input class=\"input\" type=\"tel\" maxlength=\"6\" placeholder=\"ENTER CODE\" [(ngModel)]=\"code\"></ion-input>\n    <button ion-button full class=\"base-button\" (click)=\"verify()\">VERIFY</button>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_signup_signup_module_ts-es2015.js.map