(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_payments_payments_module_ts"],{

/***/ 66568:
/*!***********************************************************!*\
  !*** ./src/app/pages/payments/payments-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPageRoutingModule": function() { return /* binding */ PaymentsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments.page */ 42061);




const routes = [
    {
        path: '',
        component: _payments_page__WEBPACK_IMPORTED_MODULE_0__.PaymentsPage
    }
];
let PaymentsPageRoutingModule = class PaymentsPageRoutingModule {
};
PaymentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentsPageRoutingModule);



/***/ }),

/***/ 15795:
/*!***************************************************!*\
  !*** ./src/app/pages/payments/payments.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPageModule": function() { return /* binding */ PaymentsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments-routing.module */ 66568);
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments.page */ 42061);







let PaymentsPageModule = class PaymentsPageModule {
};
PaymentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payments_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentsPageRoutingModule
        ],
        declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_1__.PaymentsPage]
    })
], PaymentsPageModule);



/***/ }),

/***/ 42061:
/*!*************************************************!*\
  !*** ./src/app/pages/payments/payments.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPage": function() { return /* binding */ PaymentsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_payments_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./payments.page.html */ 51131);
/* harmony import */ var _payments_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments.page.scss */ 77407);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local.service */ 85298);
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/rest.service */ 43006);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utility.service */ 67278);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/events.service */ 80106);



/* eslint-disable object-shorthand */






let PaymentsPage = class PaymentsPage {
    constructor(localService, restService, utilityService, eventsService, router) {
        this.localService = localService;
        this.restService = restService;
        this.utilityService = utilityService;
        this.eventsService = eventsService;
        this.router = router;
        this.transactions = [];
        this.loggedUser = this.localService.getUser();
        this.currency = this.localService.getSettings().currency_symbol;
        this.utilityService.loadingOpen('Loading...');
        this.restService
            .getData('user/' + this.loggedUser.id + '/transactions')
            .subscribe((data) => {
            this.utilityService.loadingClose();
            this.transactions = data;
            console.log(data);
        }, (err) => { });
    }
    ngOnInit() { }
    bookingDetails(id) {
        this.router.navigate(['/orderdetails'], {
            queryParams: {
                id: id,
                mode: 'payments'
            }
        });
    }
};
PaymentsPage.ctorParameters = () => [
    { type: _services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService },
    { type: _services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__.EventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
PaymentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-payments',
        template: _raw_loader_payments_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payments_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaymentsPage);



/***/ }),

/***/ 77407:
/*!***************************************************!*\
  !*** ./src/app/pages/payments/payments.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .table-header {\n  background: #ebebee;\n  padding: 5px;\n}\nion-content .details {\n  color: var(--ion-color-dark);\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 0.8rem;\n  line-height: 1rem;\n  width: 100%;\n}\nion-content .details .name {\n  font-weight: 600;\n  font-size: 0.7rem;\n}\nion-content .details .address {\n  white-space: normal !important;\n  padding-right: 10px;\n}\nion-content .small-icon {\n  max-width: 10px;\n  vertical-align: middle;\n}\nion-content .central-page {\n  margin-top: 20px;\n}\nion-content .status-container {\n  margin: 0 auto auto;\n}\nion-content .status-container .status {\n  display: inline-block;\n  padding: 3px 5px;\n  background-color: #ebebee;\n  font-size: 0.5rem;\n  border-radius: 2px;\n}\nion-content .status-container .status.status-succeeded {\n  background-color: #36c6d3;\n  color: #fafafa;\n}\nion-content .status-container .status.status-refunded {\n  background-color: #ed6b75;\n  color: #fafafa;\n}\nion-content .status-container .status.status-partial-refunded {\n  background-color: #F1C40F;\n  color: #fafafa;\n}\nion-content .datetime {\n  font-size: 0.5rem;\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0U7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBREo7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFETjtBQUlJO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQUZOO0FBT0U7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUFMSjtBQVFFO0VBQ0UsZ0JBQUE7QUFOSjtBQVVFO0VBQ0UsbUJBQUE7QUFSSjtBQVNJO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVBSO0FBUVE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFOVjtBQVFRO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBTlY7QUFRUTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQU5WO0FBV0U7RUFDRSxpQkFBQTtFQUVBLGdCQUFBO0FBVkoiLCJmaWxlIjoicGF5bWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAudGFibGUtaGVhZGVye1xuICAgIGJhY2tncm91bmQ6ICNlYmViZWU7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgLmRldGFpbHN7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLm5hbWV7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgfVxuXG4gICAgLmFkZHJlc3N7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG4gICAgfVxuICB9XG5cbiAgLnNtYWxsLWljb257XG4gICAgbWF4LXdpZHRoOiAxMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICAuY2VudHJhbC1wYWdle1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuXG4gIC5zdGF0dXMtY29udGFpbmVye1xuICAgIG1hcmdpbjogMCBhdXRvIGF1dG87XG4gICAgLnN0YXR1c3tcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmVlO1xuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAmLnN0YXR1cy1zdWNjZWVkZWR7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM2YzZkMztcbiAgICAgICAgICBjb2xvcjogI2ZhZmFmYTtcbiAgICAgICAgfVxuICAgICAgICAmLnN0YXR1cy1yZWZ1bmRlZHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ2Yjc1O1xuICAgICAgICAgIGNvbG9yOiAjZmFmYWZhO1xuICAgICAgICB9XG4gICAgICAgICYuc3RhdHVzLXBhcnRpYWwtcmVmdW5kZWR7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxQzQwRjtcbiAgICAgICAgICBjb2xvcjogI2ZhZmFmYTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5kYXRldGltZXtcbiAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICAvLyBjb2xvcjogIzM2YzZkMztcbiAgICBmb250LXdlaWdodDogMTAwO1xuICB9XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ 51131:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payments/payments.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Payments</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-list>\n      <ion-item *ngFor=\"let transaction of transactions\" (click)=\"bookingDetails(transaction.job.id)\">\n        <div class=\"details\">\n              <ion-row>\n                <ion-col size=\"7\" *ngIf=\"transaction?.job_history_id\" class=\"name\">{{transaction?.cleaner?.name !== null ? transaction?.cleaner?.name : 'Cleaner Not Assigned'}} <span class=\"datetime\">({{transaction?.jobhistory?.date | date: 'dd-MM-y'}} {{transaction?.jobhistory?.time}})</span></ion-col>\n                <ion-col size=\"7\" *ngIf=\"!transaction?.job_history_id\" class=\"name\">{{transaction?.cleaner?.name !== null ? transaction?.cleaner?.name : 'Cleaner Not Assigned'}} <span class=\"datetime\">({{transaction?.job?.date | date: 'dd-MM-y'}} {{transaction?.job?.time}})</span></ion-col>\n                <ion-col size=\"2\" class=\"name ion-text-right\">{{currency}}{{transaction?.job?.price}}</ion-col>\n                <ion-col size=\"3\" class=\"status-container ion-text-right\"><div class=\"status status-{{transaction?.status}}\">{{transaction?.status}}</div></ion-col>\n              </ion-row>\n        </div>\n      </ion-item>\n      <div class=\"central-page\" *ngIf=\"transactions.length === 0\">\n          <div class=\"notfound\">No results found</div>\n      </div>\n    </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_payments_payments_module_ts-es2015.js.map