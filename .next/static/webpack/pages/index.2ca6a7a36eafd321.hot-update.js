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

/***/ "./Component/ReadComment.jsx":
/*!***********************************!*\
  !*** ./Component/ReadComment.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ReadCommentBox; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Like__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Like */ \"./Component/Like.jsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction ReadCommentBox() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), comment = ref[0], setComment = ref[1];\n    // const handlerClick = async ()=>{\n    //     const ftch = await fetch(`http://localhost:3000/api/addComment?comment=${comment}`);\n    //     const res = await ftch.json();\n    //     if(res.success){\n    //         document.querySelector('#comment--Comment').value = \"\";\n    //     }\n    // }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var getComment = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n                var ftch, res;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                fetch(\"/api/getComment\")\n                            ];\n                        case 1:\n                            ftch = _state.sent();\n                            return [\n                                4,\n                                ftch.json()\n                            ];\n                        case 2:\n                            res = _state.sent();\n                            setComment(res.commentList);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function getComment() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getComment();\n    }, []);\n    var style = {\n        imageStyle: {\n            width: \"2rem\",\n            cursor: \"pointer\"\n        },\n        commentListStyle: {\n            margin: 5,\n            border: \"1px solid black\",\n            borderRadius: \"5px\",\n            width: \"40%\",\n            textAlign: \"center\",\n            padding: 5\n        },\n        user: {\n            margin: 5,\n            textAlign: \"left\",\n            padding: 5\n        },\n        tool: {\n            margin: 5,\n            textAlign: \"left\",\n            padding: 5\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: comment.map(function(com) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: style.commentListStyle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: style.user,\n                        children: com.username\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\Component\\\\ReadComment.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 29\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: com.comment\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\Component\\\\ReadComment.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 29\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: style.tool,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Like__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            like: com.like,\n                            style: style\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\Component\\\\ReadComment.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 34\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\Component\\\\ReadComment.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 29\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\Component\\\\ReadComment.jsx\",\n                lineNumber: 55,\n                columnNumber: 25\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\Component\\\\ReadComment.jsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(ReadCommentBox, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ReadCommentBox;\nvar _c;\n$RefreshReg$(_c, \"ReadCommentBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnQvUmVhZENvbW1lbnQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBNEM7QUFDakI7QUFFWixTQUFTRyxjQUFjLEdBQUc7OztJQUVyQyxJQUE4QkgsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFuQ0ksT0FBTyxHQUFnQkosR0FBWSxHQUE1QixFQUFFSyxVQUFVLEdBQUlMLEdBQVksR0FBaEI7SUFFMUIsbUNBQW1DO0lBQ25DLDJGQUEyRjtJQUMzRixxQ0FBcUM7SUFFckMsdUJBQXVCO0lBQ3ZCLGtFQUFrRTtJQUNsRSxRQUFRO0lBQ1IsSUFBSTtJQUNKQyxnREFBUyxDQUFDLFdBQU07UUFDWixJQUFNSyxVQUFVO3VCQUFHLCtGQUFZO29CQUNyQkMsSUFBSSxFQUNKQyxHQUFHOzs7OzRCQURJOztnQ0FBTUMsS0FBSyxDQUFFLGlCQUFlLENBQUU7OEJBQUE7OzRCQUFyQ0YsSUFBSSxHQUFHLGFBQThCOzRCQUMvQjs7Z0NBQU1BLElBQUksQ0FBQ0csSUFBSSxFQUFFOzhCQUFBOzs0QkFBdkJGLEdBQUcsR0FBRyxhQUFpQjs0QkFDN0JILFVBQVUsQ0FBQ0csR0FBRyxDQUFDRyxXQUFXLENBQUMsQ0FBQzs7Ozs7O1lBQ2hDLENBQUM7NEJBSktMLFVBQVU7OztXQUlmO1FBQ0RBLFVBQVUsRUFBRSxDQUFDO0lBQ2pCLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixJQUFJTSxLQUFLLEdBQUc7UUFDUkMsVUFBVSxFQUFFO1lBQ1JDLEtBQUssRUFBRSxNQUFNO1lBQ2JDLE1BQU0sRUFBRSxTQUFTO1NBQ3BCO1FBQ0RDLGdCQUFnQixFQUFFO1lBQ2RDLE1BQU0sRUFBRSxDQUFDO1lBQ1RDLE1BQU0sRUFBRSxpQkFBaUI7WUFDekJDLFlBQVksRUFBRSxLQUFLO1lBQ25CTCxLQUFLLEVBQUMsS0FBSztZQUNYTSxTQUFTLEVBQUUsUUFBUTtZQUNuQkMsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUNEQyxJQUFJLEVBQUM7WUFDREwsTUFBTSxFQUFFLENBQUM7WUFDVEcsU0FBUyxFQUFFLE1BQU07WUFDakJDLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDREUsSUFBSSxFQUFDO1lBQ0ROLE1BQU0sRUFBRSxDQUFDO1lBQ1RHLFNBQVMsRUFBRSxNQUFNO1lBQ2pCQyxPQUFPLEVBQUUsQ0FBQztTQUNiO0tBQ0o7SUFDRCxxQkFDSSw4REFBQ0csS0FBRztrQkFHSXBCLE9BQU8sQ0FBQ3FCLEdBQUcsQ0FBQ0MsU0FBQUEsR0FBRyxFQUFJO1lBQ2YscUJBQ0ksOERBQUNGLEtBQUc7Z0JBQUNaLEtBQUssRUFBRUEsS0FBSyxDQUFDSSxnQkFBZ0I7O2tDQUM5Qiw4REFBQ1EsS0FBRzt3QkFBQ1osS0FBSyxFQUFFQSxLQUFLLENBQUNVLElBQUk7a0NBQ2pCSSxHQUFHLENBQUNDLFFBQVE7Ozs7OzZCQUNYO2tDQUNOLDhEQUFDSCxLQUFHO2tDQUNDRSxHQUFHLENBQUN0QixPQUFPOzs7Ozs2QkFDVjtrQ0FDTiw4REFBQ29CLEtBQUc7d0JBQUNaLEtBQUssRUFBRUEsS0FBSyxDQUFDVyxJQUFJO2tDQUNqQiw0RUFBQ3JCLDZDQUFLOzRCQUFDMEIsSUFBSSxFQUFFRixHQUFHLENBQUNFLElBQUk7NEJBQUVoQixLQUFLLEVBQUVBLEtBQUs7Ozs7O2lDQUFJOzs7Ozs2QkFFdEM7Ozs7OztxQkFDSixDQUNUO1FBQ0wsQ0FBQyxDQUFDOzs7OztZQUVKLENBQ1Q7QUFDTCxDQUFDO0dBcEV1QlQsY0FBYztBQUFkQSxLQUFBQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudC9SZWFkQ29tbWVudC5qc3g/Y2IyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaWtlcyBmcm9tIFwiLi9MaWtlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWFkQ29tbWVudEJveCgpIHtcclxuXHJcbiAgICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLy8gY29uc3QgaGFuZGxlckNsaWNrID0gYXN5bmMgKCk9PntcclxuICAgIC8vICAgICBjb25zdCBmdGNoID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYWRkQ29tbWVudD9jb21tZW50PSR7Y29tbWVudH1gKTtcclxuICAgIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmdGNoLmpzb24oKTtcclxuXHJcbiAgICAvLyAgICAgaWYocmVzLnN1Y2Nlc3Mpe1xyXG4gICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudC0tQ29tbWVudCcpLnZhbHVlID0gXCJcIjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdldENvbW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZ0Y2ggPSBhd2FpdCBmZXRjaChgL2FwaS9nZXRDb21tZW50YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZ0Y2guanNvbigpO1xyXG4gICAgICAgICAgICBzZXRDb21tZW50KHJlcy5jb21tZW50TGlzdCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBnZXRDb21tZW50KCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBsZXQgc3R5bGUgPSB7XHJcbiAgICAgICAgaW1hZ2VTdHlsZToge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIycmVtXCIsXHJcbiAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21tZW50TGlzdFN0eWxlOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNSxcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOlwiNDAlXCIsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgcGFkZGluZzogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXNlcjp7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNSxcclxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgcGFkZGluZzogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbDp7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNSxcclxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgcGFkZGluZzogNVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQubWFwKGNvbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGUuY29tbWVudExpc3RTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZS51c2VyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb20uY29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGUudG9vbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezxMaWtlcyBsaWtlPXtjb20ubGlrZX0gc3R5bGU9e3N0eWxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaWtlcyIsIlJlYWRDb21tZW50Qm94IiwiY29tbWVudCIsInNldENvbW1lbnQiLCJnZXRDb21tZW50IiwiZnRjaCIsInJlcyIsImZldGNoIiwianNvbiIsImNvbW1lbnRMaXN0Iiwic3R5bGUiLCJpbWFnZVN0eWxlIiwid2lkdGgiLCJjdXJzb3IiLCJjb21tZW50TGlzdFN0eWxlIiwibWFyZ2luIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwidGV4dEFsaWduIiwicGFkZGluZyIsInVzZXIiLCJ0b29sIiwiZGl2IiwibWFwIiwiY29tIiwidXNlcm5hbWUiLCJsaWtlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Component/ReadComment.jsx\n"));

/***/ })

});