(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_bookingdetails_bookingdetails_module_ts"],{

/***/ 27910:
/*!***********************************************************************!*\
  !*** ./src/app/pages/bookingdetails/bookingdetails-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingdetailsPageRoutingModule": function() { return /* binding */ BookingdetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _bookingdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookingdetails.page */ 14578);




const routes = [
    {
        path: '',
        component: _bookingdetails_page__WEBPACK_IMPORTED_MODULE_0__.BookingdetailsPage
    }
];
let BookingdetailsPageRoutingModule = class BookingdetailsPageRoutingModule {
};
BookingdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookingdetailsPageRoutingModule);



/***/ }),

/***/ 2708:
/*!***************************************************************!*\
  !*** ./src/app/pages/bookingdetails/bookingdetails.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingdetailsPageModule": function() { return /* binding */ BookingdetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _bookingdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookingdetails-routing.module */ 27910);
/* harmony import */ var _bookingdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookingdetails.page */ 14578);







let BookingdetailsPageModule = class BookingdetailsPageModule {
};
BookingdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bookingdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingdetailsPageRoutingModule
        ],
        declarations: [_bookingdetails_page__WEBPACK_IMPORTED_MODULE_1__.BookingdetailsPage]
    })
], BookingdetailsPageModule);



/***/ }),

/***/ 14578:
/*!*************************************************************!*\
  !*** ./src/app/pages/bookingdetails/bookingdetails.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingdetailsPage": function() { return /* binding */ BookingdetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_bookingdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bookingdetails.page.html */ 69575);
/* harmony import */ var _bookingdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookingdetails.page.scss */ 50049);
/* harmony import */ var _clientinstructions_clientinstructions_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../clientinstructions/clientinstructions.page */ 79742);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/events.service */ 80106);
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local.service */ 85298);
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest.service */ 43006);
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utility.service */ 67278);





/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */







let BookingdetailsPage = class BookingdetailsPage {
    constructor(localService, restService, utilityService, eventsService, router, activatedRoute, location, modalCtrl, routerOutlet) {
        this.localService = localService;
        this.restService = restService;
        this.utilityService = utilityService;
        this.eventsService = eventsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.modalCtrl = modalCtrl;
        this.routerOutlet = routerOutlet;
        this.id = null;
        this.type = null;
        this.data = null;
        this.job = {};
        this.settings = {};
        this.paymentStatus = 'Amount Paid';
        this.canGoBack = false;
        this.loggedCleaner = this.localService.getCleaner();
        this.settings = this.localService.getSettings();
        this.currency = this.settings.currency_symbol;
        this.activatedRoute.queryParams.subscribe((params) => {
            this.id = params.id;
            this.type = params.type;
            this.data = JSON.parse(params.data);
            if (this.id && this.type) {
                // payble / paid decide
                if (this.data.status === 'pending') {
                    this.paymentStatus = 'Amount Payable';
                }
                if (this.type === 'booking') {
                    // get order data
                    this.job = this.data;
                    // coupon condition
                    if (this.data.coupon_id) {
                        if (this.data.coupon.type === 'percentage') {
                            this.off = (this.data.total * this.data.coupon.value) / 100;
                        }
                        else {
                            // flat discount
                            this.off = this.data.coupon.value;
                        }
                    }
                }
                else if (this.type === 'subscription') {
                    this.job = this.data.job;
                    // update date with service date here
                    this.job.date = this.data.date;
                    // update the satatus with history status
                    this.job.status = this.data.status;
                    // coupon condition
                    if (this.data.job.coupon_id) {
                        if (this.data.job.coupon.type === 'percentage') {
                            this.off =
                                (this.data.job.total * this.data.job.coupon.value) / 100;
                        }
                        else {
                            // flat discount
                            this.off = this.job.data.coupon.value;
                        }
                    }
                }
                // this.serviceApi.loadingClose();
                // trim whitespace from address
                this.job.address = this.job.address.trim();
                // calculate the payable price as per commission
                if (this.settings.commission_type === 'percentage') {
                    // percentage
                    this.job.total =
                        this.job.total - (this.job.total * this.settings.commission) / 100;
                }
                else {
                    // flat
                    this.job.total = this.job.total - this.settings.commission;
                }
            }
            else {
                this.location.back();
            }
        });
    }
    ngOnInit() {
        this.canGoBack = this.routerOutlet && this.routerOutlet.canGoBack();
    }
    jobStatusChange(id, status) {
        console.log(id);
        if (status === 'completed') {
            // check for current time & job time
            const dateExplode = this.job.date.split('-');
            const job_date = new Date(dateExplode[0] +
                '/' +
                dateExplode[1] +
                '/' +
                dateExplode[2] +
                ' ' +
                this.job.time);
            if (new Date() <= job_date) {
                return this.utilityService.openAlerts('Oops', 'You can only mark as completed once the service time has elapsed.', 'ok');
            }
        }
        this.utilityService.loadingOpen('Processing...');
        this.restService
            .postData('jobstatuschange', { id: id, status: status })
            .subscribe((data) => {
            this.job.status = data.status;
            this.utilityService.loadingClose();
            this.router.navigateByUrl('/cleanerhome');
        }, (err) => {
            this.utilityService.loadingClose();
        });
    }
    historyStatusChange(id) {
        console.log(id);
        // check for current time & job time
        const dateExplode = this.job.date.split('-');
        const job_date = new Date(dateExplode[0] +
            '/' +
            dateExplode[1] +
            '/' +
            dateExplode[2] +
            ' ' +
            this.job.time);
        if (new Date() <= job_date) {
            return this.utilityService.openAlerts('Oops', 'You can only mark as completed once the service time has elapsed.', 'ok');
        }
        this.utilityService.loadingOpen('Processing...');
        this.restService.postData('historystatuschange', { id: id }).subscribe((data) => {
            this.job.status = 'completed';
            this.utilityService.loadingClose();
            this.router.navigateByUrl('/cleanerhome');
        }, (err) => {
            this.utilityService.loadingClose();
        });
    }
    getFrequency(name) {
        return this.utilityService.frequencies[name];
    }
    openChat() {
        this.router.navigate(['/chat'], {
            queryParams: {
                user_id: this.job.user.id,
                cleaner_id: this.job.cleaner.id,
            },
        });
    }
    openNotifications() {
        this.router.navigate(['/cleanernotifications']);
    }
    openInstructions(job) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!job.extra_services) {
                return this.utilityService.openAlerts('Oops!', 'No instructions provided', 'ok');
            }
            // open in modal
            const modal = yield this.modalCtrl.create({
                component: _clientinstructions_clientinstructions_page__WEBPACK_IMPORTED_MODULE_2__.ClientinstructionsPage,
                componentProps: {
                    data: job,
                },
                showBackdrop: true,
                backdropDismiss: true,
                cssClass: 'client-instructions-modal',
            });
            yield modal.present();
        });
    }
};
BookingdetailsPage.ctorParameters = () => [
    { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__.LocalService },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_5__.RestService },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__.UtilityService },
    { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRouterOutlet }
];
BookingdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-bookingdetails',
        template: _raw_loader_bookingdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bookingdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BookingdetailsPage);



/***/ }),

/***/ 50049:
/*!***************************************************************!*\
  !*** ./src/app/pages/bookingdetails/bookingdetails.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .heading {\n  font-size: 0.8rem;\n}\nion-content .image-section {\n  margin-top: 10px;\n  border-bottom: 1px solid var(--ion-color-gray);\n  padding-bottom: 15px;\n}\nion-content .profile-image {\n  height: 140px;\n  width: 140px;\n  border-radius: 50%;\n  background-color: black;\n}\nion-content .profile-name-section {\n  height: 100%;\n  position: relative;\n  text-transform: uppercase;\n  text-align: center;\n}\nion-content .profile-name-section .name-container {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\nion-content .profile-name-section h2 {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin-bottom: 5px;\n  letter-spacing: 1px;\n}\nion-content .order-details-section {\n  text-transform: uppercase;\n  color: var(--ion-color-dark);\n  margin: 10px 25px;\n  font-size: 0.8rem;\n}\nion-content .order-details-section h4 {\n  font-size: 1rem;\n  font-weight: 600;\n}\nion-content .order-details-section .heading {\n  font-weight: 500;\n}\nion-content .order-details-section .desc {\n  color: var(--ion-color-dark);\n}\nion-content .order-details-section ion-col {\n  padding: 3px;\n}\nion-content .order-details-section .total {\n  margin-top: 8px;\n  font-weight: 500;\n}\nion-content .pricing-section {\n  text-transform: uppercase;\n  color: var(--ion-color-dark);\n  margin: 10px 25px;\n}\nion-content .pricing-section ion-row {\n  margin: 10px auto;\n}\nion-content .pricing-section .pricing {\n  font-size: 0.8rem;\n  padding: 0;\n}\nion-content strong {\n  letter-spacing: 1px;\n}\nion-content .no-cleaner {\n  text-align: center;\n  margin: auto;\n}\nion-content .rating-container {\n  text-align: center;\n  margin: auto;\n}\nion-content .review-section {\n  text-transform: uppercase;\n  color: var(--ion-color-dark);\n  margin: 10px auto;\n  border-top: 0.8px solid var(--ion-color-gray);\n  padding-top: 15px;\n}\nion-content .review-section h4 {\n  font-size: 1rem;\n  font-weight: 600;\n}\nion-content .cancel {\n  background: var(--ion-color-base);\n  font-size: 1rem !important;\n}\nion-content .order-no {\n  text-align: center;\n  margin: 5px auto;\n  font-weight: 600;\n  padding-bottom: 8px !important;\n}\nion-content .order-no::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  width: 100px;\n  height: 2px;\n  background: var(--ion-color-base);\n  bottom: 0;\n  transform: translateX(-50%) rotate(-4deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmdkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0FBQUo7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsOENBQUE7RUFDQSxvQkFBQTtBQUFOO0FBRUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFBUjtBQUdJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUROO0FBR007RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBRFI7QUFHTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFPSTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBTE47QUFPTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUxSO0FBUU07RUFDRSxnQkFBQTtBQU5SO0FBUU07RUFDRSw0QkFBQTtBQU5SO0FBU007RUFDRSxZQUFBO0FBUFI7QUFVTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVJSO0FBYUk7RUFFRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUFaTjtBQWNNO0VBQ0UsaUJBQUE7QUFaUjtBQWVNO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBYlI7QUFvQkk7RUFDRSxtQkFBQTtBQWxCTjtBQXFCSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQW5CUjtBQXVCSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQXJCTjtBQXdCSTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0EsaUJBQUE7QUF0Qk47QUF3Qk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUF0QlI7QUEwQkk7RUFDRSxpQ0FBQTtFQUNBLDBCQUFBO0FBeEJOO0FBMkJJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUF6Qk47QUEwQk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLFNBQUE7RUFDQSx5Q0FBQTtBQXhCUiIsImZpbGUiOiJib29raW5nZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC5oZWFkaW5ne1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gICAgLmltYWdlLXNlY3Rpb257XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmF5KTtcbiAgICAgIHBhZGRpbmctYm90dG9tOjE1cHg7XG4gICAgfVxuICAgIC5wcm9maWxlLWltYWdle1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgLnByb2ZpbGUtbmFtZS1zZWN0aW9ue1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgLm5hbWUtY29udGFpbmVye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuICAgICAgaDJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICB9XG4gICAgfVxuXG5cblxuICAgIC5vcmRlci1kZXRhaWxzLXNlY3Rpb257XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIG1hcmdpbjogMTBweCAyNXB4O1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG5cbiAgICAgIGg0e1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkaW5ne1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgICAgLmRlc2N7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICB9XG5cbiAgICAgIGlvbi1jb2x7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgIH1cblxuICAgICAgLnRvdGFse1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAucHJpY2luZy1zZWN0aW9ue1xuXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIG1hcmdpbjogMTBweCAyNXB4O1xuXG4gICAgICBpb24tcm93e1xuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgIH1cblxuICAgICAgLnByaWNpbmd7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG5cblxuICAgIH1cblxuICAgIHN0cm9uZ3tcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgfVxuXG4gICAgLm5vLWNsZWFuZXJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cblxuXG4gICAgLnJhdGluZy1jb250YWluZXJ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG4gICAgLnJldmlldy1zZWN0aW9ue1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgIGJvcmRlci10b3A6IDAuOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmF5KTtcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuXG4gICAgICBoNHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYW5jZWx7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmFzZSk7XG4gICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAub3JkZXItbm97XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgICAgICY6OmFmdGVye1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iYXNlKTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKC00ZGVnKTtcbiAgICAgIH1cbiAgICB9XG5cblxufVxuIl19 */");

/***/ }),

/***/ 69575:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookingdetails/bookingdetails.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button *ngIf=\"canGoBack\"></ion-back-button>\n      <ion-menu-toggle *ngIf=\"!canGoBack\"><ion-icon name=\"menu-outline\"></ion-icon></ion-menu-toggle>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Booking Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotifications()\">\n        <ion-icon class=\"notification-icon\" name=\"notifications-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-row class=\"image-section\" *ngIf=\"job?.user\">\n        <ion-col col-6 *ngIf=\"job?.user?.image\">\n            <img class=\"profile-image\" src=\"{{utilityService.uploadPath}}profile/{{job?.user?.image}}\">\n        </ion-col>\n        <ion-col col-6 *ngIf=\"!job?.user?.image\">\n            <div class=\"thumb-image\">\n              <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n            </div>\n        </ion-col>\n\n        <ion-col col-6>\n          <div class=\"profile-name-section\">\n            <div class=\"name-container\">\n                <h2>{{job?.user?.name}}</h2>\n                <div *ngIf=\"localService.getSettings().CHAT_MODULE_ENABLED === true\">\n                  <img (click)=\"openChat()\" class=\"chat-icon\" src=\"assets/images/icon-chat-black.png\">\n                </div>\n            </div>\n          </div>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"order-details-section\">\n      <ion-col size=\"12\" *ngIf=\"job?.house_number\">\n        <ion-row>\n            <ion-col size=\"9\" class=\"heading\">Flat / House Number</ion-col>\n            <ion-col size=\"3\" class=\"desc ion-text-right\">{{job?.house_number}}</ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-row>\n            <ion-col size=\"3\" class=\"heading\">Address</ion-col>\n            <ion-col size=\"9\" class=\"desc ion-text-right\">{{job?.address}}, {{job?.postcode}}</ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"12\">\n          <ion-row>\n              <ion-col class=\"heading\">Date</ion-col>\n              <ion-col class=\"desc ion-text-right\">{{job?.date | date: 'EEE, dd-MM-y'}}</ion-col>\n          </ion-row>\n      </ion-col>\n      <ion-col size=\"12\">\n          <ion-row>\n              <ion-col class=\"heading\">Time</ion-col>\n              <ion-col class=\"desc ion-text-right\">{{job?.time}}</ion-col>\n          </ion-row>\n      </ion-col>\n      <ion-col size=\"12\">\n          <ion-row>\n              <ion-col class=\"heading\">Frequency</ion-col>\n              <ion-col class=\"desc ion-text-right\">{{getFrequency(job?.frequency)}}</ion-col>\n          </ion-row>\n      </ion-col>\n      <ion-col size=\"12\">\n          <ion-row>\n              <ion-col class=\"heading\">Hours Required</ion-col>\n              <ion-col class=\"desc ion-text-right\">{{job?.hours}}</ion-col>\n          </ion-row>\n      </ion-col>\n      <ion-col size=\"12\">\n          <ion-row>\n              <ion-col class=\"heading\">Bedrooms</ion-col>\n              <ion-col class=\"desc ion-text-right\">{{job?.bedrooms}}</ion-col>\n          </ion-row>\n      </ion-col>\n      <ion-col size=\"12\">\n          <ion-row>\n              <ion-col class=\"heading\">Bathrooms</ion-col>\n              <ion-col class=\"desc ion-text-right\">{{job?.bathrooms}}</ion-col>\n          </ion-row>\n      </ion-col>\n      <ion-col size=\"12\">\n          <ion-row>\n              <ion-col class=\"heading total\">Total</ion-col>\n              <ion-col class=\"total ion-text-right\"><strong>{{currency}}{{job?.total}}</strong></ion-col>\n          </ion-row>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row *ngIf=\"type === 'booking'\">\n        <ion-col size=\"10\" offset=\"1\">\n            <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"jobStatusChange(job.id, 'accepted')\" *ngIf=\"job?.status === 'paid'\">START</ion-button>\n            <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"jobStatusChange(job.id, 'completed')\" *ngIf=\"job?.status === 'accepted'\">MARK AS COMPLETED</ion-button>\n\n            <ion-button expand=\"block\" class=\"base-button cleaner-btn small-text-button\" (click)=\"openInstructions(job)\">ADDITIONAL SERVICES / INSTRUCTIONS</ion-button>\n        </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"type === 'subscription'\">\n        <ion-col size=\"10\" offset=\"1\">\n            <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"historyStatusChange(id)\" *ngIf=\"job?.status === 'paid'\">MARK AS COMPLETED</ion-button>\n\n            <ion-button expand=\"block\" class=\"base-button cleaner-btn small-text-button\" (click)=\"openInstructions(job)\">ADDITIONAL SERVICES / INSTRUCTIONS</ion-button>\n        </ion-col>\n    </ion-row>\n\n\n  </ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_bookingdetails_bookingdetails_module_ts-es2015.js.map