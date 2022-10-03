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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

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

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst cookie = __webpack_require__(/*! cookie */ \"cookie\");\nconst createToken = (userToken, secretWord, expiresIn)=>{\n    // console.log(userToken);\n    const { __id , email , password , name  } = userToken;\n    return jwt.sign({\n        __id,\n        email,\n        name,\n        password\n    }, secretWord, {\n        expiresIn\n    });\n};\nasync function handler(req, res) {\n    const { user , password  } = req.query;\n    try {\n        const UserCol = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"User\");\n        const queryConsultant = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(UserCol, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"user\", \"==\", user));\n        const UserSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(queryConsultant);\n        let dataUser = [];\n        UserSnapshot.forEach((doc)=>dataUser = doc.data());\n        const comparePass = await bcrypt.compare(password, dataUser.password);\n        if (comparePass) {\n            const token = createToken(dataUser, process.env.palabraSecreta, \"48h\");\n            res.status(200).setHeader(\"Set-Cookie\", cookie.serialize(\"Token\", token, {\n                httpOnly: true,\n                secure: process.env.MODE == \"prod\",\n                maxAge: 60 * 60 * 1000,\n                sameSite: \"strict\",\n                path: \"/\"\n            })).json({\n                token: token,\n                success: true\n            });\n        } else {\n            throw new Error(\"La contrase\\xf1a es incorrecta\");\n        }\n    } catch (err) {\n        console.log(err);\n        res.json({\n            data: [],\n            error: err.message,\n            success: false\n        });\n    }\n} /*\r\n    //Post\r\n  try {\r\n    const docRef = await addDoc(collection(db, \"Task\"), {\r\n      name: \"Prueba 1\",\r\n      date: \"25/08/2022\"\r\n    });\r\n    console.log(\"Document written with ID: \", docRef.id);\r\n\r\n    //Update\r\n    const docUpdated = await updateDoc(doc(db, \"Task\", docRef.id),{\r\n      __id:docRef.id\r\n    })\r\n\r\n    //Get One\r\n    try {\r\n    const docGetOne = await getDoc(doc(db, \"Task\", docRef.id))\r\n    console.log(docGetOne.data());\r\n    } catch (err) {\r\n      console.log(err)\r\n    }\r\n\r\n    //Get One by data\r\n    // const taskCol1 = collection(db, 'Task');\r\n    // const queryConsultant = query(taskCol1, where('name',\"==\",\"Prueba\"));\r\n    // const taskSnapshot1 = await getDocs(queryConsultant);\r\n    // let taskList1;\r\n    // taskSnapshot1.forEach(doc => taskList1 = doc.data());\r\n    // console.log(taskList1)\r\n    // console.log(taskList1 != undefined)\r\n\r\n\r\n    //Delete\r\n    await deleteDoc(doc(db,\"Task\",docRef.id))\r\n\r\n  } catch (e) {\r\n    console.error(\"Error adding document: \", e);\r\n  }\r\n    //Get\r\n  const taskCol = collection(db, 'Task');\r\n  const taskSnapshot = await getDocs(taskCol);\r\n  const taskList = taskSnapshot.docs.map(doc => doc.data());\r\n  res.status(200).json(taskList)\r\n */ \n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cHJvLTUvLi9wYWdlcy9hcGkvbG9naW4uanM/YWU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaXJlYmFzZSwgYXBwLCBkYiB9IGZyb20gJy4uLy4uL2RiJ1xyXG5pbXBvcnQgeyBnZXREb2NzLCB3aGVyZSwgZG9jLCBjb2xsZWN0aW9uLCBxdWVyeSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xyXG5jb25zdCBiY3J5cHQgPSByZXF1aXJlKCdiY3J5cHQnKTtcclxuY29uc3QgY29va2llID0gcmVxdWlyZSgnY29va2llJyk7XHJcblxyXG5jb25zdCBjcmVhdGVUb2tlbiA9ICh1c2VyVG9rZW4sIHNlY3JldFdvcmQsIGV4cGlyZXNJbikgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2codXNlclRva2VuKTtcclxuICAgIGNvbnN0IHsgX19pZCwgZW1haWwsIHBhc3N3b3JkLCBuYW1lIH0gPSB1c2VyVG9rZW47XHJcbiAgICByZXR1cm4gand0LnNpZ24oeyBfX2lkLCBlbWFpbCwgbmFtZSwgcGFzc3dvcmQgfSwgc2VjcmV0V29yZCwgeyBleHBpcmVzSW4gfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgdXNlciwgcGFzc3dvcmQgfSA9IHJlcS5xdWVyeTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IFVzZXJDb2wgPSBjb2xsZWN0aW9uKGRiLCAnVXNlcicpO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5Q29uc3VsdGFudCA9IHF1ZXJ5KFVzZXJDb2wsIHdoZXJlKCd1c2VyJywgXCI9PVwiLCB1c2VyKSk7XHJcbiAgICAgICAgY29uc3QgVXNlclNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxdWVyeUNvbnN1bHRhbnQpO1xyXG5cclxuICAgICAgICBsZXQgZGF0YVVzZXIgPSBbXVxyXG4gICAgICAgIFVzZXJTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiBkYXRhVXNlciA9IGRvYy5kYXRhKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBjb21wYXJlUGFzcyA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBkYXRhVXNlci5wYXNzd29yZCk7XHJcblxyXG4gICAgICAgIGlmIChjb21wYXJlUGFzcykge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGNyZWF0ZVRva2VuKGRhdGFVc2VyLCBwcm9jZXNzLmVudi5wYWxhYnJhU2VjcmV0YSwgJzQ4aCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBjb29raWUuc2VyaWFsaXplKCdUb2tlbicsIHRva2VuLCB7XHJcbiAgICAgICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTU9ERSA9PSAncHJvZCcsXHJcbiAgICAgICAgICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgc2FtZVNpdGU6ICdzdHJpY3QnLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogJy8nXHJcbiAgICAgICAgICAgIH0pKS5qc29uKHsgdG9rZW46IHRva2VuLCBzdWNjZXNzOnRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkxhIGNvbnRyYXNlw7FhIGVzIGluY29ycmVjdGFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICByZXMuanNvbih7IGRhdGE6IFtdLCBlcnJvcjogZXJyLm1lc3NhZ2UsIHN1Y2Nlc3M6ZmFsc2UgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLypcclxuICAgIC8vUG9zdFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJUYXNrXCIpLCB7XHJcbiAgICAgIG5hbWU6IFwiUHJ1ZWJhIDFcIixcclxuICAgICAgZGF0ZTogXCIyNS8wOC8yMDIyXCJcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJEb2N1bWVudCB3cml0dGVuIHdpdGggSUQ6IFwiLCBkb2NSZWYuaWQpO1xyXG5cclxuICAgIC8vVXBkYXRlXHJcbiAgICBjb25zdCBkb2NVcGRhdGVkID0gYXdhaXQgdXBkYXRlRG9jKGRvYyhkYiwgXCJUYXNrXCIsIGRvY1JlZi5pZCkse1xyXG4gICAgICBfX2lkOmRvY1JlZi5pZFxyXG4gICAgfSlcclxuXHJcbiAgICAvL0dldCBPbmVcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCBkb2NHZXRPbmUgPSBhd2FpdCBnZXREb2MoZG9jKGRiLCBcIlRhc2tcIiwgZG9jUmVmLmlkKSlcclxuICAgIGNvbnNvbGUubG9nKGRvY0dldE9uZS5kYXRhKCkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH1cclxuXHJcbiAgICAvL0dldCBPbmUgYnkgZGF0YVxyXG4gICAgLy8gY29uc3QgdGFza0NvbDEgPSBjb2xsZWN0aW9uKGRiLCAnVGFzaycpO1xyXG4gICAgLy8gY29uc3QgcXVlcnlDb25zdWx0YW50ID0gcXVlcnkodGFza0NvbDEsIHdoZXJlKCduYW1lJyxcIj09XCIsXCJQcnVlYmFcIikpO1xyXG4gICAgLy8gY29uc3QgdGFza1NuYXBzaG90MSA9IGF3YWl0IGdldERvY3MocXVlcnlDb25zdWx0YW50KTtcclxuICAgIC8vIGxldCB0YXNrTGlzdDE7XHJcbiAgICAvLyB0YXNrU25hcHNob3QxLmZvckVhY2goZG9jID0+IHRhc2tMaXN0MSA9IGRvYy5kYXRhKCkpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGFza0xpc3QxKVxyXG4gICAgLy8gY29uc29sZS5sb2codGFza0xpc3QxICE9IHVuZGVmaW5lZClcclxuXHJcblxyXG4gICAgLy9EZWxldGVcclxuICAgIGF3YWl0IGRlbGV0ZURvYyhkb2MoZGIsXCJUYXNrXCIsZG9jUmVmLmlkKSlcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xyXG4gIH1cclxuICAgIC8vR2V0XHJcbiAgY29uc3QgdGFza0NvbCA9IGNvbGxlY3Rpb24oZGIsICdUYXNrJyk7XHJcbiAgY29uc3QgdGFza1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyh0YXNrQ29sKTtcclxuICBjb25zdCB0YXNrTGlzdCA9IHRhc2tTbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4gZG9jLmRhdGEoKSk7XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24odGFza0xpc3QpXHJcbiAqLyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImFwcCIsImRiIiwiZ2V0RG9jcyIsIndoZXJlIiwiZG9jIiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwiand0IiwicmVxdWlyZSIsImJjcnlwdCIsImNvb2tpZSIsImNyZWF0ZVRva2VuIiwidXNlclRva2VuIiwic2VjcmV0V29yZCIsImV4cGlyZXNJbiIsIl9faWQiLCJlbWFpbCIsInBhc3N3b3JkIiwibmFtZSIsInNpZ24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidXNlciIsIlVzZXJDb2wiLCJxdWVyeUNvbnN1bHRhbnQiLCJVc2VyU25hcHNob3QiLCJkYXRhVXNlciIsImZvckVhY2giLCJkYXRhIiwiY29tcGFyZVBhc3MiLCJjb21wYXJlIiwidG9rZW4iLCJwcm9jZXNzIiwiZW52IiwicGFsYWJyYVNlY3JldGEiLCJzdGF0dXMiLCJzZXRIZWFkZXIiLCJzZXJpYWxpemUiLCJodHRwT25seSIsInNlY3VyZSIsIk1PREUiLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsInBhdGgiLCJqc29uIiwic3VjY2VzcyIsIkVycm9yIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();