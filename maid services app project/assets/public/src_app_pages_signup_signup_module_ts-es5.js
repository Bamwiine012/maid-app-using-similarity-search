(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_signup_signup_module_ts"], {
    /***/
    90392:
    /*!*******************************************************!*\
      !*** ./src/app/pages/signup/signup-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupPageRoutingModule": function SignupPageRoutingModule() {
          return (
            /* binding */
            _SignupPageRoutingModule
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


      var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signup.page */
      64374);

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
      }];

      var _SignupPageRoutingModule = /*#__PURE__*/_createClass(function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      });

      _SignupPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SignupPageRoutingModule);
      /***/
    },

    /***/
    17110:
    /*!***********************************************!*\
      !*** ./src/app/pages/signup/signup.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupPageModule": function SignupPageModule() {
          return (
            /* binding */
            _SignupPageModule
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


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signup-routing.module */
      90392);
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signup.page */
      64374);

      var _SignupPageModule = /*#__PURE__*/_createClass(function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      });

      _SignupPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
      })], _SignupPageModule);
      /***/
    },

    /***/
    64374:
    /*!*********************************************!*\
      !*** ./src/app/pages/signup/signup.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupPage": function SignupPage() {
          return (
            /* binding */
            _SignupPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./signup.page.html */
      71979);
      /* harmony import */


      var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signup.page.scss */
      69233);
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

      var _SignupPage = /*#__PURE__*/function () {
        function SignupPage(platform, menu, localService, restService, utilityService, eventsService, router) {
          var _this = this;

          _classCallCheck(this, SignupPage);

          this.platform = platform;
          this.menu = menu;
          this.localService = localService;
          this.restService = restService;
          this.utilityService = utilityService;
          this.eventsService = eventsService;
          this.router = router;
          this.user = {
            name: '',
            email: '',
            phone: '',
            password: ''
          };
          this.verification = false;
          this.verificationCode = null;
          this.code = null;
          this.token = null;
          this.cnfpassword = '';
          this.platform.ready().then(function () {
            onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6___default().setAppId(_this.utilityService.config.onesignalAppId);
            onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6___default().getDeviceState(function (stateChanges) {
              console.log('login: ' + JSON.parse(JSON.stringify(stateChanges)).userId);
              _this.token = JSON.parse(JSON.stringify(stateChanges)).userId;
              console.log("this.token", _this.token);
            });
          });
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login() {
            this.router.navigate(['/login']);
          }
        }, {
          key: "cleaner",
          value: function cleaner() {
            this.router.navigate(['/cleanerregister']);
          }
        }, {
          key: "signUp",
          value: function signUp() {
            var _this2 = this;

            if (this.user.name === '') {
              return this.utilityService.openAlerts('Error', 'Name required.', 'ok');
            }

            if (this.user.email === '') {
              return this.utilityService.openAlerts('Error', 'Email required.', 'ok');
            }

            if (this.user.phone === '') {
              return this.utilityService.openAlerts('Error', 'Phone number required.', 'ok');
            }

            if (this.user.password.length < 5) {
              return this.utilityService.openAlerts('Error', 'Password should be minimum 5 character.', 'ok');
            }

            if (this.user.password !== this.cnfpassword) {
              return this.utilityService.openAlerts('Error', 'Password & confirm password must be same.', 'ok');
            }

            this.user.device = this.getPlatform();
            this.user.token = this.token;
            this.utilityService.loadingOpen('Registering...');
            this.restService.postData('user/register', this.user).subscribe(function (data) {
              // verify view
              // this.Verification = true;
              _this2.verificationCode = data.code; //

              _this2.user = data;

              _this2.utilityService.loadingClose(); // no verification required =========


              _this2.utilityService.openAlerts('Registration Successful', 'You may login now.', 'ok');

              _this2.router.navigateByUrl('/login');
            }, function (err) {
              _this2.utilityService.loadingClose();

              if (err.status === 403 && err.error.error.email) {
                return _this2.utilityService.openAlerts('Error', 'The email has already been taken.', 'ok');
              } else {
                return _this2.utilityService.openAlerts('Error', 'User registration failed, please try again later.', 'ok');
              }
            });
          }
        }, {
          key: "verify",
          value: function verify() {
            var _this3 = this;

            if (this.user.code === this.verificationCode) {
              // active the user
              this.utilityService.loadingOpen('Verifying...');
              this.restService.postData('user/verify', {
                email: this.user.email,
                code: this.verificationCode
              }).subscribe(function (data) {
                _this3.utilityService.loadingClose();

                _this3.utilityService.openAlerts('Done', 'You can now login.', 'ok');

                _this3.router.navigateByUrl('/login');
              }, function (err) {
                _this3.utilityService.loadingClose();

                return _this3.utilityService.openAlerts('Error', 'Something not right at verification.', 'ok');
              });
            } else {
              return this.utilityService.openAlerts('Error', 'Inavalid code entered.', 'ok');
            }
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
        }]);

        return SignupPage;
      }();

      _SignupPage.ctorParameters = function () {
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

      _SignupPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SignupPage);
      /***/
    },

    /***/
    69233:
    /*!***********************************************!*\
      !*** ./src/app/pages/signup/signup.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    71979:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <img class=\"logo\" src=\"{{utilityService.config.adminBaseUrl}}/uploads/images/{{localService.getSettings().image}}\" height=\"40\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n   <div class=\"signup-container\" *ngIf=\"!verification\">\n      <h4 class=\"heading-title ion-text-center ion-text-uppercase\">Register as User</h4>\n      <ion-input type=\"text\" placeholder=\"NAME\" [(ngModel)]=\"user.name\"></ion-input>\n      <ion-input clearInput type=\"email\" placeholder=\"EMAIL ADDRESS\" [(ngModel)]=\"user.email\" (ngModelChange)=\"user.email = $event.toLocaleLowerCase()\"></ion-input>\n      <ion-input clearInput type=\"tel\" placeholder=\"PHONE NUMBER\" [(ngModel)]=\"user.phone\"></ion-input>\n      <ion-input clearInput type=\"password\" placeholder=\"PASSWORD\" [(ngModel)]=\"user.password\"></ion-input>\n      <ion-input clearInput type=\"password\" placeholder=\"CONFIRM PASSWORD\" [(ngModel)]=\"cnfpassword\"></ion-input>\n      <ion-button expand=\"block\" class=\"base-button\" (click)=\"signUp()\">REGISTER</ion-button>\n\n      <div class=\"action-links\">\n          <p class=\"terms\" (click)=\"terms()\">BY REGISTERING YOU ARE AGREEING TO OUR <span class=\"tnc\">TERMS AND CONDITIONS</span></p>\n          <p class=\"signin\" (click)=\"login()\">ALREADY REGISTERED? <span>SIGN IN</span></p>\n      </div>\n\n      <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"cleaner()\">I'M A CLEANER</ion-button>\n\n  </div>\n  <div class=\"signup-container\" *ngIf=\"verification\">\n    <h5 text-justify>Please enter the verification code sent to your email.</h5>\n    <p text-justify>This may take a few minutes to arrive, please remember to check your junk mail if you do not receive anything.</p>\n    <ion-input class=\"input\" type=\"tel\" maxlength=\"6\" placeholder=\"ENTER CODE\" [(ngModel)]=\"code\"></ion-input>\n    <button ion-button full class=\"base-button\" (click)=\"verify()\">VERIFY</button>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_signup_signup_module_ts-es5.js.map