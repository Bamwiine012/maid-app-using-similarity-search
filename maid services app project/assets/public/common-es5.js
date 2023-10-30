(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["common"], {
    /***/
    64021:
    /*!****************************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CameraSource": function CameraSource() {
          return (
            /* binding */
            _CameraSource
          );
        },

        /* harmony export */
        "CameraDirection": function CameraDirection() {
          return (
            /* binding */
            _CameraDirection
          );
        },

        /* harmony export */
        "CameraResultType": function CameraResultType() {
          return (
            /* binding */
            _CameraResultType
          );
        }
        /* harmony export */

      });

      var _CameraSource;

      (function (CameraSource) {
        /**
         * Prompts the user to select either the photo album or take a photo.
         */
        CameraSource["Prompt"] = "PROMPT";
        /**
         * Take a new photo using the camera.
         */

        CameraSource["Camera"] = "CAMERA";
        /**
         * Pick an existing photo fron the gallery or photo album.
         */

        CameraSource["Photos"] = "PHOTOS";
      })(_CameraSource || (_CameraSource = {}));

      var _CameraDirection;

      (function (CameraDirection) {
        CameraDirection["Rear"] = "REAR";
        CameraDirection["Front"] = "FRONT";
      })(_CameraDirection || (_CameraDirection = {}));

      var _CameraResultType;

      (function (CameraResultType) {
        CameraResultType["Uri"] = "uri";
        CameraResultType["Base64"] = "base64";
        CameraResultType["DataUrl"] = "dataUrl";
      })(_CameraResultType || (_CameraResultType = {})); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    37673:
    /*!**********************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CameraDirection": function CameraDirection() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection
          );
        },

        /* harmony export */
        "CameraResultType": function CameraResultType() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType
          );
        },

        /* harmony export */
        "CameraSource": function CameraSource() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource
          );
        },

        /* harmony export */
        "Camera": function Camera() {
          return (
            /* binding */
            _Camera
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      68384);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      64021);

      var _Camera = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          14028)).then(function (m) {
            return new m.CameraWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    68225:
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createButtonActiveGesture
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      23150);
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      52954);
      /* harmony import */


      var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-34cb2743.js */
      39461);

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return (0, _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            (0, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    27069:
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            attachComponent
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            detachComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-1457892a.js */
      71567);

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context.next = 10;
                  return new Promise(function (resolve) {
                    return (0, _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve);
                  });

                case 10:
                  return _context.abrupt("return", el);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    52954:
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            hapticSelectionStart
          );
        },

        /* harmony export */
        "b": function b() {
          return (
            /* binding */
            hapticSelectionChanged
          );
        },

        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            hapticSelection
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            hapticImpact
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hapticSelectionEnd
          );
        }
        /* harmony export */

      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    60408:
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "S": function S() {
          return (
            /* binding */
            SPINNERS
          );
        }
        /* harmony export */

      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    61269:
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createColorClasses
          );
        },

        /* harmony export */
        "g": function g() {
          return (
            /* binding */
            getClassMap
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hostContext
          );
        },

        /* harmony export */
        "o": function o() {
          return (
            /* binding */
            openURL
          );
        }
        /* harmony export */

      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    88844:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/alternatedatetime/alternatedatetime.page.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AlternatedatetimePage": function AlternatedatetimePage() {
          return (
            /* binding */
            _AlternatedatetimePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_alternatedatetime_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./alternatedatetime.page.html */
      10272);
      /* harmony import */


      var _alternatedatetime_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./alternatedatetime.page.scss */
      42671);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/local.service */
      85298);
      /* harmony import */


      var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/rest.service */
      43006);
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/utility.service */
      67278);
      /* eslint-disable @typescript-eslint/naming-convention */


      var _AlternatedatetimePage = /*#__PURE__*/function () {
        function AlternatedatetimePage(modalCtrl, localService, restService, utilityService, navParams) {
          _classCallCheck(this, AlternatedatetimePage);

          this.modalCtrl = modalCtrl;
          this.localService = localService;
          this.restService = restService;
          this.utilityService = utilityService;
          this.navParams = navParams;
          this.loggedCleaner = this.localService.getCleaner();
          this.job_id = this.navParams.get('job_id'); // calculate minimum datetime

          this.today = new Date();
          this.maxdate = this.maxDate(this.today);
          this.mindate = this.minDate(this.today); // override min/max time

          this.mintime = '06:00';
          this.maxtime = '20:00';
        }

        _createClass(AlternatedatetimePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
          key: "submit",
          value: function submit() {
            var _this = this;

            if (!this.date || this.date === '') {
              return this.utilityService.openAlerts('Oops', 'Date required.', 'ok');
            }

            if (!this.time || this.time === '') {
              return this.utilityService.openAlerts('Oops', 'Time required.', 'ok');
            } // format date time as per ionic5


            var formattedDate = this.date.split('T')[0];
            var time = this.time.split('T')[1].split('.')[0].split(':');
            var formattedTime = time[0] + ':' + time[1];
            this.utilityService.loadingOpen('Notifying Customer...');
            this.restService.postData('cleaner/available_alternate', {
              job_id: this.job_id,
              cleaner_id: this.loggedCleaner.id,
              date: formattedDate,
              time: formattedTime
            }).subscribe(function (data) {
              _this.utilityService.loadingClose();

              _this.close();
            }, function (err) {
              _this.utilityService.loadingClose();

              return _this.utilityService.openAlerts('Error!', 'Something went wrong, Please try again.', 'ok');
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.modalCtrl.dismiss();
          }
        }]);

        return AlternatedatetimePage;
      }();

      _AlternatedatetimePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
        }, {
          type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService
        }, {
          type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams
        }];
      };

      _AlternatedatetimePage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-alternatedatetime',
        template: _raw_loader_alternatedatetime_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_alternatedatetime_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AlternatedatetimePage);
      /***/
    },

    /***/
    79742:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/clientinstructions/clientinstructions.page.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClientinstructionsPage": function ClientinstructionsPage() {
          return (
            /* binding */
            _ClientinstructionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_clientinstructions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./clientinstructions.page.html */
      3971);
      /* harmony import */


      var _clientinstructions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./clientinstructions.page.scss */
      1467);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ClientinstructionsPage = /*#__PURE__*/function () {
        function ClientinstructionsPage(modalCtrl, navParams) {
          _classCallCheck(this, ClientinstructionsPage);

          this.modalCtrl = modalCtrl;
          this.navParams = navParams;
          this.bookingdata = {};
          this.extraServices = [];
          this.bookingdata = this.navParams.get('data');

          if (this.bookingdata.extra_services) {
            this.extraServices = this.bookingdata.extra_services;
          }
        }

        _createClass(ClientinstructionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
          }
        }]);

        return ClientinstructionsPage;
      }();

      _ClientinstructionsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams
        }];
      };

      _ClientinstructionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-clientinstructions',
        template: _raw_loader_clientinstructions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_clientinstructions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ClientinstructionsPage);
      /***/
    },

    /***/
    42671:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/alternatedatetime/alternatedatetime.page.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\nion-content h6 {\n  font-size: 0.8rem;\n  margin-bottom: 15px;\n}\nion-content ion-item {\n  border: 0.6px solid var(--ion-color-border);\n  border-bottom: 0.6px solid var(--ion-color-border) !important;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\nion-content ion-item:last-child {\n  margin-bottom: 0px;\n}\nion-content ion-datetime {\n  text-align: left;\n  --padding-start: 15px;\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsdGVybmF0ZWRhdGV0aW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDRTtFQUNFLDJDQUFBO0VBQ0EsNkRBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNFLGtCQUFBO0FBRU47QUFFRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6ImFsdGVybmF0ZWRhdGV0aW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuXG4gIGg2e1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgaW9uLWl0ZW17XG4gICAgYm9yZGVyOiAwLjZweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItYm9yZGVyKTtcbiAgICBib3JkZXItYm90dG9tOiAwLjZweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItYm9yZGVyKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICY6bGFzdC1jaGlsZHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG4gIH1cblxuICBpb24tZGF0ZXRpbWV7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    1467:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/clientinstructions/clientinstructions.page.scss ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  text-align: center;\n  text-transform: uppercase;\n}\nion-content h2 {\n  font-size: 1rem;\n  text-transform: uppercase;\n}\nion-content h3 {\n  font-size: 1rem;\n  text-transform: uppercase;\n  font-weight: 400;\n}\nion-content ion-label {\n  vertical-align: middle;\n  font-weight: 400 !important;\n  font-size: 0.8rem !important;\n  opacity: 0.7 !important;\n}\nion-content ion-item {\n  border-width: 0px !important;\n}\nion-content .toggle-disabled {\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudGluc3RydWN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFDSTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQUNOO0FBQ0k7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNOO0FBRUk7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFFQSx1QkFBQTtBQUROO0FBSUk7RUFDRSw0QkFBQTtBQUZOO0FBS0k7RUFDRSxxQkFBQTtBQUhOIiwiZmlsZSI6ImNsaWVudGluc3RydWN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICBoMntcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIGgze1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVse1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG5cbiAgICAgIG9wYWNpdHk6IDAuNyAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1pdGVte1xuICAgICAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAudG9nZ2xlLWRpc2FibGVke1xuICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    10272:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alternatedatetime/alternatedatetime.page.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-uppercase\">Select Date & Time</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"button-white\" (click)=\"close()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <h6 class=\"ion-text-center\">Please enter a different date or time for your availability</h6>\n    <ion-item>\n        <ion-datetime displayFormat=\"DDD, DD-MMM-YYYY\" min=\"{{mindate}}\" max=\"{{maxdate}}\" [(ngModel)]=\"date\" placeholder=\"Date\"></ion-datetime>\n        <ion-icon name=\"calendar-outline\" color=\"base\" slot=\"start\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-datetime displayFormat=\"HH:mm\" minuteValues=\"00,30\" min=\"{{mintime}}\" max=\"{{maxtime}}\" [(ngModel)]=\"time\" placeholder=\"Time\"></ion-datetime>\n        <ion-icon name=\"time-outline\" color=\"base\" slot=\"start\"></ion-icon>\n      </ion-item>\n      <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"submit()\">SUBMIT</ion-button>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    3971:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clientinstructions/clientinstructions.page.html ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col size=\"12\"><h3>ADDITIONAL SERVICES / INSTRUCTIONS</h3></ion-col>\n    <ion-col size=\"12\">\n      <ion-list>\n        <ion-item *ngFor=\"let service of extraServices\" >\n          <ion-label>{{service?.name}}</ion-label>\n          <ion-toggle checked=\"true\" disabled=\"true\"></ion-toggle>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\" offset=\"4\">\n      <ion-button expand=\"block\" class=\"base-button cleaner-btn\" (click)=\"dismiss()\">CLOSE</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map