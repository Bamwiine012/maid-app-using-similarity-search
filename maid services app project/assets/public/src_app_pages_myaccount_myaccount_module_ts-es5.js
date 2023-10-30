(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_myaccount_myaccount_module_ts"], {
    /***/
    60988:
    /*!*************************************************************!*\
      !*** ./src/app/pages/myaccount/myaccount-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyaccountPageRoutingModule": function MyaccountPageRoutingModule() {
          return (
            /* binding */
            _MyaccountPageRoutingModule
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


      var _myaccount_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./myaccount.page */
      44919);

      var routes = [{
        path: '',
        component: _myaccount_page__WEBPACK_IMPORTED_MODULE_0__.MyaccountPage
      }];

      var _MyaccountPageRoutingModule = /*#__PURE__*/_createClass(function MyaccountPageRoutingModule() {
        _classCallCheck(this, MyaccountPageRoutingModule);
      });

      _MyaccountPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MyaccountPageRoutingModule);
      /***/
    },

    /***/
    22804:
    /*!*****************************************************!*\
      !*** ./src/app/pages/myaccount/myaccount.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyaccountPageModule": function MyaccountPageModule() {
          return (
            /* binding */
            _MyaccountPageModule
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


      var _myaccount_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./myaccount-routing.module */
      60988);
      /* harmony import */


      var _myaccount_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./myaccount.page */
      44919);

      var _MyaccountPageModule = /*#__PURE__*/_createClass(function MyaccountPageModule() {
        _classCallCheck(this, MyaccountPageModule);
      });

      _MyaccountPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _myaccount_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyaccountPageRoutingModule],
        declarations: [_myaccount_page__WEBPACK_IMPORTED_MODULE_1__.MyaccountPage]
      })], _MyaccountPageModule);
      /***/
    },

    /***/
    44919:
    /*!***************************************************!*\
      !*** ./src/app/pages/myaccount/myaccount.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyaccountPage": function MyaccountPage() {
          return (
            /* binding */
            _MyaccountPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_myaccount_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./myaccount.page.html */
      55520);
      /* harmony import */


      var _myaccount_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./myaccount.page.scss */
      83026);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/camera */
      37673);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      53760);
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      97905);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* eslint-disable @typescript-eslint/naming-convention */


      var _MyaccountPage = /*#__PURE__*/function () {
        function MyaccountPage(localService, restService, utilityService, eventsService, router, activatedRoute, actionSheetCtrl, iab, transfer, sanitizer) {
          _classCallCheck(this, MyaccountPage);

          this.localService = localService;
          this.restService = restService;
          this.utilityService = utilityService;
          this.eventsService = eventsService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.actionSheetCtrl = actionSheetCtrl;
          this.iab = iab;
          this.transfer = transfer;
          this.sanitizer = sanitizer;
          this.lastImage = null;
          this.address = '';
          this.postcode = '';
          this.user = {};
          this.oldpass = '';
          this.newpass = '';
          this.settings = {};
          this.loggedUser = this.localService.getUser();
          this.user = this.loggedUser;
          this.settings = this.localService.getSettings();
        }

        _createClass(MyaccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // image uploading section =========================

        }, {
          key: "presentActionSheet",
          value: function presentActionSheet() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetCtrl.create({
                        header: 'Select Image Source',
                        buttons: [{
                          text: 'Select from Library',
                          handler: function handler() {
                            _this.takePicture(_capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraSource.Photos);
                          }
                        }, {
                          text: 'Use Camera',
                          handler: function handler() {
                            _this.takePicture(_capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraSource.Camera);
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      actionSheet.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "takePicture",
          value: function takePicture(sourceType) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var options;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // Create options for the Camera Dialog
                      options = {
                        quality: 90,
                        allowEditing: false,
                        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraResultType.Uri,
                        source: sourceType
                      };
                      _context2.next = 3;
                      return _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.Camera.getPhoto(options);

                    case 3:
                      this.lastImage = _context2.sent;
                      this.uploadImage(this.loggedUser.id);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "uploadImage",
          value: function uploadImage(userId) {
            var _this2 = this;

            var options = {
              fileKey: 'image',
              fileName: "file-".concat(new Date().getTime(), ".jpg"),
              chunkedMode: false,
              mimeType: 'multipart/form-data',
              params: {
                fileName: "file-".concat(new Date().getTime(), ".jpg"),
                image: "file-".concat(new Date().getTime(), ".jpg")
              }
            };
            var fileTransfer = this.transfer.create();
            this.utilityService.loadingOpen('Uploading...');
            fileTransfer.upload(this.lastImage.path, this.restService.baseURL + 'user/update_user_image/' + userId, options).then(function (data) {
              _this2.utilityService.loadingClose();

              console.log(data); // clear the last data

              _this2.lastImage = null; // update the loggedUser

              var response = JSON.parse(data.response);

              _this2.localService.setUser(response);

              _this2.loggedUser = response; // update menu data

              _this2.updateMenuByEvents();
            }, function (err) {
              console.log(err);

              _this2.utilityService.loadingClose();
            });
          }
        }, {
          key: "updateMenuByEvents",
          value: function updateMenuByEvents() {
            this.eventsService.publish('menu', 'user');
          } // new update

        }, {
          key: "updateProfile",
          value: function updateProfile() {
            var _this3 = this;

            var updateData = {
              id: this.user.id,
              name: this.user.name,
              phone: this.user.phone,
              house_number: this.user.house_number,
              address: this.user.address,
              postcode: this.user.postcode
            };

            if (this.user.name.length < 2) {
              return this.utilityService.openAlerts('Oops!', 'Name required.', 'ok');
            }

            if (this.user.phone) {
              if (this.user.phone.length < 8) {
                return this.utilityService.openAlerts('Oops!', 'Valid mobile number required.', 'ok');
              }
            } else {
              // phone null
              delete updateData.phone;
            }

            if (this.user.address) {
              if (this.user.address.length < 5) {
                return this.utilityService.openAlerts('Oops!', 'Valid address required.', 'ok');
              }
            } else {
              // address null
              delete updateData.address;
            }

            if (this.user.postcode) {
              if (this.user.postcode.length < 2) {
                return this.utilityService.openAlerts('Oops!', 'Valid postcode required.', 'ok');
              }
            } else {
              // postcode null
              delete updateData.postcode;
            }

            this.utilityService.loadingOpen('Updating...');
            this.restService.postData('user/update_profile', updateData).subscribe(function (data) {
              _this3.loggedUser = data;

              _this3.localService.setUser(data);

              _this3.utilityService.loadingClose();

              _this3.utilityService.openAlerts('Done!', 'Successfully updated.', 'ok');
            }, function (err) {
              _this3.utilityService.loadingClose();

              _this3.utilityService.openAlerts('Oops!', 'Error upating.', 'ok');
            });
          }
        }, {
          key: "updatePassword",
          value: function updatePassword() {
            var _this4 = this;

            if (this.oldpass === '' || this.newpass === '') {
              return this.utilityService.openAlerts('Oops!', 'Both old & new password required.', 'ok');
            }

            if (this.newpass.length < 6) {
              return this.utilityService.openAlerts('Oops!', 'New password must be 6 characters.', 'ok');
            }

            this.utilityService.loadingOpen('Updating...');
            this.restService.postData('user/update_profile', {
              id: this.loggedUser.id,
              newpassword: this.newpass,
              oldpassword: this.oldpass
            }).subscribe(function (data) {
              _this4.utilityService.loadingClose();

              _this4.utilityService.openAlerts('Done!', 'Password updated.', 'ok');
            }, function (err) {
              _this4.utilityService.loadingClose();

              _this4.utilityService.openAlerts('Oops!', err.error.error, 'ok');
            });
          }
        }, {
          key: "updateCard",
          value: function updateCard() {
            var _this5 = this;

            var browser = this.iab.create(this.settings.STRIPE_CARD_UPDATE_URL + '/' + this.loggedUser.id, '_blank', {
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
              if (e.url === _this5.settings.STRIPE_SUCCESS_PAYMENT_URL) {
                // update success
                browser.close();
                return _this5.utilityService.openAlerts('Done!', 'Payment method has been updated.', 'ok');
              } else if (e.url === _this5.settings.STRIPE_FAILED_PAYMENT_URL) {
                // payment failed
                browser.close();
                return _this5.utilityService.openAlerts('Oops!', 'We are unable to add this card as your payment method.', 'ok');
              }
            });
          }
        }]);

        return MyaccountPage;
      }();

      _MyaccountPage.ctorParameters = function () {
        return [{
          type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService
        }, {
          type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__.RestService
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__.UtilityService
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ActionSheetController
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__.InAppBrowser
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__.FileTransfer
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer
        }];
      };

      _MyaccountPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-myaccount',
        template: _raw_loader_myaccount_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_myaccount_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MyaccountPage);
      /***/
    },

    /***/
    83026:
    /*!*****************************************************!*\
      !*** ./src/app/pages/myaccount/myaccount.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  text-transform: uppercase;\n}\nion-content ion-item {\n  font-size: 0.8rem;\n  border-bottom: 1px solid var(--ion-color-light);\n}\nion-content h2 {\n  text-align: center;\n  font-size: 1rem;\n  margin: 15px auto;\n}\nion-content .address-heading {\n  text-align: center;\n  font-size: 1rem;\n  margin: 15px auto 5px;\n  font-weight: 500;\n}\nion-content .image-container {\n  margin: auto;\n  text-align: center;\n}\nion-content .image {\n  height: 125px;\n  width: 125px;\n  border-radius: 50%;\n}\nion-content .details {\n  margin: 15px auto;\n  font-weight: 400;\n  color: var(--ion-color-gray);\n}\nion-content .details ion-row {\n  font-weight: 400;\n  color: var(--ion-color-dark);\n  font-size: 0.8rem;\n}\nion-content .editicon {\n  height: 20px;\n  vertical-align: middle;\n}\nion-content ion-item:first-child {\n  border-top: none !important;\n}\nion-content .uploader {\n  position: relative;\n}\nion-content .uploader img {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  height: 30px;\n}\nion-content .resetinput {\n  border: 1px solid #ebebee;\n  width: 100%;\n  padding: 12px;\n  margin-top: 5px;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  text-align: center;\n}\nion-content #addressOpen {\n  display: none;\n}\nion-content .addressInput {\n  width: 100%;\n  border: 1px solid var(--ion-color-light);\n  padding: 10px;\n  display: block;\n  margin: 5px auto;\n  background-clip: padding-box;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\nion-content .placeHint {\n  border: 1px solid #ebebee;\n  background: #fafafa;\n  position: relative;\n  z-index: 99;\n  height: auto;\n}\nion-content .no-padding {\n  padding: 0;\n}\nion-content .cleaner-btn {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15YWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGO0FBQ0U7RUFFRSxpQkFBQTtFQUNBLCtDQUFBO0FBQUo7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBRko7QUFJRTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUtFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBSEo7QUFJSTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQUZOO0FBTUU7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QUFKSjtBQU9FO0VBQ0UsMkJBQUE7QUFMSjtBQVFFO0VBQ0Usa0JBQUE7QUFOSjtBQU9JO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFMUjtBQVVFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVJKO0FBY0U7RUFDRSxhQUFBO0FBWko7QUFnQkU7RUFDRSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFHQSxrQkFBQTtFQUNBLG1CQUFBO0FBaEJKO0FBbUJFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFqQko7QUFtQkU7RUFDRSxVQUFBO0FBakJKO0FBb0JFO0VBQ0UsZUFBQTtBQWxCSiIsImZpbGUiOiJteWFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gIGlvbi1pdGVte1xuICAgIC8vIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB9XG4gIGgye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gIH1cblxuICAuYWRkcmVzcy1oZWFkaW5ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luOiAxNXB4IGF1dG8gNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAuaW1hZ2UtY29udGFpbmVye1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmltYWdle1xuICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgIHdpZHRoOiAxMjVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5kZXRhaWxze1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5KTtcbiAgICBpb24tcm93e1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG4gIH1cblxuICAuZWRpdGljb257XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICBpb24taXRlbTpmaXJzdC1jaGlsZHtcbiAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudXBsb2FkZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGltZ3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG5cblxuICAucmVzZXRpbnB1dHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmVlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG5cblxuICAvLyBhZGRyZXNzIG9wZW4gY2xvc2VcbiAgI2FkZHJlc3NPcGVue1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuXG4gIC5hZGRyZXNzSW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcblxuICAgIC8vIGJvcmRlciByYWRpdXMgZml4XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAucGxhY2VIaW50e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWU7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogOTk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5uby1wYWRkaW5ne1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuY2xlYW5lci1idG57XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cblxufVxuIl19 */";
      /***/
    },

    /***/
    55520:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myaccount/myaccount.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">My Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div *ngIf=\"!loggedUser?.image\" class=\"thumb-image central\" (click)=\"presentActionSheet()\">\n        <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n    </div>\n    <div class=\"image-container\" (click)=\"presentActionSheet()\">\n      <img *ngIf=\"loggedUser?.image\" class=\"image\" src=\"{{utilityService.uploadPath}}profile/{{loggedUser?.image}}\"/>\n    </div>\n\n    <div class=\"details\">\n      <ion-row>\n          <ion-col size=\"12\" class=\"ion-text-center\">\n            <input class=\"addressInput\" type=\"text\" placeholder=\"Name\" [(ngModel)]=\"user.name\">\n            <input class=\"addressInput\" type=\"tel\" placeholder=\"Mobile\" [(ngModel)]=\"user.phone\">\n            <input class=\"addressInput\" type=\"text\" placeholder=\"Flat / House Number\" [(ngModel)]=\"user.house_number\">\n            <input class=\"addressInput\" type=\"text\" placeholder=\"Address\" [(ngModel)]=\"user.address\">\n            <input class=\"addressInput\" type=\"text\" placeholder=\"Postcode\" [(ngModel)]=\"user.postcode\" (ngModelChange)=\"user.postcode = $event.toLocaleUpperCase()\">\n            <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"updateProfile()\">UPDATE PROFILE</ion-button>\n          </ion-col>\n          <ion-col size=\"12\" class=\"ion-text-center\">\n            <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"updateCard()\">UPDATE PAYMENT METHOD</ion-button>\n          </ion-col>\n          <ion-col size=\"12\" class=\"ion-text-center\">\n            <input class=\"addressInput\" type=\"password\" placeholder=\"Old Password\" [(ngModel)]=\"oldpass\">\n            <input class=\"addressInput\" type=\"password\" placeholder=\"New Password\" [(ngModel)]=\"newpass\">\n            <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"updatePassword()\">UPDATE PASSWORD</ion-button>\n          </ion-col>\n      </ion-row>\n    </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_myaccount_myaccount_module_ts-es5.js.map