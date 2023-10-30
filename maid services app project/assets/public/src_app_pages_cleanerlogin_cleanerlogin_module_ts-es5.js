(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_cleanerlogin_cleanerlogin_module_ts"], {
    /***/
    99634:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/cleanerlogin/cleanerlogin-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CleanerloginPageRoutingModule": function CleanerloginPageRoutingModule() {
          return (
            /* binding */
            _CleanerloginPageRoutingModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _cleanerlogin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cleanerlogin.page */
      88701);

      var routes = [{
        path: '',
        component: _cleanerlogin_page__WEBPACK_IMPORTED_MODULE_0__.CleanerloginPage
      }];

      var _CleanerloginPageRoutingModule = /*#__PURE__*/_createClass(function CleanerloginPageRoutingModule() {
        _classCallCheck(this, CleanerloginPageRoutingModule);
      });

      _CleanerloginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CleanerloginPageRoutingModule);
      /***/
    },

    /***/
    63728:
    /*!***********************************************************!*\
      !*** ./src/app/pages/cleanerlogin/cleanerlogin.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CleanerloginPageModule": function CleanerloginPageModule() {
          return (
            /* binding */
            _CleanerloginPageModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _cleanerlogin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cleanerlogin-routing.module */
      99634);
      /* harmony import */


      var _cleanerlogin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cleanerlogin.page */
      88701);

      var _CleanerloginPageModule = /*#__PURE__*/_createClass(function CleanerloginPageModule() {
        _classCallCheck(this, CleanerloginPageModule);
      });

      _CleanerloginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _cleanerlogin_routing_module__WEBPACK_IMPORTED_MODULE_0__.CleanerloginPageRoutingModule],
        declarations: [_cleanerlogin_page__WEBPACK_IMPORTED_MODULE_1__.CleanerloginPage]
      })], _CleanerloginPageModule);
      /***/
    },

    /***/
    88701:
    /*!*********************************************************!*\
      !*** ./src/app/pages/cleanerlogin/cleanerlogin.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CleanerloginPage": function CleanerloginPage() {
          return (
            /* binding */
            _CleanerloginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_cleanerlogin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cleanerlogin.page.html */
      77838);
      /* harmony import */


      var _cleanerlogin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cleanerlogin.page.scss */
      93557);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/local.service */
      85298);
      /* harmony import */


      var _services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/rest.service */
      43006);
      /* harmony import */


      var _services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/utility.service */
      67278);
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/events.service */
      80106);
      /* harmony import */


      var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! onesignal-cordova-plugin */
      14868);
      /* harmony import */


      var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6__);

      var _CleanerloginPage = /*#__PURE__*/function () {
        function CleanerloginPage(platform, menu, localService, restService, utilityService, eventsService, router) {
          var _this = this;

          _classCallCheck(this, CleanerloginPage);

          this.platform = platform;
          this.menu = menu;
          this.localService = localService;
          this.restService = restService;
          this.utilityService = utilityService;
          this.eventsService = eventsService;
          this.router = router;
          this.cleaner = {
            email: '',
            password: ''
          };
          this.token = null;
          this.platform.ready().then(function () {
            onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6___default().setAppId(_this.utilityService.config.onesignalAppId);
            onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6___default().getDeviceState(function (stateChanges) {
              console.log('login: ' + JSON.parse(JSON.stringify(stateChanges)).userId);
              _this.token = JSON.parse(JSON.stringify(stateChanges)).userId;
              console.log("this.token", _this.token);
            });
          });
        }

        _createClass(CleanerloginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login() {
            var _this2 = this;

            if (this.cleaner.email === '') {
              return this.utilityService.openAlerts('Error', 'Email required', 'ok');
            }

            if (this.cleaner.password === '') {
              return this.utilityService.openAlerts('Error', 'Password required', 'ok');
            }

            this.cleaner.device = this.getPlatform();
            this.cleaner.token = this.token;
            this.utilityService.loadingOpen('Authenticating...');
            this.restService.postData('cleaner/login', this.cleaner).subscribe(function (data) {
              _this2.localService.setCleaner(data); // refresh the menu : send event


              _this2.menu.enable(true);

              _this2.eventsService.publish('menu', 'cleaner');

              _this2.utilityService.loadingClose();

              _this2.checkedIfCleanerVerified(_this2.localService.getCleaner().id);
            }, function (err) {
              _this2.utilityService.loadingClose();

              return _this2.utilityService.openAlerts('Error', 'Login failed.', 'ok');
            });
          }
        }, {
          key: "register",
          value: function register() {
            this.router.navigate(['/cleanerregister']);
          }
        }, {
          key: "forgot",
          value: function forgot() {
            this.router.navigate(['/cleanerforgot']);
          }
        }, {
          key: "user",
          value: function user() {
            this.router.navigate(['/login']);
          }
        }, {
          key: "getPlatform",
          value: function getPlatform() {
            if (this.platform.is('ios') || this.platform.is('ipad')) {
              return 'ios';
            } else if (this.platform.is('android')) {
              return 'android';
            } else {
              return 'other';
            }
          }
        }, {
          key: "terms",
          value: function terms() {
            this.router.navigate(['/terms']);
          }
        }, {
          key: "privacy",
          value: function privacy() {
            this.router.navigate(['/privacy']);
          }
        }, {
          key: "checkedIfCleanerVerified",
          value: function checkedIfCleanerVerified(id) {
            var _this3 = this;

            // check verification status
            this.restService.getData('cleaner/' + id + '/checkverification').subscribe(function (callback) {
              _this3.router.navigateByUrl('/cleanerhome', {
                replaceUrl: true
              });
            }, function (failed) {
              if (failed.status === 404) {
                // need to submit details
                _this3.router.navigateByUrl('/cleanermoredetails?mode=new', {
                  replaceUrl: true
                });
              } else if (failed.status === 401) {
                // pending - wait for review
                _this3.router.navigateByUrl('/cleanermoredetails?mode=pending', {
                  replaceUrl: true
                });
              } else if (failed.status === 403) {
                // rejected - resubmit details
                _this3.router.navigateByUrl('/cleanermoredetails?mode=rejected&reason=' + failed.error.reason, {
                  replaceUrl: true
                });
              } else {
                return _this3.utilityService.openAlerts('Oops!', 'Sorry server error, Please restart the app.', 'ok');
              }
            });
          }
        }]);

        return CleanerloginPage;
      }();

      _CleanerloginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController
        }, {
          type: _services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService
        }, {
          type: _services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__.EventsService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }];
      };

      _CleanerloginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-cleanerlogin',
        template: _raw_loader_cleanerlogin_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cleanerlogin_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CleanerloginPage);
      /***/
    },

    /***/
    93557:
    /*!***********************************************************!*\
      !*** ./src/app/pages/cleanerlogin/cleanerlogin.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".trms {\n  color: var(--ion-color-gray);\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsZWFuZXJsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6ImNsZWFuZXJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJtc3tcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    77838:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cleanerlogin/cleanerlogin.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <img class=\"logo\" src=\"{{utilityService.config.adminBaseUrl}}/uploads/images/{{localService.getSettings().image}}\" height=\"40\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"login-container\">\n      <div class=\"login-image-container\" *ngIf=\"localService.getSettings().login_image\" >\n        <img class=\"login-image\" src=\"{{utilityService.config.adminBaseUrl}}/uploads/images/{{localService.getSettings().cleaner_login_image}}\"/>\n      </div>\n\n      <h4 class=\"heading-title ion-text-center ion-text-uppercase\">Cleaner Login</h4>\n      <ion-input clearInput type=\"text\" placeholder=\"EMAIL ADDRESS\" [(ngModel)]=\"cleaner.email\" (ngModelChange)=\"cleaner.email = $event.toLocaleLowerCase()\"></ion-input>\n      <ion-input clearInput type=\"password\" placeholder=\"PASSWORD\" [(ngModel)]=\"cleaner.password\"></ion-input>\n      <ion-button expand=\"block\" class=\"base-button\" (click)=\"login()\">LOGIN</ion-button>\n\n      <div class=\"action-links\">\n        <ul>\n          <li (click)=\"forgot()\">Forgot Password?</li>\n          <li (click)=\"register()\">Register here</li>\n        </ul>\n      </div>\n\n      <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"user()\">I'M A USER</ion-button>\n\n      <p class=\"ion-text-center trms\">By using this app you are agreeing to our <span class=\"tnc\" (click)=\"terms()\">Terms & Conditions</span>, <span class=\"tnc\" (click)=\"privacy()\">GDPR</span> and <span class=\"tnc\" (click)=\"privacy()\">Privacy Policy</span></p>\n\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cleanerlogin_cleanerlogin_module_ts-es5.js.map