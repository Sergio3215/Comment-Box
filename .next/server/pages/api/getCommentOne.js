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
exports.id = "pages/api/getCommentOne";
exports.ids = ["pages/api/getCommentOne"];
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

/***/ "(api)/./pages/api/getCommentOne.js":
/*!************************************!*\
  !*** ./pages/api/getCommentOne.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nasync function handler(req, res) {\n    const { id  } = req.query;\n    const { Token  } = req.cookies;\n    // console.log(id)\n    try {\n        const account = jwt.verify(Token, process.env.palabraSecreta);\n        const docGetOne = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"Comments\", id));\n        // console.log(docGetOne.data());\n        let commentList = [];\n        commentList.push(docGetOne.data());\n        commentList.map(async (doc)=>{\n            let likeConfirmed = false;\n            // console.log(doc.like)\n            doc.like.map((lk)=>{\n                if (account.__id == lk.id) {\n                    likeConfirmed = lk.like;\n                }\n            });\n            if (doc.reply.length > 0 & doc.reply != undefined) {\n                doc.reply.map((rp)=>{\n                    rp.like.map((lk)=>{\n                        if (account.__id == lk.id) {\n                            likeConfirmed = lk.like;\n                        }\n                    });\n                    let dateFirebase = rp.date;\n                    rp.like = likeConfirmed;\n                    rp.arrayUsers = [];\n                    rp.date = new Date(dateFirebase.toDate()).toLocaleDateString();\n                    rp.hours = new Date(dateFirebase.toDate()).toLocaleTimeString();\n                });\n            }\n            let dateFirebase = doc.date;\n            doc.like = likeConfirmed;\n            doc.arrayUsers = [];\n            doc.date = new Date(dateFirebase.toDate()).toLocaleDateString();\n            doc.hours = new Date(dateFirebase.toDate()).toLocaleTimeString();\n        });\n        res.json({\n            commentList\n        });\n    } catch (err) {\n        // console.log(err)\n        res.json({\n            data: [],\n            error: err.message,\n            success: false\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3BFLENBQUMsQ0FBQztRQUVGN0IsR0FBRyxDQUFDOEIsSUFBSSxDQUFDO1lBQUNwQixXQUFXO1NBQUMsQ0FBQztJQUUzQixFQUFFLE9BQU9xQixHQUFHLEVBQUU7UUFDVixtQkFBbUI7UUFDbkIvQixHQUFHLENBQUM4QixJQUFJLENBQUM7WUFBRWxCLElBQUksRUFBRSxFQUFFO1lBQUVvQixLQUFLLEVBQUVELEdBQUcsQ0FBQ0UsT0FBTztZQUFFQyxPQUFPLEVBQUMsS0FBSztTQUFHLENBQUMsQ0FBQztJQUMvRCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byby01Ly4vcGFnZXMvYXBpL2dldENvbW1lbnRPbmUuanM/OGU1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaXJlYmFzZSwgYXBwLCBkYiB9IGZyb20gJy4uLy4uL2RiJ1xyXG5pbXBvcnQgeyBnZXREb2MsIGdldERvY3MsIGRvYywgY29sbGVjdGlvbiwgd2hlcmUsIHF1ZXJ5IH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCB7VG9rZW59ID0gcmVxLmNvb2tpZXNcclxuICAgIC8vIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gand0LnZlcmlmeShUb2tlbiwgcHJvY2Vzcy5lbnYucGFsYWJyYVNlY3JldGEpO1xyXG5cclxuICAgICAgICBjb25zdCBkb2NHZXRPbmUgPSBhd2FpdCBnZXREb2MoZG9jKGRiLCBcIkNvbW1lbnRzXCIsIGlkKSlcclxuICAgIC8vIGNvbnNvbGUubG9nKGRvY0dldE9uZS5kYXRhKCkpO1xyXG5cclxuICAgICAgICBsZXQgY29tbWVudExpc3QgPSBbXTtcclxuICAgICAgICBjb21tZW50TGlzdC5wdXNoKGRvY0dldE9uZS5kYXRhKCkpXHJcblxyXG4gICAgICAgIGNvbW1lbnRMaXN0Lm1hcChhc3luYyAoZG9jKT0+e1xyXG5cclxuICAgICAgICAgICAgbGV0IGxpa2VDb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZG9jLmxpa2UpXHJcblxyXG4gICAgICAgICAgICBkb2MubGlrZS5tYXAobGs9PntcclxuICAgICAgICAgICAgICAgIGlmKGFjY291bnQuX19pZCA9PSBsay5pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZUNvbmZpcm1lZCA9IGxrLmxpa2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihkb2MucmVwbHkubGVuZ3RoID4gMCAmIGRvYy5yZXBseSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgZG9jLnJlcGx5Lm1hcChycD0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJwLmxpa2UubWFwKGxrPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYWNjb3VudC5fX2lkID09IGxrLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZUNvbmZpcm1lZCA9IGxrLmxpa2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZUZpcmViYXNlID0gcnAuZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIHJwLmxpa2UgPSBsaWtlQ29uZmlybWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHJwLmFycmF5VXNlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBycC5kYXRlPSBuZXcgRGF0ZShkYXRlRmlyZWJhc2UudG9EYXRlKCkpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJwLmhvdXJzPSBuZXcgRGF0ZShkYXRlRmlyZWJhc2UudG9EYXRlKCkpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGVGaXJlYmFzZSA9IGRvYy5kYXRlXHJcbiAgICAgICAgICAgIGRvYy5saWtlID0gbGlrZUNvbmZpcm1lZDtcclxuICAgICAgICAgICAgZG9jLmFycmF5VXNlcnMgPSBbXTtcclxuICAgICAgICAgICAgZG9jLmRhdGU9IG5ldyBEYXRlKGRhdGVGaXJlYmFzZS50b0RhdGUoKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGRvYy5ob3Vycz0gbmV3IERhdGUoZGF0ZUZpcmViYXNlLnRvRGF0ZSgpKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXMuanNvbih7Y29tbWVudExpc3R9KVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICByZXMuanNvbih7IGRhdGE6IFtdLCBlcnJvcjogZXJyLm1lc3NhZ2UsIHN1Y2Nlc3M6ZmFsc2UgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImFwcCIsImRiIiwiZ2V0RG9jIiwiZ2V0RG9jcyIsImRvYyIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsInF1ZXJ5Iiwiand0IiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsIlRva2VuIiwiY29va2llcyIsImFjY291bnQiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwicGFsYWJyYVNlY3JldGEiLCJkb2NHZXRPbmUiLCJjb21tZW50TGlzdCIsInB1c2giLCJkYXRhIiwibWFwIiwibGlrZUNvbmZpcm1lZCIsImxpa2UiLCJsayIsIl9faWQiLCJyZXBseSIsImxlbmd0aCIsInVuZGVmaW5lZCIsInJwIiwiZGF0ZUZpcmViYXNlIiwiZGF0ZSIsImFycmF5VXNlcnMiLCJEYXRlIiwidG9EYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiaG91cnMiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJqc29uIiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getCommentOne.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getCommentOne.js"));
module.exports = __webpack_exports__;

})();