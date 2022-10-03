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
exports.id = "pages/api/getComment";
exports.ids = ["pages/api/getComment"];
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

/***/ "(api)/./pages/api/getComment.js":
/*!*********************************!*\
  !*** ./pages/api/getComment.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nasync function handler(req, res) {\n    const { comment  } = req.query;\n    const { Token  } = req.cookies;\n    try {\n        const account = jwt.verify(Token, process.env.palabraSecreta);\n        const commentCol = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"Comments\");\n        const queryConsultant = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(commentCol, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"user\", \"!=\", \"default\"));\n        const commentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(queryConsultant);\n        const commentList = commentSnapshot.docs.map((doc)=>doc.data());\n        commentList.map(async (doc)=>{\n            let likeConfirmed = false;\n            // console.log(doc.like)\n            doc.like.map((lk)=>{\n                if (account.__id == lk.id) {\n                    likeConfirmed = lk.like;\n                }\n            });\n            if (doc.reply.length > 0 & doc.reply != undefined) {\n                doc.reply.map((rp)=>{\n                    rp.like.map((lk)=>{\n                        if (account.__id == lk.id) {\n                            likeConfirmed = lk.like;\n                        }\n                    });\n                    let dateFirebase = rp.date;\n                    rp.like = likeConfirmed;\n                    rp.arrayUsers = [];\n                    rp.date = new Date(dateFirebase.toDate()).toLocaleDateString();\n                    rp.hours = new Date(dateFirebase.toDate()).toLocaleTimeString();\n                });\n            }\n            let dateFirebase = doc.date;\n            doc.like = likeConfirmed;\n            doc.arrayUsers = [];\n            doc.date = new Date(dateFirebase.toDate()).toLocaleDateString();\n            doc.hours = new Date(dateFirebase.toDate()).toLocaleTimeString();\n        });\n        res.json({\n            commentList\n        });\n    } catch (err) {\n        // console.log(err)\n        res.json({\n            data: [],\n            error: err.message,\n            success: false\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQ0Msa0JBQWtCLEVBQUUsQ0FBQztZQUMvRHRDLEdBQUcsQ0FBQ3VDLEtBQUssR0FBRSxJQUFJSCxJQUFJLENBQUNILFlBQVksQ0FBQ0ksTUFBTSxFQUFFLENBQUMsQ0FBQ0csa0JBQWtCLEVBQUUsQ0FBQztRQUNwRSxDQUFDLENBQUM7UUFFRmhDLEdBQUcsQ0FBQ2lDLElBQUksQ0FBQztZQUFDckIsV0FBVztTQUFDLENBQUM7SUFFM0IsRUFBRSxPQUFPc0IsR0FBRyxFQUFFO1FBQ1YsbUJBQW1CO1FBQ25CbEMsR0FBRyxDQUFDaUMsSUFBSSxDQUFDO1lBQUVsQixJQUFJLEVBQUUsRUFBRTtZQUFFb0IsS0FBSyxFQUFFRCxHQUFHLENBQUNFLE9BQU87WUFBRUMsT0FBTyxFQUFDLEtBQUs7U0FBRyxDQUFDLENBQUM7SUFDL0QsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm8tNS8uL3BhZ2VzL2FwaS9nZXRDb21tZW50LmpzP2JiYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlyZWJhc2UsIGFwcCwgZGIgfSBmcm9tICcuLi8uLi9kYidcclxuaW1wb3J0IHsgZ2V0RG9jLCBnZXREb2NzLCBkb2MsIGNvbGxlY3Rpb24sIHdoZXJlLCBxdWVyeSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBjb21tZW50IH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCB7VG9rZW59ID0gcmVxLmNvb2tpZXNcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBqd3QudmVyaWZ5KFRva2VuLCBwcm9jZXNzLmVudi5wYWxhYnJhU2VjcmV0YSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRDb2wgPSBjb2xsZWN0aW9uKGRiLCAnQ29tbWVudHMnKTtcclxuICAgICAgICBjb25zdCBxdWVyeUNvbnN1bHRhbnQgPSBxdWVyeShjb21tZW50Q29sLCB3aGVyZSgndXNlcicsIFwiIT1cIiwgJ2RlZmF1bHQnKSk7XHJcbiAgICAgICAgY29uc3QgY29tbWVudFNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxdWVyeUNvbnN1bHRhbnQpO1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRMaXN0ID0gY29tbWVudFNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiBkb2MuZGF0YSgpKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgY29tbWVudExpc3QubWFwKGFzeW5jIChkb2MpPT57XHJcblxyXG4gICAgICAgICAgICBsZXQgbGlrZUNvbmZpcm1lZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkb2MubGlrZSlcclxuXHJcbiAgICAgICAgICAgIGRvYy5saWtlLm1hcChsaz0+e1xyXG4gICAgICAgICAgICAgICAgaWYoYWNjb3VudC5fX2lkID09IGxrLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICBsaWtlQ29uZmlybWVkID0gbGsubGlrZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGRvYy5yZXBseS5sZW5ndGggPiAwICYgZG9jLnJlcGx5ICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBkb2MucmVwbHkubWFwKHJwPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcnAubGlrZS5tYXAobGs9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihhY2NvdW50Ll9faWQgPT0gbGsuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWtlQ29uZmlybWVkID0gbGsubGlrZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRlRmlyZWJhc2UgPSBycC5kYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgcnAubGlrZSA9IGxpa2VDb25maXJtZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcnAuYXJyYXlVc2VycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJwLmRhdGU9IG5ldyBEYXRlKGRhdGVGaXJlYmFzZS50b0RhdGUoKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcnAuaG91cnM9IG5ldyBEYXRlKGRhdGVGaXJlYmFzZS50b0RhdGUoKSkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0ZUZpcmViYXNlID0gZG9jLmRhdGVcclxuICAgICAgICAgICAgZG9jLmxpa2UgPSBsaWtlQ29uZmlybWVkO1xyXG4gICAgICAgICAgICBkb2MuYXJyYXlVc2VycyA9IFtdO1xyXG4gICAgICAgICAgICBkb2MuZGF0ZT0gbmV3IERhdGUoZGF0ZUZpcmViYXNlLnRvRGF0ZSgpKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgZG9jLmhvdXJzPSBuZXcgRGF0ZShkYXRlRmlyZWJhc2UudG9EYXRlKCkpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJlcy5qc29uKHtjb21tZW50TGlzdH0pXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIHJlcy5qc29uKHsgZGF0YTogW10sIGVycm9yOiBlcnIubWVzc2FnZSwgc3VjY2VzczpmYWxzZSAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiYXBwIiwiZGIiLCJnZXREb2MiLCJnZXREb2NzIiwiZG9jIiwiY29sbGVjdGlvbiIsIndoZXJlIiwicXVlcnkiLCJqd3QiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbW1lbnQiLCJUb2tlbiIsImNvb2tpZXMiLCJhY2NvdW50IiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsInBhbGFicmFTZWNyZXRhIiwiY29tbWVudENvbCIsInF1ZXJ5Q29uc3VsdGFudCIsImNvbW1lbnRTbmFwc2hvdCIsImNvbW1lbnRMaXN0IiwiZG9jcyIsIm1hcCIsImRhdGEiLCJsaWtlQ29uZmlybWVkIiwibGlrZSIsImxrIiwiX19pZCIsImlkIiwicmVwbHkiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJycCIsImRhdGVGaXJlYmFzZSIsImRhdGUiLCJhcnJheVVzZXJzIiwiRGF0ZSIsInRvRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImhvdXJzIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwianNvbiIsImVyciIsImVycm9yIiwibWVzc2FnZSIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getComment.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getComment.js"));
module.exports = __webpack_exports__;

})();