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

/***/ "./src/components/CSSReset.js":
/*!************************************!*\
  !*** ./src/components/CSSReset.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CSSReset\": function() { return /* binding */ CSSReset; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  /* Reset */\\n  * {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n  }\\n  body {\\n    font-family: sans-serif;\\n    overflow-x: hidden;\\n    background-color: \",\n        \";\\n    color: \",\n        \";\\n  }\\n  body::-webkit-scrollbar-x {\\n  background-color: blue;    /* color of the scroll thumb */\\n  border-radius: 20px;       /* roundness of the scroll thumb */\\n  border: 3px solid orange;  /* creates padding around scroll thumb */\\n}\\n  /* NextJS */\\n  html {\\n    display: flex;\\n    flex-direction: column;\\n    min-height: 100%;\\n  }\\n  body {\\n    display: flex;\\n    flex: 1;\\n  }\\n  #__next {\\n    display: flex;\\n    flex: 1;\\n  }\\n  /* Globals */\\n  button,\\n  a {\\n    text-decoration: none;\\n    opacity: 1;\\n    transition: .3s;\\n    &:hover,\\n    &:focus {\\n      opacity: .5;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nconst CSSReset = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(_templateObject(), (param)=>{\n    let { theme  } = param;\n    return theme.backgroundBase;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.textColorBase;\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DU1NSZXNldC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBQXNEO0FBRS9DLE1BQU1DLFdBQVdELG9FQUFpQkEsb0JBVWpCLFNBQWVFO1FBQWQsRUFBRUEsTUFBSyxFQUFFO1dBQUtBLE1BQU1DLGNBQWM7QUFBRCxHQUM3QyxTQUFlRDtRQUFkLEVBQUVBLE1BQUssRUFBRTtXQUFLQSxNQUFNRSxhQUFhO0FBQUQsR0FnQzVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NTU1Jlc2V0LmpzPzAyYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDU1NSZXNldCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC8qIFJlc2V0ICovXHJcbiAgKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZEJhc2V9O1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dENvbG9yQmFzZX07XHJcbiAgfVxyXG4gIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICAgIC8qIGNvbG9yIG9mIHRoZSBzY3JvbGwgdGh1bWIgKi9cclxuICBib3JkZXItcmFkaXVzOiAyMHB4OyAgICAgICAvKiByb3VuZG5lc3Mgb2YgdGhlIHNjcm9sbCB0aHVtYiAqL1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTsgIC8qIGNyZWF0ZXMgcGFkZGluZyBhcm91bmQgc2Nyb2xsIHRodW1iICovXHJcbn1cclxuICAvKiBOZXh0SlMgKi9cclxuICBodG1sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgI19fbmV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgLyogR2xvYmFscyAqL1xyXG4gIGJ1dHRvbixcclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAmOmhvdmVyLFxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgfVxyXG4gIH1cclxuYDsiXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJDU1NSZXNldCIsInRoZW1lIiwiYmFja2dyb3VuZEJhc2UiLCJ0ZXh0Q29sb3JCYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CSSReset.js\n"));

/***/ })

});