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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Avatar_List_Space_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,List,Space!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/list/index.js\");\n\n\n\n\nconst data = Array.from({\n    length: 23\n}).map((_, i)=>({\n        href: \"https://ant.design\",\n        title: \"ant design part \".concat(i),\n        avatar: \"https://xsgames.co/randomusers/avatar.php?g=pixel&key=\".concat(i),\n        description: \"Ant Design, a design language for background applications, is refined by Ant UED Team.\",\n        content: \"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.\"\n    }));\n//   const IconText = ({ icon, text }) => (\n//     <Space>\n//       {React.createElement(icon)}\n//       {text}\n//     </Space>\n//   );\nconsole.log(data);\nconst TablePagination = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_Space_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        itemLayout: \"vertical\",\n        size: \"large\",\n        pagination: {\n            onChange: (page)=>{\n                console.log(page);\n            },\n            pageSize: 5\n        },\n        dataSource: data,\n        // footer={\n        //   <div>\n        //     <b>ant design</b> footer part\n        //   </div>\n        // }\n        renderItem: (item)=>{\n            console.log(item);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center h-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full md:w-1/3 bg-white grid place-items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\",\n                                alt: \"tailwind logo\",\n                                className: \"rounded-xl\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 7\n                            }, void 0)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 5\n                        }, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between item-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-500 font-medium hidden md:block\",\n                                            children: \"Vacations\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 9\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                    className: \"h-5 w-5 text-yellow-500\",\n                                                    viewBox: \"0 0 20 20\",\n                                                    fill: \"currentColor\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        d: \"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 13\n                                                    }, void 0)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 11\n                                                }, void 0),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-gray-600 font-bold text-sm ml-1\",\n                                                    children: [\n                                                        \"4.96\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-gray-500 font-normal\",\n                                                            children: \"(76 reviews)\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                                                            lineNumber: 58,\n                                                            columnNumber: 13\n                                                        }, void 0)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 11\n                                                }, void 0)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 9\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                className: \"h-5 w-5 text-pink-500\",\n                                                viewBox: \"0 0 20 20\",\n                                                fill: \"currentColor\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    fillRule: \"evenodd\",\n                                                    d: \"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z\",\n                                                    clipRule: \"evenodd\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 13\n                                                }, void 0)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 11\n                                            }, void 0)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 9\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block\",\n                                            children: \"Superhost\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 9\n                                        }, void 0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 7\n                                }, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-black text-gray-800 md:text-3xl text-xl\",\n                                    children: \"The Majestic and Wonderful Bahamas\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 7\n                                }, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-gray-500 text-base\",\n                                    children: \"The best kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 7\n                                }, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xl font-black text-gray-800\",\n                                    children: [\n                                        \"$110\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-normal text-gray-600 text-base\",\n                                            children: \"/night\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 9\n                                        }, void 0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 7\n                                }, void 0)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 5\n                        }, void 0)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 3\n                }, void 0)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n                lineNumber: 44,\n                columnNumber: 1\n            }, void 0);\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Hassan Khan\\\\Desktop\\\\Work 16 Dec 2023\\\\my-app\\\\app\\\\components\\\\microCompoments\\\\TablePagination.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TablePagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TablePagination);\nvar _c;\n$RefreshReg$(_c, \"TablePagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL21pY3JvQ29tcG9tZW50cy9UYWJsZVBhZ2luYXRpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnRjtBQUN0RDtBQUNpQjtBQUMzQyxNQUFNTyxPQUFPQyxNQUFNQyxJQUFJLENBQUM7SUFDcEJDLFFBQVE7QUFDVixHQUFHQyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTztRQUNoQkMsTUFBTTtRQUNOQyxPQUFPLG1CQUFxQixPQUFGRjtRQUMxQkcsUUFBUSx5REFBMkQsT0FBRkg7UUFDakVJLGFBQ0U7UUFDRkMsU0FDRTtJQUNKO0FBQ0YsMkNBQTJDO0FBQzNDLGNBQWM7QUFDZCxvQ0FBb0M7QUFDcEMsZUFBZTtBQUNmLGVBQWU7QUFDZixPQUFPO0FBQ1BDLFFBQVFDLEdBQUcsQ0FBQ2I7QUFDWixNQUFNYyxrQkFBa0I7SUFFdEIscUJBQ0UsOERBQUNoQixxRkFBSUE7UUFDTGlCLFlBQVc7UUFDWEMsTUFBSztRQUNMQyxZQUFZO1lBQ1ZDLFVBQVUsQ0FBQ0M7Z0JBQ1RQLFFBQVFDLEdBQUcsQ0FBQ007WUFDZDtZQUNBQyxVQUFVO1FBQ1o7UUFDQUMsWUFBWXJCO1FBQ1osV0FBVztRQUNYLFVBQVU7UUFDVixvQ0FBb0M7UUFDcEMsV0FBVztRQUNYLElBQUk7UUFDSnNCLFlBQVksQ0FBQ0M7WUFDVFgsUUFBUUMsR0FBRyxDQUFDVTtZQUNaLHFCQUVSLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0M7Z0NBQUlDLEtBQUk7Z0NBQTJHQyxLQUFJO2dDQUFnQkgsV0FBVTs7Ozs7Ozs7Ozs7c0NBRXBKLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0k7NENBQUVKLFdBQVU7c0RBQTRDOzs7Ozs7c0RBQ3pELDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNLO29EQUFJQyxPQUFNO29EQUE2Qk4sV0FBVTtvREFBMEJPLFNBQVE7b0RBQVlDLE1BQUs7OERBQ25HLDRFQUFDQzt3REFBS0MsR0FBRTs7Ozs7Ozs7Ozs7OERBRVYsOERBQUNOO29EQUFFSixXQUFVOzt3REFBdUM7c0VBRWxELDhEQUFDVzs0REFBS1gsV0FBVTtzRUFBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFHaEQsOERBQUNEOzRDQUFJQyxTQUFTO3NEQUNaLDRFQUFDSztnREFBSUMsT0FBTTtnREFBNkJOLFdBQVU7Z0RBQXdCTyxTQUFRO2dEQUFZQyxNQUFLOzBEQUNqRyw0RUFBQ0M7b0RBQUtHLFVBQVM7b0RBQVVGLEdBQUU7b0RBQWdIRyxVQUFTOzs7Ozs7Ozs7Ozs7Ozs7O3NEQUd4Siw4REFBQ2Q7NENBQUlDLFdBQVU7c0RBQXVGOzs7Ozs7Ozs7Ozs7OENBR3hHLDhEQUFDYztvQ0FBR2QsV0FBVTs4Q0FBK0M7Ozs7Ozs4Q0FDN0QsOERBQUNJO29DQUFFSixXQUFVOzhDQUFxQzs7Ozs7OzhDQUVsRCw4REFBQ0k7b0NBQUVKLFdBQVU7O3dDQUFtQztzREFFOUMsOERBQUNXOzRDQUFLWCxXQUFVO3NEQUFzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUE4QjFEOzs7Ozs7QUFHSjtLQXJGTVg7QUF1Rk4sK0RBQWVBLGVBQWVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvbWljcm9Db21wb21lbnRzL1RhYmxlUGFnaW5hdGlvbi5qc3g/YjFkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaWtlT3V0bGluZWQsIE1lc3NhZ2VPdXRsaW5lZCwgU3Rhck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIExpc3QsIFNwYWNlIH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IGRhdGEgPSBBcnJheS5mcm9tKHtcclxuICAgIGxlbmd0aDogMjMsXHJcbiAgfSkubWFwKChfLCBpKSA9PiAoe1xyXG4gICAgaHJlZjogJ2h0dHBzOi8vYW50LmRlc2lnbicsXHJcbiAgICB0aXRsZTogYGFudCBkZXNpZ24gcGFydCAke2l9YCxcclxuICAgIGF2YXRhcjogYGh0dHBzOi8veHNnYW1lcy5jby9yYW5kb211c2Vycy9hdmF0YXIucGhwP2c9cGl4ZWwma2V5PSR7aX1gLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLicsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICAnV2Ugc3VwcGx5IGEgc2VyaWVzIG9mIGRlc2lnbiBwcmluY2lwbGVzLCBwcmFjdGljYWwgcGF0dGVybnMgYW5kIGhpZ2ggcXVhbGl0eSBkZXNpZ24gcmVzb3VyY2VzIChTa2V0Y2ggYW5kIEF4dXJlKSwgdG8gaGVscCBwZW9wbGUgY3JlYXRlIHRoZWlyIHByb2R1Y3QgcHJvdG90eXBlcyBiZWF1dGlmdWxseSBhbmQgZWZmaWNpZW50bHkuJyxcclxuICB9KSk7XHJcbi8vICAgY29uc3QgSWNvblRleHQgPSAoeyBpY29uLCB0ZXh0IH0pID0+IChcclxuLy8gICAgIDxTcGFjZT5cclxuLy8gICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoaWNvbil9XHJcbi8vICAgICAgIHt0ZXh0fVxyXG4vLyAgICAgPC9TcGFjZT5cclxuLy8gICApO1xyXG5jb25zb2xlLmxvZyhkYXRhKVxyXG5jb25zdCBUYWJsZVBhZ2luYXRpb24gPSAoKSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdFxyXG4gICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgIG9uQ2hhbmdlOiAocGFnZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xyXG4gICAgICB9LFxyXG4gICAgICBwYWdlU2l6ZTogNSxcclxuICAgIH19XHJcbiAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgLy8gZm9vdGVyPXtcclxuICAgIC8vICAgPGRpdj5cclxuICAgIC8vICAgICA8Yj5hbnQgZGVzaWduPC9iPiBmb290ZXIgcGFydFxyXG4gICAgLy8gICA8L2Rpdj5cclxuICAgIC8vIH1cclxuICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgcmV0dXJuKFxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGgtc2NyZWVuXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtNSBzcGFjZS15LTMgbWQ6c3BhY2UteS0wIHJvdW5kZWQteGwgc2hhZG93LWxnIHAtMyBtYXgtdy14cyBtZDptYXgtdy0zeGwgbXgtYXV0byBib3JkZXIgYm9yZGVyLXdoaXRlIGJnLXdoaXRlXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMyBiZy13aGl0ZSBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzQzODEzOTIvcGV4ZWxzLXBob3RvLTQzODEzOTIuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIgYWx0PVwidGFpbHdpbmQgbG9nb1wiIGNsYXNzTmFtZT1cInJvdW5kZWQteGxcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTIvMyBiZy13aGl0ZSBmbGV4IGZsZXgtY29sIHNwYWNlLXktMiBwLTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtLWNlbnRlclwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgZm9udC1tZWRpdW0gaGlkZGVuIG1kOmJsb2NrXCI+VmFjYXRpb25zPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC15ZWxsb3ctNTAwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk05LjA0OSAyLjkyN2MuMy0uOTIxIDEuNjAzLS45MjEgMS45MDIgMGwxLjA3IDMuMjkyYTEgMSAwIDAwLjk1LjY5aDMuNDYyYy45NjkgMCAxLjM3MSAxLjI0LjU4OCAxLjgxbC0yLjggMi4wMzRhMSAxIDAgMDAtLjM2NCAxLjExOGwxLjA3IDMuMjkyYy4zLjkyMS0uNzU1IDEuNjg4LTEuNTQgMS4xMThsLTIuOC0yLjAzNGExIDEgMCAwMC0xLjE3NSAwbC0yLjggMi4wMzRjLS43ODQuNTctMS44MzgtLjE5Ny0xLjUzOS0xLjExOGwxLjA3LTMuMjkyYTEgMSAwIDAwLS4zNjQtMS4xMThMMi45OCA4LjcyYy0uNzgzLS41Ny0uMzgtMS44MS41ODgtMS44MWgzLjQ2MWExIDEgMCAwMC45NTEtLjY5bDEuMDctMy4yOTJ6XCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC1zbSBtbC0xXCI+XHJcbiAgICAgICAgICAgIDQuOTZcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBmb250LW5vcm1hbFwiPig3NiByZXZpZXdzKTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1waW5rLTUwMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMy4xNzIgNS4xNzJhNCA0IDAgMDE1LjY1NiAwTDEwIDYuMzQzbDEuMTcyLTEuMTcxYTQgNCAwIDExNS42NTYgNS42NTZMMTAgMTcuNjU3bC02LjgyOC02LjgyOWE0IDQgMCAwMTAtNS42NTZ6XCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcHgtMyBweS0xIHJvdW5kZWQtZnVsbCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDAgaGlkZGVuIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICBTdXBlcmhvc3Q8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJsYWNrIHRleHQtZ3JheS04MDAgbWQ6dGV4dC0zeGwgdGV4dC14bFwiPlRoZSBNYWplc3RpYyBhbmQgV29uZGVyZnVsIEJhaGFtYXM8L2gzPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJtZDp0ZXh0LWxnIHRleHQtZ3JheS01MDAgdGV4dC1iYXNlXCI+VGhlIGJlc3Qga2VwdCBzZWNyZXQgb2YgVGhlIEJhaGFtYXMgaXMgdGhlIGNvdW50cnnigJlzIHNoZWVyXHJcbiAgICAgICAgc2l6ZSBhbmQgZGl2ZXJzaXR5LiBXaXRoIDE2IG1ham9yIGlzbGFuZHMsIFRoZSBCYWhhbWFzIGlzIGFuIHVubWF0Y2hlZCBkZXN0aW5hdGlvbjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJsYWNrIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAkMTEwXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1ncmF5LTYwMCB0ZXh0LWJhc2VcIj4vbmlnaHQ8L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgIC8vICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgLy8gICAgIC8vIGFjdGlvbnM9e1tcclxuICAgICAgICAvLyAgICAgLy8gICA8SWNvblRleHQgaWNvbj17U3Rhck91dGxpbmVkfSB0ZXh0PVwiMTU2XCIga2V5PVwibGlzdC12ZXJ0aWNhbC1zdGFyLW9cIiAvPixcclxuICAgICAgICAvLyAgICAgLy8gICA8SWNvblRleHQgaWNvbj17TGlrZU91dGxpbmVkfSB0ZXh0PVwiMTU2XCIga2V5PVwibGlzdC12ZXJ0aWNhbC1saWtlLW9cIiAvPixcclxuICAgICAgICAvLyAgICAgLy8gICA8SWNvblRleHQgaWNvbj17TWVzc2FnZU91dGxpbmVkfSB0ZXh0PVwiMlwiIGtleT1cImxpc3QtdmVydGljYWwtbWVzc2FnZVwiIC8+LFxyXG4gICAgICAgIC8vICAgICAvLyBdfVxyXG4gICAgICAgIC8vICAgICBleHRyYT17XHJcbiAgICAgICAgLy8gICAgICAgPGltZ1xyXG4gICAgICAgIC8vICAgICAgICAgd2lkdGg9ezI3Mn1cclxuICAgICAgICAvLyAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgIC8vICAgICAgICAgc3JjPVwiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL21xYVFzd2N5RExjWHlES25aZkVTLnBuZ1wiXHJcbiAgICAgICAgLy8gICAgICAgLz5cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgPlxyXG4gICAgICAgIC8vICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAvLyAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPXtpdGVtLmF2YXRhcn0gLz59XHJcbiAgICAgICAgLy8gICAgICAgdGl0bGU9ezxhIGhyZWY9e2l0ZW0uaHJlZn0+e2l0ZW0udGl0bGV9PC9hPn1cclxuICAgICAgICAvLyAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAvLyAgICAgLz5cclxuICAgICAgICAvLyAgICAge2l0ZW0uY29udGVudH1cclxuICAgICAgICAvLyAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgIClcclxuICAgIH19XHJcbiAgLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlUGFnaW5hdGlvbiJdLCJuYW1lcyI6WyJMaWtlT3V0bGluZWQiLCJNZXNzYWdlT3V0bGluZWQiLCJTdGFyT3V0bGluZWQiLCJSZWFjdCIsIkF2YXRhciIsIkxpc3QiLCJTcGFjZSIsImRhdGEiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJfIiwiaSIsImhyZWYiLCJ0aXRsZSIsImF2YXRhciIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJUYWJsZVBhZ2luYXRpb24iLCJpdGVtTGF5b3V0Iiwic2l6ZSIsInBhZ2luYXRpb24iLCJvbkNoYW5nZSIsInBhZ2UiLCJwYWdlU2l6ZSIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsInAiLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwicGF0aCIsImQiLCJzcGFuIiwiZmlsbFJ1bGUiLCJjbGlwUnVsZSIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/microCompoments/TablePagination.jsx\n"));

/***/ })

});