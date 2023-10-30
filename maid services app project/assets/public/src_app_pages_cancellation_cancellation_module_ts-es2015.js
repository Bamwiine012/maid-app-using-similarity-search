(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_cancellation_cancellation_module_ts"],{

/***/ 89594:
/*!*******************************************************************!*\
  !*** ./src/app/pages/cancellation/cancellation-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancellationPageRoutingModule": function() { return /* binding */ CancellationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cancellation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancellation.page */ 77481);




const routes = [
    {
        path: '',
        component: _cancellation_page__WEBPACK_IMPORTED_MODULE_0__.CancellationPage
    }
];
let CancellationPageRoutingModule = class CancellationPageRoutingModule {
};
CancellationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CancellationPageRoutingModule);



/***/ }),

/***/ 61735:
/*!***********************************************************!*\
  !*** ./src/app/pages/cancellation/cancellation.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancellationPageModule": function() { return /* binding */ CancellationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cancellation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancellation-routing.module */ 89594);
/* harmony import */ var _cancellation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancellation.page */ 77481);







let CancellationPageModule = class CancellationPageModule {
};
CancellationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cancellation_routing_module__WEBPACK_IMPORTED_MODULE_0__.CancellationPageRoutingModule
        ],
        declarations: [_cancellation_page__WEBPACK_IMPORTED_MODULE_1__.CancellationPage]
    })
], CancellationPageModule);



/***/ }),

/***/ 77481:
/*!*********************************************************!*\
  !*** ./src/app/pages/cancellation/cancellation.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancellationPage": function() { return /* binding */ CancellationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cancellation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cancellation.page.html */ 3588);
/* harmony import */ var _cancellation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancellation.page.scss */ 91007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local.service */ 85298);





let CancellationPage = class CancellationPage {
    constructor(localService) {
        this.localService = localService;
        this.data = this.localService.getSettings().cancellation;
    }
    ngOnInit() { }
};
CancellationPage.ctorParameters = () => [
    { type: _services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService }
];
CancellationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-cancellation',
        template: _raw_loader_cancellation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cancellation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CancellationPage);



/***/ }),

/***/ 91007:
/*!***********************************************************!*\
  !*** ./src/app/pages/cancellation/cancellation.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5jZWxsYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 3588:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cancellation/cancellation.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Cancellation Policy</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding general-page\" [innerHTML]=\"data\">\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cancellation_cancellation_module_ts-es2015.js.map