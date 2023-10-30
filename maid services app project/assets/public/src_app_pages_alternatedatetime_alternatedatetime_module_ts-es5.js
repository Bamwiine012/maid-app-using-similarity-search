(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_alternatedatetime_alternatedatetime_module_ts"], {
    /***/
    95438:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/alternatedatetime/alternatedatetime-routing.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AlternatedatetimePageRoutingModule": function AlternatedatetimePageRoutingModule() {
          return (
            /* binding */
            _AlternatedatetimePageRoutingModule
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


      var _alternatedatetime_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./alternatedatetime.page */
      88844);

      var routes = [{
        path: '',
        component: _alternatedatetime_page__WEBPACK_IMPORTED_MODULE_0__.AlternatedatetimePage
      }];

      var _AlternatedatetimePageRoutingModule = /*#__PURE__*/_createClass(function AlternatedatetimePageRoutingModule() {
        _classCallCheck(this, AlternatedatetimePageRoutingModule);
      });

      _AlternatedatetimePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AlternatedatetimePageRoutingModule);
      /***/
    },

    /***/
    87249:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/alternatedatetime/alternatedatetime.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AlternatedatetimePageModule": function AlternatedatetimePageModule() {
          return (
            /* binding */
            _AlternatedatetimePageModule
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


      var _alternatedatetime_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./alternatedatetime-routing.module */
      95438);
      /* harmony import */


      var _alternatedatetime_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./alternatedatetime.page */
      88844);

      var _AlternatedatetimePageModule = /*#__PURE__*/_createClass(function AlternatedatetimePageModule() {
        _classCallCheck(this, AlternatedatetimePageModule);
      });

      _AlternatedatetimePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _alternatedatetime_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlternatedatetimePageRoutingModule],
        declarations: [_alternatedatetime_page__WEBPACK_IMPORTED_MODULE_1__.AlternatedatetimePage]
      })], _AlternatedatetimePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_alternatedatetime_alternatedatetime_module_ts-es5.js.map