(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_favourites_favourites_module_ts"],{

/***/ 79365:
/*!***************************************************************!*\
  !*** ./src/app/pages/favourites/favourites-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritesPageRoutingModule": function() { return /* binding */ FavouritesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _favourites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourites.page */ 60977);




const routes = [
    {
        path: '',
        component: _favourites_page__WEBPACK_IMPORTED_MODULE_0__.FavouritesPage
    }
];
let FavouritesPageRoutingModule = class FavouritesPageRoutingModule {
};
FavouritesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavouritesPageRoutingModule);



/***/ }),

/***/ 56677:
/*!*******************************************************!*\
  !*** ./src/app/pages/favourites/favourites.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritesPageModule": function() { return /* binding */ FavouritesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _favourites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourites-routing.module */ 79365);
/* harmony import */ var _favourites_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites.page */ 60977);







let FavouritesPageModule = class FavouritesPageModule {
};
FavouritesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _favourites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavouritesPageRoutingModule
        ],
        declarations: [_favourites_page__WEBPACK_IMPORTED_MODULE_1__.FavouritesPage]
    })
], FavouritesPageModule);



/***/ }),

/***/ 60977:
/*!*****************************************************!*\
  !*** ./src/app/pages/favourites/favourites.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritesPage": function() { return /* binding */ FavouritesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_favourites_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./favourites.page.html */ 94763);
/* harmony import */ var _favourites_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites.page.scss */ 26261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local.service */ 85298);
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/rest.service */ 43006);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utility.service */ 67278);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/events.service */ 80106);



/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */






let FavouritesPage = class FavouritesPage {
    constructor(localService, restService, utilityService, eventsService, router) {
        this.localService = localService;
        this.restService = restService;
        this.utilityService = utilityService;
        this.eventsService = eventsService;
        this.router = router;
        this.favourites = [];
        this.pasts = [];
        this.segment = 'favourite';
        this.loggedUser = this.localService.getUser();
        this.getData();
    }
    ngOnInit() { }
    remove(cleanerId) {
        // unfavourite
        this.restService
            .postData('favourite/delete', {
            cleaner_id: cleanerId,
            user_id: this.loggedUser.id,
        })
            .subscribe((data) => {
            // update favourites
            this.getData();
        }, (err) => { });
    }
    add(cleanerId) {
        // unfavourite
        this.restService
            .postData('favourite/create', {
            cleaner_id: cleanerId,
            user_id: this.loggedUser.id,
        })
            .subscribe((data) => {
            // update favourites
            this.getData();
        }, (err) => { });
    }
    getData() {
        this.utilityService.loadingOpen('Loading...');
        this.restService.getData('favourite/get/' + this.loggedUser.id).subscribe((data) => {
            this.favourites = data.favourite;
            this.pasts = data.past;
            this.utilityService.loadingClose();
        }, (err) => {
            this.utilityService.loadingClose();
        });
    }
    cleaner(id) {
        this.router.navigate(['/cleanerprofile'], {
            queryParams: {
                id: id
            }
        });
    }
};
FavouritesPage.ctorParameters = () => [
    { type: _services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService },
    { type: _services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__.EventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
FavouritesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-favourites',
        template: _raw_loader_favourites_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_favourites_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FavouritesPage);



/***/ }),

/***/ 26261:
/*!*******************************************************!*\
  !*** ./src/app/pages/favourites/favourites.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .favourites-buttons-container {\n  margin: 15px auto;\n}\nion-content ion-list ion-item:first-child {\n  border-top: none !important;\n}\nion-content .central-page {\n  margin-top: 20px;\n}\nion-content .fav {\n  font-size: 20px !important;\n}\nion-content .details {\n  color: var(--ion-color-dark);\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 0.9rem;\n  line-height: 1rem;\n}\nion-content .details .name {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 0.8rem;\n}\nion-content .details .address {\n  white-space: normal !important;\n  padding-right: 10px;\n  font-size: 0.8rem;\n  margin-top: 5px;\n  font-weight: 400;\n}\nion-content .thumb-image {\n  height: 38px;\n  width: 38px;\n  line-height: 42px;\n}\nion-content .thumb-image .title {\n  font-size: 0.5rem;\n}\nion-content .thumb-image .thumb-icon {\n  font-size: 1.2rem !important;\n  color: #cdcdcd;\n  text-align: center;\n  line-height: 50px;\n}\nion-item-options ion-item {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUFBSjtBQUdFO0VBQ0ksMkJBQUE7QUFETjtBQUlFO0VBQ0UsZ0JBQUE7QUFGSjtBQUtFO0VBQ0UsMEJBQUE7QUFISjtBQU1FO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSko7QUFNSTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQUpOO0FBT0k7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFMTjtBQWNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVpKO0FBYUk7RUFDRSxpQkFBQTtBQVhOO0FBYUk7RUFDRSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBWE47QUFrQkU7RUFDRSxpQkFBQTtBQWZKIiwiZmlsZSI6ImZhdm91cml0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAuZmF2b3VyaXRlcy1idXR0b25zLWNvbnRhaW5lcntcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgfVxuXG4gIGlvbi1saXN0IGlvbi1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jZW50cmFsLXBhZ2V7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4gIC5mYXZ7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZGV0YWlsc3tcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XG5cbiAgICAubmFtZXtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgfVxuXG4gICAgLmFkZHJlc3N7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgfVxuICB9XG5cbiBpb24tYXZhdGFye1xuIH1cblxuXG4gIC50aHVtYi1pbWFnZXtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XG4gICAgLnRpdGxle1xuICAgICAgZm9udC1zaXplOiAwLjVyZW07XG4gICAgfVxuICAgIC50aHVtYi1pY29ue1xuICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiBkYXJrZW4oI2U2ZTZlNiwgMTAlKTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgfVxufVxuXG5cbmlvbi1pdGVtLW9wdGlvbnN7XG4gIGlvbi1pdGVte1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 94763:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favourites/favourites.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Favourites</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <div class=\"favourites-buttons-container\">\n      <ion-segment [(ngModel)]=\"segment\">\n        <ion-segment-button value=\"favourite\">\n          Favourite Cleaners\n        </ion-segment-button>\n        <ion-segment-button value=\"past\">\n          Past Cleaners\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <ion-row>\n        <ion-col>\n            <div class=\"hr\"></div>\n        </ion-col>\n    </ion-row>\n\n\n  <div [ngSwitch]=\"segment\">\n    <ion-list *ngSwitchCase=\"'favourite'\">\n      <ion-item-sliding *ngFor=\"let favourite of favourites\">\n        <ion-item class=\"details\" (click)=\"cleaner(favourite?.id)\">\n          <ion-avatar slot=\"start\">\n            <img *ngIf=\"favourite?.image\" src=\"{{utilityService.uploadPath}}profile/{{favourite?.image}}\">\n            <div *ngIf=\"!favourite?.image\" class=\"thumb-image\">\n                <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n            </div>\n          </ion-avatar>\n          <div class=\"name\">{{favourite?.name}}</div>\n        </ion-item>\n        <ion-item-options side=\"end\" (click)=\"remove(favourite?.id)\">\n          <ion-icon name=\"trash-outline\" color=\"danger\"></ion-icon>\n        </ion-item-options>\n      </ion-item-sliding>\n      <ion-item>\n        <div class=\"central-page\" *ngIf=\"favourites.length === 0\">\n          <div class=\"notfound\">No results found</div>\n        </div>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngSwitchCase=\"'past'\">\n      <ion-item class=\"details\" *ngFor=\"let past of pasts\">\n        <ion-avatar (click)=\"cleaner(past?.id)\" slot=\"start\">\n          <img *ngIf=\"past?.image\" src=\"{{utilityService.uploadPath}}profile/{{past?.image}}\">\n          <div *ngIf=\"!past?.image\" class=\"thumb-image\">\n              <ion-icon class=\"thumb-icon\" name=\"person\"></ion-icon>\n          </div>\n        </ion-avatar>\n        <div (click)=\"cleaner(past?.id)\" class=\"name\">{{past?.name}}</div>\n        <ion-icon slot=\"end\" *ngIf=\"!past.is_favourite\" class=\"fav\" (click)=\"add(past.id)\" name=\"heart-outline\"></ion-icon>\n        <ion-icon slot=\"end\" *ngIf=\"past.is_favourite\" class=\"fav\" (click)=\"remove(past.id)\" name=\"heart\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <div class=\"central-page\" *ngIf=\"pasts.length === 0\">\n          <div class=\"notfound\">No results found</div>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_favourites_favourites_module_ts-es2015.js.map