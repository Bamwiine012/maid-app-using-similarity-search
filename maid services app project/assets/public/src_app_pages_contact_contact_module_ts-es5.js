(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_contact_contact_module_ts"], {
    /***/
    92388:
    /*!*********************************************************!*\
      !*** ./src/app/pages/contact/contact-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactPageRoutingModule": function ContactPageRoutingModule() {
          return (
            /* binding */
            _ContactPageRoutingModule
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


      var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contact.page */
      13256);

      var routes = [{
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_0__.ContactPage
      }];

      var _ContactPageRoutingModule = /*#__PURE__*/_createClass(function ContactPageRoutingModule() {
        _classCallCheck(this, ContactPageRoutingModule);
      });

      _ContactPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ContactPageRoutingModule);
      /***/
    },

    /***/
    17213:
    /*!*************************************************!*\
      !*** ./src/app/pages/contact/contact.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactPageModule": function ContactPageModule() {
          return (
            /* binding */
            _ContactPageModule
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


      var _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contact-routing.module */
      92388);
      /* harmony import */


      var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact.page */
      13256);

      var _ContactPageModule = /*#__PURE__*/_createClass(function ContactPageModule() {
        _classCallCheck(this, ContactPageModule);
      });

      _ContactPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactPageRoutingModule],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_1__.ContactPage]
      })], _ContactPageModule);
      /***/
    },

    /***/
    13256:
    /*!***********************************************!*\
      !*** ./src/app/pages/contact/contact.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactPage": function ContactPage() {
          return (
            /* binding */
            _ContactPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./contact.page.html */
      30478);
      /* harmony import */


      var _contact_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact.page.scss */
      82962);
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

      var _ContactPage = /*#__PURE__*/function () {
        function ContactPage(localService, restService, utilityService, eventsService, router) {
          _classCallCheck(this, ContactPage);

          this.localService = localService;
          this.restService = restService;
          this.utilityService = utilityService;
          this.eventsService = eventsService;
          this.router = router;
          this.contact = {};
          this.settings = {};
          this.hint = false;
          this.userType = 'guest'; // check if user is user or cleaner

          this.loggedCleaner = this.localService.getCleaner();
          this.loggedUser = this.localService.getUser();
          this.settings = this.localService.getSettings();

          if (this.loggedCleaner) {
            this.userType = 'cleaner';
            this.contact.subject = 'Support for Cleaner# ' + this.loggedCleaner.id;
            this.contact.cleaner_id = this.loggedCleaner.id;
            this.contact.name = this.loggedCleaner.name;
            this.contact.email = this.loggedCleaner.email;
          } else if (this.loggedUser) {
            this.userType = 'user';
            this.contact.user_id = this.loggedUser.id;
            this.contact.name = this.loggedUser.name;
            this.contact.email = this.loggedUser.email;
          } else {
            // for guest
            this.contact.subject = 'Support Request';
          }
        }

        _createClass(ContactPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "send",
          value: function send() {
            var _this = this;

            if (!this.contact.name || this.contact.name === '') {
              return this.utilityService.openAlerts('Oops', 'Name required.', 'ok');
            }

            if (!this.contact.email || this.contact.email === '') {
              return this.utilityService.openAlerts('Oops', 'Valid email required.', 'ok');
            }

            if (!this.contact.subject || this.contact.subject === '') {
              return this.utilityService.openAlerts('Oops', 'Select Issue.', 'ok');
            }

            if (!this.contact.text || this.contact.text === '') {
              return this.utilityService.openAlerts('Oops', 'Message required.', 'ok');
            }

            this.utilityService.loadingOpen('Sending...');
            this.restService.postData('contact', this.contact).subscribe(function (data) {
              _this.utilityService.loadingClose();

              _this.utilityService.openAlerts('Done!', 'Enquiry has been sent.', 'ok');
            }, function (err) {
              _this.utilityService.loadingClose();

              _this.utilityService.openAlerts('Error!', 'Error sending the enquiry.', 'ok');
            });
          }
        }, {
          key: "checkSelected",
          value: function checkSelected() {
            console.log(this.contact); // remove the label as soon as selected

            var change1 = document.getElementsByClassName('select-label');
            change1[0].style.display = 'none';
            var change2 = document.getElementsByClassName('action-select');
            change2[0].style.width = '100%';

            if (this.contact.subject === 'Cancel my cleaning plan') {
              // show hint
              this.hint = true;
            } else {
              this.hint = false;
            }
          }
        }, {
          key: "openNotifications",
          value: function openNotifications() {
            this.router.navigate(['/cleanernotifications']);
          }
        }]);

        return ContactPage;
      }();

      _ContactPage.ctorParameters = function () {
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

      _ContactPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-contact',
        template: _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contact_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ContactPage);
      /***/
    },

    /***/
    82962:
    /*!*************************************************!*\
      !*** ./src/app/pages/contact/contact.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .contact-container {\n  background: var(--ion-color-light);\n  font-size: 10px;\n  margin: 20px 25px 0 25px;\n  padding: 15px;\n  text-transform: uppercase;\n  line-height: 2rem;\n  box-shadow: -3px 3px 4px -2px rgba(221, 221, 221, 0.78);\n}\nion-content h4 {\n  font-size: 1rem;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 25px;\n  letter-spacing: 1px;\n}\nion-content .item {\n  margin: 10px auto;\n  letter-spacing: 0.1rem;\n}\nion-content ion-icon {\n  font-size: 3rem !important;\n  vertical-align: middle;\n}\nion-content .office {\n  text-align: center;\n  margin: auto;\n}\nion-content .office ion-icon {\n  font-size: 4rem !important;\n}\nion-content .contact-icon {\n  height: 20px;\n  vertical-align: middle;\n  margin-right: 6px;\n}\nion-content .office-icon {\n  height: 50px;\n}\nion-content .hint {\n  margin: 10px auto;\n  font-size: 1.2rem;\n  line-height: 1.8rem;\n  padding-left: 2px;\n  color: var(--ion-color-danger);\n}\nion-content .action-select {\n  max-width: 100% !important;\n  font-size: 0.7rem !important;\n}\nion-content .select-container .select-icon-inner {\n  right: 15px;\n}\nion-content .select-container ion-item.item-input-has-value {\n  padding-left: 0;\n}\nion-content ion-textarea {\n  min-height: 150px !important;\n}\nion-content ion-select, ion-content ion-input, ion-content ion-textarea {\n  --background: transparent !important;\n  background-color: transparent !important;\n  border: 1px solid var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBRUEsd0JBQUE7RUFDQSxhQUFBO0VBRUEseUJBQUE7RUFDQSxpQkFBQTtFQU1BLHVEQUFBO0FBTFI7QUFTSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVBOO0FBV0k7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0FBVE47QUFXSTtFQUNFLDBCQUFBO0VBQ0Esc0JBQUE7QUFUTjtBQWFJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBWE47QUFZTTtFQUNFLDBCQUFBO0FBVlI7QUFjSTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBWk47QUFlSTtFQUNFLFlBQUE7QUFiTjtBQWdCSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFkTjtBQWtCSTtFQUNFLDBCQUFBO0VBQ0EsNEJBQUE7QUFoQk47QUFvQk07RUFDRSxXQUFBO0FBbEJSO0FBcUJJO0VBQ0UsZUFBQTtBQW5CTjtBQXNCSTtFQUNFLDRCQUFBO0FBcEJOO0FBdUJFO0VBQ0Msb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0FBckJIIiwiZmlsZSI6ImNvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC5jb250YWN0LWNvbnRhaW5lcntcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgICAgIG1hcmdpbjogMjBweCAyNXB4IDAgMjVweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcblxuXG5cbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtM3B4IDNweCA0cHggLTJweCByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuNzgpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IC0zcHggM3B4IDRweCAtMnB4IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC43OCk7XG4gICAgICAgIGJveC1zaGFkb3c6IC0zcHggM3B4IDRweCAtMnB4IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC43OCk7XG5cbiAgICB9XG5cbiAgICBoNHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB9XG5cblxuICAgIC5pdGVte1xuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICAgIH1cbiAgICBpb24taWNvbntcbiAgICAgIGZvbnQtc2l6ZTogM3JlbSAhaW1wb3J0YW50O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cblxuICAgIC5vZmZpY2V7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiA0cmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRhY3QtaWNvbntcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICB9XG5cbiAgICAub2ZmaWNlLWljb257XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuXG4gICAgLmhpbnR7XG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcbiAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIH1cblxuXG4gICAgLmFjdGlvbi1zZWxlY3R7XG4gICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnNlbGVjdC1jb250YWluZXJ7XG4gICAgICAuc2VsZWN0LWljb24taW5uZXJ7XG4gICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuc2VsZWN0LWNvbnRhaW5lciBpb24taXRlbS5pdGVtLWlucHV0LWhhcy12YWx1ZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgaW9uLXRleHRhcmVhe1xuICAgICAgbWluLWhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgaW9uLXNlbGVjdCwgaW9uLWlucHV0LCBpb24tdGV4dGFyZWF7XG4gICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgfVxuXG59XG4iXX0= */";
      /***/
    },

    /***/
    30478:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Support</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"userType === 'cleaner'\">\n      <ion-button (click)=\"openNotifications()\">\n        <ion-icon class=\"notification-icon\" name=\"notifications-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"contact-form\">\n      <div class=\"login-container\">\n          <h4>SUBMIT YOUR ENQUIRY</h4>\n          <ion-input class=\"input left\" type=\"text\" placeholder=\"ENTER YOUR NAME\" [(ngModel)]=\"contact.name\"></ion-input>\n          <ion-input class=\"input left\" type=\"email\" placeholder=\"ENTER YOUR EMAIL\"[(ngModel)]=\"contact.email\"></ion-input>\n          <ion-select *ngIf=\"userType === 'user'\" class=\"action-select\" [(ngModel)]=\"contact.subject\" interface=\"action-sheet\" (ionChange)=\"checkSelected()\" placeholder=\"SELECT ISSUE\">\n            <ion-select-option value=\"Adjust my hours\">Adjust Hours</ion-select-option>\n            <ion-select-option value=\"Adjust my cleaning plan frequency\">Adjust Frequency</ion-select-option>\n            <ion-select-option value=\"Cancel my cleaning plan\">Cancel Plan</ion-select-option>\n            <ion-select-option value=\"Incorrect charge\">Incorrect Charge</ion-select-option>\n            <ion-select-option value=\"My cleaner left early\">Cleaner Left Early</ion-select-option>\n            <ion-select-option value=\"My cleaner didn not turn up\">Cleaner Didn't Turn Up</ion-select-option>\n            <ion-select-option value=\"Unsatisfactory service\">Unsatisfactory Service</ion-select-option>\n            <ion-select-option value=\"Other\">Other</ion-select-option>\n          </ion-select>\n          <ion-textarea class=\"textarea left\" placeholder=\"ENTER YOUR MESSAGE\"[(ngModel)]=\"contact.text\"></ion-textarea>\n          <ion-button expand=\"block\" class=\"base-button\" (click)=\"send()\">SEND</ion-button>\n      </div>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_contact_contact_module_ts-es5.js.map