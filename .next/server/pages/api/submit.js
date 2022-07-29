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
exports.id = "pages/api/submit";
exports.ids = ["pages/api/submit"];
exports.modules = {

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ "(api)/./pages/api/submit.ts":
/*!*****************************!*\
  !*** ./pages/api/submit.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! googleapis */ \"googleapis\");\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).send({\n            message: \"Only POST requests allowed\"\n        });\n    }\n    const body = req.body;\n    console.log(req.body);\n    try {\n        const auth = new googleapis__WEBPACK_IMPORTED_MODULE_0__.google.auth.GoogleAuth({\n            credentials: {\n                client_email: process.env.GOOGLE_CLIENT_EMAIL,\n                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\\\n/g, \"\\n\")\n            },\n            scopes: [\n                \"https://www.googleapis.com/auth/drive\",\n                \"https://www.googleapis.com/auth/drive.file\",\n                \"https://www.googleapis.com/auth/spreadsheets\", \n            ]\n        });\n        const sheets = googleapis__WEBPACK_IMPORTED_MODULE_0__.google.sheets({\n            auth,\n            version: \"v4\"\n        });\n        const response = await sheets.spreadsheets.values.append({\n            spreadsheetId: process.env.GOOGLE_SHEET_ID,\n            range: \"A1:I1\",\n            valueInputOption: \"USER_ENTERED\",\n            requestBody: {\n                values: [\n                    [\n                        body.date,\n                        body.schedule,\n                        body.backline,\n                        body.artistName,\n                        body.name,\n                        body.lastName,\n                        body.email,\n                        body.phone,\n                        body.terms\n                    ]\n                ]\n            }\n        });\n        return res.status(201).json({\n            data: response.data\n        });\n    } catch (e) {\n        console.error(e);\n        return res.status(500).send({\n            message: \"Algo sali\\xf3 mal\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3VibWl0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNvQztBQWNyQixlQUFlQyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsNEJBQTRCO1NBQUUsQ0FBQyxDQUFDO0tBQ3hFO0lBRUQsTUFBTUMsSUFBSSxHQUFHTixHQUFHLENBQUNNLElBQUk7SUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixHQUFHLENBQUNNLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUk7UUFDRixNQUFNRyxJQUFJLEdBQUcsSUFBSVgsOERBQXNCLENBQUM7WUFDdENhLFdBQVcsRUFBRTtnQkFDWEMsWUFBWSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsbUJBQW1CO2dCQUM3Q0MsV0FBVyxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csa0JBQWtCLEVBQUVDLE9BQU8sU0FBUyxJQUFJLENBQUM7YUFDbkU7WUFDREMsTUFBTSxFQUFFO2dCQUNOLHVDQUF1QztnQkFDdkMsNENBQTRDO2dCQUM1Qyw4Q0FBOEM7YUFDL0M7U0FDRixDQUFDO1FBRUYsTUFBTUMsTUFBTSxHQUFHdEIscURBQWEsQ0FBQztZQUMzQlcsSUFBSTtZQUNKWSxPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUM7UUFFRixNQUFNQyxRQUFRLEdBQUcsTUFBTUYsTUFBTSxDQUFDRyxZQUFZLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDO1lBQ3ZEQyxhQUFhLEVBQUViLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYSxlQUFlO1lBQzFDQyxLQUFLLEVBQUUsT0FBTztZQUNkQyxnQkFBZ0IsRUFBRSxjQUFjO1lBQ2hDQyxXQUFXLEVBQUU7Z0JBQ1hOLE1BQU0sRUFBRTtvQkFBQzt3QkFBQ2xCLElBQUksQ0FBQ3lCLElBQUk7d0JBQUV6QixJQUFJLENBQUMwQixRQUFRO3dCQUFFMUIsSUFBSSxDQUFDMkIsUUFBUTt3QkFBRTNCLElBQUksQ0FBQzRCLFVBQVU7d0JBQUU1QixJQUFJLENBQUM2QixJQUFJO3dCQUFFN0IsSUFBSSxDQUFDOEIsUUFBUTt3QkFBRTlCLElBQUksQ0FBQytCLEtBQUs7d0JBQUUvQixJQUFJLENBQUNnQyxLQUFLO3dCQUFFaEMsSUFBSSxDQUFDaUMsS0FBSztxQkFBQztpQkFBQzthQUNuSTtTQUNGLENBQUM7UUFFRixPQUFPdEMsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNxQyxJQUFJLENBQUM7WUFDMUJDLElBQUksRUFBRW5CLFFBQVEsQ0FBQ21CLElBQUk7U0FDcEIsQ0FBQyxDQUFDO0tBRUosQ0FBQyxPQUFPQyxDQUFDLEVBQUU7UUFDVm5DLE9BQU8sQ0FBQ29DLEtBQUssQ0FBQ0QsQ0FBQyxDQUFDLENBQUM7UUFDakIsT0FBT3pDLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0MsT0FBTyxFQUFFLG1CQUFnQjtTQUFDLENBQUMsQ0FBQztLQUMxRDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXNoZWV0cy1mb3JtLy4vcGFnZXMvYXBpL3N1Ym1pdC50cz81MTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnb29nbGUgfSBmcm9tIFwiZ29vZ2xlYXBpc1wiO1xuXG50eXBlIFNoZWV0Rm9ybSA9IHtcbiAgZGF0ZTogc3RyaW5nO1xuICBzY2hlZHVsZTogc3RyaW5nO1xuICBiYWNrbGluZTogc3RyaW5nO1xuICBhcnRpc3ROYW1lOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgcGhvbmU6IHN0cmluZztcbiAgdGVybXM6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5zZW5kKHsgbWVzc2FnZTogXCJPbmx5IFBPU1QgcmVxdWVzdHMgYWxsb3dlZFwiIH0pO1xuICB9XG5cbiAgY29uc3QgYm9keSA9IHJlcS5ib2R5IGFzIFNoZWV0Rm9ybTtcbiAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xuICB0cnkge1xuICAgIGNvbnN0IGF1dGggPSBuZXcgZ29vZ2xlLmF1dGguR29vZ2xlQXV0aCh7XG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBjbGllbnRfZW1haWw6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfRU1BSUwsXG4gICAgICAgIHByaXZhdGVfa2V5OiBwcm9jZXNzLmVudi5HT09HTEVfUFJJVkFURV9LRVk/LnJlcGxhY2UoL1xcXFxuL2csIFwiXFxuXCIpLFxuICAgICAgfSxcbiAgICAgIHNjb3BlczogW1xuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZHJpdmVcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RyaXZlLmZpbGVcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0c1wiLFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNoZWV0cyA9IGdvb2dsZS5zaGVldHMoe1xuICAgICAgYXV0aCxcbiAgICAgIHZlcnNpb246IFwidjRcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuYXBwZW5kKHtcbiAgICAgIHNwcmVhZHNoZWV0SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TSEVFVF9JRCxcbiAgICAgIHJhbmdlOiBcIkExOkkxXCIsXG4gICAgICB2YWx1ZUlucHV0T3B0aW9uOiBcIlVTRVJfRU5URVJFRFwiLFxuICAgICAgcmVxdWVzdEJvZHk6IHtcbiAgICAgICAgdmFsdWVzOiBbW2JvZHkuZGF0ZSwgYm9keS5zY2hlZHVsZSwgYm9keS5iYWNrbGluZSwgYm9keS5hcnRpc3ROYW1lLCBib2R5Lm5hbWUsIGJvZHkubGFzdE5hbWUsIGJvZHkuZW1haWwsIGJvZHkucGhvbmUsIGJvZHkudGVybXNdXSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oe1xuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoe21lc3NhZ2U6ICdBbGdvIHNhbGnDsyBtYWwnfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnb29nbGUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImF1dGgiLCJHb29nbGVBdXRoIiwiY3JlZGVudGlhbHMiLCJjbGllbnRfZW1haWwiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9FTUFJTCIsInByaXZhdGVfa2V5IiwiR09PR0xFX1BSSVZBVEVfS0VZIiwicmVwbGFjZSIsInNjb3BlcyIsInNoZWV0cyIsInZlcnNpb24iLCJyZXNwb25zZSIsInNwcmVhZHNoZWV0cyIsInZhbHVlcyIsImFwcGVuZCIsInNwcmVhZHNoZWV0SWQiLCJHT09HTEVfU0hFRVRfSUQiLCJyYW5nZSIsInZhbHVlSW5wdXRPcHRpb24iLCJyZXF1ZXN0Qm9keSIsImRhdGUiLCJzY2hlZHVsZSIsImJhY2tsaW5lIiwiYXJ0aXN0TmFtZSIsIm5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmUiLCJ0ZXJtcyIsImpzb24iLCJkYXRhIiwiZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/submit.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/submit.ts"));
module.exports = __webpack_exports__;

})();