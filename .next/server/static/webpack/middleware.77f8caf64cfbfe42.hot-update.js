"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(middleware)/./node_modules/jose/dist/browser/index.js\");\n/* harmony import */ var next_dist_compiled_edge_runtime_primitives_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/compiled/@edge-runtime/primitives/url */ \"(middleware)/./node_modules/next/dist/compiled/@edge-runtime/primitives/url.js\");\n/* harmony import */ var next_dist_compiled_edge_runtime_primitives_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_compiled_edge_runtime_primitives_url__WEBPACK_IMPORTED_MODULE_2__);\n// middleware.ts\n\n\n\n// This function can be marked `async` if using `await` inside\nasync function middleware(req) {\n    const token = req.cookies.Token;\n    const pathName = req.nextUrl.pathname;\n    if (pathName == \"/\") {\n        if (token == undefined) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new next_dist_compiled_edge_runtime_primitives_url__WEBPACK_IMPORTED_MODULE_2__.URL(\"/account/login\", req.url));\n        }\n        const { payload  } = await (0,jose__WEBPACK_IMPORTED_MODULE_1__.jwtVerify)(token, new TextEncoder().encode(process.env.palabraSecreta));\n        console.log(payload);\n    }\n    if (token == undefined) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new next_dist_compiled_edge_runtime_primitives_url__WEBPACK_IMPORTED_MODULE_2__.URL(\"/\", req.url));\n    }\n//return NextResponse.redirect(new URL('/about-2', request.url))\n}\n// See \"Matching Paths\" below to learn more\nconst config = {\n    matcher: [\n        \"/account/:path*\",\n        \"/\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0JBQWdCO0FBQzBCO0FBQ1Y7QUFDc0M7QUFFdEUsOERBQThEO0FBQ3ZELGVBQWVHLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2xDLE1BQU1DLEtBQUssR0FBR0QsR0FBRyxDQUFDRSxPQUFPLENBQUNDLEtBQUs7SUFDL0IsTUFBTUMsUUFBUSxHQUFHSixHQUFHLENBQUNLLE9BQU8sQ0FBQ0MsUUFBUTtJQUVyQyxJQUFHRixRQUFRLElBQUksR0FBRyxFQUFDO1FBQ2YsSUFBR0gsS0FBSyxJQUFJTSxTQUFTLEVBQUM7WUFDbEIsT0FBT1gsOERBQXFCLENBQUMsSUFBSUUsK0VBQUcsQ0FBQyxnQkFBZ0IsRUFBRUUsR0FBRyxDQUFDUyxHQUFHLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBRUQsTUFBTSxFQUFFQyxPQUFPLEdBQUUsR0FBRyxNQUFNYiwrQ0FBUyxDQUFDSSxLQUFLLEVBQUUsSUFBSVUsV0FBVyxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFHVCxLQUFLLElBQUlNLFNBQVMsRUFBQztRQUNsQixPQUFPWCw4REFBcUIsQ0FBQyxJQUFJRSwrRUFBRyxDQUFDLEdBQUcsRUFBRUUsR0FBRyxDQUFDUyxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDO0FBR0gsZ0VBQWdFO0FBQ2xFLENBQUM7QUFFRCwyQ0FBMkM7QUFDcEMsTUFBTVMsTUFBTSxHQUFHO0lBQ3BCQyxPQUFPLEVBQUU7UUFBQyxpQkFBaUI7UUFBQyxHQUFHO0tBQUM7Q0FDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS5qcz8zYmNiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG1pZGRsZXdhcmUudHNcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gJ2pvc2UnXHJcbmltcG9ydCB7IFVSTCB9IGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9AZWRnZS1ydW50aW1lL3ByaW1pdGl2ZXMvdXJsJztcclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gY2FuIGJlIG1hcmtlZCBgYXN5bmNgIGlmIHVzaW5nIGBhd2FpdGAgaW5zaWRlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcSkge1xyXG4gICAgY29uc3QgdG9rZW4gPSByZXEuY29va2llcy5Ub2tlbjtcclxuICAgIGNvbnN0IHBhdGhOYW1lID0gcmVxLm5leHRVcmwucGF0aG5hbWU7XHJcbiAgICBcclxuICAgIGlmKHBhdGhOYW1lID09ICcvJyl7XHJcbiAgICAgICAgaWYodG9rZW4gPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvYWNjb3VudC9sb2dpbicsIHJlcS51cmwpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB7IHBheWxvYWQgfSA9IGF3YWl0IGp3dFZlcmlmeSh0b2tlbiwgbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHByb2Nlc3MuZW52LnBhbGFicmFTZWNyZXRhKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGF5bG9hZClcclxuICAgIH1cclxuXHJcbiAgICBpZih0b2tlbiA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnLycsIHJlcS51cmwpKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgLy9yZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9hYm91dC0yJywgcmVxdWVzdC51cmwpKVxyXG59XHJcblxyXG4vLyBTZWUgXCJNYXRjaGluZyBQYXRoc1wiIGJlbG93IHRvIGxlYXJuIG1vcmVcclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBtYXRjaGVyOiBbJy9hY2NvdW50LzpwYXRoKicsJy8nXVxyXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImp3dFZlcmlmeSIsIlVSTCIsIm1pZGRsZXdhcmUiLCJyZXEiLCJ0b2tlbiIsImNvb2tpZXMiLCJUb2tlbiIsInBhdGhOYW1lIiwibmV4dFVybCIsInBhdGhuYW1lIiwidW5kZWZpbmVkIiwicmVkaXJlY3QiLCJ1cmwiLCJwYXlsb2FkIiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJwcm9jZXNzIiwiZW52IiwicGFsYWJyYVNlY3JldGEiLCJjb25zb2xlIiwibG9nIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});