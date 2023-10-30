(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_forgot_forgot_module_ts"], {
    /***/
    36493:
    /*!*******************************************************!*\
      !*** ./src/app/pages/forgot/forgot-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPageRoutingModule": function ForgotPageRoutingModule() {
          return (
            /* binding */
            _ForgotPageRoutingModule
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


      var _forgot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forgot.page */
      85792);

      var routes = [{
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPage
      }];

      var _ForgotPageRoutingModule = /*#__PURE__*/_createClass(function ForgotPageRoutingModule() {
        _classCallCheck(this, ForgotPageRoutingModule);
      });

      _ForgotPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ForgotPageRoutingModule);
      /***/
    },

    /***/
    93647:
    /*!***********************************************!*\
      !*** ./src/app/pages/forgot/forgot.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPageModule": function ForgotPageModule() {
          return (
            /* binding */
            _ForgotPageModule
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


      var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forgot-routing.module */
      36493);
      /* harmony import */


      var _forgot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forgot.page */
      85792);

      var _ForgotPageModule = /*#__PURE__*/_createClass(function ForgotPageModule() {
        _classCallCheck(this, ForgotPageModule);
      });

      _ForgotPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _forgot_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPageRoutingModule],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPage]
      })], _ForgotPageModule);
      /***/
    },

    /***/
    85792:
    /*!*********************************************!*\
      !*** ./src/app/pages/forgot/forgot.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPage": function ForgotPage() {
          return (
            /* binding */
            _ForgotPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_forgot_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./forgot.page.html */
      19381);
      /* harmony import */


      var _forgot_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forgot.page.scss */
      77380);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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

      var _ForgotPage = /*#__PURE__*/function () {
        function ForgotPage(localService, restService, utilityService, eventsService, router) {
          _classCallCheck(this, ForgotPage);

          this.localService = localService;
          this.restService = restService;
          this.utilityService = utilityService;
          this.eventsService = eventsService;
          this.router = router;
          this.email = '';
          this.user = {};
          this.resetScreen = false;
        }

        _createClass(ForgotPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "reset",
          value: function reset() {
            var _this = this;

            if (this.email.length < 5) {
              return this.utilityService.openAlerts('Sorry!', 'Please enter a valid email address.', 'ok');
            }

            this.restService.postData('user/forgot', {
              email: this.email
            }).subscribe(function (data) {
              console.log(data);
              _this.user = data;
              _this.resetScreen = true;
            }, function (err) {
              return _this.utilityService.openAlerts('Error', 'User not found.', 'ok');
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this2 = this;

            if (this.code === this.user.code) {
              if (this.password.length < 5) {
                return this.utilityService.openAlerts('Error!', 'Minimum 5 character required.', 'ok');
              }

              this.restService.postData('user/reset', {
                id: this.user.id,
                password: this.password,
                code: this.code
              }).subscribe(function (data) {
                console.log(data);

                _this2.router.navigateByUrl('/login');
              }, function (err) {
                return _this2.utilityService.openAlerts('Error', 'Something not right at verification.', 'ok');
              });
            } else {
              return this.utilityService.openAlerts('Error', 'Invalid code provided.', 'ok');
            }
          }
        }]);

        return ForgotPage;
      }();

      _ForgotPage.ctorParameters = function () {
        return [{
          type: _services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService
        }, {
          type: _services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__.EventsService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }];
      };

      _ForgotPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-forgot',
        template: _raw_loader_forgot_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_forgot_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ForgotPage);
      /***/
    },

    /***/
    77380:
    /*!***********************************************!*\
      !*** ./src/app/pages/forgot/forgot.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".heading, .sub-heading {\n  color: #9b9b9b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiZm9yZ290LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nLCAuc3ViLWhlYWRpbmd7XG4gIGNvbG9yOiAjOWI5YjliO1xufVxuIl19 */";
      /***/
    },

    /***/
    19381:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <img class=\"logo\" src=\"{{utilityService.config.adminBaseUrl}}/uploads/images/{{localService.getSettings().image}}\" height=\"40\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"forgot-container\" *ngIf=\"!resetScreen\">\n      <h4 class=\"heading ion-text-center ion-text-uppercase\">Forgot Password?</h4>\n      <p class=\"sub-heading ion-text-center ion-text-uppercase\">Enter your email to reset your password</p>\n      <ion-input clearInput type=\"email\" placeholder=\"EMAIL ADDRESS\" [(ngModel)]=\"email\"></ion-input>\n      <ion-button expand=\"block\" class=\"base-button\" (click)=\"reset()\">RESET PASSWORD</ion-button>\n\n  </div>\n  <div class=\"forgot-container\" *ngIf=\"resetScreen\">\n      <p class=\"sub-heading ion-text-center ion-text-uppercase\">A code has been sent to your email. Check it and enter the code to reset the password</p>\n      <ion-input clearInput type=\"tel\" maxlength=\"6\" placeholder=\"ENTER CODE\" [(ngModel)]=\"code\"></ion-input>\n      <ion-input clearInput type=\"password\" placeholder=\"NEW PASSWORD\" [(ngModel)]=\"password\"></ion-input>\n      <ion-button expand=\"block\" class=\"base-button\" (click)=\"update()\">UPDATE NEW PASSWORD</ion-button>\n\n  </div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_forgot_forgot_module_ts-es5.js.map