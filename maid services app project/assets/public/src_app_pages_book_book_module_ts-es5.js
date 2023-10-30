(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_book_book_module_ts"], {
    /***/
    21214:
    /*!***************************************************!*\
      !*** ./src/app/pages/book/book-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookPageRoutingModule": function BookPageRoutingModule() {
          return (
            /* binding */
            _BookPageRoutingModule
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


      var _book_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./book.page */
      87921);

      var routes = [{
        path: '',
        component: _book_page__WEBPACK_IMPORTED_MODULE_0__.BookPage
      }];

      var _BookPageRoutingModule = /*#__PURE__*/_createClass(function BookPageRoutingModule() {
        _classCallCheck(this, BookPageRoutingModule);
      });

      _BookPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BookPageRoutingModule);
      /***/
    },

    /***/
    70675:
    /*!*******************************************!*\
      !*** ./src/app/pages/book/book.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookPageModule": function BookPageModule() {
          return (
            /* binding */
            _BookPageModule
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


      var _book_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./book-routing.module */
      21214);
      /* harmony import */


      var _book_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./book.page */
      87921);

      var _BookPageModule = /*#__PURE__*/_createClass(function BookPageModule() {
        _classCallCheck(this, BookPageModule);
      });

      _BookPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _book_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookPageRoutingModule],
        declarations: [_book_page__WEBPACK_IMPORTED_MODULE_1__.BookPage]
      })], _BookPageModule);
      /***/
    },

    /***/
    87921:
    /*!*****************************************!*\
      !*** ./src/app/pages/book/book.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookPage": function BookPage() {
          return (
            /* binding */
            _BookPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_book_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./book.page.html */
      37576);
      /* harmony import */


      var _book_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./book.page.scss */
      25985);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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

      var _BookPage = /*#__PURE__*/function () {
        function BookPage(localService, restService, utilityService, eventsService, router, activatedRoute, iab) {
          var _this = this;

          _classCallCheck(this, BookPage);

          this.localService = localService;
          this.restService = restService;
          this.utilityService = utilityService;
          this.eventsService = eventsService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.iab = iab;
          this.minDiffHours = 12;
          this.bookingdata = {
            frequency: '',
            hours: '',
            bedrooms: '',
            bathrooms: ''
          };
          this.slideOptions = {
            initialSlide: 0,
            autoplay: true,
            loop: true,
            speed: 2000,
            effect: 'fade'
          };
          this.showBanner = false;
          this.banners = [];
          this.loggedUser = this.localService.getUser();

          if (this.localService.getSettings().hasOwnProperty('booking_min_hours')) {
            this.minDiffHours = this.localService.getSettings().booking_min_hours;
          }

          if (this.localService.getSettings().hasOwnProperty('show_banner_users') && this.localService.getSettings().show_banner_users === '1') {
            this.restService.getData('user/banners').subscribe(function (data) {
              _this.banners = data;

              if (data.length > 0) {
                _this.showBanner = true;
              }
            }, function (err) {});
          } // receive parameters | get cleaner id


          this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.cleaner_id) {
              _this.bookingdata.cleaner_id = params.cleaner_id;
            }
          }); // auto fill adress & postcode

          this.bookingdata.address = this.loggedUser.address;
          this.bookingdata.postcode = this.loggedUser.postcode;
          this.bookingdata.house_number = this.loggedUser.house_number; // calculate minimum datetime

          this.today = new Date();
          this.maxdate = this.maxDate(this.today);
          this.mindate = this.minDate(this.today); // override min/max time

          this.mintime = '06:00';
          this.maxtime = '20:00';
        }

        _createClass(BookPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            console.log('ionViewDidLoad BookPage');
          }
        }, {
          key: "maxDate",
          value: function maxDate(date) {
            var d = new Date(date);
            var day = '' + d.getDate();
            var month = '' + (d.getMonth() + 1);
            var year = d.getFullYear() + 1;

            if (month.length < 2) {
              month = '0' + month;
            }

            if (day.length < 2) {
              day = '0' + day;
            }

            return [year, month, day].join('-');
          }
        }, {
          key: "minDate",
          value: function minDate(date) {
            var d = new Date(date);
            var day = '' + d.getDate();
            var month = '' + (d.getMonth() + 1);
            var year = d.getFullYear();

            if (month.length < 2) {
              month = '0' + month;
            }

            if (day.length < 2) {
              day = '0' + day;
            }

            return [year, month, day].join('-');
          }
        }, {
          key: "next",
          value: function next() {
            if (!this.bookingdata.house_number || this.bookingdata.house_number === '') {
              return this.utilityService.openAlerts('Oops', 'Flat / House Number required.', 'ok');
            }

            if (!this.bookingdata.address || this.bookingdata.address === '') {
              return this.utilityService.openAlerts('Oops', 'Valid address required.', 'ok');
            }

            if (!this.bookingdata.postcode || this.bookingdata.postcode === '') {
              return this.utilityService.openAlerts('Oops', 'Valid postcode required.', 'ok');
            }

            if (!this.date || this.date === '') {
              return this.utilityService.openAlerts('Oops', 'Date required.', 'ok');
            }

            if (!this.time || this.time === '') {
              return this.utilityService.openAlerts('Oops', 'Time required.', 'ok');
            }

            if (!this.bookingdata.frequency || this.bookingdata.frequency === '') {
              return this.utilityService.openAlerts('Oops', 'Select Frequency.', 'ok');
            }

            if (!this.bookingdata.hours || this.bookingdata.hours === '') {
              return this.utilityService.openAlerts('Oops', 'Select Hours.', 'ok');
            }

            if (!this.bookingdata.bedrooms || this.bookingdata.bedrooms === '') {
              return this.utilityService.openAlerts('Oops', 'Select Bedrooms.', 'ok');
            }

            if (!this.bookingdata.bathrooms || this.bookingdata.bathrooms === '') {
              return this.utilityService.openAlerts('Oops', 'Select Bathrooms.', 'ok');
            } // format date time as per ionic5


            this.bookingdata.date = this.date.split('T')[0];
            var time = this.time.split('T')[1].split('.')[0].split(':');
            this.bookingdata.time = time[0] + ':' + time[1]; // validate time after amount of hours

            var currentTimeString = new Date().toLocaleString('en-US', {});
            console.log(currentTimeString);
            var currentTime = new Date(currentTimeString).getTime();
            var selectedTimeString = new Date(this.bookingdata.date + 'T' + this.bookingdata.time).toLocaleString('en-US', {});
            var selectedTime = new Date(selectedTimeString).getTime();
            var difference = selectedTime - currentTime;
            console.log(currentTime, selectedTime, difference);

            if (selectedTime - currentTime < this.minDiffHours * 3600 * 1000) {
              return this.utilityService.openAlerts('Oops', 'The earliest you can book is ' + this.minDiffHours + ' hours before the job starts.', 'ok');
            }

            this.router.navigate(['/customise'], {
              queryParams: {
                data: JSON.stringify(this.bookingdata)
              }
            });
          }
        }, {
          key: "openLink",
          value: function openLink(link) {
            if (link && link !== '' && link !== '#') {
              this.iab.create(link, '_blank', {
                location: 'no',
                hardwareback: 'no',
                hidenavigationbuttons: 'yes',
                hideurlbar: 'yes',
                fullscreen: 'yes',
                zoom: 'no',
                clearcache: 'yes',
                toolbar: 'yes'
              });
            }
          }
        }]);

        return BookPage;
      }();

      _BookPage.ctorParameters = function () {
        return [{
          type: _services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService
        }, {
          type: _services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__.EventsService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser
        }];
      };

      _BookPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-book',
        template: _raw_loader_book_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_book_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _BookPage);
      /***/
    },

    /***/
    25985:
    /*!*******************************************!*\
      !*** ./src/app/pages/book/book.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\nion-content .new-booking-container {\n  margin: auto 15px;\n}\nion-content .new-booking-container h6 {\n  font-size: 1rem;\n  text-transform: uppercase;\n  font-weight: 400;\n}\nion-content .new-booking-container h6:first-child {\n  margin-top: 0 !important;\n}\nion-content .new-booking-container ion-item {\n  border: 0.6px solid var(--ion-color-border);\n  border-bottom: 0.6px solid var(--ion-color-border) !important;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\nion-content .new-booking-container ion-item:last-child {\n  margin-bottom: 0px;\n}\nion-content .new-booking-container ion-input {\n  margin-bottom: auto;\n  background-color: transparent !important;\n  vertical-align: middle;\n}\nion-content .new-booking-container ion-icon {\n  vertical-align: middle;\n  font-size: 1.5rem !important;\n  margin-right: 10px;\n}\nion-content .new-booking-container ion-datetime {\n  text-align: left;\n  --padding-start: 15px;\n  font-size: 0.7rem;\n}\nion-content .new-booking-container ion-select {\n  text-align: left;\n  --padding-start: 15px;\n  font-size: 0.7rem;\n  background-color: transparent !important;\n  width: 100%;\n  margin-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDSTtFQUNFLGlCQUFBO0FBQ047QUFBTTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBRVI7QUFEUTtFQUNFLHdCQUFBO0FBR1Y7QUFBTTtFQUNFLDJDQUFBO0VBQ0EsNkRBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNFLGtCQUFBO0FBR1Y7QUFBTTtFQUNFLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtBQUVSO0FBQU07RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUNNO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFFTTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBQVIiLCJmaWxlIjoiYm9vay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG5cbiAgICAubmV3LWJvb2tpbmctY29udGFpbmVye1xuICAgICAgbWFyZ2luOiBhdXRvIDE1cHg7XG4gICAgICBoNntcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW9uLWl0ZW17XG4gICAgICAgIGJvcmRlcjogMC42cHggc29saWQgdmFyKC0taW9uLWNvbG9yLWJvcmRlcik7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuNnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ib3JkZXIpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW9uLWlucHV0e1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuICAgICAgaW9uLWljb257XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cblxuICAgICAgaW9uLWRhdGV0aW1le1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgfVxuXG4gICAgICBpb24tc2VsZWN0e1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    37576:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book/book.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-toggle><ion-icon name=\"menu-outline\"></ion-icon></ion-menu-toggle>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"banner-container\" *ngIf=\"showBanner\">\n    <ion-slides [options]=\"slideOptions\">\n        <ion-slide *ngFor=\"let banner of banners\" (click)='openLink(banner.link)'>\n            <img src=\"{{utilityService.uploadPath}}/banner/{{banner.image}}\">\n        </ion-slide>\n    </ion-slides>\n  </div>\n  <div class=\"new-booking-container\">\n    <h6 class=\"ion-text-center\">Start a new booking</h6>\n    <ion-list>\n      <ion-item>\n        <ion-input [(ngModel)]=\"bookingdata.house_number\" placeholder=\"Flat / House Number\"></ion-input>\n        <ion-icon name=\"home-outline\" color=\"base\" slot=\"start\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-input [(ngModel)]=\"bookingdata.address\" placeholder=\"Address\"></ion-input>\n        <ion-icon name=\"location-outline\" color=\"base\" slot=\"start\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-input [(ngModel)]=\"bookingdata.postcode\" placeholder=\"Postcode\"></ion-input>\n        <ion-icon name=\"man-outline\" color=\"base\" slot=\"start\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-datetime displayFormat=\"DDD, DD-MMM-YYYY\" min=\"{{mindate}}\" max=\"{{maxdate}}\" [(ngModel)]=\"date\" placeholder=\"Date\"></ion-datetime>\n        <ion-icon name=\"calendar-outline\" color=\"base\" slot=\"start\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-datetime displayFormat=\"HH:mm\" minuteValues=\"00,30\" min=\"{{mintime}}\" max=\"{{maxtime}}\" [(ngModel)]=\"time\" placeholder=\"Time\"></ion-datetime>\n        <ion-icon name=\"time-outline\" color=\"base\" slot=\"start\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-select placeholder=\"Frequency\" [(ngModel)]=\"bookingdata.frequency\">\n          <ion-select-option value=\"oneoff\">{{utilityService.frequencies.oneoff}}</ion-select-option>\n          <ion-select-option value=\"daily\">{{utilityService.frequencies.daily}}</ion-select-option>\n          <ion-select-option value=\"weekly\">{{utilityService.frequencies.weekly}}</ion-select-option>\n          <ion-select-option value=\"biweekly\">{{utilityService.frequencies.biweekly}}</ion-select-option>\n          <ion-select-option value=\"monthly\">{{utilityService.frequencies.monthly}}</ion-select-option>\n        </ion-select>\n        <ion-icon name=\"infinite-outline\" color=\"base\" slot=\"start\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-select placeholder=\"Hours Required\" [(ngModel)]=\"bookingdata.hours\">\n          <ion-select-option value=\"2\">2</ion-select-option>\n          <ion-select-option value=\"3\">3</ion-select-option>\n          <ion-select-option value=\"4\">4</ion-select-option>\n          <ion-select-option value=\"5\">5</ion-select-option>\n          <ion-select-option value=\"6\">6</ion-select-option>\n          <ion-select-option value=\"7\">7</ion-select-option>\n          <ion-select-option value=\"8\">8</ion-select-option>\n          <ion-select-option value=\"9\">9</ion-select-option>\n          <ion-select-option value=\"10\">10</ion-select-option>\n        </ion-select>\n        <ion-icon name=\"alarm-outline\" color=\"base\" slot=\"start\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-select placeholder=\"Bedrooms\"  [(ngModel)]=\"bookingdata.bedrooms\">\n          <ion-select-option value=\"0\">0</ion-select-option>\n          <ion-select-option value=\"1\">1</ion-select-option>\n          <ion-select-option value=\"2\">2</ion-select-option>\n          <ion-select-option value=\"3\">3</ion-select-option>\n          <ion-select-option value=\"4\">4</ion-select-option>\n          <ion-select-option value=\"5\">5</ion-select-option>\n          <ion-select-option value=\"6\">6</ion-select-option>\n          <ion-select-option value=\"7\">7</ion-select-option>\n          <ion-select-option value=\"8\">8</ion-select-option>\n          <ion-select-option value=\"9\">9</ion-select-option>\n          <ion-select-option value=\"10\">10</ion-select-option>\n        </ion-select>\n        <ion-icon name=\"bed-outline\" color=\"base\" slot=\"start\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-select placeholder=\"Bathrooms\"  [(ngModel)]=\"bookingdata.bathrooms\">\n          <ion-select-option value=\"0\">0</ion-select-option>\n          <ion-select-option value=\"1\">1</ion-select-option>\n          <ion-select-option value=\"2\">2</ion-select-option>\n          <ion-select-option value=\"3\">3</ion-select-option>\n          <ion-select-option value=\"4\">4</ion-select-option>\n          <ion-select-option value=\"5\">5</ion-select-option>\n          <ion-select-option value=\"6\">6</ion-select-option>\n          <ion-select-option value=\"7\">7</ion-select-option>\n          <ion-select-option value=\"8\">8</ion-select-option>\n          <ion-select-option value=\"9\">9</ion-select-option>\n          <ion-select-option value=\"10\">10</ion-select-option>\n        </ion-select>\n        <ion-icon name=\"water-outline\" color=\"base\" slot=\"start\"></ion-icon>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"next()\">NEXT</ion-button>\n  </div>\n</ion-content>\n\n<!-- <ion-content class=\"ion-padding\">\n  <div class=\"book-container\">\n      <ion-row>\n          <ion-col size=\"12\">\n            <h3>Booking Details</h3>\n            <ion-input [(ngModel)]=\"bookingdata.house_number\" placeholder=\"Flat/House No.\"></ion-input>\n            <ion-input [(ngModel)]=\"bookingdata.address\" placeholder=\"Address\"></ion-input>\n            <ion-input [(ngModel)]=\"bookingdata.postcode\" placeholder=\"Postcode\"></ion-input>\n            <ion-row>\n              <ion-col size=\"6\" class=\"p-l-0\">\n                <ion-datetime displayFormat=\"DDD, DD-MMM-YYYY\" min=\"{{mindate}}\" max=\"{{maxdate}}\" [(ngModel)]=\"date\" placeholder=\"Date\"></ion-datetime>\n              </ion-col>\n              <ion-col size=\"6\" class=\"p-r-0\">\n                <ion-datetime displayFormat=\"HH:mm\" minuteValues=\"00,30\" min=\"{{mintime}}\" max=\"{{maxtime}}\" [(ngModel)]=\"time\" placeholder=\"Time\"></ion-datetime>\n              </ion-col>\n            </ion-row>\n\n            <br/>\n\n            <ion-select placeholder=\"Frequency\"  [(ngModel)]=\"bookingdata.frequency\">\n              <ion-select-option value=\"oneoff\">One off</ion-select-option>\n              <ion-select-option value=\"weekly\">Weekly</ion-select-option>\n              <ion-select-option value=\"biweekly\">Bi weekly</ion-select-option>\n              <ion-select-option value=\"monthly\">Monthly</ion-select-option>\n            </ion-select>\n\n            <ion-select placeholder=\"Hours Required\"  [(ngModel)]=\"bookingdata.hours\">\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"8\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n            </ion-select>\n\n            <ion-select placeholder=\"Bedrooms\"  [(ngModel)]=\"bookingdata.bedrooms\">\n              <ion-select-option value=\"0\">0</ion-select-option>\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"8\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n            </ion-select>\n\n            <ion-select placeholder=\"Bathrooms\"  [(ngModel)]=\"bookingdata.bathrooms\">\n              <ion-select-option value=\"0\">0</ion-select-option>\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"8\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n            </ion-select>\n\n            <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"next()\">NEXT</ion-button>\n\n          </ion-col>\n      </ion-row>\n    </div>\n</ion-content> -->\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_book_book_module_ts-es5.js.map