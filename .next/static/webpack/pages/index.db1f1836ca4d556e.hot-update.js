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

/***/ "./Component/Like.jsx":
/*!****************************!*\
  !*** ./Component/Like.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Likes; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction Likes(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), like = ref[0], setLike = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), render = ref1[0], setRender = ref1[1];\n    var style = {\n        button: {\n            border: 0,\n            backgroundColor: \"transparent\"\n        }\n    };\n    var getLikes = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n            var ftch, res;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetch(\"/api/getLike?id=\".concat(props.id))\n                        ];\n                    case 1:\n                        ftch = _state.sent();\n                        return [\n                            4,\n                            ftch.json()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        setLike(res);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getLikes() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var updateLike = function() {\n        var rendered = !render;\n        setRender(rendered);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getLikes();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getLikes();\n    }, [\n        render\n    ]);\n    var handlerClick = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n            var ftch, res;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetch(\"/api/updateLike?id=\".concat(props.id, \"&like=\").concat(props.like))\n                        ];\n                    case 1:\n                        ftch = _state.sent();\n                        return [\n                            4,\n                            ftch.json()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        updateLike();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handlerClick() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: style.button,\n        onClick: handlerClick,\n        children: [\n            like.length,\n            like.likes ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/like.png\",\n                style: props.style.imageStyle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\Component\\\\Like.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/no-like.png\",\n                style: props.style.imageStyle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\Component\\\\Like.jsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\Component\\\\Like.jsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(Likes, \"HgVf91ExRUDC6BwoH0sMoClCpdQ=\");\n_c = Likes;\nvar _c;\n$RefreshReg$(_c, \"Likes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnQvTGlrZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQTRDO0FBRTdCLFNBQVNFLEtBQUssQ0FBQ0MsS0FBSyxFQUFDOztJQUVoQyxJQUF3QkYsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUFoQ0csSUFBSSxHQUFhSCxHQUFlLEdBQTVCLEVBQUNJLE9BQU8sR0FBS0osR0FBZSxHQUFwQjtJQUNuQixJQUE0QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUFwQ0ssTUFBTSxHQUFlTCxJQUFlLEdBQTlCLEVBQUNNLFNBQVMsR0FBS04sSUFBZSxHQUFwQjtJQUV2QixJQUFNTyxLQUFLLEdBQUc7UUFDVkMsTUFBTSxFQUFDO1lBQ0hDLE1BQU0sRUFBQyxDQUFDO1lBQ1JDLGVBQWUsRUFBRSxhQUFhO1NBQ2pDO0tBQ0o7SUFFRCxJQUFNQyxRQUFRO21CQUFHLCtGQUFVO2dCQUNqQkMsSUFBSSxFQUNKQyxHQUFHOzs7O3dCQURJOzs0QkFBTUMsS0FBSyxDQUFDLGtCQUFpQixDQUFXLE9BQVRaLEtBQUssQ0FBQ2EsRUFBRSxDQUFFLENBQUM7MEJBQUE7O3dCQUFqREgsSUFBSSxHQUFHLGFBQTBDO3dCQUMzQzs7NEJBQU1BLElBQUksQ0FBQ0ksSUFBSSxFQUFFOzBCQUFBOzt3QkFBdkJILEdBQUcsR0FBRyxhQUFpQjt3QkFDN0JULE9BQU8sQ0FBQ1MsR0FBRyxDQUFDOzs7Ozs7UUFDaEIsQ0FBQzt3QkFKS0YsUUFBUTs7O09BSWI7SUFFRCxJQUFNTSxVQUFVLEdBQUcsV0FBSTtRQUNuQixJQUFNQyxRQUFRLEdBQUcsQ0FBQ2IsTUFBTTtRQUN4QkMsU0FBUyxDQUFDWSxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVEbkIsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1ZZLFFBQVEsRUFBRSxDQUFDO0lBQ2YsQ0FBQyxFQUFDLEVBQUUsQ0FBQztJQUdMWixnREFBUyxDQUFDLFdBQUk7UUFDVlksUUFBUSxFQUFFLENBQUM7SUFDZixDQUFDLEVBQUM7UUFBQ04sTUFBTTtLQUFDLENBQUM7SUFFWCxJQUFNYyxZQUFZO21CQUFHLCtGQUFVO2dCQUNyQlAsSUFBSSxFQUNKQyxHQUFHOzs7O3dCQURJOzs0QkFBTUMsS0FBSyxDQUFDLHFCQUFvQixDQUFtQlosTUFBVSxDQUEzQkEsS0FBSyxDQUFDYSxFQUFFLEVBQUMsUUFBTSxDQUFhLFFBQVhiLEtBQUssQ0FBQ0MsSUFBSSxDQUFFLENBQUM7MEJBQUE7O3dCQUF2RVMsSUFBSSxHQUFHLGFBQWdFO3dCQUNqRTs7NEJBQU1BLElBQUksQ0FBQ0ksSUFBSSxFQUFFOzBCQUFBOzt3QkFBdkJILEdBQUcsR0FBRyxhQUFpQjt3QkFDN0JJLFVBQVUsRUFBRSxDQUFDOzs7Ozs7UUFDakIsQ0FBQzt3QkFKS0UsWUFBWTs7O09BSWpCO0lBQ0QscUJBQ0ksOERBQUNYLFFBQU07UUFBQ0QsS0FBSyxFQUFFQSxLQUFLLENBQUNDLE1BQU07UUFBRVksT0FBTyxFQUFFRCxZQUFZOztZQUM3Q2hCLElBQUksQ0FBQ2tCLE1BQU07WUFDZGxCLElBQUksQ0FBQ21CLEtBQUssaUJBQ1IsOERBQUNDLEtBQUc7Z0JBQUNDLEdBQUcsRUFBQyxXQUFXO2dCQUFDakIsS0FBSyxFQUFFTCxLQUFLLENBQUNLLEtBQUssQ0FBQ2tCLFVBQVU7Ozs7O29CQUFJLGlCQUN0RCw4REFBQ0YsS0FBRztnQkFBQ0MsR0FBRyxFQUFDLGNBQWM7Z0JBQUNqQixLQUFLLEVBQUVMLEtBQUssQ0FBQ0ssS0FBSyxDQUFDa0IsVUFBVTs7Ozs7b0JBQUk7Ozs7OztZQUVwRCxDQUNaO0FBRUwsQ0FBQztHQS9DdUJ4QixLQUFLO0FBQUxBLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50L0xpa2UuanN4PzZjMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlrZXMocHJvcHMpe1xyXG5cclxuICAgIGNvbnN0IFtsaWtlLHNldExpa2VdICA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZW5kZXIsc2V0UmVuZGVyXSAgPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICAgYnV0dG9uOntcclxuICAgICAgICAgICAgYm9yZGVyOjAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKT0+e1xyXG4gICAgICAgIGNvbnN0IGZ0Y2ggPSBhd2FpdCBmZXRjaChgL2FwaS9nZXRMaWtlP2lkPSR7cHJvcHMuaWR9YCk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZnRjaC5qc29uKCk7XHJcbiAgICAgICAgc2V0TGlrZShyZXMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlTGlrZSA9ICgpPT57XHJcbiAgICAgICAgY29uc3QgcmVuZGVyZWQgPSAhcmVuZGVyO1xyXG4gICAgICAgIHNldFJlbmRlcihyZW5kZXJlZClcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBnZXRMaWtlcygpO1xyXG4gICAgfSxbXSlcclxuXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGdldExpa2VzKCk7XHJcbiAgICB9LFtyZW5kZXJdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZXJDbGljayA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgY29uc3QgZnRjaCA9IGF3YWl0IGZldGNoKGAvYXBpL3VwZGF0ZUxpa2U/aWQ9JHtwcm9wcy5pZH0mbGlrZT0ke3Byb3BzLmxpa2V9YCk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZnRjaC5qc29uKCk7XHJcbiAgICAgICAgdXBkYXRlTGlrZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlLmJ1dHRvbn0gb25DbGljaz17aGFuZGxlckNsaWNrfT5cclxuICAgICAgICAgICAge2xpa2UubGVuZ3RofVxyXG4gICAgICAgIHsobGlrZS5saWtlcykgP1xyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9saWtlLnBuZ1wiIHN0eWxlPXtwcm9wcy5zdHlsZS5pbWFnZVN0eWxlfSAvPiA6XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL25vLWxpa2UucG5nXCIgc3R5bGU9e3Byb3BzLnN0eWxlLmltYWdlU3R5bGV9IC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG5cclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpa2VzIiwicHJvcHMiLCJsaWtlIiwic2V0TGlrZSIsInJlbmRlciIsInNldFJlbmRlciIsInN0eWxlIiwiYnV0dG9uIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZ2V0TGlrZXMiLCJmdGNoIiwicmVzIiwiZmV0Y2giLCJpZCIsImpzb24iLCJ1cGRhdGVMaWtlIiwicmVuZGVyZWQiLCJoYW5kbGVyQ2xpY2siLCJvbkNsaWNrIiwibGVuZ3RoIiwibGlrZXMiLCJpbWciLCJzcmMiLCJpbWFnZVN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Component/Like.jsx\n"));

/***/ })

});