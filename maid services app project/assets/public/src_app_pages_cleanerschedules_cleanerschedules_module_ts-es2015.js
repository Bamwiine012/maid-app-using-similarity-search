(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_cleanerschedules_cleanerschedules_module_ts"],{

/***/ 13546:
/*!***************************************************************************!*\
  !*** ./src/app/pages/cleanerschedules/cleanerschedules-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleanerschedulesPageRoutingModule": function() { return /* binding */ CleanerschedulesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cleanerschedules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanerschedules.page */ 38222);




const routes = [
    {
        path: '',
        component: _cleanerschedules_page__WEBPACK_IMPORTED_MODULE_0__.CleanerschedulesPage
    }
];
let CleanerschedulesPageRoutingModule = class CleanerschedulesPageRoutingModule {
};
CleanerschedulesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CleanerschedulesPageRoutingModule);



/***/ }),

/***/ 51506:
/*!*******************************************************************!*\
  !*** ./src/app/pages/cleanerschedules/cleanerschedules.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleanerschedulesPageModule": function() { return /* binding */ CleanerschedulesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cleanerschedules_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanerschedules-routing.module */ 13546);
/* harmony import */ var _cleanerschedules_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cleanerschedules.page */ 38222);







let CleanerschedulesPageModule = class CleanerschedulesPageModule {
};
CleanerschedulesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cleanerschedules_routing_module__WEBPACK_IMPORTED_MODULE_0__.CleanerschedulesPageRoutingModule
        ],
        declarations: [_cleanerschedules_page__WEBPACK_IMPORTED_MODULE_1__.CleanerschedulesPage]
    })
], CleanerschedulesPageModule);



/***/ }),

/***/ 38222:
/*!*****************************************************************!*\
  !*** ./src/app/pages/cleanerschedules/cleanerschedules.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleanerschedulesPage": function() { return /* binding */ CleanerschedulesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cleanerschedules_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cleanerschedules.page.html */ 87102);
/* harmony import */ var _cleanerschedules_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cleanerschedules.page.scss */ 47004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/events.service */ 80106);
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local.service */ 85298);
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest.service */ 43006);
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utility.service */ 67278);



/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */






let CleanerschedulesPage = class CleanerschedulesPage {
    constructor(localService, restService, utilityService, eventsService, router, activatedRoute) {
        this.localService = localService;
        this.restService = restService;
        this.utilityService = utilityService;
        this.eventsService = eventsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.day = 'mon';
        this.start = '06:00:00';
        this.end = '18:00:00';
        this.segment = 'mon';
        this.schedules = [];
        this.available = false;
        this.loggedCleaner = this.localService.getCleaner();
        if (this.loggedCleaner.available === 'yes') {
            this.available = true;
        }
        else {
            this.available = false;
        }
        this.getSchedules();
    }
    ngOnInit() { }
    upadateSchedule() {
        this.utilityService.loadingOpen('Updating...');
        this.restService
            .postData('schedule/create', {
            start: this.start,
            end: this.end,
            day: this.day,
            cleaner_id: this.loggedCleaner.id,
        })
            .subscribe((data) => {
            this.getSchedules();
            this.utilityService.loadingClose();
        }, (err) => {
            this.utilityService.loadingClose();
        });
    }
    delete(id) {
        this.restService
            .postData('schedule/delete', {
            cleaner_id: this.loggedCleaner.id,
            id: id,
        })
            .subscribe((data) => {
            this.getSchedules();
        });
    }
    getSchedules() {
        this.restService
            .getData('cleaner/' + this.loggedCleaner.id + '/schedule')
            .subscribe((data) => {
            this.schedules = data;
        }, (err) => { });
    }
    changeAvailability(event) {
        console.log(event);
        let tempavialable;
        if (event === true) {
            tempavialable = 'yes';
        }
        else {
            tempavialable = 'no';
        }
        this.restService
            .postData('cleaner/update_profile', {
            id: this.loggedCleaner.id,
            available: tempavialable,
        })
            .subscribe((data) => {
            this.localService.setCleaner(data);
            this.available = event;
        }, (err) => { });
    }
    onChangeDay() {
        this.segment = this.day;
    }
    onChangeSegment() {
        this.day = this.segment;
    }
    openNotifications() {
        this.router.navigate(['/cleanernotifications']);
    }
};
CleanerschedulesPage.ctorParameters = () => [
    { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__.RestService },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__.UtilityService },
    { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
CleanerschedulesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-cleanerschedules',
        template: _raw_loader_cleanerschedules_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cleanerschedules_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CleanerschedulesPage);



/***/ }),

/***/ 47004:
/*!*******************************************************************!*\
  !*** ./src/app/pages/cleanerschedules/cleanerschedules.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .selection-container {\n  margin: auto;\n  text-align: center;\n}\nion-content .selectClass {\n  padding: 6px 10px;\n  background: transparent;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  margin: 5px auto;\n  width: 100%;\n}\nion-content .schedule-btn {\n  height: 42px;\n  font-size: 1rem;\n}\nion-content .trash {\n  height: 20px;\n}\nion-content .schedule-item-container {\n  margin: 15px auto;\n  font-size: 0.8rem;\n}\nion-content .schedule-item-container img {\n  vertical-align: middle;\n}\nion-content .schedule-item-container .schedule-item {\n  border: 1px solid var(--ion-color-light);\n  padding: 5px;\n}\nion-content .schedule-item-container .schedule-item span {\n  display: inline-block;\n}\nion-content .schedule-item-container .schedule-item span:nth-child(1) {\n  width: 43%;\n}\nion-content .schedule-item-container .schedule-item span:nth-child(2) {\n  width: 43%;\n  text-align: right;\n}\nion-content .schedule-item-container .schedule-item span:nth-child(3) {\n  width: 10%;\n  text-align: right;\n  vertical-align: middle;\n}\nion-content h2 {\n  text-align: center;\n  color: var(--ion-color-dark);\n  font-size: 1.1rem;\n  margin: 10px auto;\n}\nion-content .holiday-container {\n  margin: 10px auto;\n  border: 1px solid var(--ion-color-light);\n  border-radius: 5px;\n}\nion-content .holiday-container ion-item {\n  color: var(--ion-color-dark);\n  font-size: 1rem;\n  letter-spacing: 1px;\n  font-weight: 500;\n}\nion-content .ionSelectSpecial {\n  max-width: 100% !important;\n  text-align: left;\n  border-radius: 5px;\n}\nion-content ion-list ion-item {\n  border: none !important;\n  padding-left: 0px !important;\n}\nion-content ion-list ion-item .item-inner {\n  padding-right: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsZWFuZXJzY2hlZHVsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQUo7QUFHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLFlBQUE7QUFGSjtBQUtFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUhKO0FBSUk7RUFDRSxzQkFBQTtBQUZOO0FBS0k7RUFDRSx3Q0FBQTtFQUNBLFlBQUE7QUFITjtBQUtNO0VBQ0UscUJBQUE7QUFIUjtBQU1NO0VBQ0UsVUFBQTtBQUpSO0FBTU07RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQU1NO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFKUjtBQVNFO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFQSjtBQVVFO0VBQ0UsaUJBQUE7RUFDQSx3Q0FBQTtFQUdBLGtCQUFBO0FBVko7QUFXSTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFUTjtBQWNFO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBWko7QUFnQkk7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0FBZE47QUFlTTtFQUNFLDJCQUFBO0FBYlIiLCJmaWxlIjoiY2xlYW5lcnNjaGVkdWxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC5zZWxlY3Rpb24tY29udGFpbmVye1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnNlbGVjdENsYXNze1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zY2hlZHVsZS1idG57XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC50cmFzaHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cblxuICAuc2NoZWR1bGUtaXRlbS1jb250YWluZXJ7XG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgaW1ne1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAuc2NoZWR1bGUtaXRlbXtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgIHNwYW57XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgc3BhbjpudGgtY2hpbGQoMSl7XG4gICAgICAgIHdpZHRoOiA0MyU7XG4gICAgICB9XG4gICAgICBzcGFuOm50aC1jaGlsZCgyKXtcbiAgICAgICAgd2lkdGg6IDQzJTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgICBzcGFuOm50aC1jaGlsZCgzKXtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaDJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIH1cblxuICAuaG9saWRheS1jb250YWluZXJ7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICAgIC8vIGJvcmRlciByYWRpdXMgZml4XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGlvbi1pdGVte1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxuXG5cbiAgLmlvblNlbGVjdFNwZWNpYWx7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICBpb24tbGlzdHtcbiAgICBpb24taXRlbXtcbiAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgIC5pdGVtLWlubmVye1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 87102:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cleanerschedules/cleanerschedules.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">My Availability</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotifications()\">\n        <ion-icon class=\"notification-icon\" name=\"notifications-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h2>MY AVAILABILITY</h2>\n  <div class=\"selection-container\">\n    <ion-list>\n      <ion-item>\n          <ion-select class=\"selectClass\" [(ngModel)]=\"day\" (ionChange)=\"onChangeDay()\" interface=\"action-sheet\">\n              <ion-select-option value=\"mon\">Monday</ion-select-option>\n              <ion-select-option value=\"tue\">Tuesday</ion-select-option>\n              <ion-select-option value=\"wed\">Wednesday</ion-select-option>\n              <ion-select-option value=\"thu\">Thursday</ion-select-option>\n              <ion-select-option value=\"fri\">Friday</ion-select-option>\n              <ion-select-option value=\"sat\">Saturday</ion-select-option>\n              <ion-select-option value=\"sun\">Sunday</ion-select-option>\n            </ion-select>\n      </ion-item>\n      <ion-item>\n          <ion-select class=\"selectClass\" [(ngModel)]=\"start\" interface=\"action-sheet\">\n              <ion-select-option value=\"06:00:00\"> 06:00:00 </ion-select-option>\n              <ion-select-option value=\"07:00:00\"> 07:00:00 </ion-select-option>\n              <ion-select-option value=\"08:00:00\"> 08:00:00 </ion-select-option>\n              <ion-select-option value=\"09:00:00\"> 09:00:00 </ion-select-option>\n              <ion-select-option value=\"10:00:00\"> 10:00:00 </ion-select-option>\n              <ion-select-option value=\"11:00:00\"> 11:00:00 </ion-select-option>\n              <ion-select-option value=\"12:00:00\"> 12:00:00 </ion-select-option>\n              <ion-select-option value=\"13:00:00\"> 13:00:00 </ion-select-option>\n              <ion-select-option value=\"14:00:00\"> 14:00:00 </ion-select-option>\n              <ion-select-option value=\"15:00:00\"> 15:00:00 </ion-select-option>\n              <ion-select-option value=\"16:00:00\"> 16:00:00 </ion-select-option>\n              <ion-select-option value=\"17:00:00\"> 17:00:00 </ion-select-option>\n              <ion-select-option value=\"18:00:00\"> 18:00:00 </ion-select-option>\n              <ion-select-option value=\"19:00:00\"> 19:00:00 </ion-select-option>\n              <ion-select-option value=\"20:00:00\"> 20:00:00 </ion-select-option>\n              <ion-select-option value=\"21:00:00\"> 21:00:00 </ion-select-option>\n              <ion-select-option value=\"22:00:00\"> 22:00:00 </ion-select-option>\n            </ion-select>\n      </ion-item>\n      <ion-item>\n          <ion-select class=\"selectClass\" [(ngModel)]=\"end\" interface=\"action-sheet\">\n              <ion-select-option value=\"06:00:00\"> 06:00:00 </ion-select-option>\n              <ion-select-option value=\"07:00:00\"> 07:00:00 </ion-select-option>\n              <ion-select-option value=\"08:00:00\"> 08:00:00 </ion-select-option>\n              <ion-select-option value=\"09:00:00\"> 09:00:00 </ion-select-option>\n              <ion-select-option value=\"10:00:00\"> 10:00:00 </ion-select-option>\n              <ion-select-option value=\"11:00:00\"> 11:00:00 </ion-select-option>\n              <ion-select-option value=\"12:00:00\"> 12:00:00 </ion-select-option>\n              <ion-select-option value=\"13:00:00\"> 13:00:00 </ion-select-option>\n              <ion-select-option value=\"14:00:00\"> 14:00:00 </ion-select-option>\n              <ion-select-option value=\"15:00:00\"> 15:00:00 </ion-select-option>\n              <ion-select-option value=\"16:00:00\"> 16:00:00 </ion-select-option>\n              <ion-select-option value=\"17:00:00\"> 17:00:00 </ion-select-option>\n              <ion-select-option value=\"18:00:00\"> 18:00:00 </ion-select-option>\n              <ion-select-option value=\"19:00:00\"> 19:00:00 </ion-select-option>\n              <ion-select-option value=\"20:00:00\"> 20:00:00 </ion-select-option>\n              <ion-select-option value=\"21:00:00\"> 21:00:00 </ion-select-option>\n              <ion-select-option value=\"22:00:00\"> 22:00:00 </ion-select-option>\n            </ion-select>\n      </ion-item>\n    </ion-list>\n      <ion-button expand=\"block\" class=\"base-button cleaner-btn schedule-btn\" (click)=\"upadateSchedule()\">UPDATE</ion-button>\n\n      <div class=\"holiday-container\">\n          <ion-item>\n              <ion-label>AVAILABLE</ion-label>\n              <ion-toggle [(ngModel)]=\"available\" (ionChange)=\"changeAvailability(available)\"></ion-toggle>\n          </ion-item>\n      </div>\n    </div>\n\n\n  <ion-segment scrollable [(ngModel)]=\"segment\" (ionChange)=\"onChangeSegment()\">\n    <ion-segment-button value=\"mon\">\n      Mon\n    </ion-segment-button>\n    <ion-segment-button value=\"tue\">\n      Tue\n    </ion-segment-button>\n    <ion-segment-button value=\"wed\">\n      Wed\n    </ion-segment-button>\n    <ion-segment-button value=\"thu\">\n      Thu\n    </ion-segment-button>\n    <ion-segment-button value=\"fri\">\n      Fri\n    </ion-segment-button>\n    <ion-segment-button value=\"sat\">\n      Sat\n    </ion-segment-button>\n    <ion-segment-button value=\"sun\">\n      Sun\n    </ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]=\"segment\">\n    <div *ngSwitchCase=\"'mon'\">\n      <div class=\"schedule-item-container\">\n        <div class=\"schedule-item\" *ngFor=\"let schedule of schedules?.mon\">\n            <span>{{schedule?.start}}</span>\n            <span>{{schedule?.end}}</span>\n            <span><img (click)=\"delete(schedule?.id)\" class=\"trash\" src=\"/assets/images/trash-black.png\"/></span>\n        </div>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'tue'\">\n      <div class=\"schedule-item-container\">\n        <div class=\"schedule-item\" *ngFor=\"let schedule of schedules?.tue\">\n            <span>{{schedule?.start}}</span>\n            <span>{{schedule?.end}}</span>\n            <span><img (click)=\"delete(schedule?.id)\" class=\"trash\" src=\"/assets/images/trash-black.png\"/></span>\n        </div>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'wed'\">\n      <div class=\"schedule-item-container\">\n        <div class=\"schedule-item\" *ngFor=\"let schedule of schedules?.wed\">\n            <span>{{schedule?.start}}</span>\n            <span>{{schedule?.end}}</span>\n            <span><img (click)=\"delete(schedule?.id)\" class=\"trash\" src=\"/assets/images/trash-black.png\"/></span>\n        </div>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'thu'\">\n      <div class=\"schedule-item-container\">\n        <div class=\"schedule-item\" *ngFor=\"let schedule of schedules?.thu\">\n            <span>{{schedule?.start}}</span>\n            <span>{{schedule?.end}}</span>\n            <span><img (click)=\"delete(schedule?.id)\" class=\"trash\" src=\"/assets/images/trash-black.png\"/></span>\n        </div>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'fri'\">\n      <div class=\"schedule-item-container\">\n        <div class=\"schedule-item\" *ngFor=\"let schedule of schedules?.fri\">\n            <span>{{schedule?.start}}</span>\n            <span>{{schedule?.end}}</span>\n            <span><img (click)=\"delete(schedule?.id)\" class=\"trash\" src=\"/assets/images/trash-black.png\"/></span>\n        </div>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'sat'\">\n      <div class=\"schedule-item-container\">\n        <div class=\"schedule-item\" *ngFor=\"let schedule of schedules?.sat\">\n            <span>{{schedule?.start}}</span>\n            <span>{{schedule?.end}}</span>\n            <span><img (click)=\"delete(schedule?.id)\" class=\"trash\" src=\"/assets/images/trash-black.png\"/></span>\n        </div>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'sun'\">\n      <div class=\"schedule-item-container\">\n        <div class=\"schedule-item\" *ngFor=\"let schedule of schedules?.sun\">\n            <span>{{schedule?.start}}</span>\n            <span>{{schedule?.end}}</span>\n            <span><img (click)=\"delete(schedule?.id)\" class=\"trash\" src=\"/assets/images/trash-black.png\"/></span>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cleanerschedules_cleanerschedules_module_ts-es2015.js.map