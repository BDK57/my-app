"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/inner-page/page",{

/***/ "(app-pages-browser)/./app/inner-page/page.jsx":
/*!*********************************!*\
  !*** ./app/inner-page/page.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Tabs_theme_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Tabs,theme!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/theme/index.js\");\n/* harmony import */ var _barrel_optimize_names_Tabs_theme_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Tabs,theme!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/tabs/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// import StickyBox from 'react-sticky-box';    \nconst items = new Array(3).fill(null).map((_, i)=>{\n    const id = String(i + 1);\n    return {\n        label: \"Tab \".concat(id),\n        key: id,\n        children: \"Content of Tab Pane \".concat(id),\n        style: i === 0 ? {\n            height: 200\n        } : undefined\n    };\n});\nconst page = ()=>{\n    _s();\n    const { token: { colorBgContainer } } = _barrel_optimize_names_Tabs_theme_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"].useToken();\n    const renderTabBar = (props, DefaultTabBar)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DefaultTabBar, {\n            ...props,\n            style: {\n                background: colorBgContainer\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\inner-page\\\\page.jsx\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Tabs_theme_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            defaultActiveKey: \"1\",\n            renderTabBar: renderTabBar,\n            items: items\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\inner-page\\\\page.jsx\",\n            lineNumber: 34,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_s(page, \"XbTvCdTyQ3tO9EyThur42mxJgmk=\", false, function() {\n    return [\n        _barrel_optimize_names_Tabs_theme_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"].useToken\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9pbm5lci1wYWdlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3lCO0FBQ1U7QUFDbkMsZ0RBQWdEO0FBQ2hELE1BQU1HLFFBQVEsSUFBSUMsTUFBTSxHQUFHQyxJQUFJLENBQUMsTUFBTUMsR0FBRyxDQUFDLENBQUNDLEdBQUdDO0lBQzVDLE1BQU1DLEtBQUtDLE9BQU9GLElBQUk7SUFDdEIsT0FBTztRQUNMRyxPQUFPLE9BQVUsT0FBSEY7UUFDZEcsS0FBS0g7UUFDTEksVUFBVSx1QkFBMEIsT0FBSEo7UUFDakNLLE9BQ0VOLE1BQU0sSUFDRjtZQUNFTyxRQUFRO1FBQ1YsSUFDQUM7SUFDUjtBQUNGO0FBQ0EsTUFBTUMsT0FBTzs7SUFFVCxNQUFNLEVBQ0ZDLE9BQU8sRUFBRUMsZ0JBQWdCLEVBQUUsRUFDNUIsR0FBR2pCLDhFQUFLQSxDQUFDa0IsUUFBUTtJQUNsQixNQUFNQyxlQUFlLENBQUNDLE9BQU9DLDhCQUMzQiw4REFBQ0E7WUFDQSxHQUFHRCxLQUFLO1lBQ1RSLE9BQU87Z0JBQ0xVLFlBQVlMO1lBQ2Q7Ozs7OztJQUdOLHFCQUNDO2tCQUNBLDRFQUFDbEIsOEVBQUlBO1lBQUN3QixrQkFBaUI7WUFBSUosY0FBY0E7WUFBY2xCLE9BQU9BOzs7Ozs7O0FBR2pFO0dBbEJNYzs7UUFJSWYsOEVBQUtBLENBQUNrQjs7O0FBZ0JoQiwrREFBZUgsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvaW5uZXItcGFnZS9wYWdlLmpzeD81YjBlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRhYnMsIHRoZW1lIH0gZnJvbSAnYW50ZCc7XHJcbi8vIGltcG9ydCBTdGlja3lCb3ggZnJvbSAncmVhY3Qtc3RpY2t5LWJveCc7ICAgIFxyXG5jb25zdCBpdGVtcyA9IG5ldyBBcnJheSgzKS5maWxsKG51bGwpLm1hcCgoXywgaSkgPT4ge1xyXG4gIGNvbnN0IGlkID0gU3RyaW5nKGkgKyAxKTtcclxuICByZXR1cm4ge1xyXG4gICAgbGFiZWw6IGBUYWIgJHtpZH1gLFxyXG4gICAga2V5OiBpZCxcclxuICAgIGNoaWxkcmVuOiBgQ29udGVudCBvZiBUYWIgUGFuZSAke2lkfWAsXHJcbiAgICBzdHlsZTpcclxuICAgICAgaSA9PT0gMFxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgICAgIH1cclxuICAgICAgICA6IHVuZGVmaW5lZCxcclxuICB9O1xyXG59KTtcclxuY29uc3QgcGFnZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdG9rZW46IHsgY29sb3JCZ0NvbnRhaW5lciB9LFxyXG4gICAgICB9ID0gdGhlbWUudXNlVG9rZW4oKTtcclxuICAgICAgY29uc3QgcmVuZGVyVGFiQmFyID0gKHByb3BzLCBEZWZhdWx0VGFiQmFyKSA9PiAoXHJcbiAgICAgICAgPERlZmF1bHRUYWJCYXJcclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9yQmdDb250YWluZXIsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgKTtcclxuICByZXR1cm4gKFxyXG4gICA8PlxyXG4gICA8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiIHJlbmRlclRhYkJhcj17cmVuZGVyVGFiQmFyfSBpdGVtcz17aXRlbXN9IC8+XHJcbiAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZSJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhYnMiLCJ0aGVtZSIsIml0ZW1zIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsIlN0cmluZyIsImxhYmVsIiwia2V5IiwiY2hpbGRyZW4iLCJzdHlsZSIsImhlaWdodCIsInVuZGVmaW5lZCIsInBhZ2UiLCJ0b2tlbiIsImNvbG9yQmdDb250YWluZXIiLCJ1c2VUb2tlbiIsInJlbmRlclRhYkJhciIsInByb3BzIiwiRGVmYXVsdFRhYkJhciIsImJhY2tncm91bmQiLCJkZWZhdWx0QWN0aXZlS2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/inner-page/page.jsx\n"));

/***/ })

});