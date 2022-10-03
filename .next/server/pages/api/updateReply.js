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
exports.id = "pages/api/updateReply";
exports.ids = ["pages/api/updateReply"];
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

/***/ "(api)/./pages/api/updateReply.js":
/*!**********************************!*\
  !*** ./pages/api/updateReply.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nasync function handler(req, res) {\n    const { id , comment  } = req.query;\n    const { Token  } = req.cookies;\n    try {\n        const account = jwt.verify(Token, process.env.palabraSecreta);\n        const docGetOne = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"Comments\", id));\n        const reply = docGetOne.data().reply;\n        let idReply = 1;\n        reply.map((rp)=>{\n            if (rp.id >= idReply) {\n                idReply++;\n            }\n        });\n        reply.push({\n            user: account.__id,\n            commentId: id,\n            username: account.name,\n            comment: comment,\n            like: [],\n            date: new Date(),\n            id: idReply++\n        });\n        //Update\n        const docUpdated = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"Comments\", id), {\n            reply: reply\n        });\n        res.json({\n            success: true\n        });\n    } catch (err) {\n        console.log(err);\n        res.json({\n            error: err.message,\n            success: false\n        });\n    }\n} /*\r\n    //Post\r\n  try {\r\n    const docRef = await addDoc(collection(db, \"Task\"), {\r\n      name: \"Prueba 1\",\r\n      date: \"25/08/2022\"\r\n    });\r\n    console.log(\"Document written with ID: \", docRef.id);\r\n\r\n    //Update\r\n    const docUpdated = await updateDoc(doc(db, \"Task\", docRef.id),{\r\n      __id:docRef.id\r\n    })\r\n\r\n    //Get One\r\n    try {\r\n    const docGetOne = await getDoc(doc(db, \"Task\", docRef.id))\r\n    console.log(docGetOne.data());\r\n    } catch (err) {\r\n      console.log(err)\r\n    }\r\n\r\n    //Get One by data\r\n    // const taskCol1 = collection(db, 'Task');\r\n    // const queryConsultant = query(taskCol1, where('name',\"==\",\"Prueba\"));\r\n    // const taskSnapshot1 = await getDocs(queryConsultant);\r\n    // let taskList1;\r\n    // taskSnapshot1.forEach(doc => taskList1 = doc.data());\r\n    // console.log(taskList1)\r\n    // console.log(taskList1 != undefined)\r\n\r\n\r\n    //Delete\r\n    await deleteDoc(doc(db,\"Task\",docRef.id))\r\n\r\n  } catch (e) {\r\n    console.error(\"Error adding document: \", e);\r\n  }\r\n    //Get\r\n  const taskCol = collection(db, 'Task');\r\n  const taskSnapshot = await getDocs(taskCol);\r\n  const taskList = taskSnapshot.docs.map(doc => doc.data());\r\n  res.status(200).json(taskList)\r\n */ \n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlUmVwbHkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBQzRCO0FBQ3hFLE1BQU1PLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxrQ0FBYyxDQUFDO0FBRXBCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxFQUFFQyxFQUFFLEdBQUVDLE9BQU8sR0FBRSxHQUFHSCxHQUFHLENBQUNJLEtBQUs7SUFDakMsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0wsR0FBRyxDQUFDTSxPQUFPO0lBRTdCLElBQUk7UUFDRixNQUFNQyxPQUFPLEdBQUdWLEdBQUcsQ0FBQ1csTUFBTSxDQUFDSCxLQUFLLEVBQUVJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLENBQUM7UUFFN0QsTUFBTUMsU0FBUyxHQUFHLE1BQU1uQiwwREFBTSxDQUFDRSx1REFBRyxDQUFDSCxtQ0FBRSxFQUFFLFVBQVUsRUFBRVUsRUFBRSxDQUFDLENBQUM7UUFFdkQsTUFBTVcsS0FBSyxHQUFHRCxTQUFTLENBQUNFLElBQUksRUFBRSxDQUFDRCxLQUFLO1FBRXBDLElBQUlFLE9BQU8sR0FBRyxDQUFDO1FBRWZGLEtBQUssQ0FBQ0csR0FBRyxDQUFDLENBQUNDLEVBQUUsR0FBSztZQUNoQixJQUFJQSxFQUFFLENBQUNmLEVBQUUsSUFBSWEsT0FBTyxFQUFFO2dCQUNwQkEsT0FBTyxFQUFFO1lBQ1gsQ0FBQztRQUNILENBQUMsQ0FBQztRQUNGRixLQUFLLENBQUNLLElBQUksQ0FBQztZQUNUQyxJQUFJLEVBQUVaLE9BQU8sQ0FBQ2EsSUFBSTtZQUNsQkMsU0FBUyxFQUFFbkIsRUFBRTtZQUNib0IsUUFBUSxFQUFFZixPQUFPLENBQUNnQixJQUFJO1lBQ3RCcEIsT0FBTyxFQUFFQSxPQUFPO1lBQ2hCcUIsSUFBSSxFQUFFLEVBQUU7WUFDUkMsSUFBSSxFQUFFLElBQUlDLElBQUksRUFBRTtZQUNoQnhCLEVBQUUsRUFBRWEsT0FBTyxFQUFFO1NBQ2QsQ0FBQztRQUlGLFFBQVE7UUFDUixNQUFNWSxVQUFVLEdBQUcsTUFBTWpDLDZEQUFTLENBQUNDLHVEQUFHLENBQUNILG1DQUFFLEVBQUUsVUFBVSxFQUFFVSxFQUFFLENBQUMsRUFBRTtZQUMxRFcsS0FBSyxFQUFFQSxLQUFLO1NBQ2IsQ0FBQztRQUVGWixHQUFHLENBQUMyQixJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLElBQUk7U0FBRSxDQUFDO0lBRTdCLEVBQUUsT0FBT0MsR0FBRyxFQUFFO1FBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7UUFDaEI3QixHQUFHLENBQUMyQixJQUFJLENBQUM7WUFBRUssS0FBSyxFQUFFSCxHQUFHLENBQUNJLE9BQU87WUFBRUwsT0FBTyxFQUFFLEtBQUs7U0FBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztBQUNILENBQUMsQ0FHRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byby01Ly4vcGFnZXMvYXBpL3VwZGF0ZVJlcGx5LmpzPzU3NzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlyZWJhc2UsIGFwcCwgZGIgfSBmcm9tICcuLi8uLi9kYidcclxuaW1wb3J0IHsgZ2V0RG9jLCB1cGRhdGVEb2MsIGRvYywgY29sbGVjdGlvbiB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgaWQsIGNvbW1lbnQgfSA9IHJlcS5xdWVyeTtcclxuICBjb25zdCB7IFRva2VuIH0gPSByZXEuY29va2llc1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgYWNjb3VudCA9IGp3dC52ZXJpZnkoVG9rZW4sIHByb2Nlc3MuZW52LnBhbGFicmFTZWNyZXRhKTtcclxuXHJcbiAgICBjb25zdCBkb2NHZXRPbmUgPSBhd2FpdCBnZXREb2MoZG9jKGRiLCBcIkNvbW1lbnRzXCIsIGlkKSk7XHJcblxyXG4gICAgY29uc3QgcmVwbHkgPSBkb2NHZXRPbmUuZGF0YSgpLnJlcGx5O1xyXG5cclxuICAgIGxldCBpZFJlcGx5ID0gMTtcclxuXHJcbiAgICByZXBseS5tYXAoKHJwKSA9PiB7XHJcbiAgICAgIGlmIChycC5pZCA+PSBpZFJlcGx5KSB7XHJcbiAgICAgICAgaWRSZXBseSsrXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXBseS5wdXNoKHtcclxuICAgICAgdXNlcjogYWNjb3VudC5fX2lkLFxyXG4gICAgICBjb21tZW50SWQ6IGlkLFxyXG4gICAgICB1c2VybmFtZTogYWNjb3VudC5uYW1lLFxyXG4gICAgICBjb21tZW50OiBjb21tZW50LFxyXG4gICAgICBsaWtlOiBbXSxcclxuICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgaWQ6IGlkUmVwbHkrK1xyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgIC8vVXBkYXRlXHJcbiAgICBjb25zdCBkb2NVcGRhdGVkID0gYXdhaXQgdXBkYXRlRG9jKGRvYyhkYiwgXCJDb21tZW50c1wiLCBpZCksIHtcclxuICAgICAgcmVwbHk6IHJlcGx5XHJcbiAgICB9KVxyXG5cclxuICAgIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KVxyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIHJlcy5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlLCBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gICAgLy9Qb3N0XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCBcIlRhc2tcIiksIHtcclxuICAgICAgbmFtZTogXCJQcnVlYmEgMVwiLFxyXG4gICAgICBkYXRlOiBcIjI1LzA4LzIwMjJcIlxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IHdyaXR0ZW4gd2l0aCBJRDogXCIsIGRvY1JlZi5pZCk7XHJcblxyXG4gICAgLy9VcGRhdGVcclxuICAgIGNvbnN0IGRvY1VwZGF0ZWQgPSBhd2FpdCB1cGRhdGVEb2MoZG9jKGRiLCBcIlRhc2tcIiwgZG9jUmVmLmlkKSx7XHJcbiAgICAgIF9faWQ6ZG9jUmVmLmlkXHJcbiAgICB9KVxyXG5cclxuICAgIC8vR2V0IE9uZVxyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IGRvY0dldE9uZSA9IGF3YWl0IGdldERvYyhkb2MoZGIsIFwiVGFza1wiLCBkb2NSZWYuaWQpKVxyXG4gICAgY29uc29sZS5sb2coZG9jR2V0T25lLmRhdGEoKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0IE9uZSBieSBkYXRhXHJcbiAgICAvLyBjb25zdCB0YXNrQ29sMSA9IGNvbGxlY3Rpb24oZGIsICdUYXNrJyk7XHJcbiAgICAvLyBjb25zdCBxdWVyeUNvbnN1bHRhbnQgPSBxdWVyeSh0YXNrQ29sMSwgd2hlcmUoJ25hbWUnLFwiPT1cIixcIlBydWViYVwiKSk7XHJcbiAgICAvLyBjb25zdCB0YXNrU25hcHNob3QxID0gYXdhaXQgZ2V0RG9jcyhxdWVyeUNvbnN1bHRhbnQpO1xyXG4gICAgLy8gbGV0IHRhc2tMaXN0MTtcclxuICAgIC8vIHRhc2tTbmFwc2hvdDEuZm9yRWFjaChkb2MgPT4gdGFza0xpc3QxID0gZG9jLmRhdGEoKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0YXNrTGlzdDEpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0YXNrTGlzdDEgIT0gdW5kZWZpbmVkKVxyXG5cclxuXHJcbiAgICAvL0RlbGV0ZVxyXG4gICAgYXdhaXQgZGVsZXRlRG9jKGRvYyhkYixcIlRhc2tcIixkb2NSZWYuaWQpKVxyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGRvY3VtZW50OiBcIiwgZSk7XHJcbiAgfVxyXG4gICAgLy9HZXRcclxuICBjb25zdCB0YXNrQ29sID0gY29sbGVjdGlvbihkYiwgJ1Rhc2snKTtcclxuICBjb25zdCB0YXNrU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHRhc2tDb2wpO1xyXG4gIGNvbnN0IHRhc2tMaXN0ID0gdGFza1NuYXBzaG90LmRvY3MubWFwKGRvYyA9PiBkb2MuZGF0YSgpKTtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih0YXNrTGlzdClcclxuICovIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiYXBwIiwiZGIiLCJnZXREb2MiLCJ1cGRhdGVEb2MiLCJkb2MiLCJjb2xsZWN0aW9uIiwiand0IiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsImNvbW1lbnQiLCJxdWVyeSIsIlRva2VuIiwiY29va2llcyIsImFjY291bnQiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwicGFsYWJyYVNlY3JldGEiLCJkb2NHZXRPbmUiLCJyZXBseSIsImRhdGEiLCJpZFJlcGx5IiwibWFwIiwicnAiLCJwdXNoIiwidXNlciIsIl9faWQiLCJjb21tZW50SWQiLCJ1c2VybmFtZSIsIm5hbWUiLCJsaWtlIiwiZGF0ZSIsIkRhdGUiLCJkb2NVcGRhdGVkIiwianNvbiIsInN1Y2Nlc3MiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateReply.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateReply.js"));
module.exports = __webpack_exports__;

})();