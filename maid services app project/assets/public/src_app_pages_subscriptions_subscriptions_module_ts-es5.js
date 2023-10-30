(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_subscriptions_subscriptions_module_ts"], {
    /***/
    42727:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/subscriptions/subscriptions-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubscriptionsPageRoutingModule": function SubscriptionsPageRoutingModule() {
          return (
            /* binding */
            _SubscriptionsPageRoutingModule
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


      var _subscriptions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./subscriptions.page */
      40489);

      var routes = [{
        path: '',
        component: _subscriptions_page__WEBPACK_IMPORTED_MODULE_0__.SubscriptionsPage
      }];

      var _SubscriptionsPageRoutingModule = /*#__PURE__*/_createClass(function SubscriptionsPageRoutingModule() {
        _classCallCheck(this, SubscriptionsPageRoutingModule);
      });

      _SubscriptionsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SubscriptionsPageRoutingModule);
      /***/
    },

    /***/
    76294:
    /*!*************************************************************!*\
      !*** ./src/app/pages/subscriptions/subscriptions.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubscriptionsPageModule": function SubscriptionsPageModule() {
          return (
            /* binding */
            _SubscriptionsPageModule
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


      var _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./subscriptions-routing.module */
      42727);
      /* harmony import */


      var _subscriptions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./subscriptions.page */
      40489);

      var _SubscriptionsPageModule = /*#__PURE__*/_createClass(function SubscriptionsPageModule() {
        _classCallCheck(this, SubscriptionsPageModule);
      });

      _SubscriptionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubscriptionsPageRoutingModule],
        declarations: [_subscriptions_page__WEBPACK_IMPORTED_MODULE_1__.SubscriptionsPage]
      })], _SubscriptionsPageModule);
      /***/
    },

    /***/
    40489:
    /*!***********************************************************!*\
      !*** ./src/app/pages/subscriptions/subscriptions.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubscriptionsPage": function SubscriptionsPage() {
          return (
            /* binding */
            _SubscriptionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_subscriptions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./subscriptions.page.html */
      57875);
      /* harmony import */


      var _subscriptions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./subscriptions.page.scss */
      63754);
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
      /* eslint-disable object-shorthand */


      var _SubscriptionsPage = /*#__PURE__*/function () {
        function SubscriptionsPage(localService, restService, utilityService, eventsService, router, activatedRoute) {
          var _this = this;

          _classCallCheck(this, SubscriptionsPage);

          this.localService = localService;
          this.restService = restService;
          this.utilityService = utilityService;
          this.eventsService = eventsService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.segment = 'active';
          this.activeSubscriptions = [];
          this.inactiveSubscriptions = [];
          this.holdSubscriptions = [];
          this.loggedUser = this.localService.getUser();
          this.currency = this.localService.getSettings().currency_symbol;
          this.utilityService.loadingOpen('Loading...');
          this.restService.getData('user/' + this.loggedUser.id + '/subscriptions').subscribe(function (data) {
            _this.activeSubscriptions = data.active;
            _this.inactiveSubscriptions = data.inactive;
            _this.holdSubscriptions = data.hold;

            _this.utilityService.loadingClose();
          }, function (err) {// handle error
          });
        }

        _createClass(SubscriptionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "bookingDetails",
          value: function bookingDetails(id) {
            this.router.navigate(['/orderdetails'], {
              queryParams: {
                id: id,
                mode: 'subscription'
              }
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this2 = this;

            this.restService.getData('user/' + this.loggedUser.id + '/subscriptions').subscribe(function (data) {
              _this2.activeSubscriptions = data.active;
              _this2.inactiveSubscriptions = data.inactive;
              _this2.holdSubscriptions = data.hold;
              event.target.complete();
            }, function (err) {
              // handle error
              event.target.complete();
            });
          }
        }]);

        return SubscriptionsPage;
      }();

      _SubscriptionsPage.ctorParameters = function () {
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

      _SubscriptionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-subscriptions',
        template: _raw_loader_subscriptions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_subscriptions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SubscriptionsPage);
      /***/
    },

    /***/
    63754:
    /*!*************************************************************!*\
      !*** ./src/app/pages/subscriptions/subscriptions.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-thumbnail {\n  --size: 75px;\n}\nion-content ion-thumbnail img {\n  border-radius: 50%;\n}\nion-content .details {\n  color: var(--ion-color-dark);\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 0.8rem;\n  width: 100%;\n}\nion-content .details .name {\n  font-size: 0.8rem;\n}\nion-content .details .price {\n  font-size: 0.8rem;\n}\nion-content .details .address {\n  white-space: normal !important;\n  font-size: 0.6rem;\n}\nion-content .date-time {\n  white-space: normal !important;\n  font-size: 0.6rem;\n}\nion-content ion-item:first-child {\n  border-top: none !important;\n}\nion-content .small-icon {\n  max-width: 10px;\n  vertical-align: middle;\n}\nion-content .central-page {\n  margin-top: 20px;\n}\nion-content .thumb {\n  height: 60px;\n  width: 60px;\n  background: var(--ion-color-light);\n  border-radius: 50%;\n  position: relative;\n  text-align: center;\n}\nion-content .thumb .title {\n  position: absolute;\n  top: 40%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n  color: var(--ion-color-base);\n  font-size: 0.4rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  line-height: 10px;\n}\nion-content .thumb .thumb-icon {\n  line-height: 60px;\n  margin-top: 10px;\n}\nion-content .no-cleaner {\n  font-size: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmlwdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsWUFBQTtBQUFOO0FBQ007RUFDRSxrQkFBQTtBQUNSO0FBR0k7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUROO0FBR007RUFDRSxpQkFBQTtBQURSO0FBSU07RUFDRSxpQkFBQTtBQUZSO0FBS007RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBSFI7QUFPSTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUFMTjtBQVFJO0VBQ0UsMkJBQUE7QUFOTjtBQVNJO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FBUE47QUFVSTtFQUNFLGdCQUFBO0FBUk47QUFXSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFUUjtBQVdRO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFUVjtBQVlRO0VBQ0UsaUJBQUE7RUFFQSxnQkFBQTtBQVhWO0FBZUU7RUFDRSwwQkFBQTtBQWJKIiwiZmlsZSI6InN1YnNjcmlwdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIGlvbi10aHVtYm5haWx7XG4gICAgICAtLXNpemU6IDc1cHg7XG4gICAgICBpbWd7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV0YWlsc3tcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5uYW1le1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cblxuICAgICAgLnByaWNle1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cblxuICAgICAgLmFkZHJlc3N7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRhdGUtdGltZXtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIH1cblxuICAgIGlvbi1pdGVtOmZpcnN0LWNoaWxke1xuICAgICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5zbWFsbC1pY29ue1xuICAgICAgbWF4LXdpZHRoOiAxMHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAuY2VudHJhbC1wYWdle1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAudGh1bWJ7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDQwJTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJhc2UpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC40cmVtO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRodW1iLWljb257XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgLy8gZm9udC1zaXplOiAzLjVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gIC5uby1jbGVhbmVye1xuICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    57875:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/subscriptions/subscriptions.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Recurring Bookings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"booking-buttons-container\">\n    <ion-segment [(ngModel)]=\"segment\">\n      <ion-segment-button value=\"active\">\n        Active\n      </ion-segment-button>\n      <ion-segment-button value=\"hold\">\n        Paused\n      </ion-segment-button>\n      <!-- <ion-segment-button value=\"inactive\">\n        Inactive\n      </ion-segment-button> -->\n    </ion-segment>\n  </div>\n\n  <ion-row>\n      <ion-col>\n          <div class=\"hr\"></div>\n      </ion-col>\n  </ion-row>\n\n  <div [ngSwitch]=\"segment\">\n    <ion-list *ngSwitchCase=\"'active'\">\n      <ion-item *ngFor=\"let booking of activeSubscriptions\" (click)=\"bookingDetails(booking.job.id)\">\n        <ion-thumbnail slot=\"start\">\n          <div class=\"thumb\" *ngIf=\"!booking?.cleaner?.image\">\n            <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n          </div>\n          <img *ngIf=\"booking?.cleaner?.image\" src=\"{{utilityService.uploadPath}}profile/{{booking?.cleaner?.image}}\">\n        </ion-thumbnail>\n        <div class=\"details\">\n              <ion-row>\n                <ion-col size=\"9\" class=\"name\" *ngIf=\"booking?.cleaner?.name\">{{booking?.cleaner?.name}}</ion-col>\n                <ion-col size=\"9\" class=\"name\" *ngIf=\"!booking?.cleaner?.name\">Assigning your cleaner</ion-col>\n                <ion-col size=\"3\" class=\"price ion-text-right\">{{currency}}{{booking?.job?.price}}</ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\" class=\"address\"><img class=\"small-icon\" src=\"/assets/images/Location.png\" /> {{booking?.job?.address}}</ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col size=\"8\"  class=\"date-time\"><img class=\"small-icon\" src=\"/assets/images/Date.png\" /> {{booking?.job?.date | date: 'dd-MM-y'}}</ion-col>\n                  <ion-col size=\"4\" class=\"ion-text-right date-time\"><img class=\"small-icon\" src=\"/assets/images/Time.png\" /> {{booking?.job?.time}}</ion-col>\n              </ion-row>\n        </div>\n      </ion-item>\n      <ion-item>\n        <div class=\"central-page\" *ngIf=\"activeSubscriptions.length === 0\">\n          <div class=\"notfound\">No results found</div>\n        </div>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'hold'\">\n      <ion-item *ngFor=\"let booking of holdSubscriptions\" (click)=\"bookingDetails(booking.job.id)\">\n        <ion-thumbnail slot=\"start\">\n          <div class=\"thumb\" *ngIf=\"!booking?.cleaner?.image\">\n            <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n          </div>\n          <img *ngIf=\"booking?.cleaner?.image\" src=\"{{utilityService.uploadPath}}profile/{{booking?.cleaner?.image}}\">\n        </ion-thumbnail>\n        <div class=\"details\">\n              <ion-row>\n                <ion-col size=\"9\" class=\"name\" *ngIf=\"booking?.cleaner?.name\">{{booking?.cleaner?.name}}</ion-col>\n                <ion-col size=\"9\" class=\"name\" *ngIf=\"!booking?.cleaner?.name\">Assigning your cleaner</ion-col>\n                <ion-col size=\"3\" class=\"price ion-text-right\">{{currency}}{{booking?.job?.price}}</ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\" class=\"address\"><img class=\"small-icon\" src=\"/assets/images/Location.png\" /> {{booking?.job?.address}}</ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col size=\"8\" class=\"date-time\"><img class=\"small-icon\" src=\"/assets/images/Date.png\" /> {{booking?.job?.date | date: 'dd-MM-y'}}</ion-col>\n                  <ion-col size=\"4\" class=\"ion-text-right date-time\"><img class=\"small-icon\" src=\"/assets/images/Time.png\" /> {{booking?.job?.time}}</ion-col>\n              </ion-row>\n        </div>\n      </ion-item>\n      <ion-item>\n        <div class=\"central-page\" *ngIf=\"holdSubscriptions.length === 0\">\n          <div class=\"notfound\">No results found</div>\n        </div>\n      </ion-item>\n\n    </ion-list>\n  </div>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_subscriptions_subscriptions_module_ts-es5.js.map