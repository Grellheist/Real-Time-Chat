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
exports.id = "pages/api/socket";
exports.ids = ["pages/api/socket"];
exports.modules = {

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("socket.io");;

/***/ }),

/***/ "(api)/./src/pages/api/socket.tsx":
/*!**********************************!*\
  !*** ./src/pages/api/socket.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SocketHandler)\n/* harmony export */ });\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var _utils_sockets_messageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/sockets/messageHandler */ \"(api)/./src/utils/sockets/messageHandler.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io__WEBPACK_IMPORTED_MODULE_0__]);\nsocket_io__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction SocketHandler(req, res) {\n    // It means that socket server was already initialised\n    if (res.socket.server.io) {\n        console.log(\"Already set up\");\n        res.end();\n        return;\n    }\n    const io = new socket_io__WEBPACK_IMPORTED_MODULE_0__.Server(res.socket.server);\n    res.socket.server.io = io;\n    const onConnection = (socket)=>{\n        (0,_utils_sockets_messageHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(io, socket);\n    };\n    // Define actions inside\n    io.on(\"connection\", onConnection);\n    console.log(\"Setting up socket\");\n    res.end();\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NvY2tldC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQzZCO0FBRWhELFFBQVEsQ0FBQ0UsYUFBYSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQzdDLEVBQXNEO0lBQ3RELEVBQUUsRUFBRUEsR0FBRyxDQUFDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsRUFBRSxFQUFFLENBQUM7UUFDdkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWdCO1FBQzVCTCxHQUFHLENBQUNNLEdBQUc7UUFDUCxNQUFNO0lBQ1YsQ0FBQztJQUVELEtBQUssQ0FBQ0gsRUFBRSxHQUFHLEdBQUcsQ0FBQ1AsNkNBQU0sQ0FBQ0ksR0FBRyxDQUFDQyxNQUFNLENBQUNDLE1BQU07SUFDdkNGLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLENBQUNDLEVBQUUsR0FBR0EsRUFBRTtJQUV6QixLQUFLLENBQUNJLFlBQVksSUFBSU4sTUFBTSxHQUFLLENBQUM7UUFDOUJKLHlFQUFjLENBQUNNLEVBQUUsRUFBRUYsTUFBTTtJQUM3QixDQUFDO0lBRUQsRUFBd0I7SUFDeEJFLEVBQUUsQ0FBQ0ssRUFBRSxDQUFDLENBQVksYUFBRUQsWUFBWTtJQUVoQ0gsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBbUI7SUFDL0JMLEdBQUcsQ0FBQ00sR0FBRztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdGFpbHdpbmRjc3MtdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3BhZ2VzL2FwaS9zb2NrZXQudHN4PzdmYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmVyIH0gZnJvbSBcInNvY2tldC5pb1wiO1xuaW1wb3J0IG1lc3NhZ2VIYW5kbGVyIGZyb20gXCIuLi8uLi91dGlscy9zb2NrZXRzL21lc3NhZ2VIYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvY2tldEhhbmRsZXIocmVxLCByZXMpIHtcbiAgICAvLyBJdCBtZWFucyB0aGF0IHNvY2tldCBzZXJ2ZXIgd2FzIGFscmVhZHkgaW5pdGlhbGlzZWRcbiAgICBpZiAocmVzLnNvY2tldC5zZXJ2ZXIuaW8pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBbHJlYWR5IHNldCB1cFwiKTtcbiAgICAgICAgcmVzLmVuZCgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW8gPSBuZXcgU2VydmVyKHJlcy5zb2NrZXQuc2VydmVyKTtcbiAgICByZXMuc29ja2V0LnNlcnZlci5pbyA9IGlvO1xuXG4gICAgY29uc3Qgb25Db25uZWN0aW9uID0gKHNvY2tldCkgPT4ge1xuICAgICAgICBtZXNzYWdlSGFuZGxlcihpbywgc29ja2V0KTtcbiAgICB9O1xuXG4gICAgLy8gRGVmaW5lIGFjdGlvbnMgaW5zaWRlXG4gICAgaW8ub24oXCJjb25uZWN0aW9uXCIsIG9uQ29ubmVjdGlvbik7XG5cbiAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgdXAgc29ja2V0XCIpO1xuICAgIHJlcy5lbmQoKTtcbn1cbiJdLCJuYW1lcyI6WyJTZXJ2ZXIiLCJtZXNzYWdlSGFuZGxlciIsIlNvY2tldEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzb2NrZXQiLCJzZXJ2ZXIiLCJpbyIsImNvbnNvbGUiLCJsb2ciLCJlbmQiLCJvbkNvbm5lY3Rpb24iLCJvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/socket.tsx\n");

/***/ }),

/***/ "(api)/./src/utils/sockets/messageHandler.tsx":
/*!**********************************************!*\
  !*** ./src/utils/sockets/messageHandler.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((io, socket)=>{\n    const createdMessage = (msg)=>{\n        socket.broadcast.emit(\"newIncomingMessage\", msg);\n    };\n    socket.on(\"createdMessage\", createdMessage);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvdXRpbHMvc29ja2V0cy9tZXNzYWdlSGFuZGxlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFnQixDQUFBQSxFQUFFLEVBQUVDLE1BQU0sR0FBSyxDQUFDO0lBQzVCLEtBQUssQ0FBQ0MsY0FBYyxJQUFJQyxHQUFHLEdBQUssQ0FBQztRQUM3QkYsTUFBTSxDQUFDRyxTQUFTLENBQUNDLElBQUksQ0FBQyxDQUFvQixxQkFBRUYsR0FBRztJQUNuRCxDQUFDO0lBRURGLE1BQU0sQ0FBQ0ssRUFBRSxDQUFDLENBQWdCLGlCQUFFSixjQUFjO0FBQzlDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdGFpbHdpbmRjc3MtdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3V0aWxzL3NvY2tldHMvbWVzc2FnZUhhbmRsZXIudHN4PzE0YmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKGlvLCBzb2NrZXQpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkTWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICAgICAgc29ja2V0LmJyb2FkY2FzdC5lbWl0KFwibmV3SW5jb21pbmdNZXNzYWdlXCIsIG1zZyk7XG4gICAgfTtcblxuICAgIHNvY2tldC5vbihcImNyZWF0ZWRNZXNzYWdlXCIsIGNyZWF0ZWRNZXNzYWdlKTtcbn07XG4iXSwibmFtZXMiOlsiaW8iLCJzb2NrZXQiLCJjcmVhdGVkTWVzc2FnZSIsIm1zZyIsImJyb2FkY2FzdCIsImVtaXQiLCJvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/utils/sockets/messageHandler.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/socket.tsx"));
module.exports = __webpack_exports__;

})();