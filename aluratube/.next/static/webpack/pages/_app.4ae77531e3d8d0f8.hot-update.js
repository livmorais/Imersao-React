"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/RegisterVideo.js/index.js":
/*!**************************************************!*\
  !*** ./src/components/RegisterVideo.js/index.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/RegisterVideo.js/styles.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nfunction useForm(propsDoForm) {\n    _s();\n    const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(propsDoForm.initialValues);\n    return {\n        values,\n        handleChange: (evento)=>{\n            console.log(evento.target);\n            const value = evento.target.value;\n            const name = evento.target.name;\n            setValues({\n                ...values,\n                [name]: value\n            });\n        },\n        clearForm () {\n            setValues({});\n        }\n    };\n}\n_s(useForm, \"BIYExSth+WYKJ6/LYKi6Ip+Sfck=\");\nfunction RegisterVideo() {\n    _s1();\n    const formCadastro = useForm({\n        initialValues: {\n            titulo: \"Frost punk\",\n            url: \"https://youtube..\"\n        }\n    });\n    const [formVisivel, setFormVisivel] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.StyledRegisterVideo, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"add-video\",\n                onClick: ()=>setFormVisivel(true),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Imersao-React\\\\aluratube\\\\src\\\\components\\\\RegisterVideo.js\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            formVisivel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (evento)=>{\n                    evento.preventDefault();\n                    console.log(formCadastro.values);\n                    setFormVisivel(false);\n                    formCadastro.clearForm();\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"close-modal\",\n                            onClick: ()=>setFormVisivel(false),\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Imersao-React\\\\aluratube\\\\src\\\\components\\\\RegisterVideo.js\\\\index.js\",\n                            lineNumber: 46,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"T\\xedtulo do v\\xeddeo\",\n                            name: \"titulo\",\n                            value: formCadastro.values.titulo,\n                            onChange: formCadastro.handleChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Imersao-React\\\\aluratube\\\\src\\\\components\\\\RegisterVideo.js\\\\index.js\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"URL\",\n                            name: \"url\",\n                            value: formCadastro.values.url,\n                            onChange: formCadastro.handleChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Imersao-React\\\\aluratube\\\\src\\\\components\\\\RegisterVideo.js\\\\index.js\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Imersao-React\\\\aluratube\\\\src\\\\components\\\\RegisterVideo.js\\\\index.js\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Imersao-React\\\\aluratube\\\\src\\\\components\\\\RegisterVideo.js\\\\index.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Imersao-React\\\\aluratube\\\\src\\\\components\\\\RegisterVideo.js\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this) : false\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Imersao-React\\\\aluratube\\\\src\\\\components\\\\RegisterVideo.js\\\\index.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s1(RegisterVideo, \"D6rASRn6VaOT1KiQqEnUQ71Yqp8=\", false, function() {\n    return [\n        useForm\n    ];\n});\n_c = RegisterVideo;\nvar _c;\n$RefreshReg$(_c, \"RegisterVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvLmpzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNxQjtBQUUvQyxTQUFTRSxRQUFRQyxXQUFXLEVBQUU7O0lBQzFCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCxxREFBYyxDQUFDRyxZQUFZSSxhQUFhO0lBRXBFLE9BQU87UUFDSEg7UUFDQUksY0FBYyxDQUFDQyxTQUFXO1lBQ3RCQyxRQUFRQyxHQUFHLENBQUNGLE9BQU9HLE1BQU07WUFDekIsTUFBTUMsUUFBUUosT0FBT0csTUFBTSxDQUFDQyxLQUFLO1lBQ2pDLE1BQU1DLE9BQU9MLE9BQU9HLE1BQU0sQ0FBQ0UsSUFBSTtZQUMvQlQsVUFBVTtnQkFDTixHQUFHRCxNQUFNO2dCQUNULENBQUNVLEtBQUssRUFBRUQ7WUFDWjtRQUNKO1FBQ0FFLGFBQVk7WUFDUlYsVUFBVSxDQUFDO1FBQ2Y7SUFDSjtBQUNKO0dBbEJTSDtBQW9CTSxTQUFTYyxnQkFBZ0I7O0lBQ3BDLE1BQU1DLGVBQWVmLFFBQVE7UUFDekJLLGVBQWU7WUFBRVcsUUFBUTtZQUFjQyxLQUFLO1FBQW9CO0lBQ3BFO0lBQ0EsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdyQixxREFBYyxDQUFDLEtBQUs7SUFHMUQscUJBQ0ksOERBQUNDLHdEQUFtQkE7OzBCQUNoQiw4REFBQ3FCO2dCQUFPQyxXQUFVO2dCQUFZQyxTQUFTLElBQU1ILGVBQWUsSUFBSTswQkFBRzs7Ozs7O1lBR2xFRCw0QkFFRCw4REFBQ0s7Z0JBQUtDLFVBQVUsQ0FBQ2pCLFNBQVc7b0JBQ3hCQSxPQUFPa0IsY0FBYztvQkFDckJqQixRQUFRQyxHQUFHLENBQUNNLGFBQWFiLE1BQU07b0JBRS9CaUIsZUFBZSxLQUFLO29CQUNwQkosYUFBYUYsU0FBUztnQkFDMUI7MEJBQ0ksNEVBQUNhOztzQ0FDRCw4REFBQ047NEJBQU9DLFdBQVU7NEJBQWNDLFNBQVMsSUFBTUgsZUFBZSxLQUFLO3NDQUFHOzs7Ozs7c0NBR3RFLDhEQUFDUTs0QkFBTUMsYUFBWTs0QkFDbkJoQixNQUFLOzRCQUNMRCxPQUFPSSxhQUFhYixNQUFNLENBQUNjLE1BQU07NEJBQ2pDYSxVQUFVZCxhQUFhVCxZQUFZOzs7Ozs7c0NBRW5DLDhEQUFDcUI7NEJBQU1DLGFBQVk7NEJBQ25CaEIsTUFBSzs0QkFDTEQsT0FBT0ksYUFBYWIsTUFBTSxDQUFDZSxHQUFHOzRCQUM5QlksVUFBVWQsYUFBYVQsWUFBWTs7Ozs7O3NDQUVuQyw4REFBQ2M7NEJBQU9VLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBT3RCLEtBQUs7Ozs7Ozs7QUFHckIsQ0FBQztJQTdDdUJoQjs7UUFDQ2Q7OztLQUREYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvLmpzL2luZGV4LmpzP2UxNzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdHlsZWRSZWdpc3RlclZpZGVvIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5mdW5jdGlvbiB1c2VGb3JtKHByb3BzRG9Gb3JtKSB7XHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUocHJvcHNEb0Zvcm0uaW5pdGlhbFZhbHVlcyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgaGFuZGxlQ2hhbmdlOiAoZXZlbnRvKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50by50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50by50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBldmVudG8udGFyZ2V0Lm5hbWVcclxuICAgICAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJGb3JtKCkge1xyXG4gICAgICAgICAgICBzZXRWYWx1ZXMoe30pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyVmlkZW8oKSB7XHJcbiAgICBjb25zdCBmb3JtQ2FkYXN0cm8gPSB1c2VGb3JtKHtcclxuICAgICAgICBpbml0aWFsVmFsdWVzOiB7IHRpdHVsbzogXCJGcm9zdCBwdW5rXCIsIHVybDogXCJodHRwczovL3lvdXR1YmUuLlwiIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2Zvcm1WaXNpdmVsLCBzZXRGb3JtVmlzaXZlbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZFJlZ2lzdGVyVmlkZW8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLXZpZGVvXCIgb25DbGljaz17KCkgPT4gc2V0Rm9ybVZpc2l2ZWwodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge2Zvcm1WaXNpdmVsXHJcbiAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGV2ZW50bykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRvLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtQ2FkYXN0cm8udmFsdWVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRGb3JtVmlzaXZlbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtQ2FkYXN0cm8uY2xlYXJGb3JtKCk7XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIiBvbkNsaWNrPXsoKSA9PiBzZXRGb3JtVmlzaXZlbChmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVMOtdHVsbyBkbyB2w61kZW9cIiBcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXR1bG9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1DYWRhc3Ryby52YWx1ZXMudGl0dWxvfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1DYWRhc3Ryby5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlVSTFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXJsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtQ2FkYXN0cm8udmFsdWVzLnVybH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtQ2FkYXN0cm8uaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICBDYWRhc3RyYXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICApIDogZmFsc2V9XHJcbiAgICAgICAgPC9TdHlsZWRSZWdpc3RlclZpZGVvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiU3R5bGVkUmVnaXN0ZXJWaWRlbyIsInVzZUZvcm0iLCJwcm9wc0RvRm9ybSIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiaW5pdGlhbFZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImV2ZW50byIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJjbGVhckZvcm0iLCJSZWdpc3RlclZpZGVvIiwiZm9ybUNhZGFzdHJvIiwidGl0dWxvIiwidXJsIiwiZm9ybVZpc2l2ZWwiLCJzZXRGb3JtVmlzaXZlbCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJmb3JtIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/RegisterVideo.js/index.js\n"));

/***/ })

});