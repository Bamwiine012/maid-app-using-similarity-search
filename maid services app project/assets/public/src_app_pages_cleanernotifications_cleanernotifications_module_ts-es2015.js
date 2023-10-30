(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_cleanernotifications_cleanernotifications_module_ts"],{

/***/ 97745:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/cleanernotifications/cleanernotifications-routing.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleanernotificationsPageRoutingModule": function() { return /* binding */ CleanernotificationsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cleanernotifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanernotifications.page */ 54506);




const routes = [
    {
        path: '',
        component: _cleanernotifications_page__WEBPACK_IMPORTED_MODULE_0__.CleanernotificationsPage
    }
];
let CleanernotificationsPageRoutingModule = class CleanernotificationsPageRoutingModule {
};
CleanernotificationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CleanernotificationsPageRoutingModule);



/***/ }),

/***/ 65597:
/*!***************************************************************************!*\
  !*** ./src/app/pages/cleanernotifications/cleanernotifications.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleanernotificationsPageModule": function() { return /* binding */ CleanernotificationsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cleanernotifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanernotifications-routing.module */ 97745);
/* harmony import */ var _cleanernotifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cleanernotifications.page */ 54506);







let CleanernotificationsPageModule = class CleanernotificationsPageModule {
};
CleanernotificationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cleanernotifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.CleanernotificationsPageRoutingModule
        ],
        declarations: [_cleanernotifications_page__WEBPACK_IMPORTED_MODULE_1__.CleanernotificationsPage]
    })
], CleanernotificationsPageModule);



/***/ }),

/***/ 54506:
/*!*************************************************************************!*\
  !*** ./src/app/pages/cleanernotifications/cleanernotifications.page.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleanernotificationsPage": function() { return /* binding */ CleanernotificationsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cleanernotifications_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cleanernotifications.page.html */ 38260);
/* harmony import */ var _cleanernotifications_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cleanernotifications.page.scss */ 59273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/events.service */ 80106);
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local.service */ 85298);
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest.service */ 43006);
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utility.service */ 67278);









let CleanernotificationsPage = class CleanernotificationsPage {
    constructor(localService, restService, utilityService, eventsService, router, activatedRoute) {
        this.localService = localService;
        this.restService = restService;
        this.utilityService = utilityService;
        this.eventsService = eventsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.notifications = [];
        this.loggedCleaner = this.localService.getCleaner();
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.getData();
    }
    openJobReceived(jobId) {
        this.router.navigate(['/jobreceived'], {
            queryParams: {
                id: jobId,
            },
        });
    }
    getData() {
        this.utilityService.loadingOpen('Loading...');
        this.restService
            .getData('cleaner/' + this.loggedCleaner.id + '/notifications')
            .subscribe((data) => {
            //console.log(data);
            this.notifications = data;
            this.utilityService.loadingClose();
        }, (err) => {
            this.utilityService.loadingClose();
        });
    }
};
CleanernotificationsPage.ctorParameters = () => [
    { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__.RestService },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__.UtilityService },
    { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
CleanernotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-cleanernotifications',
        template: _raw_loader_cleanernotifications_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cleanernotifications_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CleanernotificationsPage);



/***/ }),

/***/ 59273:
/*!***************************************************************************!*\
  !*** ./src/app/pages/cleanernotifications/cleanernotifications.page.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  text-transform: uppercase;\n}\nion-content h3 {\n  font-size: 1rem;\n  margin-top: 0px;\n}\nion-content .details {\n  color: var(--ion-color-dark);\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 0.8rem;\n  line-height: 1rem;\n  width: 100%;\n}\nion-content .details .name {\n  font-weight: 400;\n  font-size: 0.8rem;\n  margin-bottom: 4px;\n}\nion-content .details .address {\n  white-space: normal !important;\n  padding-right: 10px;\n  font-size: 0.6rem;\n  font-weight: 400;\n  color: var(--ion-color-dark);\n  margin: 2px auto;\n}\nion-content .thumb-image {\n  height: 36px;\n  width: 36px;\n  line-height: 36px;\n}\nion-content .thumb-image .title {\n  font-size: 0.5rem;\n}\nion-content .thumb-image .thumb-icon {\n  font-size: 1rem !important;\n  color: #cdcdcd;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsZWFuZXJub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBRUo7QUFBRTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFFSjtBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRU47QUFDSTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUNOO0FBU0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBUEo7QUFRSTtFQUNFLGlCQUFBO0FBTk47QUFRSTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTk4iLCJmaWxlIjoiY2xlYW5lcm5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBoM3tcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG4gIC5kZXRhaWxze1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5uYW1le1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgIC5hZGRyZXNze1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBtYXJnaW46IDJweCBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1hdmF0YXIgaW1ne1xuICAgIC8vIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIC8vIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuXG4gIC50aHVtYi1pbWFnZXtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgLnRpdGxle1xuICAgICAgZm9udC1zaXplOiAwLjVyZW07XG4gICAgfVxuICAgIC50aHVtYi1pY29ue1xuICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogZGFya2VuKCNlNmU2ZTYsIDEwJSk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG5cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 38260:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cleanernotifications/cleanernotifications.page.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Job Requests</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-list>\n      <ion-item (click)=\"openJobReceived(notification?.job_id)\" class=\"details\" *ngFor=\"let notification of notifications\">\n        <ion-avatar slot=\"start\">\n          <img *ngIf=\"notification?.user?.image\" src=\"{{utilityService.uploadPath}}profile/{{notification?.user?.image}}\">\n          <div *ngIf=\"!notification?.user?.image\" class=\"thumb-image\">\n              <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n          </div>\n        </ion-avatar>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div class=\"name\">{{notification?.user?.name}}</div>\n            <div class=\"address\">{{notification?.job?.address}},{{notification?.job?.postcode}}</div>\n            <div class=\"address\">{{notification?.job?.date | date: 'dd-MM-y'}}</div>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <div class=\"central-page\" *ngIf=\"notifications.length === 0\">\n          <div class=\"notfound\">No results found</div>\n      </div>\n    </ion-list>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cleanernotifications_cleanernotifications_module_ts-es2015.js.map