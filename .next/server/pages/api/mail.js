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
exports.id = "pages/api/mail";
exports.ids = ["pages/api/mail"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/mail.ts":
/*!***************************!*\
  !*** ./pages/api/mail.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        service: \"hotmail\",\n        auth: {\n            user: process.env.MAIL,\n            pass: process.env.PASS\n        }\n    });\n    const mailData = {\n        from: process.env.MAIL,\n        to: req.body.email,\n        subject: \"Confirmaci\\xf3n de turno - Audio y Tambor\",\n        text: \"SU TURNO FUE CONFIRMADO\",\n        html: `\n            <div>\n                <h1>Turno confirmado para el día ${req.body.date} a las ${req.body.schedule}</h1>\n                \n\n                <h2><a href=\"https://simulacro-campania-genosha.vercel.app/success?selectedDate=${req.body.date}&date=${req.body.countDown}\">VISITÁ LA CUENTA REGRESIVA</a></h2>\n\n\n                    <p>Recordamos la información brindada, ante cualquier modificación comuníquese telefónicamente al +549 342 5373670</p>\n\n\n                    <p>Artista/banda: ${req.body.artistName}</p>\n                    <p>¿Alquila backline?: ${req.body.backline}</p>\n                    <p>Nombre: ${req.body.name}</p>\n                    <p>Apellido: ${req.body.lastName}</p>\n                    <p>Email: ${req.body.email}</p>\n                    <p>Teléfono: ${req.body.phone}</p>\n                    <p>¿Acepta las políticas de cancelación?: ${req.body.terms}</p>\n\n\n                <h2>¡Te esperamos!</h2>\n            </div>\n        `\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) console.log(err);\n        else console.log(info);\n    });\n    res.status(200);\n    console.log(req.body);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsNkJBQWUsb0NBQVVBLEdBQVEsRUFBRUMsR0FBUSxFQUFFO0lBQ3pDLElBQUlDLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0lBQ3RDLE1BQU1DLFdBQVcsR0FBR0YsVUFBVSxDQUFDRyxlQUFlLENBQUM7UUFDM0NDLE9BQU8sRUFBRSxTQUFTO1FBQ2xCQyxJQUFJLEVBQUU7WUFDRkMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSTtZQUN0QkMsSUFBSSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csSUFBSTtTQUN6QjtLQUNKLENBQUM7SUFFRixNQUFNQyxRQUFRLEdBQUc7UUFDYkMsSUFBSSxFQUFFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSTtRQUN0QkssRUFBRSxFQUFFaEIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDQyxLQUFLO1FBQ2xCQyxPQUFPLEVBQUUsMkNBQXdDO1FBQ2pEQyxJQUFJLEVBQUUseUJBQXlCO1FBQy9CQyxJQUFJLEVBQUUsQ0FBQzs7aURBRWtDLEVBQUVyQixHQUFHLENBQUNpQixJQUFJLENBQUNLLElBQUksQ0FBQyxPQUFPLEVBQUV0QixHQUFHLENBQUNpQixJQUFJLENBQUNNLFFBQVEsQ0FBQzs7O2dHQUdJLEVBQUV2QixHQUFHLENBQUNpQixJQUFJLENBQUNLLElBQUksQ0FBQyxNQUFNLEVBQUV0QixHQUFHLENBQUNpQixJQUFJLENBQUNPLFNBQVMsQ0FBQzs7Ozs7O3NDQU1yRyxFQUFFeEIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDUSxVQUFVLENBQUM7MkNBQ2pCLEVBQUV6QixHQUFHLENBQUNpQixJQUFJLENBQUNTLFFBQVEsQ0FBQzsrQkFDaEMsRUFBRTFCLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQ1UsSUFBSSxDQUFDO2lDQUNkLEVBQUUzQixHQUFHLENBQUNpQixJQUFJLENBQUNXLFFBQVEsQ0FBQzs4QkFDdkIsRUFBRTVCLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2lDQUNkLEVBQUVsQixHQUFHLENBQUNpQixJQUFJLENBQUNZLEtBQUssQ0FBQzs4REFDWSxFQUFFN0IsR0FBRyxDQUFDaUIsSUFBSSxDQUFDYSxLQUFLLENBQUM7Ozs7O1FBS3ZFLENBQUM7S0FDSjtJQUVEMUIsV0FBVyxDQUFDMkIsUUFBUSxDQUFDakIsUUFBUSxFQUFFLFNBQVVrQixHQUFRLEVBQUVDLElBQVMsRUFBRTtRQUMxRCxJQUFHRCxHQUFHLEVBQ0pFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUM7YUFFaEJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7S0FDcEIsQ0FBQztJQUVGaEMsR0FBRyxDQUFDbUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUVqQkYsT0FBTyxDQUFDQyxHQUFHLENBQUNuQyxHQUFHLENBQUNpQixJQUFJLENBQUM7Q0FDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc2hlZXRzLWZvcm0vLi9wYWdlcy9hcGkvbWFpbC50cz80ZjYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlcTogYW55LCByZXM6IGFueSkge1xuICAgIGxldCBub2RlbWFpbGVyID0gcmVxdWlyZSgnbm9kZW1haWxlcicpXG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICAgIHNlcnZpY2U6IFwiaG90bWFpbFwiLFxuICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5NQUlMLFxuICAgICAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuUEFTU1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IG1haWxEYXRhID0ge1xuICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5NQUlMLFxuICAgICAgICB0bzogcmVxLmJvZHkuZW1haWwsXG4gICAgICAgIHN1YmplY3Q6ICdDb25maXJtYWNpw7NuIGRlIHR1cm5vIC0gQXVkaW8geSBUYW1ib3InLFxuICAgICAgICB0ZXh0OiAnU1UgVFVSTk8gRlVFIENPTkZJUk1BRE8nLFxuICAgICAgICBodG1sOiBgXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5UdXJubyBjb25maXJtYWRvIHBhcmEgZWwgZMOtYSAke3JlcS5ib2R5LmRhdGV9IGEgbGFzICR7cmVxLmJvZHkuc2NoZWR1bGV9PC9oMT5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIDxoMj48YSBocmVmPVwiaHR0cHM6Ly9zaW11bGFjcm8tY2FtcGFuaWEtZ2Vub3NoYS52ZXJjZWwuYXBwL3N1Y2Nlc3M/c2VsZWN0ZWREYXRlPSR7cmVxLmJvZHkuZGF0ZX0mZGF0ZT0ke3JlcS5ib2R5LmNvdW50RG93bn1cIj5WSVNJVMOBIExBIENVRU5UQSBSRUdSRVNJVkE8L2E+PC9oMj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlJlY29yZGFtb3MgbGEgaW5mb3JtYWNpw7NuIGJyaW5kYWRhLCBhbnRlIGN1YWxxdWllciBtb2RpZmljYWNpw7NuIGNvbXVuw61xdWVzZSB0ZWxlZsOzbmljYW1lbnRlIGFsICs1NDkgMzQyIDUzNzM2NzA8L3A+XG5cblxuICAgICAgICAgICAgICAgICAgICA8cD5BcnRpc3RhL2JhbmRhOiAke3JlcS5ib2R5LmFydGlzdE5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD7Cv0FscXVpbGEgYmFja2xpbmU/OiAke3JlcS5ib2R5LmJhY2tsaW5lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+Tm9tYnJlOiAke3JlcS5ib2R5Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BcGVsbGlkbzogJHtyZXEuYm9keS5sYXN0TmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsOiAke3JlcS5ib2R5LmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+VGVsw6lmb25vOiAke3JlcS5ib2R5LnBob25lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+wr9BY2VwdGEgbGFzIHBvbMOtdGljYXMgZGUgY2FuY2VsYWNpw7NuPzogJHtyZXEuYm9keS50ZXJtc308L3A+XG5cblxuICAgICAgICAgICAgICAgIDxoMj7CoVRlIGVzcGVyYW1vcyE8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsRGF0YSwgZnVuY3Rpb24gKGVycjogYW55LCBpbmZvOiBhbnkpIHtcbiAgICAgICAgaWYoZXJyKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pXG4gICAgICB9KVxuXG4gICAgICByZXMuc3RhdHVzKDIwMClcblxuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxufSJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJub2RlbWFpbGVyIiwicmVxdWlyZSIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImF1dGgiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIk1BSUwiLCJwYXNzIiwiUEFTUyIsIm1haWxEYXRhIiwiZnJvbSIsInRvIiwiYm9keSIsImVtYWlsIiwic3ViamVjdCIsInRleHQiLCJodG1sIiwiZGF0ZSIsInNjaGVkdWxlIiwiY291bnREb3duIiwiYXJ0aXN0TmFtZSIsImJhY2tsaW5lIiwibmFtZSIsImxhc3ROYW1lIiwicGhvbmUiLCJ0ZXJtcyIsInNlbmRNYWlsIiwiZXJyIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/mail.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/mail.ts"));
module.exports = __webpack_exports__;

})();