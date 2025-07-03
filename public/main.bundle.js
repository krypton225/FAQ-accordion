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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("const Accordion = (function () {\r\n    class Main {\r\n        static generate() {\r\n            const parentAccordion = document.querySelector(\"#faq-accordion\");\r\n\r\n            parentAccordion.addEventListener(\"click\", (event) => {\r\n                let target = event.target;\r\n                // Traverse up the DOM tree until a parent with data-accordion attribute is found\r\n                while (target && !target.dataset.accordion) {\r\n                    target = target.parentElement;\r\n                }\r\n\r\n                if (target && target.dataset.accordion) {\r\n                    target.nextElementSibling.classList.toggle(\"show\");\r\n\r\n                    if(target.nextElementSibling.classList.contains(\"show\")) {\r\n                        target.parentElement.querySelector(\".faq-item__top .plus\").style.display = \"none\";\r\n                        target.parentElement.querySelector(\".faq-item__top .minus\").style.display = \"block\";\r\n                    } else {\r\n                        target.parentElement.querySelector(\".faq-item__top .plus\").style.display = \"block\";\r\n                        target.parentElement.querySelector(\".faq-item__top .minus\").style.display = \"none\";\r\n                    }\r\n                }\r\n            });\r\n        }\r\n    }\r\n\r\n    return {\r\n        init: Main.generate,\r\n    };\r\n})();\r\n\r\nAccordion.init();\r\n\n\n//# sourceURL=webpack://faq-accordion/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;