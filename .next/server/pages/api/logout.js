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
exports.id = "pages/api/logout";
exports.ids = ["pages/api/logout"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./pages/api/logout.js":
/*!*****************************!*\
  !*** ./pages/api/logout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst cookie = __webpack_require__(/*! cookie */ \"cookie\");\nconst createToken = (userToken, secretWord, expiresIn)=>{\n    // console.log(userToken);\n    const { __id , email , password , account , name  } = userToken;\n    return jwt.sign({\n        __id,\n        email,\n        name,\n        account,\n        password\n    }, secretWord, {\n        expiresIn\n    });\n};\nasync function handler(req, res) {\n    try {\n        res.status(200).setHeader(\"Set-Cookie\", cookie.serialize(\"Token\", null, {\n            httpOnly: true,\n            secure: process.env.MODE == \"prod\",\n            maxAge: 0,\n            sameSite: \"strict\",\n            path: \"/\"\n        })).json({\n            success: true\n        });\n    } catch (err) {\n        // console.log(err)\n        res.json({\n            data: [],\n            error: err.message,\n            success: false\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9nb3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0JBQVEsQ0FBQztBQUVoQyxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsR0FBSztJQUN0RCwwQkFBMEI7SUFDMUIsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFQyxPQUFPLEdBQUVDLElBQUksR0FBRSxHQUFHUCxTQUFTO0lBQzFELE9BQU9RLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVOLElBQUk7UUFBRUMsS0FBSztRQUFFRyxJQUFJO1FBQUVELE9BQU87UUFBRUQsUUFBUTtLQUFFLEVBQUVKLFVBQVUsRUFBRTtRQUFFQyxTQUFTO0tBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUFFYyxlQUFlUSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBRTVDLElBQUk7UUFDSUEsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLFNBQVMsQ0FBQyxZQUFZLEVBQUVqQixNQUFNLENBQUNrQixTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtZQUNwRUMsUUFBUSxFQUFFLElBQUk7WUFDZEMsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxJQUFJLE1BQU07WUFDbENDLE1BQU0sRUFBRSxDQUFDO1lBQ1RDLFFBQVEsRUFBRSxRQUFRO1lBQ2xCQyxJQUFJLEVBQUUsR0FBRztTQUNaLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0MsT0FBTyxFQUFDLElBQUk7U0FBRSxDQUFDLENBQUM7SUFFbEMsRUFBRSxPQUFPQyxHQUFHLEVBQUU7UUFDVixtQkFBbUI7UUFDbkJkLEdBQUcsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVHLElBQUksRUFBRSxFQUFFO1lBQUVDLEtBQUssRUFBRUYsR0FBRyxDQUFDRyxPQUFPO1lBQUVKLE9BQU8sRUFBQyxLQUFLO1NBQUcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvLTUvLi9wYWdlcy9hcGkvbG9nb3V0LmpzPzM2NDAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29va2llID0gcmVxdWlyZSgnY29va2llJyk7XHJcblxyXG5jb25zdCBjcmVhdGVUb2tlbiA9ICh1c2VyVG9rZW4sIHNlY3JldFdvcmQsIGV4cGlyZXNJbikgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2codXNlclRva2VuKTtcclxuICAgIGNvbnN0IHsgX19pZCwgZW1haWwsIHBhc3N3b3JkLCBhY2NvdW50LCBuYW1lIH0gPSB1c2VyVG9rZW47XHJcbiAgICByZXR1cm4gand0LnNpZ24oeyBfX2lkLCBlbWFpbCwgbmFtZSwgYWNjb3VudCwgcGFzc3dvcmQgfSwgc2VjcmV0V29yZCwgeyBleHBpcmVzSW4gfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgY29va2llLnNlcmlhbGl6ZSgnVG9rZW4nLCBudWxsLCB7XHJcbiAgICAgICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTU9ERSA9PSAncHJvZCcsXHJcbiAgICAgICAgICAgICAgICBtYXhBZ2U6IDAsXHJcbiAgICAgICAgICAgICAgICBzYW1lU2l0ZTogJ3N0cmljdCcsXHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnLydcclxuICAgICAgICAgICAgfSkpLmpzb24oe3N1Y2Nlc3M6dHJ1ZSB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgcmVzLmpzb24oeyBkYXRhOiBbXSwgZXJyb3I6IGVyci5tZXNzYWdlLCBzdWNjZXNzOmZhbHNlICB9KTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJjb29raWUiLCJyZXF1aXJlIiwiY3JlYXRlVG9rZW4iLCJ1c2VyVG9rZW4iLCJzZWNyZXRXb3JkIiwiZXhwaXJlc0luIiwiX19pZCIsImVtYWlsIiwicGFzc3dvcmQiLCJhY2NvdW50IiwibmFtZSIsImp3dCIsInNpZ24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwic2V0SGVhZGVyIiwic2VyaWFsaXplIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJwcm9jZXNzIiwiZW52IiwiTU9ERSIsIm1heEFnZSIsInNhbWVTaXRlIiwicGF0aCIsImpzb24iLCJzdWNjZXNzIiwiZXJyIiwiZGF0YSIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/logout.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/logout.js"));
module.exports = __webpack_exports__;

})();