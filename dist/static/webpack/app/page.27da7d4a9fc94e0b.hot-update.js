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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Avatar_List_Space_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,List,Space!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/list/index.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_List_Space_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,List,Space!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/avatar/index.js\");\n\n\n\n\nconst data = Array.from({\n    length: 23\n}).map((_, i)=>({\n        href: \"https://ant.design\",\n        title: \"ant design part \".concat(i),\n        avatar: \"https://xsgames.co/randomusers/avatar.php?g=pixel&key=\".concat(i),\n        description: \"Ant Design, a design language for background applications, is refined by Ant UED Team.\",\n        content: \"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.\"\n    }));\n//   const IconText = ({ icon, text }) => (\n//     <Space>\n//       {React.createElement(icon)}\n//       {text}\n//     </Space>\n//   );\nconst TablePagination = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_Space_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        itemLayout: \"vertical\",\n        size: \"large\",\n        pagination: {\n            onChange: (page)=>{\n                console.log(page);\n            },\n            pageSize: 10\n        },\n        dataSource: data,\n        // footer={\n        //   <div>\n        //     <b>ant design</b> footer part\n        //   </div>\n        // }\n        renderItem: (item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_Space_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                // actions={[\n                //   <IconText icon={StarOutlined} text=\"156\" key=\"list-vertical-star-o\" />,\n                //   <IconText icon={LikeOutlined} text=\"156\" key=\"list-vertical-like-o\" />,\n                //   <IconText icon={MessageOutlined} text=\"2\" key=\"list-vertical-message\" />,\n                // ]}\n                extra: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    width: 272,\n                    alt: \"logo\",\n                    src: \"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, void 0),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_Space_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item.Meta, {\n                        avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_Space_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: item.avatar\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 19\n                        }, void 0),\n                        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: item.href,\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 18\n                        }, void 0),\n                        description: item.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, void 0),\n                    item.content\n                ]\n            }, item.title, true, {\n                fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, void 0)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TablePagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TablePagination);\nvar _c;\n$RefreshReg$(_c, \"TablePagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL21pY3JvQ29tcG9tZW50cy9UYWJsZVBhZ2luYXRpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0Y7QUFDdEQ7QUFDaUI7QUFDM0MsTUFBTU8sT0FBT0MsTUFBTUMsSUFBSSxDQUFDO0lBQ3BCQyxRQUFRO0FBQ1YsR0FBR0MsR0FBRyxDQUFDLENBQUNDLEdBQUdDLElBQU87UUFDaEJDLE1BQU07UUFDTkMsT0FBTyxtQkFBcUIsT0FBRkY7UUFDMUJHLFFBQVEseURBQTJELE9BQUZIO1FBQ2pFSSxhQUNFO1FBQ0ZDLFNBQ0U7SUFDSjtBQUNGLDJDQUEyQztBQUMzQyxjQUFjO0FBQ2Qsb0NBQW9DO0FBQ3BDLGVBQWU7QUFDZixlQUFlO0FBQ2YsT0FBTztBQUNQLE1BQU1DLGtCQUFrQjtJQUV0QixxQkFDRSw4REFBQ2QscUZBQUlBO1FBQ0xlLFlBQVc7UUFDWEMsTUFBSztRQUNMQyxZQUFZO1lBQ1ZDLFVBQVUsQ0FBQ0M7Z0JBQ1RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDZDtZQUNBRyxVQUFVO1FBQ1o7UUFDQUMsWUFBWXJCO1FBQ1osV0FBVztRQUNYLFVBQVU7UUFDVixvQ0FBb0M7UUFDcEMsV0FBVztRQUNYLElBQUk7UUFDSnNCLFlBQVksQ0FBQ0MscUJBQ1gsOERBQUN6QixxRkFBSUEsQ0FBQzBCLElBQUk7Z0JBRVIsYUFBYTtnQkFDYiw0RUFBNEU7Z0JBQzVFLDRFQUE0RTtnQkFDNUUsOEVBQThFO2dCQUM5RSxLQUFLO2dCQUNMQyxxQkFDRSw4REFBQ0M7b0JBQ0NDLE9BQU87b0JBQ1BDLEtBQUk7b0JBQ0pDLEtBQUk7Ozs7Ozs7a0NBSVIsOERBQUMvQixxRkFBSUEsQ0FBQzBCLElBQUksQ0FBQ00sSUFBSTt3QkFDYnJCLHNCQUFRLDhEQUFDWixxRkFBTUE7NEJBQUNnQyxLQUFLTixLQUFLZCxNQUFNOzs7Ozs7d0JBQ2hDRCxxQkFBTyw4REFBQ3VCOzRCQUFFeEIsTUFBTWdCLEtBQUtoQixJQUFJO3NDQUFHZ0IsS0FBS2YsS0FBSzs7Ozs7O3dCQUN0Q0UsYUFBYWEsS0FBS2IsV0FBVzs7Ozs7O29CQUU5QmEsS0FBS1osT0FBTzs7ZUFuQlJZLEtBQUtmLEtBQUs7Ozs7Ozs7Ozs7QUF3QnZCO0tBNUNNSTtBQThDTiwrREFBZUEsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9taWNyb0NvbXBvbWVudHMvVGFibGVQYWdpbmF0aW9uLmpzeD9iMWQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpa2VPdXRsaW5lZCwgTWVzc2FnZU91dGxpbmVkLCBTdGFyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEF2YXRhciwgTGlzdCwgU3BhY2UgfSBmcm9tICdhbnRkJztcclxuY29uc3QgZGF0YSA9IEFycmF5LmZyb20oe1xyXG4gICAgbGVuZ3RoOiAyMyxcclxuICB9KS5tYXAoKF8sIGkpID0+ICh7XHJcbiAgICBocmVmOiAnaHR0cHM6Ly9hbnQuZGVzaWduJyxcclxuICAgIHRpdGxlOiBgYW50IGRlc2lnbiBwYXJ0ICR7aX1gLFxyXG4gICAgYXZhdGFyOiBgaHR0cHM6Ly94c2dhbWVzLmNvL3JhbmRvbXVzZXJzL2F2YXRhci5waHA/Zz1waXhlbCZrZXk9JHtpfWAsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0FudCBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uJyxcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgICdXZSBzdXBwbHkgYSBzZXJpZXMgb2YgZGVzaWduIHByaW5jaXBsZXMsIHByYWN0aWNhbCBwYXR0ZXJucyBhbmQgaGlnaCBxdWFsaXR5IGRlc2lnbiByZXNvdXJjZXMgKFNrZXRjaCBhbmQgQXh1cmUpLCB0byBoZWxwIHBlb3BsZSBjcmVhdGUgdGhlaXIgcHJvZHVjdCBwcm90b3R5cGVzIGJlYXV0aWZ1bGx5IGFuZCBlZmZpY2llbnRseS4nLFxyXG4gIH0pKTtcclxuLy8gICBjb25zdCBJY29uVGV4dCA9ICh7IGljb24sIHRleHQgfSkgPT4gKFxyXG4vLyAgICAgPFNwYWNlPlxyXG4vLyAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChpY29uKX1cclxuLy8gICAgICAge3RleHR9XHJcbi8vICAgICA8L1NwYWNlPlxyXG4vLyAgICk7XHJcbmNvbnN0IFRhYmxlUGFnaW5hdGlvbiA9ICgpID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0XHJcbiAgICBpdGVtTGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgc2l6ZT1cImxhcmdlXCJcclxuICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgb25DaGFuZ2U6IChwYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFnZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2VTaXplOiAxMCxcclxuICAgIH19XHJcbiAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgLy8gZm9vdGVyPXtcclxuICAgIC8vICAgPGRpdj5cclxuICAgIC8vICAgICA8Yj5hbnQgZGVzaWduPC9iPiBmb290ZXIgcGFydFxyXG4gICAgLy8gICA8L2Rpdj5cclxuICAgIC8vIH1cclxuICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgLy8gYWN0aW9ucz17W1xyXG4gICAgICAgIC8vICAgPEljb25UZXh0IGljb249e1N0YXJPdXRsaW5lZH0gdGV4dD1cIjE1NlwiIGtleT1cImxpc3QtdmVydGljYWwtc3Rhci1vXCIgLz4sXHJcbiAgICAgICAgLy8gICA8SWNvblRleHQgaWNvbj17TGlrZU91dGxpbmVkfSB0ZXh0PVwiMTU2XCIga2V5PVwibGlzdC12ZXJ0aWNhbC1saWtlLW9cIiAvPixcclxuICAgICAgICAvLyAgIDxJY29uVGV4dCBpY29uPXtNZXNzYWdlT3V0bGluZWR9IHRleHQ9XCIyXCIga2V5PVwibGlzdC12ZXJ0aWNhbC1tZXNzYWdlXCIgLz4sXHJcbiAgICAgICAgLy8gXX1cclxuICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHdpZHRoPXsyNzJ9XHJcbiAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvbXFhUXN3Y3lETGNYeURLblpmRVMucG5nXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPXtpdGVtLmF2YXRhcn0gLz59XHJcbiAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICA8L0xpc3QuSXRlbT5cclxuICAgICl9XHJcbiAgLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlUGFnaW5hdGlvbiJdLCJuYW1lcyI6WyJMaWtlT3V0bGluZWQiLCJNZXNzYWdlT3V0bGluZWQiLCJTdGFyT3V0bGluZWQiLCJSZWFjdCIsIkF2YXRhciIsIkxpc3QiLCJTcGFjZSIsImRhdGEiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJfIiwiaSIsImhyZWYiLCJ0aXRsZSIsImF2YXRhciIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsIlRhYmxlUGFnaW5hdGlvbiIsIml0ZW1MYXlvdXQiLCJzaXplIiwicGFnaW5hdGlvbiIsIm9uQ2hhbmdlIiwicGFnZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlU2l6ZSIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaXRlbSIsIkl0ZW0iLCJleHRyYSIsImltZyIsIndpZHRoIiwiYWx0Iiwic3JjIiwiTWV0YSIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/microCompoments/TablePagination.jsx\n"));

/***/ })

});