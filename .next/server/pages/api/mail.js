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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        service: \"hotmail\",\n        auth: {\n            user: process.env.MAIL,\n            pass: process.env.PASS\n        }\n    });\n    const mailData = {\n        from: process.env.MAIL,\n        to: req.body.email,\n        subject: \"Confirmaci\\xf3n de turno - Audio y Tambor\",\n        text: \"SU TURNO FUE CONFIRMADO\",\n        html: `\n            <div>\n                <h1>Turno confirmado para el día ${req.body.date} a las ${req.body.formatedHour}</h1>\n                \n\n                <h2><a href=\"https://simulacro-campania-genosha.vercel.app/success?selectedDate=${req.body.date}&date=${req.body.formatedDateCountdown}\">VISITÁ LA CUENTA REGRESIVA</a></h2>\n\n\n                    <p>Recordamos la información brindada, ante cualquier modificación comuníquese telefónicamente al +549 342 5373670</p>\n\n\n                    <p>Artista/banda: ${req.body.artistName}</p>\n                    <p>¿Alquila backline?: ${req.body.backline}</p>\n                    <p>Nombre: ${req.body.name}</p>\n                    <p>Apellido: ${req.body.lastName}</p>\n                    <p>Email: ${req.body.email}</p>\n                    <p>Teléfono: ${req.body.phone}</p>\n                    <p>¿Acepta las políticas de cancelación?: ${req.body.terms}</p>\n\n\n                <h2>¡Te esperamos!</h2>\n            </div>\n        `\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) console.log(err);\n        else console.log(info);\n    });\n    res.status(200);\n    console.log(req.body);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkJBQWUsb0NBQVVBLEdBQVEsRUFBRUMsR0FBUSxFQUFFO0lBQ3pDLElBQUlDLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0lBQ3RDLE1BQU1DLFdBQVcsR0FBR0YsVUFBVSxDQUFDRyxlQUFlLENBQUM7UUFDM0NDLE9BQU8sRUFBRSxTQUFTO1FBQ2xCQyxJQUFJLEVBQUU7WUFDRkMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSTtZQUN0QkMsSUFBSSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csSUFBSTtTQUN6QjtLQUNKLENBQUM7SUFFRixNQUFNQyxRQUFRLEdBQUc7UUFDYkMsSUFBSSxFQUFFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSTtRQUN0QkssRUFBRSxFQUFFaEIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDQyxLQUFLO1FBQ2xCQyxPQUFPLEVBQUUsMkNBQXdDO1FBQ2pEQyxJQUFJLEVBQUUseUJBQXlCO1FBQy9CQyxJQUFJLEVBQUUsQ0FBQzs7aURBRWtDLEVBQUVyQixHQUFHLENBQUNpQixJQUFJLENBQUNLLElBQUksQ0FBQyxPQUFPLEVBQUV0QixHQUFHLENBQUNpQixJQUFJLENBQUNNLFlBQVksQ0FBQzs7O2dHQUdBLEVBQUV2QixHQUFHLENBQUNpQixJQUFJLENBQUNLLElBQUksQ0FBQyxNQUFNLEVBQUV0QixHQUFHLENBQUNpQixJQUFJLENBQUNPLHFCQUFxQixDQUFDOzs7Ozs7c0NBTWpILEVBQUV4QixHQUFHLENBQUNpQixJQUFJLENBQUNRLFVBQVUsQ0FBQzsyQ0FDakIsRUFBRXpCLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQ1MsUUFBUSxDQUFDOytCQUNoQyxFQUFFMUIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDVSxJQUFJLENBQUM7aUNBQ2QsRUFBRTNCLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQ1csUUFBUSxDQUFDOzhCQUN2QixFQUFFNUIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDQyxLQUFLLENBQUM7aUNBQ2QsRUFBRWxCLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQ1ksS0FBSyxDQUFDOzhEQUNZLEVBQUU3QixHQUFHLENBQUNpQixJQUFJLENBQUNhLEtBQUssQ0FBQzs7Ozs7UUFLdkUsQ0FBQztLQUNKO0lBRUQxQixXQUFXLENBQUMyQixRQUFRLENBQUNqQixRQUFRLEVBQUUsU0FBVWtCLEdBQVEsRUFBRUMsSUFBUyxFQUFFO1FBQzFELElBQUdELEdBQUcsRUFDSkUsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUcsQ0FBQzthQUVoQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztLQUNwQixDQUFDO0lBRUZoQyxHQUFHLENBQUNtQyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBRWpCRixPQUFPLENBQUNDLEdBQUcsQ0FBQ25DLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQztDQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zaGVldHMtZm9ybS8uL3BhZ2VzL2FwaS9tYWlsLnRzPzRmNjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlcTogYW55LCByZXM6IGFueSkge1xuICAgIGxldCBub2RlbWFpbGVyID0gcmVxdWlyZSgnbm9kZW1haWxlcicpXG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICAgIHNlcnZpY2U6IFwiaG90bWFpbFwiLFxuICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5NQUlMLFxuICAgICAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuUEFTU1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IG1haWxEYXRhID0ge1xuICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5NQUlMLFxuICAgICAgICB0bzogcmVxLmJvZHkuZW1haWwsXG4gICAgICAgIHN1YmplY3Q6ICdDb25maXJtYWNpw7NuIGRlIHR1cm5vIC0gQXVkaW8geSBUYW1ib3InLFxuICAgICAgICB0ZXh0OiAnU1UgVFVSTk8gRlVFIENPTkZJUk1BRE8nLFxuICAgICAgICBodG1sOiBgXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5UdXJubyBjb25maXJtYWRvIHBhcmEgZWwgZMOtYSAke3JlcS5ib2R5LmRhdGV9IGEgbGFzICR7cmVxLmJvZHkuZm9ybWF0ZWRIb3VyfTwvaDE+XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICA8aDI+PGEgaHJlZj1cImh0dHBzOi8vc2ltdWxhY3JvLWNhbXBhbmlhLWdlbm9zaGEudmVyY2VsLmFwcC9zdWNjZXNzP3NlbGVjdGVkRGF0ZT0ke3JlcS5ib2R5LmRhdGV9JmRhdGU9JHtyZXEuYm9keS5mb3JtYXRlZERhdGVDb3VudGRvd259XCI+VklTSVTDgSBMQSBDVUVOVEEgUkVHUkVTSVZBPC9hPjwvaDI+XG5cblxuICAgICAgICAgICAgICAgICAgICA8cD5SZWNvcmRhbW9zIGxhIGluZm9ybWFjacOzbiBicmluZGFkYSwgYW50ZSBjdWFscXVpZXIgbW9kaWZpY2FjacOzbiBjb211bsOtcXVlc2UgdGVsZWbDs25pY2FtZW50ZSBhbCArNTQ5IDM0MiA1MzczNjcwPC9wPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPHA+QXJ0aXN0YS9iYW5kYTogJHtyZXEuYm9keS5hcnRpc3ROYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+wr9BbHF1aWxhIGJhY2tsaW5lPzogJHtyZXEuYm9keS5iYWNrbGluZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5vbWJyZTogJHtyZXEuYm9keS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QXBlbGxpZG86ICR7cmVxLmJvZHkubGFzdE5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5FbWFpbDogJHtyZXEuYm9keS5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlRlbMOpZm9ubzogJHtyZXEuYm9keS5waG9uZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPsK/QWNlcHRhIGxhcyBwb2zDrXRpY2FzIGRlIGNhbmNlbGFjacOzbj86ICR7cmVxLmJvZHkudGVybXN9PC9wPlxuXG5cbiAgICAgICAgICAgICAgICA8aDI+wqFUZSBlc3BlcmFtb3MhPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbERhdGEsIGZ1bmN0aW9uIChlcnI6IGFueSwgaW5mbzogYW55KSB7XG4gICAgICAgIGlmKGVycilcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbmZvKVxuICAgICAgfSlcblxuICAgICAgcmVzLnN0YXR1cygyMDApXG5cbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcbn0iXSwibmFtZXMiOlsicmVxIiwicmVzIiwibm9kZW1haWxlciIsInJlcXVpcmUiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJhdXRoIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJNQUlMIiwicGFzcyIsIlBBU1MiLCJtYWlsRGF0YSIsImZyb20iLCJ0byIsImJvZHkiLCJlbWFpbCIsInN1YmplY3QiLCJ0ZXh0IiwiaHRtbCIsImRhdGUiLCJmb3JtYXRlZEhvdXIiLCJmb3JtYXRlZERhdGVDb3VudGRvd24iLCJhcnRpc3ROYW1lIiwiYmFja2xpbmUiLCJuYW1lIiwibGFzdE5hbWUiLCJwaG9uZSIsInRlcm1zIiwic2VuZE1haWwiLCJlcnIiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/mail.ts\n");

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