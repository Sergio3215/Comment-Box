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
exports.id = "pages/api/getLike";
exports.ids = ["pages/api/getLike"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ "(api)/./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: process.env.apiKey,\n    authDomain: process.env.authDomain,\n    projectId: process.env.projectId,\n    storageBucket: process.env.storageBucket,\n    messagingSenderId: process.env.messagingSenderId,\n    appId: process.env.appId\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUNBO0FBQ1A7QUFDaERHLG9EQUF3QixFQUFFO0FBQzFCLDREQUE0RDtBQUM1RCxpRUFBaUU7QUFFakUsd0NBQXdDO0FBQ3hDLE1BQU1FLGNBQWMsR0FBRztJQUNyQkMsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTTtJQUMxQkcsVUFBVSxFQUFFRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVTtJQUNsQ0MsU0FBUyxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsU0FBUztJQUNoQ0MsYUFBYSxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csYUFBYTtJQUN4Q0MsaUJBQWlCLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxpQkFBaUI7SUFDaERDLEtBQUssRUFBRU4sT0FBTyxDQUFDQyxHQUFHLENBQUNLLEtBQUs7Q0FDekI7QUFHRCxzQkFBc0I7QUFDZixNQUFNQyxHQUFHLEdBQUdiLDJEQUFhLENBQUNJLGNBQWMsQ0FBQyxDQUFDO0FBRXpDLE1BQU1VLEVBQUUsR0FBR2IsZ0VBQVksQ0FBQ1ksR0FBRyxDQUFDLENBQUM7QUFFckMsaUVBQWVkLG9EQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvLTUvLi9kYi5qcz81NjY1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcclxuaW1wb3J0IGZpcmViYXNlLCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7Z2V0RmlyZXN0b3JlfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5yZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpXHJcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxyXG4vLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjYXZhaWxhYmxlLWxpYnJhcmllc1xyXG5cclxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52LmFwaUtleSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5hdXRoRG9tYWluLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYucHJvamVjdElkLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LnN0b3JhZ2VCdWNrZXQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lm1lc3NhZ2luZ1NlbmRlcklkLFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5hcHBJZFxyXG59O1xyXG5cclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuZXhwb3J0IGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5cclxuZXhwb3J0ICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2UiXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJpbml0aWFsaXplQXBwIiwiZ2V0RmlyZXN0b3JlIiwicmVxdWlyZSIsImNvbmZpZyIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db.js\n");

/***/ }),

/***/ "(api)/./pages/api/getLike.js":
/*!******************************!*\
  !*** ./pages/api/getLike.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nasync function handler(req, res) {\n    const { id  } = req.query;\n    const { Token  } = req.cookies;\n    try {\n        const account = jwt.verify(Token, process.env.palabraSecreta);\n        const docGetOne = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"Comments\", id));\n        let likes = docGetOne.data().like;\n        const liked = likes.filter((lk)=>lk.id === account.__id);\n        let confirm = false;\n        if (liked.length > 0) {\n            confirm = liked[0].like;\n        }\n        const count = docGetOne.data().like.filter((lk)=>lk.like == true).length;\n        res.json({\n            likes: confirm,\n            length: count\n        });\n    } catch (err) {\n        console.log(err);\n        res.json({\n            data: [],\n            error: err.message,\n            success: false\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0TGlrZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFDd0M7QUFDcEYsTUFBTVMsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFjLENBQUM7QUFFcEIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNLEVBQUVDLEVBQUUsR0FBRSxHQUFHRixHQUFHLENBQUNKLEtBQUs7SUFDeEIsTUFBTSxFQUFFTyxLQUFLLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxPQUFPO0lBRTdCLElBQUk7UUFDQSxNQUFNQyxPQUFPLEdBQUdSLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDSCxLQUFLLEVBQUVJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLENBQUM7UUFFN0QsTUFBTUMsU0FBUyxHQUFHLE1BQU1uQiwwREFBTSxDQUFDRSx1REFBRyxDQUFDSCxtQ0FBRSxFQUFFLFVBQVUsRUFBRVksRUFBRSxDQUFDLENBQUM7UUFFdkQsSUFBSVMsS0FBSyxHQUFHRCxTQUFTLENBQUNFLElBQUksRUFBRSxDQUFDQyxJQUFJO1FBRWpDLE1BQU1DLEtBQUssR0FBR0gsS0FBSyxDQUFDSSxNQUFNLENBQUNDLENBQUFBLEVBQUUsR0FBSUEsRUFBRSxDQUFDZCxFQUFFLEtBQUtHLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDO1FBRXhELElBQUlDLE9BQU8sR0FBRyxLQUFLO1FBQ25CLElBQUlKLEtBQUssQ0FBQ0ssTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsQkQsT0FBTyxHQUFHSixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNELElBQUksQ0FBQztRQUM1QixDQUFDO1FBRUQsTUFBTU8sS0FBSyxHQUFHVixTQUFTLENBQUNFLElBQUksRUFBRSxDQUFDQyxJQUFJLENBQUNFLE1BQU0sQ0FBQ0MsQ0FBQUEsRUFBRSxHQUFJQSxFQUFFLENBQUNILElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQ00sTUFBTTtRQUV4RWxCLEdBQUcsQ0FBQ29CLElBQUksQ0FBQztZQUFFVixLQUFLLEVBQUNPLE9BQU87WUFBRUMsTUFBTSxFQUFDQyxLQUFLO1NBQUMsQ0FBQztJQUU1QyxFQUFFLE9BQU9FLEdBQUcsRUFBRTtRQUNWQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO1FBQ2hCckIsR0FBRyxDQUFDb0IsSUFBSSxDQUFDO1lBQUVULElBQUksRUFBRSxFQUFFO1lBQUVhLEtBQUssRUFBRUgsR0FBRyxDQUFDSSxPQUFPO1lBQUVDLE9BQU8sRUFBRSxLQUFLO1NBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvLTUvLi9wYWdlcy9hcGkvZ2V0TGlrZS5qcz8yZjNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpcmViYXNlLCBhcHAsIGRiIH0gZnJvbSAnLi4vLi4vZGInXHJcbmltcG9ydCB7IGdldERvYywgZ2V0RG9jcywgZG9jLCBjb2xsZWN0aW9uLCB3aGVyZSwgcXVlcnkgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IHsgVG9rZW4gfSA9IHJlcS5jb29raWVzXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gand0LnZlcmlmeShUb2tlbiwgcHJvY2Vzcy5lbnYucGFsYWJyYVNlY3JldGEpO1xyXG5cclxuICAgICAgICBjb25zdCBkb2NHZXRPbmUgPSBhd2FpdCBnZXREb2MoZG9jKGRiLCBcIkNvbW1lbnRzXCIsIGlkKSk7XHJcblxyXG4gICAgICAgIGxldCBsaWtlcyA9IGRvY0dldE9uZS5kYXRhKCkubGlrZTtcclxuXHJcbiAgICAgICAgY29uc3QgbGlrZWQgPSBsaWtlcy5maWx0ZXIobGsgPT4gbGsuaWQgPT09IGFjY291bnQuX19pZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNvbmZpcm0gPSBmYWxzZTtcclxuICAgICAgICBpZiAobGlrZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25maXJtID0gbGlrZWRbMF0ubGlrZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gZG9jR2V0T25lLmRhdGEoKS5saWtlLmZpbHRlcihsayA9PiBsay5saWtlID09IHRydWUpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgcmVzLmpzb24oeyBsaWtlczpjb25maXJtLCBsZW5ndGg6Y291bnR9KVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICByZXMuanNvbih7IGRhdGE6IFtdLCBlcnJvcjogZXJyLm1lc3NhZ2UsIHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImZpcmViYXNlIiwiYXBwIiwiZGIiLCJnZXREb2MiLCJnZXREb2NzIiwiZG9jIiwiY29sbGVjdGlvbiIsIndoZXJlIiwicXVlcnkiLCJqd3QiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImlkIiwiVG9rZW4iLCJjb29raWVzIiwiYWNjb3VudCIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJwYWxhYnJhU2VjcmV0YSIsImRvY0dldE9uZSIsImxpa2VzIiwiZGF0YSIsImxpa2UiLCJsaWtlZCIsImZpbHRlciIsImxrIiwiX19pZCIsImNvbmZpcm0iLCJsZW5ndGgiLCJjb3VudCIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getLike.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getLike.js"));
module.exports = __webpack_exports__;

})();