(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_cleanerprofile_cleanerprofile_module_ts"], {
    /***/
    25070:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/cleanerprofile/cleanerprofile-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CleanerprofilePageRoutingModule": function CleanerprofilePageRoutingModule() {
          return (
            /* binding */
            _CleanerprofilePageRoutingModule
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


      var _cleanerprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cleanerprofile.page */
      44064);

      var routes = [{
        path: '',
        component: _cleanerprofile_page__WEBPACK_IMPORTED_MODULE_0__.CleanerprofilePage
      }];

      var _CleanerprofilePageRoutingModule = /*#__PURE__*/_createClass(function CleanerprofilePageRoutingModule() {
        _classCallCheck(this, CleanerprofilePageRoutingModule);
      });

      _CleanerprofilePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CleanerprofilePageRoutingModule);
      /***/
    },

    /***/
    89573:
    /*!***************************************************************!*\
      !*** ./src/app/pages/cleanerprofile/cleanerprofile.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CleanerprofilePageModule": function CleanerprofilePageModule() {
          return (
            /* binding */
            _CleanerprofilePageModule
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


      var _cleanerprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cleanerprofile-routing.module */
      25070);
      /* harmony import */


      var _cleanerprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cleanerprofile.page */
      44064);

      var _CleanerprofilePageModule = /*#__PURE__*/_createClass(function CleanerprofilePageModule() {
        _classCallCheck(this, CleanerprofilePageModule);
      });

      _CleanerprofilePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _cleanerprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.CleanerprofilePageRoutingModule],
        declarations: [_cleanerprofile_page__WEBPACK_IMPORTED_MODULE_1__.CleanerprofilePage]
      })], _CleanerprofilePageModule);
      /***/
    },

    /***/
    44064:
    /*!*************************************************************!*\
      !*** ./src/app/pages/cleanerprofile/cleanerprofile.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CleanerprofilePage": function CleanerprofilePage() {
          return (
            /* binding */
            _CleanerprofilePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_cleanerprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cleanerprofile.page.html */
      79695);
      /* harmony import */


      var _cleanerprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cleanerprofile.page.scss */
      20036);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* eslint-disable @typescript-eslint/naming-convention */


      var _CleanerprofilePage = /*#__PURE__*/function () {
        function CleanerprofilePage(localService, restService, utilityService, eventsService, router, activatedRoute, location) {
          var _this = this;

          _classCallCheck(this, CleanerprofilePage);

          this.localService = localService;
          this.restService = restService;
          this.utilityService = utilityService;
          this.eventsService = eventsService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.location = location;
          this.inFav = false;
          this.loggedUser = this.localService.getUser();
          this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.id) {
              _this.id = params.id;

              _this.utilityService.loadingOpen('Loading...');

              _this.restService.getData('cleaner/get/' + _this.id).subscribe(function (data) {
                _this.cleaner = data;

                _this.utilityService.loadingClose();
              }, function (err) {}); // get favourites


              _this.restService.getData('user/get/' + _this.loggedUser.id).subscribe(function (data) {
                var favourites = data.favourites;

                if (favourites) {
                  // check for current cleaner
                  favourites.forEach(function (item) {
                    if (item.cleaner_id === parseInt(_this.id)) {
                      _this.inFav = true;
                    }
                  });
                }
              }, function (err) {});
            } else {
              _this.location.back();
            }
          });
        }

        _createClass(CleanerprofilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openGallery",
          value: function openGallery() {
            this.router.navigate(['/cleanergallery'], {
              queryParams: {
                cleaner_id: this.id
              }
            });
          }
        }, {
          key: "bookCleaner",
          value: function bookCleaner() {
            this.router.navigate(['/book'], {
              queryParams: {
                cleaner_id: this.id
              }
            });
          }
        }, {
          key: "unfav",
          value: function unfav() {
            var _this2 = this;

            // unfavourite
            this.restService.postData('favourite/delete', {
              cleaner_id: this.id,
              user_id: this.loggedUser.id
            }).subscribe(function (data) {
              _this2.inFav = false;
            }, function (err) {});
          }
        }, {
          key: "fav",
          value: function fav() {
            var _this3 = this;

            // favourite
            this.restService.postData('favourite/create', {
              cleaner_id: this.id,
              user_id: this.loggedUser.id
            }).subscribe(function (data) {
              _this3.inFav = true;
            }, function (err) {});
          }
        }, {
          key: "openNotifications",
          value: function openNotifications() {
            this.router.navigate(['/cleanernotifications']);
          }
        }]);

        return CleanerprofilePage;
      }();

      _CleanerprofilePage.ctorParameters = function () {
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
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location
        }];
      };

      _CleanerprofilePage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-cleanerprofile',
        template: _raw_loader_cleanerprofile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cleanerprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CleanerprofilePage);
      /***/
    },

    /***/
    20036:
    /*!***************************************************************!*\
      !*** ./src/app/pages/cleanerprofile/cleanerprofile.page.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .image-section {\n  margin-top: 10px;\n  border-bottom: 1px solid var(--ion-color-gray);\n  padding-bottom: 15px;\n}\nion-content .profile-image {\n  height: 140px;\n  width: 140px;\n  border-radius: 50%;\n  background-color: black;\n}\nion-content .thumb-image {\n  height: 140px;\n  width: 140px;\n  line-height: 180px;\n}\nion-content .profile-name-section {\n  height: 100%;\n  position: relative;\n  text-transform: uppercase;\n  text-align: center;\n}\nion-content .profile-name-section .name-container {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\nion-content .profile-name-section h2 {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 5px;\n  letter-spacing: 1px;\n}\nion-content .profile-details-section {\n  margin: 10px auto;\n  font-size: 0.9rem;\n  line-height: 1.2rem;\n}\nion-content .profile-details-section h2 {\n  font-size: 1rem;\n  text-transform: uppercase;\n  font-weight: 600;\n}\nion-content .favourite {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsZWFuZXJwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsOENBQUE7RUFDQSxvQkFBQTtBQUFKO0FBRUU7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFBTjtBQUdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRko7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFGTjtBQUlJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUZOO0FBT0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU1JO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFKTjtBQVNFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQVBKIiwiZmlsZSI6ImNsZWFuZXJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLmltYWdlLXNlY3Rpb257XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyYXkpO1xuICAgIHBhZGRpbmctYm90dG9tOjE1cHg7XG4gIH1cbiAgLnByb2ZpbGUtaW1hZ2V7XG4gICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIH1cblxuICAudGh1bWItaW1hZ2V7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4MHB4O1xuICB9XG5cbiAgLnByb2ZpbGUtbmFtZS1zZWN0aW9ue1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAubmFtZS1jb250YWluZXJ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG4gICAgaDJ7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB9XG4gIH1cblxuXG4gIC5wcm9maWxlLWRldGFpbHMtc2VjdGlvbntcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4ycmVtO1xuICAgIGgye1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG5cblxuICAuZmF2b3VyaXRle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gIH1cblxufVxuIl19 */";
      /***/
    },

    /***/
    79695:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cleanerprofile/cleanerprofile.page.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-row class=\"image-section\">\n        <ion-col size=\"6\">\n              <div *ngIf=\"!cleaner?.image\" class=\"thumb-image\">\n                <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n              </div>\n            <img *ngIf=\"cleaner?.image\" class=\"profile-image\" src=\"{{utilityService.uploadPath}}profile/{{cleaner?.image}}\">\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"profile-name-section\">\n            <div class=\"name-container\">\n                <h2>{{cleaner?.name}}</h2>\n            </div>\n          </div>\n        </ion-col>\n        <div class=\"favourite\">\n          <img (click)=\"unfav()\" *ngIf=\"inFav\" src=\"/assets/images/fav-fill-black.png\"/>\n          <img (click)=\"fav()\" *ngIf=\"!inFav\" src=\"/assets/images/fav-outline-black.png\"/>\n        </div>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <div class=\"profile-details-section\">\n                <h2>Qualification / Experience</h2>\n                <p [innerHTML]=\"cleaner?.qualification\"></p>\n                <h2>About cleaner</h2>\n                <p [innerHTML]=\"cleaner?.about\"></p>\n            </div>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"10\" offset=\"1\">\n          <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"bookCleaner()\">BOOK THIS CLEANER</ion-button>\n      </ion-col>\n    </ion-row>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cleanerprofile_cleanerprofile_module_ts-es5.js.map