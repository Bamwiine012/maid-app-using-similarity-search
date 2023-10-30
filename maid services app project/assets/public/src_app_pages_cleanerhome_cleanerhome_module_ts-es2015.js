(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_cleanerhome_cleanerhome_module_ts"],{

/***/ 63777:
/*!*****************************************************************!*\
  !*** ./src/app/pages/cleanerhome/cleanerhome-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleanerhomePageRoutingModule": function() { return /* binding */ CleanerhomePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cleanerhome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanerhome.page */ 24954);




const routes = [
    {
        path: '',
        component: _cleanerhome_page__WEBPACK_IMPORTED_MODULE_0__.CleanerhomePage
    }
];
let CleanerhomePageRoutingModule = class CleanerhomePageRoutingModule {
};
CleanerhomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CleanerhomePageRoutingModule);



/***/ }),

/***/ 20289:
/*!*********************************************************!*\
  !*** ./src/app/pages/cleanerhome/cleanerhome.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleanerhomePageModule": function() { return /* binding */ CleanerhomePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cleanerhome_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanerhome-routing.module */ 63777);
/* harmony import */ var _cleanerhome_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cleanerhome.page */ 24954);







let CleanerhomePageModule = class CleanerhomePageModule {
};
CleanerhomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cleanerhome_routing_module__WEBPACK_IMPORTED_MODULE_0__.CleanerhomePageRoutingModule
        ],
        declarations: [_cleanerhome_page__WEBPACK_IMPORTED_MODULE_1__.CleanerhomePage]
    })
], CleanerhomePageModule);



/***/ }),

/***/ 24954:
/*!*******************************************************!*\
  !*** ./src/app/pages/cleanerhome/cleanerhome.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleanerhomePage": function() { return /* binding */ CleanerhomePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cleanerhome_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cleanerhome.page.html */ 64354);
/* harmony import */ var _cleanerhome_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cleanerhome.page.scss */ 25120);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/events.service */ 80106);
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local.service */ 85298);
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest.service */ 43006);
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utility.service */ 67278);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);



/* eslint-disable object-shorthand */







let CleanerhomePage = class CleanerhomePage {
    constructor(localService, restService, utilityService, eventsService, router, activatedRoute, iab) {
        this.localService = localService;
        this.restService = restService;
        this.utilityService = utilityService;
        this.eventsService = eventsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.iab = iab;
        this.segment = 'upcoming';
        this.bookings = [];
        this.slideOptions = {
            initialSlide: 0,
            autoplay: true,
            loop: true,
            speed: 2000,
            effect: 'fade',
        };
        this.showBanner = false;
        this.banners = [];
        this.loggedCleaner = this.localService.getCleaner();
        this.currency = this.localService.getSettings().currency_symbol;
        if (this.localService.getSettings().hasOwnProperty('show_banner_cleaners') &&
            this.localService.getSettings().show_banner_cleaners === '1') {
            this.restService.getData('cleaner/banners').subscribe((data) => {
                this.banners = data;
                if (data.length > 0) {
                    this.showBanner = true;
                }
            }, (err) => { });
        }
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.getData();
    }
    bookingDetails(id, type) {
        if (type === 'booking') {
            // type is booking
            this.restService.getData('jobdetails/' + id).subscribe((data) => {
                this.router.navigate(['/bookingdetails'], {
                    queryParams: {
                        id: data.id,
                        type: type,
                        data: JSON.stringify(data),
                    },
                });
            }, (err) => { });
        }
        else {
            // type is subscription
            this.restService.getData('jobhistory/' + id).subscribe((data) => {
                this.router.navigate(['/bookingdetails'], {
                    queryParams: {
                        id: data.id,
                        type: type,
                        data: JSON.stringify(data),
                    },
                });
            }, (err) => { });
        }
    }
    openNotifications() {
        this.router.navigate(['/cleanernotifications']);
    }
    getData() {
        this.loggedCleaner = this.localService.getCleaner();
        this.utilityService.loadingOpen('Loading...');
        this.restService
            .getData('cleaner/' + this.loggedCleaner.id + '/bookings')
            .subscribe((data) => {
            this.bookings = data;
            this.utilityService.loadingClose();
        }, (err) => {
            // handle error
            this.utilityService.loadingClose();
        });
    }
    doRefresh(event) {
        this.restService
            .getData('cleaner/' + this.loggedCleaner.id + '/bookings')
            .subscribe((data) => {
            this.bookings = data;
            event.target.complete();
        }, (err) => {
            // handle error
            event.target.complete();
        });
    }
    openLink(link) {
        if (link && link !== '' && link !== '#') {
            this.iab.create(link, '_blank', {
                location: 'no',
                hardwareback: 'no',
                hidenavigationbuttons: 'yes',
                hideurlbar: 'yes',
                fullscreen: 'yes',
                zoom: 'no',
                clearcache: 'yes',
                toolbar: 'yes',
            });
        }
    }
};
CleanerhomePage.ctorParameters = () => [
    { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__.RestService },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__.UtilityService },
    { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser }
];
CleanerhomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-cleanerhome',
        template: _raw_loader_cleanerhome_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cleanerhome_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CleanerhomePage);



/***/ }),

/***/ 25120:
/*!*********************************************************!*\
  !*** ./src/app/pages/cleanerhome/cleanerhome.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .page-padding-container {\n  margin: auto 15px;\n}\nion-content ion-thumbnail {\n  --size: 75px;\n}\nion-content ion-thumbnail img {\n  border-radius: 50%;\n}\nion-content .details {\n  color: var(--ion-color-dark);\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 0.8rem;\n  width: 100%;\n}\nion-content .details .name {\n  font-size: 0.8rem;\n}\nion-content .details .price {\n  font-size: 0.8rem;\n}\nion-content .details .address {\n  white-space: normal !important;\n  font-size: 0.6rem;\n}\nion-content .date-time {\n  white-space: normal !important;\n  font-size: 0.6rem;\n}\nion-content ion-item:first-child {\n  border-top: none !important;\n}\nion-content .small-icon {\n  max-width: 10px;\n  vertical-align: middle;\n}\nion-content .central-page {\n  margin-top: 20px;\n}\nion-content .thumb {\n  height: 60px;\n  width: 60px;\n  background: var(--ion-color-light);\n  border-radius: 50%;\n  position: relative;\n  text-align: center;\n}\nion-content .thumb .title {\n  position: absolute;\n  top: 40%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n  color: var(--ion-color-base);\n  font-size: 0.4rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  line-height: 10px;\n}\nion-content .thumb .thumb-icon {\n  line-height: 60px;\n  margin-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsZWFuZXJob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGlCQUFBO0FBREo7QUFJSTtFQUNFLFlBQUE7QUFGTjtBQUdNO0VBQ0Usa0JBQUE7QUFEUjtBQUtJO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFITjtBQUtNO0VBQ0UsaUJBQUE7QUFIUjtBQU1NO0VBQ0UsaUJBQUE7QUFKUjtBQU9NO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQUxSO0FBU0k7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBUE47QUFVSTtFQUNFLDJCQUFBO0FBUk47QUFXSTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQVROO0FBWUk7RUFDRSxnQkFBQTtBQVZOO0FBYUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBWFI7QUFhUTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBWFY7QUFjUTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFaViIsImZpbGUiOiJjbGVhbmVyaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG5cbiAgLnBhZ2UtcGFkZGluZy1jb250YWluZXJ7XG4gICAgbWFyZ2luOiBhdXRvIDE1cHg7XG4gIH1cblxuICAgIGlvbi10aHVtYm5haWx7XG4gICAgICAtLXNpemU6IDc1cHg7XG4gICAgICBpbWd7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV0YWlsc3tcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5uYW1le1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cblxuICAgICAgLnByaWNle1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cblxuICAgICAgLmFkZHJlc3N7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRhdGUtdGltZXtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIH1cblxuICAgIGlvbi1pdGVtOmZpcnN0LWNoaWxke1xuICAgICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5zbWFsbC1pY29ue1xuICAgICAgbWF4LXdpZHRoOiAxMHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAuY2VudHJhbC1wYWdle1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAudGh1bWJ7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDQwJTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJhc2UpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC40cmVtO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRodW1iLWljb257XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19 */");

/***/ }),

/***/ 64354:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cleanerhome/cleanerhome.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-toggle><ion-icon name=\"menu-outline\"></ion-icon></ion-menu-toggle>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Home</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotifications()\">\n        <ion-icon class=\"notification-icon\" name=\"notifications-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"banner-container\" *ngIf=\"showBanner\">\n    <ion-slides [options]=\"slideOptions\">\n        <ion-slide *ngFor=\"let banner of banners\" (click)='openLink(banner.link)'>\n            <img src=\"{{utilityService.uploadPath}}/banner/{{banner.image}}\">\n        </ion-slide>\n    </ion-slides>\n  </div>\n  <div class=\"page-padding-container\">\n    <div class=\"booking-buttons-container\">\n      <ion-segment [(ngModel)]=\"segment\">\n        <ion-segment-button value=\"upcoming\">\n          Upcoming\n        </ion-segment-button>\n        <ion-segment-button value=\"completed\">\n          Completed\n        </ion-segment-button>\n        <ion-segment-button value=\"pending\">\n          Pending\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <ion-row>\n        <ion-col>\n            <div class=\"hr\"></div>\n        </ion-col>\n    </ion-row>\n\n    <div [ngSwitch]=\"segment\">\n      <ion-list *ngSwitchCase=\"'upcoming'\">\n        <ion-item *ngFor=\"let booking of bookings?.upcoming\">\n          <ion-thumbnail slot=\"start\" *ngIf=\"!booking?.job_id\" (click)=\"bookingDetails(booking.id, 'booking')\">\n            <div class=\"thumb\" *ngIf=\"!booking?.user?.image\">\n              <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n            </div>\n            <img *ngIf=\"booking?.user?.image\" src=\"{{utilityService.uploadPath}}profile/{{booking?.user?.image}}\">\n          </ion-thumbnail>\n          <ion-thumbnail slot=\"start\" *ngIf=\"booking?.job_id\" (click)=\"bookingDetails(booking.id, 'subscription')\">\n            <div class=\"thumb\" *ngIf=\"!booking?.job?.user?.image\">\n              <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n            </div>\n            <img *ngIf=\"booking?.job?.user?.image\" src=\"{{utilityService.uploadPath}}profile/{{booking?.job?.user?.image}}\">\n          </ion-thumbnail>\n\n          <div class=\"details\" *ngIf=\"!booking?.job_id\" (click)=\"bookingDetails(booking.id, 'booking')\">\n                <ion-row>\n                  <ion-col size=\"9\" class=\"name\">{{booking?.user?.name}}</ion-col>\n                  <ion-col size=\"3\" class=\"price ion-text-right\">{{currency}}{{booking?.total}}</ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\" class=\"address\"><img class=\"small-icon\" src=\"/assets/images/Location.png\" /> {{booking?.address}}</ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col size=\"8\" class=\"date-time\"><img class=\"small-icon\" src=\"/assets/images/Date.png\" /> {{booking?.date | date: 'dd-MM-y'}}</ion-col>\n                    <ion-col size=\"4\" class=\"ion-text-right date-time\"><img class=\"small-icon\" src=\"/assets/images/Time.png\" /> {{booking?.time}}</ion-col>\n                </ion-row>\n          </div>\n          <div class=\"details\" *ngIf=\"booking?.job_id\" (click)=\"bookingDetails(booking.id, 'subscription')\">\n              <ion-row>\n                <ion-col size=\"9\" class=\"name\">{{booking?.job?.user?.name}}</ion-col>\n                <ion-col size=\"3\" class=\"price ion-text-right\">{{currency}}{{booking?.job?.total}}</ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\" class=\"address\"><img class=\"small-icon\" src=\"/assets/images/Location.png\" /> {{booking?.job?.address}}</ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col size=\"8\" class=\"date-time\"><img class=\"small-icon\" src=\"/assets/images/Date.png\" /> {{booking?.date | date: 'dd-MM-y'}}</ion-col>\n                  <ion-col size=\"4\" class=\"ion-text-right date-time\"><img class=\"small-icon\" src=\"/assets/images/Time.png\" /> {{booking?.time}}</ion-col>\n              </ion-row>\n          </div>\n        </ion-item>\n        <ion-item>\n          <div class=\"central-page\" *ngIf=\"bookings?.upcoming?.length === 0\">\n              <div class=\"notfound\">No results found</div>\n          </div>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngSwitchCase=\"'completed'\">\n        <ion-item *ngFor=\"let booking of bookings?.completed\">\n          <ion-thumbnail slot=\"start\" *ngIf=\"!booking?.job_id\" (click)=\"bookingDetails(booking.id, 'booking')\">\n            <div class=\"thumb\" *ngIf=\"!booking?.user?.image\">\n              <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n            </div>\n            <img *ngIf=\"booking?.user?.image\" src=\"{{utilityService.uploadPath}}profile/{{booking?.user?.image}}\">\n          </ion-thumbnail>\n          <ion-thumbnail slot=\"start\" *ngIf=\"booking?.job_id\" (click)=\"bookingDetails(booking.id, 'subscription')\">\n            <div class=\"thumb\" *ngIf=\"!booking?.job?.user?.image\">\n              <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n            </div>\n            <img *ngIf=\"booking?.job?.user?.image\" src=\"{{utilityService.uploadPath}}profile/{{booking?.job?.user?.image}}\">\n          </ion-thumbnail>\n\n          <div class=\"details\" *ngIf=\"!booking?.job_id\" (click)=\"bookingDetails(booking.id, 'booking')\">\n                <ion-row>\n                  <ion-col size=\"9\" class=\"name\">{{booking?.user?.name}}</ion-col>\n                  <ion-col size=\"3\" class=\"price ion-text-right\">{{currency}}{{booking?.total}}</ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\" class=\"address\"><img class=\"small-icon\" src=\"/assets/images/Location.png\" /> {{booking?.address}}</ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col size=\"8\" class=\"date-time\"><img class=\"small-icon\" src=\"/assets/images/Date.png\" /> {{booking?.date | date: 'dd-MM-y'}}</ion-col>\n                    <ion-col size=\"4\" class=\"ion-text-right date-time\"><img class=\"small-icon\" src=\"/assets/images/Time.png\" /> {{booking?.time}}</ion-col>\n                </ion-row>\n          </div>\n          <div class=\"details\" *ngIf=\"booking?.job_id\" (click)=\"bookingDetails(booking.id, 'subscription')\">\n              <ion-row>\n                <ion-col size=\"9\" class=\"name\">{{booking?.job?.user?.name}}</ion-col>\n                <ion-col size=\"3\" class=\"price ion-text-right\">{{currency}}{{booking?.job?.total}}</ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\" class=\"address\"><img class=\"small-icon\" src=\"/assets/images/Location.png\" /> {{booking?.job?.address}}</ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col size=\"8\" class=\"date-time\"><img class=\"small-icon\" src=\"/assets/images/Date.png\" /> {{booking?.date | date: 'dd-MM-y'}}</ion-col>\n                  <ion-col size=\"4\" class=\"ion-text-right date-time\"><img class=\"small-icon\" src=\"/assets/images/Time.png\" /> {{booking?.time}}</ion-col>\n              </ion-row>\n          </div>\n        </ion-item>\n        <ion-item>\n          <div class=\"central-page\" *ngIf=\"bookings?.completed?.length === 0\">\n            <div class=\"notfound\">No results found</div>\n          </div>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngSwitchCase=\"'pending'\">\n        <ion-item *ngFor=\"let booking of bookings?.pending\">\n          <ion-thumbnail slot=\"start\" *ngIf=\"!booking?.job_id\" (click)=\"bookingDetails(booking.id, 'booking')\">\n            <div class=\"thumb\" *ngIf=\"!booking?.user?.image\">\n              <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n            </div>\n            <img *ngIf=\"booking?.user?.image\" src=\"{{utilityService.uploadPath}}profile/{{booking?.user?.image}}\">\n          </ion-thumbnail>\n          <ion-thumbnail slot=\"start\" *ngIf=\"booking?.job_id\" (click)=\"bookingDetails(booking.id, 'subscription')\">\n            <div class=\"thumb\" *ngIf=\"!booking?.job?.user?.image\">\n              <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n            </div>\n            <img *ngIf=\"booking?.job?.user?.image\" src=\"{{utilityService.uploadPath}}profile/{{booking?.job?.user?.image}}\">\n          </ion-thumbnail>\n\n          <div class=\"details\" *ngIf=\"!booking?.job_id\" (click)=\"bookingDetails(booking.id, 'booking')\">\n                <ion-row>\n                  <ion-col size=\"9\" class=\"name\">{{booking?.user?.name}}</ion-col>\n                  <ion-col size=\"3\" class=\"price ion-text-right\">{{currency}}{{booking?.total}}</ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\" class=\"address\"><img class=\"small-icon\" src=\"/assets/images/Location.png\" /> {{booking?.address}}</ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col size=\"8\" class=\"date-time\"><img class=\"small-icon\" src=\"/assets/images/Date.png\" /> {{booking?.date | date: 'dd-MM-y'}}</ion-col>\n                    <ion-col size=\"4\" class=\"ion-text-right date-time\"><img class=\"small-icon\" src=\"/assets/images/Time.png\" /> {{booking?.time}}</ion-col>\n                </ion-row>\n          </div>\n          <div class=\"details\" *ngIf=\"booking?.job_id\" (click)=\"bookingDetails(booking.id, 'subscription')\">\n              <ion-row>\n                <ion-col size=\"9\" class=\"name\">{{booking?.job?.user?.name}}</ion-col>\n                <ion-col size=\"3\" class=\"price ion-text-right\">{{currency}}{{booking?.job?.total}}</ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\" class=\"address\"><img class=\"small-icon\" src=\"/assets/images/Location.png\" /> {{booking?.job?.address}}</ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col size=\"8\" class=\"date-time\"><img class=\"small-icon\" src=\"/assets/images/Date.png\" /> {{booking?.date | date: 'dd-MM-y'}}</ion-col>\n                  <ion-col size=\"4\" class=\"ion-text-right date-time\"><img class=\"small-icon\" src=\"/assets/images/Time.png\" /> {{booking?.time}}</ion-col>\n              </ion-row>\n          </div>\n        </ion-item>\n        <ion-item>\n          <div class=\"central-page\" *ngIf=\"bookings?.pending?.length === 0\">\n            <div class=\"notfound\">No results found</div>\n          </div>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cleanerhome_cleanerhome_module_ts-es2015.js.map