(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_bookings_bookings_module_ts"],{

/***/ 96134:
/*!***********************************************************!*\
  !*** ./src/app/pages/bookings/bookings-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsPageRoutingModule": function() { return /* binding */ BookingsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookings.page */ 50867);




const routes = [
    {
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_0__.BookingsPage
    }
];
let BookingsPageRoutingModule = class BookingsPageRoutingModule {
};
BookingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookingsPageRoutingModule);



/***/ }),

/***/ 13582:
/*!***************************************************!*\
  !*** ./src/app/pages/bookings/bookings.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsPageModule": function() { return /* binding */ BookingsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookings-routing.module */ 96134);
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookings.page */ 50867);







let BookingsPageModule = class BookingsPageModule {
};
BookingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingsPageRoutingModule
        ],
        declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_1__.BookingsPage]
    })
], BookingsPageModule);



/***/ }),

/***/ 50867:
/*!*************************************************!*\
  !*** ./src/app/pages/bookings/bookings.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsPage": function() { return /* binding */ BookingsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_bookings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bookings.page.html */ 7006);
/* harmony import */ var _bookings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookings.page.scss */ 94220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local.service */ 85298);
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/rest.service */ 43006);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utility.service */ 67278);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/events.service */ 80106);



/* eslint-disable object-shorthand */






let BookingsPage = class BookingsPage {
    constructor(localService, restService, utilityService, eventsService, router) {
        this.localService = localService;
        this.restService = restService;
        this.utilityService = utilityService;
        this.eventsService = eventsService;
        this.router = router;
        this.segment = 'current';
        this.bookings = [];
        this.pendingBookings = [];
        this.loggeduser = this.localService.getUser();
        this.currency = this.localService.getSettings().currency_symbol;
        this.utilityService.loadingOpen('Loading...');
        this.restService
            .getData('user/' + this.loggeduser.id + '/bookings')
            .subscribe((data) => {
            this.bookings = data;
            this.restService
                .getData('user/' + this.loggeduser.id + '/pendingbookings')
                .subscribe((success) => {
                this.pendingBookings = success;
                this.utilityService.loadingClose();
            }, (err) => {
                // handle error
            });
        }, (err) => {
            // handle error
        });
    }
    ngOnInit() { }
    bookingDetails(id) {
        this.router.navigate(['/orderdetails'], {
            queryParams: {
                id: id,
            },
        });
    }
    doRefresh(event) {
        this.restService
            .getData('user/' + this.loggeduser.id + '/bookings')
            .subscribe((data) => {
            this.bookings = data;
            this.restService
                .getData('user/' + this.loggeduser.id + '/pendingbookings')
                .subscribe((success) => {
                this.pendingBookings = success;
                event.target.complete();
            }, (err) => {
                // handle error
                event.target.complete();
            });
        }, (err) => {
            // handle error
            event.target.complete();
        });
    }
};
BookingsPage.ctorParameters = () => [
    { type: _services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService },
    { type: _services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__.EventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
BookingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-bookings',
        template: _raw_loader_bookings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bookings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BookingsPage);



/***/ }),

/***/ 94220:
/*!***************************************************!*\
  !*** ./src/app/pages/bookings/bookings.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-thumbnail {\n  --size: 75px;\n}\nion-content ion-thumbnail img {\n  border-radius: 50%;\n}\nion-content .details {\n  color: var(--ion-color-dark);\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 0.8rem;\n  width: 100%;\n}\nion-content .details .name {\n  font-size: 0.8rem;\n}\nion-content .details .price {\n  font-size: 0.8rem;\n}\nion-content .details .address {\n  white-space: normal !important;\n  font-size: 0.6rem;\n}\nion-content .date-time {\n  white-space: normal !important;\n  font-size: 0.6rem;\n}\nion-content ion-item:first-child {\n  border-top: none !important;\n}\nion-content .small-icon {\n  max-width: 10px;\n  vertical-align: middle;\n}\nion-content .central-page {\n  margin-top: 20px;\n}\nion-content .thumb {\n  height: 60px;\n  width: 60px;\n  background: var(--ion-color-light);\n  border-radius: 50%;\n  position: relative;\n  text-align: center;\n}\nion-content .thumb .title {\n  position: absolute;\n  top: 40%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n  color: var(--ion-color-base);\n  font-size: 0.4rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  line-height: 10px;\n}\nion-content .thumb .thumb-icon {\n  line-height: 60px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNFLFlBQUE7QUFGTjtBQUdNO0VBQ0Usa0JBQUE7QUFEUjtBQUtJO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFITjtBQUtNO0VBQ0UsaUJBQUE7QUFIUjtBQU1NO0VBQ0UsaUJBQUE7QUFKUjtBQU9NO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQUxSO0FBU0k7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBUE47QUFVSTtFQUNFLDJCQUFBO0FBUk47QUFXSTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQVROO0FBWUk7RUFDRSxnQkFBQTtBQVZOO0FBYUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBWFI7QUFhUTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBWFY7QUFjUTtFQUNFLGlCQUFBO0VBRUEsZ0JBQUE7QUFiViIsImZpbGUiOiJib29raW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG5cblxuICAgIGlvbi10aHVtYm5haWx7XG4gICAgICAtLXNpemU6IDc1cHg7XG4gICAgICBpbWd7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV0YWlsc3tcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5uYW1le1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cblxuICAgICAgLnByaWNle1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cblxuICAgICAgLmFkZHJlc3N7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRhdGUtdGltZXtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIH1cblxuICAgIGlvbi1pdGVtOmZpcnN0LWNoaWxke1xuICAgICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5zbWFsbC1pY29ue1xuICAgICAgbWF4LXdpZHRoOiAxMHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAuY2VudHJhbC1wYWdle1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAudGh1bWJ7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDQwJTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJhc2UpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC40cmVtO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRodW1iLWljb257XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgLy8gZm9udC1zaXplOiAzLjVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0= */");

/***/ }),

/***/ 7006:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Bookings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div class=\"booking-buttons-container\">\n      <ion-segment [(ngModel)]=\"segment\">\n        <ion-segment-button value=\"current\">\n          My Bookings\n        </ion-segment-button>\n        <ion-segment-button value=\"pending\">\n          Pending Bookings\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <ion-row>\n        <ion-col>\n            <div class=\"hr\"></div>\n        </ion-col>\n    </ion-row>\n\n    <div [ngSwitch]=\"segment\">\n      <ion-list *ngSwitchCase=\"'current'\">\n        <ion-item *ngFor=\"let booking of bookings\" (click)=\"bookingDetails(booking.id)\">\n          <ion-thumbnail slot=\"start\">\n            <div class=\"thumb\" *ngIf=\"!booking?.cleaner?.image\">\n              <!-- <p class=\"title\">No Image available</p> -->\n              <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n            </div>\n            <img *ngIf=\"booking?.cleaner?.image\" src=\"{{utilityService.uploadPath}}profile/{{booking?.cleaner?.image}}\">\n          </ion-thumbnail>\n          <div class=\"details\">\n                <ion-row>\n                  <ion-col size=\"9\" class=\"name\">{{booking?.cleaner?.name}}</ion-col>\n                  <ion-col size=\"3\" class=\"price ion-text-right\">{{currency}}{{booking?.price}}</ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\" class=\"address\"><img class=\"small-icon\" src=\"/assets/images/Location.png\" /> {{booking?.address}}</ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col size=\"8\" class=\"date-time\"><img class=\"small-icon\" src=\"/assets/images/Date.png\" /> {{booking?.date | date: 'dd-MM-y'}}</ion-col>\n                    <ion-col size=\"4\" class=\"ion-text-right date-time\"><img class=\"small-icon\" src=\"/assets/images/Time.png\" /> {{booking?.time}}</ion-col>\n                </ion-row>\n          </div>\n        </ion-item>\n        <ion-item>\n          <div class=\"central-page\" *ngIf=\"bookings.length === 0\">\n            <div class=\"notfound\">No results found</div>\n          </div>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngSwitchCase=\"'pending'\">\n        <ion-item *ngFor=\"let booking of pendingBookings\" (click)=\"bookingDetails(booking.id)\">\n          <ion-thumbnail slot=\"start\">\n            <div class=\"thumb\">\n              <p class=\"title\" *ngIf=\"booking.status === 'paid'\">Pending Confirmation</p>\n              <p class=\"title\" *ngIf=\"booking.status === 'pending'\">Pending Payment</p>\n              <p class=\"title\" *ngIf=\"booking.status === 'cancelled-cleaner'\">Pending Cleaner reassign</p>\n              <p class=\"title\" *ngIf=\"booking.status === 'cancelled-user' || booking.status === 'cancelled-admin'\">Cancelled</p>\n            </div>\n          </ion-thumbnail>\n          <div class=\"details\">\n                <ion-row>\n                  <ion-col size=\"9\" class=\"name\">{{booking?.user?.name}}</ion-col>\n                  <ion-col size=\"3\" class=\"price ion-text-right\">{{currency}}{{booking?.price}}</ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\" class=\"address\"><img class=\"small-icon\" src=\"/assets/images/Location.png\" /> {{booking?.address}}</ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col size=\"8\" class=\"date-time\"><img class=\"small-icon\" src=\"/assets/images/Date.png\" /> {{booking?.date | date: 'dd-MM-y'}}</ion-col>\n                    <ion-col size=\"4\" class=\"ion-text-right date-time\"><img class=\"small-icon\" src=\"/assets/images/Time.png\" /> {{booking?.time}}</ion-col>\n                </ion-row>\n          </div>\n        </ion-item>\n        <ion-item>\n          <div class=\"central-page\" *ngIf=\"pendingBookings.length === 0\">\n            <div class=\"notfound\">No results found</div>\n          </div>\n        </ion-item>\n      </ion-list>\n    </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_bookings_bookings_module_ts-es2015.js.map