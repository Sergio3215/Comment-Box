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
exports.id = "pages/api/addComment";
exports.ids = ["pages/api/addComment"];
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

/***/ "(api)/./pages/api/addComment.js":
/*!*********************************!*\
  !*** ./pages/api/addComment.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst createToken = (userToken, secretWord, expiresIn)=>{\n    // console.log(userToken);\n    const { __id , email , password , account , name  } = userToken;\n    return jwt.sign({\n        __id,\n        email,\n        name,\n        account,\n        password\n    }, secretWord, {\n        expiresIn\n    });\n};\nasync function handler(req, res) {\n    const { comment  } = req.query;\n    const { Token  } = req.cookies;\n    try {\n        const account = jwt.verify(Token, process.env.palabraSecreta);\n        // console.log(account.__id);\n        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"Comments\"), {\n            user: account.__id,\n            username: account.name,\n            comment: comment,\n            like: [],\n            reply: []\n        });\n        //Update\n        const docUpdated = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"Comments\", docRef.id), {\n            __id: docRef.id\n        });\n        res.json({\n            success: true\n        });\n    } catch (err) {\n        console.log(err);\n        res.json({\n            data: [],\n            error: err.message,\n            success: false\n        });\n    }\n} /*\r\n    //Post\r\n  try {\r\n    const docRef = await addDoc(collection(db, \"Task\"), {\r\n      name: \"Prueba 1\",\r\n      date: \"25/08/2022\"\r\n    });\r\n    console.log(\"Document written with ID: \", docRef.id);\r\n\r\n    //Update\r\n    const docUpdated = await updateDoc(doc(db, \"Task\", docRef.id),{\r\n      __id:docRef.id\r\n    })\r\n\r\n    //Get One\r\n    try {\r\n    const docGetOne = await getDoc(doc(db, \"Task\", docRef.id))\r\n    console.log(docGetOne.data());\r\n    } catch (err) {\r\n      console.log(err)\r\n    }\r\n\r\n    //Get One by data\r\n    // const taskCol1 = collection(db, 'Task');\r\n    // const queryConsultant = query(taskCol1, where('name',\"==\",\"Prueba\"));\r\n    // const taskSnapshot1 = await getDocs(queryConsultant);\r\n    // let taskList1;\r\n    // taskSnapshot1.forEach(doc => taskList1 = doc.data());\r\n    // console.log(taskList1)\r\n    // console.log(taskList1 != undefined)\r\n\r\n\r\n    //Delete\r\n    await deleteDoc(doc(db,\"Task\",docRef.id))\r\n\r\n  } catch (e) {\r\n    console.error(\"Error adding document: \", e);\r\n  }\r\n    //Get\r\n  const taskCol = collection(db, 'Task');\r\n  const taskSnapshot = await getDocs(taskCol);\r\n  const taskList = taskSnapshot.docs.map(doc => doc.data());\r\n  res.status(200).json(taskList)\r\n */ \n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkQ29tbWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFDNEI7QUFDeEUsTUFBTU8sR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFjLENBQUM7QUFFbkMsTUFBTUMsV0FBVyxHQUFHLENBQUNDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEdBQUs7SUFDdEQsMEJBQTBCO0lBQzFCLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUVDLFFBQVEsR0FBRUMsT0FBTyxHQUFFQyxJQUFJLEdBQUUsR0FBR1AsU0FBUztJQUMxRCxPQUFPSCxHQUFHLENBQUNXLElBQUksQ0FBQztRQUFFTCxJQUFJO1FBQUVDLEtBQUs7UUFBRUcsSUFBSTtRQUFFRCxPQUFPO1FBQUVELFFBQVE7S0FBRSxFQUFFSixVQUFVLEVBQUU7UUFBRUMsU0FBUztLQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBRWMsZUFBZU8sT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNLEVBQUVDLE9BQU8sR0FBRSxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFDN0IsTUFBTSxFQUFDQyxLQUFLLEdBQUMsR0FBR0osR0FBRyxDQUFDSyxPQUFPO0lBRTNCLElBQUk7UUFDQSxNQUFNVCxPQUFPLEdBQUdULEdBQUcsQ0FBQ21CLE1BQU0sQ0FBQ0YsS0FBSyxFQUFFRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDO1FBQzdELDZCQUE2QjtRQUU3QixNQUFNQyxNQUFNLEdBQUcsTUFBTTNCLDBEQUFNLENBQUNHLDhEQUFVLENBQUNKLG1DQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUU7WUFDcEQ2QixJQUFJLEVBQUVmLE9BQU8sQ0FBQ0gsSUFBSTtZQUNsQm1CLFFBQVEsRUFBRWhCLE9BQU8sQ0FBQ0MsSUFBSTtZQUN0QkssT0FBTyxFQUFFQSxPQUFPO1lBQ2hCVyxJQUFJLEVBQUMsRUFBRTtZQUNQQyxLQUFLLEVBQUMsRUFBRTtTQUNULENBQUM7UUFFRixRQUFRO1FBQ1IsTUFBTUMsVUFBVSxHQUFHLE1BQU0vQiw2REFBUyxDQUFDQyx1REFBRyxDQUFDSCxtQ0FBRSxFQUFFLFVBQVUsRUFBRTRCLE1BQU0sQ0FBQ00sRUFBRSxDQUFDLEVBQUM7WUFDaEV2QixJQUFJLEVBQUNpQixNQUFNLENBQUNNLEVBQUU7U0FDZixDQUFDO1FBRUpmLEdBQUcsQ0FBQ2dCLElBQUksQ0FBQztZQUFDQyxPQUFPLEVBQUMsSUFBSTtTQUFDLENBQUM7SUFFNUIsRUFBRSxPQUFPQyxHQUFHLEVBQUU7UUFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQztRQUNoQmxCLEdBQUcsQ0FBQ2dCLElBQUksQ0FBQztZQUFFSyxJQUFJLEVBQUUsRUFBRTtZQUFFQyxLQUFLLEVBQUVKLEdBQUcsQ0FBQ0ssT0FBTztZQUFFTixPQUFPLEVBQUMsS0FBSztTQUFHLENBQUMsQ0FBQztJQUMvRCxDQUFDO0FBQ0wsQ0FBQyxDQUdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvLTUvLi9wYWdlcy9hcGkvYWRkQ29tbWVudC5qcz9iMWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpcmViYXNlLCBhcHAsIGRiIH0gZnJvbSAnLi4vLi4vZGInXHJcbmltcG9ydCB7IGFkZERvYywgdXBkYXRlRG9jLCBkb2MsIGNvbGxlY3Rpb24gfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKTtcclxuXHJcbmNvbnN0IGNyZWF0ZVRva2VuID0gKHVzZXJUb2tlbiwgc2VjcmV0V29yZCwgZXhwaXJlc0luKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyVG9rZW4pO1xyXG4gICAgY29uc3QgeyBfX2lkLCBlbWFpbCwgcGFzc3dvcmQsIGFjY291bnQsIG5hbWUgfSA9IHVzZXJUb2tlbjtcclxuICAgIHJldHVybiBqd3Quc2lnbih7IF9faWQsIGVtYWlsLCBuYW1lLCBhY2NvdW50LCBwYXNzd29yZCB9LCBzZWNyZXRXb3JkLCB7IGV4cGlyZXNJbiB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBjb21tZW50IH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCB7VG9rZW59ID0gcmVxLmNvb2tpZXNcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBqd3QudmVyaWZ5KFRva2VuLCBwcm9jZXNzLmVudi5wYWxhYnJhU2VjcmV0YSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWNjb3VudC5fX2lkKTtcclxuXHJcbiAgICAgICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwiQ29tbWVudHNcIiksIHtcclxuICAgICAgICAgICAgdXNlcjogYWNjb3VudC5fX2lkLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogYWNjb3VudC5uYW1lLFxyXG4gICAgICAgICAgICBjb21tZW50OiBjb21tZW50LFxyXG4gICAgICAgICAgICBsaWtlOltdLFxyXG4gICAgICAgICAgICByZXBseTpbXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgLy9VcGRhdGVcclxuICAgICAgICAgIGNvbnN0IGRvY1VwZGF0ZWQgPSBhd2FpdCB1cGRhdGVEb2MoZG9jKGRiLCBcIkNvbW1lbnRzXCIsIGRvY1JlZi5pZCkse1xyXG4gICAgICAgICAgICBfX2lkOmRvY1JlZi5pZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICByZXMuanNvbih7c3VjY2Vzczp0cnVlfSlcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgcmVzLmpzb24oeyBkYXRhOiBbXSwgZXJyb3I6IGVyci5tZXNzYWdlLCBzdWNjZXNzOmZhbHNlICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qXHJcbiAgICAvL1Bvc3RcclxuICB0cnkge1xyXG4gICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwiVGFza1wiKSwge1xyXG4gICAgICBuYW1lOiBcIlBydWViYSAxXCIsXHJcbiAgICAgIGRhdGU6IFwiMjUvMDgvMjAyMlwiXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgd3JpdHRlbiB3aXRoIElEOiBcIiwgZG9jUmVmLmlkKTtcclxuXHJcbiAgICAvL1VwZGF0ZVxyXG4gICAgY29uc3QgZG9jVXBkYXRlZCA9IGF3YWl0IHVwZGF0ZURvYyhkb2MoZGIsIFwiVGFza1wiLCBkb2NSZWYuaWQpLHtcclxuICAgICAgX19pZDpkb2NSZWYuaWRcclxuICAgIH0pXHJcblxyXG4gICAgLy9HZXQgT25lXHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgZG9jR2V0T25lID0gYXdhaXQgZ2V0RG9jKGRvYyhkYiwgXCJUYXNrXCIsIGRvY1JlZi5pZCkpXHJcbiAgICBjb25zb2xlLmxvZyhkb2NHZXRPbmUuZGF0YSgpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9XHJcblxyXG4gICAgLy9HZXQgT25lIGJ5IGRhdGFcclxuICAgIC8vIGNvbnN0IHRhc2tDb2wxID0gY29sbGVjdGlvbihkYiwgJ1Rhc2snKTtcclxuICAgIC8vIGNvbnN0IHF1ZXJ5Q29uc3VsdGFudCA9IHF1ZXJ5KHRhc2tDb2wxLCB3aGVyZSgnbmFtZScsXCI9PVwiLFwiUHJ1ZWJhXCIpKTtcclxuICAgIC8vIGNvbnN0IHRhc2tTbmFwc2hvdDEgPSBhd2FpdCBnZXREb2NzKHF1ZXJ5Q29uc3VsdGFudCk7XHJcbiAgICAvLyBsZXQgdGFza0xpc3QxO1xyXG4gICAgLy8gdGFza1NuYXBzaG90MS5mb3JFYWNoKGRvYyA9PiB0YXNrTGlzdDEgPSBkb2MuZGF0YSgpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhc2tMaXN0MSlcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhc2tMaXN0MSAhPSB1bmRlZmluZWQpXHJcblxyXG5cclxuICAgIC8vRGVsZXRlXHJcbiAgICBhd2FpdCBkZWxldGVEb2MoZG9jKGRiLFwiVGFza1wiLGRvY1JlZi5pZCkpXHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlKTtcclxuICB9XHJcbiAgICAvL0dldFxyXG4gIGNvbnN0IHRhc2tDb2wgPSBjb2xsZWN0aW9uKGRiLCAnVGFzaycpO1xyXG4gIGNvbnN0IHRhc2tTbmFwc2hvdCA9IGF3YWl0IGdldERvY3ModGFza0NvbCk7XHJcbiAgY29uc3QgdGFza0xpc3QgPSB0YXNrU25hcHNob3QuZG9jcy5tYXAoZG9jID0+IGRvYy5kYXRhKCkpO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRhc2tMaXN0KVxyXG4gKi8iXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJhcHAiLCJkYiIsImFkZERvYyIsInVwZGF0ZURvYyIsImRvYyIsImNvbGxlY3Rpb24iLCJqd3QiLCJyZXF1aXJlIiwiY3JlYXRlVG9rZW4iLCJ1c2VyVG9rZW4iLCJzZWNyZXRXb3JkIiwiZXhwaXJlc0luIiwiX19pZCIsImVtYWlsIiwicGFzc3dvcmQiLCJhY2NvdW50IiwibmFtZSIsInNpZ24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29tbWVudCIsInF1ZXJ5IiwiVG9rZW4iLCJjb29raWVzIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsInBhbGFicmFTZWNyZXRhIiwiZG9jUmVmIiwidXNlciIsInVzZXJuYW1lIiwibGlrZSIsInJlcGx5IiwiZG9jVXBkYXRlZCIsImlkIiwianNvbiIsInN1Y2Nlc3MiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/addComment.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addComment.js"));
module.exports = __webpack_exports__;

})();