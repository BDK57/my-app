"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/microCompoments/TablePagination.jsx":
/*!************************************************************!*\
  !*** ./app/components/microCompoments/TablePagination.jsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Avatar_List_Space_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,List,Space!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/list/index.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_List_Space_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,List,Space!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/avatar/index.js\");\n\n\n\n\nconst data = Array.from({\n    length: 23\n}).map((_, i)=>({\n        href: \"https://ant.design\",\n        title: \"ant design part \".concat(i),\n        avatar: \"https://xsgames.co/randomusers/avatar.php?g=pixel&key=\".concat(i),\n        description: \"Ant Design, a design language for background applications, is refined by Ant UED Team.\",\n        content: \"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.\"\n    }));\n//   const IconText = ({ icon, text }) => (\n//     <Space>\n//       {React.createElement(icon)}\n//       {text}\n//     </Space>\n//   );\nconst TablePagination = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_Space_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        itemLayout: \"vertical\",\n        size: \"large\",\n        pagination: {\n            onChange: (page)=>{\n                console.log(page);\n            },\n            pageSize: 5\n        },\n        dataSource: data,\n        footer: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: \"ant design\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, void 0),\n                \" footer part\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, void 0),\n        renderItem: (item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_Space_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                // actions={[\n                //   <IconText icon={StarOutlined} text=\"156\" key=\"list-vertical-star-o\" />,\n                //   <IconText icon={LikeOutlined} text=\"156\" key=\"list-vertical-like-o\" />,\n                //   <IconText icon={MessageOutlined} text=\"2\" key=\"list-vertical-message\" />,\n                // ]}\n                extra: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    width: 272,\n                    alt: \"logo\",\n                    src: \"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, void 0),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_Space_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item.Meta, {\n                        avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_Space_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: item.avatar\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 19\n                        }, void 0),\n                        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: item.href,\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 18\n                        }, void 0),\n                        description: item.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, void 0),\n                    item.content\n                ]\n            }, item.title, true, {\n                fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, void 0)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TablePagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TablePagination);\nvar _c;\n$RefreshReg$(_c, \"TablePagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL21pY3JvQ29tcG9tZW50cy9UYWJsZVBhZ2luYXRpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0Y7QUFDdEQ7QUFDaUI7QUFDM0MsTUFBTU8sT0FBT0MsTUFBTUMsSUFBSSxDQUFDO0lBQ3BCQyxRQUFRO0FBQ1YsR0FBR0MsR0FBRyxDQUFDLENBQUNDLEdBQUdDLElBQU87UUFDaEJDLE1BQU07UUFDTkMsT0FBTyxtQkFBcUIsT0FBRkY7UUFDMUJHLFFBQVEseURBQTJELE9BQUZIO1FBQ2pFSSxhQUNFO1FBQ0ZDLFNBQ0U7SUFDSjtBQUNGLDJDQUEyQztBQUMzQyxjQUFjO0FBQ2Qsb0NBQW9DO0FBQ3BDLGVBQWU7QUFDZixlQUFlO0FBQ2YsT0FBTztBQUNQLE1BQU1DLGtCQUFrQjtJQUV0QixxQkFDRSw4REFBQ2QscUZBQUlBO1FBQ0xlLFlBQVc7UUFDWEMsTUFBSztRQUNMQyxZQUFZO1lBQ1ZDLFVBQVUsQ0FBQ0M7Z0JBQ1RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDZDtZQUNBRyxVQUFVO1FBQ1o7UUFDQUMsWUFBWXJCO1FBQ1pzQixzQkFDRSw4REFBQ0M7OzhCQUNDLDhEQUFDQzs4QkFBRTs7Ozs7O2dCQUFjOzs7Ozs7O1FBR3JCQyxZQUFZLENBQUNDLHFCQUNYLDhEQUFDNUIscUZBQUlBLENBQUM2QixJQUFJO2dCQUVSLGFBQWE7Z0JBQ2IsNEVBQTRFO2dCQUM1RSw0RUFBNEU7Z0JBQzVFLDhFQUE4RTtnQkFDOUUsS0FBSztnQkFDTEMscUJBQ0UsOERBQUNDO29CQUNDQyxPQUFPO29CQUNQQyxLQUFJO29CQUNKQyxLQUFJOzs7Ozs7O2tDQUlSLDhEQUFDbEMscUZBQUlBLENBQUM2QixJQUFJLENBQUNNLElBQUk7d0JBQ2J4QixzQkFBUSw4REFBQ1oscUZBQU1BOzRCQUFDbUMsS0FBS04sS0FBS2pCLE1BQU07Ozs7Ozt3QkFDaENELHFCQUFPLDhEQUFDMEI7NEJBQUUzQixNQUFNbUIsS0FBS25CLElBQUk7c0NBQUdtQixLQUFLbEIsS0FBSzs7Ozs7O3dCQUN0Q0UsYUFBYWdCLEtBQUtoQixXQUFXOzs7Ozs7b0JBRTlCZ0IsS0FBS2YsT0FBTzs7ZUFuQlJlLEtBQUtsQixLQUFLOzs7Ozs7Ozs7O0FBd0J2QjtLQTVDTUk7QUE4Q04sK0RBQWVBLGVBQWVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvbWljcm9Db21wb21lbnRzL1RhYmxlUGFnaW5hdGlvbi5qc3g/YjFkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaWtlT3V0bGluZWQsIE1lc3NhZ2VPdXRsaW5lZCwgU3Rhck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIExpc3QsIFNwYWNlIH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IGRhdGEgPSBBcnJheS5mcm9tKHtcclxuICAgIGxlbmd0aDogMjMsXHJcbiAgfSkubWFwKChfLCBpKSA9PiAoe1xyXG4gICAgaHJlZjogJ2h0dHBzOi8vYW50LmRlc2lnbicsXHJcbiAgICB0aXRsZTogYGFudCBkZXNpZ24gcGFydCAke2l9YCxcclxuICAgIGF2YXRhcjogYGh0dHBzOi8veHNnYW1lcy5jby9yYW5kb211c2Vycy9hdmF0YXIucGhwP2c9cGl4ZWwma2V5PSR7aX1gLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLicsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICAnV2Ugc3VwcGx5IGEgc2VyaWVzIG9mIGRlc2lnbiBwcmluY2lwbGVzLCBwcmFjdGljYWwgcGF0dGVybnMgYW5kIGhpZ2ggcXVhbGl0eSBkZXNpZ24gcmVzb3VyY2VzIChTa2V0Y2ggYW5kIEF4dXJlKSwgdG8gaGVscCBwZW9wbGUgY3JlYXRlIHRoZWlyIHByb2R1Y3QgcHJvdG90eXBlcyBiZWF1dGlmdWxseSBhbmQgZWZmaWNpZW50bHkuJyxcclxuICB9KSk7XHJcbi8vICAgY29uc3QgSWNvblRleHQgPSAoeyBpY29uLCB0ZXh0IH0pID0+IChcclxuLy8gICAgIDxTcGFjZT5cclxuLy8gICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoaWNvbil9XHJcbi8vICAgICAgIHt0ZXh0fVxyXG4vLyAgICAgPC9TcGFjZT5cclxuLy8gICApO1xyXG5jb25zdCBUYWJsZVBhZ2luYXRpb24gPSAoKSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdFxyXG4gICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgIG9uQ2hhbmdlOiAocGFnZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xyXG4gICAgICB9LFxyXG4gICAgICBwYWdlU2l6ZTogNSxcclxuICAgIH19XHJcbiAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgZm9vdGVyPXtcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Yj5hbnQgZGVzaWduPC9iPiBmb290ZXIgcGFydFxyXG4gICAgICA8L2Rpdj5cclxuICAgIH1cclxuICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgLy8gYWN0aW9ucz17W1xyXG4gICAgICAgIC8vICAgPEljb25UZXh0IGljb249e1N0YXJPdXRsaW5lZH0gdGV4dD1cIjE1NlwiIGtleT1cImxpc3QtdmVydGljYWwtc3Rhci1vXCIgLz4sXHJcbiAgICAgICAgLy8gICA8SWNvblRleHQgaWNvbj17TGlrZU91dGxpbmVkfSB0ZXh0PVwiMTU2XCIga2V5PVwibGlzdC12ZXJ0aWNhbC1saWtlLW9cIiAvPixcclxuICAgICAgICAvLyAgIDxJY29uVGV4dCBpY29uPXtNZXNzYWdlT3V0bGluZWR9IHRleHQ9XCIyXCIga2V5PVwibGlzdC12ZXJ0aWNhbC1tZXNzYWdlXCIgLz4sXHJcbiAgICAgICAgLy8gXX1cclxuICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHdpZHRoPXsyNzJ9XHJcbiAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvbXFhUXN3Y3lETGNYeURLblpmRVMucG5nXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPXtpdGVtLmF2YXRhcn0gLz59XHJcbiAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICA8L0xpc3QuSXRlbT5cclxuICAgICl9XHJcbiAgLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlUGFnaW5hdGlvbiJdLCJuYW1lcyI6WyJMaWtlT3V0bGluZWQiLCJNZXNzYWdlT3V0bGluZWQiLCJTdGFyT3V0bGluZWQiLCJSZWFjdCIsIkF2YXRhciIsIkxpc3QiLCJTcGFjZSIsImRhdGEiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJfIiwiaSIsImhyZWYiLCJ0aXRsZSIsImF2YXRhciIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsIlRhYmxlUGFnaW5hdGlvbiIsIml0ZW1MYXlvdXQiLCJzaXplIiwicGFnaW5hdGlvbiIsIm9uQ2hhbmdlIiwicGFnZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlU2l6ZSIsImRhdGFTb3VyY2UiLCJmb290ZXIiLCJkaXYiLCJiIiwicmVuZGVySXRlbSIsIml0ZW0iLCJJdGVtIiwiZXh0cmEiLCJpbWciLCJ3aWR0aCIsImFsdCIsInNyYyIsIk1ldGEiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/microCompoments/TablePagination.jsx\n"));

/***/ })

});