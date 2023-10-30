(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_jobreceived_jobreceived_module_ts"], {
    /***/
    91215:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/jobreceived/jobreceived-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobreceivedPageRoutingModule": function JobreceivedPageRoutingModule() {
          return (
            /* binding */
            _JobreceivedPageRoutingModule
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


      var _jobreceived_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./jobreceived.page */
      30266);

      var routes = [{
        path: '',
        component: _jobreceived_page__WEBPACK_IMPORTED_MODULE_0__.JobreceivedPage
      }];

      var _JobreceivedPageRoutingModule = /*#__PURE__*/_createClass(function JobreceivedPageRoutingModule() {
        _classCallCheck(this, JobreceivedPageRoutingModule);
      });

      _JobreceivedPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _JobreceivedPageRoutingModule);
      /***/
    },

    /***/
    78497:
    /*!*********************************************************!*\
      !*** ./src/app/pages/jobreceived/jobreceived.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobreceivedPageModule": function JobreceivedPageModule() {
          return (
            /* binding */
            _JobreceivedPageModule
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


      var _jobreceived_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./jobreceived-routing.module */
      91215);
      /* harmony import */


      var _jobreceived_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./jobreceived.page */
      30266);

      var _JobreceivedPageModule = /*#__PURE__*/_createClass(function JobreceivedPageModule() {
        _classCallCheck(this, JobreceivedPageModule);
      });

      _JobreceivedPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _jobreceived_routing_module__WEBPACK_IMPORTED_MODULE_0__.JobreceivedPageRoutingModule],
        declarations: [_jobreceived_page__WEBPACK_IMPORTED_MODULE_1__.JobreceivedPage]
      })], _JobreceivedPageModule);
      /***/
    },

    /***/
    30266:
    /*!*******************************************************!*\
      !*** ./src/app/pages/jobreceived/jobreceived.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobreceivedPage": function JobreceivedPage() {
          return (
            /* binding */
            _JobreceivedPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_jobreceived_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./jobreceived.page.html */
      87904);
      /* harmony import */


      var _jobreceived_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./jobreceived.page.scss */
      63815);
      /* harmony import */


      var _alternatedatetime_alternatedatetime_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../alternatedatetime/alternatedatetime.page */
      88844);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/events.service */
      80106);
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/local.service */
      85298);
      /* harmony import */


      var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/rest.service */
      43006);
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/utility.service */
      67278);
      /* eslint-disable @typescript-eslint/naming-convention */


      var _JobreceivedPage = /*#__PURE__*/function () {
        function JobreceivedPage(localService, restService, utilityService, eventsService, router, activatedRoute, location, modalCtrl, routerOutlet) {
          var _this = this;

          _classCallCheck(this, JobreceivedPage);

          this.localService = localService;
          this.restService = restService;
          this.utilityService = utilityService;
          this.eventsService = eventsService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.location = location;
          this.modalCtrl = modalCtrl;
          this.routerOutlet = routerOutlet;
          this.id = null;
          this.job = {};
          this.settings = {};
          this.canGoBack = false;
          this.loggedCleaner = this.localService.getCleaner();
          this.settings = this.localService.getSettings();
          this.currency = this.settings.currency_symbol;
          this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.id) {
              _this.id = params.id;

              _this.utilityService.loadingOpen('Loading...'); // get job details


              _this.restService.getData('jobdetails/' + _this.id).subscribe(function (data) {
                _this.utilityService.loadingClose(); // get order data


                _this.job = data; // trim whitespace from address

                _this.job.address = _this.job.address.trim(); // calculate the payable price as per commission

                if (_this.settings.commission_type === 'percentage') {
                  // percentage
                  _this.job.total = _this.job.total - _this.job.total * _this.settings.commission / 100;
                } else {
                  // flat
                  _this.job.total = _this.job.total - _this.settings.commission;
                }
              }, function (err) {// error
              });
            } else {
              _this.location.back();
            }
          });
        }

        _createClass(JobreceivedPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.canGoBack = this.routerOutlet && this.routerOutlet.canGoBack();
          }
        }, {
          key: "reject",
          value: function reject() {
            var _this2 = this;

            this.utilityService.loadingOpen('Processing...');
            this.restService.postData('rejectjob', {
              job_id: this.id,
              cleaner_id: this.loggedCleaner.id
            }).subscribe(function (data) {
              _this2.utilityService.loadingClose();

              _this2.router.navigateByUrl('/cleanernotifications');
            }, function (err) {
              _this2.utilityService.loadingClose();

              _this2.router.navigateByUrl('/cleanernotifications');
            });
          }
        }, {
          key: "jobStatusChange",
          value: function jobStatusChange(id) {
            var _this3 = this;

            console.log(id);
            this.utilityService.loadingOpen('Processing...');
            this.restService.postData('acceptjob', {
              job_id: this.id,
              cleaner_id: this.loggedCleaner.id
            }).subscribe(function (data) {
              _this3.job.status = data.status;

              _this3.utilityService.loadingClose();

              _this3.router.navigateByUrl('/cleanerhome');
            }, function (err) {
              _this3.utilityService.loadingClose();

              _this3.utilityService.openAlerts('Error!', err.error.error, 'ok');
            });
          }
        }, {
          key: "getFrequency",
          value: function getFrequency(name) {
            return this.utilityService.frequencies[name];
          }
        }, {
          key: "alternate",
          value: function alternate() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _alternatedatetime_alternatedatetime_page__WEBPACK_IMPORTED_MODULE_2__.AlternatedatetimePage,
                        componentProps: {
                          job_id: this.job.id
                        },
                        showBackdrop: true,
                        backdropDismiss: true,
                        cssClass: 'alternate-datetime'
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return JobreceivedPage;
      }();

      _JobreceivedPage.ctorParameters = function () {
        return [{
          type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__.LocalService
        }, {
          type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_5__.RestService
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__.UtilityService
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRouterOutlet
        }];
      };

      _JobreceivedPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-jobreceived',
        template: _raw_loader_jobreceived_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_jobreceived_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _JobreceivedPage);
      /***/
    },

    /***/
    63815:
    /*!*********************************************************!*\
      !*** ./src/app/pages/jobreceived/jobreceived.page.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .heading {\n  font-size: 0.8rem;\n}\nion-content .image-section {\n  margin-top: 10px;\n  border-bottom: 1px solid var(--ion-color-gray);\n  padding-bottom: 15px;\n}\nion-content .profile-image {\n  height: 140px;\n  width: 140px;\n  border-radius: 50%;\n  background-color: black;\n}\nion-content .profile-name-section {\n  height: 100%;\n  position: relative;\n  text-transform: uppercase;\n  text-align: center;\n}\nion-content .profile-name-section .name-container {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\nion-content .profile-name-section h2 {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin-bottom: 5px;\n  letter-spacing: 1px;\n}\nion-content .order-details-section {\n  text-transform: uppercase;\n  color: var(--ion-color-dark);\n  margin: 10px 25px;\n  font-size: 0.8rem;\n}\nion-content .order-details-section h4 {\n  font-size: 1rem;\n  font-weight: 600;\n}\nion-content .order-details-section .heading {\n  font-weight: 500;\n}\nion-content .order-details-section .desc {\n  color: var(--ion-color-dark);\n}\nion-content .order-details-section ion-col {\n  padding: 3px;\n}\nion-content .order-details-section .total {\n  margin-top: 8px;\n  font-weight: 500;\n}\nion-content .pricing-section {\n  text-transform: uppercase;\n  color: var(--ion-color-dark);\n  margin: 10px 25px;\n}\nion-content .pricing-section ion-row {\n  margin: 10px auto;\n}\nion-content .pricing-section .pricing {\n  font-size: 0.8rem;\n  padding: 0;\n}\nion-content strong {\n  letter-spacing: 1px;\n}\nion-content .no-cleaner {\n  text-align: center;\n  margin: auto;\n}\nion-content .rating-container {\n  text-align: center;\n  margin: auto;\n}\nion-content .review-section {\n  text-transform: uppercase;\n  color: var(--ion-color-dark);\n  margin: 10px auto;\n  border-top: 0.8px solid var(--ion-color-gray);\n  padding-top: 15px;\n}\nion-content .review-section h4 {\n  font-size: 1.4rem;\n  font-weight: 600;\n}\nion-content .cancel {\n  --background: var(--ion-color-danger);\n}\nion-content .alternate-btn {\n  margin: auto;\n  --background: var(--ion-color-primary);\n}\nion-content .alternate-btn.activated {\n  --background: var(--ion-color-primary);\n}\nion-content .accept-button {\n  --background: #2aa43a;\n}\nion-content .accept-button.activated {\n  --background: #2aa43a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYnJlY2VpdmVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0FBQUo7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsOENBQUE7RUFDQSxvQkFBQTtBQUFKO0FBRUU7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFBTjtBQUdFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBRE47QUFHSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRE47QUFPRTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBTEo7QUFPSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUxOO0FBUUk7RUFDRSxnQkFBQTtBQU5OO0FBUUk7RUFDRSw0QkFBQTtBQU5OO0FBU0k7RUFDRSxZQUFBO0FBUE47QUFVSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVJOO0FBYUU7RUFFRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUFaSjtBQWNJO0VBQ0UsaUJBQUE7QUFaTjtBQWVJO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBYk47QUFvQkU7RUFDRSxtQkFBQTtBQWxCSjtBQXFCRTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQW5CTjtBQXVCRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQXJCSjtBQXdCRTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0EsaUJBQUE7QUF0Qko7QUF3Qkk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBdEJOO0FBMEJFO0VBQ0UscUNBQUE7QUF4Qko7QUEyQkU7RUFDRSxZQUFBO0VBQ0Esc0NBQUE7QUF6Qko7QUEwQkk7RUFDRSxzQ0FBQTtBQXhCTjtBQTRCRTtFQUNFLHFCQUFBO0FBMUJKO0FBMkJJO0VBQ0UscUJBQUE7QUF6Qk4iLCJmaWxlIjoiam9icmVjZWl2ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAuaGVhZGluZ3tcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICAuaW1hZ2Utc2VjdGlvbntcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JheSk7XG4gICAgcGFkZGluZy1ib3R0b206MTVweDtcbiAgfVxuICAucHJvZmlsZS1pbWFnZXtcbiAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICB3aWR0aDogMTQwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5wcm9maWxlLW5hbWUtc2VjdGlvbntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLm5hbWUtY29udGFpbmVye1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuICAgIGgye1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB9XG4gIH1cblxuXG5cbiAgLm9yZGVyLWRldGFpbHMtc2VjdGlvbntcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgbWFyZ2luOiAxMHB4IDI1cHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG5cbiAgICBoNHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmhlYWRpbmd7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAuZGVzY3tcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgfVxuXG4gICAgaW9uLWNvbHtcbiAgICAgIHBhZGRpbmc6IDNweDtcbiAgICB9XG5cbiAgICAudG90YWx7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxuXG5cbiAgLnByaWNpbmctc2VjdGlvbntcblxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBtYXJnaW46IDEwcHggMjVweDtcblxuICAgIGlvbi1yb3d7XG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICB9XG5cbiAgICAucHJpY2luZ3tcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cblxuXG4gIH1cblxuICBzdHJvbmd7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5uby1jbGVhbmVye1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cblxuICAucmF0aW5nLWNvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgLnJldmlldy1zZWN0aW9ue1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBib3JkZXItdG9wOiAwLjhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JheSk7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG5cbiAgICBoNHtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cblxuICAuY2FuY2Vse1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIH1cblxuICAuYWx0ZXJuYXRlLWJ0bntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgJi5hY3RpdmF0ZWR7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICAuYWNjZXB0LWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICMyYWE0M2E7XG4gICAgJi5hY3RpdmF0ZWR7XG4gICAgICAtLWJhY2tncm91bmQ6ICMyYWE0M2E7XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    87904:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobreceived/jobreceived.page.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button *ngIf=\"canGoBack\"></ion-back-button>\n      <ion-menu-toggle *ngIf=\"!canGoBack\"><ion-icon name=\"menu-outline\"></ion-icon></ion-menu-toggle>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Booking Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row class=\"image-section\" *ngIf=\"job?.user\">\n      <ion-col size=\"6\" *ngIf=\"job?.user?.image\">\n          <img class=\"profile-image\" src=\"{{utilityService.uploadPath}}profile/{{job?.user?.image}}\">\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"!job?.user?.image\">\n          <div class=\"thumb-image\">\n            <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n          </div>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <div class=\"profile-name-section\">\n          <div class=\"name-container\">\n              <h2>{{job?.user?.name}}</h2>\n          </div>\n        </div>\n      </ion-col>\n  </ion-row>\n  <ion-row class=\"order-details-section\">\n\n    <ion-col size=\"12\" *ngIf=\"job?.house_number\">\n        <ion-row>\n            <ion-col size=\"9\" class=\"heading\">Flat / House Number.</ion-col>\n            <ion-col size=\"3\" class=\"desc ion-text-right\">{{job?.house_number}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-row>\n          <ion-col size=\"3\" class=\"heading\">Address</ion-col>\n          <ion-col  size=\"9\" class=\"desc ion-text-right\">{{job?.address}}, {{job?.postcode}}</ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Date</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{job?.date | date: 'EEE, dd-MM-y'}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Time</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{job?.time}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Frequency</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{getFrequency(job?.frequency)}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Hours Required</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{job?.hours}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Bedrooms</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{job?.bedrooms}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Bathrooms</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{job?.bathrooms}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading total\">Total</ion-col>\n            <ion-col class=\"total ion-text-right\"><strong>{{currency}}{{job?.total}}</strong></ion-col>\n        </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n      <ion-col size=\"6\">\n          <ion-button expand=\"block\" class=\"base-button cleaner-btn accept-button\" (click)=\"jobStatusChange(job.id)\" *ngIf=\"job?.status === 'paid' || job?.status === 'cancelled-cleaner'\">ACCEPT</ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button expand=\"block\" class=\"base-button cleaner-btn cancel\" (click)=\"reject()\" *ngIf=\"job?.status === 'paid' || job?.status === 'cancelled-cleaner'\">REJECT</ion-button>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button expand=\"block\" class=\"base-button cleaner-btn alternate-btn\" (click)=\"alternate()\" *ngIf=\"job?.status === 'paid' || job?.status === 'cancelled-cleaner'\">AVAILABLE AT ALTERNATIVE DATE/TIME</ion-button>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"central\" *ngIf=\"job?.status === 'accepted' || job?.status === 'completed' || job?.status === 'cancelled-user' || job?.status === 'cancelled-admin'\">This job is no longer available.</div>\n      </ion-col>\n  </ion-row>\n\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_jobreceived_jobreceived_module_ts-es5.js.map