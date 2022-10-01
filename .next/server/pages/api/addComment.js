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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst createToken = (userToken, secretWord, expiresIn)=>{\n    // console.log(userToken);\n    const { __id , email , password , account , name  } = userToken;\n    return jwt.sign({\n        __id,\n        email,\n        name,\n        account,\n        password\n    }, secretWord, {\n        expiresIn\n    });\n};\nasync function handler(req, res) {\n    const { comment  } = req.query;\n    const { Token  } = req.cookies;\n    try {\n        const account = jwt.verify(Token, process.env.palabraSecreta);\n        // console.log(account.__id);\n        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"Comments\"), {\n            user: account.__id,\n            username: account.name,\n            comment: comment,\n            like: [],\n            reply: [],\n            date: new Date()\n        });\n        //Update\n        const docUpdated = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"Comments\", docRef.id), {\n            __id: docRef.id\n        });\n        res.json({\n            success: true\n        });\n    } catch (err) {\n        console.log(err);\n        res.json({\n            data: [],\n            error: err.message,\n            success: false\n        });\n    }\n} /*\r\n    //Post\r\n  try {\r\n    const docRef = await addDoc(collection(db, \"Task\"), {\r\n      name: \"Prueba 1\",\r\n      date: \"25/08/2022\"\r\n    });\r\n    console.log(\"Document written with ID: \", docRef.id);\r\n\r\n    //Update\r\n    const docUpdated = await updateDoc(doc(db, \"Task\", docRef.id),{\r\n      __id:docRef.id\r\n    })\r\n\r\n    //Get One\r\n    try {\r\n    const docGetOne = await getDoc(doc(db, \"Task\", docRef.id))\r\n    console.log(docGetOne.data());\r\n    } catch (err) {\r\n      console.log(err)\r\n    }\r\n\r\n    //Get One by data\r\n    // const taskCol1 = collection(db, 'Task');\r\n    // const queryConsultant = query(taskCol1, where('name',\"==\",\"Prueba\"));\r\n    // const taskSnapshot1 = await getDocs(queryConsultant);\r\n    // let taskList1;\r\n    // taskSnapshot1.forEach(doc => taskList1 = doc.data());\r\n    // console.log(taskList1)\r\n    // console.log(taskList1 != undefined)\r\n\r\n\r\n    //Delete\r\n    await deleteDoc(doc(db,\"Task\",docRef.id))\r\n\r\n  } catch (e) {\r\n    console.error(\"Error adding document: \", e);\r\n  }\r\n    //Get\r\n  const taskCol = collection(db, 'Task');\r\n  const taskSnapshot = await getDocs(taskCol);\r\n  const taskList = taskSnapshot.docs.map(doc => doc.data());\r\n  res.status(200).json(taskList)\r\n */ \n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkQ29tbWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFDNEI7QUFDeEUsTUFBTU8sR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFjLENBQUM7QUFFbkMsTUFBTUMsV0FBVyxHQUFHLENBQUNDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEdBQUs7SUFDdEQsMEJBQTBCO0lBQzFCLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUVDLFFBQVEsR0FBRUMsT0FBTyxHQUFFQyxJQUFJLEdBQUUsR0FBR1AsU0FBUztJQUMxRCxPQUFPSCxHQUFHLENBQUNXLElBQUksQ0FBQztRQUFFTCxJQUFJO1FBQUVDLEtBQUs7UUFBRUcsSUFBSTtRQUFFRCxPQUFPO1FBQUVELFFBQVE7S0FBRSxFQUFFSixVQUFVLEVBQUU7UUFBRUMsU0FBUztLQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBRWMsZUFBZU8sT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNLEVBQUVDLE9BQU8sR0FBRSxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFDN0IsTUFBTSxFQUFDQyxLQUFLLEdBQUMsR0FBR0osR0FBRyxDQUFDSyxPQUFPO0lBRTNCLElBQUk7UUFDQSxNQUFNVCxPQUFPLEdBQUdULEdBQUcsQ0FBQ21CLE1BQU0sQ0FBQ0YsS0FBSyxFQUFFRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDO1FBQzdELDZCQUE2QjtRQUU3QixNQUFNQyxNQUFNLEdBQUcsTUFBTTNCLDBEQUFNLENBQUNHLDhEQUFVLENBQUNKLG1DQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUU7WUFDcEQ2QixJQUFJLEVBQUVmLE9BQU8sQ0FBQ0gsSUFBSTtZQUNsQm1CLFFBQVEsRUFBRWhCLE9BQU8sQ0FBQ0MsSUFBSTtZQUN0QkssT0FBTyxFQUFFQSxPQUFPO1lBQ2hCVyxJQUFJLEVBQUMsRUFBRTtZQUNQQyxLQUFLLEVBQUMsRUFBRTtZQUNSQyxJQUFJLEVBQUUsSUFBSUMsSUFBSSxFQUFFO1NBQ2pCLENBQUM7UUFFRixRQUFRO1FBQ1IsTUFBTUMsVUFBVSxHQUFHLE1BQU1qQyw2REFBUyxDQUFDQyx1REFBRyxDQUFDSCxtQ0FBRSxFQUFFLFVBQVUsRUFBRTRCLE1BQU0sQ0FBQ1EsRUFBRSxDQUFDLEVBQUM7WUFDaEV6QixJQUFJLEVBQUNpQixNQUFNLENBQUNRLEVBQUU7U0FDZixDQUFDO1FBRUpqQixHQUFHLENBQUNrQixJQUFJLENBQUM7WUFBQ0MsT0FBTyxFQUFDLElBQUk7U0FBQyxDQUFDO0lBRTVCLEVBQUUsT0FBT0MsR0FBRyxFQUFFO1FBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7UUFDaEJwQixHQUFHLENBQUNrQixJQUFJLENBQUM7WUFBRUssSUFBSSxFQUFFLEVBQUU7WUFBRUMsS0FBSyxFQUFFSixHQUFHLENBQUNLLE9BQU87WUFBRU4sT0FBTyxFQUFDLEtBQUs7U0FBRyxDQUFDLENBQUM7SUFDL0QsQ0FBQztBQUNMLENBQUMsQ0FHRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byby01Ly4vcGFnZXMvYXBpL2FkZENvbW1lbnQuanM/YjFkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaXJlYmFzZSwgYXBwLCBkYiB9IGZyb20gJy4uLy4uL2RiJ1xyXG5pbXBvcnQgeyBhZGREb2MsIHVwZGF0ZURvYywgZG9jLCBjb2xsZWN0aW9uIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XHJcblxyXG5jb25zdCBjcmVhdGVUb2tlbiA9ICh1c2VyVG9rZW4sIHNlY3JldFdvcmQsIGV4cGlyZXNJbikgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2codXNlclRva2VuKTtcclxuICAgIGNvbnN0IHsgX19pZCwgZW1haWwsIHBhc3N3b3JkLCBhY2NvdW50LCBuYW1lIH0gPSB1c2VyVG9rZW47XHJcbiAgICByZXR1cm4gand0LnNpZ24oeyBfX2lkLCBlbWFpbCwgbmFtZSwgYWNjb3VudCwgcGFzc3dvcmQgfSwgc2VjcmV0V29yZCwgeyBleHBpcmVzSW4gfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgY29tbWVudCB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc3Qge1Rva2VufSA9IHJlcS5jb29raWVzXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gand0LnZlcmlmeShUb2tlbiwgcHJvY2Vzcy5lbnYucGFsYWJyYVNlY3JldGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFjY291bnQuX19pZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCBcIkNvbW1lbnRzXCIpLCB7XHJcbiAgICAgICAgICAgIHVzZXI6IGFjY291bnQuX19pZCxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGFjY291bnQubmFtZSxcclxuICAgICAgICAgICAgY29tbWVudDogY29tbWVudCxcclxuICAgICAgICAgICAgbGlrZTpbXSxcclxuICAgICAgICAgICAgcmVwbHk6W10sXHJcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKClcclxuICAgICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAgIC8vVXBkYXRlXHJcbiAgICAgICAgICBjb25zdCBkb2NVcGRhdGVkID0gYXdhaXQgdXBkYXRlRG9jKGRvYyhkYiwgXCJDb21tZW50c1wiLCBkb2NSZWYuaWQpLHtcclxuICAgICAgICAgICAgX19pZDpkb2NSZWYuaWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzLmpzb24oe3N1Y2Nlc3M6dHJ1ZX0pXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIHJlcy5qc29uKHsgZGF0YTogW10sIGVycm9yOiBlcnIubWVzc2FnZSwgc3VjY2VzczpmYWxzZSAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gICAgLy9Qb3N0XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCBcIlRhc2tcIiksIHtcclxuICAgICAgbmFtZTogXCJQcnVlYmEgMVwiLFxyXG4gICAgICBkYXRlOiBcIjI1LzA4LzIwMjJcIlxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IHdyaXR0ZW4gd2l0aCBJRDogXCIsIGRvY1JlZi5pZCk7XHJcblxyXG4gICAgLy9VcGRhdGVcclxuICAgIGNvbnN0IGRvY1VwZGF0ZWQgPSBhd2FpdCB1cGRhdGVEb2MoZG9jKGRiLCBcIlRhc2tcIiwgZG9jUmVmLmlkKSx7XHJcbiAgICAgIF9faWQ6ZG9jUmVmLmlkXHJcbiAgICB9KVxyXG5cclxuICAgIC8vR2V0IE9uZVxyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IGRvY0dldE9uZSA9IGF3YWl0IGdldERvYyhkb2MoZGIsIFwiVGFza1wiLCBkb2NSZWYuaWQpKVxyXG4gICAgY29uc29sZS5sb2coZG9jR2V0T25lLmRhdGEoKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0IE9uZSBieSBkYXRhXHJcbiAgICAvLyBjb25zdCB0YXNrQ29sMSA9IGNvbGxlY3Rpb24oZGIsICdUYXNrJyk7XHJcbiAgICAvLyBjb25zdCBxdWVyeUNvbnN1bHRhbnQgPSBxdWVyeSh0YXNrQ29sMSwgd2hlcmUoJ25hbWUnLFwiPT1cIixcIlBydWViYVwiKSk7XHJcbiAgICAvLyBjb25zdCB0YXNrU25hcHNob3QxID0gYXdhaXQgZ2V0RG9jcyhxdWVyeUNvbnN1bHRhbnQpO1xyXG4gICAgLy8gbGV0IHRhc2tMaXN0MTtcclxuICAgIC8vIHRhc2tTbmFwc2hvdDEuZm9yRWFjaChkb2MgPT4gdGFza0xpc3QxID0gZG9jLmRhdGEoKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0YXNrTGlzdDEpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0YXNrTGlzdDEgIT0gdW5kZWZpbmVkKVxyXG5cclxuXHJcbiAgICAvL0RlbGV0ZVxyXG4gICAgYXdhaXQgZGVsZXRlRG9jKGRvYyhkYixcIlRhc2tcIixkb2NSZWYuaWQpKVxyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGRvY3VtZW50OiBcIiwgZSk7XHJcbiAgfVxyXG4gICAgLy9HZXRcclxuICBjb25zdCB0YXNrQ29sID0gY29sbGVjdGlvbihkYiwgJ1Rhc2snKTtcclxuICBjb25zdCB0YXNrU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHRhc2tDb2wpO1xyXG4gIGNvbnN0IHRhc2tMaXN0ID0gdGFza1NuYXBzaG90LmRvY3MubWFwKGRvYyA9PiBkb2MuZGF0YSgpKTtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih0YXNrTGlzdClcclxuICovIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiYXBwIiwiZGIiLCJhZGREb2MiLCJ1cGRhdGVEb2MiLCJkb2MiLCJjb2xsZWN0aW9uIiwiand0IiwicmVxdWlyZSIsImNyZWF0ZVRva2VuIiwidXNlclRva2VuIiwic2VjcmV0V29yZCIsImV4cGlyZXNJbiIsIl9faWQiLCJlbWFpbCIsInBhc3N3b3JkIiwiYWNjb3VudCIsIm5hbWUiLCJzaWduIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbW1lbnQiLCJxdWVyeSIsIlRva2VuIiwiY29va2llcyIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJwYWxhYnJhU2VjcmV0YSIsImRvY1JlZiIsInVzZXIiLCJ1c2VybmFtZSIsImxpa2UiLCJyZXBseSIsImRhdGUiLCJEYXRlIiwiZG9jVXBkYXRlZCIsImlkIiwianNvbiIsInN1Y2Nlc3MiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/addComment.js\n");

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