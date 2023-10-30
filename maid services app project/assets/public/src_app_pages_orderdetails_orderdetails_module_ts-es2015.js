(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_orderdetails_orderdetails_module_ts"],{

/***/ 75042:
/*!*********************************************************************************************!*\
  !*** ./node_modules/ionic-rating-component/__ivy_ngcc__/fesm2015/ionic-rating-component.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IonicRatingComponent": function() { return /* binding */ IonicRatingComponent; },
/* harmony export */   "IonicRatingComponentModule": function() { return /* binding */ IonicRatingComponentModule; },
/* harmony export */   "IonicRatingService": function() { return /* binding */ IonicRatingService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 78675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);











const _c0 = function (a0, a1) { return { "width": a0, "height": a1 }; };
const _c1 = function (a0, a1) { return { "color": a0, "font-size": a1 }; };
function IonicRatingComponent_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IonicRatingComponent_ion_button_1_Template_ion_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.changeRating($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", index_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r0.fontSize, ctx_r0.fontSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx_r0.halfStar === "true" && ctx_r0.rating - index_r1 > 0 && ctx_r0.rating - index_r1 <= 0.5 ? ctx_r0.halfIcon : index_r1 < ctx_r0.Math.round(ctx_r0.parseFloat(ctx_r0.rating)) ? ctx_r0.activeIcon : ctx_r0.defaultIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, ctx_r0.halfStar === "false" && index_r1 < ctx_r0.Math.round(ctx_r0.parseFloat(ctx_r0.rating)) || ctx_r0.halfStar === "true" && index_r1 < ctx_r0.parseFloat(ctx_r0.rating) ? ctx_r0.activeColor : ctx_r0.defaultColor, ctx_r0.fontSize));
} }
let IonicRatingService = class IonicRatingService {
    constructor() {
        this.starRatingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.topicSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    publishStartRatingChanged(value) {
        this.starRatingSubject.next(value);
    }
    getStartRatingChangedObservable() {
        return this.starRatingSubject;
    }
    publishTopic(topic, value) {
        this.topicSubject.next({ topic, value });
    }
    getTopicObservable(key) {
        return this.topicSubject[key];
    }
};
IonicRatingService.ɵfac = function IonicRatingService_Factory(t) { return new (t || IonicRatingService)(); };
IonicRatingService.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function IonicRatingService_Factory() { return new IonicRatingService(); }, token: IonicRatingService, providedIn: "root" });

var IonicRatingComponent_1;
let IonicRatingComponent = IonicRatingComponent_1 = class IonicRatingComponent {
    constructor(ionicRatingService) {
        this.ionicRatingService = ionicRatingService;
        this.iconsArray = [];
        this.ratingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.readonly = 'false';
        this.activeColor = '#488aff';
        this.defaultColor = '#aaaaaa';
        this.activeIcon = 'star';
        this.defaultIcon = 'star-outline';
        this.halfIcon = 'star-half';
        this.halfStar = 'false';
        this.maxRating = 5;
        this.fontSize = '28px';
        this.eventInfo = (() => {
            const id = new Date().getTime();
            const topic = `star-rating:${id}:changed`;
            return {
                topic,
            };
        })();
        this.Math = Math;
        this.parseFloat = parseFloat;
    }
    set rating(val) {
        this._rating = val;
        if (this.onChange) {
            this.onChange(val);
        }
    }
    get rating() {
        return this._rating;
    }
    ngOnInit() {
        this.rating = this.rating || 3; //default after input`s initialization
        for (let i = 0; i < this.maxRating; i++) {
            this.iconsArray.push(i);
        }
    }
    writeValue(obj) {
        this.rating = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.readonly = isDisabled ? "true" : "false";
    }
    changeRating(event) {
        if (this.readonly && this.readonly === 'true')
            return;
        // event is different for firefox and chrome
        let id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
        if (this.halfStar && this.halfStar === 'true') {
            this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + .5;
        }
        else {
            this.rating = id + 1;
        }
        // subscribe this event to get the changed value in your parent compoanent
        this.ionicRatingService.publishStartRatingChanged(this.rating);
        this.ionicRatingService.publishTopic(this.eventInfo.topic, this.rating);
        // unique event
        this.ratingChanged.emit(this.rating);
    }
};
IonicRatingComponent.ɵfac = function IonicRatingComponent_Factory(t) { return new (t || IonicRatingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](IonicRatingService)); };
IonicRatingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IonicRatingComponent, selectors: [["ionic-rating-component"]], inputs: { readonly: "readonly", activeColor: "activeColor", defaultColor: "defaultColor", activeIcon: "activeIcon", defaultIcon: "defaultIcon", halfIcon: "halfIcon", halfStar: "halfStar", maxRating: "maxRating", fontSize: "fontSize", rating: "rating" }, outputs: { ratingChanged: "ratingChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
                useExisting: IonicRatingComponent_1,
                multi: true
            },
        ])], decls: 2, vars: 1, consts: [[1, "ionic5-star-rating"], ["size", "large", "fill", "clear", "class", "rate-button", 3, "ngStyle", "id", "click", 4, "ngFor", "ngForOf"], ["size", "large", "fill", "clear", 1, "rate-button", 3, "ngStyle", "id", "click"], [3, "ngStyle", "name"]], template: function IonicRatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IonicRatingComponent_ion_button_1_Template, 2, 10, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.iconsArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon], styles: [".rate-button[_ngcontent-%COMP%] {\n            --padding-bottom:0;\n            --padding-end:0;\n            --padding-start:0;\n            --padding-top:0;\n    }"] });
IonicRatingComponent.ctorParameters = () => [
    { type: IonicRatingService }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "rating", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()
], IonicRatingComponent.prototype, "ratingChanged", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "readonly", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "activeColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "defaultColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "activeIcon", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "defaultIcon", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "halfIcon", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "halfStar", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "maxRating", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "fontSize", void 0);

let IonicRatingComponentModule = class IonicRatingComponentModule {
};
IonicRatingComponentModule.ɵfac = function IonicRatingComponentModule_Factory(t) { return new (t || IonicRatingComponentModule)(); };
IonicRatingComponentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IonicRatingComponentModule });
IonicRatingComponentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IonicRatingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IonicRatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ionic-rating-component',
                template: `
    <div class="ionic5-star-rating">
      <ion-button size="large" fill="clear" class="rate-button" [ngStyle]="{'width' : fontSize, 'height' : fontSize}" *ngFor="let index of iconsArray" id="{{index}}" (click)="changeRating($event)">
        <ion-icon [ngStyle]="{'color': ((halfStar === 'false' && index < this.Math.round(this.parseFloat(rating))) || (halfStar === 'true' && index < this.parseFloat(rating))) ? activeColor : defaultColor, 'font-size' : fontSize }" name="{{(halfStar ==='true' && (rating - index > 0) && (rating - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(rating))) ? activeIcon : defaultIcon}}"></ion-icon>
      </ion-button>
    </div>
  `,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
                        useExisting: IonicRatingComponent_1,
                        multi: true
                    },
                ],
                styles: [`
    .rate-button {
            --padding-bottom:0;
            --padding-end:0;
            --padding-start:0;
            --padding-top:0;
    }
  `]
            }]
    }], function () { return [{ type: IonicRatingService }]; }, { ratingChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], activeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], defaultColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], activeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], defaultIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], halfIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], halfStar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], maxRating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], fontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IonicRatingComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [IonicRatingComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
                ],
                exports: [IonicRatingComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IonicRatingComponentModule, { declarations: function () { return [IonicRatingComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule]; }, exports: function () { return [IonicRatingComponent]; } }); })();

/*
 * Public API Surface of ionic-rating
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ionic-rating-component.js.map

/***/ }),

/***/ 21646:
/*!*******************************************************************!*\
  !*** ./src/app/pages/orderdetails/orderdetails-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderdetailsPageRoutingModule": function() { return /* binding */ OrderdetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _orderdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderdetails.page */ 49475);




const routes = [
    {
        path: '',
        component: _orderdetails_page__WEBPACK_IMPORTED_MODULE_0__.OrderdetailsPage
    }
];
let OrderdetailsPageRoutingModule = class OrderdetailsPageRoutingModule {
};
OrderdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderdetailsPageRoutingModule);



/***/ }),

/***/ 18671:
/*!***********************************************************!*\
  !*** ./src/app/pages/orderdetails/orderdetails.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderdetailsPageModule": function() { return /* binding */ OrderdetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _orderdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderdetails-routing.module */ 21646);
/* harmony import */ var _orderdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderdetails.page */ 49475);
/* harmony import */ var ionic_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-rating-component */ 75042);








let OrderdetailsPageModule = class OrderdetailsPageModule {
};
OrderdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _orderdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderdetailsPageRoutingModule,
            ionic_rating_component__WEBPACK_IMPORTED_MODULE_7__.IonicRatingComponentModule,
        ],
        declarations: [_orderdetails_page__WEBPACK_IMPORTED_MODULE_1__.OrderdetailsPage],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA],
    })
], OrderdetailsPageModule);



/***/ }),

/***/ 49475:
/*!*********************************************************!*\
  !*** ./src/app/pages/orderdetails/orderdetails.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderdetailsPage": function() { return /* binding */ OrderdetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_orderdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./orderdetails.page.html */ 88390);
/* harmony import */ var _orderdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderdetails.page.scss */ 54229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local.service */ 85298);
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/rest.service */ 43006);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utility.service */ 67278);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/events.service */ 80106);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _clientinstructions_clientinstructions_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../clientinstructions/clientinstructions.page */ 79742);



/* eslint-disable radix */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable object-shorthand */










let OrderdetailsPage = class OrderdetailsPage {
    constructor(localService, restService, utilityService, eventsService, router, activatedRoute, location, iab, alertCtrl, modalCtrl, routerOutlet) {
        this.localService = localService;
        this.restService = restService;
        this.utilityService = utilityService;
        this.eventsService = eventsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.routerOutlet = routerOutlet;
        this.id = null;
        this.job = {};
        this.settings = {};
        this.rating = 0;
        this.readonly = false;
        this.comment = '';
        this.ratingchangedFlag = false;
        this.isCancellable = false;
        this.paymentStatus = 'Amount Paid';
        this.mode = null;
        // payment disabled flag
        this.paymentButtonDisabled = false;
        // next service date
        this.nextServiceDate = null;
        // notifications
        this.notifications = [];
        // extra services
        this.extraServices = [];
        this.extraTotal = 0;
        // tax settings
        this.taxSettings = [];
        this.taxTotal = 0;
        this.canGoBack = false;
        this.loggedUser = this.localService.getUser();
        this.settings = this.localService.getSettings();
        this.currency = this.settings.currency_symbol;
        this.activatedRoute.queryParams.subscribe((params) => {
            if (params.id) {
                this.id = params.id;
                // get order data
                this.getOrderDetails();
            }
            else {
                this.location.back();
            }
            if (params.mode) {
                this.mode = params.mode;
            }
        });
    }
    ngOnInit() {
        this.canGoBack = this.routerOutlet && this.routerOutlet.canGoBack();
    }
    cleanerProfile(id) {
        this.router.navigate(['/cleanerprofile'], { queryParams: { id: id } });
    }
    cleanerBook(id) {
        this.router.navigate(['/book'], { queryParams: { cleaner_id: id } });
    }
    Proceed(type) {
        // type = pending / hold
        // disable payment button
        this.paymentButtonDisabled = true;
        switch (type) {
            case 'pending':
                // payment accept here
                if (this.job.price > 0) {
                    // try to charge if existing stripe customer
                    this.restService
                        .postData('chargeexistingcustomer/' +
                        this.loggedUser.id +
                        '/' +
                        this.job.id +
                        '/' +
                        this.job.price, {})
                        .subscribe((success) => {
                        // charged successfully using existing stripe_customer_id
                        // call api for job status change
                        this.utilityService.loadingOpen('Confirming & notifying cleaners..');
                        this.restService
                            .postData('jobstatuschange', {
                            id: this.job.id,
                            status: 'paid',
                        })
                            .subscribe((done) => {
                            this.utilityService.loadingClose();
                            this.router.navigateByUrl('/confirmedbooking?job_id=' + this.job.id);
                        }, (err) => {
                            this.utilityService.loadingClose();
                            this.router.navigateByUrl('/bookings');
                            this.utilityService.openAlerts('Oops!', 'Error notifying cleaners, please contact us.', 'ok');
                        });
                    }, (failed) => {
                        // 404 = new user to charge
                        // 403 = charge failed so again start as new user
                        // 400 = error charging
                        // open stripe sca in app browser
                        const browser = this.iab.create(this.settings.STRIPE_PAYMENT_URL + '/' + this.job.id, '_blank', {
                            location: 'no',
                            hardwareback: 'no',
                            hidenavigationbuttons: 'yes',
                            hideurlbar: 'yes',
                            fullscreen: 'yes',
                            zoom: 'no',
                            clearcache: 'yes',
                            toolbar: 'yes',
                        });
                        browser.on('loadstart').subscribe((e) => {
                            //console.log(e.url);
                            if (e.url === this.settings.STRIPE_SUCCESS_PAYMENT_URL) {
                                // payment success
                                browser.close();
                                // call api for job status change
                                this.utilityService.loadingOpen('Confirming & notifying cleaners..');
                                this.restService
                                    .postData('jobstatuschange', {
                                    id: this.job.id,
                                    status: 'paid',
                                })
                                    .subscribe((success) => {
                                    this.utilityService.loadingClose();
                                    this.router.navigateByUrl('/confirmedbooking?job_id=' + this.job.id);
                                }, (err) => {
                                    this.utilityService.loadingClose();
                                    this.router.navigateByUrl('/bookings');
                                    this.utilityService.openAlerts('Oops!', 'Error notifying cleaners, please contact us.', 'ok');
                                });
                            }
                            else if (e.url === this.settings.STRIPE_FAILED_PAYMENT_URL) {
                                // payment failed
                                browser.close();
                                this.router.navigateByUrl('/bookings');
                            }
                        });
                    });
                }
                else {
                    // coupon applied or price is 0
                    // call api for job status change
                    this.utilityService.loadingOpen('Confirming & notifying cleaners..');
                    this.restService
                        .postData('jobstatuschange', { id: this.job.id, status: 'paid' })
                        .subscribe((success) => {
                        this.utilityService.loadingClose();
                        this.router.navigateByUrl('/confirmedbooking?job_id=' + this.job.id);
                    }, (err) => {
                        this.utilityService.loadingClose();
                        this.router.navigateByUrl('/bookings');
                        this.utilityService.openAlerts('Oops!', 'Error notifying cleaners, please contact us.', 'ok');
                    });
                }
                break;
            case 'hold':
                // payment accept here
                // always price should be > 0 if jobsubscription status = hold
                // try to charge if existing stripe customer
                this.restService
                    .postData('chargeexistingcustomer/' +
                    this.loggedUser.id +
                    '/' +
                    this.job.id +
                    '/' +
                    this.job.price, {})
                    .subscribe((success) => {
                    // charged successfully using existing stripe_customer_id
                    // call api for job status change
                    this.utilityService.loadingOpen('Resuming your upcoming bookings..');
                    this.restService
                        .postData('user/resumehold', { job_id: this.job.id })
                        .subscribe((done) => {
                        this.utilityService.loadingClose();
                        this.router.navigateByUrl('/subscriptions');
                    }, (err) => {
                        this.utilityService.loadingClose();
                        this.router.navigateByUrl('/subscriptions');
                        this.utilityService.openAlerts('Oops!', 'Error resuming upcoming bookings, please contact us.', 'ok');
                    });
                }, (failed) => {
                    // 404 = new user to charge
                    // 403 = charge failed so again start as new user
                    // 400 = error charging
                    // open stripe sca in app browser
                    const browser = this.iab.create(this.settings.STRIPE_PAYMENT_URL + '/' + this.job.id, '_blank', {
                        location: 'no',
                        hardwareback: 'no',
                        hidenavigationbuttons: 'yes',
                        hideurlbar: 'yes',
                        fullscreen: 'yes',
                        zoom: 'no',
                        clearcache: 'yes',
                        toolbar: 'yes',
                    });
                    browser.on('loadstart').subscribe((e) => {
                        //console.log(e.url);
                        if (e.url === this.settings.STRIPE_SUCCESS_PAYMENT_URL) {
                            // payment success
                            browser.close();
                            // call api for job status change
                            this.utilityService.loadingOpen('Resuming your upcoming bookings..');
                            this.restService
                                .postData('user/resumehold', { job_id: this.job.id })
                                .subscribe((success) => {
                                this.utilityService.loadingClose();
                                this.router.navigateByUrl('/subscriptions');
                            }, (err) => {
                                this.utilityService.loadingClose();
                                this.router.navigateByUrl('/subscriptions');
                                this.utilityService.openAlerts('Oops!', 'Error resuming upcoming bookings, please contact us.', 'ok');
                            });
                        }
                        else if (e.url === this.settings.STRIPE_FAILED_PAYMENT_URL) {
                            // payment failed
                            browser.close();
                            this.router.navigateByUrl('/subscriptions');
                        }
                    });
                });
                break;
            // nothing
            default:
        }
    }
    // rating
    logRatingChange(rating) {
        console.log('changed rating: ', rating);
        // do your stuff
        this.rating = rating;
        this.ratingchangedFlag = true;
    }
    rate() {
        if (!this.ratingchangedFlag) {
            return this.utilityService.openAlerts('Oops!', 'Please select your rating.', 'ok');
        }
        if (this.comment === '') {
            return this.utilityService.openAlerts('Oops!', 'Please write comment', 'ok');
        }
        this.restService
            .postData('addrating', {
            user_id: this.loggedUser.id,
            cleaner_id: this.job.cleaner_id,
            job_id: this.job.id,
            rating: this.rating,
            comment: this.comment,
        })
            .subscribe((data) => {
            this.utilityService.openAlerts('Thank You', 'Your review has been submitted.', 'ok');
            this.router.navigateByUrl('/book');
        }, (err) => { });
    }
    cancelJob(id) {
        // cancel job
        this.restService
            .postData('canceljob', { job_id: id, status: 'cancelled-user' })
            .subscribe((data) => {
            this.job = data;
        }, (err) => { });
    }
    cancelJobPrompt(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // show alert about penalty
            if (this.settings.free_cancellation_days) {
                const hours = this.settings.free_cancellation_days * 24;
                const alert = yield this.alertCtrl.create({
                    header: 'Cancel the service?',
                    message: 'Cancellations made with at least ' +
                        hours +
                        ' hours notice will be fully refunded. However, for cancellations made with less than ' +
                        this.settings.paid_cancellation_hours +
                        ' hours notice the full charge of the service will be taken.',
                    buttons: [
                        {
                            text: 'No',
                            role: 'cancel',
                            handler: () => {
                                console.log('Cancel clicked');
                            },
                        },
                        {
                            text: 'Yes',
                            handler: () => {
                                console.log('Delete clicked');
                                this.cancelJob(id);
                            },
                        },
                    ],
                });
                alert.present();
            }
            else {
                // no charge required, direct cancel
                this.cancelJob(id);
            }
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
    openInstructions(job) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!job.extra_services) {
                return this.utilityService.openAlerts('Oops!', 'No instructions found', 'ok');
            }
            // open in modal
            const modal = yield this.modalCtrl.create({
                component: _clientinstructions_clientinstructions_page__WEBPACK_IMPORTED_MODULE_7__.ClientinstructionsPage,
                cssClass: 'client-instructions-modal',
                backdropDismiss: true,
                showBackdrop: true,
                componentProps: {
                    data: job,
                },
            });
            yield modal.present();
        });
    }
    skipClean(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // calculate time remaining for next service datetime
            const explode_date = this.nextServiceDate.split('-');
            const explode_time = this.job.time.split(':');
            const next_date = new Date(Date.UTC(explode_date[0], explode_date[1] - 1, explode_date[2], explode_time[0], explode_time[1], 0));
            const hours_left = this.diffHours(next_date, new Date());
            let message;
            if (hours_left < 3) {
                // short notice skip/cancellation
                message =
                    'Short Notice Cancellation Admin Fee of ' +
                        this.settings.currency_symbol +
                        '' +
                        this.settings.short_notice_skip_charge +
                        ' will be charged.';
            }
            else if (hours_left < 24) {
                // same day skip/cancellation fee
                message =
                    'Same Day Cancellation Admin Fee of ' +
                        this.settings.currency_symbol +
                        '' +
                        this.settings.same_day_skip_charge +
                        ' will be charged.';
            }
            else {
                // no skip/cancellation fee
                message = 'Your next cleaning date will be skipped.';
            }
            const alert = yield this.alertCtrl.create({
                header: 'Skip next cleaning?',
                message: message,
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        },
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            console.log('skip clicked');
                            this.doSkip(id);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    doSkip(id) {
        this.utilityService.loadingOpen('Processing...');
        this.restService
            .postData('user/' + this.loggedUser.id + '/skip_next_clean', {
            job_id: id,
        })
            .subscribe((data) => {
            this.getOrderDetails();
        }, (err) => {
            this.utilityService.loadingClose();
            this.utilityService.openAlerts('Oops!', 'An error occured, Please contact us.', 'ok');
        });
    }
    diffHours(dt2, dt1) {
        console.log(dt2, dt1);
        let diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60 * 60;
        return Math.abs(Math.round(diff));
    }
    getOrderDetails() {
        this.restService.getData('jobdetails/' + this.id).subscribe((data) => {
            this.job = data;
            // check wheather job has extra services or not
            this.extraServices = [];
            this.extraTotal = 0;
            if (this.job.extra_services) {
                this.job.extra_services.forEach((element) => {
                    this.extraServices.push(element);
                    this.extraTotal += parseFloat(element.price);
                });
                if (this.extraTotal > 0) {
                    this.job.total =
                        parseFloat(this.job.total) - parseFloat(this.extraTotal);
                }
            }
            // check if job has tax settings
            this.taxSettings = [];
            this.taxTotal = 0;
            if (this.job.tax_applied) {
                this.job.tax_applied.forEach((element) => {
                    this.taxSettings.push(element);
                    this.taxTotal += parseFloat(element.price);
                });
            }
            // trim whitespace from address
            this.job.address = this.job.address.trim();
            // payable / paid decide
            if (this.job.status === 'pending') {
                this.paymentStatus = 'Amount Payable';
            }
            this.utilityService.loadingClose();
            // coupon condition
            if (data.coupon_id) {
                if (data.coupon.type === 'percentage') {
                    this.off =
                        ((parseFloat(this.job.total) +
                            parseFloat(this.extraTotal) +
                            parseFloat(this.taxTotal)) *
                            data.coupon.value) /
                            100;
                    this.off = parseFloat(this.off).toFixed(2);
                }
                else {
                    // flat discount
                    this.off = data.coupon.value;
                }
            }
            // show only rating if already rated
            if (data.rating) {
                this.readonly = true;
                this.rating = parseInt(data.rating.rating);
                this.comment = data.rating.comment;
            }
            // check if isCancellable
            if (new Date(data.date) > new Date()) {
                this.isCancellable = true;
            }
            else {
                console.log('Date already gone');
            }
            // check & calculate next service date
            if (this.job.frequency !== 'oneoff') {
                console.log(this.job);
                // get last paid job
                for (const item of this.job.history) {
                    if (item.status === 'paid') {
                        this.nextServiceDate = item.date;
                    }
                }
            }
            // get notifications
            this.notifications = [];
            this.job.notifications.forEach((element) => {
                if (element.available_alternate) {
                    this.notifications.push(element);
                }
            });
        }, (err) => { });
    }
    actionAlternative(id, type) {
        if (type === 'accept') {
            // accept
            this.restService
                .postData('user/accept_alternative', { id: id })
                .subscribe((data) => {
                this.utilityService.openAlerts('Thank You', 'Date & Time has been updated.', 'ok');
                this.getOrderDetails();
            });
        }
        else {
            // reject
            this.restService
                .postData('user/reject_alternative', { id: id })
                .subscribe((data) => {
                this.getOrderDetails();
            });
        }
    }
};
OrderdetailsPage.ctorParameters = () => [
    { type: _services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService },
    { type: _services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__.EventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRouterOutlet }
];
OrderdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-orderdetails',
        template: _raw_loader_orderdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_orderdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderdetailsPage);



/***/ }),

/***/ 78675:
/*!*************!*\
  !*** tslib ***!
  \*************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 54229:
/*!***********************************************************!*\
  !*** ./src/app/pages/orderdetails/orderdetails.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .heading {\n  font-size: 0.8rem;\n}\nion-content .image-section {\n  margin-top: 10px;\n  border-bottom: 1px solid var(--ion-color-gray);\n  padding-bottom: 15px;\n}\nion-content .profile-image {\n  height: 140px;\n  width: 140px;\n  border-radius: 50%;\n  background-color: black;\n}\nion-content .profile-name-section {\n  height: 100%;\n  position: relative;\n  text-transform: uppercase;\n  text-align: center;\n}\nion-content .profile-name-section .name-container {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\nion-content .profile-name-section h2 {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin-bottom: 5px;\n  letter-spacing: 1px;\n}\nion-content .order-details-section {\n  text-transform: uppercase;\n  color: var(--ion-color-dark);\n  margin: 10px 25px;\n  font-size: 0.8rem;\n}\nion-content .order-details-section h4 {\n  font-size: 1rem;\n  font-weight: 600;\n}\nion-content .order-details-section .heading {\n  font-weight: 500;\n}\nion-content .order-details-section .desc {\n  color: var(--ion-color-dark);\n}\nion-content .order-details-section ion-col {\n  padding: 3px;\n}\nion-content .order-details-section .total {\n  margin-top: 8px;\n  font-weight: 500;\n}\nion-content .pricing-section {\n  text-transform: uppercase;\n  color: var(--ion-color-dark);\n  margin: 10px 25px;\n}\nion-content .pricing-section ion-row {\n  margin: 10px auto;\n}\nion-content .pricing-section .pricing {\n  font-size: 0.8rem;\n  padding: 0;\n}\nion-content strong {\n  letter-spacing: 1px;\n}\nion-content .no-cleaner {\n  text-align: center;\n  margin: auto;\n}\nion-content .rating-container {\n  text-align: center;\n  margin: auto;\n}\nion-content .review-section {\n  text-transform: uppercase;\n  color: var(--ion-color-dark);\n  margin: 10px auto;\n  border-top: 0.8px solid var(--ion-color-gray);\n  padding-top: 15px;\n}\nion-content .review-section h4 {\n  font-size: 1rem;\n  font-weight: 600;\n}\nion-content .cancel {\n  font-size: 0.9rem !important;\n}\nion-content .order-no {\n  text-align: center;\n  margin: 5px auto;\n  font-weight: 600;\n  padding-bottom: 8px !important;\n}\nion-content .order-no::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  width: 100px;\n  height: 2px;\n  background: var(--ion-color-base);\n  bottom: 0;\n  transform: translateX(-50%) rotate(-4deg);\n}\nion-content .textarea {\n  border: 0.6px solid var(--ion-color-border);\n  margin: 15px auto;\n  background: transparent !important;\n  text-align: left;\n  min-height: 80px;\n  text-transform: none !important;\n}\nion-content .comment {\n  font-size: 0.8rem;\n}\nion-content .small-text {\n  font-size: 0.8rem;\n}\nion-content ion-label {\n  font-size: 1rem;\n}\nion-content ion-label p {\n  font-size: 0.6rem;\n}\nion-content .alternate-item {\n  width: 100%;\n}\nion-content .alternate-section {\n  text-align: center;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBRUk7RUFDRSxnQkFBQTtFQUNBLDhDQUFBO0VBQ0Esb0JBQUE7QUFBTjtBQUVJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQVI7QUFHSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUdNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQURSO0FBR007RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURSO0FBT0k7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUxOO0FBT007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQVFNO0VBQ0UsZ0JBQUE7QUFOUjtBQVFNO0VBQ0UsNEJBQUE7QUFOUjtBQVNNO0VBQ0UsWUFBQTtBQVBSO0FBVU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFSUjtBQWFJO0VBRUUseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBWk47QUFjTTtFQUNFLGlCQUFBO0FBWlI7QUFlTTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQWJSO0FBb0JJO0VBQ0UsbUJBQUE7QUFsQk47QUFxQkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFuQlI7QUF1Qkk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFyQk47QUF3Qkk7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGlCQUFBO0FBdEJOO0FBd0JNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBdEJSO0FBMEJJO0VBQ0UsNEJBQUE7QUF4Qk47QUEyQkk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQXpCTjtBQTBCTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsU0FBQTtFQUNBLHlDQUFBO0FBeEJSO0FBNEJJO0VBQ0UsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBMUJOO0FBNkJJO0VBQ0UsaUJBQUE7QUEzQk47QUErQkk7RUFDRSxpQkFBQTtBQTdCTjtBQWdDSTtFQUNFLGVBQUE7QUE5Qk47QUErQk07RUFDRSxpQkFBQTtBQTdCUjtBQWlDSTtFQUNFLFdBQUE7QUEvQk47QUFrQ0k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFoQ04iLCJmaWxlIjoib3JkZXJkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLmhlYWRpbmd7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgICAuaW1hZ2Utc2VjdGlvbntcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyYXkpO1xuICAgICAgcGFkZGluZy1ib3R0b206MTVweDtcbiAgICB9XG4gICAgLnByb2ZpbGUtaW1hZ2V7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB9XG5cbiAgICAucHJvZmlsZS1uYW1lLXNlY3Rpb257XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAubmFtZS1jb250YWluZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB9XG4gICAgICBoMntcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgLm9yZGVyLWRldGFpbHMtc2VjdGlvbntcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgbWFyZ2luOiAxMHB4IDI1cHg7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcblxuICAgICAgaDR7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgLmhlYWRpbmd7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgICAuZGVzY3tcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIH1cblxuICAgICAgaW9uLWNvbHtcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgfVxuXG4gICAgICAudG90YWx7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC5wcmljaW5nLXNlY3Rpb257XG5cbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgbWFyZ2luOiAxMHB4IDI1cHg7XG5cbiAgICAgIGlvbi1yb3d7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgfVxuXG4gICAgICAucHJpY2luZ3tcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cblxuXG4gICAgfVxuXG4gICAgc3Ryb25ne1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB9XG5cbiAgICAubm8tY2xlYW5lcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG5cbiAgICAucmF0aW5nLWNvbnRhaW5lcntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgICAucmV2aWV3LXNlY3Rpb257XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgYm9yZGVyLXRvcDogMC44cHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyYXkpO1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG5cbiAgICAgIGg0e1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhbmNlbHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm9yZGVyLW5ve1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAmOjphZnRlcntcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmFzZSk7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgtNGRlZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRleHRhcmVhe1xuICAgICAgYm9yZGVyOiAwLjZweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItYm9yZGVyKTtcbiAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY29tbWVudHtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cblxuXG4gICAgLnNtYWxsLXRleHR7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG5cbiAgICBpb24tbGFiZWx7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBwe1xuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWx0ZXJuYXRlLWl0ZW17XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuYWx0ZXJuYXRlLXNlY3Rpb257XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG5cbn1cbiJdfQ== */");

/***/ }),

/***/ 88390:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderdetails/orderdetails.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button *ngIf=\"canGoBack\"></ion-back-button>\n      <ion-menu-toggle *ngIf=\"!canGoBack\"><ion-icon name=\"menu-outline\"></ion-icon></ion-menu-toggle>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Booking Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row class=\"image-section\" *ngIf=\"job?.cleaner\">\n      <ion-col size=\"6\">\n          <div (click)=\"cleanerProfile(job?.cleaner?.id)\" *ngIf=\"!job?.cleaner?.image\" class=\"thumb-image\">\n              <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n          </div>\n          <img (click)=\"cleanerProfile(job?.cleaner?.id)\" *ngIf=\"job?.cleaner?.image\" class=\"profile-image\" src=\"{{utilityService.uploadPath}}profile/{{job?.cleaner?.image}}\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <div class=\"profile-name-section\">\n          <div class=\"name-container\">\n              <h2>{{job?.cleaner?.name}}</h2>\n              <div *ngIf=\"localService.getSettings().CHAT_MODULE_ENABLED === true\">\n                <img (click)=\"openChat()\" class=\"chat-icon\" src=\"assets/images/icon-chat-black.png\">\n              </div>\n          </div>\n        </div>\n      </ion-col>\n  </ion-row>\n  <ion-row class=\"image-section\" *ngIf=\"!job?.cleaner && job?.status !=='pending' && job?.status !=='cancelled-user'\">\n      <div *ngIf=\"notifications.length === 0\"  class=\"no-cleaner ion-text-center ion-text-uppercase\">Assigning your cleaner</div>\n      <div class=\"alternate-section\" *ngIf=\"notifications.length > 0\">\n        <p class=\"small-text ion-text-center\">Your requested date or time is not available.<br/>The cleaner has the below availability for you</p>\n        <ion-item class=\"alternate-item\" *ngFor=\"let notification of notifications\" >\n          <ion-avatar slot=\"start\">\n            <img *ngIf=\"!notification?.cleaner?.image\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\n            <img *ngIf=\"notification?.cleaner?.image\" src=\"{{utilityService.uploadPath}}profile/{{notification?.cleaner?.image}}\">\n          </ion-avatar>\n          <ion-label>\n            {{notification?.cleaner?.name}}\n            <p>{{notification?.available_alternate | date: 'dd-MM-y HH:mm'}}</p>\n          </ion-label>\n          <ion-button color=\"secondary\" fill=\"outline\" slot=\"end\" (click)=\"actionAlternative(notification.id, 'accept')\">Accept</ion-button>\n          <ion-button color=\"danger\" fill=\"outline\" slot=\"end\" (click)=\"actionAlternative(notification.id, 'reject')\">Reject</ion-button>\n        </ion-item>\n      </div>\n  </ion-row>\n  <ion-row class=\"order-details-section\">\n    <ion-col size=\"12\" *ngIf=\"job?.house_number\">\n      <ion-row>\n          <ion-col size=\"9\" class=\"heading\">Flat / House Number</ion-col>\n          <ion-col size=\"3\" class=\"desc ion-text-right\">{{job?.house_number}}</ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-row>\n          <ion-col size=\"3\" class=\"heading\">Address</ion-col>\n          <ion-col size=\"9\" class=\"desc ion-text-right\">{{job?.address}}, {{job?.postcode}}</ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\"><span *ngIf=\"mode === 'subscription' || job?.frequency !== 'oneoff'\">Start </span>Date</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{job?.date | date: 'EEE, dd-MM-y'}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Time</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{job?.time}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Frequency</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{getFrequency(job?.frequency)}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\" *ngIf=\"(mode === 'subscription' || job?.frequency !== 'oneoff') && nextServiceDate\">\n        <ion-row>\n            <ion-col class=\"heading\">Next Service Date</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{nextServiceDate | date: 'EEE, dd-MM-y'}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Hours Required</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{job?.hours}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Bedrooms</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{job?.bedrooms}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Bathrooms</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{job?.bathrooms}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading total\">Total</ion-col>\n            <ion-col class=\"total ion-text-right\"><strong>{{currency}}{{job?.total}}</strong></ion-col>\n        </ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"pricing-section\">\n      <ion-col size=\"10\" offset=\"1\">\n        <div class=\"hr\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n          <div *ngIf=\"extraTotal > 0\" >\n            <ion-row>\n              <ion-col size=\"8\" class=\"pricing\">Add-on Services</ion-col>\n              <ion-col size=\"4\" class=\"pricing ion-text-right\"><strong>{{currency}}{{extraTotal}}</strong></ion-col>\n            </ion-row>\n          </div>\n\n          <div *ngIf=\"taxSettings.length > 0\">\n            <ion-row *ngFor=\"let tax of taxSettings\" >\n              <ion-col size=\"8\" class=\"pricing\">{{tax?.label}}</ion-col>\n              <ion-col size=\"4\" class=\"pricing ion-text-right\"><strong>{{currency}}{{tax.price}}</strong></ion-col>\n            </ion-row>\n          </div>\n\n          <ion-row *ngIf=\"job?.coupon_id\">\n              <ion-col size=\"8\" class=\"pricing\">DISCOUNT</ion-col>\n              <ion-col size=\"4\" class=\"pricing ion-text-right\"><strong>-{{currency}}{{off}}</strong></ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col size=\"8\" class=\"pricing\"><strong>{{paymentStatus}}</strong></ion-col>\n              <ion-col size=\"4\" class=\"pricing ion-text-right\"><strong>{{currency}}{{job?.price}}</strong></ion-col>\n          </ion-row>\n      </ion-col>\n  </ion-row>\n\n\n  <ion-row class=\"review-section\" *ngIf=\"job?.cleaner && !mode\">\n    <ion-col size=\"12\" *ngIf=\"!job?.rating && job?.status === 'completed'\">\n        <h4 class=\"ion-text-center\">Submit Review</h4>\n    </ion-col>\n    <ion-col size=\"10\" offset=\"1\" *ngIf=\"!job?.rating && job?.status === 'completed'\">\n      <div class=\"rating-container\">\n        <ionic-rating-component #rating\n            activeIcon = \"star\"\n            defaultIcon = \"star-outline\"\n            activeColor = \"#424242\"\n            defaultColor = \"#424242\"\n            readonly=\"{{readonly}}\"\n            rating=\"{{rating}}\"\n            fontSize = \"35px\"\n            (ratingChanged)=\"logRatingChange($event)\">\n        </ionic-rating-component>\n        <ion-textarea class=\"textarea\" placeholder=\"PLEASE TYPE YOUR FEEDBACK OR COMMENTS HERE\" [(ngModel)]=\"comment\"></ion-textarea>\n        <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"rate()\">SUBMIT FEEDBACK</ion-button>\n      </div>\n    </ion-col>\n\n    <ion-col size=\"12\" *ngIf=\"job?.rating && job?.status !== 'pending'\">\n        <h4 class=\"ion-text-center\">Your Review</h4>\n    </ion-col>\n    <ion-col size=\"10\" offset=\"1\" *ngIf=\"job?.rating && job?.status !== 'pending'\">\n      <div class=\"rating-container\">\n        <ionic-rating-component #rating2\n            activeIcon = \"star\"\n            defaultIcon = \"star-outline\"\n            activeColor = \"#424242\"\n            defaultColor = \"#424242\"\n            readonly=\"{{readonly}}\"\n            rating=\"{{rating}}\"\n            fontSize = \"35px\"\n            (ratingChanged)=\"logRatingChange($event)\">\n        </ionic-rating-component>\n        <p class=\"comment\">{{comment}}</p>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <!-- for payments turn off-->\n  <div *ngIf=\"mode !== 'payments'\">\n\n    <!-- show an alert to make payment if subscription is in hold-->\n    <ion-row *ngIf=\"job?.jobsubscription?.status === 'hold'\">\n      <ion-col size=\"10\" offset=\"1\">\n        <div class=\"alert warning\">\n          Automatic charge failed for your upcoming booking, please pay again manually.\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"10\" offset=\"1\"  *ngIf=\"job?.status === 'pending' || job?.jobsubscription?.status === 'hold'\">\n          <ion-button [disabled]=\"paymentButtonDisabled\" *ngIf=\"job?.status === 'pending'\" expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"Proceed('pending')\">PROCEED TO PAYMENT</ion-button>\n\n          <ion-button [disabled]=\"paymentButtonDisabled\" *ngIf=\"job?.jobsubscription?.status === 'hold'\" expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"Proceed('hold')\">PROCEED TO PAYMENT</ion-button>\n      </ion-col>\n      <ion-col size=\"10\" offset=\"1\">\n          <ion-button expand=\"block\" class=\"base-button cleaner-btn cancel small-text-button\" (click)=\"openInstructions(job)\">ADDITIONAL SERVICES / INSTRUCTIONS</ion-button>\n          <ion-button *ngIf=\"job.status === 'completed' && job.frequency !== 'oneoff' && job.jobsubscription.status === 'active'\" expand=\"block\" class=\"base-button cleaner-btn cancel\" (click)=\"skipClean(job.id)\">SKIP NEXT CLEAN</ion-button>\n      </ion-col>\n      <ion-col size=\"10\" offset=\"1\">\n          <ion-button *ngIf=\"job?.cleaner && job?.status === 'completed' && job?.frequency  === 'oneoff'\" expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"cleanerBook(job.cleaner.id)\">REBOOK THIS CLEANER</ion-button>\n          <div>\n            <ion-button *ngIf=\"(job.status === 'completed' || job.status === 'accepted' || job.status === 'paid') && job.frequency !== 'oneoff' && (job.jobsubscription.status === 'active' || job.jobsubscription.status === 'hold')\" expand=\"block\" class=\"base-button cleaner-btn cancel\" (click)=\"cancelJobPrompt(job.id)\">CANCEL {{job.frequency.toUpperCase()}} SUBSCRIPTION </ion-button>\n          </div>\n      </ion-col>\n\n      <!-- if not assigned to cleaner or assigned to cleaner but status paid or accepted, still can cancel the job-->\n      <ion-col size=\"10\" offset=\"1\" *ngIf=\"(job?.status ==='paid' || job?.status ==='accepted') && job.frequency === 'oneoff'\">\n            <ion-button *ngIf=\"isCancellable\" expand=\"block\" class=\"base-button cleaner-btn cancel\" (click)=\"cancelJobPrompt(job.id)\">CANCEL BOOKING </ion-button>\n        </ion-col>\n    </ion-row>\n\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_orderdetails_orderdetails_module_ts-es2015.js.map