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
exports.id = "pages/api/getUser";
exports.ids = ["pages/api/getUser"];
exports.modules = {

/***/ "jose":
/*!***********************!*\
  !*** external "jose" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("jose");

/***/ }),

/***/ "(api)/./pages/api/getUser.js":
/*!******************************!*\
  !*** ./pages/api/getUser.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { jwtVerify  } = __webpack_require__(/*! jose */ \"jose\");\nasync function handler(req, res) {\n    const token = req.cookies.Token;\n    const { payload  } = await jwtVerify(token, new TextEncoder().encode(process.env.palabraSecreta));\n    res.json({\n        name: payload.name\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFDQSxTQUFTLEdBQUMsR0FBR0MsbUJBQU8sQ0FBQyxrQkFBTSxDQUFDO0FBRXBCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFNUMsTUFBTUMsS0FBSyxHQUFHRixHQUFHLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSztJQUcvQixNQUFNLEVBQUVDLE9BQU8sR0FBRSxHQUFHLE1BQU1SLFNBQVMsQ0FBQ0ssS0FBSyxFQUFFLElBQUlJLFdBQVcsRUFBRSxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUVoR1QsR0FBRyxDQUFDVSxJQUFJLENBQUM7UUFBQ0MsSUFBSSxFQUFDUCxPQUFPLENBQUNPLElBQUk7S0FBQyxDQUFDO0FBQ2pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm8tNS8uL3BhZ2VzL2FwaS9nZXRVc2VyLmpzPzI2M2MiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2p3dFZlcmlmeX0gPSByZXF1aXJlKCdqb3NlJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSByZXEuY29va2llcy5Ub2tlbjtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gYXdhaXQgand0VmVyaWZ5KHRva2VuLCBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocHJvY2Vzcy5lbnYucGFsYWJyYVNlY3JldGEpKVxyXG5cclxuICAgIHJlcy5qc29uKHtuYW1lOnBheWxvYWQubmFtZX0pXHJcbn0iXSwibmFtZXMiOlsiand0VmVyaWZ5IiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImNvb2tpZXMiLCJUb2tlbiIsInBheWxvYWQiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsInByb2Nlc3MiLCJlbnYiLCJwYWxhYnJhU2VjcmV0YSIsImpzb24iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getUser.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getUser.js"));
module.exports = __webpack_exports__;

})();