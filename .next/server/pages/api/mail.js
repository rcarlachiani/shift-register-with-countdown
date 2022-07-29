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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\nasync function getServerSideProps(context) {\n    return {\n        props: {\n            selectedDate: context.query.selectedDate ? context.query.selectedDate : null,\n            date: context.query.date ? context.query.date : null\n        }\n    };\n}\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res, props) {\n    let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        service: \"hotmail\",\n        auth: {\n            user: process.env.MAIL,\n            pass: process.env.PASS\n        }\n    });\n    const mailData = {\n        from: process.env.MAIL,\n        to: req.body.email,\n        subject: \"Confirmaci\\xf3n de turno - Audio y Tambor\",\n        text: \"SU TURNO FUE CONFIRMADO\",\n        html: `\n            <div>\n                <h1>Turno confirmado para el día ${req.body.date} a las ${req.body.schedule}</h1>\n\n                <p>Le recordamos la información brindada, ante cualquier modificación comuníquese telefónicamente al +549 342 5373670</p>\n\n                <p>Artista/banda: ${req.body.artistName}</p>\n                <p>¿Alquila backline?: ${req.body.backline}</p>\n                <p>Nombre: ${req.body.name}</p>\n                <p>Apellido: ${req.body.lastName}</p>\n                <p>Email: ${req.body.email}</p>\n                <p>Teléfono: ${req.body.phone}</p>\n                <p>¿Acepta las políticas de cancelación?: ${req.body.terms}</p>\n\n                <h2>¡Te esperamos!</h2>\n            </div>\n        `\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) console.log(err);\n        else console.log(info);\n    });\n    res.status(200);\n    console.log(req.body);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLGVBQWVBLGtCQUFrQixDQUFDQyxPQUFZLEVBQUU7SUFDbkQsT0FBTztRQUNIQyxLQUFLLEVBQUU7WUFDSkMsWUFBWSxFQUFFRixPQUFPLENBQUNHLEtBQUssQ0FBQ0QsWUFBWSxHQUFHRixPQUFPLENBQUNHLEtBQUssQ0FBQ0QsWUFBWSxHQUFHLElBQUk7WUFDNUVFLElBQUksRUFBRUosT0FBTyxDQUFDRyxLQUFLLENBQUNDLElBQUksR0FBR0osT0FBTyxDQUFDRyxLQUFLLENBQUNDLElBQUksR0FBRyxJQUFJO1NBQ3REO0tBQ0o7Q0FDSjtBQUVELDZCQUFlLG9DQUFVQyxHQUFRLEVBQUVDLEdBQVEsRUFBRUwsS0FBVSxFQUFFO0lBQ3JELElBQUlNLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0lBQ3RDLE1BQU1DLFdBQVcsR0FBR0YsVUFBVSxDQUFDRyxlQUFlLENBQUM7UUFDM0NDLE9BQU8sRUFBRSxTQUFTO1FBQ2xCQyxJQUFJLEVBQUU7WUFDRkMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSTtZQUN0QkMsSUFBSSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csSUFBSTtTQUN6QjtLQUNKLENBQUM7SUFFRixNQUFNQyxRQUFRLEdBQUc7UUFDYkMsSUFBSSxFQUFFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSTtRQUN0QkssRUFBRSxFQUFFaEIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDQyxLQUFLO1FBQ2xCQyxPQUFPLEVBQUUsMkNBQXdDO1FBQ2pEQyxJQUFJLEVBQUUseUJBQXlCO1FBQy9CQyxJQUFJLEVBQUUsQ0FBQzs7aURBRWtDLEVBQUVyQixHQUFHLENBQUNpQixJQUFJLENBQUNsQixJQUFJLENBQUMsT0FBTyxFQUFFQyxHQUFHLENBQUNpQixJQUFJLENBQUNLLFFBQVEsQ0FBQzs7OztrQ0FJMUQsRUFBRXRCLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQ00sVUFBVSxDQUFDO3VDQUNqQixFQUFFdkIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDTyxRQUFRLENBQUM7MkJBQ2hDLEVBQUV4QixHQUFHLENBQUNpQixJQUFJLENBQUNRLElBQUksQ0FBQzs2QkFDZCxFQUFFekIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDUyxRQUFRLENBQUM7MEJBQ3ZCLEVBQUUxQixHQUFHLENBQUNpQixJQUFJLENBQUNDLEtBQUssQ0FBQzs2QkFDZCxFQUFFbEIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDVSxLQUFLLENBQUM7MERBQ1ksRUFBRTNCLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQ1csS0FBSyxDQUFDOzs7O1FBSW5FLENBQUM7S0FDSjtJQUVEeEIsV0FBVyxDQUFDeUIsUUFBUSxDQUFDZixRQUFRLEVBQUUsU0FBVWdCLEdBQVEsRUFBRUMsSUFBUyxFQUFFO1FBQzFELElBQUdELEdBQUcsRUFDSkUsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUcsQ0FBQzthQUVoQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztLQUNwQixDQUFDO0lBRUY5QixHQUFHLENBQUNpQyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBRWpCRixPQUFPLENBQUNDLEdBQUcsQ0FBQ2pDLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQztDQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zaGVldHMtZm9ybS8uL3BhZ2VzL2FwaS9tYWlsLnRzPzRmNjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBcbiAgICAgICAgICAgc2VsZWN0ZWREYXRlOiBjb250ZXh0LnF1ZXJ5LnNlbGVjdGVkRGF0ZSA/IGNvbnRleHQucXVlcnkuc2VsZWN0ZWREYXRlIDogbnVsbCwgXG4gICAgICAgICAgIGRhdGU6IGNvbnRleHQucXVlcnkuZGF0ZSA/IGNvbnRleHQucXVlcnkuZGF0ZSA6IG51bGxcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlcTogYW55LCByZXM6IGFueSwgcHJvcHM6IGFueSkge1xuICAgIGxldCBub2RlbWFpbGVyID0gcmVxdWlyZSgnbm9kZW1haWxlcicpXG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICAgIHNlcnZpY2U6IFwiaG90bWFpbFwiLFxuICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5NQUlMLFxuICAgICAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuUEFTU1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IG1haWxEYXRhID0ge1xuICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5NQUlMLFxuICAgICAgICB0bzogcmVxLmJvZHkuZW1haWwsXG4gICAgICAgIHN1YmplY3Q6ICdDb25maXJtYWNpw7NuIGRlIHR1cm5vIC0gQXVkaW8geSBUYW1ib3InLFxuICAgICAgICB0ZXh0OiAnU1UgVFVSTk8gRlVFIENPTkZJUk1BRE8nLFxuICAgICAgICBodG1sOiBgXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5UdXJubyBjb25maXJtYWRvIHBhcmEgZWwgZMOtYSAke3JlcS5ib2R5LmRhdGV9IGEgbGFzICR7cmVxLmJvZHkuc2NoZWR1bGV9PC9oMT5cblxuICAgICAgICAgICAgICAgIDxwPkxlIHJlY29yZGFtb3MgbGEgaW5mb3JtYWNpw7NuIGJyaW5kYWRhLCBhbnRlIGN1YWxxdWllciBtb2RpZmljYWNpw7NuIGNvbXVuw61xdWVzZSB0ZWxlZsOzbmljYW1lbnRlIGFsICs1NDkgMzQyIDUzNzM2NzA8L3A+XG5cbiAgICAgICAgICAgICAgICA8cD5BcnRpc3RhL2JhbmRhOiAke3JlcS5ib2R5LmFydGlzdE5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPsK/QWxxdWlsYSBiYWNrbGluZT86ICR7cmVxLmJvZHkuYmFja2xpbmV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPk5vbWJyZTogJHtyZXEuYm9keS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5BcGVsbGlkbzogJHtyZXEuYm9keS5sYXN0TmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+RW1haWw6ICR7cmVxLmJvZHkuZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgIDxwPlRlbMOpZm9ubzogJHtyZXEuYm9keS5waG9uZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+wr9BY2VwdGEgbGFzIHBvbMOtdGljYXMgZGUgY2FuY2VsYWNpw7NuPzogJHtyZXEuYm9keS50ZXJtc308L3A+XG5cbiAgICAgICAgICAgICAgICA8aDI+wqFUZSBlc3BlcmFtb3MhPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbERhdGEsIGZ1bmN0aW9uIChlcnI6IGFueSwgaW5mbzogYW55KSB7XG4gICAgICAgIGlmKGVycilcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbmZvKVxuICAgICAgfSlcblxuICAgICAgcmVzLnN0YXR1cygyMDApXG5cbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcbn0iXSwibmFtZXMiOlsiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInByb3BzIiwic2VsZWN0ZWREYXRlIiwicXVlcnkiLCJkYXRlIiwicmVxIiwicmVzIiwibm9kZW1haWxlciIsInJlcXVpcmUiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJhdXRoIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJNQUlMIiwicGFzcyIsIlBBU1MiLCJtYWlsRGF0YSIsImZyb20iLCJ0byIsImJvZHkiLCJlbWFpbCIsInN1YmplY3QiLCJ0ZXh0IiwiaHRtbCIsInNjaGVkdWxlIiwiYXJ0aXN0TmFtZSIsImJhY2tsaW5lIiwibmFtZSIsImxhc3ROYW1lIiwicGhvbmUiLCJ0ZXJtcyIsInNlbmRNYWlsIiwiZXJyIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/mail.ts\n");

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