/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./crm/frontend/src/components/App.js":
/*!********************************************!*\
  !*** ./crm/frontend/src/components/App.js ***!
  \********************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/saliksalman/projects/crm/crm/frontend/src/components/App.js: Identifier 'React' has already been declared. (2:7)\\n\\n\\u001b[0m \\u001b[90m 1 |\\u001b[39m \\u001b[36mimport\\u001b[39m \\u001b[33mReact\\u001b[39m\\u001b[33m,\\u001b[39m{ \\u001b[33mComponent\\u001b[39m } \\u001b[36mfrom\\u001b[39m \\u001b[32m\\\"react\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 2 |\\u001b[39m \\u001b[36mimport\\u001b[39m \\u001b[33mReact\\u001b[39m \\u001b[36mfrom\\u001b[39m \\u001b[32m\\\"react-dom\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   |\\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 3 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 |\\u001b[39m \\u001b[36mclass\\u001b[39m \\u001b[33mApp\\u001b[39m \\u001b[36mextends\\u001b[39m \\u001b[33mReact\\u001b[39m\\u001b[33m.\\u001b[39m\\u001b[33mComponent\\u001b[39m{\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 |\\u001b[39m render(){\\u001b[0m\\n    at Object._raise (/home/saliksalman/projects/crm/node_modules/@babel/parser/lib/index.js:541:17)\\n    at Object.raiseWithData (/home/saliksalman/projects/crm/node_modules/@babel/parser/lib/index.js:534:17)\\n    at Object.raise (/home/saliksalman/projects/crm/node_modules/@babel/parser/lib/index.js:495:17)\\n    at ScopeHandler.checkRedeclarationInScope (/home/saliksalman/projects/crm/node_modules/@babel/parser/lib/index.js:1686:12)\\n    at ScopeHandler.declareName (/home/saliksalman/projects/crm/node_modules/@babel/parser/lib/index.js:1652:12)\\n    at Object.checkLVal (/home/saliksalman/projects/crm/node_modules/@babel/parser/lib/index.js:10919:24)\\n    at Object.parseImportSpecifierLocal (/home/saliksalman/projects/crm/node_modules/@babel/parser/lib/index.js:14613:10)\\n    at Object.maybeParseDefaultImportSpecifier (/home/saliksalman/projects/crm/node_modules/@babel/parser/lib/index.js:14711:12)\\n    at Object.parseImport (/home/saliksalman/projects/crm/node_modules/@babel/parser/lib/index.js:14578:31)\\n    at Object.parseStatementContent (/home/saliksalman/projects/crm/node_modules/@babel/parser/lib/index.js:13241:27)\");\n\n//# sourceURL=webpack://crm/./crm/frontend/src/components/App.js?");

/***/ }),

/***/ "./crm/frontend/src/index.js":
/*!***********************************!*\
  !*** ./crm/frontend/src/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./crm/frontend/src/components/App.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_App__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://crm/./crm/frontend/src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./crm/frontend/src/index.js");
/******/ 	
/******/ })()
;