"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Component_CommentBoxContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Component/CommentBoxContainer */ \"./Component/CommentBoxContainer.jsx\");\n/* harmony import */ var _components_navBar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navBar.module.css */ \"./components/navBar.module.css\");\n/* harmony import */ var _components_navBar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_navBar_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var getData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n                var ftch, res;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                fetch(\"/api/getUser\")\n                            ];\n                        case 1:\n                            ftch = _state.sent();\n                            return [\n                                4,\n                                ftch.json()\n                            ];\n                        case 2:\n                            res = _state.sent();\n                            setName(res.name);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function getData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getData();\n    }, []);\n    var logout = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var ftch;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetch(\"/api/logout\")\n                        ];\n                    case 1:\n                        ftch = _state.sent();\n                        window.location.reload(true);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function logout() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\pages\\\\index.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return logout();\n                        },\n                        className: (_components_navBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().btnLogout),\n                        children: \"Desconectarse\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\pages\\\\index.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\pages\\\\index.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Component_CommentBoxContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\pages\\\\index.jsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQTJDO0FBQ3dCO0FBQ2Y7QUFFckMsU0FBU0ksR0FBRyxHQUFHOztJQUUxQixJQUF3QkgsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3QkksSUFBSSxHQUFhSixHQUFZLEdBQXpCLEVBQUVLLE9BQU8sR0FBSUwsR0FBWSxHQUFoQjtJQUVwQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1osSUFBTU8sT0FBTzt1QkFBRywrRkFBWTtvQkFDcEJDLElBQUksRUFDSkMsR0FBRzs7Ozs0QkFESTs7Z0NBQU1DLEtBQUssQ0FBQyxjQUFjLENBQUM7OEJBQUE7OzRCQUFsQ0YsSUFBSSxHQUFHLGFBQTJCOzRCQUM1Qjs7Z0NBQU1BLElBQUksQ0FBQ0csSUFBSSxFQUFFOzhCQUFBOzs0QkFBdkJGLEdBQUcsR0FBRyxhQUFpQjs0QkFFM0JILE9BQU8sQ0FBQ0csR0FBRyxDQUFDSixJQUFJLENBQUM7Ozs7OztZQUNyQixDQUFDOzRCQUxLRSxPQUFPOzs7V0FLWjtRQUNEQSxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUMsRUFDRyxFQUFFLENBQUMsQ0FBQztJQUVSLElBQU1LLE1BQU07bUJBQUcsK0ZBQVk7Z0JBQ2pCSixJQUFJOzs7O3dCQUFHOzs0QkFBTUUsS0FBSyxDQUFDLGFBQWEsQ0FBQzswQkFBQTs7d0JBQWpDRixJQUFJLEdBQUcsYUFBMEI7d0JBQ3ZDSyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7UUFDakMsQ0FBQzt3QkFIS0gsTUFBTTs7O09BR1g7SUFDRCxxQkFDSTs7MEJBQ0ksOERBQUNJLEtBQUc7O2tDQUNBLDhEQUFDQyxPQUFLO2tDQUFFWixJQUFJOzs7Ozs0QkFBUztrQ0FDckIsOERBQUNhLFFBQU07d0JBQUNDLE9BQU8sRUFBRTttQ0FBTVAsTUFBTSxFQUFFO3lCQUFBO3dCQUFFUSxTQUFTLEVBQUVqQixnRkFBZTtrQ0FBRSxlQUFhOzs7Ozs0QkFBUzs7Ozs7O29CQUNqRjswQkFDTiw4REFBQ0Qsc0VBQW1COzs7O29CQUFHOztvQkFDeEIsQ0FDTjtBQUNMLENBQUM7R0E1QnVCRSxHQUFHO0FBQUhBLEtBQUFBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBDb21tZW50Qm94Q29udGFpbmVyIGZyb20gXCIuLi9Db21wb25lbnQvQ29tbWVudEJveENvbnRhaW5lclwiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZCYXIubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcblxyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmdGNoID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2V0VXNlcicpO1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgZnRjaC5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBzZXROYW1lKHJlcy5uYW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICB9LFxyXG4gICAgICAgIFtdKTtcclxuXHJcbiAgICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZnRjaCA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ291dCcpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+e25hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbG9nb3V0KCl9IGNsYXNzTmFtZT17c3R5bGUuYnRuTG9nb3V0fT5EZXNjb25lY3RhcnNlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Q29tbWVudEJveENvbnRhaW5lciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29tbWVudEJveENvbnRhaW5lciIsInN0eWxlIiwiQXBwIiwibmFtZSIsInNldE5hbWUiLCJnZXREYXRhIiwiZnRjaCIsInJlcyIsImZldGNoIiwianNvbiIsImxvZ291dCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZGl2IiwibGFiZWwiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiYnRuTG9nb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});