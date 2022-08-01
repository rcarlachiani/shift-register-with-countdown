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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        service: \"hotmail\",\n        auth: {\n            user: process.env.MAIL,\n            pass: process.env.PASS\n        }\n    });\n    const mailData = {\n        from: process.env.MAIL,\n        to: req.body.email,\n        subject: \"Confirmaci\\xf3n de turno - Audio y Tambor\",\n        text: \"SU TURNO FUE CONFIRMADO\",\n        html: `\n            <div>\n                <h1>Turno confirmado para el día ${req.body.date} a las ${req.body.formatedHour}</h1>\n                \n\n                <h2><a href=\"https://simulacro-campania-genosha.vercel.app/success?date=${req.body.formatedDateCountdown}&selectedDate=${req.body.date}\">VISITÁ LA CUENTA REGRESIVA</a></h2>\n\n                \n                    <p>Recordamos la información brindada, ante cualquier modificación comuníquese telefónicamente al +549 342 5373670</p>\n\n\n                    <p>Artista/banda: ${req.body.artistName}</p>\n                    <p>¿Alquila backline?: ${req.body.backline}</p>\n                    <p>Nombre: ${req.body.name}</p>\n                    <p>Apellido: ${req.body.lastName}</p>\n                    <p>Email: ${req.body.email}</p>\n                    <p>Teléfono: ${req.body.phone}</p>\n                    <p>¿Acepta las políticas de cancelación?: ${req.body.terms}</p>\n\n\n                <h2>¡Te esperamos!</h2>\n            </div>\n        `\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) console.log(err);\n        else console.log(info);\n    });\n    res.status(200);\n    console.log(req.body);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkJBQWUsb0NBQVVBLEdBQVEsRUFBRUMsR0FBUSxFQUFFO0lBQ3pDLElBQUlDLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0lBQ3RDLE1BQU1DLFdBQVcsR0FBR0YsVUFBVSxDQUFDRyxlQUFlLENBQUM7UUFDM0NDLE9BQU8sRUFBRSxTQUFTO1FBQ2xCQyxJQUFJLEVBQUU7WUFDRkMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSTtZQUN0QkMsSUFBSSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csSUFBSTtTQUN6QjtLQUNKLENBQUM7SUFFRixNQUFNQyxRQUFRLEdBQUc7UUFDYkMsSUFBSSxFQUFFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSTtRQUN0QkssRUFBRSxFQUFFaEIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDQyxLQUFLO1FBQ2xCQyxPQUFPLEVBQUUsMkNBQXdDO1FBQ2pEQyxJQUFJLEVBQUUseUJBQXlCO1FBQy9CQyxJQUFJLEVBQUUsQ0FBQzs7aURBRWtDLEVBQUVyQixHQUFHLENBQUNpQixJQUFJLENBQUNLLElBQUksQ0FBQyxPQUFPLEVBQUV0QixHQUFHLENBQUNpQixJQUFJLENBQUNNLFlBQVksQ0FBQzs7O3dGQUdSLEVBQUV2QixHQUFHLENBQUNpQixJQUFJLENBQUNPLHFCQUFxQixDQUFDLGNBQWMsRUFBRXhCLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQ0ssSUFBSSxDQUFDOzs7Ozs7c0NBTWpILEVBQUV0QixHQUFHLENBQUNpQixJQUFJLENBQUNRLFVBQVUsQ0FBQzsyQ0FDakIsRUFBRXpCLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQ1MsUUFBUSxDQUFDOytCQUNoQyxFQUFFMUIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDVSxJQUFJLENBQUM7aUNBQ2QsRUFBRTNCLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQ1csUUFBUSxDQUFDOzhCQUN2QixFQUFFNUIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDQyxLQUFLLENBQUM7aUNBQ2QsRUFBRWxCLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQ1ksS0FBSyxDQUFDOzhEQUNZLEVBQUU3QixHQUFHLENBQUNpQixJQUFJLENBQUNhLEtBQUssQ0FBQzs7Ozs7UUFLdkUsQ0FBQztLQUNKO0lBRUQxQixXQUFXLENBQUMyQixRQUFRLENBQUNqQixRQUFRLEVBQUUsU0FBVWtCLEdBQVEsRUFBRUMsSUFBUyxFQUFFO1FBQzFELElBQUdELEdBQUcsRUFDSkUsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUcsQ0FBQzthQUVoQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztLQUNwQixDQUFDO0lBRUZoQyxHQUFHLENBQUNtQyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBRWpCRixPQUFPLENBQUNDLEdBQUcsQ0FBQ25DLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQztDQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zaGVldHMtZm9ybS8uL3BhZ2VzL2FwaS9tYWlsLnRzPzRmNjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlcTogYW55LCByZXM6IGFueSkge1xuICAgIGxldCBub2RlbWFpbGVyID0gcmVxdWlyZSgnbm9kZW1haWxlcicpXG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICAgIHNlcnZpY2U6IFwiaG90bWFpbFwiLFxuICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5NQUlMLFxuICAgICAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuUEFTU1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IG1haWxEYXRhID0ge1xuICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5NQUlMLFxuICAgICAgICB0bzogcmVxLmJvZHkuZW1haWwsXG4gICAgICAgIHN1YmplY3Q6ICdDb25maXJtYWNpw7NuIGRlIHR1cm5vIC0gQXVkaW8geSBUYW1ib3InLFxuICAgICAgICB0ZXh0OiAnU1UgVFVSTk8gRlVFIENPTkZJUk1BRE8nLFxuICAgICAgICBodG1sOiBgXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5UdXJubyBjb25maXJtYWRvIHBhcmEgZWwgZMOtYSAke3JlcS5ib2R5LmRhdGV9IGEgbGFzICR7cmVxLmJvZHkuZm9ybWF0ZWRIb3VyfTwvaDE+XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICA8aDI+PGEgaHJlZj1cImh0dHBzOi8vc2ltdWxhY3JvLWNhbXBhbmlhLWdlbm9zaGEudmVyY2VsLmFwcC9zdWNjZXNzP2RhdGU9JHtyZXEuYm9keS5mb3JtYXRlZERhdGVDb3VudGRvd259JnNlbGVjdGVkRGF0ZT0ke3JlcS5ib2R5LmRhdGV9XCI+VklTSVTDgSBMQSBDVUVOVEEgUkVHUkVTSVZBPC9hPjwvaDI+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHA+UmVjb3JkYW1vcyBsYSBpbmZvcm1hY2nDs24gYnJpbmRhZGEsIGFudGUgY3VhbHF1aWVyIG1vZGlmaWNhY2nDs24gY29tdW7DrXF1ZXNlIHRlbGVmw7NuaWNhbWVudGUgYWwgKzU0OSAzNDIgNTM3MzY3MDwvcD5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxwPkFydGlzdGEvYmFuZGE6ICR7cmVxLmJvZHkuYXJ0aXN0TmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPsK/QWxxdWlsYSBiYWNrbGluZT86ICR7cmVxLmJvZHkuYmFja2xpbmV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5Ob21icmU6ICR7cmVxLmJvZHkubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFwZWxsaWRvOiAke3JlcS5ib2R5Lmxhc3ROYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RW1haWw6ICR7cmVxLmJvZHkuZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5UZWzDqWZvbm86ICR7cmVxLmJvZHkucGhvbmV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD7Cv0FjZXB0YSBsYXMgcG9sw610aWNhcyBkZSBjYW5jZWxhY2nDs24/OiAke3JlcS5ib2R5LnRlcm1zfTwvcD5cblxuXG4gICAgICAgICAgICAgICAgPGgyPsKhVGUgZXNwZXJhbW9zITwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxEYXRhLCBmdW5jdGlvbiAoZXJyOiBhbnksIGluZm86IGFueSkge1xuICAgICAgICBpZihlcnIpXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgY29uc29sZS5sb2coaW5mbylcbiAgICAgIH0pXG5cbiAgICAgIHJlcy5zdGF0dXMoMjAwKVxuXG4gICAgY29uc29sZS5sb2cocmVxLmJvZHkpXG59Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm5vZGVtYWlsZXIiLCJyZXF1aXJlIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZXJ2aWNlIiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiTUFJTCIsInBhc3MiLCJQQVNTIiwibWFpbERhdGEiLCJmcm9tIiwidG8iLCJib2R5IiwiZW1haWwiLCJzdWJqZWN0IiwidGV4dCIsImh0bWwiLCJkYXRlIiwiZm9ybWF0ZWRIb3VyIiwiZm9ybWF0ZWREYXRlQ291bnRkb3duIiwiYXJ0aXN0TmFtZSIsImJhY2tsaW5lIiwibmFtZSIsImxhc3ROYW1lIiwicGhvbmUiLCJ0ZXJtcyIsInNlbmRNYWlsIiwiZXJyIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/mail.ts\n");

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