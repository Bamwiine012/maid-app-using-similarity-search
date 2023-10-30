(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_orderreview_orderreview_module_ts"], {
    /***/
    12805:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/orderreview/orderreview-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderreviewPageRoutingModule": function OrderreviewPageRoutingModule() {
          return (
            /* binding */
            _OrderreviewPageRoutingModule
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


      var _orderreview_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./orderreview.page */
      14473);

      var routes = [{
        path: '',
        component: _orderreview_page__WEBPACK_IMPORTED_MODULE_0__.OrderreviewPage
      }];

      var _OrderreviewPageRoutingModule = /*#__PURE__*/_createClass(function OrderreviewPageRoutingModule() {
        _classCallCheck(this, OrderreviewPageRoutingModule);
      });

      _OrderreviewPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _OrderreviewPageRoutingModule);
      /***/
    },

    /***/
    40751:
    /*!*********************************************************!*\
      !*** ./src/app/pages/orderreview/orderreview.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderreviewPageModule": function OrderreviewPageModule() {
          return (
            /* binding */
            _OrderreviewPageModule
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


      var _orderreview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./orderreview-routing.module */
      12805);
      /* harmony import */


      var _orderreview_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./orderreview.page */
      14473);

      var _OrderreviewPageModule = /*#__PURE__*/_createClass(function OrderreviewPageModule() {
        _classCallCheck(this, OrderreviewPageModule);
      });

      _OrderreviewPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _orderreview_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderreviewPageRoutingModule],
        declarations: [_orderreview_page__WEBPACK_IMPORTED_MODULE_1__.OrderreviewPage]
      })], _OrderreviewPageModule);
      /***/
    },

    /***/
    14473:
    /*!*******************************************************!*\
      !*** ./src/app/pages/orderreview/orderreview.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderreviewPage": function OrderreviewPage() {
          return (
            /* binding */
            _OrderreviewPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_orderreview_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./orderreview.page.html */
      27657);
      /* harmony import */


      var _orderreview_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./orderreview.page.scss */
      121);
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


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      53760);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* eslint-disable @typescript-eslint/naming-convention */


      var _OrderreviewPage = /*#__PURE__*/function () {
        function OrderreviewPage(localService, restService, utilityService, eventsService, router, activatedRoute, iab, location, alertCtrl) {
          var _this = this;

          _classCallCheck(this, OrderreviewPage);

          this.localService = localService;
          this.restService = restService;
          this.utilityService = utilityService;
          this.eventsService = eventsService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.iab = iab;
          this.location = location;
          this.alertCtrl = alertCtrl;
          this.bookingdetails = {};
          this.total = 0;
          this.price = 0;
          this.discount = 0;
          this.couponApplied = false;
          this.settings = {}; // payment disabled flag

          this.paymentButtonDisabled = false; // original

          this.originalTotal = 0;
          this.originalPrice = 0; // tax settings

          this.taxSettings = []; // extra services

          this.extraServices = [];
          this.extraTotal = 0;
          this.taxTotal = 0;
          this.loggedUser = this.localService.getUser();
          this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.data) {
              _this.bookingdetails = JSON.parse(params.data);
              console.log('received in orderreview page: ', _this.bookingdetails); // trim whitespace from address

              _this.bookingdetails.address = _this.bookingdetails.address.trim();
              _this.settings = _this.localService.getSettings();
              _this.currency = _this.settings.currency_symbol;

              _this.utilityService.loadingOpen('Getting details...');

              _this.restService.getData('getprice/' + _this.bookingdetails.hours).subscribe(function (data) {
                _this.total = data.price;
                _this.price = _this.total; // store the original in safe place in case coupon

                _this.originalTotal = _this.originalPrice = data.price; // retrive tax informations

                _this.taxSettings = [];
                _this.taxTotal = 0;

                _this.restService.getData('gettaxsettings').subscribe(function (response) {
                  response.forEach(function (item) {
                    if (item.type === 'percentage') {
                      item.price = (parseFloat(_this.total) * item.value / 100).toFixed(2);
                    } else {
                      // flat
                      item.price = item.value;
                    }

                    _this.taxTotal += parseFloat(item.price);

                    _this.taxSettings.push(item);
                  }); // add tax applied data in booking data

                  if (_this.taxSettings.length > 0) {
                    _this.bookingdetails.tax_applied = JSON.stringify(_this.taxSettings);
                  } // extra services added


                  _this.extraTotal = 0;

                  if (_this.bookingdetails.extra_services) {
                    var extra_services = JSON.parse(_this.bookingdetails.extra_services);
                    extra_services.forEach(function (element) {
                      _this.extraTotal += parseFloat(element.price);
                    });
                  } // update price including tax & extra services


                  _this.price = parseFloat(_this.total) + parseFloat(_this.taxTotal) + parseFloat(_this.extraTotal);
                  _this.price = parseFloat(_this.price).toFixed(2);
                  _this.originalPrice = _this.price;

                  _this.utilityService.loadingClose();
                }, function (error) {
                  _this.utilityService.loadingClose(); // back the user


                  _this.location.back();
                });
              }, function (err) {
                _this.utilityService.loadingClose(); // back the user


                _this.location.back();
              });
            }
          });
        }

        _createClass(OrderreviewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openCoupon",
          value: function openCoupon() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var prompt;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'Apply coupon code',
                        message: 'Discount will be applied on total value',
                        inputs: [{
                          name: 'coupon',
                          placeholder: 'Enter coupon'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          handler: function handler(data) {
                            console.log('Cancel clicked');
                          }
                        }, {
                          text: 'Apply',
                          handler: function handler(data) {
                            if (!data || !data.coupon || data.coupon === '') {
                              return;
                            } // reset prices


                            // reset prices
                            _this2.total = _this2.originalTotal;
                            _this2.price = _this2.originalPrice;
                            _this2.couponApplied = false;

                            _this2.restService.postData('applycoupon', {
                              coupon: data.coupon
                            }).subscribe(function (response) {
                              if (response.type === 'percentage') {
                                // percentage
                                _this2.discount = (_this2.price * response.value / 100).toFixed(2);
                                _this2.price = (_this2.price - _this2.discount).toFixed(2);
                                _this2.couponApplied = true;
                              } else {
                                // flat
                                _this2.discount = response.value;

                                if (parseFloat(_this2.price) > parseFloat(response.value)) {
                                  _this2.price = (_this2.price - response.value).toFixed(2);
                                  _this2.couponApplied = true;
                                } else {
                                  // coupon value is greater than total so make price 0
                                  _this2.price = 0;
                                  _this2.couponApplied = true;
                                }
                              }

                              _this2.bookingdetails.coupon_id = response.id;
                            }, function (err) {
                              _this2.utilityService.openAlerts('Oops!', err.error.error, 'ok');
                            });
                          }
                        }]
                      });

                    case 2:
                      prompt = _context.sent;
                      prompt.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "pay",
          value: function pay() {
            var _this3 = this;

            // disable payment button
            this.paymentButtonDisabled = true; // create pending booking then forward for payment

            var postData = this.bookingdetails; // exclude tax from original total : to make cleaners payble amount

            postData.total = (parseFloat(this.originalTotal) + parseFloat(this.extraTotal)).toFixed(2);
            postData.total = parseFloat(postData.total); // payble price for user

            postData.price = parseFloat(this.price);
            postData.user_id = this.loggedUser.id;
            this.restService.postData('createjob', postData).subscribe(function (data) {
              if (_this3.price > 0) {
                // try to charge if existing stripe customer
                _this3.restService.postData('chargeexistingcustomer/' + _this3.loggedUser.id + '/' + data.id + '/' + data.price, {}).subscribe(function (success) {
                  // charged successfully using existing stripe_customer_id
                  // call api for job status change
                  _this3.utilityService.loadingOpen('Confirming & notifying cleaners..');

                  _this3.restService.postData('jobstatuschange', {
                    id: data.id,
                    status: 'paid'
                  }).subscribe(function (successfull) {
                    _this3.utilityService.loadingClose();
                  }, function (err) {
                    _this3.utilityService.openAlerts('Oops!', 'Error notifying cleaners, please contact us.', 'ok');
                  });

                  _this3.router.navigateByUrl('/confirmedbooking?job_id=' + data.id);
                }, function (failed) {
                  // 404 = new user to charge
                  // 403 = charge failed so again start as new user
                  // 400 = error charging
                  // open stripe sca in app browser
                  var browser = _this3.iab.create(_this3.settings.STRIPE_PAYMENT_URL + '/' + data.id, '_blank', {
                    location: 'no',
                    hardwareback: 'no',
                    hidenavigationbuttons: 'yes',
                    hideurlbar: 'yes',
                    fullscreen: 'yes',
                    zoom: 'no',
                    clearcache: 'yes',
                    toolbar: 'yes'
                  });

                  browser.on('loadstart').subscribe(function (e) {
                    //console.log(e.url);
                    if (e.url === _this3.settings.STRIPE_SUCCESS_PAYMENT_URL) {
                      // payment success
                      browser.close(); // call api for job status change

                      _this3.utilityService.loadingOpen('Confirming & notifying cleaners..');

                      _this3.restService.postData('jobstatuschange', {
                        id: data.id,
                        status: 'paid'
                      }).subscribe(function (success) {
                        _this3.utilityService.loadingClose();
                      }, function (err) {
                        _this3.utilityService.openAlerts('Oops!', 'Error notifying cleaners, please contact us.', 'ok');
                      });

                      _this3.router.navigateByUrl('/confirmedbooking?job_id=' + data.id);
                    } else if (e.url === _this3.settings.STRIPE_FAILED_PAYMENT_URL) {
                      // payment failed
                      browser.close();

                      _this3.router.navigateByUrl('/bookings');
                    }
                  });
                });
              } else {
                // coupon applied or price is 0
                // call api for job status change
                _this3.utilityService.loadingOpen('Confirming & notifying cleaners..');

                _this3.restService.postData('jobstatuschange', {
                  id: data.id,
                  status: 'paid'
                }).subscribe(function (success) {
                  _this3.utilityService.loadingClose();
                }, function (err) {
                  _this3.utilityService.openAlerts('Oops!', 'Error notifying cleaners, please contact us.', 'ok');
                });

                _this3.router.navigateByUrl('/confirmedbooking?job_id=' + data.id);
              }
            }, function (err) {
              // error
              console.log(err);

              _this3.utilityService.openAlerts('Error!', err.error.error, 'try again');
            });
          }
        }, {
          key: "getFrequency",
          value: function getFrequency(name) {
            return this.utilityService.frequencies[name];
          }
        }]);

        return OrderreviewPage;
      }();

      _OrderreviewPage.ctorParameters = function () {
        return [{
          type: _services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService
        }, {
          type: _services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__.EventsService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
        }];
      };

      _OrderreviewPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-orderreview',
        template: _raw_loader_orderreview_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_orderreview_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OrderreviewPage);
      /***/
    },

    /***/
    121:
    /*!*********************************************************!*\
      !*** ./src/app/pages/orderreview/orderreview.page.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .heading {\n  font-size: 0.8rem;\n}\nion-content .image-section {\n  margin-top: 10px;\n  border-bottom: 1px solid var(--ion-color-gray);\n  padding-bottom: 15px;\n}\nion-content .profile-image {\n  height: 140px;\n  width: 140px;\n  border-radius: 50%;\n  background-color: black;\n}\nion-content .profile-name-section {\n  height: 100%;\n  position: relative;\n  text-transform: uppercase;\n  text-align: center;\n}\nion-content .profile-name-section .name-container {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\nion-content .profile-name-section h2 {\n  font-size: 2.5rem;\n  font-weight: 600;\n  margin-bottom: 5px;\n  letter-spacing: 1px;\n}\nion-content .order-details-section {\n  text-transform: uppercase;\n  color: var(--ion-color-dark);\n  margin: 10px 25px;\n  font-size: 0.8rem;\n}\nion-content .order-details-section h4 {\n  font-size: 1.6rem;\n  font-weight: 600;\n}\nion-content .order-details-section .heading {\n  font-weight: 500;\n}\nion-content .order-details-section .desc {\n  color: var(--ion-color-dark);\n}\nion-content .order-details-section ion-col {\n  padding: 3px;\n}\nion-content .order-details-section .total {\n  margin-top: 8px;\n  font-weight: 500;\n}\nion-content .pricing-section {\n  text-transform: uppercase;\n  color: var(--ion-color-dark);\n  margin: 10px 25px;\n}\nion-content .pricing-section ion-row {\n  margin: 10px auto;\n}\nion-content .pricing-section .pricing {\n  font-size: 0.8rem;\n  padding: 0;\n}\nion-content strong {\n  letter-spacing: 1px;\n}\nion-content .coupon {\n  letter-spacing: 0.8px;\n  font-size: 0.7rem;\n  margin: auto;\n  padding: 0 10px;\n  min-height: 35px;\n}\nion-content .redeem-text {\n  margin-top: 15px;\n  text-align: center;\n  font-size: 0.7rem;\n  font-weight: bold;\n  line-height: 1rem;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0FBQUo7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsOENBQUE7RUFDQSxvQkFBQTtBQUFKO0FBRUU7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFBTjtBQUdFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBRE47QUFHSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRE47QUFPRTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBTEo7QUFPSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFMTjtBQVFJO0VBQ0UsZ0JBQUE7QUFOTjtBQVFJO0VBQ0UsNEJBQUE7QUFOTjtBQVNJO0VBQ0UsWUFBQTtBQVBOO0FBVUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFSTjtBQWFFO0VBRUUseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBWko7QUFjSTtFQUNFLGlCQUFBO0FBWk47QUFlSTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQWJOO0FBb0JFO0VBQ0UsbUJBQUE7QUFsQko7QUFxQkU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtBQXBCSjtBQXVCRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQXRCSiIsImZpbGUiOiJvcmRlcnJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC5oZWFkaW5ne1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gIC5pbWFnZS1zZWN0aW9ue1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmF5KTtcbiAgICBwYWRkaW5nLWJvdHRvbToxNXB4O1xuICB9XG4gIC5wcm9maWxlLWltYWdle1xuICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLnByb2ZpbGUtbmFtZS1zZWN0aW9ue1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAubmFtZS1jb250YWluZXJ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG4gICAgaDJ7XG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIH1cbiAgfVxuXG5cblxuICAub3JkZXItZGV0YWlscy1zZWN0aW9ue1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBtYXJnaW46IDEwcHggMjVweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcblxuICAgIGg0e1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5oZWFkaW5ne1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLmRlc2N7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIH1cblxuICAgIGlvbi1jb2x7XG4gICAgICBwYWRkaW5nOiAzcHg7XG4gICAgfVxuXG4gICAgLnRvdGFse1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cblxuXG4gIC5wcmljaW5nLXNlY3Rpb257XG5cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgbWFyZ2luOiAxMHB4IDI1cHg7XG5cbiAgICBpb24tcm93e1xuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgfVxuXG4gICAgLnByaWNpbmd7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG5cblxuICB9XG5cbiAgc3Ryb25ne1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuY291cG9ue1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIC8vIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAzNXB4O1xuICB9XG5cbiAgLnJlZGVlbS10ZXh0e1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmFzZSk7XG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    27657:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderreview/orderreview.page.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Booking Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row class=\"order-details-section\">\n    <ion-col size=\"12\" *ngIf=\"bookingdetails?.house_number\">\n      <ion-row>\n          <ion-col size=\"9\" class=\"heading\">Flat / House Number</ion-col>\n          <ion-col size=\"3\" class=\"desc ion-text-right\">{{bookingdetails?.house_number}}</ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-row>\n          <ion-col size=\"3\" class=\"heading\">Address</ion-col>\n          <ion-col size=\"9\" class=\"desc ion-text-right\">{{bookingdetails?.address}}, {{bookingdetails?.postcode}}</ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Date</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{bookingdetails?.date | date: 'EEE, dd-MM-y'}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Time</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{bookingdetails?.time}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Frequency</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{getFrequency(bookingdetails?.frequency)}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Hours Required</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{bookingdetails?.hours}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Bedrooms</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{bookingdetails?.bedrooms}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading\">Bathrooms</ion-col>\n            <ion-col class=\"desc ion-text-right\">{{bookingdetails?.bathrooms}}</ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-row>\n            <ion-col class=\"heading total\">Total</ion-col>\n            <ion-col class=\"total ion-text-right\"><strong>{{currency}}{{total}}</strong></ion-col>\n        </ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"pricing-section\">\n      <ion-col size=\"10\" offset=\"1\">\n        <div class=\"hr\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n          <ion-row *ngIf=\"extraTotal > 0\">\n              <ion-col size=\"8\" class=\"pricing\">Add-on Services</ion-col>\n              <ion-col size=\"4\" class=\"pricing ion-text-right\"><strong>{{currency}}{{extraTotal}}</strong></ion-col>\n          </ion-row>\n\n          <div *ngIf=\"taxSettings.length > 0\">\n            <ion-row *ngFor=\"let tax of taxSettings\" >\n              <ion-col size=\"8\" class=\"pricing\">{{tax?.label}}</ion-col>\n              <ion-col size=\"4\" class=\"pricing ion-text-right\"><strong>{{currency}}{{tax.price}}</strong></ion-col>\n            </ion-row>\n          </div>\n\n          <ion-row *ngIf=\"couponApplied\">\n              <ion-col size=\"8\" class=\"pricing\">DISCOUNT</ion-col>\n              <ion-col size=\"4\" class=\"pricing ion-text-right\"><strong>-{{currency}}{{discount}}</strong></ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col size=\"8\" class=\"pricing\"><strong>Amount Payable</strong></ion-col>\n              <ion-col size=\"4\" class=\"pricing ion-text-right\"><strong>{{currency}}{{price}}</strong></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"ion-text-center redeem-text\" size=\"12\" (click)=\"openCoupon()\">Got a discount code? Click here to redeem</ion-col>\n          </ion-row>\n      </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"10\" offset=\"1\">\n        <ion-button expand=\"block\" [disabled]=\"paymentButtonDisabled\" class=\"base-button cleaner-btn\" (click)=\"pay()\">PAY</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_orderreview_orderreview_module_ts-es5.js.map