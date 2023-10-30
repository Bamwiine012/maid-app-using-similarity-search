(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_cleanermoredetails_cleanermoredetails_module_ts"], {
    /***/
    30800:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/cleanermoredetails/cleanermoredetails-routing.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CleanermoredetailsPageRoutingModule": function CleanermoredetailsPageRoutingModule() {
          return (
            /* binding */
            _CleanermoredetailsPageRoutingModule
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


      var _cleanermoredetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cleanermoredetails.page */
      91666);

      var routes = [{
        path: '',
        component: _cleanermoredetails_page__WEBPACK_IMPORTED_MODULE_0__.CleanermoredetailsPage
      }];

      var _CleanermoredetailsPageRoutingModule = /*#__PURE__*/_createClass(function CleanermoredetailsPageRoutingModule() {
        _classCallCheck(this, CleanermoredetailsPageRoutingModule);
      });

      _CleanermoredetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CleanermoredetailsPageRoutingModule);
      /***/
    },

    /***/
    84902:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/cleanermoredetails/cleanermoredetails.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CleanermoredetailsPageModule": function CleanermoredetailsPageModule() {
          return (
            /* binding */
            _CleanermoredetailsPageModule
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


      var _cleanermoredetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cleanermoredetails-routing.module */
      30800);
      /* harmony import */


      var _cleanermoredetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cleanermoredetails.page */
      91666);

      var _CleanermoredetailsPageModule = /*#__PURE__*/_createClass(function CleanermoredetailsPageModule() {
        _classCallCheck(this, CleanermoredetailsPageModule);
      });

      _CleanermoredetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _cleanermoredetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.CleanermoredetailsPageRoutingModule],
        declarations: [_cleanermoredetails_page__WEBPACK_IMPORTED_MODULE_1__.CleanermoredetailsPage]
      })], _CleanermoredetailsPageModule);
      /***/
    },

    /***/
    91666:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/cleanermoredetails/cleanermoredetails.page.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CleanermoredetailsPage": function CleanermoredetailsPage() {
          return (
            /* binding */
            _CleanermoredetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_cleanermoredetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cleanermoredetails.page.html */
      19621);
      /* harmony import */


      var _cleanermoredetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cleanermoredetails.page.scss */
      77534);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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


      var _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/camera */
      37673);
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      97905);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);

      var _CleanermoredetailsPage = /*#__PURE__*/function () {
        function CleanermoredetailsPage(localService, restService, utilityService, eventsService, router, activatedRoute, menuCtrl, actionSheetCtrl, transfer, sanitizer, menu) {
          var _this = this;

          _classCallCheck(this, CleanermoredetailsPage);

          this.localService = localService;
          this.restService = restService;
          this.utilityService = utilityService;
          this.eventsService = eventsService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.menuCtrl = menuCtrl;
          this.actionSheetCtrl = actionSheetCtrl;
          this.transfer = transfer;
          this.sanitizer = sanitizer;
          this.menu = menu;
          this.bank = {};
          this.distance = '20';
          this.experience = '';
          this.idImageToUpload = null;
          this.lastIdImage = null;
          this.idExt = null;
          this.addressImageToUpload = null;
          this.lastAddressImage = null;
          this.addressExt = null;
          this.loggedCleaner = this.localService.getCleaner();
          this.distanceType = this.localService.getSettings().distance_type;
          this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.mode) {
              _this.mode = params.mode;
            }

            if (_this.mode === 'rejected') {
              _this.reason = params.reason;
            }
          });
        }

        _createClass(CleanermoredetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            // disable menu
            this.menuCtrl.enable(false);
          }
        }, {
          key: "submitVerification",
          value: function submitVerification() {
            var _this2 = this;

            if (!this.lastIdImage || !this.lastAddressImage) {
              return this.utilityService.openAlerts('Error!', 'Id & address proof required.', 'ok');
            }

            if (!this.experience || this.experience === '') {
              return this.utilityService.openAlerts('Error!', 'Enter experience.', 'ok');
            }

            if (!this.bank.name || this.bank.name === '') {
              return this.utilityService.openAlerts('Error!', 'Bank Name required.', 'ok');
            }

            if (!this.bank.beneficiary || this.bank.beneficiary === '') {
              return this.utilityService.openAlerts('Error!', 'Beneficiary Name required.', 'ok');
            }

            if (!this.bank.number || this.bank.number === '') {
              return this.utilityService.openAlerts('Error!', 'Account Number required.', 'ok');
            }

            if (!this.bank.code || this.bank.code === '') {
              return this.utilityService.openAlerts('Error!', 'Sort Code required.', 'ok');
            } // first insert records then upload the files


            this.restService.postData('cleaner/' + this.loggedCleaner.id + '/updatedocument', {
              distance: this.distance,
              bank: this.bank,
              experience: this.experience
            }).subscribe(function (data) {
              // now start uploading one by one
              _this2.utilityService.loadingOpen('Uploading documents...');

              _this2.uploadImage();

              setTimeout(function () {
                _this2.utilityService.loadingClose();

                _this2.mode = 'pending';
              }, 15000);
              console.log(data);
            }, function (err) {
              console.log(err);

              _this2.utilityService.openAlerts('Error!', 'Something went wrong, please try again later.', 'ok');
            });
          }
        }, {
          key: "resubmitVerification",
          value: function resubmitVerification() {
            this.mode = 'new';
          } // image uploading section =========================

        }, {
          key: "takePicture",
          value: function takePicture(type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var image;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.Camera.getPhoto({
                        quality: 80,
                        allowEditing: false,
                        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraResultType.Uri
                      });

                    case 2:
                      image = _context.sent;

                      if (type === 'id') {
                        this.idImageToUpload = image.path;
                        this.lastIdImage = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);
                        this.idExt = image.format;
                      } else {
                        this.addressImageToUpload = image.path;
                        this.lastAddressImage = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);
                        this.addressExt = image.format;
                      }

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "uploadImage",
          value: function uploadImage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var fileTransfer, options1, options2;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      fileTransfer = this.transfer.create();
                      options1 = {
                        fileKey: 'image',
                        fileName: "file-id-".concat(this.loggedCleaner.id, ".").concat(this.idExt),
                        chunkedMode: false,
                        mimeType: 'multipart/form-data',
                        params: {
                          fileName: "file-id-".concat(this.loggedCleaner.id, ".").concat(this.idExt),
                          image: "file-id-".concat(this.loggedCleaner.id, ".").concat(this.idExt)
                        }
                      };
                      fileTransfer.upload(this.idImageToUpload, this.restService.baseURL + 'cleaner/upload_cleaner_id/' + this.loggedCleaner.id, options1).then(function (data) {
                        console.log(data); // clear the last data

                        _this3.lastIdImage = null;
                        _this3.idImageToUpload = null;
                      }, function (err) {
                        console.log(err);
                      });
                      options2 = {
                        fileKey: 'image',
                        fileName: "file-address-".concat(this.loggedCleaner.id, ".").concat(this.idExt),
                        chunkedMode: false,
                        mimeType: 'multipart/form-data',
                        params: {
                          fileName: "file-address-".concat(this.loggedCleaner.id, ".").concat(this.idExt),
                          image: "file-address-".concat(this.loggedCleaner.id, ".").concat(this.idExt)
                        }
                      };
                      fileTransfer.upload(this.addressImageToUpload, this.restService.baseURL + 'cleaner/upload_cleaner_address/' + this.loggedCleaner.id, options2).then(function (data) {
                        console.log(data); // clear the last data

                        _this3.lastAddressImage = null;
                        _this3.addressImageToUpload = null;
                      }, function (err) {
                        console.log(err);
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.localService.removeUser();
            this.localService.removeCleaner();
            this.menu.enable(false); // refresh the menu : send event

            this.eventsService.publish('menu', 'guest');
            this.router.navigateByUrl('/login');
          }
        }]);

        return CleanermoredetailsPage;
      }();

      _CleanermoredetailsPage.ctorParameters = function () {
        return [{
          type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService
        }, {
          type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__.RestService
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__.UtilityService
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__.FileTransfer
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController
        }];
      };

      _CleanermoredetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-cleanermoredetails',
        template: _raw_loader_cleanermoredetails_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cleanermoredetails_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CleanermoredetailsPage);
      /***/
    },

    /***/
    77534:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/cleanermoredetails/cleanermoredetails.page.scss ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .confirmed-container {\n  padding: 30px 20px;\n}\nion-content .camera-icon {\n  width: 40px;\n}\nion-content .text {\n  font-size: 0.8rem;\n  line-height: 1.2rem;\n}\nion-content .heading {\n  margin: auto 20px;\n  border-bottom: 1px solid var(--ion-color-light);\n  padding-bottom: 10px;\n  font-weight: 500;\n  font-size: 1.3rem;\n}\nion-content .title {\n  text-transform: uppercase;\n  padding-bottom: 10px;\n  font-weight: 500;\n  border-bottom: 1px solid var(--ion-color-light);\n  font-size: 0.8rem;\n}\nion-content .textarea {\n  min-height: 100px;\n}\nion-content .document-form .label {\n  margin-bottom: 10px;\n}\nion-content .document-form .heading {\n  margin: auto;\n  font-size: 1.2rem;\n  margin-bottom: 15px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  line-height: 15px;\n  margin-bottom: 15px;\n}\nion-content .document-form ion-select {\n  max-width: 100%;\n  margin-bottom: 15px;\n}\nion-content .document-form .input .text-input {\n  text-align: left;\n  padding-left: 15px;\n}\nion-content .uploader {\n  position: relative;\n}\nion-content .uploader img {\n  text-align: center;\n  margin: auto;\n}\nion-content .uploader .imgPrev {\n  height: 150px;\n  display: block;\n  margin: 10px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsZWFuZXJtb3JlZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxrQkFBQTtBQUFOO0FBR0k7RUFDRSxXQUFBO0FBRE47QUFJSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUtJO0VBQ0UsaUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUhOO0FBTUk7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGlCQUFBO0FBSk47QUFPSTtFQUNFLGlCQUFBO0FBTE47QUFTTTtFQUNFLG1CQUFBO0FBUFI7QUFTTTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVVNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBUlI7QUFZUTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFWVjtBQWlCSTtFQUNFLGtCQUFBO0FBZk47QUFnQk07RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFkVjtBQWlCTTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFmUiIsImZpbGUiOiJjbGVhbmVybW9yZWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC5jb25maXJtZWQtY29udGFpbmVye1xuICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgIH1cblxuICAgIC5jYW1lcmEtaWNvbntcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgIH1cblxuICAgIC50ZXh0e1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcbiAgICB9XG5cbiAgICAuaGVhZGluZ3tcbiAgICAgIG1hcmdpbjogYXV0byAyMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG5cbiAgICAudGl0bGV7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG5cbiAgICAudGV4dGFyZWF7XG4gICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICB9XG5cbiAgICAuZG9jdW1lbnQtZm9ybXtcbiAgICAgIC5sYWJlbHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICAgIC5oZWFkaW5ne1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIH1cblxuICAgICAgaW9uLXNlbGVjdHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgfVxuXG4gICAgICAuaW5wdXR7XG4gICAgICAgIC50ZXh0LWlucHV0e1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cblxuICAgIC51cGxvYWRlcntcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGltZ3tcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuaW1nUHJldntcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    19621:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cleanermoredetails/cleanermoredetails.page.html ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-uppercase\">Start Verification</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon class=\"notification-icon\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content forceOverscroll class=\"ion-padding\">\n    <div class=\"confirmed-container\" *ngIf=\"mode === 'pending'\">\n      <h4 class=\"heading ion-text-center ion-text-uppercase\">Pending verification</h4>\n      <p class=\"text ion-text-center ion-text-uppercase\">We have received your documents. Please be patient whilst our team verify your credentials.</p>\n      <p class=\"text ion-text-center ion-text-uppercase\">You will receive a confirmation email shortly.</p>\n      <p class=\"ion-text-center ion-text-uppercase\">Regards<br/><span class=\"medium\">{{utilityService.config.appName}} Team</span></p>\n    </div>\n    <div class=\"confirmed-container\" *ngIf=\"mode === 'rejected'\">\n      <h4 class=\"heading ion-text-center ion-text-uppercase\">Rejected</h4>\n      <p *ngIf=\"reason !== 'null'\" class=\"text ion-text-center ion-text-uppercase\">{{reason}}</p>\n      <p class=\"text ion-text-center ion-text-uppercase\">Please resubmit proper documents.</p>\n      <p class=\"ion-text-center ion-text-uppercase\">Regards<br/><span class=\"medium\">{{utilityService.config.appName}} Team</span></p>\n\n      <ion-row>\n        <ion-col size=\"8\" offset=\"2\">\n          <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"resubmitVerification()\">Resubmit Now</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class=\"document-form\" *ngIf=\"mode === 'new'\">\n\n        <div class=\"label\">What is the maximum distance you are willing to travel for work? </div>\n        <ion-select class=\"select-container\" [(ngModel)]=\"distance\" interface=\"action-sheet\">\n          <ion-select-option value=\"5\">5 {{distanceType}}s</ion-select-option>\n          <ion-select-option value=\"10\">10 {{distanceType}}s</ion-select-option>\n          <ion-select-option value=\"15\">15 {{distanceType}}s</ion-select-option>\n          <ion-select-option value=\"20\">20 {{distanceType}}s</ion-select-option>\n          <ion-select-option value=\"25\">25 {{distanceType}}s</ion-select-option>\n          <ion-select-option value=\"30\">30 {{distanceType}}s</ion-select-option>\n          <ion-select-option value=\"35\">35 {{distanceType}}s</ion-select-option>\n          <ion-select-option value=\"40\">40 {{distanceType}}s</ion-select-option>\n          <ion-select-option value=\"45\">45 {{distanceType}}s</ion-select-option>\n          <ion-select-option value=\"50\">50 {{distanceType}}s</ion-select-option>\n        </ion-select>\n\n\n        <div class=\"label\">Please tell us briefly about your cleaning experience and any relevant jobs you have undertaken in the past.</div>\n        <ion-textarea class=\"textarea\" placeholder=\"Tell us your experience\" [(ngModel)]=\"experience\"></ion-textarea>\n\n        <h4 class=\"title\">Before you become a member of the {{utilityService.config.appName}} Community, you will need to verify your identity. To do this, please upload the following documents.</h4>\n        <div class=\"label\">Proof of a photo ID such as a passport or driving licence. Upload here.</div>\n        <div class=\"uploader\">\n\n          <img class=\"camera-icon\" (click)=\"takePicture('id')\" src=\"/assets/images/upload-document.png\"/>\n\n          <img class=\"imgPrev\" *ngIf=\"lastIdImage !== null\" [src]=\"lastIdImage\"/>\n        </div>\n        <div class=\"label\">Proof of address (ie  council tax, bank statement, utility bill). Upload here.</div>\n        <div class=\"uploader\">\n\n          <img class=\"camera-icon\" (click)=\"takePicture('address')\" src=\"/assets/images/upload-document.png\"/>\n\n          <img class=\"imgPrev\" *ngIf=\"lastAddressImage !== null\" [src]=\"lastAddressImage\"/>\n        </div>\n\n\n        <hr/>\n        <h4 class=\"title\">In order to receive payments for the jobs you undertake through {{utilityService.config.appName}}, Please provide your bank details.</h4>\n        <ion-input class=\"input\" type=\"text\" [(ngModel)]=\"bank.name\" placeholder=\"Bank name\"></ion-input>\n        <ion-input class=\"input\" type=\"text\" [(ngModel)]=\"bank.beneficiary\" placeholder=\"Beneficiary name\"></ion-input>\n        <ion-input class=\"input\" type=\"number\" [(ngModel)]=\"bank.number\" placeholder=\"Account/IBAN Number\"></ion-input>\n        <ion-input class=\"input\" type=\"text\" [(ngModel)]=\"bank.code\" placeholder=\"Branch Code/SWIFT Code/SORT Code\"></ion-input>\n\n\n        <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"submitVerification()\">SUBMIT FOR VERIFICATION</ion-button>\n\n\n\n    </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cleanermoredetails_cleanermoredetails_module_ts-es5.js.map