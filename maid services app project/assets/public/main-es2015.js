(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 18114)).then((m) => m.AboutPageModule),
    },
    {
        path: 'book',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_book_book_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/book/book.module */ 70675)).then((m) => m.BookPageModule),
    },
    {
        path: 'bookingdetails',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_bookingdetails_bookingdetails_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/bookingdetails/bookingdetails.module */ 2708)).then((m) => m.BookingdetailsPageModule),
    },
    {
        path: 'bookings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_bookings_bookings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/bookings/bookings.module */ 13582)).then((m) => m.BookingsPageModule),
    },
    {
        path: 'cancellation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cancellation_cancellation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cancellation/cancellation.module */ 61735)).then((m) => m.CancellationPageModule),
    },
    {
        path: 'cleaneraccount',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cleaneraccount_cleaneraccount_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cleaneraccount/cleaneraccount.module */ 43043)).then((m) => m.CleaneraccountPageModule),
    },
    {
        path: 'cleanerforgot',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cleanerforgot_cleanerforgot_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cleanerforgot/cleanerforgot.module */ 17541)).then((m) => m.CleanerforgotPageModule),
    },
    {
        path: 'cleanerhome',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cleanerhome_cleanerhome_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cleanerhome/cleanerhome.module */ 20289)).then((m) => m.CleanerhomePageModule),
    },
    {
        path: 'cleanerlogin',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cleanerlogin_cleanerlogin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cleanerlogin/cleanerlogin.module */ 63728)).then((m) => m.CleanerloginPageModule),
    },
    {
        path: 'cleanermoredetails',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cleanermoredetails_cleanermoredetails_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cleanermoredetails/cleanermoredetails.module */ 84902)).then((m) => m.CleanermoredetailsPageModule),
    },
    {
        path: 'cleanernotifications',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cleanernotifications_cleanernotifications_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cleanernotifications/cleanernotifications.module */ 65597)).then((m) => m.CleanernotificationsPageModule),
    },
    {
        path: 'cleanerpayments',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cleanerpayments_cleanerpayments_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cleanerpayments/cleanerpayments.module */ 74733)).then((m) => m.CleanerpaymentsPageModule),
    },
    {
        path: 'cleanerprofile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cleanerprofile_cleanerprofile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cleanerprofile/cleanerprofile.module */ 89573)).then((m) => m.CleanerprofilePageModule),
    },
    {
        path: 'cleanerregister',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cleanerregister_cleanerregister_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cleanerregister/cleanerregister.module */ 68076)).then((m) => m.CleanerregisterPageModule),
    },
    {
        path: 'cleanerschedules',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cleanerschedules_cleanerschedules_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cleanerschedules/cleanerschedules.module */ 51506)).then((m) => m.CleanerschedulesPageModule),
    },
    {
        path: 'clientinstructions',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_clientinstructions_clientinstructions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/clientinstructions/clientinstructions.module */ 48282)).then((m) => m.ClientinstructionsPageModule),
    },
    {
        path: 'community',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_community_community_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/community/community.module */ 93591)).then((m) => m.CommunityPageModule),
    },
    {
        path: 'confirmedbooking',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_confirmedbooking_confirmedbooking_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/confirmedbooking/confirmedbooking.module */ 63624)).then((m) => m.ConfirmedbookingPageModule),
    },
    {
        path: 'contact',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contact/contact.module */ 17213)).then((m) => m.ContactPageModule),
    },
    {
        path: 'customise',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_customise_customise_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/customise/customise.module */ 80477)).then((m) => m.CustomisePageModule),
    },
    {
        path: 'favourites',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_favourites_favourites_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/favourites/favourites.module */ 56677)).then((m) => m.FavouritesPageModule),
    },
    {
        path: 'forgot',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_forgot_forgot_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forgot/forgot.module */ 93647)).then((m) => m.ForgotPageModule),
    },
    {
        path: 'insurance',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_insurance_insurance_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/insurance/insurance.module */ 84464)).then((m) => m.InsurancePageModule),
    },
    {
        path: 'jobreceived',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_jobreceived_jobreceived_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/jobreceived/jobreceived.module */ 78497)).then((m) => m.JobreceivedPageModule),
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then((m) => m.LoginPageModule),
    },
    {
        path: 'myaccount',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_myaccount_myaccount_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/myaccount/myaccount.module */ 22804)).then((m) => m.MyaccountPageModule),
    },
    {
        path: 'orderdetails',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_orderdetails_orderdetails_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/orderdetails/orderdetails.module */ 18671)).then((m) => m.OrderdetailsPageModule),
    },
    {
        path: 'orderreview',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_orderreview_orderreview_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/orderreview/orderreview.module */ 40751)).then((m) => m.OrderreviewPageModule),
    },
    {
        path: 'payments',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payments_payments_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payments/payments.module */ 15795)).then((m) => m.PaymentsPageModule),
    },
    {
        path: 'privacy',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_privacy_privacy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/privacy/privacy.module */ 2886)).then((m) => m.PrivacyPageModule),
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signup/signup.module */ 17110)).then((m) => m.SignupPageModule),
    },
    {
        path: 'subscriptions',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_subscriptions_subscriptions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/subscriptions/subscriptions.module */ 76294)).then((m) => m.SubscriptionsPageModule),
    },
    {
        path: 'terms',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_terms_terms_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/terms/terms.module */ 27498)).then((m) => m.TermsPageModule),
    },
    {
        path: 'alternatedatetime',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_alternatedatetime_alternatedatetime_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/alternatedatetime/alternatedatetime.module */ 87249)).then(m => m.AlternatedatetimePageModule)
    },
    // ======== only uncomment below lines if you have chat modules ===============
    // {
    //   path: 'chat',
    //   loadChildren: () =>
    //     import('./pages/chat/chat.module').then((m) => m.ChatPageModule),
    // },
    // {
    //   path: 'chatlist',
    //   loadChildren: () =>
    //     import('./pages/chatlist/chatlist.module').then(
    //       (m) => m.ChatlistPageModule
    //     ),
    // },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/share */ 16380);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/device */ 42810);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/status-bar */ 64909);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/splash-screen */ 88592);
/* harmony import */ var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/app-rate/ngx */ 13553);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! onesignal-cordova-plugin */ 14868);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 7354);
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/market/ngx */ 67972);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/local.service */ 85298);
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/rest.service */ 43006);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/utility.service */ 67278);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/events.service */ 80106);



/* eslint-disable no-bitwise */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */






// cordova plugins









let AppComponent = class AppComponent {
    constructor(platform, menu, actionSheetCtrl, localService, restService, utilityService, eventsService, router, modalCtrl, alertCtrl, appRate, appVersion, market) {
        this.platform = platform;
        this.menu = menu;
        this.actionSheetCtrl = actionSheetCtrl;
        this.localService = localService;
        this.restService = restService;
        this.utilityService = utilityService;
        this.eventsService = eventsService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.appRate = appRate;
        this.appVersion = appVersion;
        this.market = market;
        this.selectedIndex = 0;
        // menu defined here
        this.userPages = [
            { title: 'Home', url: '/book', icon: 'home-outline', type: 'page' },
            {
                title: 'Bookings',
                url: '/bookings',
                icon: 'calendar-outline',
                type: 'page',
            },
            {
                title: 'Recurring Bookings',
                url: '/subscriptions',
                icon: 'calendar-clear-outline',
                type: 'page',
            },
            {
                title: 'Payments',
                url: '/payments',
                icon: 'wallet-outline',
                type: 'page',
            },
            {
                title: 'Favourites',
                url: '/favourites',
                icon: 'bookmark-outline',
                type: 'page',
            },
            { title: 'Support', url: '/contact', icon: 'mail-outline', type: 'page' },
            { title: 'Rate App', url: '/rate', icon: 'star-outline', type: 'function' },
            {
                title: 'Share App',
                url: '/share',
                icon: 'share-outline',
                type: 'function',
            },
            {
                title: 'More',
                url: '/more',
                icon: 'ellipsis-horizontal-outline',
                type: 'function',
            },
            {
                title: 'Sign out',
                url: '/signout',
                icon: 'exit-outline',
                type: 'function',
            },
        ];
        this.cleanerPages = [
            {
                title: 'My Jobs',
                url: '/cleanerhome',
                icon: 'home-outline',
                type: 'page',
            },
            {
                title: 'Job Requests',
                url: '/cleanernotifications',
                icon: 'notifications-outline',
                type: 'page',
            },
            {
                title: 'My Availability',
                url: '/cleanerschedules',
                icon: 'calendar-clear-outline',
                type: 'page',
            },
            {
                title: 'Payments',
                url: '/cleanerpayments',
                icon: 'wallet-outline',
                type: 'page',
            },
            { title: 'Support', url: '/contact', icon: 'mail-outline', type: 'page' },
            { title: 'Rate App', url: '/rate', icon: 'star-outline', type: 'function' },
            {
                title: 'Share App',
                url: '/share',
                icon: 'share-outline',
                type: 'function',
            },
            {
                title: 'More',
                url: '/more',
                icon: 'ellipsis-horizontal-outline',
                type: 'function',
            },
            {
                title: 'Sign out',
                url: '/signout',
                icon: 'exit-outline',
                type: 'function',
            },
        ];
        this.guestPages = [
            { title: 'Home', url: '/login', icon: 'home-outline', type: 'page' },
            { title: 'Support', url: '/contact', icon: 'mail-outline', type: 'page' },
            {
                title: 'More',
                url: '/more',
                icon: 'ellipsis-horizontal-outline',
                type: 'function',
            },
            { title: 'Rate App', url: '/rate', icon: 'star-outline', type: 'function' },
            {
                title: 'Share App',
                url: '/share',
                icon: 'share-outline',
                type: 'function',
            },
        ];
        this.loggedUser = null;
        this.loggedCleaner = null;
        this.jobreceivedByNotification = false;
        this.holdByNotification = false;
        this.appIsOpen = false;
        this.notificationReceived = false;
        this.chatByNotification_user_id = false;
        this.chatByNotification_cleaner_id = false;
        this.reminderReceived = false;
        this.reminderMode = false;
        //set default menu is for guest
        this.appPages = this.guestPages;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            // =============== after plugins are ready initialize them ==========
            // disable hardware back button
            // this.platform.backButton.subscribeWithPriority(999, () => {
            //   console.log('Hardware Back Pressed');
            // });
            // on ios show & hide splash
            if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
                _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_5__.SplashScreen.show({
                    showDuration: 3000,
                    autoHide: true,
                });
            }
            // set status bar to white
            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.setStyle({ style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.Style.Dark });
            if (this.platform.is('android')) {
                _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.setBackgroundColor({ color: '#DD5F46' });
                _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.setOverlaysWebView({ overlay: false });
            }
            // get app version
            this.version = 0.1;
            this.appVersion.getVersionNumber().then((ver) => {
                this.version = ver;
            });
            // event wise redraw menu
            this.eventsService.subscribe('menu', (type) => {
                // refresh the menu
                if (type === 'user') {
                    this.appPages = this.userPages;
                    this.loggedUser = this.localService.getUser();
                }
                else if (type === 'cleaner') {
                    this.appPages = this.cleanerPages;
                    this.loggedCleaner = this.localService.getCleaner();
                }
                else if (type === 'guest') {
                    this.appPages = this.guestPages;
                }
                this.chatModuleCheck();
            });
            // event for more menu from other page
            this.eventsService.subscribe('more', (type) => {
                this.more();
            });
            if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone') || this.platform.is('android')) {
                console.log("platform");
                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default().setAppId(this.utilityService.config.onesignalAppId);
                if (this.platform.is('ios')) {
                    onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default().setNotificationWillShowInForegroundHandler((jsonData) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                        console.log('setNotificationWillShowInForegroundHandler: ' + JSON.stringify(jsonData));
                        this.notificationdata = JSON.parse(JSON.stringify(jsonData)).notification;
                        if (this.notificationdata.additionalData && this.notificationdata.additionalData.type) {
                            const prompt = yield this.alertCtrl.create({
                                header: 'New Notification',
                                // message: 'Job Details',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        handler: (data) => {
                                            console.log('Cancel clicked');
                                        },
                                    },
                                    {
                                        text: 'View',
                                        handler: (dataone) => {
                                            console.log('xxx', dataone);
                                            this.onpagenotificationopen(this.notificationdata);
                                        },
                                    },
                                ],
                            });
                            prompt.present();
                        }
                        else {
                            this.onpagenotification(this.notificationdata);
                        }
                    }));
                }
                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default().setNotificationOpenedHandler((jsonData) => {
                    console.log("jsonData", jsonData);
                    this.notificationdata = JSON.parse(JSON.stringify(jsonData)).notification;
                    if (this.notificationdata.additionalData &&
                        this.notificationdata.additionalData.type) {
                        this.onpagenotificationopen(this.notificationdata);
                    }
                    else {
                        this.onpagenotification(this.notificationdata);
                    }
                });
                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default().promptForPushNotificationsWithUserResponse(function (accepted) {
                    console.log("User accepted notifications: " + accepted);
                });
                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default().getDeviceState((stateChanges) => {
                    console.log('OneSignal getDeviceState: ' + JSON.parse(JSON.stringify(stateChanges)).userId);
                });
            }
            // check logged users
            this.checkLogged();
        });
    }
    onpagenotification(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const prompt = yield this.alertCtrl.create({
                header: data.title,
                message: data.body,
                buttons: [
                    {
                        text: 'Ok',
                        handler: (data) => {
                            console.log('Cancel clicked');
                        },
                    }
                ],
            });
            prompt.present();
        });
    }
    onpagenotificationopen(data) {
        if (data.additionalData.type === 'nearby' ||
            data.additionalData.type === 'selected') {
            // navigate to accept & reject page
            this.jobreceivedByNotification =
                data.additionalData.job_id;
            // if app is open then directly move
            if (this.appIsOpen) {
                this.router.navigate(['/jobreceived'], {
                    queryParams: {
                        id: this.jobreceivedByNotification,
                    },
                });
            }
        }
        else {
            const role = data.additionalData.role;
            if (role === 'user') {
                // navigate to accept & reject page
                this.notificationReceived =
                    data.additionalData.job_id;
                if (data.additionalData.type === 'hold') {
                    this.holdByNotification =
                        data.additionalData.job_id;
                }
                else if (data.additionalData.type === 'chat') {
                    this.chatByNotification_user_id =
                        data.additionalData.user_id;
                    this.chatByNotification_cleaner_id =
                        data.additionalData.cleaner_id;
                }
                else if (data.additionalData.type === 'reminder') {
                    this.reminderReceived =
                        data.additionalData.job_id;
                }
                // if app is open then directly move
                if (this.appIsOpen) {
                    if (data.additionalData.type === 'chat') {
                        this.router.navigate(['/chat'], {
                            queryParams: {
                                user_id: this.chatByNotification_user_id,
                                cleaner_id: this.chatByNotification_cleaner_id,
                            },
                        });
                    }
                    else if (data.additionalData.type === 'hold') {
                        this.router.navigate(['/orderdetails'], {
                            queryParams: {
                                id: this.notificationReceived,
                                mode: 'subscription',
                            },
                        });
                    }
                    else if (data.additionalData.type === 'reminder') {
                        this.reminderReceived =
                            data.additionalData.job_id;
                        this.reminderMode =
                            data.additionalData.mode;
                        if (data.additionalData.mode === 'job') {
                            // normal job
                            this.router.navigate(['/orderdetails'], {
                                queryParams: {
                                    id: this.notificationReceived,
                                },
                            });
                        }
                        else {
                            // job history
                            this.router.navigate(['/orderdetails'], {
                                queryParams: {
                                    id: this.notificationReceived,
                                    mode: 'subscription',
                                },
                            });
                        }
                    }
                    else {
                        this.router.navigate(['/orderdetails'], {
                            queryParams: {
                                id: this.notificationReceived,
                            },
                        });
                    }
                }
            }
            else if (role === 'cleaner') {
                // navigate to accept & reject page
                this.notificationReceived =
                    data.additionalData.job_id;
                // if app is open then directly move
                if (this.appIsOpen) {
                    if (data.additionalData.type === 'chat') {
                        this.chatByNotification_user_id =
                            data.additionalData.user_id;
                        this.chatByNotification_cleaner_id =
                            data.additionalData.cleaner_id;
                        this.router.navigate(['/chat'], {
                            queryParams: {
                                user_id: this.chatByNotification_user_id,
                                cleaner_id: this.chatByNotification_cleaner_id,
                            },
                        });
                    }
                    else if (data.additionalData.type === 'reminder') {
                        this.reminderReceived =
                            data.additionalData.job_id;
                        this.reminderMode =
                            data.additionalData.mode;
                        if (data.additionalData.mode === 'job') {
                            // normal job
                            this.restService
                                .getData('jobdetails/' + this.notificationReceived)
                                .subscribe((res) => {
                                this.router.navigate(['/bookingdetails'], {
                                    queryParams: {
                                        id: this.notificationReceived,
                                        type: 'booking',
                                        data: res,
                                    },
                                });
                            }, (err) => {
                                // error fetching data
                                console.log(err);
                            });
                        }
                        else {
                            // job history
                            this.restService
                                .getData('jobhistory/' + this.notificationReceived)
                                .subscribe((res) => {
                                this.router.navigate(['/bookingdetails'], {
                                    queryParams: {
                                        id: this.notificationReceived,
                                        type: 'subscription',
                                        data: res,
                                    },
                                });
                            }, (err) => {
                                // error fetching data
                                console.log(err);
                            });
                        }
                    }
                    else {
                        this.router.navigate(['/bookingdetails'], {
                            queryParams: {
                                id: this.notificationReceived,
                            },
                        });
                    }
                }
            }
        }
    }
    // call custom function form menu globally
    callFunction(functionName) {
        if (functionName === '/share') {
            this.shareApp();
        }
        else if (functionName === '/rate') {
            this.rateApp();
        }
        else if (functionName === '/signout') {
            this.signOut();
        }
        else if (functionName === '/more') {
            this.more();
        }
    }
    getPlatform() {
        if (this.platform.is('ios')) {
            return 'ios';
        }
        else if (this.platform.is('android')) {
            return 'android';
        }
        else {
            return 'other';
        }
    }
    getUUID() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_3__.Device.getId();
            return info;
        });
    }
    shareApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (this.getPlatform() === 'android') {
                yield _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.share({
                    title: 'Check out ' + this.utilityService.config.appName + ' App',
                    text: 'Found this interesting app. Thought of sharing with you as you may find it useful',
                    url: 'https://play.google.com/store/apps/details?id=' +
                        this.utilityService.config.googlePlayPackageName,
                    dialogTitle: 'Share with Friends',
                });
            }
            else {
                yield _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.share({
                    title: 'Check out ' + this.utilityService.config.appName + ' App',
                    text: 'Found this interesting app. Thought of sharing with you as you may find it useful',
                    url: 'https://itunes.apple.com/us/app/myapp/id' +
                        this.utilityService.config.iosAppStoreId,
                    dialogTitle: 'Share with Friends',
                });
            }
        });
    }
    rateApp() {
        this.appRate.setPreferences({
            storeAppURL: {
                ios: this.utilityService.config.iosAppStoreId,
                android: 'market://details?id=' +
                    this.utilityService.config.googlePlayPackageName,
            },
        });
        this.appRate.promptForRating(true);
    }
    signOut() {
        this.localService.removeUser();
        this.localService.removeCleaner();
        this.menu.enable(false);
        // refresh the menu : send event
        this.eventsService.publish('menu', 'guest');
        // unset logged flags
        this.loggedUser = null;
        this.loggedCleaner = null;
        this.router.navigateByUrl('/login', { replaceUrl: true });
    }
    // action sheet more
    more() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'MORE',
                cssClass: 'moreClass remove-cancel',
                buttons: [
                    {
                        text: 'About Us',
                        handler: () => {
                            this.router.navigate(['/about']);
                        },
                    },
                    {
                        text: 'Terms & Conditions',
                        handler: () => {
                            this.router.navigate(['/terms']);
                        },
                    },
                    {
                        text: 'Cancellation Policy',
                        handler: () => {
                            this.router.navigate(['/cancellation']);
                        },
                    },
                    {
                        text: 'Insurance',
                        handler: () => {
                            this.router.navigate(['/insurance']);
                        },
                    },
                    {
                        text: 'Community',
                        handler: () => {
                            this.router.navigate(['/community']);
                        },
                    },
                    {
                        text: 'Privacy Policy',
                        handler: () => {
                            this.router.navigate(['/privacy']);
                        },
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        },
                    },
                ],
            });
            actionSheet.present();
        });
    }
    OpenUserAccount() {
        this.menu.close();
        this.router.navigate(['myaccount']);
    }
    OpenCleanerAccount() {
        this.menu.close();
        this.router.navigate(['cleaneraccount']);
    }
    // check logged user
    checkLogged() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            // silently log the settings
            this.restService.getData('getsettings').subscribe((data) => {
                this.localService.setSettings(data);
                // App Version ===========
                this.appVersion.getVersionNumber().then((version) => {
                    this.version = version;
                    // check version upgradation
                    if (this.platform.is('ios') ||
                        this.platform.is('ipad') ||
                        this.platform.is('iphone')) {
                        // ios versioning
                        if (this.isNewerVersion(this.version, data.ios_version)) {
                            this.openUpdateAlert();
                        }
                    }
                    else if (this.platform.is('android')) {
                        // android versioning
                        if (this.isNewerVersion(this.version, data.android_version)) {
                            this.openUpdateAlert();
                        }
                    }
                });
                this.chatModuleCheck();
                //===================================
                // app opened
                this.appIsOpen = true;
                this.loggedUser = this.localService.getUser();
                this.loggedCleaner = this.localService.getCleaner();
                // if logged in as user or cleaner
                if (!this.loggedUser && !this.loggedCleaner) {
                    // move to login page
                    this.router.navigateByUrl('/login', { replaceUrl: true });
                }
                else {
                    if (this.loggedUser) {
                        // user menu
                        this.appPages = this.userPages;
                        // if job received redirect to job accept page else redirect to particular page
                        if (this.chatByNotification_user_id &&
                            this.chatByNotification_cleaner_id) {
                            this.router.navigateByUrl('/chat?user_id=' +
                                this.chatByNotification_user_id +
                                '&cleaner_id=' +
                                this.chatByNotification_cleaner_id, { replaceUrl: true });
                        }
                        else if (this.holdByNotification) {
                            this.router.navigateByUrl('/orderdetails?id=' +
                                this.holdByNotification +
                                '&mode=subscription', { replaceUrl: true });
                        }
                        else if (this.reminderReceived) {
                            if (this.reminderMode === 'job') {
                                // normal job
                                this.router.navigateByUrl('/orderdetails?id=' + this.reminderReceived, { replaceUrl: true });
                            }
                            else {
                                // job history
                                this.router.navigateByUrl('/orderdetails?id=' +
                                    this.reminderReceived +
                                    '&mode=subscription', { replaceUrl: true });
                            }
                        }
                        else if (this.notificationReceived) {
                            this.router.navigateByUrl('/orderdetails?id=' + this.notificationReceived, { replaceUrl: true });
                        }
                        else {
                            // this.rootPage = HomePage;
                            this.router.navigateByUrl('/book', { replaceUrl: true }); // book page
                        }
                    }
                    else if (this.loggedCleaner) {
                        // cleaner menu
                        this.appPages = this.cleanerPages;
                        // formatting the rating
                        if (this.loggedCleaner.rating) {
                            // check if integer or float
                            if ((typeof this.loggedCleaner.rating === 'number' &&
                                this.loggedCleaner.rating % 1 === 0) ||
                                this.loggedCleaner.rating.toString().length === 1) {
                                this.loggedCleaner.rating = this.loggedCleaner.rating + '.0';
                            }
                            else {
                                // float
                                this.loggedCleaner.rating = this.loggedCleaner.rating
                                    .toString()
                                    .match(/^-?\d+(?:\.\d{0,1})?/)[0];
                            }
                        }
                        // if job received redirect to job accept page else redirect to particular page
                        if (this.chatByNotification_user_id &&
                            this.chatByNotification_cleaner_id) {
                            this.router.navigateByUrl('/chat?user_id=' +
                                this.chatByNotification_user_id +
                                '&cleaner_id=' +
                                this.chatByNotification_cleaner_id, { replaceUrl: true });
                        }
                        else if (this.reminderReceived) {
                            if (this.reminderMode === 'job') {
                                // normal job
                                this.restService
                                    .getData('jobdetails/' + this.reminderReceived)
                                    .subscribe((res) => {
                                    this.router.navigateByUrl('/bookingdetails?id=' +
                                        this.reminderReceived +
                                        '&type=booking&data=' +
                                        res, { replaceUrl: true });
                                }, (err) => {
                                    // error fetching data
                                    console.log(err);
                                });
                            }
                            else {
                                // job history
                                this.restService
                                    .getData('jobhistory/' + this.reminderReceived)
                                    .subscribe((res) => {
                                    this.router.navigateByUrl('/bookingdetails?id=' +
                                        this.reminderReceived +
                                        '&type=subscription&data=' +
                                        res, { replaceUrl: true });
                                }, (err) => {
                                    // error fetching data
                                    console.log(err);
                                });
                            }
                        }
                        else if (this.jobreceivedByNotification) {
                            this.router.navigateByUrl('/jobreceived?id=' + this.jobreceivedByNotification, { replaceUrl: true });
                        }
                        else if (this.notificationReceived) {
                            this.restService
                                .getData('jobdetails/' + this.notificationReceived)
                                .subscribe((data) => {
                                console.log('Jobdata=>', data);
                                this.router.navigateByUrl('/bookingdetails?id=' +
                                    data.id +
                                    '&type=booking&data=' +
                                    data, { replaceUrl: true });
                            }, (err) => {
                                //error fetching booking data
                                // redirect to home page
                                // this.router.navigateByUrl('/cleanerhome');
                                this.checkedIfCleanerVerified();
                            });
                        }
                        else {
                            // this.router.navigateByUrl('/cleanerhome'); // cleaner default screen
                            this.checkedIfCleanerVerified();
                        }
                    }
                    else {
                        this.router.navigateByUrl('/login', { replaceUrl: true });
                    }
                }
            }, (err) => this.utilityService.openAlerts('Oops!', 'We are unable to connect with the server, Please restart the App.', 'ok'));
        });
    }
    chatModuleCheck() {
        // if chat module is available then only show in menu
        if (this.localService.getSettings().CHAT_MODULE_ENABLED === true) {
            if (this.loggedUser) {
                this.appPages.splice(5, 0, {
                    title: 'Chat',
                    url: '/chatlist',
                    icon: 'chat',
                    type: 'page',
                });
            }
            if (this.loggedCleaner) {
                this.appPages.splice(4, 0, {
                    title: 'Chat',
                    url: '/chatlist',
                    icon: 'chat',
                    type: 'page',
                });
            }
        }
    }
    checkedIfCleanerVerified() {
        // check verification status
        this.restService
            .getData('cleaner/' + this.loggedCleaner.id + '/checkverification')
            .subscribe((callback) => {
            this.router.navigateByUrl('/cleanerhome', { replaceUrl: true });
        }, (failed) => {
            if (failed.status === 404) {
                // need to submit details
                this.router.navigateByUrl('/cleanermoredetails?mode=new', {
                    replaceUrl: true,
                });
            }
            else if (failed.status === 401) {
                // pending - wait for review
                this.router.navigateByUrl('/cleanermoredetails?mode=pending', {
                    replaceUrl: true,
                });
            }
            else if (failed.status === 403) {
                // rejected - resubmit details
                this.router.navigateByUrl('/cleanermoredetails?mode=rejected&reason=' + failed.error.reason, { replaceUrl: true });
            }
            else {
                return this.utilityService.openAlerts('Oops!', 'Sorry server error, Please restart the app.', 'ok');
            }
        });
    }
    // compare version =====
    isNewerVersion(oldVer, newVer) {
        const oldParts = oldVer.split('.');
        const newParts = newVer.split('.');
        for (let i = 0; i < newParts.length; i++) {
            const a = ~~newParts[i]; // parse int
            const b = ~~oldParts[i]; // parse int
            if (a > b) {
                return true;
            }
            if (a < b) {
                return false;
            }
        }
        return false;
    }
    openUpdateAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'New version available!',
                message: 'Please update the app to the latest version to enjoy uninturrepted services & better performance!',
                buttons: [
                    {
                        text: 'Update Now',
                        // role: 'destructive',
                        handler: () => {
                            if (this.platform.is('ios') ||
                                this.platform.is('ipad') ||
                                this.platform.is('iphone')) {
                                this.market.open(this.utilityService.config.appStoreAppId.toString());
                            }
                            else if (this.platform.is('android')) {
                                this.market.open(this.utilityService.config.googlePlayPackageName);
                            }
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ActionSheetController },
    { type: _services_local_service__WEBPACK_IMPORTED_MODULE_10__.LocalService },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_11__.RestService },
    { type: _services_utility_service__WEBPACK_IMPORTED_MODULE_12__.UtilityService },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_13__.EventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController },
    { type: _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_6__.AppRate },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__.AppVersion },
    { type: _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_9__.Market }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/app-rate/ngx */ 13553);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 7354);
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/market/ngx */ 67972);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ 61194);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);








// cordova plugins






let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot({
                backButtonText: '',
                backButtonIcon: 'arrow-back',
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy },
            _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_2__.AppRate,
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__.AppVersion,
            _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_4__.Market,
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__.DatePicker,
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__.InAppBrowser,
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__.FileTransfer,
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__.InAppBrowser,
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__.DatePicker,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 80106:
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsService": function() { return /* binding */ EventsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79765);



let EventsService = class EventsService {
    constructor() {
        this.channels = {};
    }
    /**
     * Subscribe to a topic and provide a single handler/observer.
     *
     * @param topic The name of the topic to subscribe to.
     * @param observer The observer or callback function to listen when changes are published.
     *
     * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
     */
    subscribe(topic, observer) {
        if (!this.channels[topic]) {
            this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        }
        return this.channels[topic].subscribe(observer);
    }
    /**
     * Publish some data to the subscribers of the given topic.
     *
     * @param topic The name of the topic to emit data to.
     * @param data data in any format to pass on.
     */
    publish(topic, data) {
        const subject = this.channels[topic];
        if (!subject) {
            // Or you can create a new subject for future subscribers
            return;
        }
        subject.next(data);
    }
    /**
     * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
     * destroy the observable of the topic using this method.
     *
     * @param topic The name of the topic to destroy.
     */
    destroy(topic) {
        const subject = this.channels[topic];
        if (!subject) {
            return;
        }
        subject.complete();
        delete this.channels[topic];
    }
};
EventsService.ctorParameters = () => [];
EventsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], EventsService);



/***/ }),

/***/ 85298:
/*!*******************************************!*\
  !*** ./src/app/services/local.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalService": function() { return /* binding */ LocalService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let LocalService = class LocalService {
    constructor() { }
    // user
    setUser(user) {
        localStorage.setItem('CleaningServiceUser', JSON.stringify(user));
    }
    getUser() {
        return JSON.parse(localStorage.getItem('CleaningServiceUser'));
    }
    removeUser() {
        localStorage.removeItem('CleaningServiceUser');
    }
    emptystorage() {
        localStorage.clear();
    }
    set(key, val) {
        localStorage.setItem(key, JSON.stringify(val));
    }
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    remove(key) {
        localStorage.removeItem(key);
    }
    // cleaner
    setCleaner(user) {
        localStorage.setItem('CleaningServiceCleaner', JSON.stringify(user));
    }
    getCleaner() {
        return JSON.parse(localStorage.getItem('CleaningServiceCleaner'));
    }
    removeCleaner() {
        localStorage.removeItem('CleaningServiceCleaner');
    }
    // settings
    setSettings(data) {
        localStorage.setItem('CleaningServiceSettings', JSON.stringify(data));
    }
    getSettings() {
        return JSON.parse(localStorage.getItem('CleaningServiceSettings'));
    }
};
LocalService.ctorParameters = () => [];
LocalService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], LocalService);



/***/ }),

/***/ 43006:
/*!******************************************!*\
  !*** ./src/app/services/rest.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestService": function() { return /* binding */ RestService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/utility.service */ 67278);

/* eslint-disable @typescript-eslint/naming-convention */



let RestService = class RestService {
    constructor(http, utilityService) {
        this.http = http;
        this.utilityService = utilityService;
        this.httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' }),
        };
        this.baseURL = this.utilityService.config.adminBaseUrl + '/api/';
    }
    getData(url) {
        const furl = this.baseURL + url;
        return this.http.get(furl);
    }
    postData(url, postParams) {
        const furl = this.baseURL + url;
        return this.http.post(furl, postParams, this.httpHeader);
    }
    // chat with socket
    getChat(url) {
        return this.http.get(this.utilityService.config.chatServerUrl + '/' + url);
    }
    postChat(url, postParams) {
        return this.http.post(this.utilityService.config.chatServerUrl + '/' + url, postParams, this.httpHeader);
    }
};
RestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _services_utility_service__WEBPACK_IMPORTED_MODULE_0__.UtilityService }
];
RestService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], RestService);



/***/ }),

/***/ 67278:
/*!*********************************************!*\
  !*** ./src/app/services/utility.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilityService": function() { return /* binding */ UtilityService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

/* eslint-disable @typescript-eslint/naming-convention */



let UtilityService = class UtilityService {
    constructor(loadingCtrl, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.isLoading = false;
        this.frequencies = {
            weekly: 'Weekly',
            biweekly: 'Every 2 Weeks',
            monthly: 'Monthly',
            oneoff: 'One Off',
            daily: 'Daily',
        };
        this.config = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
        this.uploadPath = this.config.adminBaseUrl + '/uploads/';
    }
    capitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    // =========== migrate
    loadingOpen(val) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingCtrl
                .create({
                message: val,
            })
                .then((a) => {
                a.present().then(() => {
                    console.log('loading presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort laoding'));
                    }
                });
            });
        });
    }
    loadingClose() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingCtrl
                .dismiss()
                .then(() => console.log('loading dismissed'));
        });
    }
    openAlerts(title, text, button) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                message: text,
                buttons: [button],
                backdropDismiss: false,
            });
            yield alert.present();
        });
    }
    b64toBlob(b64Data, contentType = '', sliceSize = 512) {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
};
UtilityService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController }
];
UtilityService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], UtilityService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
const environment = {
    production: true,
    appName: 'V1 Cleaners',
    adminBaseUrl: 'https://cleaners.v1tl.com',
    onesignalAppId: 'efd1963e-8eaf-42b0-9928-46ed4ef6c723',
    firebaseSenderId: '397504825984',
    googlePlayPackageName: 'com.cleaningservices',
    iosAppStoreId: '1575523808',
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid #d7d8da;\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-base);\n}\n\n.menu-icon {\n  color: var(--ion-color-base) !important;\n  vertical-align: middle;\n  margin-right: 25px;\n  height: 30px;\n}\n\nion-toolbar {\n  --background: var(--ion-color-base);\n}\n\nion-thumbnail {\n  --size: 75px;\n  --border-radius: 50%;\n  display: inline-block;\n  margin-right: 25px;\n}\n\nion-thumbnail img {\n  vertical-align: middle;\n}\n\n.name-container {\n  color: var(--ion-color-white);\n  text-transform: uppercase;\n  font-size: 1rem;\n  font-family: \"Halis Grotesque\";\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\nion-menu ion-toolbar {\n  padding-left: 5px !important;\n}\n\nion-menu ion-list {\n  padding-top: 0px !important;\n}\n\nion-menu ion-list ion-item {\n  --min-height: 40px;\n  font-size: 0.8rem;\n  border-bottom: 1px solid var(--ion-color-border) !important;\n}\n\n.button-menu-container {\n  padding: 0 15px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.button-menu.activated {\n  background-color: var(--ion-color-base);\n}\n\n.menu-footer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--ion-color-light);\n  padding: 5px 15px;\n  color: var(--ion-color-gray);\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFBQSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsOEJBQUE7QUFKRjs7QUFVQTtFQUNFLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFQRjs7QUFVQTtFQUNFLG1DQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBUEY7O0FBUUU7RUFDRSxzQkFBQTtBQU5KOztBQVVBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFQRjs7QUFXRTtFQUNFLDRCQUFBO0FBUko7O0FBVUU7RUFDRSwyQkFBQTtBQVJKOztBQVNJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJEQUFBO0FBUE47O0FBWUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFUSjs7QUFZSTtFQUNFLHVDQUFBO0FBVE47O0FBY0U7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBWEoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYXNlKTtcbn1cblxuLy8gY3VzdG9tID09PT09PT09PT1cblxuLy8gbWVudVxuLm1lbnUtaWNvbntcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYXNlKSAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaW9uLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhc2UpO1xufVxuXG5pb24tdGh1bWJuYWlse1xuICAtLXNpemU6IDc1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgaW1ne1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbn1cblxuLm5hbWUtY29udGFpbmVye1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogJ0hhbGlzIEdyb3Rlc3F1ZSc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5pb24tbWVudXtcbiAgaW9uLXRvb2xiYXJ7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgfVxuICBpb24tbGlzdHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgaW9uLWl0ZW17XG4gICAgICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItYm9yZGVyKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4uYnV0dG9uLW1lbnUtY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gIH1cbiAgLmJ1dHRvbi1tZW51e1xuICAgICYuYWN0aXZhdGVke1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWJhc2UpO1xuICAgIH1cbiAgfVxuXG5cbiAgLm1lbnUtZm9vdGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JheSk7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cblxuIl19 */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane when=\"(min-width: 1200px)\" contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-grid>\n            <ion-row *ngIf=\"!loggedUser && !loggedCleaner\">\n              <ion-col size=\"12\"><img src=\"{{utilityService.config.adminBaseUrl}}/uploads/images/{{localService.getSettings().image}}\"/></ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"loggedUser\" (click)=\"OpenUserAccount()\">\n              <ion-col size=\"5\">\n                <ion-thumbnail class=\"profile-image\">\n                  <img *ngIf=\"loggedUser?.image\" src=\"{{utilityService.uploadPath}}profile/{{loggedUser?.image}}\">\n                  <div class=\"thumb-pic\" *ngIf=\"!loggedUser?.image\">\n                    <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n                  </div>\n                </ion-thumbnail>\n              </ion-col>\n              <ion-col size=\"7\">\n                <ion-label class=\"name-container\">{{loggedUser?.name}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf=\"loggedCleaner\" (click)=\"OpenCleanerAccount()\">\n              <ion-col size=\"5\">\n                <ion-thumbnail class=\"profile-image\">\n                  <img *ngIf=\"loggedCleaner?.image\" src=\"{{utilityService.uploadPath}}profile/{{loggedCleaner?.image}}\">\n                  <div class=\"thumb-pic\" *ngIf=\"!loggedCleaner?.image\">\n                    <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n                  </div>\n                </ion-thumbnail>\n              </ion-col>\n              <ion-col size=\"7\">\n                <ion-label class=\"name-container\">{{loggedCleaner?.name}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n\n            <ion-item *ngIf=\"p.type === 'page'\" (click)=\"selectedIndex = i\" routerDirection=\"forward\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex === i\">\n              <ion-icon class=\"menu-icon\" name=\"{{p.icon}}\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n\n            <ion-item *ngIf=\"p.type === 'function'\" (click)=\"selectedIndex = i; callFunction(p.url)\" routerDirection=\"forward\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex === i\">\n              <ion-icon class=\"menu-icon\" name=\"{{p.icon}}\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n\n          </ion-menu-toggle>\n        </ion-list>\n\n        <ion-row class=\"menu-footer\" *ngIf=\"loggedUser\">\n            <ion-col size=\"6\">Version</ion-col>\n            <ion-col size=\"6\" class=\"ion-text-right\">{{version}}</ion-col>\n        </ion-row>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map