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
exports.id = "pages/api/updateLikeReply";
exports.ids = ["pages/api/updateLikeReply"];
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

/***/ "(api)/./pages/api/updateLikeReply.js":
/*!**************************************!*\
  !*** ./pages/api/updateLikeReply.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nasync function handler(req, res) {\n    const { id , like , reply , idReply  } = req.query;\n    const { Token  } = req.cookies;\n    try {\n        // console.log(\"reply\")\n        const account = jwt.verify(Token, process.env.palabraSecreta);\n        const docGetOne = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"Comments\", id));\n        const likes = docGetOne.data().reply;\n        const liked = likes.filter((rp)=>rp.id == idReply)[0].like.filter((lk)=>lk.id === account.__id);\n        if (liked.length < 1) {\n            // console.log(\"new\")\n            likes.filter((rp)=>rp.id == idReply)[0].like.push({\n                name: account.name,\n                id: account.__id,\n                like: true //!((like == 'true') ? true : false)\n            });\n        } else {\n            // console.log(\"update\")\n            likes.filter((rp)=>rp.id == idReply)[0].like.filter((lk)=>lk.id === account.__id)[0].like = !liked[0].like;\n        }\n        //Update\n        const docUpdated = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"Comments\", id), {\n            reply: likes\n        });\n        res.json({\n            success: true\n        });\n    } catch (err) {\n        // console.log(err)\n        res.json({\n            error: err.message,\n            success: false\n        });\n    }\n} /*\r\n    //Post\r\n  try {\r\n    const docRef = await addDoc(collection(db, \"Task\"), {\r\n      name: \"Prueba 1\",\r\n      date: \"25/08/2022\"\r\n    });\r\n    console.log(\"Document written with ID: \", docRef.id);\r\n\r\n    //Update\r\n    const docUpdated = await updateDoc(doc(db, \"Task\", docRef.id),{\r\n      __id:docRef.id\r\n    })\r\n\r\n    //Get One\r\n    try {\r\n    const docGetOne = await getDoc(doc(db, \"Task\", docRef.id))\r\n    console.log(docGetOne.data());\r\n    } catch (err) {\r\n      console.log(err)\r\n    }\r\n\r\n    //Get One by data\r\n    // const taskCol1 = collection(db, 'Task');\r\n    // const queryConsultant = query(taskCol1, where('name',\"==\",\"Prueba\"));\r\n    // const taskSnapshot1 = await getDocs(queryConsultant);\r\n    // let taskList1;\r\n    // taskSnapshot1.forEach(doc => taskList1 = doc.data());\r\n    // console.log(taskList1)\r\n    // console.log(taskList1 != undefined)\r\n\r\n\r\n    //Delete\r\n    await deleteDoc(doc(db,\"Task\",docRef.id))\r\n\r\n  } catch (e) {\r\n    console.error(\"Error adding document: \", e);\r\n  }\r\n    //Get\r\n  const taskCol = collection(db, 'Task');\r\n  const taskSnapshot = await getDocs(taskCol);\r\n  const taskList = taskSnapshot.docs.map(doc => doc.data());\r\n  res.status(200).json(taskList)\r\n */ \n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlTGlrZVJlcGx5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUM0QjtBQUN4RSxNQUFNTyxHQUFHLEdBQUdDLG1CQUFPLENBQUMsa0NBQWMsQ0FBQztBQUVwQixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsRUFBRSxHQUFFQyxJQUFJLEdBQUVDLEtBQUssR0FBRUMsT0FBTyxHQUFFLEdBQUdMLEdBQUcsQ0FBQ00sS0FBSztJQUM5QyxNQUFNLEVBQUVDLEtBQUssR0FBRSxHQUFHUCxHQUFHLENBQUNRLE9BQU87SUFDN0IsSUFBSTtRQUNGLHVCQUF1QjtRQUN2QixNQUFNQyxPQUFPLEdBQUdaLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDSCxLQUFLLEVBQUVJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLENBQUM7UUFFN0QsTUFBTUMsU0FBUyxHQUFHLE1BQU1yQiwwREFBTSxDQUFDRSx1REFBRyxDQUFDSCxtQ0FBRSxFQUFFLFVBQVUsRUFBRVUsRUFBRSxDQUFDLENBQUM7UUFHdkQsTUFBTWEsS0FBSyxHQUFHRCxTQUFTLENBQUNFLElBQUksRUFBRSxDQUFDWixLQUFLO1FBR3BDLE1BQU1hLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxNQUFNLENBQUNDLENBQUFBLEVBQUUsR0FBRUEsRUFBRSxDQUFDakIsRUFBRSxJQUFJRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0YsSUFBSSxDQUFDZSxNQUFNLENBQUNFLENBQUFBLEVBQUUsR0FBSUEsRUFBRSxDQUFDbEIsRUFBRSxLQUFLTyxPQUFPLENBQUNZLElBQUksQ0FBQztRQUU3RixJQUFJSixLQUFLLENBQUNLLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEIscUJBQXFCO1lBQ3JCUCxLQUFLLENBQUNHLE1BQU0sQ0FBQ0MsQ0FBQUEsRUFBRSxHQUFFQSxFQUFFLENBQUNqQixFQUFFLElBQUlHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDRixJQUFJLENBQUNvQixJQUFJLENBQUM7Z0JBQzlDQyxJQUFJLEVBQUVmLE9BQU8sQ0FBQ2UsSUFBSTtnQkFDbEJ0QixFQUFFLEVBQUVPLE9BQU8sQ0FBQ1ksSUFBSTtnQkFDaEJsQixJQUFJLEVBQUUsSUFBSSxDQUFDLG9DQUFvQzthQUNoRCxDQUFDO1FBQ0osT0FDSztZQUNILHdCQUF3QjtZQUN4QlksS0FBSyxDQUFDRyxNQUFNLENBQUNDLENBQUFBLEVBQUUsR0FBRUEsRUFBRSxDQUFDakIsRUFBRSxJQUFJRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0YsSUFBSSxDQUFDZSxNQUFNLENBQUNFLENBQUFBLEVBQUUsR0FBSUEsRUFBRSxDQUFDbEIsRUFBRSxLQUFLTyxPQUFPLENBQUNZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDbEIsSUFBSSxHQUFHLENBQUNjLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ2QsSUFBSTtRQUMxRyxDQUFDO1FBS0QsUUFBUTtRQUNSLE1BQU1zQixVQUFVLEdBQUcsTUFBTS9CLDZEQUFTLENBQUNDLHVEQUFHLENBQUNILG1DQUFFLEVBQUUsVUFBVSxFQUFFVSxFQUFFLENBQUMsRUFBRTtZQUMxREUsS0FBSyxFQUFFVyxLQUFLO1NBQ2IsQ0FBQztRQUVGZCxHQUFHLENBQUN5QixJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLElBQUk7U0FBRSxDQUFDO0lBRTdCLEVBQUUsT0FBT0MsR0FBRyxFQUFFO1FBQ1osbUJBQW1CO1FBQ25CM0IsR0FBRyxDQUFDeUIsSUFBSSxDQUFDO1lBQUVHLEtBQUssRUFBRUQsR0FBRyxDQUFDRSxPQUFPO1lBQUVILE9BQU8sRUFBRSxLQUFLO1NBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7QUFDSCxDQUFDLENBR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm8tNS8uL3BhZ2VzL2FwaS91cGRhdGVMaWtlUmVwbHkuanM/ZmFjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaXJlYmFzZSwgYXBwLCBkYiB9IGZyb20gJy4uLy4uL2RiJ1xyXG5pbXBvcnQgeyBnZXREb2MsIHVwZGF0ZURvYywgZG9jLCBjb2xsZWN0aW9uIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBpZCwgbGlrZSwgcmVwbHksIGlkUmVwbHkgfSA9IHJlcS5xdWVyeTtcclxuICBjb25zdCB7IFRva2VuIH0gPSByZXEuY29va2llc1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInJlcGx5XCIpXHJcbiAgICBjb25zdCBhY2NvdW50ID0gand0LnZlcmlmeShUb2tlbiwgcHJvY2Vzcy5lbnYucGFsYWJyYVNlY3JldGEpO1xyXG5cclxuICAgIGNvbnN0IGRvY0dldE9uZSA9IGF3YWl0IGdldERvYyhkb2MoZGIsIFwiQ29tbWVudHNcIiwgaWQpKTtcclxuXHJcblxyXG4gICAgY29uc3QgbGlrZXMgPSBkb2NHZXRPbmUuZGF0YSgpLnJlcGx5O1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgbGlrZWQgPSBsaWtlcy5maWx0ZXIocnA9PnJwLmlkID09IGlkUmVwbHkpWzBdLmxpa2UuZmlsdGVyKGxrID0+IGxrLmlkID09PSBhY2NvdW50Ll9faWQpO1xyXG5cclxuICAgIGlmIChsaWtlZC5sZW5ndGggPCAxKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibmV3XCIpXHJcbiAgICAgIGxpa2VzLmZpbHRlcihycD0+cnAuaWQgPT0gaWRSZXBseSlbMF0ubGlrZS5wdXNoKHtcclxuICAgICAgICBuYW1lOiBhY2NvdW50Lm5hbWUsXHJcbiAgICAgICAgaWQ6IGFjY291bnQuX19pZCxcclxuICAgICAgICBsaWtlOiB0cnVlIC8vISgobGlrZSA9PSAndHJ1ZScpID8gdHJ1ZSA6IGZhbHNlKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlXCIpXHJcbiAgICAgIGxpa2VzLmZpbHRlcihycD0+cnAuaWQgPT0gaWRSZXBseSlbMF0ubGlrZS5maWx0ZXIobGsgPT4gbGsuaWQgPT09IGFjY291bnQuX19pZClbMF0ubGlrZSA9ICFsaWtlZFswXS5saWtlXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy9VcGRhdGVcclxuICAgIGNvbnN0IGRvY1VwZGF0ZWQgPSBhd2FpdCB1cGRhdGVEb2MoZG9jKGRiLCBcIkNvbW1lbnRzXCIsIGlkKSwge1xyXG4gICAgICByZXBseTogbGlrZXNcclxuICAgIH0pXHJcblxyXG4gICAgcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pXHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgLy8gY29uc29sZS5sb2coZXJyKVxyXG4gICAgcmVzLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UsIHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qXHJcbiAgICAvL1Bvc3RcclxuICB0cnkge1xyXG4gICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwiVGFza1wiKSwge1xyXG4gICAgICBuYW1lOiBcIlBydWViYSAxXCIsXHJcbiAgICAgIGRhdGU6IFwiMjUvMDgvMjAyMlwiXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgd3JpdHRlbiB3aXRoIElEOiBcIiwgZG9jUmVmLmlkKTtcclxuXHJcbiAgICAvL1VwZGF0ZVxyXG4gICAgY29uc3QgZG9jVXBkYXRlZCA9IGF3YWl0IHVwZGF0ZURvYyhkb2MoZGIsIFwiVGFza1wiLCBkb2NSZWYuaWQpLHtcclxuICAgICAgX19pZDpkb2NSZWYuaWRcclxuICAgIH0pXHJcblxyXG4gICAgLy9HZXQgT25lXHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgZG9jR2V0T25lID0gYXdhaXQgZ2V0RG9jKGRvYyhkYiwgXCJUYXNrXCIsIGRvY1JlZi5pZCkpXHJcbiAgICBjb25zb2xlLmxvZyhkb2NHZXRPbmUuZGF0YSgpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9XHJcblxyXG4gICAgLy9HZXQgT25lIGJ5IGRhdGFcclxuICAgIC8vIGNvbnN0IHRhc2tDb2wxID0gY29sbGVjdGlvbihkYiwgJ1Rhc2snKTtcclxuICAgIC8vIGNvbnN0IHF1ZXJ5Q29uc3VsdGFudCA9IHF1ZXJ5KHRhc2tDb2wxLCB3aGVyZSgnbmFtZScsXCI9PVwiLFwiUHJ1ZWJhXCIpKTtcclxuICAgIC8vIGNvbnN0IHRhc2tTbmFwc2hvdDEgPSBhd2FpdCBnZXREb2NzKHF1ZXJ5Q29uc3VsdGFudCk7XHJcbiAgICAvLyBsZXQgdGFza0xpc3QxO1xyXG4gICAgLy8gdGFza1NuYXBzaG90MS5mb3JFYWNoKGRvYyA9PiB0YXNrTGlzdDEgPSBkb2MuZGF0YSgpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhc2tMaXN0MSlcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhc2tMaXN0MSAhPSB1bmRlZmluZWQpXHJcblxyXG5cclxuICAgIC8vRGVsZXRlXHJcbiAgICBhd2FpdCBkZWxldGVEb2MoZG9jKGRiLFwiVGFza1wiLGRvY1JlZi5pZCkpXHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlKTtcclxuICB9XHJcbiAgICAvL0dldFxyXG4gIGNvbnN0IHRhc2tDb2wgPSBjb2xsZWN0aW9uKGRiLCAnVGFzaycpO1xyXG4gIGNvbnN0IHRhc2tTbmFwc2hvdCA9IGF3YWl0IGdldERvY3ModGFza0NvbCk7XHJcbiAgY29uc3QgdGFza0xpc3QgPSB0YXNrU25hcHNob3QuZG9jcy5tYXAoZG9jID0+IGRvYy5kYXRhKCkpO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRhc2tMaXN0KVxyXG4gKi8iXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJhcHAiLCJkYiIsImdldERvYyIsInVwZGF0ZURvYyIsImRvYyIsImNvbGxlY3Rpb24iLCJqd3QiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImlkIiwibGlrZSIsInJlcGx5IiwiaWRSZXBseSIsInF1ZXJ5IiwiVG9rZW4iLCJjb29raWVzIiwiYWNjb3VudCIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJwYWxhYnJhU2VjcmV0YSIsImRvY0dldE9uZSIsImxpa2VzIiwiZGF0YSIsImxpa2VkIiwiZmlsdGVyIiwicnAiLCJsayIsIl9faWQiLCJsZW5ndGgiLCJwdXNoIiwibmFtZSIsImRvY1VwZGF0ZWQiLCJqc29uIiwic3VjY2VzcyIsImVyciIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateLikeReply.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateLikeReply.js"));
module.exports = __webpack_exports__;

})();