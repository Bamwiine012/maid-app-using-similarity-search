(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_cleaneraccount_cleaneraccount_module_ts"],{

/***/ 75326:
/*!***********************************************************************!*\
  !*** ./src/app/pages/cleaneraccount/cleaneraccount-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleaneraccountPageRoutingModule": function() { return /* binding */ CleaneraccountPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cleaneraccount_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleaneraccount.page */ 46914);




const routes = [
    {
        path: '',
        component: _cleaneraccount_page__WEBPACK_IMPORTED_MODULE_0__.CleaneraccountPage
    }
];
let CleaneraccountPageRoutingModule = class CleaneraccountPageRoutingModule {
};
CleaneraccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CleaneraccountPageRoutingModule);



/***/ }),

/***/ 43043:
/*!***************************************************************!*\
  !*** ./src/app/pages/cleaneraccount/cleaneraccount.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleaneraccountPageModule": function() { return /* binding */ CleaneraccountPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cleaneraccount_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleaneraccount-routing.module */ 75326);
/* harmony import */ var _cleaneraccount_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cleaneraccount.page */ 46914);







let CleaneraccountPageModule = class CleaneraccountPageModule {
};
CleaneraccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cleaneraccount_routing_module__WEBPACK_IMPORTED_MODULE_0__.CleaneraccountPageRoutingModule
        ],
        declarations: [_cleaneraccount_page__WEBPACK_IMPORTED_MODULE_1__.CleaneraccountPage]
    })
], CleaneraccountPageModule);



/***/ }),

/***/ 46914:
/*!*************************************************************!*\
  !*** ./src/app/pages/cleaneraccount/cleaneraccount.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleaneraccountPage": function() { return /* binding */ CleaneraccountPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cleaneraccount_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cleaneraccount.page.html */ 92134);
/* harmony import */ var _cleaneraccount_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cleaneraccount.page.scss */ 87001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/events.service */ 80106);
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local.service */ 85298);
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest.service */ 43006);
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utility.service */ 67278);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/camera */ 37673);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 39075);













let CleaneraccountPage = class CleaneraccountPage {
    constructor(localService, restService, utilityService, eventsService, router, activatedRoute, actionSheetCtrl, transfer, sanitizer) {
        this.localService = localService;
        this.restService = restService;
        this.utilityService = utilityService;
        this.eventsService = eventsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.actionSheetCtrl = actionSheetCtrl;
        this.transfer = transfer;
        this.sanitizer = sanitizer;
        this.lastImage = null;
        this.address = '';
        this.postcode = '';
        this.cleaner = {};
        this.oldpass = '';
        this.newpass = '';
        this.loggedCleaner = this.localService.getCleaner();
        this.cleaner = this.loggedCleaner;
        this.distanceType = this.localService.getSettings().distance_type;
        // get cleaner updated data
        this.restService.getData('cleaner/get/' + this.loggedCleaner.id).subscribe((data) => {
            this.localService.setCleaner(data);
            this.loggedCleaner = data;
            this.cleaner = data;
            // auto select the distance making the sistance as string
            this.cleaner.distance = this.cleaner.distance.toString();
        }, (err) => { });
    }
    ngOnInit() { }
    openNotifications() {
        this.router.navigate(['/cleanernotifications']);
    }
    // image uploading section =========================
    presentActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Select Image Source',
                buttons: [
                    {
                        text: 'Select from Library',
                        handler: () => {
                            this.takePicture(_capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraSource.Photos);
                        },
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.takePicture(_capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraSource.Camera);
                        },
                    },
                ],
            });
            actionSheet.present();
        });
    }
    takePicture(sourceType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // Create options for the Camera Dialog
            const options = {
                quality: 90,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraResultType.Uri,
                source: sourceType,
            };
            this.lastImage = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.Camera.getPhoto(options);
            this.uploadImage(this.loggedCleaner.id);
        });
    }
    uploadImage(cleanerId) {
        const options = {
            fileKey: 'image',
            fileName: `file-${new Date().getTime()}.jpg`,
            chunkedMode: false,
            mimeType: 'multipart/form-data',
            params: {
                fileName: `file-${new Date().getTime()}.jpg`,
                image: `file-${new Date().getTime()}.jpg`,
            },
        };
        const fileTransfer = this.transfer.create();
        this.utilityService.loadingOpen('Uploading...');
        fileTransfer
            .upload(this.lastImage.path, this.restService.baseURL + 'cleaner/update_cleaner_image/' + cleanerId, options)
            .then((data) => {
            this.utilityService.loadingClose();
            console.log(data);
            // clear the last data
            this.lastImage = null;
            // update the loggedCleaner
            const response = JSON.parse(data.response);
            this.localService.setCleaner(response);
            this.loggedCleaner = response;
            // update menu data
            this.updateMenuByEvents();
        }, (err) => {
            console.log(err);
            this.utilityService.loadingClose();
        });
    }
    updateMenuByEvents() {
        this.eventsService.publish('menu', 'cleaner');
    }
    // new update
    updateProfile() {
        const updateData = {
            id: this.cleaner.id,
            name: this.cleaner.name,
            phone: this.cleaner.phone,
            address: this.cleaner.address,
            postcode: this.cleaner.postcode,
            distance: this.cleaner.distance,
            about: this.cleaner.about,
            qualification: this.cleaner.qualification,
        };
        if (this.cleaner.name.length < 2) {
            return this.utilityService.openAlerts('Oops!', 'Name required.', 'ok');
        }
        if (this.cleaner.phone) {
            if (this.cleaner.phone.length < 8) {
                return this.utilityService.openAlerts('Oops!', 'Valid mobile number required.', 'ok');
            }
        }
        else {
            // phone null
            delete updateData.phone;
        }
        if (this.cleaner.address) {
            if (this.cleaner.address.length < 5) {
                return this.utilityService.openAlerts('Oops!', 'Valid address required.', 'ok');
            }
        }
        else {
            // address null
            delete updateData.address;
        }
        if (this.cleaner.postcode) {
            if (this.cleaner.postcode.length < 2) {
                return this.utilityService.openAlerts('Oops!', 'Valid postcode required.', 'ok');
            }
        }
        else {
            // postcode null
            delete updateData.postcode;
        }
        if (this.cleaner.distance) {
            if (this.cleaner.distance < 5) {
                return this.utilityService.openAlerts('Oops!', 'Minimum 5 miles distance required.', 'ok');
            }
        }
        else {
            // distance null
            delete updateData.distance;
        }
        if (this.cleaner.about) {
            if (this.cleaner.about.length < 10) {
                return this.utilityService.openAlerts('Oops!', 'Enter a valid details about yourself.', 'ok');
            }
        }
        else {
            // about null
            delete updateData.about;
        }
        if (this.cleaner.qualification && this.cleaner.qualification !== '') {
            if (this.cleaner.qualification.length < 1) {
                return this.utilityService.openAlerts('Oops!', 'Enter a valid qualification.', 'ok');
            }
        }
        else {
            // about null
            delete updateData.qualification;
        }
        this.utilityService.loadingOpen('Updating...');
        this.restService.postData('cleaner/update_profile', updateData).subscribe((data) => {
            this.loggedCleaner = data;
            this.localService.setCleaner(data);
            this.utilityService.loadingClose();
            this.utilityService.openAlerts('Done!', 'Successfully updated.', 'ok');
        }, (err) => {
            this.utilityService.loadingClose();
            this.utilityService.openAlerts('Oops!', 'Error upating.', 'ok');
        });
    }
    updatePassword() {
        this.utilityService.loadingOpen('Updating...');
        if (this.oldpass === '' || this.newpass === '') {
            return this.utilityService.openAlerts('Oops!', 'Both old & new password required.', 'ok');
        }
        if (this.newpass.length < 6) {
            return this.utilityService.openAlerts('Oops!', 'New password must be 6 characters.', 'ok');
        }
        this.restService
            .postData('cleaner/update_profile', {
            id: this.loggedCleaner.id,
            newpassword: this.newpass,
            oldpassword: this.oldpass,
        })
            .subscribe((data) => {
            this.utilityService.loadingClose();
            this.utilityService.openAlerts('Done!', 'Password updated.', 'ok');
        }, (err) => {
            this.utilityService.loadingClose();
            this.utilityService.openAlerts('Oops!', err.error.error, 'ok');
        });
    }
};
CleaneraccountPage.ctorParameters = () => [
    { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__.RestService },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__.UtilityService },
    { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__.FileTransfer },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer }
];
CleaneraccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-cleaneraccount',
        template: _raw_loader_cleaneraccount_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cleaneraccount_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CleaneraccountPage);



/***/ }),

/***/ 87001:
/*!***************************************************************!*\
  !*** ./src/app/pages/cleaneraccount/cleaneraccount.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  text-transform: uppercase;\n}\nion-content ion-item {\n  font-size: 0.8rem;\n  border-bottom: 1px solid var(--ion-color-light);\n}\nion-content h2 {\n  text-align: center;\n  color: var(--ion-color-dark);\n  font-size: 1rem;\n  margin: 15px auto;\n}\nion-content .address-heading {\n  text-align: center;\n  color: var(--ion-color-dark);\n  font-size: 1rem;\n  margin: 15px auto 5px;\n  font-weight: 500;\n}\nion-content .image-container {\n  margin: auto;\n  text-align: center;\n}\nion-content .image {\n  height: 125px;\n  width: 125px;\n  border-radius: 50%;\n}\nion-content .details {\n  margin: 15px auto;\n  font-weight: 400;\n  color: var(--ion-color-gray);\n}\nion-content .details ion-row {\n  font-weight: 400;\n  color: var(--ion-color-dark);\n  font-size: 0.8rem;\n}\nion-content .editicon {\n  height: 20px;\n  vertical-align: middle;\n}\nion-content ion-item:first-child {\n  border-top: none !important;\n}\nion-content .uploader {\n  position: relative;\n}\nion-content .uploader img {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  height: 30px;\n}\nion-content .resetinput {\n  border: 1px solid #ebebee;\n  width: 100%;\n  padding: 12px;\n  margin-top: 5px;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  text-align: center;\n}\nion-content #addressOpen {\n  display: none;\n}\nion-content .addressInput {\n  width: 100%;\n  border: 1px solid var(--ion-color-light);\n  padding: 10px;\n  display: block;\n  margin: 5px auto;\n  background-clip: padding-box;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\nion-content .placeHint {\n  border: 1px solid #ebebee;\n  background: #fafafa;\n  position: relative;\n  z-index: 99;\n  height: auto;\n}\nion-content .no-padding {\n  padding: 0;\n}\nion-content .cleaner-btn {\n  font-size: 14px;\n}\nion-content .miles {\n  text-transform: none;\n  margin-bottom: 10px;\n  font-size: 12px;\n  display: block;\n}\nion-content .miles-container {\n  padding-left: 0;\n}\nion-content .miles-container .item-inner {\n  padding-right: 0 !important;\n}\nion-content .miles-container .select-miles {\n  width: 100%;\n  max-width: 100%;\n  border: 1px solid var(--ion-color-light);\n  color: var(--ion-color-dark);\n  font-size: 11px;\n  border-radius: 5px;\n}\nion-content .textarea {\n  text-transform: none;\n  min-height: 100px;\n  background: transparent !important;\n}\nion-content ion-select {\n  --background: transparent !important;\n  background-color: transparent !important;\n  border: 1px solid var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsZWFuZXJhY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLHlCQUFBO0FBQ0g7QUFDRTtFQUVFLGlCQUFBO0VBQ0EsK0NBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBRko7QUFJRTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUtFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBSEo7QUFJSTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQUZOO0FBTUU7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QUFKSjtBQU9FO0VBQ0UsMkJBQUE7QUFMSjtBQVFFO0VBQ0Usa0JBQUE7QUFOSjtBQU9JO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFMUjtBQVVFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVJKO0FBY0U7RUFDRSxhQUFBO0FBWko7QUFnQkU7RUFDRSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFHQSxrQkFBQTtFQUNBLG1CQUFBO0FBaEJKO0FBbUJFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFqQko7QUFtQkU7RUFDRSxVQUFBO0FBakJKO0FBb0JFO0VBQ0UsZUFBQTtBQWxCSjtBQXdCRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXRCSjtBQXlCRTtFQUNFLGVBQUE7QUF2Qko7QUF5Qkk7RUFDRSwyQkFBQTtBQXZCTjtBQTBCSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXhCTjtBQTZCRTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtBQTNCSjtBQThCRTtFQUNDLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtBQTVCSCIsImZpbGUiOiJjbGVhbmVyYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gIGlvbi1pdGVte1xuICAgIC8vIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB9XG4gIGgye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgfVxuXG4gIC5hZGRyZXNzLWhlYWRpbmd7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbjogMTVweCBhdXRvIDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLmltYWdlLWNvbnRhaW5lcntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pbWFnZXtcbiAgICAgIGhlaWdodDogMTI1cHg7XG4gICAgICB3aWR0aDogMTI1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAuZGV0YWlsc3tcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JheSk7XG4gICAgaW9uLXJvd3tcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgfVxuICB9XG5cbiAgLmVkaXRpY29ue1xuICAgIGhlaWdodDogMjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgaW9uLWl0ZW06Zmlyc3QtY2hpbGR7XG4gICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnVwbG9hZGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpbWd7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgfVxuXG5cbiAgLnJlc2V0aW5wdXR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuXG5cbiAgLy8gYWRkcmVzcyBvcGVuIGNsb3NlXG4gICNhZGRyZXNzT3BlbntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cblxuICAuYWRkcmVzc0lucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG5cbiAgICAvLyBib3JkZXIgcmFkaXVzIGZpeFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLnBsYWNlSGludHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmVlO1xuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAubm8tcGFkZGluZ3tcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmNsZWFuZXItYnRue1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG5cblxuICAvLyBtaWxlcyBzZWxlY3RcbiAgLm1pbGVze1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLm1pbGVzLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgICAuaXRlbS1pbm5lcntcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuc2VsZWN0LW1pbGVze1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgfVxuXG4gIC50ZXh0YXJlYXtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXNlbGVjdHtcbiAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 92134:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cleaneraccount/cleaneraccount.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">My Account</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotifications()\">\n        <ion-icon class=\"notification-icon\" name=\"notifications-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div class=\"image-container\">\n        <div *ngIf=\"!loggedCleaner?.image\" class=\"thumb-image central\" (click)=\"presentActionSheet()\">\n            <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n        </div>\n        <div class=\"image-container\" (click)=\"presentActionSheet()\">\n          <img *ngIf=\"loggedCleaner?.image\" class=\"image\" src=\"{{utilityService.uploadPath}}profile/{{loggedCleaner?.image}}\"/>\n        </div>\n    </div>\n    <div class=\"details\">\n          <ion-row>\n              <ion-col size=\"12\" class=\"ion-text-center\">\n                  <input class=\"addressInput\" type=\"text\" placeholder=\"Name\" [(ngModel)]=\"cleaner.name\">\n                  <input class=\"addressInput\" type=\"tel\" placeholder=\"Mobile\" [(ngModel)]=\"cleaner.phone\">\n              </ion-col>\n          </ion-row>\n\n          <ion-row>\n              <ion-col size=\"12\" class=\"ion-text-center\">\n                <input class=\"addressInput\" type=\"text\" placeholder=\"Address\" [(ngModel)]=\"cleaner.address\">\n                <input class=\"addressInput\" type=\"text\" placeholder=\"Postcode\" [(ngModel)]=\"cleaner.postcode\" (ngModelChange)=\"cleaner.postcode = $event.toLocaleUpperCase()\">\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col size=\"12\">\n                <ion-label class=\"miles\">WORKING DISTANCE IN {{distanceType.toLocaleUpperCase()}}S</ion-label>\n                <ion-select class=\"select-miles\" [(ngModel)]=\"cleaner.distance\" interface=\"action-sheet\" placeholder=\"SELECT DISTANCE\">\n                  <ion-select-option value=\"5\">5 {{distanceType}}s</ion-select-option>\n                  <ion-select-option value=\"10\">10 {{distanceType}}s</ion-select-option>\n                  <ion-select-option value=\"15\">15 {{distanceType}}s</ion-select-option>\n                  <ion-select-option value=\"20\">20 {{distanceType}}s</ion-select-option>\n                  <ion-select-option value=\"25\">25 {{distanceType}}s</ion-select-option>\n                  <ion-select-option value=\"30\">30 {{distanceType}}s</ion-select-option>\n                  <ion-select-option value=\"35\">35 {{distanceType}}s</ion-select-option>\n                  <ion-select-option value=\"40\">40 {{distanceType}}s</ion-select-option>\n                  <ion-select-option value=\"45\">45 {{distanceType}}s</ion-select-option>\n                  <ion-select-option value=\"50\">50 {{distanceType}}s</ion-select-option>\n                </ion-select>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n                <ion-textarea class=\"textarea\" rows=\"5\" placeholder=\"About\" [(ngModel)]=\"cleaner.about\"></ion-textarea>\n                <ion-textarea class=\"textarea\" rows=\"5\" placeholder=\"Qualification\" [(ngModel)]=\"cleaner.qualification\"></ion-textarea>\n                <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"updateProfile()\">UPDATE PROFILE</ion-button>\n            </ion-col>\n          </ion-row>\n        <hr/>\n\n        <ion-row>\n            <ion-col size=\"12\" class=\"ion-text-center\">\n                <input class=\"addressInput\" type=\"password\" placeholder=\"Old Password\" [(ngModel)]=\"oldpass\">\n                <input class=\"addressInput\" type=\"password\" placeholder=\"New Password\" [(ngModel)]=\"newpass\">\n                <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"updatePassword()\">UPDATE PASSWORD</ion-button>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cleaneraccount_cleaneraccount_module_ts-es2015.js.map