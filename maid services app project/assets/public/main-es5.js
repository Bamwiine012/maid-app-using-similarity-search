(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/about/about.module */
          18114)).then(function (m) {
            return m.AboutPageModule;
          });
        }
      }, {
        path: 'book',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_book_book_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/book/book.module */
          70675)).then(function (m) {
            return m.BookPageModule;
          });
        }
      }, {
        path: 'bookingdetails',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_bookingdetails_bookingdetails_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/bookingdetails/bookingdetails.module */
          2708)).then(function (m) {
            return m.BookingdetailsPageModule;
          });
        }
      }, {
        path: 'bookings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_bookings_bookings_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/bookings/bookings.module */
          13582)).then(function (m) {
            return m.BookingsPageModule;
          });
        }
      }, {
        path: 'cancellation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_cancellation_cancellation_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/cancellation/cancellation.module */
          61735)).then(function (m) {
            return m.CancellationPageModule;
          });
        }
      }, {
        path: 'cleaneraccount',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cleaneraccount_cleaneraccount_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/cleaneraccount/cleaneraccount.module */
          43043)).then(function (m) {
            return m.CleaneraccountPageModule;
          });
        }
      }, {
        path: 'cleanerforgot',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_cleanerforgot_cleanerforgot_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/cleanerforgot/cleanerforgot.module */
          17541)).then(function (m) {
            return m.CleanerforgotPageModule;
          });
        }
      }, {
        path: 'cleanerhome',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_cleanerhome_cleanerhome_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/cleanerhome/cleanerhome.module */
          20289)).then(function (m) {
            return m.CleanerhomePageModule;
          });
        }
      }, {
        path: 'cleanerlogin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_cleanerlogin_cleanerlogin_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/cleanerlogin/cleanerlogin.module */
          63728)).then(function (m) {
            return m.CleanerloginPageModule;
          });
        }
      }, {
        path: 'cleanermoredetails',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cleanermoredetails_cleanermoredetails_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/cleanermoredetails/cleanermoredetails.module */
          84902)).then(function (m) {
            return m.CleanermoredetailsPageModule;
          });
        }
      }, {
        path: 'cleanernotifications',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_cleanernotifications_cleanernotifications_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/cleanernotifications/cleanernotifications.module */
          65597)).then(function (m) {
            return m.CleanernotificationsPageModule;
          });
        }
      }, {
        path: 'cleanerpayments',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_cleanerpayments_cleanerpayments_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/cleanerpayments/cleanerpayments.module */
          74733)).then(function (m) {
            return m.CleanerpaymentsPageModule;
          });
        }
      }, {
        path: 'cleanerprofile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_cleanerprofile_cleanerprofile_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/cleanerprofile/cleanerprofile.module */
          89573)).then(function (m) {
            return m.CleanerprofilePageModule;
          });
        }
      }, {
        path: 'cleanerregister',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cleanerregister_cleanerregister_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/cleanerregister/cleanerregister.module */
          68076)).then(function (m) {
            return m.CleanerregisterPageModule;
          });
        }
      }, {
        path: 'cleanerschedules',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_cleanerschedules_cleanerschedules_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/cleanerschedules/cleanerschedules.module */
          51506)).then(function (m) {
            return m.CleanerschedulesPageModule;
          });
        }
      }, {
        path: 'clientinstructions',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_clientinstructions_clientinstructions_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/clientinstructions/clientinstructions.module */
          48282)).then(function (m) {
            return m.ClientinstructionsPageModule;
          });
        }
      }, {
        path: 'community',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_community_community_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/community/community.module */
          93591)).then(function (m) {
            return m.CommunityPageModule;
          });
        }
      }, {
        path: 'confirmedbooking',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_confirmedbooking_confirmedbooking_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/confirmedbooking/confirmedbooking.module */
          63624)).then(function (m) {
            return m.ConfirmedbookingPageModule;
          });
        }
      }, {
        path: 'contact',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/contact/contact.module */
          17213)).then(function (m) {
            return m.ContactPageModule;
          });
        }
      }, {
        path: 'customise',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_customise_customise_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/customise/customise.module */
          80477)).then(function (m) {
            return m.CustomisePageModule;
          });
        }
      }, {
        path: 'favourites',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_favourites_favourites_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/favourites/favourites.module */
          56677)).then(function (m) {
            return m.FavouritesPageModule;
          });
        }
      }, {
        path: 'forgot',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_forgot_forgot_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/forgot/forgot.module */
          93647)).then(function (m) {
            return m.ForgotPageModule;
          });
        }
      }, {
        path: 'insurance',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_insurance_insurance_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/insurance/insurance.module */
          84464)).then(function (m) {
            return m.InsurancePageModule;
          });
        }
      }, {
        path: 'jobreceived',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_jobreceived_jobreceived_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/jobreceived/jobreceived.module */
          78497)).then(function (m) {
            return m.JobreceivedPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/login/login.module */
          21053)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'myaccount',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_myaccount_myaccount_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/myaccount/myaccount.module */
          22804)).then(function (m) {
            return m.MyaccountPageModule;
          });
        }
      }, {
        path: 'orderdetails',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_orderdetails_orderdetails_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/orderdetails/orderdetails.module */
          18671)).then(function (m) {
            return m.OrderdetailsPageModule;
          });
        }
      }, {
        path: 'orderreview',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_orderreview_orderreview_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/orderreview/orderreview.module */
          40751)).then(function (m) {
            return m.OrderreviewPageModule;
          });
        }
      }, {
        path: 'payments',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_payments_payments_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/payments/payments.module */
          15795)).then(function (m) {
            return m.PaymentsPageModule;
          });
        }
      }, {
        path: 'privacy',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_privacy_privacy_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/privacy/privacy.module */
          2886)).then(function (m) {
            return m.PrivacyPageModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/signup/signup.module */
          17110)).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: 'subscriptions',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_subscriptions_subscriptions_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/subscriptions/subscriptions.module */
          76294)).then(function (m) {
            return m.SubscriptionsPageModule;
          });
        }
      }, {
        path: 'terms',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_terms_terms_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/terms/terms.module */
          27498)).then(function (m) {
            return m.TermsPageModule;
          });
        }
      }, {
        path: 'alternatedatetime',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_alternatedatetime_alternatedatetime_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/alternatedatetime/alternatedatetime.module */
          87249)).then(function (m) {
            return m.AlternatedatetimePageModule;
          });
        }
      } // ======== only uncomment below lines if you have chat modules ===============
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

      var _AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _capacitor_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/share */
      16380);
      /* harmony import */


      var _capacitor_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/device */
      42810);
      /* harmony import */


      var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/status-bar */
      64909);
      /* harmony import */


      var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/splash-screen */
      88592);
      /* harmony import */


      var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/app-rate/ngx */
      13553);
      /* harmony import */


      var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! onesignal-cordova-plugin */
      14868);
      /* harmony import */


      var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      7354);
      /* harmony import */


      var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/market/ngx */
      67972);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_local_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/local.service */
      85298);
      /* harmony import */


      var _services_rest_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./services/rest.service */
      43006);
      /* harmony import */


      var _services_utility_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/utility.service */
      67278);
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/events.service */
      80106);
      /* eslint-disable no-bitwise */

      /* eslint-disable @typescript-eslint/no-shadow */

      /* eslint-disable @typescript-eslint/naming-convention */
      // cordova plugins


      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, menu, actionSheetCtrl, localService, restService, utilityService, eventsService, router, modalCtrl, alertCtrl, appRate, appVersion, market) {
          _classCallCheck(this, AppComponent);

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
          this.selectedIndex = 0; // menu defined here

          this.userPages = [{
            title: 'Home',
            url: '/book',
            icon: 'home-outline',
            type: 'page'
          }, {
            title: 'Bookings',
            url: '/bookings',
            icon: 'calendar-outline',
            type: 'page'
          }, {
            title: 'Recurring Bookings',
            url: '/subscriptions',
            icon: 'calendar-clear-outline',
            type: 'page'
          }, {
            title: 'Payments',
            url: '/payments',
            icon: 'wallet-outline',
            type: 'page'
          }, {
            title: 'Favourites',
            url: '/favourites',
            icon: 'bookmark-outline',
            type: 'page'
          }, {
            title: 'Support',
            url: '/contact',
            icon: 'mail-outline',
            type: 'page'
          }, {
            title: 'Rate App',
            url: '/rate',
            icon: 'star-outline',
            type: 'function'
          }, {
            title: 'Share App',
            url: '/share',
            icon: 'share-outline',
            type: 'function'
          }, {
            title: 'More',
            url: '/more',
            icon: 'ellipsis-horizontal-outline',
            type: 'function'
          }, {
            title: 'Sign out',
            url: '/signout',
            icon: 'exit-outline',
            type: 'function'
          }];
          this.cleanerPages = [{
            title: 'My Jobs',
            url: '/cleanerhome',
            icon: 'home-outline',
            type: 'page'
          }, {
            title: 'Job Requests',
            url: '/cleanernotifications',
            icon: 'notifications-outline',
            type: 'page'
          }, {
            title: 'My Availability',
            url: '/cleanerschedules',
            icon: 'calendar-clear-outline',
            type: 'page'
          }, {
            title: 'Payments',
            url: '/cleanerpayments',
            icon: 'wallet-outline',
            type: 'page'
          }, {
            title: 'Support',
            url: '/contact',
            icon: 'mail-outline',
            type: 'page'
          }, {
            title: 'Rate App',
            url: '/rate',
            icon: 'star-outline',
            type: 'function'
          }, {
            title: 'Share App',
            url: '/share',
            icon: 'share-outline',
            type: 'function'
          }, {
            title: 'More',
            url: '/more',
            icon: 'ellipsis-horizontal-outline',
            type: 'function'
          }, {
            title: 'Sign out',
            url: '/signout',
            icon: 'exit-outline',
            type: 'function'
          }];
          this.guestPages = [{
            title: 'Home',
            url: '/login',
            icon: 'home-outline',
            type: 'page'
          }, {
            title: 'Support',
            url: '/contact',
            icon: 'mail-outline',
            type: 'page'
          }, {
            title: 'More',
            url: '/more',
            icon: 'ellipsis-horizontal-outline',
            type: 'function'
          }, {
            title: 'Rate App',
            url: '/rate',
            icon: 'star-outline',
            type: 'function'
          }, {
            title: 'Share App',
            url: '/share',
            icon: 'share-outline',
            type: 'function'
          }];
          this.loggedUser = null;
          this.loggedCleaner = null;
          this.jobreceivedByNotification = false;
          this.holdByNotification = false;
          this.appIsOpen = false;
          this.notificationReceived = false;
          this.chatByNotification_user_id = false;
          this.chatByNotification_cleaner_id = false;
          this.reminderReceived = false;
          this.reminderMode = false; //set default menu is for guest

          this.appPages = this.guestPages;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              // =============== after plugins are ready initialize them ==========
              // disable hardware back button
              // this.platform.backButton.subscribeWithPriority(999, () => {
              //   console.log('Hardware Back Pressed');
              // });
              // on ios show & hide splash
              if (_this.platform.is('ios') || _this.platform.is('ipad') || _this.platform.is('iphone')) {
                _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_5__.SplashScreen.show({
                  showDuration: 3000,
                  autoHide: true
                });
              } // set status bar to white


              _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.setStyle({
                style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.Style.Dark
              });

              if (_this.platform.is('android')) {
                _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.setBackgroundColor({
                  color: '#DD5F46'
                });

                _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.setOverlaysWebView({
                  overlay: false
                });
              } // get app version


              _this.version = 0.1;

              _this.appVersion.getVersionNumber().then(function (ver) {
                _this.version = ver;
              }); // event wise redraw menu


              _this.eventsService.subscribe('menu', function (type) {
                // refresh the menu
                if (type === 'user') {
                  _this.appPages = _this.userPages;
                  _this.loggedUser = _this.localService.getUser();
                } else if (type === 'cleaner') {
                  _this.appPages = _this.cleanerPages;
                  _this.loggedCleaner = _this.localService.getCleaner();
                } else if (type === 'guest') {
                  _this.appPages = _this.guestPages;
                }

                _this.chatModuleCheck();
              }); // event for more menu from other page


              _this.eventsService.subscribe('more', function (type) {
                _this.more();
              });

              if (_this.platform.is('ios') || _this.platform.is('ipad') || _this.platform.is('iphone') || _this.platform.is('android')) {
                console.log("platform");
                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default().setAppId(_this.utilityService.config.onesignalAppId);

                if (_this.platform.is('ios')) {
                  onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default().setNotificationWillShowInForegroundHandler(function (jsonData) {
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                      var _this2 = this;

                      var prompt;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              console.log('setNotificationWillShowInForegroundHandler: ' + JSON.stringify(jsonData));
                              this.notificationdata = JSON.parse(JSON.stringify(jsonData)).notification;

                              if (!(this.notificationdata.additionalData && this.notificationdata.additionalData.type)) {
                                _context.next = 9;
                                break;
                              }

                              _context.next = 5;
                              return this.alertCtrl.create({
                                header: 'New Notification',
                                // message: 'Job Details',
                                buttons: [{
                                  text: 'Cancel',
                                  handler: function handler(data) {
                                    console.log('Cancel clicked');
                                  }
                                }, {
                                  text: 'View',
                                  handler: function handler(dataone) {
                                    console.log('xxx', dataone);

                                    _this2.onpagenotificationopen(_this2.notificationdata);
                                  }
                                }]
                              });

                            case 5:
                              prompt = _context.sent;
                              prompt.present();
                              _context.next = 10;
                              break;

                            case 9:
                              this.onpagenotification(this.notificationdata);

                            case 10:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, this);
                    }));
                  });
                }

                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default().setNotificationOpenedHandler(function (jsonData) {
                  console.log("jsonData", jsonData);
                  _this.notificationdata = JSON.parse(JSON.stringify(jsonData)).notification;

                  if (_this.notificationdata.additionalData && _this.notificationdata.additionalData.type) {
                    _this.onpagenotificationopen(_this.notificationdata);
                  } else {
                    _this.onpagenotification(_this.notificationdata);
                  }
                });
                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default().promptForPushNotificationsWithUserResponse(function (accepted) {
                  console.log("User accepted notifications: " + accepted);
                });
                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_7___default().getDeviceState(function (stateChanges) {
                  console.log('OneSignal getDeviceState: ' + JSON.parse(JSON.stringify(stateChanges)).userId);
                });
              } // check logged users


              _this.checkLogged();
            });
          }
        }, {
          key: "onpagenotification",
          value: function onpagenotification(data) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var prompt;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: data.title,
                        message: data.body,
                        buttons: [{
                          text: 'Ok',
                          handler: function handler(data) {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      prompt = _context2.sent;
                      prompt.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onpagenotificationopen",
          value: function onpagenotificationopen(data) {
            var _this3 = this;

            if (data.additionalData.type === 'nearby' || data.additionalData.type === 'selected') {
              // navigate to accept & reject page
              this.jobreceivedByNotification = data.additionalData.job_id; // if app is open then directly move

              if (this.appIsOpen) {
                this.router.navigate(['/jobreceived'], {
                  queryParams: {
                    id: this.jobreceivedByNotification
                  }
                });
              }
            } else {
              var role = data.additionalData.role;

              if (role === 'user') {
                // navigate to accept & reject page
                this.notificationReceived = data.additionalData.job_id;

                if (data.additionalData.type === 'hold') {
                  this.holdByNotification = data.additionalData.job_id;
                } else if (data.additionalData.type === 'chat') {
                  this.chatByNotification_user_id = data.additionalData.user_id;
                  this.chatByNotification_cleaner_id = data.additionalData.cleaner_id;
                } else if (data.additionalData.type === 'reminder') {
                  this.reminderReceived = data.additionalData.job_id;
                } // if app is open then directly move


                if (this.appIsOpen) {
                  if (data.additionalData.type === 'chat') {
                    this.router.navigate(['/chat'], {
                      queryParams: {
                        user_id: this.chatByNotification_user_id,
                        cleaner_id: this.chatByNotification_cleaner_id
                      }
                    });
                  } else if (data.additionalData.type === 'hold') {
                    this.router.navigate(['/orderdetails'], {
                      queryParams: {
                        id: this.notificationReceived,
                        mode: 'subscription'
                      }
                    });
                  } else if (data.additionalData.type === 'reminder') {
                    this.reminderReceived = data.additionalData.job_id;
                    this.reminderMode = data.additionalData.mode;

                    if (data.additionalData.mode === 'job') {
                      // normal job
                      this.router.navigate(['/orderdetails'], {
                        queryParams: {
                          id: this.notificationReceived
                        }
                      });
                    } else {
                      // job history
                      this.router.navigate(['/orderdetails'], {
                        queryParams: {
                          id: this.notificationReceived,
                          mode: 'subscription'
                        }
                      });
                    }
                  } else {
                    this.router.navigate(['/orderdetails'], {
                      queryParams: {
                        id: this.notificationReceived
                      }
                    });
                  }
                }
              } else if (role === 'cleaner') {
                // navigate to accept & reject page
                this.notificationReceived = data.additionalData.job_id; // if app is open then directly move

                if (this.appIsOpen) {
                  if (data.additionalData.type === 'chat') {
                    this.chatByNotification_user_id = data.additionalData.user_id;
                    this.chatByNotification_cleaner_id = data.additionalData.cleaner_id;
                    this.router.navigate(['/chat'], {
                      queryParams: {
                        user_id: this.chatByNotification_user_id,
                        cleaner_id: this.chatByNotification_cleaner_id
                      }
                    });
                  } else if (data.additionalData.type === 'reminder') {
                    this.reminderReceived = data.additionalData.job_id;
                    this.reminderMode = data.additionalData.mode;

                    if (data.additionalData.mode === 'job') {
                      // normal job
                      this.restService.getData('jobdetails/' + this.notificationReceived).subscribe(function (res) {
                        _this3.router.navigate(['/bookingdetails'], {
                          queryParams: {
                            id: _this3.notificationReceived,
                            type: 'booking',
                            data: res
                          }
                        });
                      }, function (err) {
                        // error fetching data
                        console.log(err);
                      });
                    } else {
                      // job history
                      this.restService.getData('jobhistory/' + this.notificationReceived).subscribe(function (res) {
                        _this3.router.navigate(['/bookingdetails'], {
                          queryParams: {
                            id: _this3.notificationReceived,
                            type: 'subscription',
                            data: res
                          }
                        });
                      }, function (err) {
                        // error fetching data
                        console.log(err);
                      });
                    }
                  } else {
                    this.router.navigate(['/bookingdetails'], {
                      queryParams: {
                        id: this.notificationReceived
                      }
                    });
                  }
                }
              }
            }
          } // call custom function form menu globally

        }, {
          key: "callFunction",
          value: function callFunction(functionName) {
            if (functionName === '/share') {
              this.shareApp();
            } else if (functionName === '/rate') {
              this.rateApp();
            } else if (functionName === '/signout') {
              this.signOut();
            } else if (functionName === '/more') {
              this.more();
            }
          }
        }, {
          key: "getPlatform",
          value: function getPlatform() {
            if (this.platform.is('ios')) {
              return 'ios';
            } else if (this.platform.is('android')) {
              return 'android';
            } else {
              return 'other';
            }
          }
        }, {
          key: "getUUID",
          value: function getUUID() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var info;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return _capacitor_device__WEBPACK_IMPORTED_MODULE_3__.Device.getId();

                    case 2:
                      info = _context3.sent;
                      return _context3.abrupt("return", info);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }, {
          key: "shareApp",
          value: function shareApp() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(this.getPlatform() === 'android')) {
                        _context4.next = 5;
                        break;
                      }

                      _context4.next = 3;
                      return _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.share({
                        title: 'Check out ' + this.utilityService.config.appName + ' App',
                        text: 'Found this interesting app. Thought of sharing with you as you may find it useful',
                        url: 'https://play.google.com/store/apps/details?id=' + this.utilityService.config.googlePlayPackageName,
                        dialogTitle: 'Share with Friends'
                      });

                    case 3:
                      _context4.next = 7;
                      break;

                    case 5:
                      _context4.next = 7;
                      return _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.share({
                        title: 'Check out ' + this.utilityService.config.appName + ' App',
                        text: 'Found this interesting app. Thought of sharing with you as you may find it useful',
                        url: 'https://itunes.apple.com/us/app/myapp/id' + this.utilityService.config.iosAppStoreId,
                        dialogTitle: 'Share with Friends'
                      });

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "rateApp",
          value: function rateApp() {
            this.appRate.setPreferences({
              storeAppURL: {
                ios: this.utilityService.config.iosAppStoreId,
                android: 'market://details?id=' + this.utilityService.config.googlePlayPackageName
              }
            });
            this.appRate.promptForRating(true);
          }
        }, {
          key: "signOut",
          value: function signOut() {
            this.localService.removeUser();
            this.localService.removeCleaner();
            this.menu.enable(false); // refresh the menu : send event

            this.eventsService.publish('menu', 'guest'); // unset logged flags

            this.loggedUser = null;
            this.loggedCleaner = null;
            this.router.navigateByUrl('/login', {
              replaceUrl: true
            });
          } // action sheet more

        }, {
          key: "more",
          value: function more() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this4 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.actionSheetCtrl.create({
                        header: 'MORE',
                        cssClass: 'moreClass remove-cancel',
                        buttons: [{
                          text: 'About Us',
                          handler: function handler() {
                            _this4.router.navigate(['/about']);
                          }
                        }, {
                          text: 'Terms & Conditions',
                          handler: function handler() {
                            _this4.router.navigate(['/terms']);
                          }
                        }, {
                          text: 'Cancellation Policy',
                          handler: function handler() {
                            _this4.router.navigate(['/cancellation']);
                          }
                        }, {
                          text: 'Insurance',
                          handler: function handler() {
                            _this4.router.navigate(['/insurance']);
                          }
                        }, {
                          text: 'Community',
                          handler: function handler() {
                            _this4.router.navigate(['/community']);
                          }
                        }, {
                          text: 'Privacy Policy',
                          handler: function handler() {
                            _this4.router.navigate(['/privacy']);
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context5.sent;
                      actionSheet.present();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "OpenUserAccount",
          value: function OpenUserAccount() {
            this.menu.close();
            this.router.navigate(['myaccount']);
          }
        }, {
          key: "OpenCleanerAccount",
          value: function OpenCleanerAccount() {
            this.menu.close();
            this.router.navigate(['cleaneraccount']);
          } // check logged user

        }, {
          key: "checkLogged",
          value: function checkLogged() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      // silently log the settings
                      this.restService.getData('getsettings').subscribe(function (data) {
                        _this5.localService.setSettings(data); // App Version ===========


                        _this5.appVersion.getVersionNumber().then(function (version) {
                          _this5.version = version; // check version upgradation

                          if (_this5.platform.is('ios') || _this5.platform.is('ipad') || _this5.platform.is('iphone')) {
                            // ios versioning
                            if (_this5.isNewerVersion(_this5.version, data.ios_version)) {
                              _this5.openUpdateAlert();
                            }
                          } else if (_this5.platform.is('android')) {
                            // android versioning
                            if (_this5.isNewerVersion(_this5.version, data.android_version)) {
                              _this5.openUpdateAlert();
                            }
                          }
                        });

                        _this5.chatModuleCheck(); //===================================
                        // app opened


                        _this5.appIsOpen = true;
                        _this5.loggedUser = _this5.localService.getUser();
                        _this5.loggedCleaner = _this5.localService.getCleaner(); // if logged in as user or cleaner

                        if (!_this5.loggedUser && !_this5.loggedCleaner) {
                          // move to login page
                          _this5.router.navigateByUrl('/login', {
                            replaceUrl: true
                          });
                        } else {
                          if (_this5.loggedUser) {
                            // user menu
                            _this5.appPages = _this5.userPages; // if job received redirect to job accept page else redirect to particular page

                            if (_this5.chatByNotification_user_id && _this5.chatByNotification_cleaner_id) {
                              _this5.router.navigateByUrl('/chat?user_id=' + _this5.chatByNotification_user_id + '&cleaner_id=' + _this5.chatByNotification_cleaner_id, {
                                replaceUrl: true
                              });
                            } else if (_this5.holdByNotification) {
                              _this5.router.navigateByUrl('/orderdetails?id=' + _this5.holdByNotification + '&mode=subscription', {
                                replaceUrl: true
                              });
                            } else if (_this5.reminderReceived) {
                              if (_this5.reminderMode === 'job') {
                                // normal job
                                _this5.router.navigateByUrl('/orderdetails?id=' + _this5.reminderReceived, {
                                  replaceUrl: true
                                });
                              } else {
                                // job history
                                _this5.router.navigateByUrl('/orderdetails?id=' + _this5.reminderReceived + '&mode=subscription', {
                                  replaceUrl: true
                                });
                              }
                            } else if (_this5.notificationReceived) {
                              _this5.router.navigateByUrl('/orderdetails?id=' + _this5.notificationReceived, {
                                replaceUrl: true
                              });
                            } else {
                              // this.rootPage = HomePage;
                              _this5.router.navigateByUrl('/book', {
                                replaceUrl: true
                              }); // book page

                            }
                          } else if (_this5.loggedCleaner) {
                            // cleaner menu
                            _this5.appPages = _this5.cleanerPages; // formatting the rating

                            if (_this5.loggedCleaner.rating) {
                              // check if integer or float
                              if (typeof _this5.loggedCleaner.rating === 'number' && _this5.loggedCleaner.rating % 1 === 0 || _this5.loggedCleaner.rating.toString().length === 1) {
                                _this5.loggedCleaner.rating = _this5.loggedCleaner.rating + '.0';
                              } else {
                                // float
                                _this5.loggedCleaner.rating = _this5.loggedCleaner.rating.toString().match(/^-?\d+(?:\.\d{0,1})?/)[0];
                              }
                            } // if job received redirect to job accept page else redirect to particular page


                            if (_this5.chatByNotification_user_id && _this5.chatByNotification_cleaner_id) {
                              _this5.router.navigateByUrl('/chat?user_id=' + _this5.chatByNotification_user_id + '&cleaner_id=' + _this5.chatByNotification_cleaner_id, {
                                replaceUrl: true
                              });
                            } else if (_this5.reminderReceived) {
                              if (_this5.reminderMode === 'job') {
                                // normal job
                                _this5.restService.getData('jobdetails/' + _this5.reminderReceived).subscribe(function (res) {
                                  _this5.router.navigateByUrl('/bookingdetails?id=' + _this5.reminderReceived + '&type=booking&data=' + res, {
                                    replaceUrl: true
                                  });
                                }, function (err) {
                                  // error fetching data
                                  console.log(err);
                                });
                              } else {
                                // job history
                                _this5.restService.getData('jobhistory/' + _this5.reminderReceived).subscribe(function (res) {
                                  _this5.router.navigateByUrl('/bookingdetails?id=' + _this5.reminderReceived + '&type=subscription&data=' + res, {
                                    replaceUrl: true
                                  });
                                }, function (err) {
                                  // error fetching data
                                  console.log(err);
                                });
                              }
                            } else if (_this5.jobreceivedByNotification) {
                              _this5.router.navigateByUrl('/jobreceived?id=' + _this5.jobreceivedByNotification, {
                                replaceUrl: true
                              });
                            } else if (_this5.notificationReceived) {
                              _this5.restService.getData('jobdetails/' + _this5.notificationReceived).subscribe(function (data) {
                                console.log('Jobdata=>', data);

                                _this5.router.navigateByUrl('/bookingdetails?id=' + data.id + '&type=booking&data=' + data, {
                                  replaceUrl: true
                                });
                              }, function (err) {
                                //error fetching booking data
                                // redirect to home page
                                // this.router.navigateByUrl('/cleanerhome');
                                _this5.checkedIfCleanerVerified();
                              });
                            } else {
                              // this.router.navigateByUrl('/cleanerhome'); // cleaner default screen
                              _this5.checkedIfCleanerVerified();
                            }
                          } else {
                            _this5.router.navigateByUrl('/login', {
                              replaceUrl: true
                            });
                          }
                        }
                      }, function (err) {
                        return _this5.utilityService.openAlerts('Oops!', 'We are unable to connect with the server, Please restart the App.', 'ok');
                      });

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "chatModuleCheck",
          value: function chatModuleCheck() {
            // if chat module is available then only show in menu
            if (this.localService.getSettings().CHAT_MODULE_ENABLED === true) {
              if (this.loggedUser) {
                this.appPages.splice(5, 0, {
                  title: 'Chat',
                  url: '/chatlist',
                  icon: 'chat',
                  type: 'page'
                });
              }

              if (this.loggedCleaner) {
                this.appPages.splice(4, 0, {
                  title: 'Chat',
                  url: '/chatlist',
                  icon: 'chat',
                  type: 'page'
                });
              }
            }
          }
        }, {
          key: "checkedIfCleanerVerified",
          value: function checkedIfCleanerVerified() {
            var _this6 = this;

            // check verification status
            this.restService.getData('cleaner/' + this.loggedCleaner.id + '/checkverification').subscribe(function (callback) {
              _this6.router.navigateByUrl('/cleanerhome', {
                replaceUrl: true
              });
            }, function (failed) {
              if (failed.status === 404) {
                // need to submit details
                _this6.router.navigateByUrl('/cleanermoredetails?mode=new', {
                  replaceUrl: true
                });
              } else if (failed.status === 401) {
                // pending - wait for review
                _this6.router.navigateByUrl('/cleanermoredetails?mode=pending', {
                  replaceUrl: true
                });
              } else if (failed.status === 403) {
                // rejected - resubmit details
                _this6.router.navigateByUrl('/cleanermoredetails?mode=rejected&reason=' + failed.error.reason, {
                  replaceUrl: true
                });
              } else {
                return _this6.utilityService.openAlerts('Oops!', 'Sorry server error, Please restart the app.', 'ok');
              }
            });
          } // compare version =====

        }, {
          key: "isNewerVersion",
          value: function isNewerVersion(oldVer, newVer) {
            var oldParts = oldVer.split('.');
            var newParts = newVer.split('.');

            for (var i = 0; i < newParts.length; i++) {
              var a = ~~newParts[i]; // parse int

              var b = ~~oldParts[i]; // parse int

              if (a > b) {
                return true;
              }

              if (a < b) {
                return false;
              }
            }

            return false;
          }
        }, {
          key: "openUpdateAlert",
          value: function openUpdateAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertCtrl.create({
                        header: 'New version available!',
                        message: 'Please update the app to the latest version to enjoy uninturrepted services & better performance!',
                        buttons: [{
                          text: 'Update Now',
                          // role: 'destructive',
                          handler: function handler() {
                            if (_this7.platform.is('ios') || _this7.platform.is('ipad') || _this7.platform.is('iphone')) {
                              _this7.market.open(_this7.utilityService.config.appStoreAppId.toString());
                            } else if (_this7.platform.is('android')) {
                              _this7.market.open(_this7.utilityService.config.googlePlayPackageName);
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.MenuController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ActionSheetController
        }, {
          type: _services_local_service__WEBPACK_IMPORTED_MODULE_10__.LocalService
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_11__.RestService
        }, {
          type: _services_utility_service__WEBPACK_IMPORTED_MODULE_12__.UtilityService
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_13__.EventsService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
        }, {
          type: _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_6__.AppRate
        }, {
          type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__.AppVersion
        }, {
          type: _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_9__.Market
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/app-rate/ngx */
      13553);
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      7354);
      /* harmony import */


      var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/market/ngx */
      67972);
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      97905);
      /* harmony import */


      var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/date-picker/ngx */
      61194);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      53760); // cordova plugins


      var _AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot({
          backButtonText: '',
          backButtonIcon: 'arrow-back'
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy
        }, _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_2__.AppRate, _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__.AppVersion, _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_4__.Market, _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__.DatePicker, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__.InAppBrowser, _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__.FileTransfer, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__.InAppBrowser, _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__.DatePicker],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    80106:
    /*!********************************************!*\
      !*** ./src/app/services/events.service.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EventsService": function EventsService() {
          return (
            /* binding */
            _EventsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79765);

      var _EventsService = /*#__PURE__*/function () {
        function EventsService() {
          _classCallCheck(this, EventsService);

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


        _createClass(EventsService, [{
          key: "subscribe",
          value: function subscribe(topic, observer) {
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

        }, {
          key: "publish",
          value: function publish(topic, data) {
            var subject = this.channels[topic];

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

        }, {
          key: "destroy",
          value: function destroy(topic) {
            var subject = this.channels[topic];

            if (!subject) {
              return;
            }

            subject.complete();
            delete this.channels[topic];
          }
        }]);

        return EventsService;
      }();

      _EventsService.ctorParameters = function () {
        return [];
      };

      _EventsService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _EventsService);
      /***/
    },

    /***/
    85298:
    /*!*******************************************!*\
      !*** ./src/app/services/local.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LocalService": function LocalService() {
          return (
            /* binding */
            _LocalService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LocalService = /*#__PURE__*/function () {
        function LocalService() {
          _classCallCheck(this, LocalService);
        } // user


        _createClass(LocalService, [{
          key: "setUser",
          value: function setUser(user) {
            localStorage.setItem('CleaningServiceUser', JSON.stringify(user));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return JSON.parse(localStorage.getItem('CleaningServiceUser'));
          }
        }, {
          key: "removeUser",
          value: function removeUser() {
            localStorage.removeItem('CleaningServiceUser');
          }
        }, {
          key: "emptystorage",
          value: function emptystorage() {
            localStorage.clear();
          }
        }, {
          key: "set",
          value: function set(key, val) {
            localStorage.setItem(key, JSON.stringify(val));
          }
        }, {
          key: "get",
          value: function get(key) {
            return JSON.parse(localStorage.getItem(key));
          }
        }, {
          key: "remove",
          value: function remove(key) {
            localStorage.removeItem(key);
          } // cleaner

        }, {
          key: "setCleaner",
          value: function setCleaner(user) {
            localStorage.setItem('CleaningServiceCleaner', JSON.stringify(user));
          }
        }, {
          key: "getCleaner",
          value: function getCleaner() {
            return JSON.parse(localStorage.getItem('CleaningServiceCleaner'));
          }
        }, {
          key: "removeCleaner",
          value: function removeCleaner() {
            localStorage.removeItem('CleaningServiceCleaner');
          } // settings

        }, {
          key: "setSettings",
          value: function setSettings(data) {
            localStorage.setItem('CleaningServiceSettings', JSON.stringify(data));
          }
        }, {
          key: "getSettings",
          value: function getSettings() {
            return JSON.parse(localStorage.getItem('CleaningServiceSettings'));
          }
        }]);

        return LocalService;
      }();

      _LocalService.ctorParameters = function () {
        return [];
      };

      _LocalService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _LocalService);
      /***/
    },

    /***/
    43006:
    /*!******************************************!*\
      !*** ./src/app/services/rest.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RestService": function RestService() {
          return (
            /* binding */
            _RestService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _services_utility_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/utility.service */
      67278);
      /* eslint-disable @typescript-eslint/naming-convention */


      var _RestService = /*#__PURE__*/function () {
        function RestService(http, utilityService) {
          _classCallCheck(this, RestService);

          this.http = http;
          this.utilityService = utilityService;
          this.httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
              'Content-Type': 'application/json'
            })
          };
          this.baseURL = this.utilityService.config.adminBaseUrl + '/api/';
        }

        _createClass(RestService, [{
          key: "getData",
          value: function getData(url) {
            var furl = this.baseURL + url;
            return this.http.get(furl);
          }
        }, {
          key: "postData",
          value: function postData(url, postParams) {
            var furl = this.baseURL + url;
            return this.http.post(furl, postParams, this.httpHeader);
          } // chat with socket

        }, {
          key: "getChat",
          value: function getChat(url) {
            return this.http.get(this.utilityService.config.chatServerUrl + '/' + url);
          }
        }, {
          key: "postChat",
          value: function postChat(url, postParams) {
            return this.http.post(this.utilityService.config.chatServerUrl + '/' + url, postParams, this.httpHeader);
          }
        }]);

        return RestService;
      }();

      _RestService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _services_utility_service__WEBPACK_IMPORTED_MODULE_0__.UtilityService
        }];
      };

      _RestService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _RestService);
      /***/
    },

    /***/
    67278:
    /*!*********************************************!*\
      !*** ./src/app/services/utility.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UtilityService": function UtilityService() {
          return (
            /* binding */
            _UtilityService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* eslint-disable @typescript-eslint/naming-convention */


      var _UtilityService = /*#__PURE__*/function () {
        function UtilityService(loadingCtrl, alertCtrl) {
          _classCallCheck(this, UtilityService);

          this.loadingCtrl = loadingCtrl;
          this.alertCtrl = alertCtrl;
          this.isLoading = false;
          this.frequencies = {
            weekly: 'Weekly',
            biweekly: 'Every 2 Weeks',
            monthly: 'Monthly',
            oneoff: 'One Off',
            daily: 'Daily'
          };
          this.config = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
          this.uploadPath = this.config.adminBaseUrl + '/uploads/';
        }

        _createClass(UtilityService, [{
          key: "capitalize",
          value: function capitalize(text) {
            return text.charAt(0).toUpperCase() + text.slice(1);
          } // =========== migrate

        }, {
          key: "loadingOpen",
          value: function loadingOpen(val) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this8 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.isLoading = true;
                      _context8.next = 3;
                      return this.loadingCtrl.create({
                        message: val
                      }).then(function (a) {
                        a.present().then(function () {
                          console.log('loading presented');

                          if (!_this8.isLoading) {
                            a.dismiss().then(function () {
                              return console.log('abort laoding');
                            });
                          }
                        });
                      });

                    case 3:
                      return _context8.abrupt("return", _context8.sent);

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "loadingClose",
          value: function loadingClose() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.isLoading = false;
                      _context9.next = 3;
                      return this.loadingCtrl.dismiss().then(function () {
                        return console.log('loading dismissed');
                      });

                    case 3:
                      return _context9.abrupt("return", _context9.sent);

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "openAlerts",
          value: function openAlerts(title, text, button) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var alert;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.alertCtrl.create({
                        header: title,
                        message: text,
                        buttons: [button],
                        backdropDismiss: false
                      });

                    case 2:
                      alert = _context10.sent;
                      _context10.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "b64toBlob",
          value: function b64toBlob(b64Data) {
            var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
              var slice = byteCharacters.slice(offset, offset + sliceSize);
              var byteNumbers = new Array(slice.length);

              for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              var byteArray = new Uint8Array(byteNumbers);
              byteArrays.push(byteArray);
            }

            var blob = new Blob(byteArrays, {
              type: contentType
            });
            return blob;
          }
        }]);

        return UtilityService;
      }();

      _UtilityService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController
        }];
      };

      _UtilityService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _UtilityService);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      });

      var _environment = {
        production: true,
        appName: 'V1 Cleaners',
        adminBaseUrl: 'https://cleaners.v1tl.com',
        onesignalAppId: 'efd1963e-8eaf-42b0-9928-46ed4ef6c723',
        firebaseSenderId: '397504825984',
        googlePlayPackageName: 'com.cleaningservices',
        iosAppStoreId: '1575523808'
      };
      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [76272, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid #d7d8da;\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-base);\n}\n\n.menu-icon {\n  color: var(--ion-color-base) !important;\n  vertical-align: middle;\n  margin-right: 25px;\n  height: 30px;\n}\n\nion-toolbar {\n  --background: var(--ion-color-base);\n}\n\nion-thumbnail {\n  --size: 75px;\n  --border-radius: 50%;\n  display: inline-block;\n  margin-right: 25px;\n}\n\nion-thumbnail img {\n  vertical-align: middle;\n}\n\n.name-container {\n  color: var(--ion-color-white);\n  text-transform: uppercase;\n  font-size: 1rem;\n  font-family: \"Halis Grotesque\";\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\nion-menu ion-toolbar {\n  padding-left: 5px !important;\n}\n\nion-menu ion-list {\n  padding-top: 0px !important;\n}\n\nion-menu ion-list ion-item {\n  --min-height: 40px;\n  font-size: 0.8rem;\n  border-bottom: 1px solid var(--ion-color-border) !important;\n}\n\n.button-menu-container {\n  padding: 0 15px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.button-menu.activated {\n  background-color: var(--ion-color-base);\n}\n\n.menu-footer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--ion-color-light);\n  padding: 5px 15px;\n  color: var(--ion-color-gray);\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFBQSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsOEJBQUE7QUFKRjs7QUFVQTtFQUNFLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFQRjs7QUFVQTtFQUNFLG1DQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBUEY7O0FBUUU7RUFDRSxzQkFBQTtBQU5KOztBQVVBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFQRjs7QUFXRTtFQUNFLDRCQUFBO0FBUko7O0FBVUU7RUFDRSwyQkFBQTtBQVJKOztBQVNJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJEQUFBO0FBUE47O0FBWUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFUSjs7QUFZSTtFQUNFLHVDQUFBO0FBVE47O0FBY0U7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBWEoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYXNlKTtcbn1cblxuLy8gY3VzdG9tID09PT09PT09PT1cblxuLy8gbWVudVxuLm1lbnUtaWNvbntcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYXNlKSAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaW9uLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhc2UpO1xufVxuXG5pb24tdGh1bWJuYWlse1xuICAtLXNpemU6IDc1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgaW1ne1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbn1cblxuLm5hbWUtY29udGFpbmVye1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogJ0hhbGlzIEdyb3Rlc3F1ZSc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5pb24tbWVudXtcbiAgaW9uLXRvb2xiYXJ7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgfVxuICBpb24tbGlzdHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgaW9uLWl0ZW17XG4gICAgICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItYm9yZGVyKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4uYnV0dG9uLW1lbnUtY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gIH1cbiAgLmJ1dHRvbi1tZW51e1xuICAgICYuYWN0aXZhdGVke1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWJhc2UpO1xuICAgIH1cbiAgfVxuXG5cbiAgLm1lbnUtZm9vdGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JheSk7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cblxuIl19 */";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane when=\"(min-width: 1200px)\" contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-grid>\n            <ion-row *ngIf=\"!loggedUser && !loggedCleaner\">\n              <ion-col size=\"12\"><img src=\"{{utilityService.config.adminBaseUrl}}/uploads/images/{{localService.getSettings().image}}\"/></ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"loggedUser\" (click)=\"OpenUserAccount()\">\n              <ion-col size=\"5\">\n                <ion-thumbnail class=\"profile-image\">\n                  <img *ngIf=\"loggedUser?.image\" src=\"{{utilityService.uploadPath}}profile/{{loggedUser?.image}}\">\n                  <div class=\"thumb-pic\" *ngIf=\"!loggedUser?.image\">\n                    <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n                  </div>\n                </ion-thumbnail>\n              </ion-col>\n              <ion-col size=\"7\">\n                <ion-label class=\"name-container\">{{loggedUser?.name}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf=\"loggedCleaner\" (click)=\"OpenCleanerAccount()\">\n              <ion-col size=\"5\">\n                <ion-thumbnail class=\"profile-image\">\n                  <img *ngIf=\"loggedCleaner?.image\" src=\"{{utilityService.uploadPath}}profile/{{loggedCleaner?.image}}\">\n                  <div class=\"thumb-pic\" *ngIf=\"!loggedCleaner?.image\">\n                    <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n                  </div>\n                </ion-thumbnail>\n              </ion-col>\n              <ion-col size=\"7\">\n                <ion-label class=\"name-container\">{{loggedCleaner?.name}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n\n            <ion-item *ngIf=\"p.type === 'page'\" (click)=\"selectedIndex = i\" routerDirection=\"forward\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex === i\">\n              <ion-icon class=\"menu-icon\" name=\"{{p.icon}}\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n\n            <ion-item *ngIf=\"p.type === 'function'\" (click)=\"selectedIndex = i; callFunction(p.url)\" routerDirection=\"forward\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex === i\">\n              <ion-icon class=\"menu-icon\" name=\"{{p.icon}}\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n\n          </ion-menu-toggle>\n        </ion-list>\n\n        <ion-row class=\"menu-footer\" *ngIf=\"loggedUser\">\n            <ion-col size=\"6\">Version</ion-col>\n            <ion-col size=\"6\" class=\"ion-text-right\">{{version}}</ion-col>\n        </ion-row>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map