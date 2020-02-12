/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Course.ts":
/*!***********************!*\
  !*** ./src/Course.ts ***!
  \***********************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Course\", function() { return Course; });\nfunction Course(config) {\r\n    return function (target) {\r\n        Object.defineProperty(target.prototype, \"subject\", {\r\n            \"value\": function () { return config.name; }\r\n        });\r\n    };\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ291cnNlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db3Vyc2UudHM/ODk3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gQ291cnNlIChjb25maWc6YW55KSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0OmFueSl7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICB0YXJnZXQucHJvdG90eXBlLCBcInN1YmplY3RcIiwge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiIDogKCkgPT4gY29uZmlnLm5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Course.ts\n");

/***/ }),

/***/ "./src/Store.ts":
/*!**********************!*\
  !*** ./src/Store.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Students__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Students */ \"./src/Students.ts\");\n\r\nvar students = [\r\n    new _Students__WEBPACK_IMPORTED_MODULE_0__[\"Student\"](\"a\", 22),\r\n    new _Students__WEBPACK_IMPORTED_MODULE_0__[\"Student\"](\"b\", 30),\r\n    new _Students__WEBPACK_IMPORTED_MODULE_0__[\"Student\"](\"c\", 20)\r\n];\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3RvcmUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL1N0b3JlLnRzPzQ2MTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdHVkZW50fSBmcm9tICcuL1N0dWRlbnRzJ1xyXG5cclxubGV0IHN0dWRlbnRzOlN0dWRlbnRbXSA9IFtcclxuICAgIG5ldyBTdHVkZW50KFwiYVwiLDIyKSxcclxuICAgIG5ldyBTdHVkZW50KFwiYlwiLDMwKSxcclxuICAgIG5ldyBTdHVkZW50KFwiY1wiLDIwKVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R1ZGVudHM7XHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Store.ts\n");

/***/ }),

/***/ "./src/Students.ts":
/*!*************************!*\
  !*** ./src/Students.ts ***!
  \*************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Student\", function() { return Student; });\n/* harmony import */ var _Course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Course */ \"./src/Course.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\n\r\nvar Student = /** @class */ (function () {\r\n    function Student(name, age) {\r\n        this.name = name;\r\n        this.age = age;\r\n    }\r\n    Student.prototype.getName = function () {\r\n        return this.name;\r\n    };\r\n    Student.prototype.getAge = function () {\r\n        return this.age;\r\n    };\r\n    Student = __decorate([\r\n        Object(_Course__WEBPACK_IMPORTED_MODULE_0__[\"Course\"])({\r\n            name: \"Angular 9\"\r\n        })\r\n    ], Student);\r\n    return Student;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3R1ZGVudHMudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL1N0dWRlbnRzLnRzP2EzZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb3Vyc2V9IGZyb20gJy4vQ291cnNlJ1xyXG5AQ291cnNlKHtcclxuICAgIG5hbWUgOiBcIkFuZ3VsYXIgOVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHVkZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmFtZTogc3RyaW5nLCBwcml2YXRlIGFnZTogbnVtYmVyKSB7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWdlO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVZBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUFBO0FBWkE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Students.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ \"./src/Store.ts\");\n\r\n_Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(function (s) {\r\n    console.log(s.getName(), s.getAge(), s[\"subject\"]());\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LnRzP2M2YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0dWRlbnRzIGZyb20gJy4vU3RvcmUnXHJcblxyXG5zdHVkZW50cy5mb3JFYWNoKChzKT0+e1xyXG4gICAgY29uc29sZS5sb2cocy5nZXROYW1lKCkgLCBzLmdldEFnZSgpLCBzW1wic3ViamVjdFwiXSgpKTtcclxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ });