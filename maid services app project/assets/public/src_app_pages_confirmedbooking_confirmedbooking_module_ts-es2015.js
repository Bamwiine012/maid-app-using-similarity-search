(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_confirmedbooking_confirmedbooking_module_ts"],{

/***/ 26812:
/*!***************************************************************************!*\
  !*** ./src/app/pages/confirmedbooking/confirmedbooking-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmedbookingPageRoutingModule": function() { return /* binding */ ConfirmedbookingPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _confirmedbooking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmedbooking.page */ 49484);




const routes = [
    {
        path: '',
        component: _confirmedbooking_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmedbookingPage
    }
];
let ConfirmedbookingPageRoutingModule = class ConfirmedbookingPageRoutingModule {
};
ConfirmedbookingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfirmedbookingPageRoutingModule);



/***/ }),

/***/ 63624:
/*!*******************************************************************!*\
  !*** ./src/app/pages/confirmedbooking/confirmedbooking.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmedbookingPageModule": function() { return /* binding */ ConfirmedbookingPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _confirmedbooking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmedbooking-routing.module */ 26812);
/* harmony import */ var _confirmedbooking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmedbooking.page */ 49484);







let ConfirmedbookingPageModule = class ConfirmedbookingPageModule {
};
ConfirmedbookingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _confirmedbooking_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmedbookingPageRoutingModule
        ],
        declarations: [_confirmedbooking_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmedbookingPage]
    })
], ConfirmedbookingPageModule);



/***/ }),

/***/ 49484:
/*!*****************************************************************!*\
  !*** ./src/app/pages/confirmedbooking/confirmedbooking.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmedbookingPage": function() { return /* binding */ ConfirmedbookingPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_confirmedbooking_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./confirmedbooking.page.html */ 13108);
/* harmony import */ var _confirmedbooking_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmedbooking.page.scss */ 64534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utility.service */ 67278);
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/local.service */ 85298);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);







let ConfirmedbookingPage = class ConfirmedbookingPage {
    constructor(utilityService, localService, router) {
        this.utilityService = utilityService;
        this.localService = localService;
        this.router = router;
        setTimeout(() => {
            this.router.navigateByUrl('/book');
        }, 3000);
    }
    ngOnInit() { }
};
ConfirmedbookingPage.ctorParameters = () => [
    { type: _services_utility_service__WEBPACK_IMPORTED_MODULE_2__.UtilityService },
    { type: _services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ConfirmedbookingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-confirmedbooking',
        template: _raw_loader_confirmedbooking_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_confirmedbooking_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfirmedbookingPage);



/***/ }),

/***/ 64534:
/*!*******************************************************************!*\
  !*** ./src/app/pages/confirmedbooking/confirmedbooking.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  text-align: center;\n  text-transform: uppercase;\n}\nion-content .confirmed-container {\n  padding: 50px 20px;\n  font-size: 0.8rem;\n}\nion-content .text {\n  font-size: 0.8rem;\n  line-height: 1.5rem;\n}\nion-content .heading {\n  margin: auto 20px;\n  border-bottom: 1px solid var(--ion-color-light);\n  padding-bottom: 15px;\n  font-weight: 500;\n}\nion-content .medium {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1lZGJvb2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7QUFDRTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUVFO0VBQ0UsaUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7QUFESiIsImZpbGUiOiJjb25maXJtZWRib29raW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAuY29uZmlybWVkLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cblxuICAudGV4dHtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgfVxuXG4gIC5oZWFkaW5ne1xuICAgIG1hcmdpbjogYXV0byAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAubWVkaXVte1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuXG59XG4iXX0= */");

/***/ }),

/***/ 13108:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confirmedbooking/confirmedbooking.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-uppercase\">Booking Confirmed</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div class=\"confirmed-container\">\n        <h4 class=\"heading\" text-center text-uppercase>Thank You</h4>\n        <p class=\"text\" text-center text-uppercase>We have received your payment and your request has been sent to cleaners around you.</p>\n        <p class=\"text\" text-center text-uppercase>You shall soon receive a confirmation email and notification (please ensure your notifications are turned on)</p>\n        <p text-center text-uppercase>Regards<br/><span class=\"medium\">{{utilityService.config.appName}} Team</span></p>\n    </div>\n  </ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_confirmedbooking_confirmedbooking_module_ts-es2015.js.map