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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Likes; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction Likes(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), like = ref[0], setLike = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), render = ref1[0], setRender = ref1[1];\n    var style = {\n        button: {\n            border: 0,\n            backgroundColor: \"transparent\"\n        }\n    };\n    var getLikes = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n            var ftch, res;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetch(\"/api/getLike?id=\".concat(props.id))\n                        ];\n                    case 1:\n                        ftch = _state.sent();\n                        return [\n                            4,\n                            ftch.json()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        setLike(res.likes);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getLikes() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var updateLike = function() {\n        var rendered = !render;\n        setRender(rendered);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getLikes();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getLikes();\n    }, [\n        render\n    ]);\n    var handlerClick = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n            var ftch, res;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetch(\"/api/updateLike?id=\".concat(props.id, \"&like=\").concat(props.like))\n                        ];\n                    case 1:\n                        ftch = _state.sent();\n                        return [\n                            4,\n                            ftch.json()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        updateLike();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handlerClick() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: style.button,\n        onClick: handlerClick,\n        children: like ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/like.png\",\n            style: props.style.imageStyle\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\Component\\\\Like.jsx\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/no-like.png\",\n            style: props.style.imageStyle\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\Component\\\\Like.jsx\",\n            lineNumber: 44,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\Component\\\\Like.jsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(Likes, \"HgVf91ExRUDC6BwoH0sMoClCpdQ=\");\n_c = Likes;\nvar _c;\n$RefreshReg$(_c, \"Likes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnQvTGlrZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQTRDO0FBRTdCLFNBQVNFLEtBQUssQ0FBQ0MsS0FBSyxFQUFDOztJQUVoQyxJQUF3QkYsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUFoQ0csSUFBSSxHQUFhSCxHQUFlLEdBQTVCLEVBQUNJLE9BQU8sR0FBS0osR0FBZSxHQUFwQjtJQUNuQixJQUE0QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUFwQ0ssTUFBTSxHQUFlTCxJQUFlLEdBQTlCLEVBQUNNLFNBQVMsR0FBS04sSUFBZSxHQUFwQjtJQUV2QixJQUFNTyxLQUFLLEdBQUc7UUFDVkMsTUFBTSxFQUFDO1lBQ0hDLE1BQU0sRUFBQyxDQUFDO1lBQ1JDLGVBQWUsRUFBRSxhQUFhO1NBQ2pDO0tBQ0o7SUFFRCxJQUFNQyxRQUFRO21CQUFHLCtGQUFVO2dCQUNqQkMsSUFBSSxFQUNKQyxHQUFHOzs7O3dCQURJOzs0QkFBTUMsS0FBSyxDQUFDLGtCQUFpQixDQUFXLE9BQVRaLEtBQUssQ0FBQ2EsRUFBRSxDQUFFLENBQUM7MEJBQUE7O3dCQUFqREgsSUFBSSxHQUFHLGFBQTBDO3dCQUMzQzs7NEJBQU1BLElBQUksQ0FBQ0ksSUFBSSxFQUFFOzBCQUFBOzt3QkFBdkJILEdBQUcsR0FBRyxhQUFpQjt3QkFDN0JULE9BQU8sQ0FBQ1MsR0FBRyxDQUFDSSxLQUFLLENBQUM7Ozs7OztRQUN0QixDQUFDO3dCQUpLTixRQUFROzs7T0FJYjtJQUVELElBQU1PLFVBQVUsR0FBRyxXQUFJO1FBQ25CLElBQU1DLFFBQVEsR0FBRyxDQUFDZCxNQUFNO1FBQ3hCQyxTQUFTLENBQUNhLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRURwQixnREFBUyxDQUFDLFdBQUk7UUFDVlksUUFBUSxFQUFFLENBQUM7SUFDZixDQUFDLEVBQUMsRUFBRSxDQUFDO0lBR0xaLGdEQUFTLENBQUMsV0FBSTtRQUNWWSxRQUFRLEVBQUUsQ0FBQztJQUNmLENBQUMsRUFBQztRQUFDTixNQUFNO0tBQUMsQ0FBQztJQUVYLElBQU1lLFlBQVk7bUJBQUcsK0ZBQVU7Z0JBQ3JCUixJQUFJLEVBQ0pDLEdBQUc7Ozs7d0JBREk7OzRCQUFNQyxLQUFLLENBQUMscUJBQW9CLENBQW1CWixNQUFVLENBQTNCQSxLQUFLLENBQUNhLEVBQUUsRUFBQyxRQUFNLENBQWEsUUFBWGIsS0FBSyxDQUFDQyxJQUFJLENBQUUsQ0FBQzswQkFBQTs7d0JBQXZFUyxJQUFJLEdBQUcsYUFBZ0U7d0JBQ2pFOzs0QkFBTUEsSUFBSSxDQUFDSSxJQUFJLEVBQUU7MEJBQUE7O3dCQUF2QkgsR0FBRyxHQUFHLGFBQWlCO3dCQUM3QkssVUFBVSxFQUFFLENBQUM7Ozs7OztRQUNqQixDQUFDO3dCQUpLRSxZQUFZOzs7T0FJakI7SUFDRCxxQkFDSSw4REFBQ1osUUFBTTtRQUFDRCxLQUFLLEVBQUVBLEtBQUssQ0FBQ0MsTUFBTTtRQUFFYSxPQUFPLEVBQUVELFlBQVk7a0JBQ2pELElBQUssaUJBQ0YsOERBQUNFLEtBQUc7WUFBQ0MsR0FBRyxFQUFDLFdBQVc7WUFBQ2hCLEtBQUssRUFBRUwsS0FBSyxDQUFDSyxLQUFLLENBQUNpQixVQUFVOzs7OztnQkFBSSxpQkFDdEQsOERBQUNGLEtBQUc7WUFBQ0MsR0FBRyxFQUFDLGNBQWM7WUFBQ2hCLEtBQUssRUFBRUwsS0FBSyxDQUFDSyxLQUFLLENBQUNpQixVQUFVOzs7OztnQkFBSTs7Ozs7WUFFcEQsQ0FDWjtBQUVMLENBQUM7R0E5Q3VCdkIsS0FBSztBQUFMQSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudC9MaWtlLmpzeD82YzA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpa2VzKHByb3BzKXtcclxuXHJcbiAgICBjb25zdCBbbGlrZSxzZXRMaWtlXSAgPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVuZGVyLHNldFJlbmRlcl0gID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAgIGJ1dHRvbjp7XHJcbiAgICAgICAgICAgIGJvcmRlcjowLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldExpa2VzID0gYXN5bmMgKCk9PntcclxuICAgICAgICBjb25zdCBmdGNoID0gYXdhaXQgZmV0Y2goYC9hcGkvZ2V0TGlrZT9pZD0ke3Byb3BzLmlkfWApO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZ0Y2guanNvbigpO1xyXG4gICAgICAgIHNldExpa2UocmVzLmxpa2VzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUxpa2UgPSAoKT0+e1xyXG4gICAgICAgIGNvbnN0IHJlbmRlcmVkID0gIXJlbmRlcjtcclxuICAgICAgICBzZXRSZW5kZXIocmVuZGVyZWQpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZ2V0TGlrZXMoKTtcclxuICAgIH0sW10pXHJcblxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBnZXRMaWtlcygpO1xyXG4gICAgfSxbcmVuZGVyXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVyQ2xpY2sgPSBhc3luYyAoKT0+e1xyXG4gICAgICAgIGNvbnN0IGZ0Y2ggPSBhd2FpdCBmZXRjaChgL2FwaS91cGRhdGVMaWtlP2lkPSR7cHJvcHMuaWR9Jmxpa2U9JHtwcm9wcy5saWtlfWApO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZ0Y2guanNvbigpO1xyXG4gICAgICAgIHVwZGF0ZUxpa2UoKTtcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZS5idXR0b259IG9uQ2xpY2s9e2hhbmRsZXJDbGlja30+XHJcbiAgICAgICAgeyhsaWtlKSA/XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xpa2UucG5nXCIgc3R5bGU9e3Byb3BzLnN0eWxlLmltYWdlU3R5bGV9IC8+IDpcclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbm8tbGlrZS5wbmdcIiBzdHlsZT17cHJvcHMuc3R5bGUuaW1hZ2VTdHlsZX0gLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcblxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGlrZXMiLCJwcm9wcyIsImxpa2UiLCJzZXRMaWtlIiwicmVuZGVyIiwic2V0UmVuZGVyIiwic3R5bGUiLCJidXR0b24iLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRMaWtlcyIsImZ0Y2giLCJyZXMiLCJmZXRjaCIsImlkIiwianNvbiIsImxpa2VzIiwidXBkYXRlTGlrZSIsInJlbmRlcmVkIiwiaGFuZGxlckNsaWNrIiwib25DbGljayIsImltZyIsInNyYyIsImltYWdlU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Component/Like.jsx\n"));

/***/ })

});