(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_customise_customise_module_ts"],{

/***/ 15099:
/*!*************************************************************!*\
  !*** ./src/app/pages/customise/customise-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomisePageRoutingModule": function() { return /* binding */ CustomisePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _customise_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customise.page */ 83398);




const routes = [
    {
        path: '',
        component: _customise_page__WEBPACK_IMPORTED_MODULE_0__.CustomisePage
    }
];
let CustomisePageRoutingModule = class CustomisePageRoutingModule {
};
CustomisePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomisePageRoutingModule);



/***/ }),

/***/ 80477:
/*!*****************************************************!*\
  !*** ./src/app/pages/customise/customise.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomisePageModule": function() { return /* binding */ CustomisePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _customise_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customise-routing.module */ 15099);
/* harmony import */ var _customise_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customise.page */ 83398);







let CustomisePageModule = class CustomisePageModule {
};
CustomisePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _customise_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomisePageRoutingModule
        ],
        declarations: [_customise_page__WEBPACK_IMPORTED_MODULE_1__.CustomisePage]
    })
], CustomisePageModule);



/***/ }),

/***/ 83398:
/*!***************************************************!*\
  !*** ./src/app/pages/customise/customise.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomisePage": function() { return /* binding */ CustomisePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_customise_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./customise.page.html */ 93491);
/* harmony import */ var _customise_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customise.page.scss */ 81405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local.service */ 85298);
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/rest.service */ 43006);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utility.service */ 67278);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/events.service */ 80106);



/* eslint-disable @typescript-eslint/naming-convention */






let CustomisePage = class CustomisePage {
    constructor(localService, restService, utilityService, eventsService, router, activatedRoute) {
        this.localService = localService;
        this.restService = restService;
        this.utilityService = utilityService;
        this.eventsService = eventsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.bookingdata = {};
        this.extraServices = [];
        this.currency_symbol = this.localService.getSettings().currency_symbol;
        // receive parameters | get data from book page
        this.activatedRoute.queryParams.subscribe((params) => {
            if (params.data) {
                this.bookingdata = JSON.parse(params.data);
                // get extra services
                this.utilityService.loadingOpen('Loading...');
                this.restService.getData('getextraservices').subscribe((data) => {
                    this.extraServices = [];
                    data.forEach((item) => {
                        item.selected = false;
                        this.extraServices.push(item);
                    });
                    this.utilityService.loadingClose();
                }, (err) => {
                    this.utilityService.loadingClose();
                });
                console.log('received in customise page: ', this.bookingdata);
            }
        });
    }
    ngOnInit() { }
    next() {
        const extra_services = [];
        this.extraServices.forEach(item => {
            if (item.selected === true) {
                delete item.selected;
                extra_services.push(item);
            }
        });
        if (extra_services.length > 0) {
            this.bookingdata.extra_services = JSON.stringify(extra_services);
        }
        this.router.navigate(['/orderreview'], {
            queryParams: {
                data: JSON.stringify(this.bookingdata),
            },
        });
    }
};
CustomisePage.ctorParameters = () => [
    { type: _services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService },
    { type: _services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__.EventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
CustomisePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-customise',
        template: _raw_loader_customise_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_customise_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CustomisePage);



/***/ }),

/***/ 81405:
/*!*****************************************************!*\
  !*** ./src/app/pages/customise/customise.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  text-align: center;\n  text-transform: uppercase;\n}\nion-content h2 {\n  font-size: 1rem;\n  text-transform: uppercase;\n}\nion-content h3 {\n  font-size: 1rem;\n  text-transform: uppercase;\n  font-weight: 400;\n  margin-top: 0px;\n}\nion-content ion-label {\n  vertical-align: middle;\n  font-weight: 400 !important;\n  font-size: 0.8rem !important;\n}\nion-content ion-label span {\n  color: var(--ion-color-base);\n  vertical-align: top;\n  font-size: 0.7rem;\n}\nion-content h6 {\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  font-weight: 400;\n  line-height: 18px;\n}\nion-content ion-item {\n  border-width: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWlzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFDSTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQUNOO0FBQ0k7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDTjtBQUVJO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBQU47QUFFTTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFSO0FBSUk7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUZOO0FBS0k7RUFDRSw0QkFBQTtBQUhOIiwiZmlsZSI6ImN1c3RvbWlzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICBoMntcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIGgze1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVse1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG5cbiAgICAgIHNwYW57XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmFzZSk7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIGg2e1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIH1cblxuICAgIGlvbi1pdGVte1xuICAgICAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG5cblxufVxuIl19 */");

/***/ }),

/***/ 93491:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customise/customise.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Customise</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col size=\"12\">\n      <h3>CUSTOMISE STANDARD CLEAN</h3>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-list>\n        <ion-item *ngFor=\"let service of extraServices\" >\n          <ion-label>{{service?.name}}  <span>(+{{currency_symbol}}{{service?.price}})</span></ion-label>\n          <ion-toggle [(ngModel)]=\"service.selected\"></ion-toggle>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"next()\">NEXT</ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <h6>NOTE: CLEANERS WILL ENDEAVOUR TO COMPLETE ALL TASKS WITHIN THE ALLOTED TIME.</h6>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customise_customise_module_ts-es2015.js.map