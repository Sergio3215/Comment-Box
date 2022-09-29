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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst createToken = (userToken, secretWord, expiresIn)=>{\n    // console.log(userToken);\n    const { __id , email , password , account , name  } = userToken;\n    return jwt.sign({\n        __id,\n        email,\n        name,\n        account,\n        password\n    }, secretWord, {\n        expiresIn\n    });\n};\nasync function handler(req, res) {\n    const { comment  } = req.query;\n    const { Token  } = req.cookies;\n    try {\n        const account = jwt.verify(Token, process.env.palabraSecreta);\n        const commentCol = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"Comments\");\n        const queryConsultant = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(commentCol, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"user\", \"!=\", \"default\"));\n        const commentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(queryConsultant);\n        const commentList = commentSnapshot.docs.map((doc)=>doc.data());\n        commentList.map((doc)=>{\n            doc.like = false;\n            doc.reply = [];\n            doc.arrayUsers = [];\n        });\n        res.json({\n            commentList\n        });\n    } catch (err) {\n        console.log(err);\n        res.json({\n            data: [],\n            error: err.message,\n            success: false\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q29tbWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFDZ0M7QUFDNUUsTUFBTVEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFjLENBQUM7QUFFbkMsTUFBTUMsV0FBVyxHQUFHLENBQUNDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEdBQUs7SUFDdEQsMEJBQTBCO0lBQzFCLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUVDLFFBQVEsR0FBRUMsT0FBTyxHQUFFQyxJQUFJLEdBQUUsR0FBR1AsU0FBUztJQUMxRCxPQUFPSCxHQUFHLENBQUNXLElBQUksQ0FBQztRQUFFTCxJQUFJO1FBQUVDLEtBQUs7UUFBRUcsSUFBSTtRQUFFRCxPQUFPO1FBQUVELFFBQVE7S0FBRSxFQUFFSixVQUFVLEVBQUU7UUFBRUMsU0FBUztLQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBRWMsZUFBZU8sT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNLEVBQUVDLE9BQU8sR0FBRSxHQUFHRixHQUFHLENBQUNkLEtBQUs7SUFDN0IsTUFBTSxFQUFDaUIsS0FBSyxHQUFDLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTztJQUUzQixJQUFJO1FBQ0EsTUFBTVIsT0FBTyxHQUFHVCxHQUFHLENBQUNrQixNQUFNLENBQUNGLEtBQUssRUFBRUcsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGNBQWMsQ0FBQztRQUU3RCxNQUFNQyxVQUFVLEdBQUd6Qiw4REFBVSxDQUFDSCxtQ0FBRSxFQUFFLFVBQVUsQ0FBQztRQUM3QyxNQUFNNkIsZUFBZSxHQUFHeEIseURBQUssQ0FBQ3VCLFVBQVUsRUFBRXhCLHlEQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN6RSxNQUFNMEIsZUFBZSxHQUFHLE1BQU03QiwyREFBTyxDQUFDNEIsZUFBZSxDQUFDO1FBQ3RELE1BQU1FLFdBQVcsR0FBR0QsZUFBZSxDQUFDRSxJQUFJLENBQUNDLEdBQUcsQ0FBQy9CLENBQUFBLEdBQUcsR0FBSUEsR0FBRyxDQUFDZ0MsSUFBSSxFQUFFLENBQUM7UUFFL0RILFdBQVcsQ0FBQ0UsR0FBRyxDQUFDL0IsQ0FBQUEsR0FBRyxHQUFFO1lBQ2pCQSxHQUFHLENBQUNpQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ2pCakMsR0FBRyxDQUFDa0MsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNmbEMsR0FBRyxDQUFDbUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUM7UUFFRmpCLEdBQUcsQ0FBQ2tCLElBQUksQ0FBQztZQUFDUCxXQUFXO1NBQUMsQ0FBQztJQUUzQixFQUFFLE9BQU9RLEdBQUcsRUFBRTtRQUNWQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO1FBQ2hCbkIsR0FBRyxDQUFDa0IsSUFBSSxDQUFDO1lBQUVKLElBQUksRUFBRSxFQUFFO1lBQUVRLEtBQUssRUFBRUgsR0FBRyxDQUFDSSxPQUFPO1lBQUVDLE9BQU8sRUFBQyxLQUFLO1NBQUcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvLTUvLi9wYWdlcy9hcGkvZ2V0Q29tbWVudC5qcz9iYmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpcmViYXNlLCBhcHAsIGRiIH0gZnJvbSAnLi4vLi4vZGInXHJcbmltcG9ydCB7IGdldERvY3MsIGRvYywgY29sbGVjdGlvbiwgd2hlcmUsIHF1ZXJ5IH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XHJcblxyXG5jb25zdCBjcmVhdGVUb2tlbiA9ICh1c2VyVG9rZW4sIHNlY3JldFdvcmQsIGV4cGlyZXNJbikgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2codXNlclRva2VuKTtcclxuICAgIGNvbnN0IHsgX19pZCwgZW1haWwsIHBhc3N3b3JkLCBhY2NvdW50LCBuYW1lIH0gPSB1c2VyVG9rZW47XHJcbiAgICByZXR1cm4gand0LnNpZ24oeyBfX2lkLCBlbWFpbCwgbmFtZSwgYWNjb3VudCwgcGFzc3dvcmQgfSwgc2VjcmV0V29yZCwgeyBleHBpcmVzSW4gfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgY29tbWVudCB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc3Qge1Rva2VufSA9IHJlcS5jb29raWVzXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gand0LnZlcmlmeShUb2tlbiwgcHJvY2Vzcy5lbnYucGFsYWJyYVNlY3JldGEpO1xyXG5cclxuICAgICAgICBjb25zdCBjb21tZW50Q29sID0gY29sbGVjdGlvbihkYiwgJ0NvbW1lbnRzJyk7XHJcbiAgICAgICAgY29uc3QgcXVlcnlDb25zdWx0YW50ID0gcXVlcnkoY29tbWVudENvbCwgd2hlcmUoJ3VzZXInLCBcIiE9XCIsICdkZWZhdWx0JykpO1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocXVlcnlDb25zdWx0YW50KTtcclxuICAgICAgICBjb25zdCBjb21tZW50TGlzdCA9IGNvbW1lbnRTbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4gZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29tbWVudExpc3QubWFwKGRvYz0+e1xyXG4gICAgICAgICAgICBkb2MubGlrZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkb2MucmVwbHkgPSBbXTtcclxuICAgICAgICAgICAgZG9jLmFycmF5VXNlcnMgPSBbXTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXMuanNvbih7Y29tbWVudExpc3R9KVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICByZXMuanNvbih7IGRhdGE6IFtdLCBlcnJvcjogZXJyLm1lc3NhZ2UsIHN1Y2Nlc3M6ZmFsc2UgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImFwcCIsImRiIiwiZ2V0RG9jcyIsImRvYyIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsInF1ZXJ5Iiwiand0IiwicmVxdWlyZSIsImNyZWF0ZVRva2VuIiwidXNlclRva2VuIiwic2VjcmV0V29yZCIsImV4cGlyZXNJbiIsIl9faWQiLCJlbWFpbCIsInBhc3N3b3JkIiwiYWNjb3VudCIsIm5hbWUiLCJzaWduIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbW1lbnQiLCJUb2tlbiIsImNvb2tpZXMiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwicGFsYWJyYVNlY3JldGEiLCJjb21tZW50Q29sIiwicXVlcnlDb25zdWx0YW50IiwiY29tbWVudFNuYXBzaG90IiwiY29tbWVudExpc3QiLCJkb2NzIiwibWFwIiwiZGF0YSIsImxpa2UiLCJyZXBseSIsImFycmF5VXNlcnMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getComment.js\n");

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