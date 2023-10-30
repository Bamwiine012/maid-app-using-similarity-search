(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_cleanerpayments_cleanerpayments_module_ts"], {
    /***/
    24976:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/cleanerpayments/cleanerpayments-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CleanerpaymentsPageRoutingModule": function CleanerpaymentsPageRoutingModule() {
          return (
            /* binding */
            _CleanerpaymentsPageRoutingModule
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


      var _cleanerpayments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cleanerpayments.page */
      50451);

      var routes = [{
        path: '',
        component: _cleanerpayments_page__WEBPACK_IMPORTED_MODULE_0__.CleanerpaymentsPage
      }];

      var _CleanerpaymentsPageRoutingModule = /*#__PURE__*/_createClass(function CleanerpaymentsPageRoutingModule() {
        _classCallCheck(this, CleanerpaymentsPageRoutingModule);
      });

      _CleanerpaymentsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CleanerpaymentsPageRoutingModule);
      /***/
    },

    /***/
    74733:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/cleanerpayments/cleanerpayments.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CleanerpaymentsPageModule": function CleanerpaymentsPageModule() {
          return (
            /* binding */
            _CleanerpaymentsPageModule
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


      var _cleanerpayments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cleanerpayments-routing.module */
      24976);
      /* harmony import */


      var _cleanerpayments_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cleanerpayments.page */
      50451);

      var _CleanerpaymentsPageModule = /*#__PURE__*/_createClass(function CleanerpaymentsPageModule() {
        _classCallCheck(this, CleanerpaymentsPageModule);
      });

      _CleanerpaymentsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _cleanerpayments_routing_module__WEBPACK_IMPORTED_MODULE_0__.CleanerpaymentsPageRoutingModule],
        declarations: [_cleanerpayments_page__WEBPACK_IMPORTED_MODULE_1__.CleanerpaymentsPage]
      })], _CleanerpaymentsPageModule);
      /***/
    },

    /***/
    50451:
    /*!***************************************************************!*\
      !*** ./src/app/pages/cleanerpayments/cleanerpayments.page.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CleanerpaymentsPage": function CleanerpaymentsPage() {
          return (
            /* binding */
            _CleanerpaymentsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_cleanerpayments_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cleanerpayments.page.html */
      66812);
      /* harmony import */


      var _cleanerpayments_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cleanerpayments.page.scss */
      40408);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/events.service */
      80106);
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/local.service */
      85298);
      /* harmony import */


      var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/rest.service */
      43006);
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/utility.service */
      67278);

      var _CleanerpaymentsPage = /*#__PURE__*/function () {
        function CleanerpaymentsPage(localService, restService, utilityService, eventsService, router, activatedRoute) {
          var _this = this;

          _classCallCheck(this, CleanerpaymentsPage);

          this.localService = localService;
          this.restService = restService;
          this.utilityService = utilityService;
          this.eventsService = eventsService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.months = [];
          this.loggedCleaner = this.localService.getCleaner();
          this.currency = this.localService.getSettings().currency_symbol; // set current year & month by default

          this.year = new Date().getFullYear();
          this.month = ('0' + (new Date().getMonth() + 1)).slice(-2); // console.log(this.month, this.year);
          //months

          this.months = [{
            id: '0',
            name: 'January'
          }, {
            id: '1',
            name: 'February'
          }, {
            id: '2',
            name: 'March'
          }, {
            id: '3',
            name: 'April'
          }, {
            id: '4',
            name: 'May'
          }, {
            id: '5',
            name: 'June'
          }, {
            id: '6',
            name: 'July'
          }, {
            id: '7',
            name: 'August'
          }, {
            id: '8',
            name: 'September'
          }, {
            id: '9',
            name: 'October'
          }, {
            id: '10',
            name: 'November'
          }, {
            id: '11',
            name: 'December'
          }];
          this.currentMonth = new Date().getMonth(); // select current month

          this.month = this.currentMonth; //console.log(this.month);

          this.utilityService.loadingOpen('Loading...');
          this.restService.postData('cleaner/' + this.loggedCleaner.id + '/transactions', {
            month: this.month
          }).subscribe(function (data) {
            _this.utilityService.loadingClose();

            console.log(data);
            _this.report = data;
          }, function (error) {});
        }

        _createClass(CleanerpaymentsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "refreshData",
          value: function refreshData() {
            var _this2 = this;

            this.currentMonth = this.month;
            this.utilityService.loadingOpen('Updating...');
            this.restService.postData('cleaner/' + this.loggedCleaner.id + '/transactions', {
              month: this.month
            }).subscribe(function (data) {
              _this2.utilityService.loadingClose();

              console.log(data);
              _this2.report = data;
            }, function (error) {});
          }
        }, {
          key: "openNotifications",
          value: function openNotifications() {
            this.router.navigate(['/cleanernotifications']);
          }
        }]);

        return CleanerpaymentsPage;
      }();

      _CleanerpaymentsPage.ctorParameters = function () {
        return [{
          type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService
        }, {
          type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__.RestService
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__.UtilityService
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }];
      };

      _CleanerpaymentsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-cleanerpayments',
        template: _raw_loader_cleanerpayments_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cleanerpayments_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CleanerpaymentsPage);
      /***/
    },

    /***/
    40408:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/cleanerpayments/cleanerpayments.page.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .order-details-section {\n  text-transform: uppercase;\n  color: var(--ion-color-dark);\n  margin: 10px 25px;\n  font-size: 0.8rem;\n}\nion-content .order-details-section h4 {\n  font-size: 1rem;\n  font-weight: 600;\n}\nion-content .order-details-section .heading {\n  font-weight: 500;\n  font-size: 0.8rem;\n}\nion-content .order-details-section .desc {\n  color: var(--ion-color-dark);\n}\nion-content .order-details-section ion-col {\n  padding: 3px;\n}\nion-content .order-details-section .total {\n  margin-top: 8px;\n  font-weight: 500;\n}\nion-content .pricing-section {\n  text-transform: uppercase;\n  color: var(--ion-color-dark);\n  margin: 10px 25px;\n}\nion-content .pricing-section ion-row {\n  margin: 10px auto;\n}\nion-content .pricing-section .pricing {\n  font-size: 0.8rem;\n  padding: 0;\n}\nion-content .select {\n  width: 100% !important;\n  font-size: 0.8rem !important;\n  margin-bottom: auto;\n}\nion-content ion-select, ion-content ion-input, ion-content ion-textarea {\n  --background: transparent !important;\n  background-color: transparent !important;\n  border: 1px solid var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsZWFuZXJwYXltZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUFKO0FBRUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBTjtBQUdJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUROO0FBR0k7RUFDRSw0QkFBQTtBQUROO0FBSUk7RUFDRSxZQUFBO0FBRk47QUFLSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUhOO0FBUUU7RUFFRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUFQSjtBQVNJO0VBQ0UsaUJBQUE7QUFQTjtBQVVJO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBUk47QUFhRTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQVhOO0FBY0U7RUFDQyxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7QUFaSCIsImZpbGUiOiJjbGVhbmVycGF5bWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAub3JkZXItZGV0YWlscy1zZWN0aW9ue1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBtYXJnaW46IDEwcHggMjVweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcblxuICAgIGg0e1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAuaGVhZGluZ3tcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG4gICAgLmRlc2N7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIH1cblxuICAgIGlvbi1jb2x7XG4gICAgICBwYWRkaW5nOiAzcHg7XG4gICAgfVxuXG4gICAgLnRvdGFse1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cblxuXG4gIC5wcmljaW5nLXNlY3Rpb257XG5cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgbWFyZ2luOiAxMHB4IDI1cHg7XG5cbiAgICBpb24tcm93e1xuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgfVxuXG4gICAgLnByaWNpbmd7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gIH1cblxuICAuc2VsZWN0e1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIH1cblxuICBpb24tc2VsZWN0LCBpb24taW5wdXQsIGlvbi10ZXh0YXJlYXtcbiAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    66812:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cleanerpayments/cleanerpayments.page.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Payments</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotifications()\">\n        <ion-icon class=\"notification-icon\" name=\"notifications-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-select class=\"select\" [(ngModel)]=\"month\"  (ionChange)=\"refreshData()\" placeholder=\"SELECT MONTH\">\n        <ion-select-option value=\"{{month.id}}\" *ngFor=\"let month of months\">{{month.name}}</ion-select-option>\n      </ion-select>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"order-details-section\">\n    <ion-col size=\"12\">\n        <h4 class=\"ion-text-center\">{{months[currentMonth].name}} Report</h4>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-row>\n          <ion-col class=\"heading\">Total</ion-col>\n          <ion-col class=\"desc ion-text-right\">{{currency}} {{report?.total | number : '1.2-2'}}</ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Full refunded</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{currency}} {{report?.full_refunds | number : '1.2-2'}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Partial refunded</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{currency}} {{report?.partial_refunds | number : '1.2-2'}}</ion-col>\n        </ion-row>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row class=\"pricing-section\">\n    <ion-col size=\"10\" offset=\"1\">\n      <div class=\"hr\"></div>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col size=\"8\" class=\"pricing\"><strong>Payable</strong></ion-col>\n            <ion-col size=\"4\" class=\"pricing ion-text-right\"><strong>{{currency}}{{report?.payout | number : '1.2-2'}}</strong></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"8\" class=\"pricing\">Paid</ion-col>\n          <ion-col size=\"4\" class=\"pricing ion-text-right\">{{currency}}{{report?.paid | number : '1.2-2'}}</ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cleanerpayments_cleanerpayments_module_ts-es5.js.map