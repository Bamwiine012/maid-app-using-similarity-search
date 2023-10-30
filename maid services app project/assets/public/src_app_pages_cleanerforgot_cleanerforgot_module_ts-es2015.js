(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_cleanerforgot_cleanerforgot_module_ts"],{

/***/ 92960:
/*!*********************************************************************!*\
  !*** ./src/app/pages/cleanerforgot/cleanerforgot-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleanerforgotPageRoutingModule": function() { return /* binding */ CleanerforgotPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cleanerforgot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanerforgot.page */ 78441);




const routes = [
    {
        path: '',
        component: _cleanerforgot_page__WEBPACK_IMPORTED_MODULE_0__.CleanerforgotPage
    }
];
let CleanerforgotPageRoutingModule = class CleanerforgotPageRoutingModule {
};
CleanerforgotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CleanerforgotPageRoutingModule);



/***/ }),

/***/ 17541:
/*!*************************************************************!*\
  !*** ./src/app/pages/cleanerforgot/cleanerforgot.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleanerforgotPageModule": function() { return /* binding */ CleanerforgotPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cleanerforgot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanerforgot-routing.module */ 92960);
/* harmony import */ var _cleanerforgot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cleanerforgot.page */ 78441);







let CleanerforgotPageModule = class CleanerforgotPageModule {
};
CleanerforgotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cleanerforgot_routing_module__WEBPACK_IMPORTED_MODULE_0__.CleanerforgotPageRoutingModule
        ],
        declarations: [_cleanerforgot_page__WEBPACK_IMPORTED_MODULE_1__.CleanerforgotPage]
    })
], CleanerforgotPageModule);



/***/ }),

/***/ 78441:
/*!***********************************************************!*\
  !*** ./src/app/pages/cleanerforgot/cleanerforgot.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleanerforgotPage": function() { return /* binding */ CleanerforgotPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cleanerforgot_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cleanerforgot.page.html */ 9873);
/* harmony import */ var _cleanerforgot_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cleanerforgot.page.scss */ 87238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local.service */ 85298);
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/rest.service */ 43006);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utility.service */ 67278);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/events.service */ 80106);









let CleanerforgotPage = class CleanerforgotPage {
    constructor(localService, restService, utilityService, eventsService, router) {
        this.localService = localService;
        this.restService = restService;
        this.utilityService = utilityService;
        this.eventsService = eventsService;
        this.router = router;
        this.email = '';
        this.cleaner = {};
        this.resetScreen = false;
    }
    ngOnInit() { }
    reset() {
        if (this.email.length < 5) {
            return this.utilityService.openAlerts('Sorry!', 'Please enter a valid email address.', 'ok');
        }
        this.restService.postData('cleaner/forgot', { email: this.email }).subscribe((data) => {
            console.log(data);
            this.cleaner = data;
            this.resetScreen = true;
        }, (err) => this.utilityService.openAlerts('Error', 'User not found.', 'ok'));
    }
    update() {
        if (this.code === this.cleaner.code) {
            if (this.password.length < 5) {
                return this.utilityService.openAlerts('Error!', 'Minimum 5 character required.', 'ok');
            }
            this.restService
                .postData('cleaner/reset', {
                id: this.cleaner.id,
                password: this.password,
                code: this.code,
            })
                .subscribe((data) => {
                console.log(data);
                this.router.navigateByUrl('/cleanerlogin');
            }, (err) => this.utilityService.openAlerts('Error', 'Something not right at verification.', 'ok'));
        }
        else {
            return this.utilityService.openAlerts('Error', 'Invalid code provided.', 'ok');
        }
    }
};
CleanerforgotPage.ctorParameters = () => [
    { type: _services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService },
    { type: _services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__.EventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
CleanerforgotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-cleanerforgot',
        template: _raw_loader_cleanerforgot_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cleanerforgot_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CleanerforgotPage);



/***/ }),

/***/ 87238:
/*!*************************************************************!*\
  !*** ./src/app/pages/cleanerforgot/cleanerforgot.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading, .sub-heading {\n  color: #9b9b9b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsZWFuZXJmb3Jnb3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6ImNsZWFuZXJmb3Jnb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmcsIC5zdWItaGVhZGluZ3tcbiAgY29sb3I6ICM5YjliOWI7XG59XG4iXX0= */");

/***/ }),

/***/ 9873:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cleanerforgot/cleanerforgot.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <img class=\"logo\" src=\"{{utilityService.config.adminBaseUrl}}/uploads/images/{{localService.getSettings().image}}\" height=\"40\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"forgot-container\" *ngIf=\"!resetScreen\">\n      <h4 class=\"heading ion-text-center ion-text-uppercase\">Forgot Password?</h4>\n      <p class=\"sub-heading ion-text-center ion-text-uppercase\">Enter your email to reset your password</p>\n      <ion-input clearInput type=\"email\" placeholder=\"EMAIL ADDRESS\" [(ngModel)]=\"email\"></ion-input>\n      <ion-button expand=\"block\" class=\"base-button\" (click)=\"reset()\">RESET PASSWORD</ion-button>\n\n  </div>\n  <div class=\"forgot-container\" *ngIf=\"resetScreen\">\n      <p class=\"sub-heading ion-text-center ion-text-uppercase\">A code has been sent to your email. Check it and enter the code to reset the password</p>\n      <ion-input clearInput type=\"tel\" maxlength=\"6\" placeholder=\"ENTER CODE\" [(ngModel)]=\"code\"></ion-input>\n      <ion-input clearInput type=\"password\" placeholder=\"NEW PASSWORD\" [(ngModel)]=\"password\"></ion-input>\n      <ion-button expand=\"block\" class=\"base-button\" (click)=\"update()\">UPDATE NEW PASSWORD</ion-button>\n\n  </div>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cleanerforgot_cleanerforgot_module_ts-es2015.js.map