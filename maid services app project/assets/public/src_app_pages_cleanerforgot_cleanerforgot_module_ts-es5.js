(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_cleanerforgot_cleanerforgot_module_ts"], {
    /***/
    92960:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/cleanerforgot/cleanerforgot-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CleanerforgotPageRoutingModule": function CleanerforgotPageRoutingModule() {
          return (
            /* binding */
            _CleanerforgotPageRoutingModule
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


      var _cleanerforgot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cleanerforgot.page */
      78441);

      var routes = [{
        path: '',
        component: _cleanerforgot_page__WEBPACK_IMPORTED_MODULE_0__.CleanerforgotPage
      }];

      var _CleanerforgotPageRoutingModule = /*#__PURE__*/_createClass(function CleanerforgotPageRoutingModule() {
        _classCallCheck(this, CleanerforgotPageRoutingModule);
      });

      _CleanerforgotPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CleanerforgotPageRoutingModule);
      /***/
    },

    /***/
    17541:
    /*!*************************************************************!*\
      !*** ./src/app/pages/cleanerforgot/cleanerforgot.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CleanerforgotPageModule": function CleanerforgotPageModule() {
          return (
            /* binding */
            _CleanerforgotPageModule
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


      var _cleanerforgot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cleanerforgot-routing.module */
      92960);
      /* harmony import */


      var _cleanerforgot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cleanerforgot.page */
      78441);

      var _CleanerforgotPageModule = /*#__PURE__*/_createClass(function CleanerforgotPageModule() {
        _classCallCheck(this, CleanerforgotPageModule);
      });

      _CleanerforgotPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _cleanerforgot_routing_module__WEBPACK_IMPORTED_MODULE_0__.CleanerforgotPageRoutingModule],
        declarations: [_cleanerforgot_page__WEBPACK_IMPORTED_MODULE_1__.CleanerforgotPage]
      })], _CleanerforgotPageModule);
      /***/
    },

    /***/
    78441:
    /*!***********************************************************!*\
      !*** ./src/app/pages/cleanerforgot/cleanerforgot.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CleanerforgotPage": function CleanerforgotPage() {
          return (
            /* binding */
            _CleanerforgotPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_cleanerforgot_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cleanerforgot.page.html */
      9873);
      /* harmony import */


      var _cleanerforgot_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cleanerforgot.page.scss */
      87238);
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

      var _CleanerforgotPage = /*#__PURE__*/function () {
        function CleanerforgotPage(localService, restService, utilityService, eventsService, router) {
          _classCallCheck(this, CleanerforgotPage);

          this.localService = localService;
          this.restService = restService;
          this.utilityService = utilityService;
          this.eventsService = eventsService;
          this.router = router;
          this.email = '';
          this.cleaner = {};
          this.resetScreen = false;
        }

        _createClass(CleanerforgotPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "reset",
          value: function reset() {
            var _this = this;

            if (this.email.length < 5) {
              return this.utilityService.openAlerts('Sorry!', 'Please enter a valid email address.', 'ok');
            }

            this.restService.postData('cleaner/forgot', {
              email: this.email
            }).subscribe(function (data) {
              console.log(data);
              _this.cleaner = data;
              _this.resetScreen = true;
            }, function (err) {
              return _this.utilityService.openAlerts('Error', 'User not found.', 'ok');
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this2 = this;

            if (this.code === this.cleaner.code) {
              if (this.password.length < 5) {
                return this.utilityService.openAlerts('Error!', 'Minimum 5 character required.', 'ok');
              }

              this.restService.postData('cleaner/reset', {
                id: this.cleaner.id,
                password: this.password,
                code: this.code
              }).subscribe(function (data) {
                console.log(data);

                _this2.router.navigateByUrl('/cleanerlogin');
              }, function (err) {
                return _this2.utilityService.openAlerts('Error', 'Something not right at verification.', 'ok');
              });
            } else {
              return this.utilityService.openAlerts('Error', 'Invalid code provided.', 'ok');
            }
          }
        }]);

        return CleanerforgotPage;
      }();

      _CleanerforgotPage.ctorParameters = function () {
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

      _CleanerforgotPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-cleanerforgot',
        template: _raw_loader_cleanerforgot_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cleanerforgot_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CleanerforgotPage);
      /***/
    },

    /***/
    87238:
    /*!*************************************************************!*\
      !*** ./src/app/pages/cleanerforgot/cleanerforgot.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".heading, .sub-heading {\n  color: #9b9b9b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsZWFuZXJmb3Jnb3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6ImNsZWFuZXJmb3Jnb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmcsIC5zdWItaGVhZGluZ3tcbiAgY29sb3I6ICM5YjliOWI7XG59XG4iXX0= */";
      /***/
    },

    /***/
    9873:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cleanerforgot/cleanerforgot.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <img class=\"logo\" src=\"{{utilityService.config.adminBaseUrl}}/uploads/images/{{localService.getSettings().image}}\" height=\"40\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"forgot-container\" *ngIf=\"!resetScreen\">\n      <h4 class=\"heading ion-text-center ion-text-uppercase\">Forgot Password?</h4>\n      <p class=\"sub-heading ion-text-center ion-text-uppercase\">Enter your email to reset your password</p>\n      <ion-input clearInput type=\"email\" placeholder=\"EMAIL ADDRESS\" [(ngModel)]=\"email\"></ion-input>\n      <ion-button expand=\"block\" class=\"base-button\" (click)=\"reset()\">RESET PASSWORD</ion-button>\n\n  </div>\n  <div class=\"forgot-container\" *ngIf=\"resetScreen\">\n      <p class=\"sub-heading ion-text-center ion-text-uppercase\">A code has been sent to your email. Check it and enter the code to reset the password</p>\n      <ion-input clearInput type=\"tel\" maxlength=\"6\" placeholder=\"ENTER CODE\" [(ngModel)]=\"code\"></ion-input>\n      <ion-input clearInput type=\"password\" placeholder=\"NEW PASSWORD\" [(ngModel)]=\"password\"></ion-input>\n      <ion-button expand=\"block\" class=\"base-button\" (click)=\"update()\">UPDATE NEW PASSWORD</ion-button>\n\n  </div>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cleanerforgot_cleanerforgot_module_ts-es5.js.map