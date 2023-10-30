(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_insurance_insurance_module_ts"],{

/***/ 58943:
/*!*************************************************************!*\
  !*** ./src/app/pages/insurance/insurance-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsurancePageRoutingModule": function() { return /* binding */ InsurancePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _insurance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insurance.page */ 82301);




const routes = [
    {
        path: '',
        component: _insurance_page__WEBPACK_IMPORTED_MODULE_0__.InsurancePage
    }
];
let InsurancePageRoutingModule = class InsurancePageRoutingModule {
};
InsurancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InsurancePageRoutingModule);



/***/ }),

/***/ 84464:
/*!*****************************************************!*\
  !*** ./src/app/pages/insurance/insurance.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsurancePageModule": function() { return /* binding */ InsurancePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _insurance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insurance-routing.module */ 58943);
/* harmony import */ var _insurance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insurance.page */ 82301);







let InsurancePageModule = class InsurancePageModule {
};
InsurancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _insurance_routing_module__WEBPACK_IMPORTED_MODULE_0__.InsurancePageRoutingModule
        ],
        declarations: [_insurance_page__WEBPACK_IMPORTED_MODULE_1__.InsurancePage]
    })
], InsurancePageModule);



/***/ }),

/***/ 82301:
/*!***************************************************!*\
  !*** ./src/app/pages/insurance/insurance.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsurancePage": function() { return /* binding */ InsurancePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_insurance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./insurance.page.html */ 89365);
/* harmony import */ var _insurance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insurance.page.scss */ 65510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/local.service */ 85298);





let InsurancePage = class InsurancePage {
    constructor(localService) {
        this.localService = localService;
        this.data = this.localService.getSettings().insurance;
    }
    ngOnInit() { }
};
InsurancePage.ctorParameters = () => [
    { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService }
];
InsurancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-insurance',
        template: _raw_loader_insurance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_insurance_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InsurancePage);



/***/ }),

/***/ 65510:
/*!*****************************************************!*\
  !*** ./src/app/pages/insurance/insurance.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN1cmFuY2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 89365:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/insurance/insurance.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Insurance</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding general-page\" [innerHTML]=\"data\">\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_insurance_insurance_module_ts-es2015.js.map