"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction App() {\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getData = async ()=>{\n            let ftch = await fetch(\"/api/getUser\");\n            let res = await ftch.json();\n            setName(res.name);\n        };\n        getData();\n    }, []);\n    const logout = async ()=>{\n        const ftch = await fetch(\"/api/logout\");\n        window.location.reload(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            name,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>logout(),\n                children: \"Desconectarse\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 5\\\\pages\\\\index.jsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUEyQztBQUU1QixTQUFTRSxHQUFHLEdBQUU7SUFFekIsTUFBTSxLQUFDQyxJQUFJLE1BQUVDLE9BQU8sTUFBSUgsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFcENELGdEQUFTLENBQUMsSUFBSTtRQUNWLE1BQU1LLE9BQU8sR0FBRyxVQUFVO1lBQ3RCLElBQUlDLElBQUksR0FBRyxNQUFNQyxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQ3RDLElBQUlDLEdBQUcsR0FBRyxNQUFNRixJQUFJLENBQUNHLElBQUksRUFBRTtZQUUzQkwsT0FBTyxDQUFDSSxHQUFHLENBQUNMLElBQUksQ0FBQztRQUNyQixDQUFDO1FBQ0RFLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQyxFQUNELEVBQUUsQ0FBQyxDQUFDO0lBRUosTUFBTUssTUFBTSxHQUFHLFVBQVU7UUFDckIsTUFBTUosSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDdkNJLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELHFCQUNJOztZQUNDVixJQUFJOzBCQUNMLDhEQUFDVyxRQUFNO2dCQUFDQyxPQUFPLEVBQUUsSUFBSUwsTUFBTSxFQUFFOzBCQUFFLGVBQWE7Ozs7O29CQUFTOztvQkFDbEQsQ0FDTjtBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm8tNS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCl7XHJcblxyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCk9PntcclxuICAgICAgICAgICAgbGV0IGZ0Y2ggPSBhd2FpdCBmZXRjaCgnL2FwaS9nZXRVc2VyJyk7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBmdGNoLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIHNldE5hbWUocmVzLm5hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgIH0sXHJcbiAgICBbXSk7XHJcblxyXG4gICAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCk9PntcclxuICAgICAgICBjb25zdCBmdGNoID0gYXdhaXQgZmV0Y2goJy9hcGkvbG9nb3V0Jyk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7bmFtZX1cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5sb2dvdXQoKX0+RGVzY29uZWN0YXJzZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBwIiwibmFtZSIsInNldE5hbWUiLCJnZXREYXRhIiwiZnRjaCIsImZldGNoIiwicmVzIiwianNvbiIsImxvZ291dCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();