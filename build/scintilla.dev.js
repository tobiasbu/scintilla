(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Scintilla"] = factory();
	else
		root["Scintilla"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Scintilla.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/babel-runtime/core-js/object/create.js":
/*!**************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "../node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/object/define-property.js":
/*!***********************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "../node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/object/freeze.js":
/*!**************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/freeze.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/freeze */ "../node_modules/core-js/library/fn/object/freeze.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "../node_modules/core-js/library/fn/object/get-own-property-descriptor.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/object/get-own-property-names.js":
/*!******************************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/get-own-property-names.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-names */ "../node_modules/core-js/library/fn/object/get-own-property-names.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!************************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "../node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/object/keys.js":
/*!************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "../node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/object/seal.js":
/*!************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/seal.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/seal */ "../node_modules/core-js/library/fn/object/seal.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!************************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "../node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/symbol.js":
/*!*******************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/symbol.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "../node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!****************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "../node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "../node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "../node_modules/core-js/library/fn/object/create.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/create.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "../node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/define-property.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "../node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/freeze.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.freeze */ "../node_modules/core-js/library/modules/es6.object.freeze.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object.freeze;


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/get-own-property-names.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-names */ "../node_modules/core-js/library/modules/es6.object.get-own-property-names.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "../node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/keys.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "../node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/seal.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/seal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.seal */ "../node_modules/core-js/library/modules/es6.object.seal.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object.seal;


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "../node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "../node_modules/core-js/library/fn/symbol/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/fn/symbol/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "../node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "../node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "../node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "../node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "../node_modules/core-js/library/fn/symbol/iterator.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/fn/symbol/iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "../node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "../node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "../node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "../node_modules/core-js/library/modules/_a-function.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_a-function.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "../node_modules/core-js/library/modules/_an-object.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_an-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_array-includes.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_array-includes.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_cof.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_cof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_core.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_core.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.4' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/core-js/library/modules/_ctx.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_ctx.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_defined.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_defined.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_descriptors.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_descriptors.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/_dom-create.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_dom-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "../node_modules/core-js/library/modules/_enum-keys.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_enum-keys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_export.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_export.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_fails.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_fails.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_global.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_global.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/core-js/library/modules/_has.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_has.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_hide.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_hide.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_html.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_html.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iobject.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iobject.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_is-array.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_is-object.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_is-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iter-create.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "../node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "../node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iter-define.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-define.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "../node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iter-step.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-step.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iterators.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iterators.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_library.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_library.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_meta.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_meta.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "../node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-create.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-create.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "../node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "../node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "../node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-dp.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-dp.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-dps.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-dps.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-gopd.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gopd.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "../node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-gopn.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gopn.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-gops.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gops.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-gpo.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gpo.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-keys-internal.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "../node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-keys.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-keys.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-pie.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-pie.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-sap.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-sap.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_property-desc.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_property-desc.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_redefine.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_redefine.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "../node_modules/core-js/library/modules/_set-proto.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_set-proto.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_shared-key.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_shared-key.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "../node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_shared.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_shared.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_string-at.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_string-at.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-absolute-index.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-integer.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-integer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-iobject.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-iobject.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "../node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-length.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-length.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-object.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-primitive.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-primitive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_uid.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_uid.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_wks-define.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_wks-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "../node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "../node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_wks-ext.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_wks-ext.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "../node_modules/core-js/library/modules/_wks.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_wks.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "../node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.array.iterator.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "../node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "../node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "../node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.create.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.create.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "../node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.define-property.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.freeze.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.freeze.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "../node_modules/core-js/library/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/library/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.get-own-property-names.js":
/*!************************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.get-own-property-names.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return __webpack_require__(/*! ./_object-gopn-ext */ "../node_modules/core-js/library/modules/_object-gopn-ext.js").f;
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!******************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.keys.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.keys.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.seal.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.seal.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "../node_modules/core-js/library/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/library/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!******************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "../node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.to-string.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.string.iterator.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "../node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "../node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.symbol.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "../node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "../node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "../node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "../node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "../node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "../node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "../node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "../node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "../node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "../node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "../node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "../node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "../node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "../node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "../node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "../node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "../node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "../node_modules/core-js/library/modules/web.dom.iterable.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "../node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./Define.js":
/*!*******************!*\
  !*** ./Define.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var Version = {

    MAJOR: 0,
    MINOR: 0,
    REVISION: 1,
    VERSION: '0.0.1'

};

exports.default = Version;

/***/ }),

/***/ "./Scintilla.js":
/*!**********************!*\
  !*** ./Scintilla.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _Define = __webpack_require__(/*! ./Define */ "./Define.js");

var _Define2 = _interopRequireDefault(_Define);

var _Extend = __webpack_require__(/*! ./utils/object/Extend */ "./utils/object/Extend.js");

var _Extend2 = _interopRequireDefault(_Extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @namespace scintilla
*/
/**
* @author       Tobias Beise Ulrich
* @license      MIT
*
* @overview
*
* --- Scintilla ---
*
* v0.0.1
*
* tobiasbu.github.io
*
* Scintilla is simple 2D game engine for HTML5 games.
* The first version is only for browsers based in canvas.
*
*/

var scintilla = scintilla || {

  Environment: __webpack_require__(/*! ./system/PlatformEnvironment */ "./system/PlatformEnvironment.js").default,
  Core: __webpack_require__(/*! ./core */ "./core/index.js"),

  // DATA STRUCTURES
  Structure: __webpack_require__(/*! ./structures */ "./structures/index.js"),

  // RENDER
  Render: __webpack_require__(/*! ./render */ "./render/index.js"),
  Color: __webpack_require__(/*! ./render/color/Color */ "./render/color/Color.js"),
  Transition: __webpack_require__(/*! ./render/transition */ "./render/transition/index.js"),

  // INPUT
  KeyCode: __webpack_require__(/*! ./input/keyboard/KeyCode */ "./input/keyboard/KeyCode.js").default,
  MouseButton: __webpack_require__(/*! ./input/mouse/MouseButton */ "./input/mouse/MouseButton.js").default,
  Input: __webpack_require__(/*! ./input */ "./input/index.js"),

  // MATH
  Math: __webpack_require__(/*! ./math/MathUtils */ "./math/MathUtils.js").default,
  Random: __webpack_require__(/*! ./math/random/RandomGenerator */ "./math/random/RandomGenerator.js").default,
  BoundingBox: __webpack_require__(/*! ./math/BoundingBox */ "./math/BoundingBox.js").default,
  Matrix3: __webpack_require__(/*! ./math/Matrix3 */ "./math/Matrix3.js").default,
  Vector2: __webpack_require__(/*! ./math/Vector2 */ "./math/Vector2.js").default,
  Ease: __webpack_require__(/*! ./math/easing */ "./math/easing/index.js").Ease,

  // ENTITIES
  Scene: __webpack_require__(/*! ./scene/ */ "./scene/index.js"),
  Camera: __webpack_require__(/*! ./camera/Camera */ "./camera/Camera.js"),
  Module: __webpack_require__(/*! ./modules */ "./modules/index.js"),
  Entity: __webpack_require__(/*! ./entities */ "./entities/index.js"),
  Pool: __webpack_require__(/*! ./entities/pool */ "./entities/pool/index.js"),

  // EVENTS
  Event: __webpack_require__(/*! ./event */ "./event/index.js"),

  // AUDIO
  Audio: __webpack_require__(/*! ./audio */ "./audio/index.js"),

  // CACHE AND LOADER
  Resource: __webpack_require__(/*! ./resources */ "./resources/index.js"),
  Cache: __webpack_require__(/*! ./cache/CacheManager */ "./cache/CacheManager.js"),
  AssetType: __webpack_require__(/*! ./loader/AssetsType */ "./loader/AssetsType.js"),
  Loader: __webpack_require__(/*! ./loader */ "./loader/index.js"),
  Game: __webpack_require__(/*! ./core/Game */ "./core/Game.js"),

  // UTILITIES
  Path: __webpack_require__(/*! ./utils/Path */ "./utils/Path.js"),
  WrapMode: __webpack_require__(/*! ./resources/animation/WrapMode */ "./resources/animation/WrapMode.js").default
};

(0, _Extend2.default)(_Define2.default, scintilla);

module.exports = scintilla;

global.scintilla = scintilla;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./audio/index.js":
/*!************************!*\
  !*** ./audio/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Manager: __webpack_require__(/*! ./manager/AudioManager */ "./audio/manager/AudioManager.js"),
    AudioSource: __webpack_require__(/*! ./sound/AudioSource */ "./audio/sound/AudioSource.js")
};

/***/ }),

/***/ "./audio/manager/AudioManager.js":
/*!***************************************!*\
  !*** ./audio/manager/AudioManager.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _List = __webpack_require__(/*! ../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AudioManager = function () {
    function AudioManager(game) {
        (0, _classCallCheck3.default)(this, AudioManager);


        this.game = game;

        this._soundCache = game.system.cache.audio;
        this._noAudio = game.config.audio.noAudio;
        this._sounds = null;

        //if (!this._noAudio) 
        this._sounds = new _List2.default();
        this._removalList = [];
        this._system = null;
        this.add = null;

        this.volume = 1;
        this.mute = false;
        this.muteOnBlur = true;

        if (this._noAudio === false) {
            this.game.system.events.subscribe('blur', function () {

                if (this.muteOnBlur === false) return;

                this._system.onBlur();
            }, this, 0);

            this.game.system.events.subscribe('focus', function () {

                if (this.muteOnBlur === false) return;

                this._system.onFocus();
            }, this, 0);
        }
    }

    /*decode(tag, sound) {
          sound = sound || null;
          var soundData = this.game.cache.getAssetInfo('sounds', tag);
          if (soundData) {
              if (!soundData.decoded) {
                soundData.isDecoding = true;
                  var self = this;
                  try {
                      this.context.decodeAudioData(soundData.data, function (buffer) {
                          if (buffer) {
                            self.game.cache.soundDecoded(tag, buffer);
                            console.log("decoded!")
                            //_this.onSoundDecode.dispatch(key, sound);
                        }
                      })
                  } catch (error) {
                  }
            }
        }
      }*/

    /*add(tag, volume, loop, connect) {
          if (volume === undefined) {
            volume = 1;
        }
        if (loop === undefined) {
            loop = false;
        }
        if (connect === undefined) {
            connect = true;
        } // connect to master volume
          var sound = new scintilla.Sound(this.game, tag, volume, loop, connect);
          _sounds.push(sound);
          return sound;
      }*/

    (0, _createClass3.default)(AudioManager, [{
        key: 'at',
        value: function at(index) {
            if (this._noAudio) return null;

            return this._sounds.at(index);
        }

        /*get(sourceName) {
          }*/

    }, {
        key: 'play',
        value: function play(tag, volume, loop, name) {

            if (this._noAudio) {
                return null;
            }

            var sound = this.add(tag, volume, loop, name);

            if (sound !== undefined && sound !== null) {
                sound.play();
                return sound;
            }

            return null;
        }
    }, {
        key: 'playPersistent',
        value: function playPersistent(tag, volume, loop, name) {

            var sound = this.play(tag, volume, loop, name);

            if (sound !== null) sound.persistent = true;

            return sound;
        }
    }, {
        key: 'playOnce',
        value: function playOnce(tag, volume, loop, name) {
            var sound = this.play(tag, volume, loop, name);

            if (sound !== null) sound.once = true;

            return sound;
        }
    }, {
        key: 'get',
        value: function get(name) {

            return this._sounds.each(function (source) {

                if (source.name === name) {
                    return source;
                }
            }) || null;
        }
    }, {
        key: 'remove',
        value: function remove(sound) {

            if (this._noAudio) return false;

            var i = _sounds.length;

            while (i--) {
                if (_sounds[i] === sound) {
                    _sounds[i].destroy(false);
                    _sounds.splice(i, 1);
                    return true;
                }
            }

            return false;
        }
    }, {
        key: 'stopAll',
        value: function stopAll(destroy) {

            if (this._noAudio) {
                return;
            }

            if (destroy === undefined) destroy = false;

            for (var i = 0; i < this._sounds.length; i++) {

                var source = this._sounds.at(i);

                if (source) {
                    source.stop();
                    if (destroy === true) {
                        source.destroy();
                    }
                }
            }
        }
    }, {
        key: 'pauseAll',
        value: function pauseAll() {

            if (this._noAudio) {
                return;
            }

            for (var i = 0; i < _sounds.length; i++) {
                if (_sounds[i]) {
                    _sounds[i].pause();
                }
            }
        }
    }, {
        key: 'resumeAll',
        value: function resumeAll() {

            if (this._noAudio) {
                return;
            }

            for (var i = 0; i < _sounds.length; i++) {
                if (_sounds[i]) {
                    _sounds[i].resume();
                }
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {

            if (this._system === null) return;

            this._system.destroy();

            this.stopAll();

            for (var i = 0; i < this._sounds.length; i++) {

                var sound = this._sounds.at(i);

                if (sound) {
                    sound.destroy();
                }
            }

            this._sounds.clear();
        }
    }]);
    return AudioManager;
}();

exports.default = AudioManager;

/***/ }),

/***/ "./audio/manager/components/AudioSystemType.js":
/*!*****************************************************!*\
  !*** ./audio/manager/components/AudioSystemType.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AudioSystemType = {
    NOAUDIO: 0,
    WEBAUDIO: 1
};

(0, _freeze2.default)(AudioSystemType);

exports.default = AudioSystemType;

/***/ }),

/***/ "./audio/manager/components/ClearAudioSources.js":
/*!*******************************************************!*\
  !*** ./audio/manager/components/ClearAudioSources.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ClearAudioSources;
function ClearAudioSources() {

    if (this._noAudio === true) return;

    for (var i = 0; i < this._sounds.length; i++) {

        var source = this._sounds.at(i);

        if (source.persistent === false || source.persistent === undefined || source._pendingRemoval === true) {
            source.stop();
            source.destroy();
            this._sounds.splice(i, 1);
        }
    }

    this._removalList.length = 0;
}

/***/ }),

/***/ "./audio/manager/components/InitializeAudioSystemManager.js":
/*!******************************************************************!*\
  !*** ./audio/manager/components/InitializeAudioSystemManager.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InitializeAudioSystemManager;

var _PlatformEnvironment = __webpack_require__(/*! ../../../system/PlatformEnvironment */ "./system/PlatformEnvironment.js");

var _PlatformEnvironment2 = _interopRequireDefault(_PlatformEnvironment);

var _AudioManager = __webpack_require__(/*! ../AudioManager */ "./audio/manager/AudioManager.js");

var _AudioManager2 = _interopRequireDefault(_AudioManager);

var _AddWebAudioSource = __webpack_require__(/*! ./webaudio/AddWebAudioSource */ "./audio/manager/components/webaudio/AddWebAudioSource.js");

var _AddWebAudioSource2 = _interopRequireDefault(_AddWebAudioSource);

var _CreateWebAudioContext = __webpack_require__(/*! ./webaudio/CreateWebAudioContext */ "./audio/manager/components/webaudio/CreateWebAudioContext.js");

var _CreateWebAudioContext2 = _interopRequireDefault(_CreateWebAudioContext);

var _WebAudioSystem = __webpack_require__(/*! ./webaudio/WebAudioSystem */ "./audio/manager/components/webaudio/WebAudioSystem.js");

var _WebAudioSystem2 = _interopRequireDefault(_WebAudioSystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InitializeAudioSystemManager(game) {

    var audioManager = new _AudioManager2.default(game);

    if (!game.config.audio.noAudio) {

        var webAudioSupported = _PlatformEnvironment2.default.supportAudio && _PlatformEnvironment2.default.supportWebAudio;

        if (webAudioSupported && game.config.audio.webAudio) {

            var system = new _WebAudioSystem2.default(audioManager);
            (0, _CreateWebAudioContext2.default)(system);

            audioManager._system = system;
            audioManager.add = _AddWebAudioSource2.default.bind(audioManager);
        }
    }

    return audioManager;
}

/***/ }),

/***/ "./audio/manager/components/UpdateAudioManager.js":
/*!********************************************************!*\
  !*** ./audio/manager/components/UpdateAudioManager.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateAudioManager;

var _AudioSystemType = __webpack_require__(/*! ./AudioSystemType */ "./audio/manager/components/AudioSystemType.js");

var _AudioSystemType2 = _interopRequireDefault(_AudioSystemType);

var _UpdateWebAudioSource = __webpack_require__(/*! ../../sound/components/UpdateWebAudioSource */ "./audio/sound/components/UpdateWebAudioSource.js");

var _UpdateWebAudioSource2 = _interopRequireDefault(_UpdateWebAudioSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateAudioManager() {

    if (this._noAudio) return;

    for (var i = 0; i < this._sounds.length; i++) {

        var source = this._sounds.at(i);

        if (this._system.type === _AudioSystemType2.default.WEBAUDIO) {
            (0, _UpdateWebAudioSource2.default)(source);
        }

        if (source._requireRemoval) {
            this._removalList.push(i);
        }
    }

    // check removal
    var removalSize = this._removalList.length;

    if (removalSize === 0) return;

    this._sounds.eraseIndexedList(this._removalList);
    this._removalList.length = 0;
}

/***/ }),

/***/ "./audio/manager/components/webaudio/AddWebAudioSource.js":
/*!****************************************************************!*\
  !*** ./audio/manager/components/webaudio/AddWebAudioSource.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AddWebAudioSource;

var _WebAudioSource = __webpack_require__(/*! ../../../sound/WebAudioSource */ "./audio/sound/WebAudioSource.js");

var _WebAudioSource2 = _interopRequireDefault(_WebAudioSource);

var _NullAudioSource = __webpack_require__(/*! ../../../sound/NullAudioSource */ "./audio/sound/NullAudioSource.js");

var _NullAudioSource2 = _interopRequireDefault(_NullAudioSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AddWebAudioSource(tag, volume, loop, name) {

    var soundResource = this._soundCache.get(tag);
    var audioSource = void 0;

    if (soundResource === undefined || soundResource === null) {
        console.warn("AudioManager.add: Could not add audio source with tag: \'" + tag + "\.");
        audioSource = new _NullAudioSource2.default(this, null, tag);
    } else {

        audioSource = new _WebAudioSource2.default(this, soundResource, volume, loop, name);
    }

    this._sounds.push(audioSource);

    return audioSource;
}

/***/ }),

/***/ "./audio/manager/components/webaudio/CreateWebAudioContext.js":
/*!********************************************************************!*\
  !*** ./audio/manager/components/webaudio/CreateWebAudioContext.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CreateWebAudioContext;
function CreateWebAudioContext(audioSystem) {

    audioSystem.context = new AudioContext();

    if (audioSystem.context.createGain === undefined) {
        audioSystem.masterVolume = audioSystem.context.createGainNode();
    } else {
        audioSystem.masterVolume = audioSystem.context.createGain();
    }

    audioSystem.masterVolume.gain.value = 1;
    audioSystem.masterVolume.connect(audioSystem.context.destination);

    audioSystem.destination = audioSystem.masterVolume;

    audioSystem.locked = audioSystem.context.state === 'suspended' && 'ontouchstart' in window;
}

/***/ }),

/***/ "./audio/manager/components/webaudio/WebAudioSystem.js":
/*!*************************************************************!*\
  !*** ./audio/manager/components/webaudio/WebAudioSystem.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _CreateWebAudioContext = __webpack_require__(/*! ./CreateWebAudioContext */ "./audio/manager/components/webaudio/CreateWebAudioContext.js");

var _CreateWebAudioContext2 = _interopRequireDefault(_CreateWebAudioContext);

var _AudioSystemType = __webpack_require__(/*! ../AudioSystemType */ "./audio/manager/components/AudioSystemType.js");

var _AudioSystemType2 = _interopRequireDefault(_AudioSystemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WebAudioSystem = function () {
    function WebAudioSystem(manager) {
        (0, _classCallCheck3.default)(this, WebAudioSystem);

        this.manager = manager;

        this.context = null;
        this.masterVolume = null;
        this.destination = null;
        this.locked = null;
        this.type = _AudioSystemType2.default.WEBAUDIO;

        (0, _CreateWebAudioContext2.default)(this);
    }

    (0, _createClass3.default)(WebAudioSystem, [{
        key: "onFocus",
        value: function onFocus() {
            this.context.resume();
        }
    }, {
        key: "onBlur",
        value: function onBlur() {
            this.context.suspend();
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.destination = null;
            this.masterVolume.disconnect();
            this.masterVolume = null;
            //this.context.suspend();
            this.context.close();
            this.context = null;
        }
    }]);
    return WebAudioSystem;
}();

exports.default = WebAudioSystem;

/***/ }),

/***/ "./audio/sound/AudioSource.js":
/*!************************************!*\
  !*** ./audio/sound/AudioSource.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AudioSource = function () {
    function AudioSource(manager, resource, name) {
        (0, _classCallCheck3.default)(this, AudioSource);


        this.name = name || '';
        this.manager = manager;
        this._system = manager._system;
        this.resource = resource;

        this._volume = 1;
        this.duration = 0;
        this.startTime = 0;
        this.currentTime = 0;
        this.position = 0;
        this.speed = 0; // rate

        this.isPlaying = false;
        this.isPaused = false;
        this.mute = false;
        this.loop = false;
        this.persistent = false;

        this._ended = false;
        this.once = false;

        this._requireRemoval = false;
    }

    (0, _createClass3.default)(AudioSource, [{
        key: 'play',
        value: function play() {

            if (this.isPlaying) return;

            if (this.isPaused) this.isPaused = false;

            this.isPlaying = true;

            return this;
        }
    }, {
        key: 'pause',
        value: function pause() {
            if (this.isPaused || !this.isPlaying) {
                return this;
            }

            this.isPlaying = false;
            this.isPaused = true;

            return this;
        }
    }, {
        key: 'stop',
        value: function stop() {
            if (!this.isPaused && !this.isPlaying) {
                return this;
            }

            this.isPlaying = false;
            this.isPaused = false;

            return this;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this._requireRemoval = true;
            this.isPlaying = false;
            this.isPaused = false;
            this.tag = undefined;
        }
    }]);
    return AudioSource;
}();

exports.default = AudioSource;

/***/ }),

/***/ "./audio/sound/NullAudioSource.js":
/*!****************************************!*\
  !*** ./audio/sound/NullAudioSource.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ "../node_modules/babel-runtime/helpers/get.js");

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _AudioSource2 = __webpack_require__(/*! ./AudioSource */ "./audio/sound/AudioSource.js");

var _AudioSource3 = _interopRequireDefault(_AudioSource2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NullAudioSource = function (_AudioSource) {
    (0, _inherits3.default)(NullAudioSource, _AudioSource);

    function NullAudioSource() {
        (0, _classCallCheck3.default)(this, NullAudioSource);
        return (0, _possibleConstructorReturn3.default)(this, (NullAudioSource.__proto__ || (0, _getPrototypeOf2.default)(NullAudioSource)).apply(this, arguments));
    }

    (0, _createClass3.default)(NullAudioSource, [{
        key: "setVolume",
        value: function setVolume(value) {
            this._volume = value;
            return this;
        }
    }, {
        key: "play",
        value: function play() {
            (0, _get3.default)(NullAudioSource.prototype.__proto__ || (0, _getPrototypeOf2.default)(NullAudioSource.prototype), "play", this).call(this);
        }
    }, {
        key: "pause",
        value: function pause() {}
    }, {
        key: "stop",
        value: function stop() {
            (0, _get3.default)(NullAudioSource.prototype.__proto__ || (0, _getPrototypeOf2.default)(NullAudioSource.prototype), "stop", this).call(this);
        }
    }, {
        key: "destroy",
        value: function destroy() {

            (0, _get3.default)(NullAudioSource.prototype.__proto__ || (0, _getPrototypeOf2.default)(NullAudioSource.prototype), "destroy", this).call(this);
        }
    }, {
        key: "volume",
        get: function get() {
            return 1;
        },
        set: function set(value) {
            this._volume = value;
        }
    }]);
    return NullAudioSource;
}(_AudioSource3.default);

exports.default = NullAudioSource;

/***/ }),

/***/ "./audio/sound/WebAudioSource.js":
/*!***************************************!*\
  !*** ./audio/sound/WebAudioSource.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ "../node_modules/babel-runtime/helpers/get.js");

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _AudioSource2 = __webpack_require__(/*! ./AudioSource */ "./audio/sound/AudioSource.js");

var _AudioSource3 = _interopRequireDefault(_AudioSource2);

var _CreateBufferSource = __webpack_require__(/*! ./components/CreateBufferSource */ "./audio/sound/components/CreateBufferSource.js");

var _CreateBufferSource2 = _interopRequireDefault(_CreateBufferSource);

var _RemoveBufferSource = __webpack_require__(/*! ./components/RemoveBufferSource */ "./audio/sound/components/RemoveBufferSource.js");

var _RemoveBufferSource2 = _interopRequireDefault(_RemoveBufferSource);

var _StartBufferSource = __webpack_require__(/*! ./components/StartBufferSource */ "./audio/sound/components/StartBufferSource.js");

var _StartBufferSource2 = _interopRequireDefault(_StartBufferSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WebAudioSource = function (_AudioSource) {
    (0, _inherits3.default)(WebAudioSource, _AudioSource);

    function WebAudioSource(manager, resource, volume, loop, name) {
        (0, _classCallCheck3.default)(this, WebAudioSource);

        var _this = (0, _possibleConstructorReturn3.default)(this, (WebAudioSource.__proto__ || (0, _getPrototypeOf2.default)(WebAudioSource)).call(this, manager, resource, name));

        _this.buffer = null;
        _this.duration = resource.duration;
        _this.gainNode = _this._system.context.createGain();
        _this.gainNode.connect(_this._system.destination);

        _this.volume = volume || 1;
        _this.loop = loop || false;

        return _this;
    }

    (0, _createClass3.default)(WebAudioSource, [{
        key: "setVolume",
        value: function setVolume(value) {
            this._volume = value;
            return this;
        }
    }, {
        key: "play",
        value: function play() {
            (0, _get3.default)(WebAudioSource.prototype.__proto__ || (0, _getPrototypeOf2.default)(WebAudioSource.prototype), "play", this).call(this);

            (0, _RemoveBufferSource2.default)(this);
            this.buffer = (0, _CreateBufferSource2.default)(this);
            (0, _StartBufferSource2.default)(this);
        }
    }, {
        key: "pause",
        value: function pause() {}
    }, {
        key: "stop",
        value: function stop() {
            (0, _get3.default)(WebAudioSource.prototype.__proto__ || (0, _getPrototypeOf2.default)(WebAudioSource.prototype), "stop", this).call(this);

            (0, _RemoveBufferSource2.default)(this);

            return this;
        }
    }, {
        key: "destroy",
        value: function destroy() {

            (0, _RemoveBufferSource2.default)(this);

            this.buffer = null;

            if (this.gainNode !== null) {
                this.gainNode.disconnect();
                this.gainNode = null;
            }

            (0, _get3.default)(WebAudioSource.prototype.__proto__ || (0, _getPrototypeOf2.default)(WebAudioSource.prototype), "destroy", this).call(this);
        }
    }, {
        key: "volume",
        get: function get() {
            return this.gainNode.gain.value;
        },
        set: function set(value) {
            if (this.gainNode) this.gainNode.gain.setValueAtTime(value, 0);

            this._volume = value;
        }
    }]);
    return WebAudioSource;
}(_AudioSource3.default);

exports.default = WebAudioSource;

/***/ }),

/***/ "./audio/sound/components/CreateBufferSource.js":
/*!******************************************************!*\
  !*** ./audio/sound/components/CreateBufferSource.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CreateBufferSource;
function CreateBufferSource(webAudioSource) {

    var self = webAudioSource;
    var bufferSource = webAudioSource._system.context.createBufferSource();

    bufferSource.buffer = webAudioSource.resource;

    bufferSource.connect(webAudioSource.gainNode);

    bufferSource.onended = function (event) {
        if (event.target === self.buffer) {
            // sound ended
            self._ended = true;
        }
    };

    return bufferSource;
}

/***/ }),

/***/ "./audio/sound/components/RemoveBufferSource.js":
/*!******************************************************!*\
  !*** ./audio/sound/components/RemoveBufferSource.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RemoveBufferSource;
function RemoveBufferSource(webAudioSource) {

    if (webAudioSource.buffer) {
        webAudioSource.buffer.stop();
        webAudioSource.buffer.disconnect();
        webAudioSource.buffer = null;
    }

    webAudioSource.playTime = 0;
    webAudioSource.startTime = 0;
}

/***/ }),

/***/ "./audio/sound/components/StartBufferSource.js":
/*!*****************************************************!*\
  !*** ./audio/sound/components/StartBufferSource.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = StartBufferSource;
function StartBufferSource(webAudioSource, position) {

    if (position === undefined) position = 0;

    var start = webAudioSource._system.context.currentTime;
    var duration = webAudioSource.duration;
    var delay = 0;
    webAudioSource.playTime = start - position;
    webAudioSource.startTime = start;

    var buffer = webAudioSource.buffer;

    if (buffer.loop !== undefined) {
        buffer.loop = webAudioSource.loop;
    }

    buffer.start(Math.max(0, start), Math.max(0, delay), Math.max(0, duration));
    webAudioSource.gainNode.gain.value = webAudioSource._volume;
}

/***/ }),

/***/ "./audio/sound/components/UpdateWebAudioSource.js":
/*!********************************************************!*\
  !*** ./audio/sound/components/UpdateWebAudioSource.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateWebAudioSource;

var _StartBufferSource = __webpack_require__(/*! ./StartBufferSource */ "./audio/sound/components/StartBufferSource.js");

var _StartBufferSource2 = _interopRequireDefault(_StartBufferSource);

var _CreateBufferSource = __webpack_require__(/*! ./CreateBufferSource */ "./audio/sound/components/CreateBufferSource.js");

var _CreateBufferSource2 = _interopRequireDefault(_CreateBufferSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateWebAudioSource(source) {

    if (source._ended === true) {

        source._ended = false;

        if (!source.loop) {
            source.stop();
        } else {
            source.playTime = source.startTime = 0;

            //let buffer = webAudioSource.buffer;

            source.buffer = (0, _CreateBufferSource2.default)(source);
            (0, _StartBufferSource2.default)(source, 0);
        }

        if (source.once) {
            source.destroy();
            source._pendingRemoval = true;
        }
    }
}

/***/ }),

/***/ "./cache/Cache.js":
/*!************************!*\
  !*** ./cache/Cache.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cache = function () {
    function Cache(wrapperFunction) {
        (0, _classCallCheck3.default)(this, Cache);

        this.resources = new _Map2.default();
        this.adderWrapper = wrapperFunction || undefined;
    }

    (0, _createClass3.default)(Cache, [{
        key: "add",
        value: function add(tag, asset) {

            var resource = asset;

            if (this.adderWrapper !== undefined) resource = this.adderWrapper(tag, asset);

            this.resources.insert(tag, resource);

            return resource;
        }
    }, {
        key: "has",
        value: function has(tag) {
            return this.resources.has(tag);
        }
    }, {
        key: "get",
        value: function get(tag) {
            return this.resources.get(tag);
        }
    }, {
        key: "erase",
        value: function erase(tag) {
            this.resources.delete(tag);
            return this;
        }
    }, {
        key: "clear",
        value: function clear() {
            this.resources.clear();
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.resources.clear();
            this.resources = null;
        }
    }]);
    return Cache;
}();

exports.default = Cache;

/***/ }),

/***/ "./cache/CacheManager.js":
/*!*******************************!*\
  !*** ./cache/CacheManager.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _System = __webpack_require__(/*! ../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _Cache = __webpack_require__(/*! ./Cache */ "./cache/Cache.js");

var _Cache2 = _interopRequireDefault(_Cache);

var _ImageResource = __webpack_require__(/*! ../resources/ImageResource */ "./resources/ImageResource.js");

var _ImageResource2 = _interopRequireDefault(_ImageResource);

var _TilemapResource = __webpack_require__(/*! ../resources/tilemap/TilemapResource */ "./resources/tilemap/TilemapResource.js");

var _TilemapResource2 = _interopRequireDefault(_TilemapResource);

var _SpritesheetResource = __webpack_require__(/*! ../resources/animation/SpritesheetResource */ "./resources/animation/SpritesheetResource.js");

var _SpritesheetResource2 = _interopRequireDefault(_SpritesheetResource);

var _AnimationMachineResource = __webpack_require__(/*! ../resources/animation/AnimationMachineResource */ "./resources/animation/AnimationMachineResource.js");

var _AnimationMachineResource2 = _interopRequireDefault(_AnimationMachineResource);

var _AssetsType = __webpack_require__(/*! ../loader/AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CacheTypes = ['image', 'json', 'audio', 'text', 'tilemap', 'animation', 'animMachine'];

/**
* Cache manager - holds file data
* @class Cache
* @constructor
*/

var CacheManager = function () {
  function CacheManager(game) {
    (0, _classCallCheck3.default)(this, CacheManager);

    this.game = game;

    var self = this;

    this.image = new _Cache2.default(function (tag, data) {
      return new _ImageResource2.default(tag, data);
    });

    this.tilemap = new _Cache2.default();

    /*
    /// TODO
    this.tileset = new Cache((tag, data) => {
      return new TilesetResource(tag, data, self);
    });*/

    this.json = new _Cache2.default();
    this.text = new _Cache2.default();
    this.audio = new _Cache2.default();

    this.animation = new _Cache2.default(function (tag, data) {

      var resource = void 0;

      if (data.type === _AssetsType2.default.spritesheet) {
        var image = self.image.get(data.imageTag);

        resource = new _SpritesheetResource2.default(tag, image);
        resource.addStrip(data.x, data.y, data.frameWidth, data.frameHeight, data.numberOfImages, data.framesPerRow, data.spacing);
        if (data.duration !== undefined) resource.duration = data.duration;
      }

      return resource;
    });

    this.animMachine = new _Cache2.default(function (tag, data) {

      var resource = new _AnimationMachineResource2.default(tag);

      if (data.animations !== undefined) {

        for (var i = 0; i < data.animations.length; i++) {

          var anim = self.animation.get(data.animations[i]);
          resource.add(data.animations[i], anim);
        }
      }

      return resource;
    });
  }

  (0, _createClass3.default)(CacheManager, [{
    key: "hasCache",
    value: function hasCache(cacheType) {
      return (0, _typeof3.default)(CacheTypes[cacheType]) !== undefined;
    }
  }, {
    key: "getAsset",
    value: function getAsset(cacheType, tag) {
      // return the cache container

      if (!this.hasCache(cacheType)) return null;

      return this[cacheType].get(tag);
    }
  }, {
    key: "clear",
    value: function clear() {

      for (var i = 0; i < CacheTypes.length; i++) {
        this[props[i]].clear();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {

      for (var i = 0; i < CacheTypes.length; i++) {
        this[props[i]].destroy();
        this[props[i]] = null;
      }

      this.game = null;
    }
  }]);
  return CacheManager;
}();

exports.default = CacheManager;


_System2.default.register('Cache', CacheManager, 'cache');

/***/ }),

/***/ "./camera/Camera.js":
/*!**************************!*\
  !*** ./camera/Camera.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _System = __webpack_require__(/*! ../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _BoundingBox = __webpack_require__(/*! ../math/BoundingBox */ "./math/BoundingBox.js");

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

var _Transform = __webpack_require__(/*! ../transform/Transform */ "./transform/Transform.js");

var _Transform2 = _interopRequireDefault(_Transform);

var _Color = __webpack_require__(/*! ../render/color/Color */ "./render/color/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _MathUtils = __webpack_require__(/*! ../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _Vector = __webpack_require__(/*! ../math/Vector2 */ "./math/Vector2.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _ResizeCamera = __webpack_require__(/*! ./ResizeCamera */ "./camera/ResizeCamera.js");

var _ResizeCamera2 = _interopRequireDefault(_ResizeCamera);

var _Renderable = __webpack_require__(/*! ../modules/renderables/Renderable */ "./modules/renderables/Renderable.js");

var _Renderable2 = _interopRequireDefault(_Renderable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Camera = function () {
  function Camera(game) {
    (0, _classCallCheck3.default)(this, Camera);


    this.game = game;
    this.canvas = null;

    this.width = game.config.camera.width;
    this.height = game.config.camera.height;

    this.bounds = new _BoundingBox2.default(); // render bounds
    this.viewBounds = new _BoundingBox2.default(0, 0, this.width, this.height); // global bounds
    this._transform = new _Transform2.default();

    this._pixelUnit = { x: 1, y: 1 };
    this._aspectRatio = 1;

    this._backgroundColor = new _Color2.default(); //.rgbToHex(0,0,0);
    this._roundPixels = game.config.roundPixels;
  }

  (0, _createClass3.default)(Camera, [{
    key: 'centerView',
    value: function centerView() {
      this.x = this.width * 0.5;
      this.y = this.height * 0.5;
      this._transform._isDirty = true;
      return this;
    }
  }, {
    key: 'centerToEntity',
    value: function centerToEntity(entity) {
      this.x = entity.position.x;
      this.y = entity.position.y;
      this._transform._isDirty = true;
      return this;
    }
  }, {
    key: 'setBackgroundColor',
    value: function setBackgroundColor(r, g, b, a) {
      if (r === undefined) {
        g = 0;
      }
      if (g === undefined) {
        g = 0;
      }
      if (b === undefined) {
        b = 0;
      }
      if (a === undefined) {
        a = 1;
      }
      this._backgroundColor = _Color2.default.rgba(r, g, b, a);
      return this;
    }
  }, {
    key: 'setSize',
    value: function setSize(width, height) {
      (0, _ResizeCamera2.default)(this, this.canvas, width, height);
      this._transform._isDirty = true;
      return this;
    }
  }, {
    key: 'setView',
    value: function setView(x, y, width, height) {
      this._transform.position.x = x;
      this._transform.position.y = y;
      (0, _ResizeCamera2.default)(width, height);
      this._transform._isDirty = true;
      return this;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this._transform.reset();
    }
  }, {
    key: 'isCulled',
    value: function isCulled(entity) {

      if (entity === undefined || entity === null) return false;

      if (entity instanceof _Renderable2.default) {
        return this.bounds.intersects(entity.bounds);
      } else {
        var render = entity.modules.get('render');
        if (render !== null || render !== undefined) {
          return this.bounds.intersects(render.bounds);
        } else {
          return this.bounds.contains(entity.x, entity.y);
        }
      }
    }
  }, {
    key: 'position',
    get: function get() {
      return this._transform.position;
    },
    set: function set(value) {
      this._transform.position.x = value.x;
      this._transform.position.y = value.y;
      this._transform._isDirty = true;
      return this;
    }
  }, {
    key: 'x',
    get: function get() {
      return this._transform.position.x;
    },
    set: function set(value) {
      this._transform.position.x = value;
      this._transform._isDirty = true;
      return this;
    }
  }, {
    key: 'y',
    get: function get() {
      return this._transform.position.y;
    },
    set: function set(value) {
      this._transform.position.y = value;
      this._transform._isDirty = true;
      return this;
    }
  }, {
    key: 'scale',
    get: function get() {
      return this._transform.scale.x;
    },
    set: function set(value) {
      this._transform.scale.x = value;
      this._transform._isDirty = true;
      return this;
    }
  }, {
    key: 'angle',
    get: function get() {
      return this._transform.angle;
    },
    set: function set(value) {
      this._transform.angle = value;
      this._transform.rotation = value * _MathUtils2.default.toRadian;
      this._transform._isDirty = true;
      return this;
    }
  }, {
    key: 'origin',
    get: function get() {
      return this._transform.origin;
    },
    set: function set(value) {
      this._transform.x = value.x;
      this._transform.y = value.y;
      this._transform._isDirty = true;
      return this;
    }
  }, {
    key: 'rotation',
    get: function get() {
      return this._transform.rotation;
    }
  }, {
    key: 'backgroundColor',
    set: function set(color) {
      if (color === undefined) {
        color = 'rgba(0,0,0,0)';
      }
      this._backgroundColor = color;
      return this;
    },
    get: function get() {
      return this._backgroundColor = color;
    }
  }, {
    key: 'roundPixels',
    set: function set(flag) {
      this._roundPixels = flag;
      this._transform._isDirty = true;
      return this;
    },
    get: function get() {
      return this._roundPixels;
    }
  }, {
    key: 'size',
    get: function get() {
      return { x: this.width, y: this.height };
    }
  }]);
  return Camera;
}();

exports.default = Camera;


_System2.default.register('Camera', Camera, 'camera', function () {
  this.canvas = this.game.system.render.canvas;
  (0, _ResizeCamera2.default)(this, this.canvas, this.width, this.height);
});

/***/ }),

/***/ "./camera/ResizeCamera.js":
/*!********************************!*\
  !*** ./camera/ResizeCamera.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ResizeCamera;
function ResizeCamera(camera, canvas, width, height) {

    camera.width = width;
    camera.height = height;
    camera._aspectRatio = width / height;
    camera._pixelUnit.x = canvas.width / camera.width;
    camera._pixelUnit.y = canvas.height / camera.height;
}

/***/ }),

/***/ "./camera/UpdateCamera.js":
/*!********************************!*\
  !*** ./camera/UpdateCamera.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UpdateCamera;

var _UpdateBounds = __webpack_require__(/*! ../transform/UpdateBounds */ "./transform/UpdateBounds.js");

var _UpdateBounds2 = _interopRequireDefault(_UpdateBounds);

var _ComputeDelimiterPoint = __webpack_require__(/*! ../transform/ComputeDelimiterPoint */ "./transform/ComputeDelimiterPoint.js");

var _ComputeDelimiterPoint2 = _interopRequireDefault(_ComputeDelimiterPoint);

var _ComputeBounds = __webpack_require__(/*! ../transform/ComputeBounds */ "./transform/ComputeBounds.js");

var _ComputeBounds2 = _interopRequireDefault(_ComputeBounds);

var _MathUtils = __webpack_require__(/*! ../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateCamera(camera, canvas) {

  if (camera._transform._isDirty === false) return;

  var t = camera._transform;

  if (t.rotation != t._oldRotation) {
    t._oldRotation = t.rotation;
    t._cosSin.y = Math.sin(t.rotation);
    t._cosSin.x = Math.cos(t.rotation);
  }

  var origin = {
    x: camera.width * t.origin.x,
    y: camera.height * t.origin.y
  };

  var pos = { x: t.position.x + origin.x,
    y: t.position.y + origin.y };

  if (camera._roundPixels) {
    pos.x = _MathUtils2.default.round(pos.x);
    pos.y = _MathUtils2.default.round(pos.y);
  }

  // update camera view
  camera.viewBounds.setMin(pos.x, pos.y).setMax(pos.x + camera.width, pos.y + camera.height);

  pos.x = -pos.x;
  pos.y = -pos.y;

  // compute the basic rotation
  t.matrix.setIdentity().scale(camera._pixelUnit.x, camera._pixelUnit.y) // resolution
  .translate(pos.x, pos.y).scale(t.scale.x, t.scale.x);

  // bounds should not be rotated
  (0, _ComputeBounds2.default)(camera.bounds, camera._transform, camera.width, camera.height, pos);

  t.matrix.radianRotate(t._cosSin.x, t._cosSin.y).translate(-origin.x, -origin.y);
}

/***/ }),

/***/ "./core/Config.js":
/*!************************!*\
  !*** ./core/Config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _ObjectGet = __webpack_require__(/*! ../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Config = function Config(config) {
        (0, _classCallCheck3.default)(this, Config);

        if (config === undefined) config = {};

        var callback = _ObjectGet2.default.value;
        var callback_2 = _ObjectGet2.default.propertyValue;

        // view and canvas
        this.width = callback(config, 'width', 640);
        this.height = callback(config, 'height', 480);
        this.parent = callback(config, 'parent', null);
        this.debug = callback(config, 'debug', false);

        // render
        this.pixelated = callback(config, 'pixelated', false);
        this.doubleBuffer = callback(config, 'doubleBuffer', true);
        this.roundPixels = callback(config, 'roundPixels', false);
        this.floorTiles = callback(config, 'floorTiles', false);
        this.autoResize = callback(config, 'autoResize', false);

        // loader
        this.loader = {
                baseURL: callback_2(config, 'loader.baseURL', ''),
                path: callback_2(config, 'loader.path', ''),
                responseType: callback_2(config, 'loader.responseType', ''),
                async: callback_2(config, 'loader.async', true)
        };

        this.audio = {
                noAudio: callback_2(config, 'audio.noAudio', false),
                context: callback_2(config, 'audio.context', null),
                webAudio: callback_2(config, 'audio.webAudio', true)
        };

        var createKeyboard = callback(config, 'keyboard', true);

        if (createKeyboard === null) {
                createKeyboard = false;
        }

        // input
        this.keyboard = {
                active: callback_2(config, 'keyboard.active', createKeyboard),
                enable: callback_2(config, 'keyboard.enable', true),
                target: callback_2(config, 'keyboard.target', window)
        };

        var createMouse = callback(config, 'mouse', true);

        if (createMouse === null) {
                createMouse = false;
        }

        this.mouse = {
                active: callback_2(config, 'mouse.active', createMouse),
                enable: callback_2(config, 'mouse.enable', true),
                target: callback_2(config, 'mouse.target', null)
        };

        var disableContextMenu = callback(config, 'disableContextMenu', null);

        if (disableContextMenu === null) {
                disableContextMenu = callback_2(config, 'contextMenu.disable', false);
        }

        this.contextMenu = {
                disable: disableContextMenu,
                target: callback_2(config, 'contextMenu.target', null)
        };

        this.fps = callback(config, 'fps', 60);
        this.time = {
                timeoutMode: callback_2(config, 'time.timeOutMode', false)
        };

        this.camera = {
                width: callback_2(config, 'camera.width', this.width),
                height: callback_2(config, 'camera.height', this.height)
        };

        /* this.loaderEnableParallel = GetValue(config, 'loader.enableParallel', true);
            this.loaderMaxParallelDownloads = GetValue(config, 'loader.maxParallelDownloads', 4);
            this.loaderCrossOrigin = GetValue(config, 'loader.crossOrigin', undefined);
            
            this.loaderUser = GetValue(config, 'loader.user', '');
            this.loaderPassword = GetValue(config, 'loader.password', '');
        this.loaderTimeout = GetValue(config, 'loader.timeout', 0);*/
};

exports.default = Config;

/***/ }),

/***/ "./core/Game.js":
/*!**********************!*\
  !*** ./core/Game.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Config = __webpack_require__(/*! ./Config */ "./core/Config.js");

var _Config2 = _interopRequireDefault(_Config);

var _GameInitialize = __webpack_require__(/*! ./GameInitialize */ "./core/GameInitialize.js");

var _GameInitialize2 = _interopRequireDefault(_GameInitialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Main class of engine. Holds all main data.
* @class Game
* @constructor
*/
var Game = function () {

    /**
    * @property {string|HTMLElement} parent - The Games DOM parent.
    * @default
    */
    function Game() {
        (0, _classCallCheck3.default)(this, Game);


        this.parent = 'body';
        this.width = 800;
        this.height = 600;

        // object
        this.config = new _Config2.default(config);

        // boolean
        this.systemInited = false;
        this.isRunning = false;
        this.debugMode = false;

        // float
        this.timeMode = false;

        //objects
        this.debug = null;
        //this.scene = null;
        this.sound = null;
        this.input = null;
        this.pool = null;
        this.systems = null;
        this.context = null;
        this.time = null;
        this.events = null;

        this.parseConfiguration(this.config);

        (0, _GameInitialize2.default)(this);
    }

    (0, _createClass3.default)(Game, [{
        key: 'parseConfiguration',
        value: function parseConfiguration(config) {

            //this.config = config;

            if (config['debug']) {
                this.debugMode = config['debug'];
            }

            if (config['width']) {
                this.width = config['width'];
            }

            if (config['height']) {
                this.height = config['height'];
            }

            if (config['parent']) {
                this.parent = config['parent'];
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {

            this.physics.destroy();
            this.sound.destroy();
            this.input.destroy();

            this.debug = null;
            this.cache = null;
            this.load = null;
            this.canvas = null;
            this.scene = null;
            this.sound = null;
            this.draw = null;
            this.universe = null;
            this.world = null;
            this.input = null;
            this.time = null;
            this.render = null;
            this.component = null;
            this.instance = null;
            this.animationCache = null;
            this.updateGameMethod = null;
        }
    }]);
    return Game;
}();

//scintilla.Game.prototype.constructor = scintilla.Game;


exports.default = Game;
module.exports = Game;

/***/ }),

/***/ "./core/GameInitialize.js":
/*!********************************!*\
  !*** ./core/GameInitialize.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _seal = __webpack_require__(/*! babel-runtime/core-js/object/seal */ "../node_modules/babel-runtime/core-js/object/seal.js");

var _seal2 = _interopRequireDefault(_seal);

exports.default = GameInitialize;

var _physics = __webpack_require__(/*! ../physics/physics */ "./physics/physics.js");

var _physics2 = _interopRequireDefault(_physics);

var _Input = __webpack_require__(/*! ../input/Input */ "./input/Input.js");

var _Input2 = _interopRequireDefault(_Input);

var _GameTime = __webpack_require__(/*! ../time/GameTime */ "./time/GameTime.js");

var _GameTime2 = _interopRequireDefault(_GameTime);

var _InitializeSystems = __webpack_require__(/*! ./system/components/InitializeSystems */ "./core/system/components/InitializeSystems.js");

var _InitializeSystems2 = _interopRequireDefault(_InitializeSystems);

var _AppendDOM = __webpack_require__(/*! ../dom/AppendDOM */ "./dom/AppendDOM.js");

var _AppendDOM2 = _interopRequireDefault(_AppendDOM);

var _InitializeAudioSystemManager = __webpack_require__(/*! ../audio/manager/components/InitializeAudioSystemManager */ "./audio/manager/components/InitializeAudioSystemManager.js");

var _InitializeAudioSystemManager2 = _interopRequireDefault(_InitializeAudioSystemManager);

var _InitializeRender = __webpack_require__(/*! ../render/components/InitializeRender */ "./render/components/InitializeRender.js");

var _InitializeRender2 = _interopRequireDefault(_InitializeRender);

var _RandomGenerator = __webpack_require__(/*! ../math/random/RandomGenerator */ "./math/random/RandomGenerator.js");

var _RandomGenerator2 = _interopRequireDefault(_RandomGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * Initialize engine
  *
  * @method Game#init()
  * @protected
  */
function GameInitialize(game) {

    if (game.systemInited) return;

    var render = (0, _InitializeRender2.default)(game, game.config);

    var canvas = render.canvas;

    if (render.doubleBuffer) {
        canvas = render._domCanvas;
    }

    (0, _AppendDOM2.default)(canvas, game.config.parent);

    // Core system
    game.physics = new _physics2.default(game);
    game.input = new _Input2.default(game);
    game.time = new _GameTime2.default(game);

    _RandomGenerator2.default.reset([(Date.now() * Math.random()).toString()]);

    (0, _InitializeSystems2.default)(game, render);

    game.audio = (0, _InitializeAudioSystemManager2.default)(game);

    game.input.init();
    game.time.init(game.system.loop);
    game.systemInited = true;
    game.isRunning = true;

    (0, _seal2.default)(game);

    console.log("scintilla started!");
}

/***/ }),

/***/ "./core/GameLoop.js":
/*!**************************!*\
  !*** ./core/GameLoop.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _System = __webpack_require__(/*! ./system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _RequestAnimationFrame = __webpack_require__(/*! ../dom/RequestAnimationFrame */ "./dom/RequestAnimationFrame.js");

var _RequestAnimationFrame2 = _interopRequireDefault(_RequestAnimationFrame);

var _UpdateStep = __webpack_require__(/*! ../time/UpdateStep */ "./time/UpdateStep.js");

var _UpdateStep2 = _interopRequireDefault(_UpdateStep);

var _UpdateCamera = __webpack_require__(/*! ../camera/UpdateCamera */ "./camera/UpdateCamera.js");

var _UpdateCamera2 = _interopRequireDefault(_UpdateCamera);

var _BeginDrawRender = __webpack_require__(/*! ../render/components/BeginDrawRender */ "./render/components/BeginDrawRender.js");

var _BeginDrawRender2 = _interopRequireDefault(_BeginDrawRender);

var _DrawRender = __webpack_require__(/*! ../render/components/DrawRender */ "./render/components/DrawRender.js");

var _DrawRender2 = _interopRequireDefault(_DrawRender);

var _EndDrawRender = __webpack_require__(/*! ../render/components/EndDrawRender */ "./render/components/EndDrawRender.js");

var _EndDrawRender2 = _interopRequireDefault(_EndDrawRender);

var _PreUpdateScene = __webpack_require__(/*! ../scene/components/PreUpdateScene */ "./scene/components/PreUpdateScene.js");

var _PreUpdateScene2 = _interopRequireDefault(_PreUpdateScene);

var _UpdateScene = __webpack_require__(/*! ../scene/components/UpdateScene */ "./scene/components/UpdateScene.js");

var _UpdateScene2 = _interopRequireDefault(_UpdateScene);

var _DrawUI = __webpack_require__(/*! ../render/ui/DrawUI */ "./render/ui/DrawUI.js");

var _DrawUI2 = _interopRequireDefault(_DrawUI);

var _DrawTransition = __webpack_require__(/*! ../render/transition/DrawTransition */ "./render/transition/DrawTransition.js");

var _DrawTransition2 = _interopRequireDefault(_DrawTransition);

var _UpdateTransition = __webpack_require__(/*! ../render/transition/UpdateTransition */ "./render/transition/UpdateTransition.js");

var _UpdateTransition2 = _interopRequireDefault(_UpdateTransition);

var _UpdateAudioManager = __webpack_require__(/*! ../audio/manager/components/UpdateAudioManager */ "./audio/manager/components/UpdateAudioManager.js");

var _UpdateAudioManager2 = _interopRequireDefault(_UpdateAudioManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
*
* core game loop system
*
* @class GameLoop
* @protected
*/
var GameLoop = function () {
        function GameLoop(game, system) {
                (0, _classCallCheck3.default)(this, GameLoop);

                this.game = game;
                this.system = system;
                this.updateStep = new _UpdateStep2.default(game, game.config);
                this.entityUpdateList = null;
                this.currentScene = null;
                this.camera = null;
                this.canvas = null;
                this.renderer = null;
        }

        (0, _createClass3.default)(GameLoop, [{
                key: "loop",
                value: function loop(deltaTime, timeStamp) {

                        // Core Managers

                        _UpdateAudioManager2.default.call(this.game.audio);

                        this.game.input.update(timeStamp);

                        (0, _UpdateTransition2.default)(this.game.system.transition, deltaTime);

                        // Entities and Scene Update

                        this.currentScene = this.game.scene.currentScene;

                        var shouldUpdate = this.currentScene != null && this.currentScene !== undefined;
                        //let changeScene = (this.game.scene._changeScene != null || this.game.scene._changeScene !== undefined)


                        //if (changeScene)
                        (0, _PreUpdateScene2.default)(this.game.scene);
                        //this.game.scene.preUpdate();


                        if (shouldUpdate) {

                                this.entityUpdateList.beginUpdate(deltaTime);

                                var lastCameraState = this.camera._transform._isDirty;

                                (0, _UpdateScene2.default)(this.game.scene, deltaTime);
                                /*if (this.game.scene._setup)
                                {
                                    // global scene update
                                    if (this.currentScene.update !== undefined)
                                        this.currentScene.update(deltaTime);
                                } else {
                                    if (this.currentScene.loading !== undefined)
                                        this.currentScene.loading(deltaTime);
                                }*/

                                (0, _UpdateCamera2.default)(this.camera, this.canvas);

                                //this.entityUpdateList.transformUpdate(this.camera);

                                this.entityUpdateList.update(deltaTime);

                                if (lastCameraState) this.camera._transform._isDirty = false;
                        }
                }
        }, {
                key: "render",
                value: function render(deltaTime) {

                        (0, _BeginDrawRender2.default)(this.renderer);

                        if (this.currentScene !== null || this.currentScene !== undefined) {
                                // Scenes
                                (0, _DrawRender2.default)(this.renderer, this.camera, deltaTime);

                                // User Interface
                                (0, _DrawUI2.default)(this.system.ui, this.game.scene);
                        }

                        (0, _EndDrawRender2.default)(this.system.render);

                        // Transition
                        this.renderer.context.setTransform(1, 0, 0, 1, 0, 0);

                        (0, _DrawTransition2.default)(this.system.transition, this.renderer.canvas, this.renderer.context);

                        // Debug
                        if (this.system.ui.debug !== null && this.system.ui.debug !== undefined) {
                                this.system.ui.debug.test();
                        }

                        if (this.renderer.doubleBuffer) {
                                this.renderer._domContext.drawImage(this.renderer.canvas, 0, 0);
                        }
                }
        }]);
        return GameLoop;
}();

exports.default = GameLoop;


_System2.default.register('GameLoop', GameLoop, 'loop', function () {
        this.updateStep.init(this);
        this.entityUpdateList = this.game.system.entityList;
        this.camera = this.system.camera;
        this.canvas = this.system.render.canvas;
        this.renderer = this.system.render;
});

/***/ }),

/***/ "./core/index.js":
/*!***********************!*\
  !*** ./core/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Config: __webpack_require__(/*! ./Config */ "./core/Config.js"),
    System: __webpack_require__(/*! ./system/System */ "./core/system/System.js"),
    SceneSystem: __webpack_require__(/*! ./system/SceneSystem */ "./core/system/SceneSystem.js"),
    GameLoop: __webpack_require__(/*! ./GameLoop */ "./core/GameLoop.js")
};

/***/ }),

/***/ "./core/system/SceneSystem.js":
/*!************************************!*\
  !*** ./core/system/SceneSystem.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SceneSystem = ['Cache', 'Loader', 'EntityFactory', 'EntityHierarchy', 'Camera', 'SceneManager', 'UserInterface', 'Transition', 'EventManager', 'PoolManager'];

(0, _freeze2.default)(SceneSystem);

exports.default = SceneSystem;

/***/ }),

/***/ "./core/system/System.js":
/*!*******************************!*\
  !*** ./core/system/System.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameSystems = undefined;

var _SceneSystem = __webpack_require__(/*! ./SceneSystem */ "./core/system/SceneSystem.js");

var _SceneSystem2 = _interopRequireDefault(_SceneSystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GameSystems = exports.GameSystems = {};

var System = {

    /** @inner 
     * Register a game system.
     * 
     * @param {String} key Long description of system
     * @param {Class} system The system class
     * @param {String} systemName The short description name of the system
     * @param {Function} [initFunc] [optional] Initialize function for the system.
     */
    register: function register(key, system, systemName, initFunc) {
        GameSystems[key] = {
            name: systemName,
            system: system,
            init: initFunc
        };
    }
};

exports.default = System;

/***/ }),

/***/ "./core/system/components/InitializeSystems.js":
/*!*****************************************************!*\
  !*** ./core/system/components/InitializeSystems.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InitializeSystems;

var _System = __webpack_require__(/*! ../System */ "./core/system/System.js");

var _RequestDepthSorting = __webpack_require__(/*! ../../../render/components/RequestDepthSorting */ "./render/components/RequestDepthSorting.js");

var _RequestDepthSorting2 = _interopRequireDefault(_RequestDepthSorting);

var _RequestRenderableLayerIDChange = __webpack_require__(/*! ../../../render/components/RequestRenderableLayerIDChange */ "./render/components/RequestRenderableLayerIDChange.js");

var _RequestRenderableLayerIDChange2 = _interopRequireDefault(_RequestRenderableLayerIDChange);

var _RegisterFocusChangeEvent = __webpack_require__(/*! ../../../event/engine/RegisterFocusChangeEvent */ "./event/engine/RegisterFocusChangeEvent.js");

var _RegisterFocusChangeEvent2 = _interopRequireDefault(_RegisterFocusChangeEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InitializeSystems(game, render) {

    var systems = {};

    // register all game systems
    for (var property in _System.GameSystems) {

        var registered = _System.GameSystems[property];
        systems[registered.name] = new registered.system(game, systems);
    }

    // set core system to game class
    game.system = systems;
    game.scene = systems.scene;
    game.render = render;
    game.events = systems.events;
    systems.render = render;

    // initialize systems
    for (var _property in _System.GameSystems) {

        var _registered = _System.GameSystems[_property];
        var InitializeSystemFunction = _registered.init;

        if (InitializeSystemFunction === undefined) continue;

        InitializeSystemFunction.call(systems[_registered.name]);
    }

    // register engine events

    // window and document blur
    (0, _RegisterFocusChangeEvent2.default)(game.events);

    // render events callbacks
    systems.events.subscribe('__render_depthsorting', _RequestDepthSorting2.default, render);
    systems.events.subscribe('__render_layeridchange', _RequestRenderableLayerIDChange2.default, render);

    return systems;
}

/***/ }),

/***/ "./core/system/components/InjectSystems.js":
/*!*************************************************!*\
  !*** ./core/system/components/InjectSystems.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InjectSystems;

var _System = __webpack_require__(/*! ../System */ "./core/system/System.js");

var _SceneSystem = __webpack_require__(/*! ../SceneSystem */ "./core/system/SceneSystem.js");

var _SceneSystem2 = _interopRequireDefault(_SceneSystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InjectSystems(game, scene) {

    scene.game = game;

    for (var property in _SceneSystem2.default) {

        var sys = _System.GameSystems[_SceneSystem2.default[property]];

        if (sys !== undefined) scene[sys.name] = game.system[sys.name];
    }

    // Special injections, input and sound:

    scene['key'] = game.input.keyboard;
    scene['mouse'] = game.input.mouse;
    scene['audio'] = game.audio;

    /*for (let property in gameSystems) {
          let sys = gameSystems[property];
        scene[sys.name] = property[sys.system];
    }*/
}

/***/ }),

/***/ "./core/system/components/UnjectSystems.js":
/*!*************************************************!*\
  !*** ./core/system/components/UnjectSystems.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = UnjectSystems;

var _System = __webpack_require__(/*! ../System */ "./core/system/System.js");

var _SceneSystem = __webpack_require__(/*! ../SceneSystem */ "./core/system/SceneSystem.js");

var _SceneSystem2 = _interopRequireDefault(_SceneSystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UnjectSystems(scene) {

        for (var property in _SceneSystem2.default) {

                var sys = _System.GameSystems[_SceneSystem2.default[property]];

                if (sys !== undefined) {
                        delete scene[sys.name]; // = undefined;
                }
        }

        delete scene['key'];
        delete scene['mouse'];
        delete scene['audio'];
}

/***/ }),

/***/ "./dom/AppendDOM.js":
/*!**************************!*\
  !*** ./dom/AppendDOM.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = AppendDOM;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AppendDOM(element, parent, overflowHidden) {

    if (overflowHidden === undefined) overflowHidden = true;

    var appendTo = void 0;
    var target = null;

    if (parent) {
        if (typeof parent === 'string') {
            target = document.getElementById(parent);
        } else if ((typeof parent === 'undefined' ? 'undefined' : (0, _typeof3.default)(parent)) === 'object' && parent.nodeType === 1) {
            target = parent;
        }
    }

    // Fallback, covers an invalid ID and a non HTMLelement object
    if (!target) {
        target = document.body;
    }

    if (overflowHidden && target.style) {
        target.style.overflow = 'hidden';
    }

    target.appendChild(element);

    return element;
}

/***/ }),

/***/ "./dom/RequestAnimationFrame.js":
/*!**************************************!*\
  !*** ./dom/RequestAnimationFrame.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestAnimationFrame = function () {
        function RequestAnimationFrame(timeoutMode) {
                (0, _classCallCheck3.default)(this, RequestAnimationFrame);


                if (timeoutMode === undefined) {
                        timeoutMode = false;
                }

                this.isRunning = false;
                this._isTimeOutMode = timeoutMode;

                this.thick = 0;
                this.lastTime = 0;

                //callbacks

                // game loop
                this.loopCallback = null;

                // timeout/animation callback 
                this.timeOutIdentifier = null;

                /*let vendors = [
                    'ms',
                    'moz',
                    'webkit',
                    'o'
                ];
                  for (let x = 0; x < vendors.length && !window.requestAnimationFrame; x++)
                {
                    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                    window.cancelAnimationFrame  = window[vendors[x] + 'CancelAnimationFrame'];
                }*/

                var self = this;

                this.updateRequestAnimationFrame = function (timeStamp) {

                        self.lastTime = self.thick;
                        self.thick = timeStamp;
                        //this.game.update(time);
                        self.loopCallback(timeStamp);

                        self.timeOutIdentifier = window.requestAnimationFrame(self.updateRequestAnimationFrame);
                };

                this.updateTimeout = function () {

                        var dateTime = Date.now();
                        var delay = Math.max(16 + self.lastTime - dateTime, 0);
                        self.lastTime = self.thick;
                        self.thick = delay;
                        self.loopCallback(delay);
                        //this.game.update(Date.now());
                        self.timeOutIdentifier = window.setTimeout(self.updateTimeout, delay);
                };
        }

        (0, _createClass3.default)(RequestAnimationFrame, [{
                key: "start",
                value: function start(loopCallback) {

                        if (this.isRunning) return;

                        this.isRunning = true;

                        this.loopCallback = loopCallback;

                        if (!window.requestAnimationFrame || this._isTimeOutMode) {
                                this._isTimeOutMode = true;
                                this.timeOutIdentifier = window.setTimeout(this.updateTimeout, 0);
                        } else {
                                this._isTimeOutMode = false;
                                this.timeOutIdentifier = window.requestAnimationFrame(this.updateRequestAnimationFrame);
                        }
                }
        }, {
                key: "stop",
                value: function stop() {

                        if (this._isTimeOutMode) {
                                clearTimeout(this.timeOutIdentifier);
                        } else {
                                window.cancelAnimationFrame(this.timeOutIdentifier);
                        }

                        this.isRunning = false;
                }
        }, {
                key: "destroy",
                value: function destroy() {
                        this.stop();
                        this.loopingCallback = null;
                }
        }]);
        return RequestAnimationFrame;
}();

exports.default = RequestAnimationFrame;

/***/ }),

/***/ "./entities/Entity.js":
/*!****************************!*\
  !*** ./entities/Entity.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
*
* Base class for Entities
*
*/
var Entity = function () {
    function Entity(name, game) {
        (0, _classCallCheck3.default)(this, Entity);

        this._name = name || 'New Entity';
        this._active = true;
        this._pool = null;
        // this._priority = 0;
        this.game = game || undefined;
        this.persistent = false;
    }

    /*set priority(value) {
        this._priority = value;
    }
      get priority() {
        return this._priority;
    }*/

    (0, _createClass3.default)(Entity, [{
        key: 'destroy',
        value: function destroy() {}
    }, {
        key: 'active',
        get: function get() {
            return this._active;
        },
        set: function set(value) {
            value = !!value;

            if (value !== this._active) this._active = value;

            return this._active;
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        },
        set: function set(value) {
            value = !!value;

            if (value !== this._name) this._name = value;

            return this._name;
        }
    }]);
    return Entity;
}();

exports.default = Entity;
;

/***/ }),

/***/ "./entities/EntityFactory.js":
/*!***********************************!*\
  !*** ./entities/EntityFactory.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _System = __webpack_require__(/*! ../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _SceneEntity = __webpack_require__(/*! ./SceneEntity */ "./entities/SceneEntity.js");

var _SceneEntity2 = _interopRequireDefault(_SceneEntity);

var _InitializeEntity = __webpack_require__(/*! ./hierarchy/InitializeEntity */ "./entities/hierarchy/InitializeEntity.js");

var _InitializeEntity2 = _interopRequireDefault(_InitializeEntity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EntityFactory = function () {
    function EntityFactory(game) {
        (0, _classCallCheck3.default)(this, EntityFactory);

        this.game = game;
        this.scene = null;
        this.entityList = null;
    }

    (0, _createClass3.default)(EntityFactory, [{
        key: "empty",
        value: function empty(entityName) {
            entityName = entityName || 'Scene Entity ' + this.entityList.length;
            return new _SceneEntity2.default(entityName, this.game);
        }
    }, {
        key: "sprite",
        value: function sprite(tag, entityName, config) {

            var entity = this.empty(entityName);
            var spr = entity.modules.attach.sprite(tag, config.x, config.y, config.width, config.height);

            if (this.scene.current_scene !== null) {
                (0, _InitializeEntity2.default)(entity, this.game);
            }

            return entity;
        }
    }, {
        key: "tilemap",
        value: function tilemap(tag, entityName) {
            var entity = this.empty(entityName);
            entity.modules.attach.tilemap(tag);

            if (this.scene.current_scene !== null) {
                (0, _InitializeEntity2.default)(entity, this.game);
            }

            return entity;
        }
    }, {
        key: "spritesheet",
        value: function spritesheet(tag, entityName) {
            var entity = this.empty(entityName);
            entity.modules.attach.spritesheet(tag);

            if (this.scene.current_scene !== null) {
                (0, _InitializeEntity2.default)(entity, this.game);
            }

            return entity;
        }
    }, {
        key: "rectangle",
        value: function rectangle(width, height, entityName) {
            var entity = this.empty(entityName);
            entity.modules.attach.rectangle(width, height);

            if (this.scene.current_scene !== null) {
                (0, _InitializeEntity2.default)(entity, this.game);
            }

            return entity;
        }
    }]);
    return EntityFactory;
}();

exports.default = EntityFactory;


_System2.default.register('EntityFactory', EntityFactory, 'create', function () {
    this.entityList = this.game.system.entityList;
    this.scene = this.game.scene;
});

/***/ }),

/***/ "./entities/EntityUpdateList.js":
/*!**************************************!*\
  !*** ./entities/EntityUpdateList.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _System = __webpack_require__(/*! ../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _List = __webpack_require__(/*! ../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _UpdateTransform = __webpack_require__(/*! ../transform/UpdateTransform */ "./transform/UpdateTransform.js");

var _UpdateTransform2 = _interopRequireDefault(_UpdateTransform);

var _ModulesUpdater = __webpack_require__(/*! ../modules/components/ModulesUpdater */ "./modules/components/ModulesUpdater.js");

var _ModulesUpdater2 = _interopRequireDefault(_ModulesUpdater);

var _DestroyEntity = __webpack_require__(/*! ./hierarchy/DestroyEntity */ "./entities/hierarchy/DestroyEntity.js");

var _DestroyEntity2 = _interopRequireDefault(_DestroyEntity);

var _DetachModules = __webpack_require__(/*! ../modules/components/DetachModules */ "./modules/components/DetachModules.js");

var _DetachModules2 = _interopRequireDefault(_DetachModules);

var _AttachModules = __webpack_require__(/*! ../modules/components/AttachModules */ "./modules/components/AttachModules.js");

var _AttachModules2 = _interopRequireDefault(_AttachModules);

var _PrioritySorting = __webpack_require__(/*! ./hierarchy/PrioritySorting */ "./entities/hierarchy/PrioritySorting.js");

var _PrioritySorting2 = _interopRequireDefault(_PrioritySorting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EntityUpdateList = function () {
    function EntityUpdateList(game) {
        (0, _classCallCheck3.default)(this, EntityUpdateList);

        this.game = game;
        this._instances = new _List2.default();
        this._destroyInstances = new _List2.default();
        this._removalInstances = new _List2.default();
        this._pendingInstances = new _List2.default();
        this._camera = null;
        this._requirePrioritySorting = false;
    }

    (0, _createClass3.default)(EntityUpdateList, [{
        key: "addInstance",
        value: function addInstance(instance) {
            if (this._instances.indexOf(instance) === -1 && this._pendingInstances.indexOf(instance) === -1) {
                this._pendingInstances.push(instance);
                //if (instance._priority !== 0) {
                //this._requirePrioritySorting = true;
                //}
            }
            return instance;
        }
    }, {
        key: "destroyInstance",
        value: function destroyInstance(instance) {

            if (instance === undefined) return false;

            if (this._instances.has(instance) && this._destroyInstances.indexOf(instance) === -1) {
                this._destroyInstances.push(instance);
                return true;
            }

            return false;
        }
    }, {
        key: "removeInstance",
        value: function removeInstance(instance) {

            var index = this._instances.indexOf(instance);

            if (index > -1 && this._destroyInstances.indexOf(instance) === -1 && this._removalInstances.indexOf(instance) === -1) {
                this._removalInstances.push(instance);
                return true;
                //DetachModules(instance.modules, this.game);
                //return this._instances.eraseAt(instance);
            }

            return false;
        }
    }, {
        key: "update",
        value: function update(dt) {

            var instances = this._instances;

            for (var i = 0; i < instances.size; i++) {

                var element = instances.at(i);

                if (!element.active) continue;

                (0, _UpdateTransform2.default)(element._transform, this._camera._transform);

                (0, _ModulesUpdater2.default)(element.modules, this.game);

                if (element.update !== undefined) element.update.call(element, dt); //update(dt);


                if (element._transform._isDirty) element._transform._isDirty = false;
            }
        }
    }, {
        key: "beginUpdate",
        value: function beginUpdate() {
            var destroySize = this._destroyInstances.length;
            var removalSize = this._removalInstances.length;
            var insertSize = this._pendingInstances.length;

            if (insertSize === 0 && removalSize === 0 && destroySize === 0) return;

            if (destroySize > 0) {

                for (var i = 0; i < destroySize; i++) {
                    var instance = this._destroyInstances.at(i);

                    if (instance !== undefined) {
                        (0, _DestroyEntity2.default)(instance, this.game, false);
                        instance = null;
                    }
                }

                this._instances.eraseList(this._destroyInstances, destroySize);
                this._destroyInstances.childs.length = 0;
            }

            if (removalSize > 0) {
                for (var _i = 0; _i < removalSize; _i++) {
                    var _instance = this._removalInstances.at(_i);

                    if (_instance !== undefined) {
                        (0, _DetachModules2.default)(_instance.modules, this.game);
                        this._instances.erase(_instance);
                    }
                }

                this._removalInstances.childs.length = 0;
            }

            /*let content = this._pendingInstances.content();
              for (let i = 0; i < insertSize; i++) {
                  let element = content[i];
                this._instances.push(element);
                this._pendingInstances.eraseAt(i);
            }*/

            var content = this._pendingInstances.content();

            if (insertSize !== 0) {
                for (var _i2 = 0; _i2 < insertSize; _i2++) {

                    var _instance2 = content[_i2];
                    (0, _AttachModules2.default)(_instance2.modules, this.game);
                    this._instances.push(_instance2);
                    //this._pendingInstances.eraseAt(i);
                }

                /* if (this._requirePrioritySorting) {
                     this._instances.sort(PrioritySorting);
                 }*/
                //this._instances.concat(this._pendingInstances);
                //this._pendingInstances.childs.length = 0;
                content.length = 0;
            }
        }
    }, {
        key: "length",
        get: function get() {
            return this._instances.size;
        }
    }]);
    return EntityUpdateList;
}();

exports.default = EntityUpdateList;


_System2.default.register('EntityUpdateList', EntityUpdateList, 'entityList', function () {

    this._camera = this.game.system.camera;
});

/***/ }),

/***/ "./entities/SceneEntity.js":
/*!*********************************!*\
  !*** ./entities/SceneEntity.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BoundingBox = __webpack_require__(/*! ../math/BoundingBox */ "./math/BoundingBox.js");

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

var _Transform = __webpack_require__(/*! ../transform/Transform */ "./transform/Transform.js");

var _Transform2 = _interopRequireDefault(_Transform);

var _ModuleManager = __webpack_require__(/*! ../modules/ModuleManager */ "./modules/ModuleManager.js");

var _ModuleManager2 = _interopRequireDefault(_ModuleManager);

var _Entity2 = __webpack_require__(/*! ./Entity */ "./entities/Entity.js");

var _Entity3 = _interopRequireDefault(_Entity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import EntityHierarchy from './EntityHierarchy'
var SceneEntity = function (_Entity) {
    (0, _inherits3.default)(SceneEntity, _Entity);

    function SceneEntity(name, game) {
        (0, _classCallCheck3.default)(this, SceneEntity);

        name = name || 'New SceneEntity';

        var _this = (0, _possibleConstructorReturn3.default)(this, (SceneEntity.__proto__ || (0, _getPrototypeOf2.default)(SceneEntity)).call(this, name, game || null));

        _this._transform = new _Transform2.default();
        _this._pool = null;
        _this.modules = new _ModuleManager2.default(_this);
        _this.scene = null;
        _this._pendingRemoval = false;
        return _this;
    }

    (0, _createClass3.default)(SceneEntity, [{
        key: 'back',


        /**
         * If the object is pooled, send back to his pool.
         * @returns {Boolean} True if the object was sent to pool, otherwise false.
         */
        value: function back() {
            if (this.isPooled) {

                if (this.scene !== null) {
                    this._pendingRemoval = true;
                    return this.game.system.pool.push(this);
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }, {
        key: 'isPooled',
        get: function get() {
            return this._pool !== null;
        }
    }, {
        key: 'x',
        set: function set(value) {
            this._transform.position.x = value;
            this._transform.markDirty();
        },
        get: function get() {
            return this._transform.position.x;
        }
    }, {
        key: 'y',
        set: function set(value) {
            this._transform.position.y = value;
            this._transform.markDirty();
        },
        get: function get() {
            return this._transform.position.y;
        }
    }, {
        key: 'position',
        get: function get() {
            return this._transform.position;
        },
        set: function set(value) {
            this._transform.position = value;this._transform._isDirty = true;
        }
    }, {
        key: 'origin',
        get: function get() {
            return this._transform.origin;
        },
        set: function set(value) {
            this._transform.origin = value;this._transform._isDirty = true;
        }
    }, {
        key: 'origin.x',
        set: function set(value) {
            this._transform.origin.x = value;this._transform._isDirty = true;
        }
    }, {
        key: 'origin.y',
        set: function set(value) {
            this._transform.origin.y = value;this._transform._isDirty = true;
        }
    }, {
        key: 'scale',
        get: function get() {
            return this._transform.scale;
        },
        set: function set(value) {
            this._transform.scale = value;this._transform._isDirty = true;
        }
    }, {
        key: 'scale.x',
        set: function set(value) {
            this._transform.scale.x = value;this._transform._isDirty = true;
        }
    }, {
        key: 'scale.y',
        set: function set(value) {
            this._transform.scale.y = value;this._transform._isDirty = true;
        }
    }, {
        key: 'angle',
        get: function get() {
            return this._transform.angle;
        },
        set: function set(value) {
            this._transform.angle = value;this._transform._isDirty = true;
        }
    }]);
    return SceneEntity;
}(_Entity3.default //Hierarchy
);

exports.default = SceneEntity;

/***/ }),

/***/ "./entities/hierarchy/ClearEntities.js":
/*!*********************************************!*\
  !*** ./entities/hierarchy/ClearEntities.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ClearEntities;

var _ClearModules = __webpack_require__(/*! ../../modules/components/ClearModules */ "./modules/components/ClearModules.js");

var _ClearModules2 = _interopRequireDefault(_ClearModules);

var _DestroyEntity = __webpack_require__(/*! ./DestroyEntity */ "./entities/hierarchy/DestroyEntity.js");

var _DestroyEntity2 = _interopRequireDefault(_DestroyEntity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ClearEntities(entityList, game) {

    for (var i = 0; i < entityList._instances.length; i++) {

        var instance = entityList._instances.at(i);

        if (instance.isPooled === true) {
            game.system.pool.push(instance);
        } else {
            (0, _DestroyEntity2.default)(instance, game, true);
        }
    }

    for (var _i = 0; _i < entityList._pendingInstances.length; _i++) {

        var _instance = entityList._instances.at(_i);

        if (_instance.isPooled === true) {
            game.system.pool.push(_instance);
        } else {
            (0, _DestroyEntity2.default)(_instance, game, true);
        }
    }

    entityList._pendingInstances.destroy(); //.length = 0;
    entityList._destroyInstances.destroy(); //.length = 0;
    entityList._instances.destroy(); //.length = 0;
}

/***/ }),

/***/ "./entities/hierarchy/CreateEntityFrom.js":
/*!************************************************!*\
  !*** ./entities/hierarchy/CreateEntityFrom.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = CreateEntityFrom;

var _SceneEntity = __webpack_require__(/*! ../SceneEntity */ "./entities/SceneEntity.js");

var _SceneEntity2 = _interopRequireDefault(_SceneEntity);

var _Extend = __webpack_require__(/*! ../../utils/object/Extend */ "./utils/object/Extend.js");

var _Extend2 = _interopRequireDefault(_Extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CreateEntityFrom(value, game) {

    var entity = void 0;

    if (value instanceof _SceneEntity2.default) {

        entity = value;
    } else if ((typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === _SceneEntity2.default) {

        entity = new value(value.name, game);
    } else if ((typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === 'object') {

        var placeholder = new _SceneEntity2.default(value.name || undefined, game);
        entity = (0, _Extend2.default)(true, placeholder, value);
    } else if (typeof value === 'function') {
        var entityHolder = new _SceneEntity2.default(value.name, game);
        var _placeholder = new value();

        entity = (0, _Extend2.default)(true, entityHolder, _placeholder);
    }

    return entity;
}

/***/ }),

/***/ "./entities/hierarchy/DestroyEntity.js":
/*!*********************************************!*\
  !*** ./entities/hierarchy/DestroyEntity.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DestroyEntity;

var _ClearModules = __webpack_require__(/*! ../../modules/components/ClearModules */ "./modules/components/ClearModules.js");

var _ClearModules2 = _interopRequireDefault(_ClearModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DestroyEntity(instance, game, verifyPersistance) {

    if (instance === undefined) return;

    if (verifyPersistance === undefined) verifyPersistance = false;

    if (instance['destroy'] !== undefined && instance['destroy'] !== null) {
        instance.destroy.call(instance);
    }

    var completelyDestroy = true;

    if (verifyPersistance === true) {
        completelyDestroy = instance.persistent === false;
    }

    if (completelyDestroy === false) return;

    var pool = void 0;

    if (instance.isPooled === true) {
        pool = game.system.pool.get(instance._pool);
    }

    if (pool !== undefined) {
        pool.remove(instance);
    }

    (0, _ClearModules2.default)(instance.modules, game);
    instance._transform = null;
    instance.modules = null;
    instance.scene = null;
    instance = null;
}

/***/ }),

/***/ "./entities/hierarchy/EntityHierarchy.js":
/*!***********************************************!*\
  !*** ./entities/hierarchy/EntityHierarchy.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Entity = __webpack_require__(/*! ../Entity */ "./entities/Entity.js");

var _Entity2 = _interopRequireDefault(_Entity);

var _System = __webpack_require__(/*! ../../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _CreateEntityFrom = __webpack_require__(/*! ./CreateEntityFrom */ "./entities/hierarchy/CreateEntityFrom.js");

var _CreateEntityFrom2 = _interopRequireDefault(_CreateEntityFrom);

var _InitializeEntity = __webpack_require__(/*! ./InitializeEntity */ "./entities/hierarchy/InitializeEntity.js");

var _InitializeEntity2 = _interopRequireDefault(_InitializeEntity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EntityHierarchy = function () {
    function EntityHierarchy(game) {
        (0, _classCallCheck3.default)(this, EntityHierarchy);

        this.game = game;
        this._entityList = null;
    }

    (0, _createClass3.default)(EntityHierarchy, [{
        key: "find",
        value: function find(name) {

            var instances = [];
            var count = this._entityList._instances.size;

            for (var i = 0; i < count; i++) {
                if (this._entityList[i].name !== name) continue;

                instances.push(this._entityList[i]);
            }

            return instances;
        }
    }, {
        key: "findFirst",
        value: function findFirst(name) {
            this._entityList.each(function (entity) {

                if (entity.name === name) return entity;
            });

            return null;
        }
    }, {
        key: "findLast",
        value: function findLast(name) {

            var count = this._entityList._instances.size;

            for (var i = count - 1; i >= 0; i--) {
                if (this._entityList[i].name === name) return this._entityList[i];
            }

            return null;
        }
    }, {
        key: "get",
        value: function get(index) {
            return this._entityList._instances.at(index) || null;
        }
    }, {
        key: "create",
        value: function create(entityBase, count) {

            var entity = (0, _CreateEntityFrom2.default)(entityBase, this.game);
            (0, _InitializeEntity2.default)(entity, this.game);
            return entity;
        }
    }, {
        key: "destroy",
        value: function destroy(entity) {
            return this._entityList.destroyInstance(entity);
        }
    }, {
        key: "destroyAt",
        value: function destroyAt(index) {
            /// TODO
        }
    }, {
        key: "clear",
        value: function clear() {
            /// TODO
        }
    }, {
        key: "count",
        get: function get() {
            return this._entityList._instances.size;
        }
    }]);
    return EntityHierarchy;
}();

exports.default = EntityHierarchy;


_System2.default.register('EntityHierarchy', EntityHierarchy, 'entity', function () {
    this._entityList = this.game.system.entityList;
});

/***/ }),

/***/ "./entities/hierarchy/InitializeEntity.js":
/*!************************************************!*\
  !*** ./entities/hierarchy/InitializeEntity.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InitializeEntity;
function InitializeEntity(entity, game) {

    // inject scene
    entity.scene = game.scene.currentScene;

    if (entity['start'] !== undefined && entity['start'] !== null) {
        entity.start.call(entity);
    }

    game.system.entityList.addInstance(entity);

    return entity;
}

/***/ }),

/***/ "./entities/hierarchy/PrioritySorting.js":
/*!***********************************************!*\
  !*** ./entities/hierarchy/PrioritySorting.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = PrioritySorting;
function PrioritySorting(a, b) {
    return a._priority < b._priority;
}

/***/ }),

/***/ "./entities/index.js":
/*!***************************!*\
  !*** ./entities/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Entity: __webpack_require__(/*! ./Entity */ "./entities/Entity.js"),
    SceneEntity: __webpack_require__(/*! ./SceneEntity */ "./entities/SceneEntity.js"),
    EntityUpdateList: __webpack_require__(/*! ./EntityUpdateList */ "./entities/EntityUpdateList.js"),
    EntityFactory: __webpack_require__(/*! ./EntityFactory */ "./entities/EntityFactory.js"),
    Hierarchy: __webpack_require__(/*! ./hierarchy/EntityHierarchy */ "./entities/hierarchy/EntityHierarchy.js")
};

/***/ }),

/***/ "./entities/pool/Pool.js":
/*!*******************************!*\
  !*** ./entities/pool/Pool.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _List = __webpack_require__(/*! ../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _CreateEntityFrom = __webpack_require__(/*! ../hierarchy/CreateEntityFrom */ "./entities/hierarchy/CreateEntityFrom.js");

var _CreateEntityFrom2 = _interopRequireDefault(_CreateEntityFrom);

var _PreparePooledToGame = __webpack_require__(/*! ./PreparePooledToGame */ "./entities/pool/PreparePooledToGame.js");

var _PreparePooledToGame2 = _interopRequireDefault(_PreparePooledToGame);

var _RemovePooledFromGame = __webpack_require__(/*! ./RemovePooledFromGame */ "./entities/pool/RemovePooledFromGame.js");

var _RemovePooledFromGame2 = _interopRequireDefault(_RemovePooledFromGame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pool = function () {
    function Pool(game, name, baseEntity, count) {
        (0, _classCallCheck3.default)(this, Pool);


        this.game = game;
        this._baseEntity = baseEntity;
        this.name = name || baseEntity.name || 'Entity Pool';

        this._pool = new _List2.default();
        this._pooledEntities = new _List2.default();

        if (count === undefined) count = 1;

        this.add(count);
    }

    (0, _createClass3.default)(Pool, [{
        key: "add",
        value: function add(count) {

            if (count === undefined) count = 1;

            for (var i = 0; i < count; i++) {

                var entity = (0, _CreateEntityFrom2.default)(this._baseEntity, this.game);

                if (entity['start'] !== undefined && entity['start'] !== null) {
                    entity.start.call(entity);
                }

                this._pool.push(entity);
            }

            return this;
        }
    }, {
        key: "pull",
        value: function pull() {
            if (this._pool.size === 0) {
                console.warn("Pool.pull: Could not pull entity. The pool is empty");
                return null;
            }

            var pooled = this._pool.popFront();

            if (pooled !== undefined && pooled !== null) {

                if ((0, _PreparePooledToGame2.default)(this, pooled, this.game) === true) {
                    this._pooledEntities.push(pooled);
                    return pooled;
                } else {
                    this._pool.push(pooled);
                }
            } else {
                console.warn("Pool.pull: Could not pull entity. The pool is empty");
            }

            return null;
        }
    }, {
        key: "push",
        value: function push(entity) {
            if (entity === undefined) return false;

            //if (entity instanceof this._mergedBaseEntity) {

            var index = this._pooledEntities.indexOf(entity);

            if (index !== -1) {

                (0, _RemovePooledFromGame2.default)(entity, this.game);
                this._pooledEntities.eraseAt(index);
                this._pool.push(entity);
                return true;
            } else {
                return false;
            }

            /*} else {
                console.warn("Pool.push: Could not push the entity back to the pool. The entity is not entity of type: " + this._baseEntity.name);
                return false;
            }*/
        }
    }, {
        key: "remove",
        value: function remove(entity) {
            var index = this._pooledEntities.indexOf(entity);

            if (index > -1) {
                this._pooledEntities.eraseAt(index);
                return true;
            }

            return false;
        }
    }, {
        key: "clear",
        value: function clear() {
            this._pool.clear();
            this._pooledEntities.clear();
            return this;
        }
    }, {
        key: "backAll",
        value: function backAll() {
            for (var i = 0; i < this._pooledEntities.length; i++) {

                var entity = this._pooledEntities.at(i);
                RemoveEntityFromGame(entity, this.game);
                this._pool.push(entity);
            }

            this._pooledEntities.childs.length = 0;
            return this;
        }
    }, {
        key: "length",
        get: function get() {
            return this._pool.size;
        }
    }]);
    return Pool;
}();

exports.default = Pool;

/***/ }),

/***/ "./entities/pool/PoolManager.js":
/*!**************************************!*\
  !*** ./entities/pool/PoolManager.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Map = __webpack_require__(/*! ../../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _Pool = __webpack_require__(/*! ./Pool */ "./entities/pool/Pool.js");

var _Pool2 = _interopRequireDefault(_Pool);

var _System = __webpack_require__(/*! ../../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PoolManager = function () {
  function PoolManager(game) {
    (0, _classCallCheck3.default)(this, PoolManager);


    this._poolsMap = new _Map2.default();
    this.game = game;
  }

  (0, _createClass3.default)(PoolManager, [{
    key: "has",
    value: function has(poolName) {
      return this._poolsMap.has(poolName);
    }
  }, {
    key: "get",
    value: function get(pool) {
      return this._poolsMap.get(pool);
    }

    // create objects pool

  }, {
    key: "create",
    value: function create(poolName, entityBase, size) {

      if (entityBase === undefined || entityBase === null) return null;
      if (size === undefined) size = 1;

      if (this._poolsMap.has(poolName)) {
        console.warn('PoolManager.create: Could not create pool named \'' + poolName + '\'. There is already a pool registered with this name.');
        return null;
      }

      var pool = new _Pool2.default(this.game, poolName, entityBase, size);
      this._poolsMap.insert(poolName, pool);

      return pool;
    }

    // get a obj

  }, {
    key: "pull",
    value: function pull(poolName) {

      var pool = this._poolsMap.get(poolName);

      if (pool !== null && pool !== undefined) {
        return pool.pull();
      } else {
        console.warn("PoolManager.pull: The specified pool container don't exists: " + poolName);
        return null;
      }
    }
  }, {
    key: "push",
    value: function push(entity) {

      if (entity.pool !== null) {

        var pool = this._poolsMap.get(entity._pool);
        if (pool !== null && pool !== undefined) {
          pool.push(entity);
          return true;
        }
      }

      return false;
    }
  }, {
    key: "clearAll",
    value: function clearAll() {

      this._poolsMap.each(function (key, value) {
        value.clear();
      });

      return this;
    }
  }]);
  return PoolManager;
}();

exports.default = PoolManager;


_System2.default.register('PoolManager', PoolManager, 'pool');

/***/ }),

/***/ "./entities/pool/PreparePooledToGame.js":
/*!**********************************************!*\
  !*** ./entities/pool/PreparePooledToGame.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = PreparePooledToGame;
function PreparePooledToGame(pool, entity, game) {
    if (game.scene.currentScene === null || game.scene.currentScene === undefined) {
        console.warn("Pool.pull: Could not pull entity. There is no active scene.");
        return false;
    }

    entity.active = true;
    entity._pool = pool.name;
    entity.scene = game.scene.currentScene;
    game.system.entityList.addInstance(entity);
    return true;
}

/***/ }),

/***/ "./entities/pool/RemovePooledFromGame.js":
/*!***********************************************!*\
  !*** ./entities/pool/RemovePooledFromGame.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RemovePooledFromGame;
function RemovePooledFromGame(entity, game) {

    game.system.entityList.removeInstance(entity);
    entity.active = false;
    entity._pool = null;
    entity.scene = null;
}

/***/ }),

/***/ "./entities/pool/index.js":
/*!********************************!*\
  !*** ./entities/pool/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Pool: __webpack_require__(/*! ./Pool */ "./entities/pool/Pool.js"),
    PoolManager: __webpack_require__(/*! ./PoolManager */ "./entities/pool/PoolManager.js")
};

/***/ }),

/***/ "./event/EventManager.js":
/*!*******************************!*\
  !*** ./event/EventManager.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _Signal = __webpack_require__(/*! ./Signal */ "./event/Signal.js");

var _Signal2 = _interopRequireDefault(_Signal);

var _Validate = __webpack_require__(/*! ../utils/Validate */ "./utils/Validate.js");

var _Validate2 = _interopRequireDefault(_Validate);

var _GameEvents = __webpack_require__(/*! ./GameEvents */ "./event/GameEvents.js");

var _GameEvents2 = _interopRequireDefault(_GameEvents);

var _System = __webpack_require__(/*! ../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventManager = function () {
    function EventManager() {
        (0, _classCallCheck3.default)(this, EventManager);

        this._signalsMap = new _Map2.default();
    }

    (0, _createClass3.default)(EventManager, [{
        key: 'create',
        value: function create(eventName) {

            var has = this._signalsMap.get(eventName);

            if (has !== undefined && has != null) return has;

            var signal = new _Signal2.default();

            this._signalsMap.insert(eventName, signal);

            return signal;
        }
    }, {
        key: 'subscribe',
        value: function subscribe(eventName, delegate, context, priority) {

            var signal = this._signalsMap.get(eventName);

            if (signal === undefined || signal === null) {
                console.warn("EventManager.subscribe: There is no registered event called \'" + eventName + '\'.');
                return this;
            }

            if (!_Validate2.default.isFunction(delegate)) {
                console.warn("EventManager.subscribe: The variable is not a function.");
                return this;
            }

            signal.subscribe(delegate, context, priority);

            return this;
        }
    }, {
        key: 'subscribeOnce',
        value: function subscribeOnce(eventName, delegate, context, priority) {

            var signal = this._signalsMap.get(eventName);

            if (signal === undefined || signal === null) {
                console.warn("EventManager.subscribeOnce: There is no registered event called \'" + eventName + '\'.');
                return this;
            }

            if (!_Validate2.default.isFunction(delegate)) {
                console.warn("EventManager.subscribeOnce: The variable \'" + eventName + "\' is not a function.");
                return this;
            }

            signal.subscribeOnce(delegate, context, priority);

            return this;
        }

        /**
        * Dispatch a event to subscribed Signal
        * @param {String} eventName The subscribed Signal name.
        * @param {...*} [params] Parameters that should be passed to each handler.
        */

    }, {
        key: 'dispatch',
        value: function dispatch(eventName) {

            var signal = this._signalsMap.get(eventName);

            if (signal === undefined || signal === null) {
                //console.warn("EventManager.dispatch: There is no registered event called \'" + eventName + '\'.');
                return this;
            }

            var args = arguments.length > 1 ? [arguments[1]] : Array.apply(null, arguments);

            signal.dispatch(args);

            return this;
        }
    }, {
        key: 'has',
        value: function has(eventName) {
            return this._signalsMap.has(eventName);
        }
    }]);
    return EventManager;
}();

exports.default = EventManager;


function BulkEventCreation(manager, events) {

    for (var i = 0; i < events.length; i++) {
        manager.create(events[i]);
    }
}

_System2.default.register('EventManager', EventManager, 'events', function () {
    BulkEventCreation(this, _GameEvents2.default);
});

/***/ }),

/***/ "./event/GameEvents.js":
/*!*****************************!*\
  !*** ./event/GameEvents.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// list of events
var GameEvents = ['__render_depthsorting', '__render_layeridchange', 'asset_complete', 'transition_pause_end', 'transition_end',
// window events
'hidden', 'visible', 'focus', 'blur'];

(0, _freeze2.default)(GameEvents);

exports.default = GameEvents;

/***/ }),

/***/ "./event/Signal.js":
/*!*************************!*\
  !*** ./event/Signal.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _List = __webpack_require__(/*! ../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _SignalBinding = __webpack_require__(/*! ./SignalBinding */ "./event/SignalBinding.js");

var _SignalBinding2 = _interopRequireDefault(_SignalBinding);

var _IndexOfListener = __webpack_require__(/*! ./components/IndexOfListener */ "./event/components/IndexOfListener.js");

var _IndexOfListener2 = _interopRequireDefault(_IndexOfListener);

var _ValidateListener = __webpack_require__(/*! ./components/ValidateListener */ "./event/components/ValidateListener.js");

var _ValidateListener2 = _interopRequireDefault(_ValidateListener);

var _RegisterListener = __webpack_require__(/*! ./components/RegisterListener */ "./event/components/RegisterListener.js");

var _RegisterListener2 = _interopRequireDefault(_RegisterListener);

var _Validate = __webpack_require__(/*! ../utils/Validate */ "./utils/Validate.js");

var _Validate2 = _interopRequireDefault(_Validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Based on https://github.com/millermedeiros/js-signals
/**
* Custom event broadcaster
* Inspired by Robert Penner's AS3 Signals.
* @name Signal
* @author Miller Medeiros
* @class
*/
/** @license
 * JS Signals <http://millermedeiros.github.com/js-signals/>
 * Released under the MIT license
 * Author: Miller Medeiros
 * Version: ::VERSION_NUMBER:: - Build: ::BUILD_NUMBER:: (::BUILD_DATE::)
*/

var Signal = function () {

    /**
     * @constructor
     */
    function Signal() {
        (0, _classCallCheck3.default)(this, Signal);

        this._bindings = new _List2.default();
        this.active = true;
        this._shouldPropagate = true;
    }

    (0, _createClass3.default)(Signal, [{
        key: 'has',


        /**
         * Check if listener was attached to Signal.
         * @param {Function} listener The listener
         * @param {Object} [context] Context
         * @return {boolean} if Signal has the specified listener.
         */
        value: function has(listener, context) {
            return (0, _IndexOfListener2.default)(this, listener, context) !== -1;
        }

        /**
         * Add a listener to the signal.
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {Signal} return this signal.
         */

    }, {
        key: 'subscribe',
        value: function subscribe(listener, context, priority) {
            (0, _ValidateListener2.default)(listener, 'subscribe');
            (0, _RegisterListener2.default)(this, listener, context, priority, false);
            return this;
        }
    }, {
        key: 'subscribeOnce',
        value: function subscribeOnce(listener, context, priority) {
            (0, _ValidateListener2.default)(listener, 'subscribeOnce');
            (0, _RegisterListener2.default)(this, listener, context, priority, true);
            return this;
        }

        /**
         * Remove a single listener from the dispatch queue.
         * @param {Function} listener Handler function that should be removed.
         * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
         * @return {Function} Listener handler function.
         */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe(listener, context) {
            (0, _ValidateListener2.default)(listener, 'unsubscribe');

            var i = (0, _IndexOfListener2.default)(this, listener, context);
            if (i !== -1) {
                this._bindings.at(i)._destroy();
                this._bindings.eraseAt(i);
            }

            return listener;
        }
    }, {
        key: 'unsubscribeAll',
        value: function unsubscribeAll() {}

        /**
        * Dispatch/Broadcast Signal to all listeners added to the queue.
        * @param {...*} [params] Parameters that should be passed to each handler.
        */

    }, {
        key: 'dispatch',
        value: function dispatch(params) {
            if (!this.active) return;

            var size = this._bindings.length;

            if (!size) return;

            var paramsSize = arguments.length;

            if (paramsSize > 1) {
                params = Array.prototype.slice.call(arguments);
            }

            var binds = this._bindings.childs.slice();

            do {
                size--;
            } while (binds[size] && this._shouldPropagate && binds[size].execute(params) !== false);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.unsubscribeAll();
            delete this._bindings;
        }
    }, {
        key: 'propagate',
        set: function set(value) {
            this._shouldPropagate = value;
        },
        get: function get() {
            return this._shouldPropagate;
        }
    }, {
        key: 'count',
        get: function get() {
            return this._bindings.size;
        }
    }]);
    return Signal;
}();

exports.default = Signal;

/***/ }),

/***/ "./event/SignalBinding.js":
/*!********************************!*\
  !*** ./event/SignalBinding.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignalBinding = function () {
    function SignalBinding(signal, listener, listenerContext, priority, once) {
        (0, _classCallCheck3.default)(this, SignalBinding);


        this._signal = signal;
        this._listener = listener;
        this._context = listenerContext;
        this._priority = priority || 0;
        this.active = true;
        this.args = undefined;
        this._isOnce = once || false;
    }

    (0, _createClass3.default)(SignalBinding, [{
        key: "execute",
        value: function execute(argsArray) {
            var handlerReturn = void 0,
                params = void 0;

            if (this.active && !!this._listener) {

                params = this.args ? this.args.concat(argsArray) : argsArray;
                handlerReturn = this._listener.apply(this._context, params);
                if (this._isOnce) {
                    this.detach();
                }
            }
            return handlerReturn;
        }
    }, {
        key: "detach",
        value: function detach() {
            if (!this.isBound()) return;
            this._signal.unsubscribe(this._listener, this._context);
        }

        /**
            * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
            */

    }, {
        key: "isBound",
        value: function isBound() {
            return !!this._signal && !!this._listener;
        }

        /**
            * Delete instance properties
            * @private
            */

    }, {
        key: "_destroy",
        value: function _destroy() {
            delete this._signal;
            delete this._listener;
            delete this.context;
        }
    }, {
        key: "isOnce",
        get: function get() {
            return this._isOnce;
        }
    }, {
        key: "listener",
        get: function get() {
            return this._listener;
        }
    }, {
        key: "signal",
        get: function get() {
            return this._signal;
        }
    }]);
    return SignalBinding;
}();

exports.default = SignalBinding;

/***/ }),

/***/ "./event/components/AddBinding.js":
/*!****************************************!*\
  !*** ./event/components/AddBinding.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = AddBinding;
function AddBinding(signal, binding) {

        var n = signal._bindings.length;

        do {
                --n;
        } while (signal._bindings.at(n) && binding._priority <= signal._bindings.at(n)._priority);

        signal._bindings.insert(binding, n);
}

/***/ }),

/***/ "./event/components/IndexOfListener.js":
/*!*********************************************!*\
  !*** ./event/components/IndexOfListener.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = IndexOfListener;
function IndexOfListener(signal, listener, context) {

    var r = signal._bindings.each(function (element, index) {

        if (element._listener === listener && element._context === context) {
            return index;
        }
    });

    if (r === undefined) r = -1;

    return r;
}

/***/ }),

/***/ "./event/components/RegisterListener.js":
/*!**********************************************!*\
  !*** ./event/components/RegisterListener.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RegisterListener;

var _SignalBinding = __webpack_require__(/*! ../SignalBinding */ "./event/SignalBinding.js");

var _SignalBinding2 = _interopRequireDefault(_SignalBinding);

var _IndexOfListener = __webpack_require__(/*! ./IndexOfListener */ "./event/components/IndexOfListener.js");

var _IndexOfListener2 = _interopRequireDefault(_IndexOfListener);

var _AddBinding = __webpack_require__(/*! ./AddBinding */ "./event/components/AddBinding.js");

var _AddBinding2 = _interopRequireDefault(_AddBinding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RegisterListener(signal, listener, listenerContext, priority, isOnce) {

    var binding = null;
    var index = (0, _IndexOfListener2.default)(signal, listener, listenerContext);

    if (index !== -1) {
        binding = signal._bindings[index];
        if (binding.isOnce !== isOnce) {
            throw new Error('You cannot add' + (isOnce ? '' : 'Once') + '() then add' + (!isOnce ? '' : 'Once') + '() the same listener without removing the relationship first.');
        }
    } else {

        binding = new _SignalBinding2.default(signal, listener, listenerContext, priority, isOnce);
        (0, _AddBinding2.default)(signal, binding);
    }

    return binding;
}

/***/ }),

/***/ "./event/components/ValidateListener.js":
/*!**********************************************!*\
  !*** ./event/components/ValidateListener.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ValidateListener;
function ValidateListener(listener, func) {
    if (typeof listener !== 'function') throw new Error('Signal.{fn}: Listener should be a function.'.replace('{fn}', func));
}

/***/ }),

/***/ "./event/engine/RegisterFocusChangeEvent.js":
/*!**************************************************!*\
  !*** ./event/engine/RegisterFocusChangeEvent.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RegisterFocusChangeEvent;
function RegisterFocusChangeEvent(eventManager) {

    /* The visibilitychange event is fired when the content of a tab has become visible or has been hidden.*/
    var visibilitychange = void 0;

    // check if have visibility change
    if (document.hidden !== undefined) {
        visibilitychange = 'visibilitychange';
    } else {
        var vendors = ['webkit', 'moz', 'ms'];

        vendors.forEach(function (prefix) {
            if (document[prefix + 'Hidden'] !== undefined) {
                document.hidden = function () {
                    return document[prefix + 'Hidden'];
                };

                visibilitychange = prefix + 'visibilitychange';
            }
        });
    }

    // register event listener
    var onVisibilityChange = function onVisibilityChange(event) {
        if (document.hidden || event.type === 'pause') {
            eventManager.dispatch('hidden');
        } else {
            eventManager.dispatch('visible');
        }
    };

    if (visibilitychange) {
        document.addEventListener(visibilitychange, onVisibilityChange, false);
    }

    window.onblur = function () {
        eventManager.dispatch('blur');
    };

    window.onfocus = function () {
        eventManager.dispatch('focus');
    };
}

/***/ }),

/***/ "./event/index.js":
/*!************************!*\
  !*** ./event/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Signal: __webpack_require__(/*! ./Signal */ "./event/Signal.js"),
    EventManager: __webpack_require__(/*! ./EventManager */ "./event/EventManager.js")
};

/***/ }),

/***/ "./input/Input.js":
/*!************************!*\
  !*** ./input/Input.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Keyboard = __webpack_require__(/*! ./keyboard/Keyboard */ "./input/keyboard/Keyboard.js");

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _Mouse = __webpack_require__(/*! ./mouse/Mouse */ "./input/mouse/Mouse.js");

var _Mouse2 = _interopRequireDefault(_Mouse);

var _InitializeMouse = __webpack_require__(/*! ./mouse/components/InitializeMouse */ "./input/mouse/components/InitializeMouse.js");

var _InitializeMouse2 = _interopRequireDefault(_InitializeMouse);

var _InitializeKeyboard = __webpack_require__(/*! ./keyboard/components/InitializeKeyboard */ "./input/keyboard/components/InitializeKeyboard.js");

var _InitializeKeyboard2 = _interopRequireDefault(_InitializeKeyboard);

var _UpdateKeyboard = __webpack_require__(/*! ./keyboard/components/UpdateKeyboard */ "./input/keyboard/components/UpdateKeyboard.js");

var _UpdateKeyboard2 = _interopRequireDefault(_UpdateKeyboard);

var _UpdateMouse = __webpack_require__(/*! ./mouse/components/UpdateMouse */ "./input/mouse/components/UpdateMouse.js");

var _UpdateMouse2 = _interopRequireDefault(_UpdateMouse);

var _InputData = __webpack_require__(/*! ./InputData */ "./input/InputData.js");

var _InputData2 = _interopRequireDefault(_InputData);

var _ObjectGet = __webpack_require__(/*! ../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _ResetKeyboard = __webpack_require__(/*! ./keyboard/components/ResetKeyboard */ "./input/keyboard/components/ResetKeyboard.js");

var _ResetKeyboard2 = _interopRequireDefault(_ResetKeyboard);

var _DisableContextMenu = __webpack_require__(/*! ./mouse/components/DisableContextMenu */ "./input/mouse/components/DisableContextMenu.js");

var _DisableContextMenu2 = _interopRequireDefault(_DisableContextMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function () {
    function Input(game) {
        (0, _classCallCheck3.default)(this, Input);


        this.game = game;
        this.mouse = null;
        this.keyboard = null;
        this.data = null;
    }

    (0, _createClass3.default)(Input, [{
        key: "init",
        value: function init() {

            var gameConfig = this.game.config;

            if (gameConfig.keyboard.active) {
                this.keyboard = new _Keyboard2.default(this.game);
            }

            if (gameConfig.mouse.active) {
                this.mouse = new _Mouse2.default(this.game);
            }

            this.data = new _InputData2.default(this);

            (0, _InitializeKeyboard2.default)(this.keyboard, this.game);

            (0, _InitializeMouse2.default)(this.mouse, this.game);

            if (gameConfig.contextMenu.disable) {
                (0, _DisableContextMenu2.default)(this.game, gameConfig.contextMenu.target);
            }
        }
    }, {
        key: "update",
        value: function update(timeStamp) {

            (0, _UpdateKeyboard2.default)(this.keyboard);

            this.data.updateClientRect();

            (0, _UpdateMouse2.default)(this.mouse, this.data, timeStamp);
        }
    }, {
        key: "reset",
        value: function reset() {

            (0, _ResetKeyboard2.default)(this.keyboard);

            if (this.mouse) this.mouse.reset();
        }
    }]);
    return Input;
}();

exports.default = Input;

/***/ }),

/***/ "./input/InputData.js":
/*!****************************!*\
  !*** ./input/InputData.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Rect = __webpack_require__(/*! ../math/Rect */ "./math/Rect.js");

var _Rect2 = _interopRequireDefault(_Rect);

var _Vector = __webpack_require__(/*! ../math/Vector2 */ "./math/Vector2.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _MathUtils = __webpack_require__(/*! ../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputData = function () {
    function InputData(manager) {
        (0, _classCallCheck3.default)(this, InputData);

        this.manager = manager;
        this.canvas = manager.game.system.render.domCanvas;
        this.clientRect = new _Rect2.default();
        this.boundingClientRect = null;
        this.scale = new _Vector2.default(1, 1);
    }

    (0, _createClass3.default)(InputData, [{
        key: "updateClientRect",
        value: function updateClientRect() {

            var rect = this.clientRect;
            var clientRect = this.canvas.getBoundingClientRect();
            this.boundingClientRect = clientRect;

            rect.x = clientRect.left + window.pageXOffset - document.documentElement.clientLeft;
            rect.y = clientRect.top + window.pageYOffset - document.documentElement.clientTop;
            rect.width = clientRect.width;
            rect.height = clientRect.height;
        }
    }, {
        key: "transformX",
        value: function transformX(x) {
            var rect = this.boundingClientRect;
            return _MathUtils2.default.floor((x - rect.left) / (rect.right - rect.left) * this.canvas.width);
        }
    }, {
        key: "transformY",
        value: function transformY(y) {
            var rect = this.boundingClientRect;
            return _MathUtils2.default.floor((y - rect.top) / (rect.bottom - rect.top) * this.canvas.height);
        }
    }, {
        key: "clientRectTransformX",
        value: function clientRectTransformX(x) {
            return (x - this.clientRect.x) * this.scale.x;
        }
    }, {
        key: "clientRectTransformY",
        value: function clientRectTransformY(y) {
            return (y - this.clientRect.y) * this.scale.y;
        }
    }]);
    return InputData;
}();

exports.default = InputData;

/***/ }),

/***/ "./input/InputSystem.js":
/*!******************************!*\
  !*** ./input/InputSystem.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _List = __webpack_require__(/*! ../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputSystem = function () {
    function InputSystem(game) {
        (0, _classCallCheck3.default)(this, InputSystem);

        this.game = game;

        this._enabled = true;

        this._eventQueue = new _List2.default();
        this._buttonWatcher = new _Map2.default();
        this._buttonGarbage = [];

        this.eventTarget = null;
        this.eventHandler = null;

        this.preventDefault = true;
    }

    (0, _createClass3.default)(InputSystem, [{
        key: "clear",
        value: function clear() {
            this._buttonWatcher.clear();
            this._buttonGarbage.splice(0, this._buttonGarbage.length);
            this._eventQueue.clear();
        }
    }, {
        key: "reset",
        value: function reset() {}
    }, {
        key: "enabled",
        get: function get() {
            return this._enabled;
        },
        set: function set(value) {
            value = !!value;

            if (value !== this._enabled) {
                if (!value) this.reset();

                this._enabled = value;
            }
        }
    }]);
    return InputSystem;
}();

exports.default = InputSystem;

/***/ }),

/***/ "./input/button/Button.js":
/*!********************************!*\
  !*** ./input/button/Button.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _ButtonStatus = __webpack_require__(/*! ./ButtonStatus */ "./input/button/ButtonStatus.js");

var _ButtonStatus2 = _interopRequireDefault(_ButtonStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function () {
    function Button(code, game) {
        (0, _classCallCheck3.default)(this, Button);


        this.game = game;
        this.code = code;

        this._enabled = true;
        this.status = _ButtonStatus2.default.NONE;

        this.press = false;
        this.down = false;
        this.up = false;

        this.preventDefault = true;

        this.downTime = 0;
        this.downDuration = -2500;
        this.upTime = 0;
        this.upDuration = -2500;
    }

    (0, _createClass3.default)(Button, [{
        key: "isPressing",
        value: function isPressing() {
            return this.press;
        }
    }, {
        key: "isPressed",
        value: function isPressed() {
            return this.down && this.status === _ButtonStatus2.default.PRESSED;
        }
    }, {
        key: "isReleased",
        value: function isReleased() {
            return !this.down && this.upDuration === 0;
        }
    }, {
        key: "reset",
        value: function reset() {
            this.press = false;
            this._event = _ButtonStatus2.default.NONE;
            this.down = false;
            this.up = false;

            this.downTime = 0;
            this.downDuration = -2500;
            this.upTime = 0;
            this.upDuration = -2500;
        }
    }, {
        key: "enabled",
        get: function get() {
            return this._enabled;
        },
        set: function set(value) {
            value = !!value;

            if (value !== this._enabled) {
                if (!value) this.reset();

                this._enabled = value;
            }
        }
    }]);
    return Button;
}();

exports.default = Button;

/***/ }),

/***/ "./input/button/ButtonStatus.js":
/*!**************************************!*\
  !*** ./input/button/ButtonStatus.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var ButtonStatus = {
  /**
   * No key/button status
   * @param {number} 0
   */
  NONE: 0,

  /**
   * 
   */
  IDLE: 1,
  /**
   * Key/button is pressed
   * @param {number} 2
   */
  PRESSED: 2,
  /**
  * Key/button was pressed
  * @param {number} 3
  */
  POST_PRESSED: 3,
  /**
   * Key/button is released
   * @param {number} 4
   */
  RELEASED: 4
};

//Object.freeze(ButtonEvent);

exports.default = ButtonStatus;

/***/ }),

/***/ "./input/button/components/ProcessButtonDown.js":
/*!******************************************************!*\
  !*** ./input/button/components/ProcessButtonDown.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ProcessButtonDown;

var _ButtonStatus = __webpack_require__(/*! ../ButtonStatus */ "./input/button/ButtonStatus.js");

var _ButtonStatus2 = _interopRequireDefault(_ButtonStatus);

var _Button = __webpack_require__(/*! ../Button */ "./input/button/Button.js");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 * @param {KeyboardEvent|MouseEvent} event 
 * @param {Button} button 
 */
function ProcessButtonDown(event, button) {

    if (button.preventDefault === true) {
        event.preventDefault();
    }

    if (!button.enabled) {
        return;
    }

    if (button.down === true) {
        return;
    }

    // set key properties
    button.press = true;
    button.down = true;
    button.up = false;

    // set press time duration
    button.downTime = event.timeStamp;
    button.downDuration = 0;
    button.upDuration = button.downTime - button.upTime;

    button.status = _ButtonStatus2.default.PRESSED;
}

/***/ }),

/***/ "./input/button/components/ProcessButtonUp.js":
/*!****************************************************!*\
  !*** ./input/button/components/ProcessButtonUp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ProcessButtonUp;

var _Button = __webpack_require__(/*! ../Button */ "./input/button/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _ButtonStatus = __webpack_require__(/*! ../ButtonStatus */ "./input/button/ButtonStatus.js");

var _ButtonStatus2 = _interopRequireDefault(_ButtonStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 * @param {KeyboardEvent|MouseEvent} event 
 * @param {Button} button 
 */
function ProcessButtonUp(event, button) {

    if (button.preventDefault === true) {
        event.preventDefault();
    }

    if (!button.enabled) {
        return;
    }

    // set key properties
    button.press = false;
    button.down = false;
    button.up = true;

    // set press time duration
    button.upTime = event.timeStamp;
    button.downDuration = button.upTime - button.downTime;
    button.upDuration = 0;
    button.downTime = 0;

    button.status = _ButtonStatus2.default.RELEASED;
}

/***/ }),

/***/ "./input/components/WatchButtons.js":
/*!******************************************!*\
  !*** ./input/components/WatchButtons.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = WatchButtons;

var _ButtonStatus = __webpack_require__(/*! ../button/ButtonStatus */ "./input/button/ButtonStatus.js");

var _ButtonStatus2 = _interopRequireDefault(_ButtonStatus);

var _Map = __webpack_require__(/*! ../../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 * @param {DataMap} watcher 
 * @param {Array} garbage 
 *
 */
function WatchButtons(watcher, garbage) {

    if (watcher.length === 0) return;

    watcher.each(function (code, button) {

        if (button.status === _ButtonStatus2.default.PRESSED) {
            button.status = _ButtonStatus2.default.POST_PRESSED;
        } else if (button.status === _ButtonStatus2.default.RELEASED) {
            button.status = _ButtonStatus2.default.NONE;
            garbage.push(code);
        }
    });

    if (garbage.length !== 0) {
        watcher.eraseList(garbage);
        garbage.splice(0, garbage.length);
    }
}

/***/ }),

/***/ "./input/index.js":
/*!************************!*\
  !*** ./input/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Button = exports.Button = __webpack_require__(/*! ./button/Button */ "./input/button/Button.js");
var Keyboard = exports.Keyboard = __webpack_require__(/*! ./keyboard/Keyboard */ "./input/keyboard/Keyboard.js");
var Mouse = exports.Mouse = __webpack_require__(/*! ./mouse/Mouse */ "./input/mouse/Mouse.js");
var Input = exports.Input = __webpack_require__(/*! ./Input */ "./input/Input.js");

/***/ }),

/***/ "./input/keyboard/KeyCode.js":
/*!***********************************!*\
  !*** ./input/keyboard/KeyCode.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var KeyCode = {
    Backspace: 8,
    Tab: 9,
    Enter: 13,
    Shift: 16,
    Ctrl: 17,
    Alt: 18,
    Pause: 19,
    CapsLock: 20,
    Escape: 27,
    Space: 32,
    PageUp: 33,
    PageDown: 34,
    End: 35,
    Home: 36,
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
    Insert: 45,
    Delete: 46,
    Num0: 48,
    Num1: 49,
    Num2: 50,
    Num3: 51,
    Num4: 52,
    Num5: 53,
    Num6: 54,
    Num7: 55,
    Num8: 56,
    Num9: 57,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    LSystem: 91,
    RSystem: 92,
    SelectK: 93,
    Numpad0: 96,
    Numpad1: 97,
    Numpad2: 98,
    Numpad3: 99,
    Numpad4: 100,
    Numpad5: 101,
    Numpad6: 102,
    Numpad7: 103,
    Numpad8: 104,
    Numpad9: 105,
    Multiply: 106,
    Add: 107,
    Subtract: 109,
    DecimalPoint: 110,
    Divide: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NumLock: 144,
    ScrollLock: 145,
    SemiColon: 186,
    Equal: 187,
    Comma: 188,
    Dash: 189,
    Period: 190,
    Slash: 191,
    LBraket: 219,
    BackSlash: 220,
    RBracket: 221,
    Quote: 222
};

exports.default = KeyCode;

/***/ }),

/***/ "./input/keyboard/Keyboard.js":
/*!************************************!*\
  !*** ./input/keyboard/Keyboard.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Map = __webpack_require__(/*! ../../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _List = __webpack_require__(/*! ../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _ResetKeyboard = __webpack_require__(/*! ./components/ResetKeyboard */ "./input/keyboard/components/ResetKeyboard.js");

var _ResetKeyboard2 = _interopRequireDefault(_ResetKeyboard);

var _InputSystem2 = __webpack_require__(/*! ../InputSystem */ "./input/InputSystem.js");

var _InputSystem3 = _interopRequireDefault(_InputSystem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Keyboard = function (_InputSystem) {
  (0, _inherits3.default)(Keyboard, _InputSystem);

  function Keyboard(game) {
    (0, _classCallCheck3.default)(this, Keyboard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Keyboard.__proto__ || (0, _getPrototypeOf2.default)(Keyboard)).call(this, game));

    _this._keyMapping = new _Map2.default();
    _this.lastKey = null;

    return _this;
  }

  (0, _createClass3.default)(Keyboard, [{
    key: 'reset',
    value: function reset() {
      (0, _ResetKeyboard2.default)(this);
      return this;
    }
  }, {
    key: 'stop',
    value: function stop() {

      var target = this.eventTarget;

      target.removeEventListener('keydown', this.eventHandler);
      target.removeEventListener('keyup', this.eventHandler);

      this._keyMapping.clear();
      (0, _ResetKeyboard2.default)(this);
      return this;
    }
  }, {
    key: 'pressed',
    value: function pressed(keycode) {

      var key = this._keyMapping.get(keycode);

      return key.isPressed();
    }
  }, {
    key: 'release',
    value: function release(keycode) {
      return this._keyMapping.get(keycode).isReleased();
    }
  }, {
    key: 'press',
    value: function press(keycode) {
      return this._keyMapping.get(keycode).status;
    }
  }]);
  return Keyboard;
}(_InputSystem3.default);

exports.default = Keyboard;

/***/ }),

/***/ "./input/keyboard/components/InitializeKeyboard.js":
/*!*********************************************************!*\
  !*** ./input/keyboard/components/InitializeKeyboard.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InitializeKeyboard;

var _ObjectGet = __webpack_require__(/*! ../../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _Button = __webpack_require__(/*! ../../button/Button */ "./input/button/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _KeyCode = __webpack_require__(/*! ./../KeyCode */ "./input/keyboard/KeyCode.js");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _StartKeyboardListeners = __webpack_require__(/*! ./StartKeyboardListeners */ "./input/keyboard/components/StartKeyboardListeners.js");

var _StartKeyboardListeners2 = _interopRequireDefault(_StartKeyboardListeners);

var _ResetKeyboard = __webpack_require__(/*! ./ResetKeyboard */ "./input/keyboard/components/ResetKeyboard.js");

var _ResetKeyboard2 = _interopRequireDefault(_ResetKeyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InitializeKeyboard(keyboard, game) {

    if (!keyboard) return;

    var keyMapping = keyboard._keyMapping;

    for (var prop in _KeyCode2.default) {

        if (_KeyCode2.default.hasOwnProperty(prop)) {
            var value = _KeyCode2.default[prop];
            var key = new _Button2.default(value, game);
            keyMapping.insert(value, key);
        }
    }

    //ResetKeyboard(keyboard);

    var config = game.config.keyboard;
    var target = _ObjectGet2.default.value(config, 'target', window);
    keyboard._enabled = _ObjectGet2.default.value(config, 'enable', true);

    keyboard.eventTarget = target;
    keyboard.eventHandler = (0, _StartKeyboardListeners2.default)(keyboard, target);
}

/***/ }),

/***/ "./input/keyboard/components/ResetKeyboard.js":
/*!****************************************************!*\
  !*** ./input/keyboard/components/ResetKeyboard.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ResetKeyboard;

var _Keyboard = __webpack_require__(/*! ../Keyboard */ "./input/keyboard/Keyboard.js");

var _Keyboard2 = _interopRequireDefault(_Keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 * @param {Keyboard} keyboard 
 */
function ResetKeyboard(keyboard) {

    if (!keyboard) return;

    keyboard._keyMapping.each(function (code, key) {
        key.reset();
    });

    keyboard.clear();
}

/***/ }),

/***/ "./input/keyboard/components/StartKeyboardListeners.js":
/*!*************************************************************!*\
  !*** ./input/keyboard/components/StartKeyboardListeners.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = StartKeyboardListeners;

var _Keyboard = __webpack_require__(/*! ../Keyboard */ "./input/keyboard/Keyboard.js");

var _Keyboard2 = _interopRequireDefault(_Keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 * @param {Keyboard} keyboard 
 * @param {HTMLElement} target 
 */
function StartKeyboardListeners(keyboard, target) {

    var eventQueue = keyboard._eventQueue;

    // key event handler
    var handler = function handler(event) {

        if (event.defaultPrevented) {
            return;
        }

        if (keyboard.preventDefault) {
            event.preventDefault();
        }

        eventQueue.push(event);
    };

    target.addEventListener('keydown', handler, false);
    target.addEventListener('keyup', handler, false);

    return handler;
}

/***/ }),

/***/ "./input/keyboard/components/UpdateKeyboard.js":
/*!*****************************************************!*\
  !*** ./input/keyboard/components/UpdateKeyboard.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateKeyboard;

var _ProcessButtonDown = __webpack_require__(/*! ../../button/components/ProcessButtonDown */ "./input/button/components/ProcessButtonDown.js");

var _ProcessButtonDown2 = _interopRequireDefault(_ProcessButtonDown);

var _ProcessButtonUp = __webpack_require__(/*! ../../button/components/ProcessButtonUp */ "./input/button/components/ProcessButtonUp.js");

var _ProcessButtonUp2 = _interopRequireDefault(_ProcessButtonUp);

var _WatchButtons = __webpack_require__(/*! ../../components/WatchButtons */ "./input/components/WatchButtons.js");

var _WatchButtons2 = _interopRequireDefault(_WatchButtons);

var _ButtonStatus = __webpack_require__(/*! ../../button/ButtonStatus */ "./input/button/ButtonStatus.js");

var _ButtonStatus2 = _interopRequireDefault(_ButtonStatus);

var _Keyboard = __webpack_require__(/*! ../Keyboard */ "./input/keyboard/Keyboard.js");

var _Keyboard2 = _interopRequireDefault(_Keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Updates Keyboard logic
 * 
 * @param {Keyboard} keyboard Keyboard Manager
 */
function UpdateKeyboard(keyboard) {

    if (!keyboard) return;

    if (!keyboard.enabled) return;

    (0, _WatchButtons2.default)(keyboard._buttonWatcher, keyboard._buttonGarbage);

    var eventSize = keyboard._eventQueue.size;

    if (eventSize === 0) return;

    // clear and copy queue
    var queue = keyboard._eventQueue.splice(0, eventSize);

    // process key events
    for (var i = 0; i < eventSize; i++) {
        var event = queue[i];
        var code = event.keyCode;

        // check if is valid scintilla key
        var key = keyboard._keyMapping.get(code);

        if (key === undefined || key === null) {
            continue;
        }

        if (event.type === 'keydown') {

            if (key.press === false) {
                if (key.status === _ButtonStatus2.default.NONE) {
                    keyboard._buttonWatcher.insert(code, key);
                }

                (0, _ProcessButtonDown2.default)(event, key);
            }
        } else {
            (0, _ProcessButtonUp2.default)(event, key);
        }
    }
}

/***/ }),

/***/ "./input/mouse/Mouse.js":
/*!******************************!*\
  !*** ./input/mouse/Mouse.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MouseEvent = undefined;

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _MouseButton = __webpack_require__(/*! ./MouseButton */ "./input/mouse/MouseButton.js");

var _MouseButton2 = _interopRequireDefault(_MouseButton);

var _List = __webpack_require__(/*! ../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _Vector = __webpack_require__(/*! ../../math/Vector2 */ "./math/Vector2.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _Map = __webpack_require__(/*! ../../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _InputSystem2 = __webpack_require__(/*! ../InputSystem */ "./input/InputSystem.js");

var _InputSystem3 = _interopRequireDefault(_InputSystem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MouseEvent = exports.MouseEvent = {
  NONE: 0,
  PRESS: 1,
  PRESSED: 2,
  RELEASE: 3
};

var Mouse = function (_InputSystem) {
  (0, _inherits3.default)(Mouse, _InputSystem);

  function Mouse(game) {
    (0, _classCallCheck3.default)(this, Mouse);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Mouse.__proto__ || (0, _getPrototypeOf2.default)(Mouse)).call(this, game));

    _this._buttonsList = new _List2.default();
    _this._isDirty = false;

    _this.event = null;
    _this.moved = false;
    _this.buttons = 0;
    _this.down = false;

    _this.clientPosition = new _Vector2.default();
    _this.position = new _Vector2.default();

    return _this;
  }

  (0, _createClass3.default)(Mouse, [{
    key: 'stop',
    value: function stop() {

      var target = this.eventTarget;

      target.removeEventListener('mousemove', this.handler);
      target.removeEventListener('mousedown', this.handler);
      target.removeEventListener('mouseup', this.handler);
      target.removeEventListener('mouseenter', this.handler);
      target.removeEventListener('mouseleave', this.handler);
    }

    /*onMouseMove(event) {
        if (!this.active)
        return;
    
      var rect = this.canvas.getBoundingClientRect();
    
      this.x = Math.floor((event.clientX-rect.left)/(rect.right-rect.left)*this.canvas.width);
      this.y = Math.floor((event.clientY-rect.top)/(rect.bottom-rect.top)*this.canvas.height);
      //this.x = event.clientX - rect.left;
      //this.y = event.clientY - rect.top;
      }
      onMouseDown(event) {
        if (!this.active)
        return;
    
        var value = event.button;
        if (this._mouseButtonsLocksPressed[value] != MouseEvent.PRESSED && this._mouseButtonsLocksPressed[value] != MouseEvent.PRESS) {
        this._mouseButtonsLocksPressed[value] = MouseEvent.PRESSED;
        this._mouseDownDuration[value] = 1;
      }
        this._mouseButtons[value] = true;
      this._mouseButtonsLocks[value] = MouseEvent.PRESS;
        event.preventDefault();
      }
      onMouseUp(event) {
        if (!this.active)
        return;
        var value = event.button;
        this._mouseButtons[value] = false;
      this._mouseButtonsLocks[value] = MouseEvent.RELEASE;
      this._mouseButtonsLocksPressed[value] = MouseEvent.NONE;
        event.preventDefault();
    
    }*/

  }, {
    key: 'pressed',
    value: function pressed(button) {

      // var buttonLock = false;

      // if (this._mouseButtonsLocksPressed[button] == MouseEvent.PRESSED) {
      //   buttonLock = true;
      //   this._mouseButtonsLocksPressed[button] = MouseEvent.PRESS;
      // }

      // var hit = this._mouseButtons[button] && buttonLock;

      // return hit;

      var mouseButton = this._buttonsList.get(button);

      if (mouseButton) return mouseButton.isPressed();

      return null;
    }
  }, {
    key: 'release',
    value: function release(button) {}

    // var buttonLock = false;

    // if (this._mouseButtonsLocks[button] ==  MouseEvent.PRESSED ||
    //     this._mouseButtonsLocks[button] ==  MouseEvent.PRESS ||
    //     this._mouseButtonsLocks[button] ==  MouseEvent.NONE)
    // 	buttonLock = false;
    // else
    // 	buttonLock = true;

    // var hit = !this._mouseButtons[button] && buttonLock;

    // this._mouseButtonsLocks[button] = MouseEvent.NONE;

    // return hit;

    /**
     * Check if a Mouse button is pressing.
     * 
     * @param {MouseButton} button 
     */

  }, {
    key: 'press',
    value: function press(button) {
      return this.buttons & (_MouseButton.LogicalMouseButton[button] || 0);
    }

    /*update() {
        for (var i = 0; i < this._mouseButtons.length; i++) {
              if (this._mouseButtonsLocksPressed[i] ==  MouseEvent.PRESSED) {
                if (this._mouseDownDuration[i] > 0)
                  this._mouseDownDuration[i]--;
                else
                  this._mouseButtonsLocksPressed[i] = MouseEvent.PRESS;
            } else
              continue;
    
      }
      }*/

  }, {
    key: 'posRelativeTo',
    value: function posRelativeTo(object) {

      var vec2 = { x: 0, y: 0 };

      vec2.x = this.x - object.x;
      vec2.y = this.y - object.y;

      return vec2;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.stop();
      this.game = null;
    }
  }, {
    key: 'x',
    get: function get() {
      return this.position.x;
    },
    set: function set(value) {
      this.position.x = value;
    }
  }, {
    key: 'y',
    get: function get() {
      return this.position.y;
    },
    set: function set(value) {
      this.position.y = value;
    }
  }]);
  return Mouse;
}(_InputSystem3.default);

exports.default = Mouse;

/***/ }),

/***/ "./input/mouse/MouseButton.js":
/*!************************************!*\
  !*** ./input/mouse/MouseButton.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LogicalMouseButton = undefined;

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogicalMouseButton = exports.LogicalMouseButton = {
    Left: 1,
    Middle: 2,
    Right: 4,
    Back: 8,
    Forward: 16
};

var MouseButton = {
    Left: 0,
    Middle: 1,
    Right: 2,
    Back: 3,
    Forward: 4
};

(0, _freeze2.default)(MouseButton);

exports.default = MouseButton;

/***/ }),

/***/ "./input/mouse/components/DisableContextMenu.js":
/*!******************************************************!*\
  !*** ./input/mouse/components/DisableContextMenu.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DisableContextMenu;

var _Validate = __webpack_require__(/*! ../../../utils/Validate */ "./utils/Validate.js");

var _Validate2 = _interopRequireDefault(_Validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DisableContextMenu(game, target) {

    if (!target) {
        target = document.body;
    } else if (_Validate2.default.isString(target)) {

        if (target === 'canvas') {
            target = game.system.render.domCanvas;
        } else {
            target = document.getElementsByClassName(target).item(0);
        }
    }

    target.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        return false;
    });
}

/***/ }),

/***/ "./input/mouse/components/InitializeMouse.js":
/*!***************************************************!*\
  !*** ./input/mouse/components/InitializeMouse.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InitializeMouse;

var _StartMouseListener = __webpack_require__(/*! ./StartMouseListener */ "./input/mouse/components/StartMouseListener.js");

var _StartMouseListener2 = _interopRequireDefault(_StartMouseListener);

var _MouseButton = __webpack_require__(/*! ../MouseButton */ "./input/mouse/MouseButton.js");

var _MouseButton2 = _interopRequireDefault(_MouseButton);

var _Button = __webpack_require__(/*! ../../button/Button */ "./input/button/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _ObjectGet = __webpack_require__(/*! ../../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InitializeMouse(mouse, game) {

    if (!mouse) return;

    for (var prop in _MouseButton.LogicalMouseButton) {

        if (_MouseButton.LogicalMouseButton.hasOwnProperty(prop)) {
            var value = _MouseButton.LogicalMouseButton[prop];
            mouse._buttonsList.push(new _Button2.default(value, game));
        }
    }

    var gameConfig = game.config.mouse;
    var target = _ObjectGet2.default.value(gameConfig, 'target', null);
    var enable = _ObjectGet2.default.value(gameConfig, 'enable', true);

    if (!target) {
        target = game.system.render.domCanvas;
    }

    mouse._enabled = enable;
    mouse.eventTarget = target;
    mouse.eventHandler = (0, _StartMouseListener2.default)(mouse, target);
}

/***/ }),

/***/ "./input/mouse/components/ProcessMouseButtonDown.js":
/*!**********************************************************!*\
  !*** ./input/mouse/components/ProcessMouseButtonDown.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ProcessMouseButtonDown;

var _ProcessButtonDown = __webpack_require__(/*! ../../button/components/ProcessButtonDown */ "./input/button/components/ProcessButtonDown.js");

var _ProcessButtonDown2 = _interopRequireDefault(_ProcessButtonDown);

var _Mouse = __webpack_require__(/*! ../Mouse */ "./input/mouse/Mouse.js");

var _Mouse2 = _interopRequireDefault(_Mouse);

var _Button = __webpack_require__(/*! ../../button/Button */ "./input/button/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _InputData = __webpack_require__(/*! ../../InputData */ "./input/InputData.js");

var _InputData2 = _interopRequireDefault(_InputData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 Left button=1, 
 Right button=2, 
 Middle (wheel) button=4, 
 4th button (typically, "Browser Back" button)=8,
 5th button (typically, "Browser Forward" button)=16.
*/

/**
 * 
 * @param {MouseEvent} event 
 * @param {Button} button 
 * @param {Mouse} mouse 
 * @param {InputData} inputData
 */
function ProcessMouseButtonDown(event, button, mouse, inputData) {

    if (event.buttons) {
        mouse.buttons = event.buttons;
    }

    (0, _ProcessButtonDown2.default)(event, button);

    mouse.event = event;

    mouse.clientPosition.set(inputData.clientRectTransformX(event.pageX), inputData.clientRectTransformY(event.pageY));
    mouse.x = inputData.transformX(event.clientX);
    mouse.y = inputData.transformY(event.clientY);

    mouse._isDirty = true;
    mouse.down = true;
}

/***/ }),

/***/ "./input/mouse/components/ProcessMouseButtonUp.js":
/*!********************************************************!*\
  !*** ./input/mouse/components/ProcessMouseButtonUp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ProcessMouseButtonUp;

var _ProcessButtonUp = __webpack_require__(/*! ../../button/components/ProcessButtonUp */ "./input/button/components/ProcessButtonUp.js");

var _ProcessButtonUp2 = _interopRequireDefault(_ProcessButtonUp);

var _Button = __webpack_require__(/*! ../../button/Button */ "./input/button/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _InputData = __webpack_require__(/*! ../../InputData */ "./input/InputData.js");

var _InputData2 = _interopRequireDefault(_InputData);

var _Mouse = __webpack_require__(/*! ../Mouse */ "./input/mouse/Mouse.js");

var _Mouse2 = _interopRequireDefault(_Mouse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 * @param {MouseEvent} event 
 * @param {Button} button 
 * @param {Mouse} mouse 
 * @param {InputData} inputData 
 */
function ProcessMouseButtonUp(event, button, mouse, inputData) {

    if (event.buttons) {
        mouse.buttons = event.buttons;
    }

    (0, _ProcessButtonUp2.default)(event, button);

    mouse.clientPosition.set(inputData.clientRectTransformX(event.pageX), inputData.clientRectTransformY(event.pageY));
    mouse.x = inputData.transformX(event.clientX);
    mouse.y = inputData.transformY(event.clientY);

    mouse.event = event;

    mouse._isDirty = true;
    mouse.down = false;
}

/***/ }),

/***/ "./input/mouse/components/ProcessMouseMove.js":
/*!****************************************************!*\
  !*** ./input/mouse/components/ProcessMouseMove.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ProcessMouseMove;

var _Mouse = __webpack_require__(/*! ../Mouse */ "./input/mouse/Mouse.js");

var _Mouse2 = _interopRequireDefault(_Mouse);

var _InputData = __webpack_require__(/*! ../../InputData */ "./input/InputData.js");

var _InputData2 = _interopRequireDefault(_InputData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 * @param {MouseEvent} event 
 * @param {Mouse} mouse 
 * @param {InputData} inputData 
 */
function ProcessMouseMove(event, mouse, inputData) {

    mouse.event = event;

    //mouse.clientPosition.set(event.clientX, event.clientY);

    mouse.clientPosition.set(inputData.clientRectTransformX(event.pageX), inputData.clientRectTransformY(event.pageY));
    mouse.x = inputData.transformX(event.clientX);
    mouse.y = inputData.transformY(event.clientY);

    mouse.moved = true;

    mouse._isDirty = true;
}

/***/ }),

/***/ "./input/mouse/components/StartMouseListener.js":
/*!******************************************************!*\
  !*** ./input/mouse/components/StartMouseListener.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = StartMouseListener;

var _Mouse = __webpack_require__(/*! ../Mouse */ "./input/mouse/Mouse.js");

var _Mouse2 = _interopRequireDefault(_Mouse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 * @param {Mouse} mouse 
 * @param {HTMLElement} target
 */
function StartMouseListener(mouse, target) {

    // mouse event handler
    var eventQueue = mouse._eventQueue;

    var config = {
        passive: false
    };

    var handler = function handler(event) {

        if (event.defaultPrevented) {
            return;
        }

        if (mouse.preventDefault) {
            event.preventDefault();
        }

        eventQueue.push(event);
    };

    target.addEventListener('mousedown', handler, config);
    target.addEventListener('mousemove', handler, config);
    target.addEventListener('mouseup', handler, config);
    target.addEventListener('mouseenter', handler, config);
    target.addEventListener('mouseleave', handler, config);

    return handler;
}

/***/ }),

/***/ "./input/mouse/components/UpdateMouse.js":
/*!***********************************************!*\
  !*** ./input/mouse/components/UpdateMouse.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateMouse;

var _InputData = __webpack_require__(/*! ../../InputData */ "./input/InputData.js");

var _InputData2 = _interopRequireDefault(_InputData);

var _WatchButtons = __webpack_require__(/*! ../../components/WatchButtons */ "./input/components/WatchButtons.js");

var _WatchButtons2 = _interopRequireDefault(_WatchButtons);

var _ButtonStatus = __webpack_require__(/*! ../../button/ButtonStatus */ "./input/button/ButtonStatus.js");

var _ButtonStatus2 = _interopRequireDefault(_ButtonStatus);

var _Mouse = __webpack_require__(/*! ../Mouse */ "./input/mouse/Mouse.js");

var _Mouse2 = _interopRequireDefault(_Mouse);

var _ProcessMouseMove = __webpack_require__(/*! ./ProcessMouseMove */ "./input/mouse/components/ProcessMouseMove.js");

var _ProcessMouseMove2 = _interopRequireDefault(_ProcessMouseMove);

var _ProcessMouseButtonDown = __webpack_require__(/*! ./ProcessMouseButtonDown */ "./input/mouse/components/ProcessMouseButtonDown.js");

var _ProcessMouseButtonDown2 = _interopRequireDefault(_ProcessMouseButtonDown);

var _ProcessMouseButtonUp = __webpack_require__(/*! ./ProcessMouseButtonUp */ "./input/mouse/components/ProcessMouseButtonUp.js");

var _ProcessMouseButtonUp2 = _interopRequireDefault(_ProcessMouseButtonUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 * @param {Mouse} mouse 
 * @param {InputData} inputData 
 * @param {number} timeStamp 
 */
function UpdateMouse(mouse, inputData, timeStamp) {

    if (!mouse) return;

    if (!mouse._enabled) return;

    (0, _WatchButtons2.default)(mouse._buttonWatcher, mouse._buttonGarbage);

    mouse._isDirty = false;

    var eventSize = mouse._eventQueue.size;

    if (eventSize === 0) return;

    // clear and copy queue
    var queue = mouse._eventQueue.splice(0, eventSize);

    for (var i = 0; i < eventSize; i++) {
        var event = queue[i];
        var button = void 0;
        var buttonCode = event.button;

        if (buttonCode !== undefined) button = mouse._buttonsList.get(buttonCode);

        switch (event.type) {
            case 'mousemove':
                {
                    (0, _ProcessMouseMove2.default)(event, mouse, inputData);
                    break;
                }
            case 'mousedown':
                {

                    if (button.press === false) {
                        if (button.status === _ButtonStatus2.default.NONE) {
                            mouse._buttonWatcher.insert(buttonCode, button);
                        }

                        (0, _ProcessMouseButtonDown2.default)(event, button, mouse, inputData);
                    }

                    break;
                }
            case 'mouseup':
                {

                    (0, _ProcessMouseButtonUp2.default)(event, button, mouse, inputData);

                    break;
                }
        }
    }
}

/***/ }),

/***/ "./loader/AssetsType.js":
/*!******************************!*\
  !*** ./loader/AssetsType.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AssetsType = {
    'none': 0,
    'image': 1,
    'audio': 2,
    'text': 3,
    'svg': 4,
    'script': 5,
    'json': 6,
    'webFont': 7,
    'tilemapJSON': 8,
    'spritesheet': 9,
    'animMachine': 10
};

(0, _freeze2.default)(AssetsType);

exports.default = AssetsType;

/***/ }),

/***/ "./loader/File.js":
/*!************************!*\
  !*** ./loader/File.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _ObjectGet = __webpack_require__(/*! ../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _XHR = __webpack_require__(/*! ./XHR */ "./loader/XHR.js");

var _XHR2 = _interopRequireDefault(_XHR);

var _LoaderState = __webpack_require__(/*! ./LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _AssetsType = __webpack_require__(/*! ./AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _NextAsset = __webpack_require__(/*! ./components/NextAsset */ "./loader/components/NextAsset.js");

var _NextAsset2 = _interopRequireDefault(_NextAsset);

var _Path = __webpack_require__(/*! ../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var File = function () {
    function File(config) {
        (0, _classCallCheck3.default)(this, File);


        this.type = _ObjectGet2.default.value(config, 'type', null);
        this.tag = _ObjectGet2.default.value(config, 'tag', null);
        this.useExternal = _ObjectGet2.default.value(config, 'useExternal', false);

        if (this.type === null || this.tag === null) {
            throw new Error('Loader.File: Invalid tag.');
        }

        this.url = _ObjectGet2.default.value(config, 'url', undefined);

        if (this.url === undefined) this.url = _ObjectGet2.default.value(config, 'path', '') + this.tag + '.' + _ObjectGet2.default.value(config, 'ext', '');else if (typeof this.url !== 'function') {
            if (!this.useExternal || this.useExternal !== undefined) this.url = _ObjectGet2.default.value(config, 'path', '').concat(this.url);
        }

        // Web fonts is managed by WebFontLoader provided by google
        // There is no need to create XHR settings and request
        if (this.type !== _AssetsType2.default.webFont || this.type !== _AssetsType2.default.spritesheet) {

            this.xhrSettings = _XHR2.default.createSettings(_ObjectGet2.default.value(config, 'responseType', undefined));

            if (_ObjectGet2.default.value(config, 'xhrSettings', false)) this.xhrSettings = _XHR2.default.merge(this.xhrSettings, _ObjectGet2.default.value(config, 'xhrSettings', {}));
        }

        this.loader = null;
        this.state = _LoaderState2.default.PENDING;
        this.totalBytes = 0;
        this.loadedBytes = 0;
        this.progress = 0;
        this.data = undefined;
        this.source = null;
        this.xhrRequest = null;
        this.config = _ObjectGet2.default.value(config, 'config', {});
        this.crossOrigin = undefined;

        this.onComplete = undefined;
    }

    (0, _createClass3.default)(File, [{
        key: 'load',
        value: function load(gameLoader) {
            this.loader = gameLoader;

            if (this.state === _LoaderState2.default.FINISHED) {
                this.onDone();

                _NextAsset2.default.call(this.loader, this);
                //this.loader.next(this);
            } else {

                this.source = _Path2.default.getURL(this.url, gameLoader.baseURL);

                if (this.source.indexOf('data:') === 0 || this.source == null) {
                    console.warn("Loader.File.load: unsupported URI.");
                } else {
                    this.xhrRequest = _XHR2.default.createFileRequest(this, gameLoader.xhr);
                }
            }
        }
    }, {
        key: 'onLoad',
        value: function onLoad(event) {

            this.clearXHR();

            if (event.target && event.target.status !== 200) {
                _NextAsset2.default.call(this.loader, this);
            } else {

                if (this.onPostLoad !== undefined) this.onPostLoad(this.loader, this.xhrRequest);

                _NextAsset2.default.call(this.loader, this);
            }
        }
    }, {
        key: 'onError',
        value: function onError(event) {
            console.error("Loader.File: Error on load file: \"" + this.url + "\".");

            this.clearXHR();

            _NextAsset2.default.call(this.loader, this);
        }
    }, {
        key: 'onProgress',
        value: function onProgress(event) {
            if (event.lengthComputable) {
                this.loadedBytes = event.loaded;
                this.totalBytes = event.total;

                this.progress = Math.min(this.loadedBytes / this.totalBytes, 1);
            }
        }
    }, {
        key: 'onDone',
        value: function onDone() {
            this.state = _LoaderState2.default.DONE;

            this.loader.game.events.dispatch('file_complete_' + this.tag);
        }
    }, {
        key: 'onProcessing',
        value: function onProcessing(processingCallback) {
            this.state = _LoaderState2.default.PROCESSING;

            this.onDone();

            processingCallback(this);
        }
    }, {
        key: 'clearXHR',
        value: function clearXHR() {
            if (this.xhrRequest) {
                this.xhrRequest.onload = undefined;
                this.xhrRequest.onerror = undefined;
                this.xhrRequest.onprogress = undefined;
                //this.xhrRequest.onreadystatechange = undefined;
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.loader = null;
            this.cache = null;
            this.xhrSettings = null;
            this.data = null;
        }
    }]);
    return File;
}();

exports.default = File;

/***/ }),

/***/ "./loader/ListInjector.js":
/*!********************************!*\
  !*** ./loader/ListInjector.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListInjector = function () {
    function ListInjector() {
        (0, _classCallCheck3.default)(this, ListInjector);

        this.list = {};
    }

    (0, _createClass3.default)(ListInjector, [{
        key: "inject",
        value: function inject(toObj) {
            for (var key in this.list) {
                toObj[key] = this.list[key];
            }
        }
    }, {
        key: "register",
        value: function register(key, func) {
            this.list[key] = func;
        }
    }, {
        key: "destroyfunction",
        value: function destroyfunction() {
            this.list = {};
        }
    }]);
    return ListInjector;
}();

exports.default = ListInjector;
;

/***/ }),

/***/ "./loader/LoaderManager.js":
/*!*********************************!*\
  !*** ./loader/LoaderManager.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _System = __webpack_require__(/*! ../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _ObjectGet = __webpack_require__(/*! ../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _XHR = __webpack_require__(/*! ./XHR */ "./loader/XHR.js");

var _XHR2 = _interopRequireDefault(_XHR);

var _AssetTypeHandler = __webpack_require__(/*! ./assets/AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

var _LoaderState = __webpack_require__(/*! ./LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _InitializeLoader = __webpack_require__(/*! ./components/InitializeLoader */ "./loader/components/InitializeLoader.js");

var _InitializeLoader2 = _interopRequireDefault(_InitializeLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Class LoaderManager
var LoadManager = function () {
  function LoadManager(game) {
    (0, _classCallCheck3.default)(this, LoadManager);


    this.game = game;
    this.cache = null;

    this._filesQueue = null;
    this._filesLoading = null;
    this._successFiles = null;
    this._failedFiles = null;
    this._processedFiles = null;

    this._filesQueueCount = null;
    this._loadedFilesCount = null;

    this.isDownloading = false;
    this._totalFiles = 0;

    this.progress = null;
    this.path = null;
    this.baseURL = null;
    this.state = null;
    this.webFontLoader = undefined;
    this.events = null;
    this.crossOrigin = undefined;

    var gameConfig = game.config.loader;

    this.xhr = _XHR2.default.createSettings(_ObjectGet2.default.value(config, 'responseType', gameConfig.responseType), _ObjectGet2.default.value(config, 'async', gameConfig.async),
    //scintilla.ObjectGet.propertyValue(config, 'user', gameConfig.loaderUser),
    //scintilla.ObjectGet.propertyValue(config, 'password', gameConfig.loaderPassword),
    _ObjectGet2.default.value(config, 'timeout', gameConfig.timeout));

    _AssetTypeHandler2.default.inject(this);
  }

  (0, _createClass3.default)(LoadManager, [{
    key: 'setPath',


    /*get totalQueuedFiles() {
      return this._filesQueue.size;
    }*/

    value: function setPath(path) {

      if (path === undefined) path = '';

      if (path !== '' && path.substr(-1) !== '/') path = path.concat('/');

      this.path = path;

      return this;
    }
  }, {
    key: 'setBaseURL',
    value: function setBaseURL(baseUrl) {

      if (baseURL === undefined) baseUrl = '';

      if (baseUrl !== '' && baseUrl.substr(-1) !== '/') {
        baseUrl = baseUrl.concat('/');
      }

      this.baseURL = baseUrl;

      return this;
    }
  }, {
    key: 'setCrossOrigin',
    value: function setCrossOrigin(crossOrigin) {
      this.crossOrigin = crossOrigin;
      return this;
    }
  }, {
    key: 'reset',
    value: function reset() {

      this.isDownloading = false;
      this._filesQueue.clear();
      this._successFiles.clear();
      this._failedFiles.clear();
      this._processedFiles.clear();

      this._filesQueueCount = 0;
      this._loadedFilesCount = 0;

      this.progress = 0;
      this.state = _LoaderState2.default.IDLE;
    }

    /*end : function() {
        if (this.state === LoaderState.PROCESSING)
          return;
    
      this.progress = 1;
      this.isDownloading = false;
      this.state = LoaderState.PROCESSING;
        
      this._filesQueue.clear();
      this._failedFiles.length = 0;
      
      this.processFiles();
        this._successFiles.clear();
        this.state = LoaderState.DONE;
      //this.game.scene.preloadComplete();
      },*/

  }, {
    key: 'loadAsset',
    value: function loadAsset(file) {

      if (!file.crossOrigin) {
        file.crossOrigin = this.crossOrigin;
      }

      file.load(this);
    }
  }, {
    key: 'isLoading',
    value: function isLoading() {
      return this.state === _LoaderState2.default.LOADING || this.state === _LoaderState2.default.PROCESSING;
    }
  }, {
    key: 'isOK',
    value: function isOK() {
      return this.state === _LoaderState2.default.IDLE || this.state === _LoaderState2.default.DONE || this.state === _LoaderState2.default.ERROR;
    }
  }, {
    key: 'downloadIsDone',
    value: function downloadIsDone() {
      return this._filesQueue.length == this._successCount + this._fileErrorCount;
    }
  }, {
    key: 'totalQueuedFiles',
    get: function get() {
      return this._filesQueueCount - this._loadedFilesCount;
    }
  }]);
  return LoadManager;
}();

exports.default = LoadManager;
;

_System2.default.register('Loader', LoadManager, 'load', _InitializeLoader2.default);

/***/ }),

/***/ "./loader/LoaderState.js":
/*!*******************************!*\
  !*** ./loader/LoaderState.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoaderState = {
    NONE: 0,
    IDLE: 1,
    PENDING: 2,
    LOADING: 3,
    PROCESSING: 4,
    ERROR: 5,
    FINISHED: 6,
    DONE: 7
};

(0, _freeze2.default)(LoaderState);

exports.default = LoaderState;

/***/ }),

/***/ "./loader/URLObject.js":
/*!*****************************!*\
  !*** ./loader/URLObject.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var URLObject = {

    createFromResponse: function createFromResponse(asset, response, type) {

        if (typeof URL === 'function') {
            asset.src = URL.createObjectURL(response);
        } else {
            var reader = new FileReader();

            reader.onload = function () {
                asset.removeAttribute('crossOrigin');
                asset.src = 'data:' + (response.type || type) + ';base64,' + reader.result.split(',')[1];
            };

            reader.onerror = asset.onerror;

            reader.readAsDataURL(response);
        }
    },

    revoke: function revoke(data) {
        if (typeof URL === 'function') {
            URL.revokeObjectURL(data.src);
        }
    }
};

module.exports = URLObject;

/***/ }),

/***/ "./loader/XHR.js":
/*!***********************!*\
  !*** ./loader/XHR.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var XHR = {
    createFileRequest: function createFileRequest(file, settings) {
        var xhrSettings = XHR.merge(settings, file.xhrSettings);

        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open("GET", file.source, xhrSettings.async);

        if (file.xhrSettings.responseType !== undefined) xmlHttpRequest.responseType = file.xhrSettings.responseType;

        xmlHttpRequest.timeout = xhrSettings.timeout;

        xmlHttpRequest.onload = file.onLoad.bind(file);
        xmlHttpRequest.onerror = file.onError.bind(file);
        xmlHttpRequest.onprogress = file.onProgress.bind(file);

        if (file.onReadyStateChange !== undefined) xmlHttpRequest.onreadystatechange = file.onReadyStateChange.bind(file);

        xmlHttpRequest.send();

        return xmlHttpRequest;
    },
    createSettings: function createSettings(type, doAsync, timeout) {
        if (type === undefined) type = '';

        if (doAsync === undefined) doAsync = true;

        if (timeout === undefined) timeout = 0;

        var settings = {
            responseType: type,
            timeout: timeout,
            async: doAsync
        };

        return settings;
    },
    merge: function merge(a, b) {
        var out = {};

        if (a === undefined) out = XHR.createSettings(); // : Extend(global);
        // else
        // do something cool

        if (b) {
            for (var setting in b) {
                if (b[setting] !== undefined) out[setting] = b[setting];
            }
        }

        return out;
    }
};

exports.default = XHR;

/***/ }),

/***/ "./loader/assets/AdditionalLoaderResources.js":
/*!****************************************************!*\
  !*** ./loader/assets/AdditionalLoaderResources.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _AssetTypeHandler = __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _AddAsset = __webpack_require__(/*! ../components/AddAsset */ "./loader/components/AddAsset.js");

var _AddAsset2 = _interopRequireDefault(_AddAsset);

var _File2 = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File3 = _interopRequireDefault(_File2);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _NextAsset = __webpack_require__(/*! ../components/NextAsset */ "./loader/components/NextAsset.js");

var _NextAsset2 = _interopRequireDefault(_NextAsset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdditionalLoaderResource = function (_File) {
    (0, _inherits3.default)(AdditionalLoaderResource, _File);

    function AdditionalLoaderResource(tag, type, config) {
        (0, _classCallCheck3.default)(this, AdditionalLoaderResource);


        config.type = type;

        var assetConfig = {
            type: type,
            tag: tag,
            config: config
        };

        return (0, _possibleConstructorReturn3.default)(this, (AdditionalLoaderResource.__proto__ || (0, _getPrototypeOf2.default)(AdditionalLoaderResource)).call(this, assetConfig));
    }

    (0, _createClass3.default)(AdditionalLoaderResource, [{
        key: "load",
        value: function load(gameLoader) {
            this.loader = gameLoader;

            if (this.state === _LoaderState2.default.FINISHED) {
                this.onDone();
            }
            /// Do nothing
            _NextAsset2.default.call(this.loader, this);
        }
    }, {
        key: "onProcessing",
        value: function onProcessing(processingCallback) {

            this.state = _LoaderState2.default.PROCESSING;

            this.data = this.config;

            this.onDone();

            processingCallback(this);
        }
    }]);
    return AdditionalLoaderResource;
}(_File3.default);

exports.default = AdditionalLoaderResource;


_AssetTypeHandler2.default.register('spritesheet', function (tag, imageTag, config) {

    var resource = void 0;
    var options = config;

    if (!Array.isArray(config)) {

        options = Array.prototype.slice.call(arguments, 2, arguments.length - 2);
    }

    resource = new AdditionalLoaderResource(tag, _AssetsType2.default.spritesheet, {
        imageTag: imageTag,
        x: options[0] || 0,
        y: options[1] || 0,
        frameWidth: options[2] || 0,
        frameHeight: options[3] || 0,
        numberOfImages: options[4] || 0,
        framesPerRow: options[5] || undefined,
        spacing: options[6] || undefined,
        duration: options[7] || arguments[3]
    });

    _AddAsset2.default.call(this, resource);

    return this;
});

_AssetTypeHandler2.default.register('animMachine', function (tag, animations) {

    var resource = new AdditionalLoaderResource(tag, _AssetsType2.default.animMachine, {
        animations: animations || []

    });

    _AddAsset2.default.call(this, resource);

    return this;
});

/***/ }),

/***/ "./loader/assets/AssetTypeHandler.js":
/*!*******************************************!*\
  !*** ./loader/assets/AssetTypeHandler.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ListInjector = __webpack_require__(/*! ../ListInjector */ "./loader/ListInjector.js");

var _ListInjector2 = _interopRequireDefault(_ListInjector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AssetTypeHandler = new _ListInjector2.default();

exports.default = AssetTypeHandler;

/***/ }),

/***/ "./loader/assets/AudioFile.js":
/*!************************************!*\
  !*** ./loader/assets/AudioFile.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _File2 = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File3 = _interopRequireDefault(_File2);

var _AssetTypeHandler = __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _ObjectGet = __webpack_require__(/*! ../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _FindAudioURLPath = __webpack_require__(/*! ./FindAudioURLPath */ "./loader/assets/FindAudioURLPath.js");

var _FindAudioURLPath2 = _interopRequireDefault(_FindAudioURLPath);

var _AddAsset = __webpack_require__(/*! ../components/AddAsset */ "./loader/components/AddAsset.js");

var _AddAsset2 = _interopRequireDefault(_AddAsset);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _PlatformEnvironment = __webpack_require__(/*! ../../system/PlatformEnvironment */ "./system/PlatformEnvironment.js");

var _PlatformEnvironment2 = _interopRequireDefault(_PlatformEnvironment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AudioFile = function (_File) {
    (0, _inherits3.default)(AudioFile, _File);

    function AudioFile(tag, url, path, xhrSettings, context) {
        (0, _classCallCheck3.default)(this, AudioFile);


        var assetConfig = {
            tag: tag,
            type: _AssetsType2.default.audio,
            ext: _ObjectGet2.default.value(url, 'type', ''),
            responseType: 'arraybuffer',
            url: _ObjectGet2.default.value(url, 'uri', url),
            path: path,
            xhrSettings: xhrSettings
        };

        var _this = (0, _possibleConstructorReturn3.default)(this, (AudioFile.__proto__ || (0, _getPrototypeOf2.default)(AudioFile)).call(this, assetConfig));

        _this.context = context;

        return _this;
    }

    (0, _createClass3.default)(AudioFile, [{
        key: "onProcessing",
        value: function onProcessing(processingCallback) {
            this.state = _LoaderState2.default.PROCESSING;

            var self = this;

            // interesting read https://github.com/WebAudio/web-audio-api/issues/1305
            this.context.decodeAudioData(this.xhrRequest.response, function (audioBuffer) {
                self.data = audioBuffer;
                self.onDone();
                processingCallback(self);
            }, function (e) {
                console.error('AudioFile.onProcessing: Failed to decode audio data of the file \'' + self.tag + '\':', e.message);
                self.state = _LoaderState2.default.ERROR;
                processingCallback(self);
            });

            this.context = null;
        }
    }], [{
        key: "create",
        value: function create(loader, tag, urls, config, xhrSettings) {

            /*if ((audioConfig && audioConfig.noAudio))
            {
                console.info('Skipping loading audio \'' + key + '\' since sounds are disabled.');
                return null;
            }*/

            if (!_PlatformEnvironment2.default.supportWebAudio && !_PlatformEnvironment2.default.supportAudio) {
                console.warn('AudioFile.create: WebAudio is not supported.');
                return null;
            }

            var url = (0, _FindAudioURLPath2.default)(urls);

            if (!url) {
                console.warn('AudioFile.create: URL is not supported for audio file \'' + tag + '\'.');
                return null;
            }

            //if (deviceAudio.webAudio && !(audioConfig && audioConfig.disableWebAudio))
            //{
            return new AudioFile(tag, url, loader.path, xhrSettings, game.audio._system.context);
            //}
            /*else
            {
                return new HTML5AudioFile(key, url, loader.path, config, game.sound.locked);
            }*/
        }
    }]);
    return AudioFile;
}(_File3.default);

exports.default = AudioFile;


_AssetTypeHandler2.default.register('audio', function (tag, url, path, xhrSettings) {

    var audio = AudioFile.create(this, tag, url, config, xhrSettings);

    if (audio) {
        _AddAsset2.default.call(this, audio);
    }

    return this;
});

module.exports = AudioFile;

/***/ }),

/***/ "./loader/assets/FindAudioURLPath.js":
/*!*******************************************!*\
  !*** ./loader/assets/FindAudioURLPath.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = FindAudioURLPath;

var _ObjectGet = __webpack_require__(/*! ../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _PlatformEnvironment = __webpack_require__(/*! ../../system/PlatformEnvironment */ "./system/PlatformEnvironment.js");

var _PlatformEnvironment2 = _interopRequireDefault(_PlatformEnvironment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// based on phaser - https://github.com/photonstorm/phaser/blob/src/loader/filetypes/AudioFile.js
function FindAudioURLPath(urls) {
    if (urls.constructor !== Array) urls = [urls];

    for (var i = 0; i < urls.length; i++) {
        var url = _ObjectGet2.default.value(urls[i], 'uri', urls[i]);

        if (url.indexOf('blob:') === 0 || url.indexOf('data:') === 0) {
            return url;
        }

        var type = url.match(/\.([a-zA-Z0-9]+)($|\?)/);
        type = _ObjectGet2.default.value(urls[i], 'type', type ? type[1] : '').toLowerCase();

        if (_PlatformEnvironment2.default.audioFormats[type]) {
            return {
                uri: url,
                type: type
            };
        }
    }

    return null;
}

/***/ }),

/***/ "./loader/assets/ImageFile.js":
/*!************************************!*\
  !*** ./loader/assets/ImageFile.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _File2 = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File3 = _interopRequireDefault(_File2);

var _URLObject = __webpack_require__(/*! ../URLObject */ "./loader/URLObject.js");

var _URLObject2 = _interopRequireDefault(_URLObject);

var _ObjectGet = __webpack_require__(/*! ../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _Path = __webpack_require__(/*! ../../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _AddAsset = __webpack_require__(/*! ../components/AddAsset */ "./loader/components/AddAsset.js");

var _AddAsset2 = _interopRequireDefault(_AddAsset);

var _AssetTypeHandler = __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageFile = function (_File) {
    (0, _inherits3.default)(ImageFile, _File);

    function ImageFile(tag, url, path, xhrSettings, config) {
        (0, _classCallCheck3.default)(this, ImageFile);

        var assetTag = null;

        if (typeof tag === 'string') {
            assetTag = tag;
        } else {
            assetTag = _ObjectGet2.default.value(tag, 'tag', '');
        }

        var assetConfig = {
            type: _AssetsType2.default.image,
            tag: assetTag,
            ext: _ObjectGet2.default.value(tag, 'ext', _Path2.default.getExtension(url)),
            url: _ObjectGet2.default.value(tag, 'file', url),
            path: path,
            responseType: 'blob',
            xhrSettings: _ObjectGet2.default.value(tag, 'xhr', xhrSettings),
            config: _ObjectGet2.default.value(tag, 'config', config)
        };

        return (0, _possibleConstructorReturn3.default)(this, (ImageFile.__proto__ || (0, _getPrototypeOf2.default)(ImageFile)).call(this, assetConfig));
    }

    (0, _createClass3.default)(ImageFile, [{
        key: 'onProcessing',
        value: function onProcessing(processingCallback) {
            this.state = _LoaderState2.default.PROCESSING;
            this.data = new Image();
            this.data.crossOrigin = this.crossOrigin;

            var self = this;

            this.data.onload = function () {

                _URLObject2.default.revoke(self.data);

                self.onDone();

                processingCallback(self);
            };

            this.data.onerror = function () {

                _URLObject2.default.revoke(self.data);

                console.warn("Loader.ImageFile: Error on load file: " + self.url + ".");

                self.state = _LoaderState2.default.ERROR;

                processingCallback(self);
            };

            _URLObject2.default.createFromResponse(this.data, this.xhrRequest.response, 'image/' + this.config.ext);
        }
    }]);
    return ImageFile;
}(_File3.default);

exports.default = ImageFile;


_AssetTypeHandler2.default.register('image', function (tag, url, path, xhrSettings, force) {

    _AddAsset2.default.call(this, new ImageFile(tag, url, this.path, xhrSettings), force);

    return this;
});

module.exports = ImageFile;

/***/ }),

/***/ "./loader/assets/JSONFile.js":
/*!***********************************!*\
  !*** ./loader/assets/JSONFile.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _File2 = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File3 = _interopRequireDefault(_File2);

var _ObjectGet = __webpack_require__(/*! ../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _AddAsset = __webpack_require__(/*! ../components/AddAsset */ "./loader/components/AddAsset.js");

var _AddAsset2 = _interopRequireDefault(_AddAsset);

var _AssetTypeHandler = __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JSONFile = function (_File) {
    (0, _inherits3.default)(JSONFile, _File);

    function JSONFile(tag, url, path, xhrSettings, config) {
        (0, _classCallCheck3.default)(this, JSONFile);


        var assetConfig = {
            type: _AssetsType2.default.json,
            ext: _ObjectGet2.default.value(tag, 'ext', 'json'),
            responseType: 'text',
            tag: tag,
            url: _ObjectGet2.default.value(tag, 'file', url),
            path: path,
            xhrSettings: _ObjectGet2.default.value(tag, 'xhr', xhrSettings)
        };

        var _this = (0, _possibleConstructorReturn3.default)(this, (JSONFile.__proto__ || (0, _getPrototypeOf2.default)(JSONFile)).call(this, assetConfig));

        if ((0, _typeof3.default)(assetConfig.url) === 'object') {
            _this.data = assetConfig.url;
            _this.state = _LoaderState2.default.DONE;
        }

        return _this;
    }

    (0, _createClass3.default)(JSONFile, [{
        key: "onProcessing",
        value: function onProcessing(processingCallback) {
            this.state = _LoaderState2.default.PROCESSING;
            this.data = JSON.parse(this.xhrRequest.responseText);
            this.onDone();
            processingCallback(this);
        }
    }]);
    return JSONFile;
}(_File3.default);

exports.default = JSONFile;


_AssetTypeHandler2.default.register('json', function (tag, url, path, xhrSettings) {
    //this.addAsset(new JSONFile(tag, url, this.path, xhrSettings));
    _AddAsset2.default.call(this, new JSONFile(tag, url, this.path, xhrSettings));
    return this;
});

/***/ }),

/***/ "./loader/assets/SVGFile.js":
/*!**********************************!*\
  !*** ./loader/assets/SVGFile.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _File2 = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File3 = _interopRequireDefault(_File2);

var _ObjectGet = __webpack_require__(/*! ../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _Path = __webpack_require__(/*! ../../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _AddAsset = __webpack_require__(/*! ../components/AddAsset */ "./loader/components/AddAsset.js");

var _AddAsset2 = _interopRequireDefault(_AddAsset);

var _AssetTypeHandler = __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

var _URLObject = __webpack_require__(/*! ../URLObject */ "./loader/URLObject.js");

var _URLObject2 = _interopRequireDefault(_URLObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SVGFile = function (_File) {
        (0, _inherits3.default)(SVGFile, _File);

        function SVGFile(tag, url, path, xhrSettings) {
                (0, _classCallCheck3.default)(this, SVGFile);


                var tag = typeof tag === 'string' ? tag : _ObjectGet2.default.value(tag, 'key', '');

                var assetConfig = {
                        type: _AssetsType2.default.svg,
                        ext: _ObjectGet2.default.value(tag, 'ext', _Path2.default.getExtension(url) || 'svg'),
                        responseType: 'text',
                        tag: tagFile,
                        url: _ObjectGet2.default.value(tag, 'file', url),
                        path: path,
                        xhrSettings: _ObjectGet2.default.value(tag, 'xhr', xhrSettings)
                };

                return (0, _possibleConstructorReturn3.default)(this, (SVGFile.__proto__ || (0, _getPrototypeOf2.default)(SVGFile)).call(this, assetConfig));
        }

        (0, _createClass3.default)(SVGFile, [{
                key: "onProcessing",
                value: function onProcessing(processingCallback) {
                        this.state = _LoaderState2.default.PROCESSING;

                        var self = this;
                        var svg = [this.xhrLoader.responseText];
                        var blob = void 0;

                        try {
                                blob = new window.Blob(svg, { type: 'image/svg+xml;charset=utf-8' });
                        } catch (e) {
                                self.state = _LoaderState2.default.ERROR;
                                processingCallback(self);
                                return;
                        }

                        this.data = new Image();
                        this.data.crossOrigin = this.crossOrigin;

                        this.data.onload = function () {

                                _URLObject2.default.revoke(self.data);

                                self.onDone();

                                processingCallback(self);
                        };

                        this.data.onerror = function () {

                                _URLObject2.default.revoke(self.data);

                                console.warn("Loader.SVGFile: Error on load file: " + self.url + ".");

                                self.state = _LoaderState2.default.ERROR;

                                processingCallback(self);
                        };

                        _URLObject2.default.createFromResponse(this.data, blob, 'image/svg+xml');
                }
        }]);
        return SVGFile;
}(_File3.default);

exports.default = SVGFile;


_AssetTypeHandler2.default.register('svg', function (tag, url, path, xhrSettings) {
        _AddAsset2.default.call(this, new SVGFile(tag, url, this.path, xhrSettings));
        return this;
});

/***/ }),

/***/ "./loader/assets/ScriptFile.js":
/*!*************************************!*\
  !*** ./loader/assets/ScriptFile.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _File2 = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File3 = _interopRequireDefault(_File2);

var _ObjectGet = __webpack_require__(/*! ../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _Path = __webpack_require__(/*! ../../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _AddAsset = __webpack_require__(/*! ../components/AddAsset */ "./loader/components/AddAsset.js");

var _AddAsset2 = _interopRequireDefault(_AddAsset);

var _AssetTypeHandler = __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScriptFile = function (_File) {
        (0, _inherits3.default)(ScriptFile, _File);

        function ScriptFile(tag, url, path, xhrSettings, config) {
                (0, _classCallCheck3.default)(this, ScriptFile);


                var tagFile = typeof tag === 'string' ? tag : _ObjectGet2.default.value(tag, 'key', '');

                var assetConfig = {
                        type: _AssetsType2.default.script,
                        ext: _ObjectGet2.default.value(tag, 'ext', _Path2.default.getExtension(url) || 'js'),
                        responseType: 'text',
                        tag: tagFile,
                        url: _ObjectGet2.default.value(tag, 'file', url),
                        path: path,
                        xhrSettings: _ObjectGet2.default.value(tag, 'xhr', xhrSettings)
                };

                return (0, _possibleConstructorReturn3.default)(this, (ScriptFile.__proto__ || (0, _getPrototypeOf2.default)(ScriptFile)).call(this, assetConfig));
        }

        (0, _createClass3.default)(ScriptFile, [{
                key: "onPostLoad",
                value: function onPostLoad(loader, xhrLoader) {
                        this.state = _LoaderState2.default.PROCESSING;

                        // create the element
                        this.data = document.createElement('script');
                        this.data.language = 'javascript';
                        this.data.type = 'text/javascript';
                        this.data.defer = false;
                        this.data.text = this.xhrRequest.responseText;

                        // append to html document
                        document.head.appendChild(this.data);

                        this.loader.game.events.dispatch('file_postload_' + this.tag);

                        //this.onDone();

                        //processingCallback(this);
                }
        }]);
        return ScriptFile;
}(_File3.default);

exports.default = ScriptFile;


_AssetTypeHandler2.default.register('script', function (tag, url, path, xhrSettings) {
        //this.addAsset(new ScriptFile(tag, url, this.path, xhrSettings));
        _AddAsset2.default.call(this, new ScriptFile(tag, url, this.path, xhrSettings));
        return this;
});

/***/ }),

/***/ "./loader/assets/TextFile.js":
/*!***********************************!*\
  !*** ./loader/assets/TextFile.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _File2 = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File3 = _interopRequireDefault(_File2);

var _ObjectGet = __webpack_require__(/*! ../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _Path = __webpack_require__(/*! ../../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _AddAsset = __webpack_require__(/*! ../components/AddAsset */ "./loader/components/AddAsset.js");

var _AddAsset2 = _interopRequireDefault(_AddAsset);

var _AssetTypeHandler = __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextFile = function (_File) {
    (0, _inherits3.default)(TextFile, _File);

    function TextFile(tag, url, path, xhrSettings, config) {
        (0, _classCallCheck3.default)(this, TextFile);

        var assetTag = null;

        if (typeof tag === 'string') {
            assetTag = tag;
        } else {
            assetTag = _ObjectGet2.default.value(tag, 'tag', '');
        }

        var useExternal = false;

        if (path !== undefined) {
            if (typeof path === "boolean") useExternal = path;
        }

        var assetConfig = {
            type: _AssetsType2.default.text,
            tag: assetTag,
            ext: _ObjectGet2.default.value(tag, 'ext', _Path2.default.getExtension(url)),
            url: _ObjectGet2.default.value(tag, 'file', url),
            path: path,
            responseType: '',
            xhrSettings: _ObjectGet2.default.value(tag, 'xhr', xhrSettings),
            config: _ObjectGet2.default.value(tag, 'config', config),
            useExternal: useExternal
        };

        return (0, _possibleConstructorReturn3.default)(this, (TextFile.__proto__ || (0, _getPrototypeOf2.default)(TextFile)).call(this, assetConfig));
    }

    //onLoad(event) {}

    /*onReadyStateChange(event)
    {
          console.log(event.target);
        if (this.xhrRequest.status == 200)
        {
            if (this.xhrRequest.readyState == 4)
            {
                this.state = LoaderState.PROCESSING;
                //this.data = window.URL.createObjectURL(this.xhrRequest.response);
                this.data = this.xhrRequest.responseText;
                
                //console.log(this.data);
                this.onDone();
                  //processingCallback(this);
                super.onLoad(event);
            }  
        } else {
            super.onLoad(event);
        }
    }*/

    (0, _createClass3.default)(TextFile, [{
        key: 'onProcessing',
        value: function onProcessing(processingCallback) {
            this.state = _LoaderState2.default.PROCESSING;
            //this.data = window.URL.createObjectURL(this.xhrRequest.response);
            this.data = this.xhrRequest.responseText;
            /*var style = document.createElement('style');
            style.innerHTML = this.data;
            document.head.appendChild(style)*/
            // console.log("data:" + this.data);
            this.onDone();

            processingCallback(this);
        }
    }]);
    return TextFile;
}(_File3.default);

exports.default = TextFile;


_AssetTypeHandler2.default.register('text', function (tag, url, path, xhrSettings) {
    var endPointPath = this.path;

    if (path !== undefined) {

        if (typeof path === "boolean") // external link
            endPointPath = path;
    }

    _AddAsset2.default.call(this, new TextFile(tag, url, endPointPath, xhrSettings));
    //this.addAsset(new TextFile(tag, url, endPointPath, xhrSettings));

    return this;
});

module.exports = TextFile;

/***/ }),

/***/ "./loader/assets/TilemapJSON.js":
/*!**************************************!*\
  !*** ./loader/assets/TilemapJSON.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _File = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File2 = _interopRequireDefault(_File);

var _JSONFile2 = __webpack_require__(/*! ./JSONFile */ "./loader/assets/JSONFile.js");

var _JSONFile3 = _interopRequireDefault(_JSONFile2);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _Path = __webpack_require__(/*! ../../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _AddAsset = __webpack_require__(/*! ../components/AddAsset */ "./loader/components/AddAsset.js");

var _AddAsset2 = _interopRequireDefault(_AddAsset);

var _AssetTypeHandler = __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CheckImagesSources(loader, source, fullPath) {

    if (source === undefined) return;

    var size = source.length;

    if (size <= 0) return;

    for (var i = 0; i < size; i++) {

        var tileset = source[i];

        if (tileset.image) {
            var name = _Path2.default.getFilenameWithoutExtension(tileset.image) || tileset.name;
            var path = _Path2.default.getPathWithoutRoot(fullPath).concat(_Path2.default.getFilename(tileset.image));
            loader.image(name, path, undefined, undefined, false);
        }
    }
}

var TilemapFileJSON = function (_JSONFile) {
    (0, _inherits3.default)(TilemapFileJSON, _JSONFile);

    function TilemapFileJSON(tag, url, path, xhrSettings) {
        (0, _classCallCheck3.default)(this, TilemapFileJSON);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TilemapFileJSON.__proto__ || (0, _getPrototypeOf2.default)(TilemapFileJSON)).call(this, tag, url, path, xhrSettings));

        _this.type = _AssetsType2.default.tilemapJSON;

        return _this;
    }

    (0, _createClass3.default)(TilemapFileJSON, [{
        key: 'onPostLoad',
        value: function onPostLoad(loader, xhrLoader) {

            this.state = _LoaderState2.default.PROCESSING;
            this.data = JSON.parse(xhrLoader.responseText);

            // check tileset images and pipe to the loader
            CheckImagesSources(loader, this.data.tilesets, this.url);
        }
    }, {
        key: 'onProcessing',
        value: function onProcessing(processingCallback) {
            this.onDone();
            processingCallback(this);
        }
    }]);
    return TilemapFileJSON;
}(_JSONFile3.default);

exports.default = TilemapFileJSON;


_AssetTypeHandler2.default.register('tilemapJSON', function (tag, url, path, xhrSettings) {
    //this.addAsset(new TilemapFileJSON(tag, url, this.path, xhrSettings));
    _AddAsset2.default.call(this, new TilemapFileJSON(tag, url, this.path, xhrSettings));
    return this;
});

/***/ }),

/***/ "./loader/assets/WebFontFile.js":
/*!**************************************!*\
  !*** ./loader/assets/WebFontFile.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _File2 = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File3 = _interopRequireDefault(_File2);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _Validate = __webpack_require__(/*! ../../utils/Validate */ "./utils/Validate.js");

var _Validate2 = _interopRequireDefault(_Validate);

var _AddAsset = __webpack_require__(/*! ../components/AddAsset */ "./loader/components/AddAsset.js");

var _AddAsset2 = _interopRequireDefault(_AddAsset);

var _AssetTypeHandler = __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

var _NextAsset = __webpack_require__(/*! ../components/NextAsset */ "./loader/components/NextAsset.js");

var _NextAsset2 = _interopRequireDefault(_NextAsset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WebFontFile = function (_File) {
    (0, _inherits3.default)(WebFontFile, _File);

    function WebFontFile(tag, provider, fontFamily, timeout) {
        (0, _classCallCheck3.default)(this, WebFontFile);


        var assetConfig = {
            type: _AssetsType2.default.webFont,
            tag: tag,
            config: {
                provider: provider || 'google',
                families: fontFamily,
                timeout: timeout || 3000
            }
        };

        return (0, _possibleConstructorReturn3.default)(this, (WebFontFile.__proto__ || (0, _getPrototypeOf2.default)(WebFontFile)).call(this, assetConfig));
    }

    (0, _createClass3.default)(WebFontFile, [{
        key: "load",
        value: function load(gameLoader) {
            this.loader = gameLoader;

            if (this.state === _LoaderState2.default.FINISHED) {
                this.onDone();
                _NextAsset2.default.call(this.loader, this);
            } else if (this.loader.webFontLoader !== undefined && this.loader.webFontLoader.state === _LoaderState2.default.DONE) {
                if (this.fontLoad !== undefined) this.fontLoad();
            }

            // Do nothing, wait for signal
        }
    }, {
        key: "fontLoad",
        value: function fontLoad() {

            if (WebFont !== undefined) {

                this.state = _LoaderState2.default.PROCESSING;

                var provider = this.config['provider'];

                if (!_Validate2.default.isArray(this.config.families)) {
                    var families = [];
                    families.push(this.config.families);
                    this.config.families = families;
                }

                var WebFontProvider = {
                    families: this.config.families
                };

                var WebFontConfig = {
                    timeout: this.config.timeout,
                    inactive: this.onError.bind(this),
                    fontactive: this.onLoad.bind(this),
                    classes: true
                };

                WebFontConfig[provider] = WebFontProvider;

                WebFont.load(WebFontConfig);
            }
        }
    }, {
        key: "onLoad",
        value: function onLoad(familyName, fvd) {

            this.data = {
                family: familyName,
                fvd: fvd

                //this.loader.next(this, true);
            };_NextAsset2.default.call(this.loader, this);
        }
    }]);
    return WebFontFile;
}(_File3.default);

exports.default = WebFontFile;


_AssetTypeHandler2.default.register('webFont', function (tag, provider, fontFamily, timeout) {
    //this.addAsset(new WebFontFile(tag, provider, fontFamily, timeout));
    _AddAsset2.default.call(this, new WebFontFile(tag, provider, fontFamily, timeout));
    return this;
});

/***/ }),

/***/ "./loader/assets/index.js":
/*!********************************!*\
  !*** ./loader/assets/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    AssetsTypeHandler: __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js"),
    ImageFile: __webpack_require__(/*! ./ImageFile */ "./loader/assets/ImageFile.js"),
    AudioFile: __webpack_require__(/*! ./AudioFile */ "./loader/assets/AudioFile.js"),
    SVGFile: __webpack_require__(/*! ./SVGFile */ "./loader/assets/SVGFile.js"),
    TextFile: __webpack_require__(/*! ./TextFile */ "./loader/assets/TextFile.js"),
    ScriptFile: __webpack_require__(/*! ./ScriptFile */ "./loader/assets/ScriptFile.js"),
    JSONFile: __webpack_require__(/*! ./JSONFile */ "./loader/assets/JSONFile.js"),
    TilemapJSON: __webpack_require__(/*! ./TilemapJSON */ "./loader/assets/TilemapJSON.js"),
    WebFontFile: __webpack_require__(/*! ./WebFontFile */ "./loader/assets/WebFontFile.js"),
    AdditionalResources: __webpack_require__(/*! ./AdditionalLoaderResources */ "./loader/assets/AdditionalLoaderResources.js")
};

/***/ }),

/***/ "./loader/components/AddAsset.js":
/*!***************************************!*\
  !*** ./loader/components/AddAsset.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AddAsset;

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _ScriptFile = __webpack_require__(/*! ../assets/ScriptFile */ "./loader/assets/ScriptFile.js");

var _ScriptFile2 = _interopRequireDefault(_ScriptFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webFontLoader = null;

var webFontLoaderChecker = function webFontLoaderChecker(loader, asset) {

    if (asset.type !== _AssetsType2.default.webFont) return;

    if (webFontLoader !== null) return;

    webFontLoader = new _ScriptFile2.default('webFontLoader', "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js");
    loader._filesQueue.insert(webFontLoader);
    loader._filesQueueCount++;

    loader.game.events.create('file_postload_webFontLoader').subscribeOnce(function () {
        asset.fontLoad();
    });
};

function AddAsset(asset, check) {

    if (check === undefined) check = true;

    if (!this.isOK() && check) return -1;

    // is if web font, we should load the WebFontLoader
    webFontLoaderChecker(this, asset);

    asset.path = this.path;
    this._filesQueue.insert(asset);
    this._filesQueueCount++;
    return asset;
}

/***/ }),

/***/ "./loader/components/AssetProcessingUpdate.js":
/*!****************************************************!*\
  !*** ./loader/components/AssetProcessingUpdate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AssetProcessingUpdate;

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _DeleteSucceedQueuedAsset = __webpack_require__(/*! ./DeleteSucceedQueuedAsset */ "./loader/components/DeleteSucceedQueuedAsset.js");

var _DeleteSucceedQueuedAsset2 = _interopRequireDefault(_DeleteSucceedQueuedAsset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AssetProcessingUpdate(file) {

    if (file.state === _LoaderState2.default.ERROR) {
        this._failedFiles.insert(file);

        /*if (file.linkFile)
        {
            this.queue.delete(file.linkFile);
        }*/

        //return this.deleteFromSuccessQueue(file);
        return _DeleteSucceedQueuedAsset2.default.call(this, file);
    }

    this._processedFiles.insert(file);

    return _DeleteSucceedQueuedAsset2.default.call(this, file); //this.deleteFromSuccessQueue(file);
}

/***/ }),

/***/ "./loader/components/DeleteSucceedQueuedAsset.js":
/*!*******************************************************!*\
  !*** ./loader/components/DeleteSucceedQueuedAsset.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DeleteSucceedQueuedAsset;

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _ProcessDoneAssets = __webpack_require__(/*! ./ProcessDoneAssets */ "./loader/components/ProcessDoneAssets.js");

var _ProcessDoneAssets2 = _interopRequireDefault(_ProcessDoneAssets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DeleteSucceedQueuedAsset(file) {

    this._successFiles.erase(file);

    if (this._successFiles.size === 0 && this.state === _LoaderState2.default.PROCESSING) _ProcessDoneAssets2.default.call(this);
}

/***/ }),

/***/ "./loader/components/InitializeLoader.js":
/*!***********************************************!*\
  !*** ./loader/components/InitializeLoader.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InitializeLoader;

var _Set = __webpack_require__(/*! ../../structures/Set */ "./structures/Set.js");

var _Set2 = _interopRequireDefault(_Set);

var _EventManager = __webpack_require__(/*! ../../event/EventManager */ "./event/EventManager.js");

var _EventManager2 = _interopRequireDefault(_EventManager);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InitializeLoader() {

    this.cache = this.game.system.cache;

    this._filesQueue = new _Set2.default();
    this._filesLoading = new _Set2.default();
    this._successFiles = new _Set2.default();
    this._failedFiles = new _Set2.default();
    this._processedFiles = new _Set2.default();
    //this.events = new EventManager();

    this._filesQueueCount = 0;
    this._loadedFilesCount = 0;

    this.progress = 0;
    this.path = '';
    this.baseURL = '';
    this.state = _LoaderState2.default.IDLE;
}

/***/ }),

/***/ "./loader/components/LoaderFinished.js":
/*!*********************************************!*\
  !*** ./loader/components/LoaderFinished.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = LoaderFinished;

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _ProcessDoneAssets = __webpack_require__(/*! ./ProcessDoneAssets */ "./loader/components/ProcessDoneAssets.js");

var _ProcessDoneAssets2 = _interopRequireDefault(_ProcessDoneAssets);

var _AssetProcessingUpdate = __webpack_require__(/*! ./AssetProcessingUpdate */ "./loader/components/AssetProcessingUpdate.js");

var _AssetProcessingUpdate2 = _interopRequireDefault(_AssetProcessingUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LoaderFinished() {

    if (this.state === _LoaderState2.default.PROCESSING) return;

    this.progress = 1;
    this.isDownloading = false;
    this.state = _LoaderState2.default.PROCESSING;

    this._processedFiles.clear();

    if (this._successFiles.size === 0) {
        _ProcessDoneAssets2.default.call(this); // this.processingDone();
    } else {

        this._successFiles.each(function (file) {
            file.onProcessing(_AssetProcessingUpdate2.default.bind(this));
        }, this);
    }
}

/***/ }),

/***/ "./loader/components/NextAsset.js":
/*!****************************************!*\
  !*** ./loader/components/NextAsset.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = NextAsset;

var _ProcessAssetsQueue = __webpack_require__(/*! ./ProcessAssetsQueue */ "./loader/components/ProcessAssetsQueue.js");

var _ProcessAssetsQueue2 = _interopRequireDefault(_ProcessAssetsQueue);

var _LoaderFinished = __webpack_require__(/*! ./LoaderFinished */ "./loader/components/LoaderFinished.js");

var _LoaderFinished2 = _interopRequireDefault(_LoaderFinished);

var _UpdateProgress = __webpack_require__(/*! ./UpdateProgress */ "./loader/components/UpdateProgress.js");

var _UpdateProgress2 = _interopRequireDefault(_UpdateProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NextAsset(concludedFile, hasError) {

    if (hasError) this._failedFiles.insert(concludedFile);else this._successFiles.insert(concludedFile);

    this._filesLoading.erase(concludedFile);
    this._loadedFilesCount++;

    //this.updateProgress();
    _UpdateProgress2.default.call(this);

    if (this._filesQueue.size > 0) //(this._loadedFilesCount < this._filesQueueCount)
        {
            //this.processFileQueue();
            _ProcessAssetsQueue2.default.call(this);
        } else if (this._filesLoading.size === 0) {

        //this.loadFinished();
        _LoaderFinished2.default.call(this);
    }
}

/***/ }),

/***/ "./loader/components/ProcessAssetsQueue.js":
/*!*************************************************!*\
  !*** ./loader/components/ProcessAssetsQueue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ProcessAssetsQueue;

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProcessAssetsQueue() {

    var self = this;

    this._filesQueue.each(function (file) {

        if (file.state === _LoaderState2.default.FINISHED || file.state === _LoaderState2.default.PENDING) //  && this.inflight.size < this.maxParallelDownloads))
            {

                self._filesLoading.insert(file);

                self._filesQueue.erase(file);

                self.loadAsset(file);
            }
    });
}

/***/ }),

/***/ "./loader/components/ProcessDoneAssets.js":
/*!************************************************!*\
  !*** ./loader/components/ProcessDoneAssets.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProcessDoneAssets;

var _PreloadSceneComplete = __webpack_require__(/*! ../../scene/components/PreloadSceneComplete */ "./scene/components/PreloadSceneComplete.js");

var _PreloadSceneComplete2 = _interopRequireDefault(_PreloadSceneComplete);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _ParseTiledJSON = __webpack_require__(/*! ../../resources/tilemap/parser/ParseTiledJSON */ "./resources/tilemap/parser/ParseTiledJSON.js");

var _ParseTiledJSON2 = _interopRequireDefault(_ParseTiledJSON);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProcessDoneAssets() {

  this._successFiles.clear();
  this._filesQueue.clear();

  var cache = this.cache;

  if (this._processedFiles.size > 0) {

    // sort the assets by type priority 
    this._processedFiles.sort(function (a, b) {
      return a.type > b.type;
    });

    var self = this;

    // add assets to cache
    this._processedFiles.each(function (file) {

      var asset = void 0;

      switch (file.type) {
        default:
          break;

        case _AssetsType2.default.svg:
        case _AssetsType2.default.image:
          {
            asset = cache.image.add(file.tag, file.data);
            break;
          }

        case _AssetsType2.default.audio:
          {
            asset = cache.audio.add(file.tag, file.data);
            break;
          }
        case _AssetsType2.default.json:
          {
            asset = cache.json.add(file.tag, file.data);
            break;
          }

        case _AssetsType2.default.tilemapJSON:
          {
            asset = (0, _ParseTiledJSON2.default)(file.tag, file.data, cache);
            cache.tilemap.add(file.tag, asset);
            break;
          }

        case _AssetsType2.default.spritesheet:
          {
            asset = cache.animation.add(file.tag, file.data);
            break;
          }

        case _AssetsType2.default.animMachine:
          {
            asset = cache.animMachine.add(file.tag, file.data);
            break;
          }
      }

      if (asset !== undefined) self.game.events.dispatch('asset_complete', asset, file.type);
    });

    //
  }
  this._processedFiles.clear();
  this.state = _LoaderState2.default.DONE;

  //this.game.scene.preloadComplete();
  _PreloadSceneComplete2.default.call(this.game.scene);
}

/***/ }),

/***/ "./loader/components/StartLoadAssets.js":
/*!**********************************************!*\
  !*** ./loader/components/StartLoadAssets.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = StartLoadAssets;

var _LoaderFinished = __webpack_require__(/*! ./LoaderFinished */ "./loader/components/LoaderFinished.js");

var _LoaderFinished2 = _interopRequireDefault(_LoaderFinished);

var _ProcessAssetsQueue = __webpack_require__(/*! ./ProcessAssetsQueue */ "./loader/components/ProcessAssetsQueue.js");

var _ProcessAssetsQueue2 = _interopRequireDefault(_ProcessAssetsQueue);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StartLoadAssets() {

    if (!this.isOK()) {
        return -1;
    }

    this.progress = 0;
    this._loadedFilesCount = 0;
    this.state = _LoaderState2.default.LOADING;
    this._filesQueueCount = this._filesQueue.size;

    if (this._filesQueue.size === 0) {
        //console.log(0);
        //this.loadFinished();
        _LoaderFinished2.default.call(this);
    } else {
        this.isDownloading = true;
        this._successFiles.clear();
        this._failedFiles.clear();
        this._filesLoading.clear();

        //this.processFileQueue();
        _ProcessAssetsQueue2.default.call(this);
    }
}

/***/ }),

/***/ "./loader/components/UpdateProgress.js":
/*!*********************************************!*\
  !*** ./loader/components/UpdateProgress.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateProgress;
function UpdateProgress() {

    //var progress = 0;

    if (this._filesQueueCount != 0) {
        this.progress = 1 - this._loadedFilesCount / this._filesQueueCount;
    }
    //progress = parseFloat(this._successCount) / parseFloat(this._filesQueueCount);

    //this.progress = progress;
}

/***/ }),

/***/ "./loader/index.js":
/*!*************************!*\
  !*** ./loader/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    LoaderState: __webpack_require__(/*! ./LoaderState */ "./loader/LoaderState.js"),
    File: __webpack_require__(/*! ./File */ "./loader/File.js"),
    XHR: __webpack_require__(/*! ./XHR */ "./loader/XHR.js"),
    URLObject: __webpack_require__(/*! ./URLObject */ "./loader/URLObject.js"),
    AssetsType: __webpack_require__(/*! ./AssetsType */ "./loader/AssetsType.js"),
    Assets: __webpack_require__(/*! ./assets */ "./loader/assets/index.js"),
    LoaderManager: __webpack_require__(/*! ./LoaderManager */ "./loader/LoaderManager.js")

};

/***/ }),

/***/ "./math/BoundingBox.js":
/*!*****************************!*\
  !*** ./math/BoundingBox.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Vector = __webpack_require__(/*! ./Vector2 */ "./math/Vector2.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _Rect = __webpack_require__(/*! ./Rect */ "./math/Rect.js");

var _Rect2 = _interopRequireDefault(_Rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoundingBox = function () {
  function BoundingBox(x, y, width, height) {
    (0, _classCallCheck3.default)(this, BoundingBox);


    this.min = new _Vector2.default();
    this.max = new _Vector2.default();

    if (x instanceof BoundingBox) {

      this.min.copy(x.min);
      this.max.copy(x.max);
    } else {
      x = x || Infinity;
      y = y || Infinity;
      width = width || -Infinity;
      height = height || -Infinity;

      this.min.x = x;
      this.min.y = y;
      this.max.x = width;
      this.max.y = height;
    }
  }

  (0, _createClass3.default)(BoundingBox, [{
    key: 'set',
    value: function set(minX, minY, maxX, maxY) {

      this.min.set(minX, minY);
      this.max.set(maxX, maxY);
      //this.box.set(this.min.x,this.min.y,this.max.x-this.min.x,this.max.y-this.min.y);
      return this;
    }
  }, {
    key: 'setMin',
    value: function setMin(minX, minY) {
      this.min.x = minX;
      this.min.y = minY;
      return this;
    }
  }, {
    key: 'setMax',
    value: function setMax(maxX, maxY) {
      this.max.x = maxX;
      this.max.y = maxY;
      return this;
    }
  }, {
    key: 'move',
    value: function move(x, y) {
      this.min.x += x;
      this.min.y += y;
      this.max.x += x;
      this.max.y += y;
    }
  }, {
    key: 'intersects',
    value: function intersects(bounds) {
      return this.max.x >= bounds.min.x && this.max.y >= bounds.min.y && this.min.x <= bounds.max.x && this.min.y <= bounds.max.y || this.min.x >= bounds.max.x && this.min.y >= bounds.max.y && this.max.x <= bounds.min.x && this.max.y <= bounds.min.y;
    }
  }, {
    key: 'contains',
    value: function contains(x, y) {
      return x > this.min.x && y > this.min.y && x < this.max.x && y < this.max.y;
    }
  }, {
    key: 'expand',
    value: function expand(xRadius, yRadius) {

      yRadius = yRadius || xRadius;

      if (this.max.x > this.min.x) {
        this.min.x -= xRadius;
        this.max.x += xRadius;
      } else {
        this.min.x += xRadius;
        this.max.x -= xRadius;
      }

      if (this.max.y > this.min.y) {
        this.min.y -= yRadius;
        this.max.y += yRadius;
      } else {
        this.min.y += yRadius;
        this.max.y -= yRadius;
      }
      return this;
    }
  }, {
    key: 'decrease',
    value: function decrease(xRadius, yRadius) {
      return this.expand(-xRadius, -yRadius);
    }
  }, {
    key: 'merge',
    value: function merge(value) {

      // merge with another bounds
      if (value instanceof BoundingBox) {
        this.min.x = Math.min(this.min.x, value.min.x);
        this.min.y = Math.min(this.min.y, value.min.y);
        this.max.x = Math.max(this.max.x, value.max.x);
        this.max.y = Math.max(this.max.y, value.max.y);
        return this;
      } else if (value instanceof _Vector2.default) {
        return this.mergeWithPoint(value.x, value.y);
      } else {
        this.min.x = Math.min(this.min.x, value);
        this.min.y = Math.min(this.min.y, value);
        this.max.x = Math.max(this.max.x, value);
        this.max.y = Math.max(this.max.y, value);
        return this;
      }
    }
  }, {
    key: 'mergeWithPoint',
    value: function mergeWithPoint(x, y) {
      this.min.x = Math.min(this.min.x, x);
      this.min.y = Math.min(this.min.y, y);
      this.max.x = Math.max(this.max.x, x);
      this.max.y = Math.max(this.max.y, y);
      return this;
    }
  }, {
    key: 'extend',
    value: function extend(bounds) {
      // min merge
      if (bounds.min.x < this.min.x) this.min.x = bounds.min.x;

      if (bounds.min.y < this.min.y) this.min.y = bounds.min.y;

      // max merge
      if (bounds.max.x > this.max.x) this.max.x = bounds.max.x;

      if (bounds.max.y > this.max.y) this.max.y = bounds.max.y;

      return this;
    }
  }, {
    key: 'extendByPoint',
    value: function extendByPoint(x, y) {
      if (x < this.min.x) this.min.x = x;
      if (y < this.min.y) this.min.y = y;
      if (x > this.max.x) this.max.x = x;
      if (y > this.max.y) this.max.y = y;

      return this;
    }
  }, {
    key: 'limit',
    value: function limit(xmin, ymin, xmax, ymax) {
      if (this.min.x < xmin) this.min.x = xmin;

      if (this.min.y < ymin) this.min.y = ymin;

      if (this.max.x > xmax) this.max.x = xmax;

      if (this.max.y > ymax) this.max.y = ymax;
    }
  }, {
    key: 'offset',
    value: function offset(x, y) {
      var o = {
        x: x,
        y: y
      };
      o.x -= this.min.x;
      o.y -= this.min.y;

      if (this.max.x > this.min.x) o.x /= this.max.x - this.min.x;

      if (this.max.y > this.min.y) o.y /= this.max.y - this.min.y;

      return o;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return "{ min: " + this.min.toString() + ", max: " + this.max.toString() + " }";
    }
  }, {
    key: 'copy',
    value: function copy(bounds) {
      this.min.copy(bounds.min);
      this.max.copy(bounds.max);
      return this;
    }
  }, {
    key: 'center',
    get: function get() {
      return new _Vector2.default((this.max.x - this.min.x) / 2, (this.max.y - this.min.y) / 2);
    }
  }, {
    key: 'size',
    get: function get() {
      return new _Vector2.default(this.max.x - this.min.x, this.max.y - this.min.y);
    }
  }]);
  return BoundingBox;
}();

exports.default = BoundingBox;

/***/ }),

/***/ "./math/MathUtils.js":
/*!***************************!*\
  !*** ./math/MathUtils.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MathUtils = {

  toRadian: Math.PI / 180,
  toDegree: 180 / Math.PI,
  TAU: Math.PI * 2,
  //HALFPI : Math.PI / 2,
  EPSILON: Math.pow(2, -52),
  HALFPI: 1.5707963267948966,

  floor: function floor(value) {
    return value >> 0;
  },

  round: function round(value) {
    // With a bitwise or.
    //let rounded = (0.5 + value) | 0;
    // FASTEST - A double bitwise not.
    return ~~(0.5 + value);

    // Finally, a left bitwise shift.
    //rounded = (0.5 + value) << 0;
  },

  abs: function abs(value) {
    return value < 0 ? -value : value;
  },

  max: function max(a, b) {
    return a < b ? b : a;
  },

  min: function min(a, b) {
    return !(b < a) ? a : b;
  },

  sign: function sign(value) {
    return value < 0 ? -1 : value > 0 ? 1 : 0;
  },

  clamp: function clamp(value, min, max) {
    return value > min ? value < max ? value : max : min;
  },

  lerp: function lerp(fromValue, toValue, t) {
    return (1.0 - t) * fromValue + t * toValue;
  },

  clampedLerp: function clampedLerp(fromValue, toValue, t) {
    t = MathUtils.clamp(t, 0.0, 1.0);
    return MathUtils.lerp(fromValue, toValue, t);
  },

  impreciseLerp: function impreciseLerp(fromValue, toValue, t) {
    return fromValue + t * (toValue - fromValue);
  },

  distance: function distance(x0, y0, x1, y1) {
    return Math.sqrt((x0 -= x1) * x0 + (y0 -= y1) * y0);
  },

  angleBetween: function angleBetween(x0, y0, x1, y1) {
    var angle = this.toDegree(Math.atan2(y1 - y0, x1 - x0));

    if (angle < 0 && angle >= -180) angle = 360 + angle;

    return angle;
  },

  radianToDegree: function radianToDegree(radians) {
    return radians * MathUtils.toDegree;
  },

  degreeToRadian: function degreeToRadian(degrees) {
    return degrees * MathUtils.toRadian;
  },

  manhattan: function manhattan(from_x, from_y, to_x, to_y) {
    return {
      x: MathUtils.abs(to_x - from_x),
      y: MathUtils.abs(to_y - from_y)
    };
  },

  inManhattanRadius: function inManhattanRadius(from_x, from_y, to_x, to_y, radius, radius_y) {
    if (radius_y === undefined) radius_y = radius;
    var dist = this.manhattan(from_x, from_y, to_x, to_y);
    if (dist.x <= radius && dist.y <= radius_y) return true;else return false;
  },

  average: function average() {
    var length = arguments.length;
    if (length === 0) return 0;
    return this.sum.apply(this, arguments) / length;
  },

  sum: function sum() {
    var length = arguments.length;
    if (length === 0) return 0;
    var r = arguments[0];
    for (var i = 1; i < length; i++) {
      r += arguments[i];
    }
    return r;
  },

  sub: function sub() {
    var length = arguments.length;
    if (length === 0) return 0;
    var r = arguments[0];
    for (var i = 1; i < length; i++) {
      r -= arguments[i];
    }
    return r;
  },

  lerpAngle: function lerpAngle(fromValue, toValue, t) {

    /*var shortest_angle = ((((toValue - fromValue) % 360) + 540) % 360) - 180;
    return shortest_angle * t;*/

    var end = toValue;
    var start = fromValue;

    var difference = Math.abs(end - start);
    if (difference > 180) {
      // We need to add on to one of the values.
      if (end > start) {
        // We'll add it on to start...
        start += 360;
      } else {
        // Add it on to end.
        end += 360;
      }
    }

    // Interpolate it.
    var value = start + (end - start) * t;

    // Wrap it..
    var rangeZero = 360;

    if (value >= 0 && value <= 360) return value;

    return value % rangeZero;
  }

};

(0, _freeze2.default)(MathUtils);

exports.default = MathUtils;

/***/ }),

/***/ "./math/Matrix3.js":
/*!*************************!*\
  !*** ./math/Matrix3.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*


* | a | b | x | * | 0 | 2 | 4 |
* | c | d | y | * | 1 | 3 | 5 |
* | 0 | 0 | 1 |

* | 0 | 3 | 6 | * | a | c | x |
* | 1 | 4 | 7 | * | b | d | y |
* | 2 | 5 | 8 | * | 0 | 0 | 1 |

a = scale_x
b = cos
x = x translate

c = scale_y
d = sin
y = y translate

HTML5/CSS3 uses matrices in column-major order based.

*/

var Matrix3 = function () {

  /*
  * Constructor is identity only
  */
  function Matrix3(a, b) {
    (0, _classCallCheck3.default)(this, Matrix3);


    /*a = a || i;
    b = b || 0;
    x = x || 0;
      c = c || 0;   
    d = d || i;   
    y = y || 0;*/

    a = a || 0;
    b = b || 0;

    this.a = [];

    // first column
    this.a[0] = a;
    this.a[1] = b;
    this.a[2] = b;
    // second column
    this.a[3] = b;
    this.a[4] = a;
    this.a[5] = b;
    // third column
    this.a[6] = b;
    this.a[7] = b;
    this.a[8] = a;
    //this.at = null;
  }

  (0, _createClass3.default)(Matrix3, [{
    key: "at",
    value: function at(i, j) {
      return this.a[i + j * 3];
    }
  }, {
    key: "set",
    value: function set(i, j, value) {
      this.a[i + j * 3] = value;
      return this;
    }
  }, {
    key: "setIdentity",
    value: function setIdentity() {
      return this.setTransform(1, 0, 0, 0, 1, 0, 0, 0, 1);
    }
  }, {
    key: "setTransform",
    value: function setTransform(a, b, c, d, e, f, g, h, i) {

      this.a[0] = a;
      this.a[1] = b;
      this.a[2] = c; // 0

      this.a[3] = d;
      this.a[4] = e;
      this.a[5] = f; // 0

      this.a[6] = g; // x
      this.a[7] = h; // y
      this.a[8] = i;

      return this;
    }
  }, {
    key: "translate",
    value: function translate(x, y) {

      /* | a | b | x | * | 0 | 2 | 4 |
      *  | c | d | y | * | 1 | 3 | 5 |
        * | 0 | 3 | 6 | * | a | c | x |
      * | 1 | 4 | 7 | * | b | d | y |
      * | 2 | 5 | 8 |
      */
      // 4 = 0 * x * 2 * y + 4
      // 5 = 1 * x * 3 * y + 5

      // 6 = 1 * x + 3 * y + 5
      // 7 = 1 * x + 4 * y + 7
      this.a[6] = this.a[0] * x + this.a[3] * y + this.a[6];
      this.a[7] = this.a[1] * x + this.a[4] * y + this.a[7];
      return this;
    }
  }, {
    key: "scale",
    value: function scale(x, y) {

      this.a[0] *= x; // a
      this.a[1] *= x; // b

      this.a[3] *= y; // c
      this.a[4] *= y; // d

      this.a[6] *= x; // x
      this.a[7] *= y; // y
      return this;
    }
  }, {
    key: "rotate",
    value: function rotate(radianAngle) {
      var cos = Math.cos(radianAngle);
      var sin = Math.sin(radianAngle);

      return this.radianRotate(cos, sin);
    }
  }, {
    key: "radianRotate",
    value: function radianRotate(cos, sin) {
      return this.transform(cos, sin, -sin, cos, 0, 0);
    }
  }, {
    key: "transform",
    value: function transform(a, b, c, d, x, y) {
      var a00 = this.a[0]; // a
      var a01 = this.a[1]; // b

      var a10 = this.a[3]; // c
      var a11 = this.a[4]; // d

      var a20 = this.a[6]; // x
      var a21 = this.a[7]; // y

      this.a[0] = a * a00 + b * a10; // a * a0 + b * c0;
      this.a[1] = a * a01 + b * a11; // a * b0 + b * d0;

      this.a[3] = c * a00 + d * a10; // c * a0 + d * c0;
      this.a[4] = c * a01 + d * a11; // c * b0 + d * d0;

      this.a[6] = x * a00 + y * a10 + a20; // x * a0 + y * c0 + x0;
      this.a[7] = x * a01 + y * a11 + a21; // x * b0 + y * d0 + y0;

      return this;
    }
  }, {
    key: "setModelMatrix",
    value: function setModelMatrix(position, scale, rotation, origin) {
      this.a[0] = rotation.x * scale.x; // a
      this.a[1] = rotation.y * scale.x; // b
      this.a[3] = -rotation.y * scale.y; // c
      this.a[4] = rotation.x * scale.y; // d
      this.a[6] = position.x; // x
      this.a[7] = position.y; // y

      /*if (origin !== undefined) {
        this.a[6] -= origin.x * this.a[0] + origin.y * this.a[3];
        this.a[7] -= origin.y * this.a[1] + origin.y * this.a[4];
      }*/

      return this;
      /*
      a  =  _transform._cosSin.x * _transform.scale.x;
      b  = _transform._cosSin.y * _transform.scale.x;
      c  = -_transform._cosSin.y * _transform.scale.y;
      d  =  _transform._cosSin.x * _transform.scale.y;
      x =  _transform.position.x;
      y =  _transform.position.y;
        x -= _transform.origin.x * a + _transform.origin.y * c;
      y -= _transform.origin.y * b + _transform.origin.y * d;
      */
    }
  }, {
    key: "multiply",
    value: function multiply(other) {

      // faster way
      var a00 = this.a[0]; // a - 0
      var a01 = this.a[1]; // b - 1
      var a10 = this.a[3]; // c - 3
      var a11 = this.a[4]; // d - 4
      var a20 = this.a[6]; // x - 6
      var a21 = this.a[7]; // y - 7

      this.a[0] = other.a[0] * a00 + other.a[1] * a10; // a1 * a0 + b1 * c0;
      this.a[1] = other.a[0] * a01 + other.a[1] * a11; // a1 * b0 + b1 * d0;

      this.a[3] = other.a[3] * a00 + other.a[4] * a10; // c1 * a0 + d1 * c0;
      this.a[4] = other.a[3] * a01 + other.a[4] * a11; // c1 * b0 + d1 * d0;

      this.a[6] = other.a[6] * a00 + other.a[7] * a10 + a20; // x1 * a0 + y1 * c0 + x0;
      this.a[7] = other.a[6] * a01 + other.a[7] * a11 + a21; // x1 * b0 + y1 * d0 + y0;

      return this;
    }
  }, {
    key: "concat",
    value: function concat(other) {

      var a = this.a[0]; // a - 0
      var b = this.a[1]; // b - 1
      var c = this.a[3]; // c - 3
      var d = this.a[4]; // d - 4
      var x = this.a[6]; // x - 6
      var y = this.a[7]; // y - 7

      this.a[0] = a * other.a[0] + b * other.a[3]; // a * pt.a + b * pt.c;
      this.a[1] = a * other.a[1] + b * other.a[4]; // a * pt.b + b * pt.d;

      this.a[3] = c * other.a[0] + d * other.a[3]; // c * pt.a + d * pt.c;
      this.a[4] = c * other.a[1] + d * other.a[4]; // c * pt.b + d * pt.d;

      this.a[6] = x * other.a[0] + y * other.a[3] + other.a[6]; // x * pt.a + y * pt.c + pt.x;
      this.a[7] = x * other.a[1] + y * other.a[4] + other.a[7]; // x * pt.b + y * pt.d + pt.y;

      return this;
    }
  }, {
    key: "transformPoint",
    value: function transformPoint(x, y) {

      var point = { x: 0, y: 0 };

      point.x = x * this.a[0] + y * this.a[3] + this.a[6];
      point.y = x * this.a[1] + y * this.a[4] + this.a[7];

      return point;
    }
  }, {
    key: "transpose",
    value: function transpose() {
      return this.setAll(mat.a[0], mat.a[3], mat.a[6], mat.a[1], mat.a[4], mat.a[7], mat.a[2], mat.a[5], mat.a[8]);
    }
  }, {
    key: "toString",
    value: function toString() {
      var str = "";
      for (var y = 0; y < 3; y++) {
        for (var x = 0; x < 3; x++) {
          var val = this.at(x, y);
          //str += val.toString() + " ";
          //console.log("---- " + (x + y * 3).toString());
          str += val + " ";
        }
        str += "\n";
      }

      return str;
    }
  }], [{
    key: "identity",
    value: function identity() {
      return new Matrix3(1);
    }
  }, {
    key: "zero",
    value: function zero() {
      return new Matrix3(0);
    }
  }, {
    key: "transpose",
    value: function transpose(mat) {
      var copy = Matrix3.zero;
      return copy.setAll(mat.a[0], mat.a[3], mat.a[6], mat.a[1], mat.a[4], mat.a[7], mat.a[2], mat.a[5], mat.a[8]);
    }
  }, {
    key: "multiplySlow",
    value: function multiplySlow(a, b) {
      var mat = Matrix3.zero(); // zeroes
      var val = void 0;

      for (var i = 0; i < 3; ++i) {
        for (var j = 0; j < 3; ++j) {
          for (var k = 0; k < 3; ++k) {
            val = mat.at(i, k);
            val += a.at(i, j) * b.at(j, k);
            mat.set(i, k, val);
          }
        }
      }

      return mat;
    }
  }]);
  return Matrix3;
}();

exports.default = Matrix3;

/***/ }),

/***/ "./math/Rect.js":
/*!**********************!*\
  !*** ./math/Rect.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Simple class for rectangle. Usage for collision.
* @class Rect
* @constructor
*/

var Rect = function () {
  function Rect(x, y, width, height) {
    (0, _classCallCheck3.default)(this, Rect);

    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
  }

  (0, _createClass3.default)(Rect, [{
    key: "set",
    value: function set(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      return this;
    }
  }, {
    key: "setPostion",
    value: function setPostion(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }
  }, {
    key: "setSize",
    value: function setSize(width, height) {
      this.width = width;
      this.height = height;
      return this;
    }
  }, {
    key: "copy",
    value: function copy(rect) {
      this.x = rect.x;
      this.y = rect.y;
      this.width = rect.width;
      this.height = rect.height;
      return this;
    }
  }, {
    key: "intersects",
    value: function intersects(rect) {
      return Rect.intersects(this, rect);
    }
  }, {
    key: "contains",
    value: function contains(x, y) {
      return Rect.contains(this, x, y);
    }
  }, {
    key: "center",
    get: function get() {
      var vec = {};
      vec.x = this.x + this.width / 2;
      vec.y = this.y + this.height / 2;
      return vec;
    }
  }], [{
    key: "intersects",
    value: function intersects(rect1, rect2) {

      if (rect1.width <= 0 || rect1.height <= 0 || rect2.width <= 0 || rect2.height <= 0) return false;

      return !(rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.y + rect1.height < rect2.y);
    }
  }, {
    key: "contains",
    value: function contains(rect, x, y) {

      if (rect.width <= 0 && rect.height <= 0) return false;

      return x > rect.x && x < rect.x + rect.width && y >= rect.y && y < rect.y + rect.height;
    }
  }, {
    key: "intersectionArea",
    value: function intersectionArea(rect1, rect2) {

      var out = new scintilla.Rect();

      if (scintilla.Rect.intersects(rect1, rect2)) {

        out.y = Math.max(a.y, b.y);
        out.x = Math.max(a.x, b.x);
        out.width = Math.min(a.x + a.width, b.x + b.width) - out.x;
        out.height = Math.min(a.y + a.height, b.y + b.height) - out.y;
      }

      return out;
    }
  }]);
  return Rect;
}();

exports.default = Rect;

/***/ }),

/***/ "./math/Vector2.js":
/*!*************************!*\
  !*** ./math/Vector2.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _MathUtils = __webpack_require__(/*! ./MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Class for points and vectors.
* @class Vector2
* @constructor
*/
var Vector2 = function () {
  function Vector2(x, y, managed) {
    (0, _classCallCheck3.default)(this, Vector2);


    this.x = x || 0;
    this.y = y || 0;
    this.managed = managed || undefined;
  }

  (0, _createClass3.default)(Vector2, [{
    key: "set",
    value: function set(x, y) {

      this.x = x;
      this.y = y || x;

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "move",
    value: function move(x, y) {

      this.x += x;
      this.y += y;

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "scale",
    value: function scale(x, y) {

      this.x *= x;
      this.y *= y || x;

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "rotate",
    value: function rotate(radians) {

      var x = this.x;
      var y = this.y;
      this.x = x * Math.cos(radians) - y * Math.sin(radians);
      this.y = x * Math.sin(radians) + y * Math.cos(radians);

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "rotateAround",
    value: function rotateAround(radians, other) {

      /*var x = this.x;
      var y = this.y;*/
      var dx = this.x - other.x;
      var dy = this.y - other.y;

      var c = Math.cos(radians);
      var s = Math.sin(radians);

      /*this.x = c * (x-other.x) - s * (y-other.y) + other.x;
      this.y = s * (x-other.x) + c * (y-other.y) + other.y;*/

      this.x = other.x + (c * dx - s * dy);
      this.y = other.y + (s * dx + c * dy);

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "copy",
    value: function copy(otherVector) {

      this.x = otherVector.x;
      this.y = otherVector.y;

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "normalize",
    value: function normalize() {

      var mag = this.length();
      if (mag > 0) {
        this.x = this.x / mag;
        this.y = this.y / mag;
      }

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "round",
    value: function round() {
      this.x = _MathUtils2.default.round(this.x);
      this.y = _MathUtils2.default.round(this.y);
      return this;
    }
  }, {
    key: "reverse",
    value: function reverse() {
      this.x = -this.x;
      this.y = -this.y;

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "add",
    value: function add(other) {
      this.x += other.x;
      this.y += other.y;

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "sub",
    value: function sub(other) {
      this.x -= other.x;
      this.y -= other.y;

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "perp",
    value: function perp() {

      var x = this.x;
      this.x = this.y;
      this.y = -x;

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "dot",
    value: function dot(other) {
      return Vector2.dot(this, other);
    }
  }, {
    key: "project",
    value: function project(other) {
      return Vector2.project(this, other);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Vector2(this.x, this.y);
    }
  }, {
    key: "length",
    value: function length() {
      return Math.sqrt(this.squaredLenght());
    }
  }, {
    key: "toString",
    value: function toString() {
      return "{ x: " + this.x + ", y: " + this.y + " }";
    }
  }, {
    key: "squaredLenght",
    value: function squaredLenght() {
      return Vector2.dot(this, this);
    }
  }, {
    key: "magnitude",
    get: function get() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: "normal",
    get: function get() {
      var mag = this.magnitude;
      var vec = new Vector2(this.x / mag, this.y / mag);
      return vec;
    }
  }], [{
    key: "abs",
    value: function abs(vector) {
      return new Vector2(Math.abs(vector.x), Math.abs(vector.y));
    }
  }, {
    key: "scalar",
    value: function scalar(a, b) {
      return a.x * b.y - a.y * b.x;
    }
  }, {
    key: "distance",
    value: function distance(a, b) {
      return _MathUtils2.default.distance(a.x, a.y, b.x, b.y);
    }
  }, {
    key: "angleBetween",
    value: function angleBetween(a, b) {
      return _MathUtils2.default.angleBetween(a.x, a.y, b.x, b.y);
    }
  }, {
    key: "dot",
    value: function dot(a, b) {
      return a.x * b.x + a.y * b.y;
    }
  }, {
    key: "project",
    value: function project(a, b) {
      var dp = Vector2.dot(a, b);
      var proj = new Vector2(dp / (b.x * b.x + b.y * b.y) * b.x, dp / (b.x * b.x + b.y * b.y) * b.y);
      return proj;
    }
  }, {
    key: "projectNormal",


    // project for unit vector
    value: function projectNormal(a, b) {
      var dp = Vector2.dot(a, b);
      var proj = new Vector2(dp / b.x, dp / b.y);
      return proj;
    }
  }, {
    key: "reflect",
    value: function reflect(vec, axis) {

      var r = Vector2.project(vec, axis);
      r.scale(2);
      r.sub(vec);
      return r;
    }
  }, {
    key: "reflectNormal",
    value: function reflectNormal(vec, axis) {

      var r = Vector2.projectNormal(vec, axis);
      r.scale(2);
      r.sub(vec);
      return r;
    }
  }, {
    key: "lerp",
    value: function lerp(a, b, t) {
      var vec = new Vector2(_MathUtils2.default.lerp(a.x, b.x, t), _MathUtils2.default.lerp(a.y, b.y, t));
      return vec;
    }
  }]);
  return Vector2;
}();

exports.default = Vector2;

/***/ }),

/***/ "./math/easing/Ease.js":
/*!*****************************!*\
  !*** ./math/easing/Ease.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

var _EaseIn = __webpack_require__(/*! ./EaseIn */ "./math/easing/EaseIn.js");

var _EaseIn2 = _interopRequireDefault(_EaseIn);

var _EaseOut = __webpack_require__(/*! ./EaseOut */ "./math/easing/EaseOut.js");

var _EaseOut2 = _interopRequireDefault(_EaseOut);

var _EaseInOut = __webpack_require__(/*! ./EaseInOut */ "./math/easing/EaseInOut.js");

var _EaseInOut2 = _interopRequireDefault(_EaseInOut);

var _EasingType = __webpack_require__(/*! ./EasingType */ "./math/easing/EasingType.js");

var _EasingType2 = _interopRequireDefault(_EasingType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Easing functions
 */
var Ease = {

  /**
   * Ease-in functions
   */
  in: _EaseIn2.default,

  /**
   * Ease-out functions
   */
  out: _EaseOut2.default,

  /**
   * Ease-in-out functions
   */
  inout: _EaseInOut2.default,

  Type: _EasingType2.default
};

(0, _freeze2.default)(Ease);

exports.default = Ease;

/***/ }),

/***/ "./math/easing/EaseIn.js":
/*!*******************************!*\
  !*** ./math/easing/EaseIn.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _MathUtils = __webpack_require__(/*! ../MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _EasingType = __webpack_require__(/*! ./EasingType */ "./math/easing/EasingType.js");

var _EasingType2 = _interopRequireDefault(_EasingType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EaseInFunctions = function () {
    function EaseInFunctions() {
        (0, _classCallCheck3.default)(this, EaseInFunctions);
    }

    (0, _createClass3.default)(EaseInFunctions, [{
        key: "linear",


        /**
         * 
         * @param {Number} from 
         * @param {Number} to 
         * @param {Number} t 
         * @param {Number} [duration]
         */
        value: function linear(from, to, t) {
            return _MathUtils2.default.lerp(from, to, t);
        }
    }, {
        key: "stepped",
        value: function stepped(from, to, t) {

            if (t < 0.5) return from;

            return from + to;
        }
    }, {
        key: "cut",
        value: function cut(from, to, t, levels) {
            if (levels === undefined) levels = 2;
            return _MathUtils2.default.lerp(from, to, _MathUtils2.default.floor(t * levels) / levels);
        }
    }, {
        key: "sine",
        value: function sine(from, to, t) {
            return to * (Math.sin(t * _MathUtils2.default.HALFPI - _MathUtils2.default.HALFPI) + 1) + from;
        }
    }, {
        key: "power",
        value: function power(from, to, t, _power) {
            return to * Math.pow(t, _power) + from;
        }
    }, {
        key: "quadratic",
        value: function quadratic(from, to, t) {
            return this.power(from, to, t, 2);
        }
    }, {
        key: "cubic",
        value: function cubic(from, to, t) {
            return this.power(from, to, t, 3);
        }
    }, {
        key: "quartic",
        value: function quartic(from, to, t) {
            return this.power(from, to, t, 4);
        }
    }, {
        key: "quintic",
        value: function quintic(from, to, t) {
            return this.power(from, to, t, 5);
        }
    }, {
        key: "exponential",
        value: function exponential(from, to, t) {
            return t == 0 ? from : to * Math.pow(2, 10 * (t - 1)) + from;
        }
    }, {
        key: "circ",
        value: function circ(from, to, t) {
            return -to * (Math.sqrt(1 - t * t) - 1) + from;
        }
    }, {
        key: "elastic",
        value: function elastic(from, to, t, duration) {
            if (duration === undefined) duration = 1;

            if (t == 0) return from;
            if ((t /= duration) == 1) return from + to;

            var p = duration * 0.3;
            var s = p / 4;
            // this is a fix, again, with post-increment operators
            var postFix = to * Math.pow(2, 10 * (t -= 1));
            return -(postFix * Math.sin((t * duration - s) * (2 * Math.PI) / p)) + from;
        }
    }, {
        key: "back",
        value: function back(from, to, t) {
            return to * t * t * ((_EasingType.EASE_BACK_CONST + 1) * t - _EasingType.EASE_BACK_CONST) + from;
        }

        /**
         * Ease-in by specific EasingType.
         * 
         * @param {EasingType} type The type of easing
         * @param {Number} from Start point
         * @param {Number} to End point
         * @param {Number} t Normalized time
         * @param {Number} [arg] Additional argument for specific types:
         * 
         * @constant EasingType.CUT: The cell levels of the interpolation
         * @constant EasintType.ELASTIC: The duration of the easing.
         * @constant EasintType.POWER: The pow product.
         */

    }, {
        key: "by",
        value: function by(type, from, to, t, arg) {

            if (arg === undefined) arg = 3;

            switch (type) {

                case _EasingType2.default.NONE:
                    return t;
                case _EasingType2.default.STEPPED:
                    return this.stepped(from, to, t);
                case _EasingType2.default.CUT:
                    return this.cut(from, to, t, arg);
                case _EasingType2.default.LINEAR:
                    return this.linear(from, to, t);
                case _EasingType2.default.SINE:
                    return this.sine(from, to, t);
                case _EasingType2.default.QUADRATIC:
                    return this.power(from, to, t, 2);
                case _EasingType2.default.CUBIC:
                    return this.power(from, to, t, 3);
                case _EasingType2.default.QUARTIC:
                    return this.power(from, to, t, 4);
                case _EasingType2.default.QUINTIC:
                    return this.power(from, to, t, 5);
                case _EasingType2.default.POWER:
                    return this.power(from, to, t, arg);
                case _EasingType2.default.EXPONENTIAL:
                    return this.exponential(from, to, t);
                case _EasingType2.default.CIRC:
                    return this.circ(from, to, t);
                case _EasingType2.default.BACK:
                    return this.back(from, to, t);
                case _EasingType2.default.ELASTIC:
                    return this.elastic(from, to, t, arg);
            }

            return t;
        }
    }]);
    return EaseInFunctions;
}();

;

var EaseIn = new EaseInFunctions();

(0, _freeze2.default)(EaseIn);

exports.default = EaseIn;

/***/ }),

/***/ "./math/easing/EaseInOut.js":
/*!**********************************!*\
  !*** ./math/easing/EaseInOut.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _MathUtils = __webpack_require__(/*! ../MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _EaseIn = __webpack_require__(/*! ./EaseIn */ "./math/easing/EaseIn.js");

var _EaseIn2 = _interopRequireDefault(_EaseIn);

var _EasingType = __webpack_require__(/*! ./EasingType */ "./math/easing/EasingType.js");

var _EasingType2 = _interopRequireDefault(_EasingType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EaseInOutFunctions = function () {
    function EaseInOutFunctions() {
        (0, _classCallCheck3.default)(this, EaseInOutFunctions);
    }

    (0, _createClass3.default)(EaseInOutFunctions, [{
        key: "linear",
        value: function linear(from, to, t) {
            return _MathUtils2.default.lerp(from, to, t);
        }
    }, {
        key: "stepped",
        value: function stepped(from, to, t) {
            return to * (t < 0.5 ? 0 : 1) + from;
        }
    }, {
        key: "cut",
        value: function cut(from, to, t, levels) {
            if (levels === undefined) levels = 2;
            return _MathUtils2.default.lerp(from, to, _MathUtils2.default.floor(t * levels) / levels);
        }
    }, {
        key: "sine",
        value: function sine(from, to, t) {
            return to * ((Math.sin(t * Math.PI - _MathUtils2.default.HALFPI) + 1) / 2) + from;
        }
    }, {
        key: "power",
        value: function power(from, to, t, _power) {

            t *= 2;
            if (t < 1) return _EaseIn2.default.power(from, to, t, _power) / 2;

            var sign = _power % 2 == 0 ? -1 : 1;
            return to * (sign / 2.0 * (Math.pow(s - 2, _power) + sign * 2)) + from;
        }
    }, {
        key: "quadratic",
        value: function quadratic(from, to, t) {
            return this.power(from, to, t, 2);
        }
    }, {
        key: "cubic",
        value: function cubic(from, to, t) {
            return this.power(from, to, t, 3);
        }
    }, {
        key: "quartic",
        value: function quartic(from, to, t) {
            return this.power(from, to, t, 4);
        }
    }, {
        key: "quintic",
        value: function quintic(from, to, t) {
            return this.power(from, to, t, 5);
        }
    }, {
        key: "exponential",
        value: function exponential(from, to, t) {

            if (t == 0.0 || t == 1.0) return to * t + from;

            if (t < 0.5) {
                return to * 0.5 * Math.pow(2, 20 * t - 10) + from;
            } else {
                return to * -0.5 * Math.pow(2, -20 * t + 10) + 1 + from;
            }
        }
    }, {
        key: "circ",
        value: function circ(from, to, t) {

            if (t / 2 < 1) return -to / 2 * (Math.sqrt(1 - t * t) - 1) + from;

            return to / 2 * (Math.sqrt(1 - t * (t -= 2)) + 1) + from;
        }
    }, {
        key: "elastic",
        value: function elastic(from, to, t, duration) {
            if (duration === undefined) duration = 1;

            if (t == 0) return from;

            if ((t /= duration / 2) == 2) return from + to;

            var p = duration * (0.3 * 1.5);

            var s = p / 4;
            var postFix = 0;

            if (to >= Math.abs(to)) {
                s = p / (2 * Math.PI) * Math.asin(to / to);
            }

            if (t < 1) {
                postFix = to * Math.pow(2, 10 * (t -= 1));
                return -0.5 * (postFix * Math.sin((t * duration - s) * (2 * Math.PI) / p)) + from;
            }

            // postIncrement is evil
            postFix = to * Math.pow(2, -10 * (t -= 1));
            return postFix * Math.sin((t * duration - s) * (2 * Math.PI) / p) * 0.5 + to + from;
        }
    }, {
        key: "back",
        value: function back(from, to, t) {

            if (t == 0) return from;

            if ((t /= 0.5) == 2) return from + to;

            var p = .3 * 1.5;
            var s = _EasingType.EASE_BACK_CONST;

            if (t < 1) return to / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + from;

            return to / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + from;
        }

        /**
         * Ease-in and ease out by specific EasingType.
         * 
         * @param {EasingType} type The type of easing
         * @param {Number} from Start point
         * @param {Number} to End point
         * @param {Number} t Normalized time
         * @param {Number} [arg] Additional argument for specific types:
         * 
         * @constant EasingType.CUT: The cell levels of the interpolation
         * @constant EasintType.ELASTIC: The duration of the easing.
         * @constant EasintType.POWER: The pow product.
         */

    }, {
        key: "by",
        value: function by(type, from, to, t, arg) {

            if (arg === undefined) arg = 1;

            switch (type) {

                case _EasingType2.default.NONE:
                    return t;
                case _EasingType2.default.CUT:
                    return this.cut(from, to, t, arg);
                case _EasingType2.default.LINEAR:
                    return this.linear(from, to, t);
                case _EasingType2.default.SINE:
                    return this.sine(from, to, t);
                case _EasingType2.default.QUADRATIC:
                    return this.power(from, to, t, 2);
                case _EasingType2.default.CUBIC:
                    return this.power(from, to, t, 3);
                case _EasingType2.default.QUARTIC:
                    return this.power(from, to, t, 4);
                case _EasingType2.default.QUINTIC:
                    return this.power(from, to, t, 5);
                case _EasingType2.default.POWER:
                    return this.power(from, to, t, arg);
                case _EasingType2.default.EXPONENTIAL:
                    return this.exponential(from, to, t);
                case _EasingType2.default.CIRC:
                    return this.circ(from, to, t);
                case _EasingType2.default.BACK:
                    return this.back(from, to, t);
                case _EasingType2.default.ELASTIC:
                    return this.elastic(from, to, t, arg);
            }

            return t;
        }
    }]);
    return EaseInOutFunctions;
}();

var EaseInOut = new EaseInOutFunctions();

(0, _freeze2.default)(EaseInOut);

exports.default = EaseInOut;

/***/ }),

/***/ "./math/easing/EaseOut.js":
/*!********************************!*\
  !*** ./math/easing/EaseOut.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _MathUtils = __webpack_require__(/*! ../../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _EasingType = __webpack_require__(/*! ./EasingType */ "./math/easing/EasingType.js");

var _EasingType2 = _interopRequireDefault(_EasingType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EaseOutFunction = function () {
    function EaseOutFunction() {
        (0, _classCallCheck3.default)(this, EaseOutFunction);
    }

    (0, _createClass3.default)(EaseOutFunction, [{
        key: 'linear',
        value: function linear(from, to, t) {
            return _MathUtils2.default.lerp(from, to, t);
        }
    }, {
        key: 'stepped',
        value: function stepped(from, to, t) {
            return to * (t < 0.5 ? 0 : 1) + from;
        }
    }, {
        key: 'cut',
        value: function cut(from, to, t, levels) {
            if (levels === undefined) levels = 2;
            return _MathUtils2.default.lerp(from, to, _MathUtils2.default.floor(t * levels) / levels);
        }
    }, {
        key: 'sine',
        value: function sine(from, to, t) {
            return -from * (Math.sin(t * _MathUtils2.default.HALFPI) + 1) + from + to;
        }
    }, {
        key: 'power',
        value: function power(from, to, t, _power) {
            var sign = _power % 2 == 0 ? -1 : 1;
            return to * (sign * Math.pow(t - 1, _power) + sign) + from;
        }
    }, {
        key: 'quadratic',
        value: function quadratic(from, to, t) {
            return this.power(from, to, t, 2);
        }
    }, {
        key: 'cubic',
        value: function cubic(from, to, t) {
            return this.power(from, to, t, 3);
        }
    }, {
        key: 'quartic',
        value: function quartic(from, to, t) {
            return this.power(from, to, t, 4);
        }
    }, {
        key: 'quintic',
        value: function quintic(from, to, t) {
            return this.power(from, to, t, 5);
        }
    }, {
        key: 'exponential',
        value: function exponential(from, to, t) {
            return t == 1 ? from : to * (1 - Math.pow(2, 10 * t)) + from;
        }
    }, {
        key: 'circ',
        value: function circ(from, to, t) {
            return to * Math.sqrt(1 - (t - 1) * t) + from;
        }
    }, {
        key: 'elastic',
        value: function elastic(from, to, t, duration) {
            if (duration === undefined) duration = 1;

            if (t == 0) return from;
            if ((t /= duration) == 1) return from + to;

            var p = duration * 0.3;
            var s = p / 4;
            return to * Mathf.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1 + from;
        }
    }, {
        key: 'back',
        value: function back(from, to, t) {
            //let f = (1 - t);
            //return to * (1 - (f * f * f - f * Mathf.Sin(f * Math.PI))) + from;
            return to * ((t - 1) * t * ((_EasingType.EASE_BACK_CONST + 1) * t + _EasingType.EASE_BACK_CONST) + 1) + from;
        }

        /**
         * Ease-out by specific EasingType.
         * 
         * @param {EasingType} type The type of easing
         * @param {Number} from Start point
         * @param {Number} to End point
         * @param {Number} t Normalized time
         * @param {Number} [arg] Additional argument for specific types:
         * 
         * @constant EasingType.CUT: The cell levels of the interpolation
         * @constant EasintType.ELASTIC: The duration of the easing.
         * @constant EasintType.POWER: The pow product.
         */

    }, {
        key: 'by',
        value: function by(type, from, to, t, arg) {

            if (arg === undefined) arg = 1;

            switch (type) {

                case _EasingType2.default.NONE:
                    return t;
                case _EasingType2.default.STEPPED:
                    return this.stepped(from, to, t);
                case _EasingType2.default.CUT:
                    return this.cut(from, to, t, arg);
                case _EasingType2.default.LINEAR:
                    return this.linear(from, to, t);
                case _EasingType2.default.SINE:
                    return this.sine(from, to, t);
                case _EasingType2.default.QUADRATIC:
                    return this.power(from, to, t, 2);
                case _EasingType2.default.CUBIC:
                    return this.power(from, to, t, 3);
                case _EasingType2.default.QUARTIC:
                    return this.power(from, to, t, 4);
                case _EasingType2.default.QUINTIC:
                    return this.power(from, to, t, 5);
                case _EasingType2.default.POWER:
                    return this.power(from, to, t, arg);
                case _EasingType2.default.EXPONENTIAL:
                    return this.exponential(from, to, t);
                case _EasingType2.default.CIRC:
                    return this.circ(from, to, t);
                case _EasingType2.default.BACK:
                    return this.back(from, to, t);
                case _EasingType2.default.ELASTIC:
                    return this.elastic(from, to, t, arg);
            }

            return t;
        }
    }]);
    return EaseOutFunction;
}();

var EaseOut = new EaseOutFunction();

(0, _freeze2.default)(EaseOut);

exports.default = EaseOut;

//module.exports = EaseOut;

/***/ }),

/***/ "./math/easing/EasingType.js":
/*!***********************************!*\
  !*** ./math/easing/EasingType.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EASE_BACK_CONST = undefined;

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Describes the easing method type
 */
var EasingType = {
  /**
   * No easing : 0
   */
  NONE: 0,
  /**
   * Clamped interpolation between tMin and tMax : 1
   */
  STEPPED: 1,
  /**
   * Linear interpolation : 2
   */
  LINEAR: 2,
  CUT: 3,
  SINE: 4,
  QUADRATIC: 5,
  CUBIC: 6,
  QUARTIC: 7,
  QUINTIC: 8,
  POWER: 9,
  EXPONENTIAL: 10,
  CIRC: 11,
  BACK: 12,
  ELASTIC: 13,
  BOUNCE: 14

};

var EASE_BACK_CONST = exports.EASE_BACK_CONST = 1.70158;

(0, _freeze2.default)(EasingType);

exports.default = EasingType;

/***/ }),

/***/ "./math/easing/index.js":
/*!******************************!*\
  !*** ./math/easing/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    Ease: __webpack_require__(/*! ./Ease */ "./math/easing/Ease.js").default,
    Type: __webpack_require__(/*! ./EasingType */ "./math/easing/EasingType.js").default

};

/***/ }),

/***/ "./math/random/Mash.js":
/*!*****************************!*\
  !*** ./math/random/Mash.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Mash;

// From http://baagoe.com/en/RandomMusings/javascript/
// Johannes BaagÃ¸e <baagoe@baagoe.com>, 2010
function Mash() {
  var n = 0xefc8249d;

  var mash = function mash(data) {
    data = data.toString();
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  mash.version = 'Mash 0.9';
  return mash;
}

/***/ }),

/***/ "./math/random/RandomGenerator.js":
/*!****************************************!*\
  !*** ./math/random/RandomGenerator.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _seal = __webpack_require__(/*! babel-runtime/core-js/object/seal */ "../node_modules/babel-runtime/core-js/object/seal.js");

var _seal2 = _interopRequireDefault(_seal);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Mash = __webpack_require__(/*! ./Mash */ "./math/random/Mash.js");

var _Mash2 = _interopRequireDefault(_Mash);

var _MathUtils = __webpack_require__(/*! ../MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ms
//const uint32 a = 214013;
//const uint32 c = 2531011;
// b
//const RNG_A = 8253729;
//const RNG_B = 2396403;
// Alea
var RNG_A = 2091639;
var RNG_B = 2.3283064365386963e-10; // 2^-32;
var FRAC = 1.1102230246251565e-16; // 2^-53


// From http://baagoe.com/en/RandomMusings/javascript/

var RandomGenerator = function () {
    function RandomGenerator() {
        (0, _classCallCheck3.default)(this, RandomGenerator);

        this.c = 1;
        this.s0 = 0;
        this.s1 = 0;
        this.s2 = 0;
        this.n = 0xefc8249d;
        this._mash = (0, _Mash2.default)();
    }

    (0, _createClass3.default)(RandomGenerator, [{
        key: "rand",
        value: function rand() {
            // common lcg =  (a * seed + c);
            var t = RNG_A * this.s0 + this.c * RNG_B; // 2^-32
            this.s0 = this.s1;
            this.s1 = this.s2;
            this.c = t | 0;
            this.s2 = t - this.c;
            return this.s2;
        }
    }, {
        key: "uint32",
        value: function uint32() {
            return this.rand() * 0x100000000; // ^32
        }
    }, {
        key: "frac",
        value: function frac() {
            return this.rand() + (this.rand() * 0x200000 | 0) * FRAC;
        }

        // 0...1

    }, {
        key: "real",
        value: function real() {
            return this.uint32() + this.frac();
        }

        // real range

    }, {
        key: "range",
        value: function range(from, to) {
            return this.frac() * (to - from) + from;
        }

        // integer

    }, {
        key: "irange",
        value: function irange(from, to) {
            return _MathUtils2.default.floor(this.range(0, to - from) + from);
            //MathUtils.floor(Math.random() * (max - min)) + min;
        }
    }, {
        key: "reset",
        value: function reset(seeds) {
            this.n = 0xefc8249d;
            this.s0 = this._mash(' ');
            this.s1 = this._mash(' ');
            this.s2 = this._mash(' ');
            this.c = 1;

            for (var i = 0; i < seeds.length && seeds[i] != null; i++) {
                var seed = seeds[i];

                this.s0 -= this._mash(seed);
                this.s0 += ~~(this.s0 < 0);
                this.s1 -= this._mash(seed);
                this.s1 += ~~(this.s1 < 0);
                this.s2 -= this._mash(seed);
                this.s2 += ~~(this.s2 < 0);
            }
        }
    }]);
    return RandomGenerator;
}();

var Random = new RandomGenerator();

(0, _seal2.default)(Random);

exports.default = Random;

/***/ }),

/***/ "./modules/Module.js":
/*!***************************!*\
  !*** ./modules/Module.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Module = function () {
    function Module(moduleType, moduleName, moduleManager) {
        (0, _classCallCheck3.default)(this, Module);

        this._moduleType = moduleType || "none";
        this._moduleName = moduleName || "noName";
        this._enabled = true;
        this.entity = null;
        this.moduleManager = moduleManager || null;

        (0, _freeze2.default)(this._moduleType);
        (0, _freeze2.default)(this._moduleName);

        if (moduleManager !== null) {
            this.entity = moduleManager.entity;
        }
    }

    (0, _createClass3.default)(Module, [{
        key: "type",
        get: function get() {
            return this._moduleType;
        }
    }, {
        key: "name",
        get: function get() {
            return this._moduleName;
        }
    }, {
        key: "enabled",
        get: function get() {
            return this._enabled;
        },
        set: function set(value) {
            value = !!value;

            if (value !== this._enabled) {
                this._enabled = value;
            }
        }
    }]);
    return Module;
}();

//module.exports = Module;


exports.default = Module;

/***/ }),

/***/ "./modules/ModuleAttacher.js":
/*!***********************************!*\
  !*** ./modules/ModuleAttacher.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _ModuleProvider = __webpack_require__(/*! ./ModuleProvider */ "./modules/ModuleProvider.js");

var _ModuleProvider2 = _interopRequireDefault(_ModuleProvider);

var _GetRenderModule = __webpack_require__(/*! ./components/GetRenderModule */ "./modules/components/GetRenderModule.js");

var _GetRenderModule2 = _interopRequireDefault(_GetRenderModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModuleAttacher = function () {
    function ModuleAttacher(moduleManager) {
        (0, _classCallCheck3.default)(this, ModuleAttacher);

        this.moduleManager = moduleManager;
    }

    (0, _createClass3.default)(ModuleAttacher, [{
        key: "sprite",
        value: function sprite(tag, frameX, frameY, frameWidth, frameHeight) {
            return _ModuleProvider2.default.attach(this.moduleManager, 'sprite', [tag, frameX, frameY, frameWidth, frameHeight]);
        }
    }, {
        key: "tilemap",
        value: function tilemap(tag) {

            if (tag === undefined || tag == null) {
                console.warn("ModuleAttacher.tilemap: Can not create Tilemap module without a proper tag name.");
                return null;
            }

            return _ModuleProvider2.default.attach(this.moduleManager, 'tilemap', tag);
        }
    }, {
        key: "spritesheet",
        value: function spritesheet(tag) {

            var spriteModule = (0, _GetRenderModule2.default)(this.moduleManager, 'spritesheet', "SpriteSheet");

            if (spriteModule === null) return null;else return _ModuleProvider2.default.attach(this.moduleManager, 'spritesheet', [spriteModule, tag]);
        }
    }, {
        key: "animMachine",
        value: function animMachine(tag) {

            var spriteModule = (0, _GetRenderModule2.default)(this.moduleManager, 'animMachine', "AnimationMachine");

            if (spriteModule === null) return null;else return _ModuleProvider2.default.attach(this.moduleManager, 'animMachine', [spriteModule, tag]);
        }
    }, {
        key: "rectangle",
        value: function rectangle(width, height, color) {
            return _ModuleProvider2.default.attach(this.moduleManager, 'rectangle', [width, height, color]);
        }
    }]);
    return ModuleAttacher;
}();

exports.default = ModuleAttacher;

/***/ }),

/***/ "./modules/ModuleManager.js":
/*!**********************************!*\
  !*** ./modules/ModuleManager.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _List = __webpack_require__(/*! ../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _ModuleAttacher = __webpack_require__(/*! ./ModuleAttacher */ "./modules/ModuleAttacher.js");

var _ModuleAttacher2 = _interopRequireDefault(_ModuleAttacher);

var _Validate = __webpack_require__(/*! ../utils/Validate */ "./utils/Validate.js");

var _Validate2 = _interopRequireDefault(_Validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModulesMap = {
    'sprite': 'render'
};

var ModuleManager = function () {
    function ModuleManager(entity) {
        (0, _classCallCheck3.default)(this, ModuleManager);

        this.entity = entity || null;
        this.attached = new _Map2.default();
        this._pendingModulesInitialization = new _List2.default();
        this.attach = new _ModuleAttacher2.default(this);
    }

    (0, _createClass3.default)(ModuleManager, [{
        key: 'detach',
        value: function detach(moduleName, index) {}
    }, {
        key: 'has',
        value: function has(moduleType) {
            return this.attached.has(moduleType);
        }
    }, {
        key: 'hasByName',
        value: function hasByName(moduleName) {

            var moduleType = ModulesMap[moduleName];

            if (moduleType === undefined) return false;

            return this.has(moduleType);
        }
    }, {
        key: 'get',
        value: function get(moduleType) {
            return this.attached.get(moduleType);
        }
    }, {
        key: 'getByName',
        value: function getByName(moduleType) {

            if (!_Validate2.default.isString(moduleName)) return null;

            var r = this.attached.find(function (key, value) {

                if (value.name === moduleName) return value;
            });

            return r || null;
        }
    }]);
    return ModuleManager;
}();

exports.default = ModuleManager;

/***/ }),

/***/ "./modules/ModuleProvider.js":
/*!***********************************!*\
  !*** ./modules/ModuleProvider.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _InitializeModuleBase = __webpack_require__(/*! ./components/InitializeModuleBase */ "./modules/components/InitializeModuleBase.js");

var _InitializeModuleBase2 = _interopRequireDefault(_InitializeModuleBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModuleProviderManager = function () {
    function ModuleProviderManager() {
        (0, _classCallCheck3.default)(this, ModuleProviderManager);

        this.proxyModules = new _Map2.default();
    }

    (0, _createClass3.default)(ModuleProviderManager, [{
        key: 'attach',
        value: function attach(moduleManager, moduleName, args) {
            var attached = moduleManager.attached;

            if (attached.has(moduleName)) throw new Error('ModuleManager.attach: Could not attach module ' + moduleName + '. Already exists');

            if (!this.proxyModules.has(moduleName)) throw new Error('ModuleManager.attach: Module type ' + moduleName + ' don\'t exists.');

            // create a new module
            var newModule = this.proxyModules.get(moduleName)(moduleManager, args);

            // initialize entity module
            (0, _InitializeModuleBase2.default)(newModule, moduleManager.entity);

            // attach the new module to manager
            attached.insert(newModule.type, newModule);

            // add to pending initialization list only modules that require this option
            if (newModule.type === 'render') {
                moduleManager._pendingModulesInitialization.push(newModule);
            }

            return newModule;
        }
    }, {
        key: 'register',
        value: function register(moduleName, func) {
            if (!ModuleProvider.proxyModules.has(moduleName)) ModuleProvider.proxyModules.insert(moduleName, func); // { type: moduleType, func: func }
        }
    }]);
    return ModuleProviderManager;
}();

var ModuleProvider = new ModuleProviderManager();

exports.default = ModuleProvider;

/***/ }),

/***/ "./modules/animation/AnimationBaseModule.js":
/*!**************************************************!*\
  !*** ./modules/animation/AnimationBaseModule.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Module2 = __webpack_require__(/*! ../Module */ "./modules/Module.js");

var _Module3 = _interopRequireDefault(_Module2);

var _ObjectGet = __webpack_require__(/*! ../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnimationBaseModule = function (_Module) {
  (0, _inherits3.default)(AnimationBaseModule, _Module);

  function AnimationBaseModule(moduleName, moduleManager, config) {
    (0, _classCallCheck3.default)(this, AnimationBaseModule);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AnimationBaseModule.__proto__ || (0, _getPrototypeOf2.default)(AnimationBaseModule)).call(this, 'animation', moduleName, moduleManager));

    _this._resource = _ObjectGet2.default.value(config, 'resource', null);
    _this._spriteModule = _ObjectGet2.default.value(config, 'spriteModule', null);

    _this.isPlaying = false;
    _this.isPaused = false;
    _this._timer = 0;
    _this._position = 0;
    _this.currentFrame = 0;
    _this.speed = 0;
    return _this;
  }

  (0, _createClass3.default)(AnimationBaseModule, [{
    key: "setDuration",
    value: function setDuration(value) {

      if (this._resource === null) return;

      this._resource.duration = value;
    }
  }, {
    key: "play",
    value: function play() {

      if (this.isPlaying || this._resource === null) return this;

      this.isPlaying = true;
      this.isPaused = false;

      return this;
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.isPaused || this._resource === null) return this;

      this.isPaused = true;
      this.isPlaying = false;

      return this;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.isPaused = false;
      this.isPlaying = false;
      this.currentFrame = 0;
      this._timer = 0;
      return this;
    }
  }, {
    key: "restart",
    value: function restart() {
      this.stop();
      this.isPlaying = true;
      return this;
    }
  }]);
  return AnimationBaseModule;
}(_Module3.default);

exports.default = AnimationBaseModule;

/***/ }),

/***/ "./modules/animation/AnimationControl.js":
/*!***********************************************!*\
  !*** ./modules/animation/AnimationControl.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ "../node_modules/babel-runtime/helpers/get.js");

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Module = __webpack_require__(/*! ../Module */ "./modules/Module.js");

var _Module2 = _interopRequireDefault(_Module);

var _AnimationResource = __webpack_require__(/*! ../../resources/animation/AnimationResource */ "./resources/animation/AnimationResource.js");

var _AnimationResource2 = _interopRequireDefault(_AnimationResource);

var _ModuleProvider = __webpack_require__(/*! ../ModuleProvider */ "./modules/ModuleProvider.js");

var _ModuleProvider2 = _interopRequireDefault(_ModuleProvider);

var _AnimationBaseModule2 = __webpack_require__(/*! ./AnimationBaseModule */ "./modules/animation/AnimationBaseModule.js");

var _AnimationBaseModule3 = _interopRequireDefault(_AnimationBaseModule2);

var _InitializeAnimationModule = __webpack_require__(/*! ./components/InitializeAnimationModule */ "./modules/animation/components/InitializeAnimationModule.js");

var _InitializeAnimationModule2 = _interopRequireDefault(_InitializeAnimationModule);

var _ResourceType = __webpack_require__(/*! ../../resources/ResourceType */ "./resources/ResourceType.js");

var _ResourceType2 = _interopRequireDefault(_ResourceType);

var _SetSpritesheetFrame = __webpack_require__(/*! ./components/SetSpritesheetFrame */ "./modules/animation/components/SetSpritesheetFrame.js");

var _SetSpritesheetFrame2 = _interopRequireDefault(_SetSpritesheetFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnimationControl = function (_AnimationBaseModule) {
  (0, _inherits3.default)(AnimationControl, _AnimationBaseModule);

  function AnimationControl(moduleManager, config) {
    (0, _classCallCheck3.default)(this, AnimationControl);

    // playing stuff
    var _this = (0, _possibleConstructorReturn3.default)(this, (AnimationControl.__proto__ || (0, _getPrototypeOf2.default)(AnimationControl)).call(this, 'animationControl', moduleManager, config));

    _this.loop = false;

    (0, _InitializeAnimationModule2.default)(_this);
    return _this;
  }

  (0, _createClass3.default)(AnimationControl, [{
    key: "getKeyFrame",
    value: function getKeyFrame(frameIndex) {
      if (this._resource === null) return null;

      return this._resource.get(frameIndex);
    }
  }, {
    key: "stop",
    value: function stop() {

      (0, _get3.default)(AnimationControl.prototype.__proto__ || (0, _getPrototypeOf2.default)(AnimationControl.prototype), "stop", this).call(this);

      if (this._resource === null) return;

      if (this._resource.type === _ResourceType2.default.Spritesheet) {
        (0, _SetSpritesheetFrame2.default)(this._spriteModule, this._resource.get(0));
      }
    }
  }, {
    key: "trackPosition",
    get: function get() {
      return this._position;
    }
  }, {
    key: "animation",
    get: function get() {
      return this._resource;
    },
    set: function set(animation) {

      var animResource = void 0;

      if (typeof animation === 'string') {
        if (this._resource.name === animation) {
          return;
        }
        animResource = this.entity.game.system.cache.animation.get(animation);
      } else if (animation instanceof AnimationResource) {
        animResource = animation;
      }

      if (animResource !== undefined) {
        this._resource = animResource;
        //this.loop = animation.loop;
      } else {
        console.warn("AnimationControl.setAnimation: Could not set animation. The animation is undefined.");
      }
    }
  }]);
  return AnimationControl;
}(_AnimationBaseModule3.default);

exports.default = AnimationControl;


_ModuleProvider2.default.register('spritesheet', function (moduleManager, args) {

  var asset = args[1];

  if (args[1] !== undefined) {
    // this.entity.game.system.cache.image.get(tag);
    asset = moduleManager.entity.game.system.cache.animation.get(asset);
  }

  var config = {
    resource: asset,
    spriteModule: args[0]
  };

  var spritesheetModule = new AnimationControl(moduleManager, config);

  return spritesheetModule;
});

/***/ }),

/***/ "./modules/animation/AnimationMachine.js":
/*!***********************************************!*\
  !*** ./modules/animation/AnimationMachine.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ "../node_modules/babel-runtime/helpers/get.js");

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Map = __webpack_require__(/*! ../../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _AnimationBaseModule2 = __webpack_require__(/*! ./AnimationBaseModule */ "./modules/animation/AnimationBaseModule.js");

var _AnimationBaseModule3 = _interopRequireDefault(_AnimationBaseModule2);

var _ModuleProvider = __webpack_require__(/*! ../ModuleProvider */ "./modules/ModuleProvider.js");

var _ModuleProvider2 = _interopRequireDefault(_ModuleProvider);

var _InitializeAnimationModule = __webpack_require__(/*! ./components/InitializeAnimationModule */ "./modules/animation/components/InitializeAnimationModule.js");

var _InitializeAnimationModule2 = _interopRequireDefault(_InitializeAnimationModule);

var _ResourceType = __webpack_require__(/*! ../../resources/ResourceType */ "./resources/ResourceType.js");

var _ResourceType2 = _interopRequireDefault(_ResourceType);

var _SetSpritesheetFrame = __webpack_require__(/*! ./components/SetSpritesheetFrame */ "./modules/animation/components/SetSpritesheetFrame.js");

var _SetSpritesheetFrame2 = _interopRequireDefault(_SetSpritesheetFrame);

var _AnimationMachineResource = __webpack_require__(/*! ../../resources/animation/AnimationMachineResource */ "./resources/animation/AnimationMachineResource.js");

var _AnimationMachineResource2 = _interopRequireDefault(_AnimationMachineResource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnimationMachine = function (_AnimationBaseModule) {
  (0, _inherits3.default)(AnimationMachine, _AnimationBaseModule);

  function AnimationMachine(moduleManager, config) {
    (0, _classCallCheck3.default)(this, AnimationMachine);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AnimationMachine.__proto__ || (0, _getPrototypeOf2.default)(AnimationMachine)).call(this, 'animMachine', moduleManager, config));

    _this._currentState = null;

    (0, _InitializeAnimationModule2.default)(_this);

    return _this;
  }

  (0, _createClass3.default)(AnimationMachine, [{
    key: 'setState',
    value: function setState(stateName) {
      if (this.resource === null) return;

      var animation = this._resource.get(stateName);

      if (animation !== null && animation !== undefined) {
        this._currentState = animation;
        //this._currentStateName = animation.name;
        this.restart();
      } else {
        console.warn("AnimationMachine.setState: Invalid state name \'" + stateName + "\".");
      }

      return this;
    }
  }, {
    key: 'stop',
    value: function stop() {

      (0, _get3.default)(AnimationMachine.prototype.__proto__ || (0, _getPrototypeOf2.default)(AnimationMachine.prototype), 'stop', this).call(this);

      if (this._currentState === null) return;

      if (this._currentState.type === _ResourceType2.default.Spritesheet) {
        (0, _SetSpritesheetFrame2.default)(this._spriteModule, this._currentState.get(0));
      }
    }
  }, {
    key: 'setFrame',
    value: function setFrame(index, resetTimer) {

      if (resetTimer === undefined) resetTimer = true;

      if (index >= this._currentAnimObj.length) index = this._currentAnimObj.length - 1;else if (index < 0) index = 0;

      this.currentFrame = index;

      // set in sprite

      this._gameObject.component['render'].setFrameRect(this._currentAnimObj.getFrame(this.currentFrame));
      this._gameObject.component['render'].setImage(this._currentAnimObj.source);

      if (resetTimer) this._timer = 0;
    }
  }, {
    key: 'setSpeed',
    value: function setSpeed(time) {

      this.frameSpeed = time;
    }
  }, {
    key: 'add',
    value: function add(name, image) {

      return this.animations[name] = new scintilla.Animation(name, image);
    }
  }, {
    key: 'addFromCache',
    value: function addFromCache(container, name) {

      var anim = this.game.animationCache.get(container, name);

      if (anim) {

        this.animations[name] = anim;

        if (this.currentAnimation == null) {
          this.setState(name);
        }

        return anim;
      } else return null;
    }
  }, {
    key: 'remove',
    value: function remove(name) {

      if (this.animations[name]) delete this.animations[name];
    }
  }, {
    key: 'machine',
    set: function set(animMachine) {

      var resource = void 0;

      if (typeof animMachine === 'string') {

        if (this._resource !== null) {
          if (this._resource.name === animMachine) {
            return;
          }
        }

        resource = this.entity.game.system.cache.animMachine.get(animMachine);
      } else if (animMachine instanceof _AnimationMachineResource2.default) {
        resource = animMachine;
      }

      if (resource !== undefined) {
        this._resource = resource;
        (0, _InitializeAnimationModule2.default)(this);
      } else {
        console.warn("AnimationControl.setAnimation: Could not set animation. The animation is undefined.");
      }
    },
    get: function get() {
      return this._resource;
    }
  }, {
    key: 'currentState',
    get: function get() {
      return this._currentState;
    }
  }]);
  return AnimationMachine;
}(_AnimationBaseModule3.default);

exports.default = AnimationMachine;


_ModuleProvider2.default.register('animMachine', function (moduleManager, args) {

  var asset = void 0;

  if (args[1] !== undefined) {
    // this.entity.game.system.cache.image.get(tag);
    asset = moduleManager.entity.game.system.cache.animMachine.get(args[1]);
  }

  var config = {
    resource: asset,
    spriteModule: args[0]
  };

  var animMachine = new AnimationMachine(moduleManager, config);

  return animMachine;
});

/***/ }),

/***/ "./modules/animation/components/InitializeAnimationModule.js":
/*!*******************************************************************!*\
  !*** ./modules/animation/components/InitializeAnimationModule.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InitializeAnimationModule;

var _SetSpritesheetFrame = __webpack_require__(/*! ./SetSpritesheetFrame */ "./modules/animation/components/SetSpritesheetFrame.js");

var _SetSpritesheetFrame2 = _interopRequireDefault(_SetSpritesheetFrame);

var _ResourceType = __webpack_require__(/*! ../../../resources/ResourceType */ "./resources/ResourceType.js");

var _ResourceType2 = _interopRequireDefault(_ResourceType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InitializeAnimationModule(animationModule) {

    var resource = animationModule._resource;

    if (resource !== null) {

        if (animationModule.name === 'animMachine') {
            var state = resource.at(0);
            animationModule._currentState = state || null;
            resource = state;
        } else {
            animationModule.loop = resource.loop;
        }

        if (resource.type === _ResourceType2.default.Spritesheet) {
            (0, _SetSpritesheetFrame2.default)(animationModule._spriteModule, resource.get(0));
        }
        //this._currentStateName = state.name || null;

        animationModule.play();
    }
}

/***/ }),

/***/ "./modules/animation/components/SetSpritesheetFrame.js":
/*!*************************************************************!*\
  !*** ./modules/animation/components/SetSpritesheetFrame.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SetSpritesheetFrame;
function SetSpritesheetFrame(spriteModule, keyFrame) {

    if (spriteModule === null) return;

    if (keyFrame.image === undefined || keyFrame.image === null) return;

    if (spriteModule.resource === null || spriteModule.resource !== keyFrame.image) {
        spriteModule.setImage(keyFrame.image, false);
    }

    spriteModule.setFrameRect(keyFrame.frame);
}

/***/ }),

/***/ "./modules/animation/components/UpdateAnimationModule.js":
/*!***************************************************************!*\
  !*** ./modules/animation/components/UpdateAnimationModule.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UpdateAnimationModule;

var _SetSpritesheetFrame = __webpack_require__(/*! ./SetSpritesheetFrame */ "./modules/animation/components/SetSpritesheetFrame.js");

var _SetSpritesheetFrame2 = _interopRequireDefault(_SetSpritesheetFrame);

var _ResourceType = __webpack_require__(/*! ../../../resources/ResourceType */ "./resources/ResourceType.js");

var _ResourceType2 = _interopRequireDefault(_ResourceType);

var _WrapMode = __webpack_require__(/*! ../../../resources/animation/WrapMode */ "./resources/animation/WrapMode.js");

var _WrapMode2 = _interopRequireDefault(_WrapMode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateAnimationModule(animationModule, resource, deltaTime) {

  if (resource === undefined || resource === null) return;

  // if not paused and we have a valid animation
  if (animationModule.isPlaying === true) {

    // add delta time
    animationModule._timer += deltaTime; // * this.frameSpeed;

    var duration = void 0;
    var currentKeyFrame = resource.get(animationModule.currentFrame);

    if (resource.uniformDuration) {
      duration = resource.duration;
    } else {
      duration = currentKeyFrame.duration;
    }

    animationModule._position = animationModule._timer / duration;

    // if current time is bigger then the frame time advance one frame
    if (animationModule._timer >= duration) {

      // reset time, but keep the remainder
      animationModule._timer = 0;
      animationModule._position = 0;

      // get next Frame index
      if (animationModule.currentFrame + 1 < resource.size) {
        animationModule.currentFrame++;
      } else {

        var last = animationModule.currentFrame;
        animationModule.currentFrame = 0;

        // reset to start
        if (resource.wrapMode === _WrapMode2.default.Once || animationModule.loop === false) {
          animationModule.stop();
          animationModule.currentFrame = last;
        }

        // animation has ended
        if (animationModule['onAnimationEnd'] !== undefined) {
          animationModule.onAnimationEnd.call(animationModule.entity);
        }
      }

      // set the current frame, not reseting the time
      if (resource.type === _ResourceType2.default.Spritesheet) {
        currentKeyFrame = resource.get(animationModule.currentFrame);
        (0, _SetSpritesheetFrame2.default)(animationModule._spriteModule, currentKeyFrame);
      }
    }
  }
}

/***/ }),

/***/ "./modules/animation/index.js":
/*!************************************!*\
  !*** ./modules/animation/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    AnimationBaseModule: __webpack_require__(/*! ./AnimationBaseModule */ "./modules/animation/AnimationBaseModule.js"),
    AnimationControl: __webpack_require__(/*! ./AnimationControl */ "./modules/animation/AnimationControl.js"),
    AnimationMachine: __webpack_require__(/*! ./AnimationMachine */ "./modules/animation/AnimationMachine.js")
};

/***/ }),

/***/ "./modules/components/AttachModules.js":
/*!*********************************************!*\
  !*** ./modules/components/AttachModules.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AttachModules;

var _Renderable = __webpack_require__(/*! ../renderables/Renderable */ "./modules/renderables/Renderable.js");

var _Renderable2 = _interopRequireDefault(_Renderable);

var _Tilemap = __webpack_require__(/*! ../renderables/tilemap/Tilemap */ "./modules/renderables/tilemap/Tilemap.js");

var _Tilemap2 = _interopRequireDefault(_Tilemap);

var _Sprite = __webpack_require__(/*! ../renderables/Sprite */ "./modules/renderables/Sprite.js");

var _Sprite2 = _interopRequireDefault(_Sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AttachModules(moduleManager, game) {

    // RENDERABLES


    moduleManager._pendingModulesInitialization.each(function (entityModule) {

        if (entityModule instanceof _Tilemap2.default) {

            for (var i = 0; i < entityModule.layers.length; i++) {
                game.system.render.layer.addRenderable(entityModule.layers.at(i), entityModule.layerID || 0);
            }
        } else {

            game.system.render.layer.addRenderable(entityModule, entityModule.layerID || 0);
        }
    });

    moduleManager._pendingModulesInitialization.clear();
}

/***/ }),

/***/ "./modules/components/ClearModules.js":
/*!********************************************!*\
  !*** ./modules/components/ClearModules.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ClearModules;

var _DestroyRenderable = __webpack_require__(/*! ../renderables/components/DestroyRenderable */ "./modules/renderables/components/DestroyRenderable.js");

var _DestroyRenderable2 = _interopRequireDefault(_DestroyRenderable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ClearModules(moduleManager, game) {

    moduleManager.attached.each(function (key, value) {

        if (value.type === 'render') {
            (0, _DestroyRenderable2.default)(value, game.render);
        }

        value.entity = null;
        value.moduleManager = null;
    });

    moduleManager.attached.clear();
}

/***/ }),

/***/ "./modules/components/DetachModules.js":
/*!*********************************************!*\
  !*** ./modules/components/DetachModules.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DetachModules;

var _Renderable = __webpack_require__(/*! ../renderables/Renderable */ "./modules/renderables/Renderable.js");

var _Renderable2 = _interopRequireDefault(_Renderable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DetachModules(moduleManager, game) {

    var manager = moduleManager;

    moduleManager.attached.each(function (key, entityModule) {
        if (entityModule instanceof _Renderable2.default) {

            game.system.render.layer.removeRenderable(entityModule);
            manager._pendingModulesInitialization.push(entityModule);
        }
    });
}

/***/ }),

/***/ "./modules/components/GetRenderModule.js":
/*!***********************************************!*\
  !*** ./modules/components/GetRenderModule.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = GetRenderModule;

var _ModuleProvider = __webpack_require__(/*! ../ModuleProvider */ "./modules/ModuleProvider.js");

var _ModuleProvider2 = _interopRequireDefault(_ModuleProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GetRenderModule(moduleManager, attacherName, formalName) {

    var spriteModule = void 0;

    if (moduleManager.has('render') === false) {
        spriteModule = _ModuleProvider2.default.attach(moduleManager, 'sprite');
    } else {
        spriteModule = moduleManager.getByName('sprite');
    }

    if (spriteModule === undefined || spriteModule === null) {
        console.warn("ModuleAttacher." + attacherName + ": Could not create " + formalName + " module. There is no Sprite module attached. The current Renderable module is not compatible with " + formalName + " module.");
        return null;
    }

    return spriteModule;
}

/***/ }),

/***/ "./modules/components/InitializeModuleBase.js":
/*!****************************************************!*\
  !*** ./modules/components/InitializeModuleBase.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InitializeModuleBase;
function InitializeModuleBase(entityModule, instace) {

    entityModule.entity = instace;
    entityModule.moduleManager = instace.modules;
}

/***/ }),

/***/ "./modules/components/ModulesUpdater.js":
/*!**********************************************!*\
  !*** ./modules/components/ModulesUpdater.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ModulesUpdater;

var _InitializeModuleBase = __webpack_require__(/*! ./InitializeModuleBase */ "./modules/components/InitializeModuleBase.js");

var _InitializeModuleBase2 = _interopRequireDefault(_InitializeModuleBase);

var _RenderableUpdate = __webpack_require__(/*! ../renderables/components/RenderableUpdate */ "./modules/renderables/components/RenderableUpdate.js");

var _RenderableUpdate2 = _interopRequireDefault(_RenderableUpdate);

var _UpdateAnimationModule = __webpack_require__(/*! ../animation/components/UpdateAnimationModule */ "./modules/animation/components/UpdateAnimationModule.js");

var _UpdateAnimationModule2 = _interopRequireDefault(_UpdateAnimationModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModulesUpdater(modulesManager, game) {

    var entity = modulesManager.entity;

    var animationModule = modulesManager.attached.get('animation');
    if (animationModule !== undefined && animationModule !== null) {
        var resource = void 0;
        if (animationModule.name === 'animationControl') {
            resource = animationModule._resource;
        } else if (animationModule.name === 'animMachine') {
            resource = animationModule._currentState;
        }

        if (resource !== undefined) {
            (0, _UpdateAnimationModule2.default)(animationModule, resource, game.system.loop.updateStep.hiDeltaTime);
        }
    }

    var render = modulesManager.attached.get('render');
    if (render !== undefined || render !== null) {
        (0, _RenderableUpdate2.default)(entity, render, game.system.camera, game.system.loop.updateStep);
    }
}

/***/ }),

/***/ "./modules/index.js":
/*!**************************!*\
  !*** ./modules/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Module: __webpack_require__(/*! ./Module */ "./modules/Module.js"),
    ModuleProvider: __webpack_require__(/*! ./ModuleProvider */ "./modules/ModuleProvider.js"),
    ModuleAttacher: __webpack_require__(/*! ./ModuleAttacher */ "./modules/ModuleAttacher.js"),
    Renderables: __webpack_require__(/*! ./renderables */ "./modules/renderables/index.js"),
    Animation: __webpack_require__(/*! ./animation */ "./modules/animation/index.js")
};

/***/ }),

/***/ "./modules/renderables/Renderable.js":
/*!*******************************************!*\
  !*** ./modules/renderables/Renderable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BoundingBox = __webpack_require__(/*! ../../math/BoundingBox */ "./math/BoundingBox.js");

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

var _Vector = __webpack_require__(/*! ../../math/Vector2 */ "./math/Vector2.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _Module2 = __webpack_require__(/*! ../Module */ "./modules/Module.js");

var _Module3 = _interopRequireDefault(_Module2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Renderable = function (_Module) {
    (0, _inherits3.default)(Renderable, _Module);

    function Renderable(moduleName, moduleManager) {
        (0, _classCallCheck3.default)(this, Renderable);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Renderable.__proto__ || (0, _getPrototypeOf2.default)(Renderable)).call(this, 'render', moduleName || 'renderable', moduleManager));

        _this._layerID = 0;
        _this._depth = 0;
        _this._alpha = 1;
        _this._depthSorting = 0;
        _this._bounds = new _BoundingBox2.default();
        _this._originInPixels = { x: 0, y: 0 };
        _this._originIsDirty = true;
        return _this;
    }

    (0, _createClass3.default)(Renderable, [{
        key: 'bounds',
        get: function get() {
            return this._bounds;
        }
    }, {
        key: 'depth',
        get: function get() {
            return this._depthSorting;
        },
        set: function set(value) {

            if (this.entity.game !== undefined) {
                if (value !== this._depthSorting) {
                    this._depthSorting = value;
                    this.entity.game.system.events.dispatch('__render_layersorting', this._layerID);
                }
            }
            return this;
        }
    }, {
        key: 'layerName',
        get: function get() {}
    }, {
        key: 'layer',
        get: function get() {
            return this._layerID;
        },
        set: function set(value) {
            if (this.game != null) {
                if (value === 'number') {
                    //this.game.render.get
                }
            }
        }
    }, {
        key: 'alpha',
        get: function get() {
            return this._alpha;
        },
        set: function set(value) {
            this._alpha = value;
        }
    }]);
    return Renderable;
}(_Module3.default);

exports.default = Renderable;

/***/ }),

/***/ "./modules/renderables/Sprite.js":
/*!***************************************!*\
  !*** ./modules/renderables/Sprite.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Renderable2 = __webpack_require__(/*! ./Renderable */ "./modules/renderables/Renderable.js");

var _Renderable3 = _interopRequireDefault(_Renderable2);

var _Rect = __webpack_require__(/*! ../../math/Rect */ "./math/Rect.js");

var _Rect2 = _interopRequireDefault(_Rect);

var _DrawImage = __webpack_require__(/*! ./components/DrawImage */ "./modules/renderables/components/DrawImage.js");

var _DrawImage2 = _interopRequireDefault(_DrawImage);

var _ModuleProvider = __webpack_require__(/*! ../ModuleProvider */ "./modules/ModuleProvider.js");

var _ModuleProvider2 = _interopRequireDefault(_ModuleProvider);

var _UpdateTransformBounds = __webpack_require__(/*! ../../transform/UpdateTransformBounds */ "./transform/UpdateTransformBounds.js");

var _UpdateTransformBounds2 = _interopRequireDefault(_UpdateTransformBounds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sprite = function (_Renderable) {
    (0, _inherits3.default)(Sprite, _Renderable);

    function Sprite(moduleManager) {
        (0, _classCallCheck3.default)(this, Sprite);

        //this._type = "sprite";
        var _this = (0, _possibleConstructorReturn3.default)(this, (Sprite.__proto__ || (0, _getPrototypeOf2.default)(Sprite)).call(this, 'sprite', moduleManager));

        _this.resource = null;
        _this.frame = new _Rect2.default();

        return _this;
    }

    (0, _createClass3.default)(Sprite, [{
        key: "setFrame",
        value: function setFrame(x, y, width, height) {
            this.frame.set(x, y, width, height);
            return this;
        }
    }, {
        key: "setFrameRect",
        value: function setFrameRect(rect) {
            this.frame.copy(rect);
            return this;
        }
    }, {
        key: "setSprite",
        value: function setSprite(tag) {

            if (this.entity !== null && this.entity !== undefined) {
                var sprite = this.entity.game.system.cache.image.get(tag);

                //if (sprite !== null) {
                this.setImage(sprite, true);
            } else {
                Console.warn("Sprite.setSprite: Could not set Sprite. The entity is null in the game");
            }
            return this;
        }
    }, {
        key: "setImage",
        value: function setImage(image, fullFrame) {

            /*if (image === null)
            {
                Console.warn("Sprite.setImage: Could not set Sprite source image. The image is null.");
                return this;
            }*/

            if (fullFrame === undefined) fullFrame = true;

            if (this.resource !== image) this.resource = image;

            if (fullFrame === true && image !== null) {
                this.setFrame(0, 0, this.resource.width, this.resource.height);
            }

            return this;
        }
    }, {
        key: "render",
        value: function render(context) {
            if (!this._enabled) return false;

            if (!this.resource) return false;

            (0, _DrawImage2.default)(context, this.resource.data, this.frame, this.entity._transform, this._originInPixels);

            return true;
        }
    }, {
        key: "width",
        get: function get() {
            return this.frame.width;
        }
    }, {
        key: "height",
        get: function get() {
            return this.frame.height;
        }
    }]);
    return Sprite;
}(_Renderable3.default);

exports.default = Sprite;


_ModuleProvider2.default.register('sprite', function (moduleManager, config) {

    var spr = new Sprite(moduleManager);

    if (config !== undefined) {
        if (config[0] !== undefined) {
            spr.setSprite(config[0]);

            if (spr.resource !== null) {
                if (config[1] === undefined) config[1] = 0; // framex
                if (config[2] === undefined) config[2] = 0; // framey
                if (config[2] === undefined) config[3] = spr.resource.width; // framew
                if (config[4] === undefined) config[4] = spr.resource.height; // frameh

                spr.setFrame(config[1], config[2], config[3], config[4]);
            }
        }
    }

    return spr;
});

/***/ }),

/***/ "./modules/renderables/components/AnimateTilemap.js":
/*!**********************************************************!*\
  !*** ./modules/renderables/components/AnimateTilemap.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AnimateTilemap;
function AnimateTilemap(tilemap, time) {

    var animator = tilemap.animator;

    if (animator === undefined) return;

    //console.log(time.hiDeltaTime);

    var len = animator.animatedTiles.size;

    if (len === 0) return;

    var delta = time.hiDeltaTime;

    for (var i = 0; i < len; i++) {

        var animatedTile = animator.animatedTiles.at(i);

        animatedTile.t += delta;

        var GID = animatedTile.tileGID;
        var currentKeyFrame = GID.keyFrames[animatedTile.frame];

        if (animatedTile.t >= currentKeyFrame.duration) {

            animatedTile.t = 0;

            if (animatedTile.frame + 1 < GID.keyFrames.length) animatedTile.frame++;else animatedTile.frame = 0;

            var nextGID = GID.keyFrames[animatedTile.frame].tileID; //GID.tileset.getTile(GID.keyFrames[animatedTile.frame].tileID).id;

            GID.currentFrame = nextGID;
        }
    }
}

/***/ }),

/***/ "./modules/renderables/components/CullTiles.js":
/*!*****************************************************!*\
  !*** ./modules/renderables/components/CullTiles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CullTiles;

var _MathUtils = __webpack_require__(/*! ../../../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _CullingMethod = __webpack_require__(/*! ./CullingMethod */ "./modules/renderables/components/CullingMethod.js");

var _CullingMethod2 = _interopRequireDefault(_CullingMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LimitCulling(culling, tilemap) {

    // limit culling

    if (culling.start.x < 0) culling.start.x = 0;

    if (culling.start.y < 0) culling.start.y = 0;

    if (culling.end.x > tilemap.width) culling.end.x = tilemap.width;

    if (culling.end.y > tilemap.height) culling.end.y = tilemap.height;
}

function CullTiles(tilemap, camera) {

    var t = tilemap.entity._transform;
    var rot = camera._transform.rotation + t.rotation;

    // 90 DEGREE ROTATION
    // We will use the linear culling that is faster


    if (rot % _MathUtils2.default.HALFPI === 0) {

        var tx = t.position.x - tilemap._originInPixels.x;
        var ty = t.position.y - tilemap._originInPixels.y;

        tilemap.culling.method = _CullingMethod2.default.LINEAR;

        tilemap.culling.start.x = Math.floor((camera.viewBounds.min.x - tx) / tilemap.tileWidth);
        tilemap.culling.start.y = Math.floor((camera.viewBounds.min.y - ty) / tilemap.tileHeight);
        tilemap.culling.end.x = Math.ceil((camera.viewBounds.max.x - tx) / tilemap.tileWidth);
        tilemap.culling.end.y = Math.ceil((camera.viewBounds.max.y - ty) / tilemap.tileHeight);

        LimitCulling(tilemap.culling, tilemap);

        // TODO FOR 90 Deg TILES

    } else {

        tilemap.culling.method = 1;

        // TODO ROTATED TILES
    }
}

/***/ }),

/***/ "./modules/renderables/components/CullingMethod.js":
/*!*********************************************************!*\
  !*** ./modules/renderables/components/CullingMethod.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var CullingMethod = {
    LINEAR: 0,
    LINEAR90DEG: 1
};

exports.default = CullingMethod;

/***/ }),

/***/ "./modules/renderables/components/DestroyRenderable.js":
/*!*************************************************************!*\
  !*** ./modules/renderables/components/DestroyRenderable.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DestroyRenderable;

var _TilemapLayer = __webpack_require__(/*! ../tilemap/TilemapLayer */ "./modules/renderables/tilemap/TilemapLayer.js");

var _TilemapLayer2 = _interopRequireDefault(_TilemapLayer);

var _Tilemap = __webpack_require__(/*! ../tilemap/Tilemap */ "./modules/renderables/tilemap/Tilemap.js");

var _Tilemap2 = _interopRequireDefault(_Tilemap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DestroyRenderable(renderable, render) {

    if (renderable instanceof _Tilemap2.default) {
        for (var i = 0; i < renderable.layers.length; i++) {
            var layer = renderable.layers.at(i);
            DestroyRenderable(layer, render);
        }
        renderable.layers.clear();
    }

    render.layer.removeRenderable(renderable);

    renderable._bounds = null;
    renderable.resource = null;
    renderable.frame = null;
}

/***/ }),

/***/ "./modules/renderables/components/DrawImage.js":
/*!*****************************************************!*\
  !*** ./modules/renderables/components/DrawImage.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


function DrawImage(context, source, frame, transform, destination) {

    if (context === undefined) return false;

    if (source === undefined || source == null) return false;

    var matrix = transform.matrix;

    context.setTransform(matrix.a[0], matrix.a[1], // 2
    matrix.a[3], matrix.a[4], // 5
    matrix.a[6], matrix.a[7]);

    //context.globalAlpha = this.alpha;

    context.drawImage(source, // image
    frame.x, // sx - pos crop x
    frame.y, // sy - pos crop y
    frame.width, // sWidth - crop width
    frame.height, // sHeight - crop height
    -destination.x, // destination x
    -destination.y, // destination y
    frame.width, frame.height);

    return true;
}

exports.default = DrawImage;

/***/ }),

/***/ "./modules/renderables/components/DrawTilemapLayer.js":
/*!************************************************************!*\
  !*** ./modules/renderables/components/DrawTilemapLayer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DrawTilemapLayer;

var _MathUtils = __webpack_require__(/*! ../../../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _CullingMethod = __webpack_require__(/*! ./CullingMethod */ "./modules/renderables/components/CullingMethod.js");

var _CullingMethod2 = _interopRequireDefault(_CullingMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawTilemapLayer(context, tilemap, layer, transform) {

    var draws = 0;
    var matrix = transform.matrix;
    var x = matrix.a[6];
    var y = matrix.a[7];

    if (tilemap.floorTiles) {
        x = _MathUtils2.default.round(x);
        y = _MathUtils2.default.round(y);
    }
    context.setTransform(matrix.a[0], matrix.a[1], // 2
    matrix.a[3], matrix.a[4], // 5
    x, y);

    if (tilemap.culling.method <= 1) {

        var idx = 0;

        for (var j = tilemap.culling.start.y; j < tilemap.culling.end.y; j++) {
            for (var i = tilemap.culling.start.x; i < tilemap.culling.end.x; i++) {

                //if (tilemap.culling.method == CullingMethod.LINEAR)
                idx = i + j * tilemap.width;
                //else if (tilemap.culling.method == CullingMethod.LINEAR90DEG)
                //    idx = j + i * tilemap.width;

                var tile = layer.tiles[idx];

                if (tile == null || tile === undefined) continue;

                var frame = void 0;

                if (tile.data.isAnimated === false || tile.data.isAnimated === undefined) frame = tile.data.st;else frame = tile.data.tileset.getTile(tile.data.currentFrame).st;

                context.drawImage(tile.data.tileset.image.data, // image
                frame.x, // sx - pos crop x
                frame.y, // sy - pos crop y
                frame.width, // sWidth - crop width
                frame.height, // sHeight - crop height
                tile.x - tilemap._originInPixels.x, // destination x
                tile.y - tilemap._originInPixels.y, // destination y
                frame.width, frame.height);

                draws++;
            }
        }
    }

    //for (let i = 0; i < layer.culledTiles.lenght; i++) {
    /*for (let i = 0; i < layer.tiles.length; i++) {
          let tile = layer.tiles[i];
          if (tile == null || tile === undefined) continue;
          context.drawImage(
            tile.data.tileset.image.data, // image
            tile.frame.x, // sx - pos crop x
            tile.frame.y, // sy - pos crop y
            tile.frame.width, // sWidth - crop width
            tile.frame.height, // sHeight - crop height
            tile.x, // destination x
            tile.y,  // destination y
            tile.frame.width,
            tile.frame.height
                );
          draws++;
      }*/

    return draws;
}

/***/ }),

/***/ "./modules/renderables/components/RenderableBoundsUpdate.js":
/*!******************************************************************!*\
  !*** ./modules/renderables/components/RenderableBoundsUpdate.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RenderableBoundsUpdate;

var _ComputeBounds = __webpack_require__(/*! ../../../transform/ComputeBounds */ "./transform/ComputeBounds.js");

var _ComputeBounds2 = _interopRequireDefault(_ComputeBounds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RenderableBoundsUpdate(renderable, entity, camera) {

    if (!entity._transform._isDirty && !camera._transform._isDirty) return;

    if (renderable._originIsDirty) {
        // destination
        renderable._originInPixels.x = entity._transform.origin.x * renderable.width;
        renderable._originInPixels.y = entity._transform.origin.y * renderable.height;
        // renderable._originIsDirty = false;
    }

    (0, _ComputeBounds2.default)(renderable._bounds, entity._transform, renderable.width, renderable.height, renderable._originInPixels);
}

/***/ }),

/***/ "./modules/renderables/components/RenderableUpdate.js":
/*!************************************************************!*\
  !*** ./modules/renderables/components/RenderableUpdate.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RenderableUpdate;

var _CullTiles = __webpack_require__(/*! ./CullTiles */ "./modules/renderables/components/CullTiles.js");

var _CullTiles2 = _interopRequireDefault(_CullTiles);

var _AnimateTilemap = __webpack_require__(/*! ./AnimateTilemap */ "./modules/renderables/components/AnimateTilemap.js");

var _AnimateTilemap2 = _interopRequireDefault(_AnimateTilemap);

var _RenderableBoundsUpdate = __webpack_require__(/*! ./RenderableBoundsUpdate */ "./modules/renderables/components/RenderableBoundsUpdate.js");

var _RenderableBoundsUpdate2 = _interopRequireDefault(_RenderableBoundsUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RenderableUpdate(entity, renderable, camera, gameTime) {

    if (renderable.name === 'tilemap') {

        if (renderable._originIsDirty) {
            // destination
            renderable._originInPixels.x = entity._transform.origin.x * renderable.pixelsWidth;
            renderable._originInPixels.y = entity._transform.origin.y * renderable.pixelsHeight;
        }

        (0, _AnimateTilemap2.default)(renderable, gameTime);

        if (!entity._transform._isDirty && !camera._transform._isDirty) return;

        (0, _CullTiles2.default)(renderable, camera);

        for (var i = 0; i < renderable.layers.length; i++) {
            (0, _RenderableBoundsUpdate2.default)(renderable, entity, camera);
        }
    } else {

        (0, _RenderableBoundsUpdate2.default)(renderable, entity, camera);
    }
}

/***/ }),

/***/ "./modules/renderables/index.js":
/*!**************************************!*\
  !*** ./modules/renderables/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Renderable = exports.Renderable = __webpack_require__(/*! ./Renderable */ "./modules/renderables/Renderable.js");
var Primitives = exports.Primitives = __webpack_require__(/*! ./primitives */ "./modules/renderables/primitives/index.js");
var Sprite = exports.Sprite = __webpack_require__(/*! ./Sprite */ "./modules/renderables/Sprite.js");
var Tilemap = exports.Tilemap = __webpack_require__(/*! ./tilemap/Tilemap */ "./modules/renderables/tilemap/Tilemap.js");

/***/ }),

/***/ "./modules/renderables/primitives/index.js":
/*!*************************************************!*\
  !*** ./modules/renderables/primitives/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Rectangle = __webpack_require__(/*! ./rectangle/Rectangle */ "./modules/renderables/primitives/rectangle/Rectangle.js");

var _Rectangle2 = _interopRequireDefault(_Rectangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    Rectangle: _Rectangle2.default
};

/***/ }),

/***/ "./modules/renderables/primitives/rectangle/DrawRectangle.js":
/*!*******************************************************************!*\
  !*** ./modules/renderables/primitives/rectangle/DrawRectangle.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DrawRectangle;
function DrawRectangle(context, transform, rectangle) {

    if (context === undefined) return false;

    var matrix = transform.matrix;

    context.setTransform(matrix.a[0], matrix.a[1], // 2
    matrix.a[3], matrix.a[4], // 5
    matrix.a[6], matrix.a[7]);

    /* if (rectangle.outlineWidth > 0) {
         context.lineWidth = rectangle.outlineWidth;
         context.strokeStyle = rectangle.outlineColor;
         context.strokeRect(0, 0, rectangle.width, rectangle.height);
     }*/

    context.fillStyle = rectangle.color._css;
    context.fillRect(0, 0, rectangle.width, rectangle.height);

    return true;
}

/***/ }),

/***/ "./modules/renderables/primitives/rectangle/Rectangle.js":
/*!***************************************************************!*\
  !*** ./modules/renderables/primitives/rectangle/Rectangle.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Renderable2 = __webpack_require__(/*! ./../../Renderable */ "./modules/renderables/Renderable.js");

var _Renderable3 = _interopRequireDefault(_Renderable2);

var _Color = __webpack_require__(/*! ../../../../render/color/Color */ "./render/color/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _ModuleProvider = __webpack_require__(/*! ../../../ModuleProvider */ "./modules/ModuleProvider.js");

var _ModuleProvider2 = _interopRequireDefault(_ModuleProvider);

var _DrawRectangle = __webpack_require__(/*! ./DrawRectangle */ "./modules/renderables/primitives/rectangle/DrawRectangle.js");

var _DrawRectangle2 = _interopRequireDefault(_DrawRectangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rectangle = function (_Renderable) {
    (0, _inherits3.default)(Rectangle, _Renderable);

    function Rectangle(moduleManager, width, height) {
        (0, _classCallCheck3.default)(this, Rectangle);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Rectangle.__proto__ || (0, _getPrototypeOf2.default)(Rectangle)).call(this, 'rectangle', moduleManager));

        _this._width = width || 100;
        _this._height = height || 100;
        _this._color = _Color2.default.magenta;

        return _this;
    }

    (0, _createClass3.default)(Rectangle, [{
        key: 'render',
        value: function render(context) {

            if (!this._enabled) return false;

            return (0, _DrawRectangle2.default)(context, this.entity._transform, this);
        }
    }, {
        key: 'width',
        set: function set(value) {
            this._width = value;
        },
        get: function get() {
            return this._width;
        }
    }, {
        key: 'height',
        set: function set(value) {
            this._height = value;
        },
        get: function get() {
            return this._height;
        }
    }, {
        key: 'color',
        set: function set(value) {
            this._color.set(value);
        },
        get: function get() {
            return this._color;
        }
    }, {
        key: 'outlineColor',
        get: function get() {
            return -1;
        }
    }, {
        key: 'outlineWidth',
        get: function get() {
            return -1;
        }
    }]);
    return Rectangle;
}(_Renderable3.default);

exports.default = Rectangle;


_ModuleProvider2.default.register('rectangle', function (moduleManager, config) {

    return new Rectangle(moduleManager, config[0], config[1]);
});

/***/ }),

/***/ "./modules/renderables/tilemap/Tilemap.js":
/*!************************************************!*\
  !*** ./modules/renderables/tilemap/Tilemap.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Renderable2 = __webpack_require__(/*! ../Renderable */ "./modules/renderables/Renderable.js");

var _Renderable3 = _interopRequireDefault(_Renderable2);

var _ModuleProvider = __webpack_require__(/*! ../../ModuleProvider */ "./modules/ModuleProvider.js");

var _ModuleProvider2 = _interopRequireDefault(_ModuleProvider);

var _TilemapLayer = __webpack_require__(/*! ./TilemapLayer */ "./modules/renderables/tilemap/TilemapLayer.js");

var _TilemapLayer2 = _interopRequireDefault(_TilemapLayer);

var _TilemapAnimator = __webpack_require__(/*! ./TilemapAnimator */ "./modules/renderables/tilemap/TilemapAnimator.js");

var _TilemapAnimator2 = _interopRequireDefault(_TilemapAnimator);

var _List = __webpack_require__(/*! ../../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tilemap = function (_Renderable) {
    (0, _inherits3.default)(Tilemap, _Renderable);

    function Tilemap(moduleManager, resource) {
        (0, _classCallCheck3.default)(this, Tilemap);

        //this._type = "tilemap";
        var _this = (0, _possibleConstructorReturn3.default)(this, (Tilemap.__proto__ || (0, _getPrototypeOf2.default)(Tilemap)).call(this, 'tilemap', moduleManager));

        _this.resource = resource;
        _this.tileWidth = resource.metadata.tileWidth;
        _this.tileHeight = resource.metadata.tileHeight;
        _this.width = resource.metadata.width;
        _this.height = resource.metadata.height;
        _this.orientation = resource.metadata.orientation;
        _this.pixelsWidth = resource.metadata.pixelsWidth;
        _this.pixelsHeight = resource.metadata.pixelsHeight;
        _this.animator = undefined;

        _this.culling = {
            method: 0,
            start: { x: 0, y: 0 },
            end: { x: 0, y: 0 }
        };

        _this.floorTiles = false;
        _this.tilesets = resource.tilesets;
        _this.layers = new _List2.default();
        _this.objectLayers = resource.objectLayers;

        var animations = false;
        var layersSize = resource.tileLayers.length;

        for (var i = layersSize - 1; i >= 0; i--) {
            var layerData = resource.tileLayers.at(i);

            if (layerData.hasAnimatedTiles) animations = true;

            _this.layers.push(new _TilemapLayer2.default(_this, layerData));
        }

        if (animations === true) {
            _this.animator = new _TilemapAnimator2.default(_this, _this.layers);
        }

        return _this;
    }

    (0, _createClass3.default)(Tilemap, [{
        key: "getObjectsLayer",
        value: function getObjectsLayer(name) {
            return this.resource.getObjectsLayer(name);
        }
    }, {
        key: "getTileLayer",
        value: function getTileLayer(name) {
            return this.resource.getTileLayer(name);
        }
    }]);
    return Tilemap;
}(_Renderable3.default);

exports.default = Tilemap;


_ModuleProvider2.default.register('tilemap', function (moduleManager, tag) {

    var res = null;
    var cache = moduleManager.entity.game.system.cache;

    if (cache !== undefined) res = cache.tilemap.get(tag);

    var tilemap = new Tilemap(moduleManager, res);
    tilemap.floorTiles = moduleManager.entity.game.config.floorTiles || false;

    return tilemap;
});

/***/ }),

/***/ "./modules/renderables/tilemap/TilemapAnimator.js":
/*!********************************************************!*\
  !*** ./modules/renderables/tilemap/TilemapAnimator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _List = __webpack_require__(/*! ../../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TilemapAnimator = function () {
    function TilemapAnimator(tilemap, layers) {
        var _this = this;

        (0, _classCallCheck3.default)(this, TilemapAnimator);


        this.tilemap = tilemap;
        this.animatedTiles = new _List2.default();

        for (var i = 0; i < layers.length; i++) {

            if (!layers.at(i).data.hasAnimatedTiles) continue;

            var animatedSet = layers.at(i).data.animatedTiles;

            var _loop = function _loop(j) {

                var animID = animatedSet.at(j);

                var tileGID = tilemap.resource.getTileGID(animID);

                var hasGid = _this.animatedTiles.find(function (tileData) {
                    return tileData.tileGID.gid === tileGID.gid;
                });

                if (hasGid !== null) return "continue";

                _this.animatedTiles.push({
                    t: 0, // frameTime
                    frame: 0,
                    tileGID: tileGID
                });
            };

            for (var j = 0; j < animatedSet.size; j++) {
                var _ret = _loop(j);

                if (_ret === "continue") continue;
            }
        }
    }

    (0, _createClass3.default)(TilemapAnimator, [{
        key: "update",
        value: function update() {}
    }]);
    return TilemapAnimator;
}();

exports.default = TilemapAnimator;

/***/ }),

/***/ "./modules/renderables/tilemap/TilemapLayer.js":
/*!*****************************************************!*\
  !*** ./modules/renderables/tilemap/TilemapLayer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Renderable2 = __webpack_require__(/*! ../Renderable */ "./modules/renderables/Renderable.js");

var _Renderable3 = _interopRequireDefault(_Renderable2);

var _DrawTilemapLayer = __webpack_require__(/*! ../components/DrawTilemapLayer */ "./modules/renderables/components/DrawTilemapLayer.js");

var _DrawTilemapLayer2 = _interopRequireDefault(_DrawTilemapLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TilemapLayer = function (_Renderable) {
    (0, _inherits3.default)(TilemapLayer, _Renderable);

    function TilemapLayer(tilemap, layerData) {
        (0, _classCallCheck3.default)(this, TilemapLayer);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TilemapLayer.__proto__ || (0, _getPrototypeOf2.default)(TilemapLayer)).call(this, 'tilemapLayer', tilemap.moduleManager));

        _this.tilemap = tilemap;
        _this.data = layerData;
        return _this;
    }

    (0, _createClass3.default)(TilemapLayer, [{
        key: "render",
        value: function render(context) {

            if (!this._enabled && !this.tilemap._enabled) return false;

            return (0, _DrawTilemapLayer2.default)(context, this.tilemap, this.data, this.tilemap.moduleManager.entity._transform);
        }
    }, {
        key: "getTile",
        value: function getTile(x, y) {
            return this.data.getTile(x, y);
        }
    }, {
        key: "width",
        get: function get() {
            return this.data.width * this.tilemap.tileWidth;
        }
    }, {
        key: "height",
        get: function get() {
            return this.data.height * this.tilemap.tileHeight;
        }
    }]);
    return TilemapLayer;
}(_Renderable3.default);

exports.default = TilemapLayer;

/***/ }),

/***/ "./physics/physics.js":
/*!****************************!*\
  !*** ./physics/physics.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _SAT = __webpack_require__(/*! ./sat/SAT */ "./physics/sat/SAT.js");

var _SAT2 = _interopRequireDefault(_SAT);

var _SATResponse = __webpack_require__(/*! ./sat/SATResponse */ "./physics/sat/SATResponse.js");

var _SATResponse2 = _interopRequireDefault(_SATResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Physics = function () {
  function Physics(game) {
    (0, _classCallCheck3.default)(this, Physics);


    this.game = null;
    this.sat = null;
    this.response = null;

    this.game = game;
    this.colliadables = [];
  }

  (0, _createClass3.default)(Physics, [{
    key: 'init',
    value: function init() {

      this.sat = new _SAT2.default();
      this.response = new _SATResponse2.default();
    }
  }, {
    key: 'getColliadables',
    value: function getColliadables() {
      return this.colliadables;
    }
  }, {
    key: 'addColliderObj',
    value: function addColliderObj(obj) {
      this.colliadables.push(obj);
    }
  }, {
    key: 'removeColliderObj',
    value: function removeColliderObj(obj) {

      var i = this.colliadables.indexOf(obj);

      if (i != -1) {
        this.colliadables.splice(i, 1);
      }
    }
  }, {
    key: 'clear',
    value: function clear() {

      this.colliadables = [];
      this.colliadables.length = 0;
    }
  }, {
    key: 'length',
    get: function get() {
      return this.colliadables.length;
    }
  }]);
  return Physics;
}();

exports.default = Physics;

/***/ }),

/***/ "./physics/sat/SAT.js":
/*!****************************!*\
  !*** ./physics/sat/SAT.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Vector = __webpack_require__(/*! ../../math/Vector2 */ "./math/Vector2.js");

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SAT = function () {
    function SAT() {
        (0, _classCallCheck3.default)(this, SAT);


        this.VECTORS = [];
        for (var v = 0; v < 10; v++) {
            VECTORS.push(new _Vector2.default());
        }

        this.ARRAYS = [];
        for (var a = 0; a < 5; a++) {
            ARRAYS.push([]);
        }
    }

    (0, _createClass3.default)(SAT, [{
        key: 'flattenPointsOn',
        value: function flattenPointsOn(points, normal, result) {
            var min = Number.MAX_VALUE;
            var max = -Number.MAX_VALUE;
            var len = points.length;
            for (var i = 0; i < len; i++) {
                // The magnitude of the projection of the point onto the normal
                var dot = points[i].dot(normal);
                if (dot < min) {
                    min = dot;
                }
                if (dot > max) {
                    max = dot;
                }
            }
            result[0] = min;
            result[1] = max;
        }
    }, {
        key: 'isSeparatingAxis',
        value: function isSeparatingAxis(posA, posB, pointsA, pointsB, axis, response) {

            var rangeA = ARRAYS.pop();
            var rangeB = ARRAYS.pop();

            // magnitude between the two polygons
            var offsetV = VECTORS.pop().copy(posB).sub(posA);
            var projectedOffset = offsetV.dot(axis);

            // Project the polygons onto the axis.
            flattenPointsOn(pointsA, axis, rangeA);
            flattenPointsOn(pointsB, axis, rangeB);

            // Move B's range to its position relative to A.
            rangeB[0] += projectedOffset;
            rangeB[1] += projectedOffset;

            // Check if there is a gap. If there is, this is a separating axis and we can stop
            if (rangeA[0] > rangeB[1] || rangeB[0] > rangeA[1]) {
                VECTORS.push(offsetV);
                ARRAYS.push(rangeA);
                ARRAYS.push(rangeB);
                return true;
            }

            if (response) {
                var overlap = 0;
                // A starts further left than B
                if (rangeA[0] < rangeB[0]) {

                    response.aInB = false;

                    // A ends before B does. We have to pull A out of B
                    if (rangeA[1] < rangeB[1]) {

                        overlap = rangeA[1] - rangeB[0];
                        response.bInA = false;

                        // B is fully inside A.  Pick the shortest way out.
                    } else {

                        var option1 = rangeA[1] - rangeB[0];
                        var option2 = rangeB[1] - rangeA[0];
                        overlap = option1 < option2 ? option1 : -option2;
                    }
                    // B starts further left than A
                } else {

                    response.bInA = false;

                    // B ends before A ends. We have to push A out of B
                    if (rangeA[1] > rangeB[1]) {

                        overlap = rangeA[0] - rangeB[1];
                        response.aInB = false;

                        // A is fully inside B.  Pick the shortest way out.
                    } else {

                        var option1 = rangeA[1] - rangeB[0];
                        var option2 = rangeB[1] - rangeA[0];
                        overlap = option1 < option2 ? option1 : -option2;
                    }
                }
                // If this is the smallest amount of overlap we've seen so far, set it as the minimum overlap.
                var absOverlap = Math.abs(overlap);

                if (absOverlap < response.overlap) {

                    response.overlap = absOverlap;
                    response.overlapN.copy(axis);

                    if (overlap < 0) response.overlapN.reverse();
                }
            }

            VECTORS.push(offsetV);
            ARRAYS.push(rangeA);
            ARRAYS.push(rangeB);

            return false;
        }
    }, {
        key: 'testPolygonPolygon',
        value: function testPolygonPolygon(a, b, response) {

            // collider a

            var pointsA = a.shape.getPoints();
            var normalsA = a.shape.getNormals();
            var normalsALen = normalsA.length;

            // collider b

            var pointsB = b.shape.getPoints();
            var normalsB = b.shape.getNormals();
            var normalsBLen = normalsB.length;

            // If any of the edge normals of A is a separating axis, no intersection.
            while (normalsALen--) {
                if (isSeparatingAxis(a.position, b.position, pointsA, pointsB, normalsA[normalsALen], response)) {
                    return false;
                }
            }

            // If any of the edge normals of B is a separating axis, no intersection.
            while (normalsBLen--) {
                if (isSeparatingAxis(a.position, b.position, pointsA, pointsB, normalsB[normalsBLen], response)) {
                    return false;
                }
            }

            // Since none of the edge normals of A or B are a separating axis, there is an intersection
            // and we've already calculated the smallest overlap (in isSeparatingAxis).  Calculate the
            // final overlap vector.
            if (response) {
                response.a = a;
                response.b = b;
                response.overlapV.copy(response.overlapN).scale(response.overlap);
            }
            return true;
        }
    }]);
    return SAT;
}();

exports.default = SAT;

/***/ }),

/***/ "./physics/sat/SATResponse.js":
/*!************************************!*\
  !*** ./physics/sat/SATResponse.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SATResponse = function () {
    function SATResponse() {
        (0, _classCallCheck3.default)(this, SATResponse);

        this.a = null;
        this.b = null;
        this.overlapN = new Vector2();
        this.overlapV = new Vector2();
        this.aInB = true;
        this.bInA = true;
        this.overlap = Number.MAX_VALUE;
        this.indexShapeA = -1;
        this.indexShapeB = -1;
        this.clear();
    }

    (0, _createClass3.default)(SATResponse, [{
        key: "clear",
        value: function clear() {
            this.aInB = true;
            this.bInA = true;
            this.overlap = Number.MAX_VALUE;
            this.indexShapeA = -1;
            this.indexShapeB = -1;
            return this;
        }
    }]);
    return SATResponse;
}();

exports.default = SATResponse;

/***/ }),

/***/ "./render/Define.js":
/*!**************************!*\
  !*** ./render/Define.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var RenderingType = exports.RenderingType = {
    NEAREST: 0,
    LINEAR: 1
};

/***/ }),

/***/ "./render/Render.js":
/*!**************************!*\
  !*** ./render/Render.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _RenderLayersManagement = __webpack_require__(/*! ./layer/RenderLayersManagement */ "./render/layer/RenderLayersManagement.js");

var _RenderLayersManagement2 = _interopRequireDefault(_RenderLayersManagement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Render = function () {
    function Render(game) {
        (0, _classCallCheck3.default)(this, Render);


        this.game = game;
        this.doubleBuffer = false;
        this.smoothing = null;
        this.imageRendering = null;
        this.canvas = null;
        this.context = null;
        this.layer = new _RenderLayersManagement2.default(this.game);
        this._backgroundColor = '#000';
        this._alpha = 1;
        this._enable = true;
        this.clear = true;
        this.drawCalls = 0;
    }

    (0, _createClass3.default)(Render, [{
        key: 'domCanvas',
        get: function get() {
            if (this.doubleBuffer) {
                return this._domCanvas;
            } else {
                return this.canvas;
            }
        }
    }, {
        key: 'backgroundColor',
        get: function get() {
            return this._backgroundColor;
        },
        set: function set(value) {
            this._backgroundColor = value;
        }
    }, {
        key: 'alpha',
        get: function get() {
            return this._alpha;
        },
        set: function set(value) {

            if (this._alpha !== value) {
                this.currentContext.globalAlpha = value;
                this._alpha = value;
            }

            return this._alpha;
        }
    }]);
    return Render;
}();

//System.register('Render', Render, 'render');


exports.default = Render;

/***/ }),

/***/ "./render/canvas/CanvasInterpolation.js":
/*!**********************************************!*\
  !*** ./render/canvas/CanvasInterpolation.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CanvasInterpolation = {

    crisp: function crisp(canvas) {
        var types = ['optimizeSpeed', 'crisp-edges', '-moz-crisp-edges', '-webkit-optimize-contrast', 'optimize-contrast', 'pixelated'];
        types.forEach(function (type) {
            canvas.style['image-rendering'] = type;
        });
        canvas.style.msInterpolationMode = 'nearest-neighbor';
        return canvas;
    },

    bicubic: function bicubic(canvas) {
        canvas.style['image-rendering'] = 'auto';
        canvas.style.msInterpolationMode = 'bicubic';
        return canvas;
    }
};

(0, _freeze2.default)(CanvasInterpolation);

exports.default = CanvasInterpolation;

/***/ }),

/***/ "./render/canvas/CanvasListManager.js":
/*!********************************************!*\
  !*** ./render/canvas/CanvasListManager.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _seal = __webpack_require__(/*! babel-runtime/core-js/object/seal */ "../node_modules/babel-runtime/core-js/object/seal.js");

var _seal2 = _interopRequireDefault(_seal);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _List = __webpack_require__(/*! ../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// based in pixi
var CanvasListManager = function () {
    function CanvasListManager() {
        (0, _classCallCheck3.default)(this, CanvasListManager);

        this.list = new _List2.default();
    }

    (0, _createClass3.default)(CanvasListManager, [{
        key: 'create',
        value: function create(gameParent, width, height) {

            var canvasContainer = this.firstFree();
            var canvas = void 0;

            // no parent found
            if (canvasContainer === null) {

                canvasContainer = {
                    parent: gameParent,
                    canvas: document.createElement('canvas')
                };

                this.list.push(canvasContainer);

                canvas = canvasContainer.canvas;
            } else {

                canvasContainer.parent = gameParent;
                canvas = canvasContainer.canvas;
            }

            canvas.width = width;
            canvas.height = height;

            return canvas;
        }
    }, {
        key: 'filter',
        value: function filter(gameParent) {
            // functional programming

            var list = scintilla.CanvasList.list;

            return list.parent === gameParent;
        }
    }, {
        key: 'firstFree',
        value: function firstFree() {

            this.list.each(function (canvas) {

                if (!canvas.parent) {
                    return canvas;
                }
            });

            return null;
        }
    }, {
        key: 'remove',
        value: function remove(parent) {

            var list = this.list;

            for (var i = 0; i < list.length; i++) {
                if (list[i].parent === parent) {
                    list[i].parent = null;
                }
            }
        }
    }, {
        key: 'clear',
        value: function clear() {
            /// TODO
        }
    }]);
    return CanvasListManager;
}();

var CanvasManager = new CanvasListManager();

(0, _seal2.default)(CanvasManager);

exports.default = CanvasManager;

/***/ }),

/***/ "./render/canvas/CanvasSmoothing.js":
/*!******************************************!*\
  !*** ./render/canvas/CanvasSmoothing.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Define = __webpack_require__(/*! ../Define */ "./render/Define.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CanvasSmoothing = function () {
    function CanvasSmoothing(context) {
        (0, _classCallCheck3.default)(this, CanvasSmoothing);

        this.context = context;
        this.prefix = this.getPrefix(context);
    }

    (0, _createClass3.default)(CanvasSmoothing, [{
        key: 'getPrefix',
        value: function getPrefix(context) {

            var vendors = ['i', 'webkitI', 'msI', 'mozI', 'oI'];
            for (var i = 0; i < vendors.length; i++) {
                var s = vendors[i] + 'mageSmoothingEnabled';

                if (s in context) return s;
            }

            return null;
        }
    }, {
        key: 'setEnable',
        value: function setEnable(flag) {

            if (flag === 'undefined') flag = true;

            if (this.prefix === '' || this.prefix === undefined) this.prefix = this.getPrefix(this.context);

            if (this.prefix) this.context[this.prefix] = flag;

            return this.context;
        }
    }, {
        key: 'set',
        value: function set(renderType) {
            if (renderType == _Define.RenderingType.NEAREST) this.setEnable(false);else this.setEnable(true);
        }
    }]);
    return CanvasSmoothing;
}();

exports.default = CanvasSmoothing;

/***/ }),

/***/ "./render/canvas/index.js":
/*!********************************!*\
  !*** ./render/canvas/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Smoothing: __webpack_require__(/*! ./CanvasSmoothing */ "./render/canvas/CanvasSmoothing.js"),
    Manager: __webpack_require__(/*! ./CanvasListManager */ "./render/canvas/CanvasListManager.js"),
    Interpolation: __webpack_require__(/*! ./CanvasInterpolation */ "./render/canvas/CanvasInterpolation.js")
};

/***/ }),

/***/ "./render/color/Color.js":
/*!*******************************!*\
  !*** ./render/color/Color.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _MathUtils = __webpack_require__(/*! ../../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _ParseColor = __webpack_require__(/*! ./components/ParseColor */ "./render/color/components/ParseColor.js");

var _ParseColor2 = _interopRequireDefault(_ParseColor);

var _Ease = __webpack_require__(/*! ../../math/easing/Ease */ "./math/easing/Ease.js");

var _Ease2 = _interopRequireDefault(_Ease);

var _EasingType = __webpack_require__(/*! ../../math/easing/EasingType */ "./math/easing/EasingType.js");

var _EasingType2 = _interopRequireDefault(_EasingType);

var _MakeImmutable = __webpack_require__(/*! ../../utils/object/MakeImmutable */ "./utils/object/MakeImmutable.js");

var _MakeImmutable2 = _interopRequireDefault(_MakeImmutable);

var _SetColor = __webpack_require__(/*! ./components/SetColor */ "./render/color/components/SetColor.js");

var _SetColor2 = _interopRequireDefault(_SetColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ColorNormUpdate(color) {
    color._css = 'rgba(' + _MathUtils2.default.floor(color.r * 255) + ',' + _MathUtils2.default.floor(color.g * 255) + ',' + _MathUtils2.default.floor(color.b * 255) + ',' + color.a + ')';
}

function ColorUpdate(color) {
    color._css = 'rgba(' + color._r + ',' + color._g + ',' + color._b + ',' + color._a + ')';
}

var Color = function () {
    function Color(r, g, b, a) {
        (0, _classCallCheck3.default)(this, Color);

        this._r = r || 0;
        this._g = g || 0;
        this._b = b || 0;
        this._a = a || 1;
        this._css = null;

        ColorUpdate(this);
    }

    (0, _createClass3.default)(Color, [{
        key: 'set',
        value: function set(color) {

            (0, _SetColor2.default)(this, color);

            ColorUpdate(this);

            return this;
        }
    }, {
        key: 'setNorm',
        value: function setNorm(r, g, b, a) {
            if (r === undefined) return;

            this._r = Math.round(r * 255.0);
            this._g = Math.round(g * 255.0);
            this._b = Math.round(b * 255.0);

            if (a !== undefined) this._a = Math.round(a * 255.0);

            ColorUpdate(this);

            return this;
        }
    }, {
        key: 'setRGB',
        value: function setRGB(r, g, b) {
            return this.setRGBA(r, g, b, 255);
        }
    }, {
        key: 'setRGBA',
        value: function setRGBA(r, g, b, a) {
            if (r === undefined) return this;

            this._r = r || 0;
            this._g = g || 0;
            this._b = b || 0;

            if (a !== undefined) this._a = a;

            ColorUpdate(this);

            return this;
        }
    }, {
        key: 'setColor',
        value: function setColor(color, a) {
            this._r = color.r;
            this._g = color.g;
            this._b = color.b;
            if (a !== undefined) this._a = a;else this._a = color.a;
            ColorUpdate(this);
            return this;
        }
    }, {
        key: 'parse',
        value: function parse(value) {
            var parsedValue = (0, _ParseColor2.default)(value);
            this._r = parsedValue.r;
            this._g = parsedValue.g;
            this._b = parsedValue.b;
            this._a = parsedValue.a;
            ColorUpdate(this);
            return this;
        }
    }, {
        key: 'lerp',
        value: function lerp(toColor, t) {

            this._r = _MathUtils2.default.lerp(this._r, toColor.r);
            this._g = _MathUtils2.default.lerp(this._g, toColor.g);
            this._b = _MathUtils2.default.lerp(this._b, toColor.b);
            this._a = _MathUtils2.default.lerp(this._a, toColor.a);
            ColorUpdate(this);
            return this;
        }

        /*ease(to, t, easingType, easingMode, easingArg) {
             if (easingType === undefined) easingType = EasingType.LINEAR;
             if (easingMode === undefined) easingMode = 0;
             if (easingArg === undefined) easingArg = 1;
               let easer = Ease.in;
               switch (easingMode) {
                 case 1: {
                    easer = Ease.out;
                    break;
                 }
                 case 2: {
                    easer = Ease.inout;
                    break;
                 }
             }
               this._r = easer.by(easingType, this._r, to.r, t, easingArg);
             this._g = easer.by(easingType, this._g, to.g, t, easingArg);
             this._b = easer.by(easingType, this._b, to.b, t, easingArg);
             this._a = easer.by(easingType, this._a, to.a, t, easingArg);
               ColorUpdate(this);
             return this;
        }*/

    }, {
        key: 'to32',
        value: function to32() {
            /// TODO
        }
    }, {
        key: 'toCSS',
        value: function toCSS() {
            /// TODO
        }
    }, {
        key: 'toInt',
        value: function toInt() {
            /// TODO
        }
    }, {
        key: 'toHex',
        value: function toHex() {}
        /// TODO


        // static functions

    }, {
        key: 'rgba',
        get: function get() {
            return this._css;
        }
    }, {
        key: 'r',
        get: function get() {
            return this._r;
        }
    }, {
        key: 'g',
        get: function get() {
            return this._g;
        }
    }, {
        key: 'b',
        get: function get() {
            return this._b;
        }
    }, {
        key: 'a',
        get: function get() {
            return this._a;
        },
        set: function set(value) {
            this._a = value;
            ColorUpdate(this);
        }
    }], [{
        key: 'ease',
        value: function ease(from, to, t, easingType, easingMode, easingArg, destinationColor) {

            if (easingType === undefined) easingType = _EasingType2.default.LINEAR;
            if (easingMode === undefined) easingMode = 0;
            if (easingArg === undefined) easingArg = 3;

            var easer = _Ease2.default.in;

            switch (easingMode) {
                case 1:
                    {
                        easer = _Ease2.default.out;
                        break;
                    }
                case 2:
                    {
                        easer = _Ease2.default.inout;
                        break;
                    }
            }

            if (destinationColor === undefined) destinationColor = new Color();

            destinationColor.set(easer.by(easingType, from.r, to.r, t, easingArg), easer.by(easingType, from.g, to.g, t, easingArg), easer.by(easingType, from.b, to.b, t, easingArg), easer.by(easingType, from.a, to.a, t, easingArg));

            return destinationColor;
        }
    }, {
        key: 'red',
        get: function get() {
            return new Color(255, 0, 0);
        }
    }, {
        key: 'green',
        get: function get() {
            return new Color(0, 255, 0);
        }
    }, {
        key: 'blue',
        get: function get() {
            return new Color(0, 0, 255);
        }
    }, {
        key: 'cyan',
        get: function get() {
            return new Color(0, 255, 255);
        }
    }, {
        key: 'magenta',
        get: function get() {
            return new Color(255, 0, 255);
        }
    }, {
        key: 'yellow',
        get: function get() {
            return new Color(255, 255, 0);
        }
    }, {
        key: 'black',
        get: function get() {
            return new Color(0);
        }
    }, {
        key: 'white',
        get: function get() {
            return new Color(255);
        }
    }, {
        key: 'gray',
        get: function get() {
            return new Color(255 / 2.0);
        }
    }, {
        key: 'transparent',
        get: function get() {
            return new Color(0, 0, 0, 0);
        }
    }]);
    return Color;
}();

exports.default = Color;

/*MakeImmutable([
    Color.red,
    Color.green,
    Color.blue,
    Color.cyan,
    Color.magenta,
    Color.yellow,
    Color.black,
    Color.white,
    Color.gray,
    Color.transparent], false);*/

/*
MakeImmutable([
Color.red = new Color(255, 0, 0),
Color.green = new Color(0, 255, 0),
Color.blue = new Color(0, 0, 255),
Color.cyan = new Color(0, 255, 255),
Color.magenta = new Color(255, 0, 255),
Color.yellow = new Color(255, 255, 0),
Color.black = new Color(0),
Color.white = new Color(255),
Color.gray = new Color(255/2.0),
Color.transparent = new Color(0, 0, 0, 0),], true);*/

/***/ }),

/***/ "./render/color/components/CSSToColor.js":
/*!***********************************************!*\
  !*** ./render/color/components/CSSToColor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CSSToColor;

var _Color = __webpack_require__(/*! ../Color */ "./render/color/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_REGEX_PATTERN = /^(?:\w*|rgba?)\(?\s*(\d+)\s*\,?(?:\s*(\d+)\s*)?\,?(?:\s*(\d+)\s*)?\,?(?:\s*(\d+(?:\.\d+)?))?\s*\)?$/;

function CSSToColor(value, source) {

    var color = void 0;

    if (source === undefined) color = new _Color2.default();else color = source;

    var regex = CSS_REGEX_PATTERN.exec(value.toLowerCase());

    if (regex) {
        var r = parseInt(regex[0], 10) || 0;
        var g = parseInt(regex[1], 10) || 0;
        var b = parseInt(regex[3], 10) || 0;
        var a = 1;

        if (regex[4] !== undefined) a = parseFloat(regex[4], 10) || 1;

        color.setRGBA(r, g, b, a);
    }

    return color;
}

/***/ }),

/***/ "./render/color/components/HexToColor.js":
/*!***********************************************!*\
  !*** ./render/color/components/HexToColor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = HexToColor;

var _Color = __webpack_require__(/*! ../Color */ "./render/color/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HEX_SHORTHAND_REGEX_PATTERN = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
var HEX_REGEX_PATTERN = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;

// Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function HexToColor(value, source) {

    var color = void 0;

    if (source === undefined) color = new _Color2.default();else color = source;

    // Hexadecimal can contains alpha in short '#f00e' or full '#F00eaecd'
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    hex = hex.replace(HEX_SHORTHAND_REGEX_PATTERN, function (m, r, g, b, a) {

        if (a !== undefined) a = 'F';

        return r + r + g + g + b + b + a + a;
    });

    var result = HEX_REGEX_PATTERN.exec(hex);

    if (result) {
        color.setRGBA(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), result[4] === undefined ? 1 : parseInt(result[4], 16));
    }

    return color;
}

/***/ }),

/***/ "./render/color/components/IntToColor.js":
/*!***********************************************!*\
  !*** ./render/color/components/IntToColor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = IntToColor;

var _Color = __webpack_require__(/*! ../Color */ "./render/color/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IntToColor(value, source) {

    var color = source || new _Color2.default();
    var r = void 0,
        g = void 0,
        b = void 0,
        a = void 0;

    if (value >= 16777216) // 256 ^ 3
        a = color >>> 24;else a = 1;

    r = color >> 16 & 0xFF;
    g = color >> 8 & 0xFF;
    b = color & 0xFF;

    color.setRGBA(r, g, b, a);

    return color;
}

/***/ }),

/***/ "./render/color/components/ObjectToColor.js":
/*!**************************************************!*\
  !*** ./render/color/components/ObjectToColor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ObjectToColor;

var _Color = __webpack_require__(/*! ../Color */ "./render/color/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ObjectToColor(value) {

    if (source === undefined) {
        return new _Color2.default(value.r, value.g, value.b, value.a);
    } else {
        source.setRGBA(value.r, value.g, value.b, value.a);
    }
}

/***/ }),

/***/ "./render/color/components/ParseColor.js":
/*!***********************************************!*\
  !*** ./render/color/components/ParseColor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = ParseColor;

var _IntToColor = __webpack_require__(/*! ./IntToColor */ "./render/color/components/IntToColor.js");

var _IntToColor2 = _interopRequireDefault(_IntToColor);

var _CSSToColor = __webpack_require__(/*! ./CSSToColor */ "./render/color/components/CSSToColor.js");

var _CSSToColor2 = _interopRequireDefault(_CSSToColor);

var _HexToColor = __webpack_require__(/*! ./HexToColor */ "./render/color/components/HexToColor.js");

var _HexToColor2 = _interopRequireDefault(_HexToColor);

var _ObjectToColor = __webpack_require__(/*! ./ObjectToColor */ "./render/color/components/ObjectToColor.js");

var _ObjectToColor2 = _interopRequireDefault(_ObjectToColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ParseColor(value) {

  var type = typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value);

  if (type === 'number') {

    return (0, _IntToColor2.default)(value);
  } else if (type === 'string') {

    if (value.substr(0, 3).toLowerCase() === 'rgb') {
      return (0, _CSSToColor2.default)(value);
    } else {
      return (0, _HexToColor2.default)(value);
    }
  } else if (type === 'object') {

    return (0, _ObjectToColor2.default)(value);
  }
}

/***/ }),

/***/ "./render/color/components/SetColor.js":
/*!*********************************************!*\
  !*** ./render/color/components/SetColor.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = SetColor;

var _Color = __webpack_require__(/*! ../Color */ "./render/color/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SetColor(source, value) {

  /*if ((source instanceof Color) === false) {
      source = new Color();
  }*/

  var type = typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);

  if (type === 'number') {

    return IntToColor(value, source);
  } else if (type === 'string') {

    if (value.substr(0, 3).toLowerCase() === 'rgb') {
      return CSSToColor(value, source);
    } else {
      return HexToColor(value, source);
    }
  } else if (type === 'object') {

    return ObjectToColor(value, source);
  }
}

/***/ }),

/***/ "./render/components/BeginDrawRender.js":
/*!**********************************************!*\
  !*** ./render/components/BeginDrawRender.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = BeginDrawRender;
function BeginDrawRender(render) {

    if (render.clear) {
        render.context.clearRect(0, 0, render.canvas.width, render.canvas.height);
    }

    render.context.fillStyle = render._backgroundColor;
    render.context.fillRect(0, 0, render.canvas.width, render.canvas.height);

    render.drawCalls = 0;
}

/***/ }),

/***/ "./render/components/DrawRender.js":
/*!*****************************************!*\
  !*** ./render/components/DrawRender.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DrawRender;

var _DrawRenderLayer = __webpack_require__(/*! ./DrawRenderLayer */ "./render/components/DrawRenderLayer.js");

var _DrawRenderLayer2 = _interopRequireDefault(_DrawRenderLayer);

var _RenderScene = __webpack_require__(/*! ../../scene/components/RenderScene */ "./scene/components/RenderScene.js");

var _RenderScene2 = _interopRequireDefault(_RenderScene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawRender(render, camera, delta) {

    if (!render._enable) return;

    /* let clip = (camera.x !== 0 ||
          camera.y !== 0 ||
          camera.width !== render.context.canvas.width ||
          camera.height !== render.context.canvas.height);*/

    // alpha
    if (render._alpha !== 1) {
        render.context.globalAlpha = 1;
        render._alpha = 1;
    }

    // blend
    render.context.globalCompositeOperation = 'source-over';

    if (render.game.scene._setup === true) {

        for (var i = 0; i < render.layer.renderLayers.length; i++) {
            var layer = render.layer.renderLayers.at(i);

            if (!layer.enable) continue;

            var drawCalls = 0;
            drawCalls += (0, _DrawRenderLayer2.default)(layer, camera, render.context);

            render.drawCalls += drawCalls;
        }

        //camera.game.system.draw.bounds(camera.bounds);
    }
}

/***/ }),

/***/ "./render/components/DrawRenderLayer.js":
/*!**********************************************!*\
  !*** ./render/components/DrawRenderLayer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DrawRenderLayer;

var _SortDepth = __webpack_require__(/*! ../layer/SortDepth */ "./render/layer/SortDepth.js");

var _SortDepth2 = _interopRequireDefault(_SortDepth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawRenderLayer(layer, camera, context) {

    if (!layer.__enable) return 0;

    var drawCalls = 0;

    if (layer.__isDirty) {
        layer.renderList.sort(_SortDepth2.default);

        layer.__isDirty = false;
    }

    var self = this;
    var size = layer.renderList.size;

    for (var i = 0; i < size; i++) {
        var element = layer.renderList.at(i);

        if (camera.bounds.intersects(element.bounds)) {

            context.globalAlpha = element.alpha;

            drawCalls += element.render(context);

            //camera.game.system.draw.bounds(element.bounds);
        }
    }

    return drawCalls;
}

/***/ }),

/***/ "./render/components/EndDrawRender.js":
/*!********************************************!*\
  !*** ./render/components/EndDrawRender.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = EndDrawRender;
function EndDrawRender(render) {

    render.context.globalAlpha = 1;
    render.context.globalCompositeOperation = 'source-over';
}

/***/ }),

/***/ "./render/components/InitializeRender.js":
/*!***********************************************!*\
  !*** ./render/components/InitializeRender.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InitializeRender;

var _CanvasListManager = __webpack_require__(/*! ../canvas/CanvasListManager */ "./render/canvas/CanvasListManager.js");

var _CanvasListManager2 = _interopRequireDefault(_CanvasListManager);

var _CanvasInterpolation = __webpack_require__(/*! ../canvas/CanvasInterpolation */ "./render/canvas/CanvasInterpolation.js");

var _CanvasInterpolation2 = _interopRequireDefault(_CanvasInterpolation);

var _CanvasSmoothing = __webpack_require__(/*! ../canvas/CanvasSmoothing */ "./render/canvas/CanvasSmoothing.js");

var _CanvasSmoothing2 = _interopRequireDefault(_CanvasSmoothing);

var _Define = __webpack_require__(/*! ../Define */ "./render/Define.js");

var _Render = __webpack_require__(/*! ../Render */ "./render/Render.js");

var _Render2 = _interopRequireDefault(_Render);

var _PlatformEnvironment = __webpack_require__(/*! ../../system/PlatformEnvironment */ "./system/PlatformEnvironment.js");

var _PlatformEnvironment2 = _interopRequireDefault(_PlatformEnvironment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InitializeRender(game, config) {

  if (!_PlatformEnvironment2.default.features.canvas) {
    throw new Error('Game.CreateRender: Could not create Canvas element. Canvas is not supported in your platform.');
  }

  var render = new _Render2.default(game);

  render.imageRendering = config.pixelated ? _Define.RenderingType.NEAREST : _Define.RenderingType.LINEAR;

  if (config.canvas) {
    render.canvas = config.canvas;
  } else {
    render.canvas = _CanvasListManager2.default.create(game, config.width, config.height);
  }

  // create context
  render.context = render.canvas.getContext("2d", { alpha: false });
  render.smoothing = new _CanvasSmoothing2.default(render.context);

  // set pixelated
  if (config.pixelated) {

    _CanvasInterpolation2.default.crisp(render.canvas);
    render.smoothing.set(render.imageRendering);
  }

  if (config.doubleBuffer) {
    render.doubleBuffer = true;
    render._domCanvas = _CanvasListManager2.default.create(game, config.width, config.height);
    render._domContext = render._domCanvas.getContext("2d", { alpha: false });
  }

  return render;

  // default definition
  /*let defaultDef = {
    tabindex: '1',
    width: width,
    height: height,
    id: Math.random().toString(36).substr(2, 9),
    class: "",
    container: "body",
    style: "padding: 0;margin: auto;display: block;top: 0; bottom: 0;left: 0;right: 0;border:1px solid #d3d3d3;background-color: #f1f1f1;"
  };
      let CO = defaultDef;
  let canvas;
    canvas = document.createElement('canvas');
  //canvas.parent = parent;
  canvas.setAttribute("id", CO.id);
  canvas.setAttribute("width", CO.width);
  canvas.setAttribute("height", CO.height);
  canvas.setAttribute("style", CO.style);*/
}

/***/ }),

/***/ "./render/components/RequestDepthSorting.js":
/*!**************************************************!*\
  !*** ./render/components/RequestDepthSorting.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RequestDepthSorting;
function RequestDepthSorting(layerID) {

    var layer = this.layer.renderLayers.at(layerID);

    if (layer === undefined) return;

    if (layer.__isDirty === true) return;

    layer.__isDirty = true;
}

/***/ }),

/***/ "./render/components/RequestRenderableLayerIDChange.js":
/*!*************************************************************!*\
  !*** ./render/components/RequestRenderableLayerIDChange.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RequestRenderableLayerIDChange;

/// TODO - BETTER
function RequestRenderableLayerIDChange(renderable, oldLayerID, toLayerID) {

    // if the to layer is the same of old, we don't change
    if (oldLayerID === toLayerID) return oldLayerID;

    var oldLayer = this.layer.renderLayers.at(oldLayerID);

    // if we don't find the old layer ID 
    if (oldLayer === undefined) {

        // we need to check if the renderable is somewhere
        oldLayer = this.layer.findRenderableLayer(renderable);

        // still undefined
        if (oldLayer === undefined) {

            // we add to default layer
            this.layer.renderLayers.at(0).add(renderable);
            return 0;
        }
    }

    var toLayer = this.layer.renderLayers.at(toLayerID);

    // if tolayer is undefined or same has oldLayer
    if (toLayer === undefined || toLayer === oldLayer) return oldLayerID;

    // find the renderable index
    var index = oldLayer.renderList.indexOf(renderer);

    if (index === -1) return oldLayerID;

    oldLayer.removeAt(index);
    toLayer.add(renderer);

    return toLayerID;
}

/***/ }),

/***/ "./render/index.js":
/*!*************************!*\
  !*** ./render/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Canvas: __webpack_require__(/*! ./canvas */ "./render/canvas/index.js"),
    RenderLayer: __webpack_require__(/*! ./layer/RenderLayer */ "./render/layer/RenderLayer.js"),
    RenderLayerManagement: __webpack_require__(/*! ./layer/RenderLayersManagement */ "./render/layer/RenderLayersManagement.js"),
    Render: __webpack_require__(/*! ./Render */ "./render/Render.js"),
    UI: __webpack_require__(/*! ./ui/UI */ "./render/ui/UI.js"),
    Transition: __webpack_require__(/*! ./transition/Transition */ "./render/transition/Transition.js")
};

/***/ }),

/***/ "./render/layer/RenderLayer.js":
/*!*************************************!*\
  !*** ./render/layer/RenderLayer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _List = __webpack_require__(/*! ../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenderLayer = function () {
    function RenderLayer(game, layerName) {
        (0, _classCallCheck3.default)(this, RenderLayer);


        this._name = layerName;
        this.game = game;
        this.renderList = new _List2.default(true);
        this.__drawCalls = 0;
        this.__enable = true;
        this.__isDirty = false;
    }

    (0, _createClass3.default)(RenderLayer, [{
        key: 'add',


        // Add renderable components
        value: function add(renderer) {

            if (renderer === undefined) return;

            this.renderList.push(renderer);
            this.__isDirty = true;
        }
    }, {
        key: 'has',
        value: function has(renderer) {
            return this.renderList.indexOf(renderer) !== -1;
        }
    }, {
        key: 'remove',
        value: function remove(renderer) {
            return this.renderList.remove(renderer);
        }
    }, {
        key: 'removeAt',
        value: function removeAt(index) {
            return this.renderList.eraseAt(index);
        }
    }, {
        key: 'at',
        value: function at(index) {
            if (index < 0 || index >= this.__renderers.size) {
                throw new Error('RenderLayer.at: Renderer at ' + index + ' does not exist in the render layer list: \"' + name + "\".");
            }
            return this.renderList.at(index);
        }
    }, {
        key: 'drawCalls',
        get: function get() {
            return this.__drawCalls;
        }
    }, {
        key: 'length',
        get: function get() {
            return this.__renderers.length;
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        }
    }, {
        key: 'enable',
        get: function get() {
            return this.__enable;
        },
        set: function set(value) {
            value = !!value;

            if (value !== this._enabled) {
                //if (!value)
                //    this.reset();

                this._enabled = value;
            }
        }
    }]);
    return RenderLayer;
}();

/*
      this.__renderers.sort(

          function(a, b) {
      
            if (a.depth > b.depth) {
      
              return 1;
      
            } else if (a.depth < b.depth) {
      
              return -1;
      
            } else {
      
              if (a.z > b.z) {
                return 1;
              } else {
                return -1;
              }
      
      
            }
          });
*/


exports.default = RenderLayer;

/***/ }),

/***/ "./render/layer/RenderLayersManagement.js":
/*!************************************************!*\
  !*** ./render/layer/RenderLayersManagement.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Map = __webpack_require__(/*! ../../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _RenderLayer = __webpack_require__(/*! ./RenderLayer */ "./render/layer/RenderLayer.js");

var _RenderLayer2 = _interopRequireDefault(_RenderLayer);

var _List = __webpack_require__(/*! ../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _Renderable = __webpack_require__(/*! ../../modules/renderables/Renderable */ "./modules/renderables/Renderable.js");

var _Renderable2 = _interopRequireDefault(_Renderable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenderLayersManagement = function () {
    function RenderLayersManagement(game) {
        (0, _classCallCheck3.default)(this, RenderLayersManagement);

        this.game = game;
        this.renderLayers = new _List2.default();
        //this.__renderLayersMap = new DataMap();
        this.add('default');
    }

    (0, _createClass3.default)(RenderLayersManagement, [{
        key: 'has',
        value: function has(id) {
            return this.renderLayers.hasAt(id);
        }
    }, {
        key: 'add',
        value: function add(name) {

            if (this.contains(name)) {
                throw new Error("RenderLayerManagement.add: There is already a RenderLayer called: \"" + name + "\".");
            }

            //this.__renderLayersMap.set(name, this.__renderLayers.length);
            this.renderLayers.push(new _RenderLayer2.default(this.game, name));
        }
    }, {
        key: 'remove',
        value: function remove(name) {
            if (typeof name !== 'string') throw new Error("RenderLayerManagement.remove: The value name is not a string.");

            if (name === "default") throw new Error("RenderLayerManagement.remove: You can not remove the \"default\" layer.");

            if (!this.__renderLayersMap.has(name)) throw new Error("RenderLayerManagement.remove: Could not remove layer. There is no layer named \"" + name + "\".");

            var index = this.__renderLayersMap.get(name);

            this.renderLayers.erase(name);
        }
    }, {
        key: 'contains',
        value: function contains(layerName) {
            if (typeof layerName !== 'string') throw new Error("RenderLayerManagement.contains: The value name is not a string.");

            var val = this.renderLayers.each(function (layer) {

                if (layer.name == layerName) {
                    return true;
                }
            });

            return val || false;
        }
    }, {
        key: 'findRenderableLayer',
        value: function findRenderableLayer(renderable) {
            return this.renderLayers.each(function (layer) {
                if (layer.has(renderable)) return layer;
            }) || null;
        }
    }, {
        key: 'findRenderableAtLayer',
        value: function findRenderableAtLayer(renderable, layerIndex) {

            if (layerIndex === undefined) layerIndex = 0;

            return this.renderLayers.at(layerIndex).has(renderable);
        }
    }, {
        key: 'removeRenderable',
        value: function removeRenderable(renderable) {
            return this.renderLayers.each(function (layer) {
                var idx = layer.renderList.indexOf(renderable);

                if (idx !== -1) {
                    return layer.removeAt(idx);
                }
            }) || null;
        }
    }, {
        key: 'addRenderable',
        value: function addRenderable(renderable, layerIndex) {

            if (layerIndex === undefined) layerIndex = 0;

            if (layerIndex >= this.renderLayers.size) layerIndex = this.renderLayers.size - 1;else if (layerIndex < 0) layerIndex = 0;

            if (renderable instanceof _Renderable2.default) {

                var layer = this.findRenderableLayer(renderable);

                if (layer !== null) {
                    console.warn("RenderLayerManagement.addRenderable: Could not add renderable. The renderable is already in the layer \'" + layer.name + "\'.");
                    return false;
                } else {
                    this.renderLayers.at(layerIndex).add(renderable);
                    return true;
                }
            } else {
                console.warn("RenderLayerManagement.addRenderable: Could not add renderable. It is not a instance of Renderable module.");
                return false;
            }
        }
    }]);
    return RenderLayersManagement;
}();

exports.default = RenderLayersManagement;

/***/ }),

/***/ "./render/layer/SortDepth.js":
/*!***********************************!*\
  !*** ./render/layer/SortDepth.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SortDepth;
function SortDepth(a, b) {
    return a._depthSorting - b._depthSorting;
}

/***/ }),

/***/ "./render/transition/DrawTransition.js":
/*!*********************************************!*\
  !*** ./render/transition/DrawTransition.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DrawTransition;

var _TransitionStyle = __webpack_require__(/*! ./TransitionStyle */ "./render/transition/TransitionStyle.js");

var _TransitionStyle2 = _interopRequireDefault(_TransitionStyle);

var _TransitionState = __webpack_require__(/*! ./TransitionState */ "./render/transition/TransitionState.js");

var _TransitionState2 = _interopRequireDefault(_TransitionState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawTransition(transition, canvas, context) {

    if (transition._state === _TransitionState2.default.NONE) return;

    context.globalCompositeOperation = 'source-over';

    var settings = transition.settings;

    switch (settings.style) {
        case _TransitionStyle2.default.NONE:
            return;
        case _TransitionStyle2.default.FILL:
            {

                context.fillStyle = transition._tColor.rgba;
                context.fillRect(0, 0, canvas.width, canvas.height);

                break;
            }
    }
}

/***/ }),

/***/ "./render/transition/Transition.js":
/*!*****************************************!*\
  !*** ./render/transition/Transition.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _TransitionSettings = __webpack_require__(/*! ./TransitionSettings */ "./render/transition/TransitionSettings.js");

var _TransitionSettings2 = _interopRequireDefault(_TransitionSettings);

var _TransitionState = __webpack_require__(/*! ./TransitionState */ "./render/transition/TransitionState.js");

var _TransitionState2 = _interopRequireDefault(_TransitionState);

var _Color = __webpack_require__(/*! ../color/Color */ "./render/color/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _TranstionBehavior = __webpack_require__(/*! ./TranstionBehavior */ "./render/transition/TranstionBehavior.js");

var _TranstionBehavior2 = _interopRequireDefault(_TranstionBehavior);

var _System = __webpack_require__(/*! ../../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Transition = function () {
    function Transition(game) {
        (0, _classCallCheck3.default)(this, Transition);

        this.game = game;

        this.settings = new _TransitionSettings2.default(this);
        this._behaviour = _TranstionBehavior2.default.NONE;
        this._state = _TransitionState2.default.NONE;
        this._alpha = 0;
        this._tColor = _Color2.default.transparent;
        this._startColor = new _Color2.default();
        this._t = 0;
    }

    (0, _createClass3.default)(Transition, [{
        key: "in",
        value: function _in() {

            var old = this._behaviour;

            if (old === _TranstionBehavior2.default.FADEIN) return;

            this._alpha = 0;
            this._t = 0;
            var oldAlpha = 0; //this._color.a;
            this._startColor.setColor(this.settings.inColor, 0);
            this._tColor.setColor(this._startColor, 0);
            this.settings.inColor.a = 1;
            this._behaviour = _TranstionBehavior2.default.FADEIN;
            this._state = _TransitionState2.default.IN;
        }
    }, {
        key: "out",
        value: function out() {

            if (this._behaviour === _TranstionBehavior2.default.FADEOUT) return;

            this._t = 0;
            this._startColor.setColor(this.settings.outColor, 1);
            this._tColor.setColor(this._startColor, 1);
            this.settings.outColor.a = 0;
            this._behaviour = _TranstionBehavior2.default.FADEOUT;
            this._state = _TransitionState2.default.OUT;
        }
    }, {
        key: "inout",
        value: function inout() {

            this.in();
            this._behaviour = _TranstionBehavior2.default.FADEINOUT;
        }
    }, {
        key: "by",
        value: function by(type) {

            switch (type) {
                case _TranstionBehavior2.default.NONE:
                    return;
                case _TranstionBehavior2.default.FADEINOUT:
                    return this.inout();
                case _TranstionBehavior2.default.FADEIN:
                    return this.in();
            }
        }
    }, {
        key: "reset",
        value: function reset() {
            this._tColor.setColor(this._startColor, 0);
            this._t = 0;
            this._behaviour = _TranstionBehavior2.default.NONE;
            this._state = _TransitionState2.default.NONE;
        }
    }]);
    return Transition;
}();

exports.default = Transition;


_System2.default.register('Transition', Transition, 'transition');

/***/ }),

/***/ "./render/transition/TransitionSettings.js":
/*!*************************************************!*\
  !*** ./render/transition/TransitionSettings.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Color = __webpack_require__(/*! ../color/Color */ "./render/color/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _EasingType = __webpack_require__(/*! ../../math/easing/EasingType */ "./math/easing/EasingType.js");

var _EasingType2 = _interopRequireDefault(_EasingType);

var _TransitionStyle = __webpack_require__(/*! ./TransitionStyle */ "./render/transition/TransitionStyle.js");

var _TransitionStyle2 = _interopRequireDefault(_TransitionStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TransitionSettings = function () {
    function TransitionSettings(parent) {
        (0, _classCallCheck3.default)(this, TransitionSettings);

        this.transition = parent;

        this.fromAlpha = 0;
        this.toAlpha = 0;

        this.inColor = _Color2.default.black;
        this.outColor = _Color2.default.black;

        this.inDuration = 0.5;
        this.outDuration = 0.5;

        this.pauseDuration = 0;
        this.style = _TransitionStyle2.default.FILL;

        this.timingInMethod = _EasingType2.default.LINEAR;
        this.timingOutMethod = _EasingType2.default.LINEAR;
        this.timingInArgument = 3; // step
        this.timingOutArgument = 3;
    }

    (0, _createClass3.default)(TransitionSettings, [{
        key: "setInColor",
        value: function setInColor(color) {
            this.inColor.parse(color);
            return this;
        }
    }, {
        key: "setOutColor",
        value: function setOutColor(color) {
            this.outColor.parse(color);
            return this;
        }
    }, {
        key: "setDuration",
        value: function setDuration(duration) {
            this.setInDuration(duration);
            this.setOutDuration(duration);
            return this;
        }
    }, {
        key: "setInDuration",
        value: function setInDuration(duration) {
            this.inDuration = Math.abs(duration);
            return this;
        }
    }, {
        key: "setOutDuration",
        value: function setOutDuration(duration) {
            this.outDuration = Math.abs(duration);
            return this;
        }
    }, {
        key: "setPauseDuration",
        value: function setPauseDuration(duration) {
            this.pauseDuration = Math.abs(duration);
            return this;
        }
    }, {
        key: "setEaseMethod",
        value: function setEaseMethod(easingType, parameter) {
            this.setInTiming(easingType, parameter);
            this.setOutTiming(easingType, parameter);
            return this;
        }
    }, {
        key: "setEaseInMethod",
        value: function setEaseInMethod(easingType, parameter) {
            this.timingInMethod = easingType;
            this.timingInArgument = parameter || 1;
            return this;
        }
    }, {
        key: "setEaseOutMethod",
        value: function setEaseOutMethod(easingType, parameter) {
            this.timingOutMethod = easingType;
            this.timingOutArgument = parameter || 1;
            return this;
        }
    }]);
    return TransitionSettings;
}();

exports.default = TransitionSettings;

/***/ }),

/***/ "./render/transition/TransitionState.js":
/*!**********************************************!*\
  !*** ./render/transition/TransitionState.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TransitionState = {
    NONE: 0,
    IN: 1,
    OUT: 2,
    WAIT: 3,
    IDLE: 4
};

(0, _freeze2.default)(TransitionState);

exports.default = TransitionState;

/***/ }),

/***/ "./render/transition/TransitionStyle.js":
/*!**********************************************!*\
  !*** ./render/transition/TransitionStyle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TranstionStyle = {
    NONE: 0,
    FILL: 1
};

(0, _freeze2.default)(TranstionStyle);

exports.default = TranstionStyle;

/***/ }),

/***/ "./render/transition/TranstionBehavior.js":
/*!************************************************!*\
  !*** ./render/transition/TranstionBehavior.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TransitionBehavior = {
    NONE: 0,
    FADEIN: 1,
    FADEOUT: 2,
    FADEINOUT: 3,
    IDLE: 4
};

(0, _freeze2.default)(TransitionBehavior);

exports.default = TransitionBehavior;

/***/ }),

/***/ "./render/transition/UpdateTransition.js":
/*!***********************************************!*\
  !*** ./render/transition/UpdateTransition.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateTransition;

var _TranstionBehavior = __webpack_require__(/*! ./TranstionBehavior */ "./render/transition/TranstionBehavior.js");

var _TranstionBehavior2 = _interopRequireDefault(_TranstionBehavior);

var _TransitionState = __webpack_require__(/*! ./TransitionState */ "./render/transition/TransitionState.js");

var _TransitionState2 = _interopRequireDefault(_TransitionState);

var _MathUtils = __webpack_require__(/*! ../../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _Ease = __webpack_require__(/*! ../../math/easing/Ease */ "./math/easing/Ease.js");

var _Ease2 = _interopRequireDefault(_Ease);

var _Color = __webpack_require__(/*! ../color/Color */ "./render/color/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateTransition(transition, deltaTime) {

    if (transition._behaviour === _TranstionBehavior2.default.NONE) return;

    var setg = transition.settings;
    var changeState = void 0;

    // UPDATE STATE
    switch (transition._state) {

        case _TransitionState2.default.IN:
            {
                transition._t += deltaTime / setg.inDuration;

                if (transition._t >= 1) {
                    transition._t = 1;
                    changeState = true;
                }

                // ease(to, t, easingType, easingMode, easingArg)
                _Color2.default.ease(transition._startColor, setg.inColor, transition._t, setg.timingInMethod, 0, setg.timingInArgument, transition._tColor);

                break;
            }

        case _TransitionState2.default.WAIT:
            {
                transition._t += deltaTime / setg.pauseDuration;

                if (transition._t >= 1) {
                    transition._t = 1;
                    changeState = true;
                }
                break;
            }

        case _TransitionState2.default.OUT:
            {
                transition._t += deltaTime / setg.outDuration;

                if (transition._t >= 1) {
                    transition._t = 1;
                    changeState = true;
                }
                _Color2.default.ease(transition._startColor, setg.outColor, transition._t, setg.timingOutMethod, 1, setg.timingOutArgument, transition._tColor);
                break;
            }
    }

    if (changeState === undefined) return;

    /// CHANGE TRANSITION STATE

    transition._t = 0;

    switch (transition._behaviour) {
        case _TranstionBehavior2.default.FADEIN:
        case _TranstionBehavior2.default.FADEOUT:
            // just fade in or out
            {

                transition._behaviour = _TranstionBehavior2.default.NONE;
                transition._state = _TransitionState2.default.IDLE;
                if (transition._behaviour === _TranstionBehavior2.default.FADEOUT) {
                    transition._behaviour = _TranstionBehavior2.default.FADEOUT;
                }
                transition.game.system.events.dispatch('transition_end');
                break;
            }
        case _TranstionBehavior2.default.FADEINOUT:
            // fade in and out
            {
                if (transition._state === _TransitionState2.default.IN) {
                    // end fade in
                    transition._color.setColor(setg.outColor);

                    if (setg.pauseDuration > 0) {
                        transition._state = _TransitionState2.default.WAIT;
                    } else {
                        transition._state = _TransitionState2.default.OUT;
                    }
                } else if (transition._state === _TransitionState2.default.WAIT) {
                    // end pause beteween

                    transition._state = _TransitionState2.default.OUT;
                    transition.game.system.events.dispatch('transition_pause_end');
                } else if (transition._state === _TransitionState2.default.OUT) {
                    // end fade out

                    transition._state = _TransitionState2.default.IDLE;
                    transition._behaviour = _TranstionBehavior2.default.NONE;
                    transition.game.system.events.dispatch('transition_end');
                }
                break;
            }
    }
}

/***/ }),

/***/ "./render/transition/index.js":
/*!************************************!*\
  !*** ./render/transition/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    State: __webpack_require__(/*! ./TransitionState */ "./render/transition/TransitionState.js"),
    Style: __webpack_require__(/*! ./TransitionStyle */ "./render/transition/TransitionStyle.js"),
    Behavior: __webpack_require__(/*! ./TranstionBehavior */ "./render/transition/TranstionBehavior.js")
};

/***/ }),

/***/ "./render/ui/AspectRatio.js":
/*!**********************************!*\
  !*** ./render/ui/AspectRatio.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var AspectRatio = {
    Square: 0,
    Pillarbox: 1,
    Letterbox: 2,

    computeViewPort: function computeViewPort(currentAspectRatio, desiredAspect) {

        var ratioBox = {
            x: 0,
            y: 0,
            w: 1,
            h: 1,
            style: 0
        };

        // If the current aspect ratio is already approximately equal to the desired aspect ratio,
        // use a full-screen Rect (in case it was set to something else previously)
        if (Math.round(currentAspectRatio * 100) / 100 == Math.round(desiredAspect * 100) / 100) {
            return ratioBox;
        }

        // Pillarbox
        if (currentAspectRatio > desiredAspect) {
            var inset = 1.0 - desiredAspect / currentAspectRatio;
            ratioBox.x = inset / 2;
            ratioBox.y = 0;
            ratioBox.w = 1.0 - inset;
            ratioBox.h = 1.0;
            ratioBox.style = AspectRatio.Pillarbox;
        } else // Letterbox
            {
                var _inset = 1.0 - currentAspectRatio / desiredAspect;

                ratioBox.x = 0;
                ratioBox.y = _inset / 2;
                ratioBox.w = 1.0;
                ratioBox.h = 1.0 - _inset;
                ratioBox.style = AspectRatio.Letterbox;
            }

        return ratioBox;
    }
};

exports.default = AspectRatio;

/***/ }),

/***/ "./render/ui/Debug.js":
/*!****************************!*\
  !*** ./render/ui/Debug.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Debug = function () {
  function Debug(game, drawer) {
    (0, _classCallCheck3.default)(this, Debug);


    this.game = game;
    this.draw = drawer;
    this.context = drawer.context;
    this.x = 8;
    this.y = 12;
    this.lineHeight = 14;
    this.column = 100;
    this.font = "10px Verdana";
    this.textColor = 'white';
    this.bgcolor = '#000';
    this.textShadow = '#000';
  }

  (0, _createClass3.default)(Debug, [{
    key: 'test',
    value: function test() {

      this.draw.disablePointTransform = true;
      this.x = 4;
      this.y = 12;
      //this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.strokeStyle = this.bgcolor;
      this.context.font = this.font;
      this.draw.alpha = 0.5;
      this.draw.rect(0, 0, this.game.width, 14 * 3 + 4, this.bgcolor);
      this.draw.alpha = 1;
      this.drawLine("FPS: " + Math.round(this.game.time.fps) + " / " + this.game.time.desiredFps);
      //this.drawLine("Instances in view: " + this.game.camera.instancesInView);
      this.drawLine("Instances: " + this.game.system.entityList.length);
      this.drawLine("Draw Calls: " + this.game.system.render.drawCalls); /*this.game.physics.length);*/
      this.x += this.game.width / 2;
      //this.y = 12+8;
      //this.drawLine("Sounds count " + this.game.sound.length);

      //this.y = 12+8;

      this.draw.disablePointTransform = false;
    }
  }, {
    key: 'drawLine',
    value: function drawLine(textLine) {

      var xx = this.x;

      this.context.fillStyle = this.textShadow;
      this.context.fillText(textLine, xx + 1, this.y + 1);
      this.context.fillStyle = this.textColor;

      this.context.fillText(textLine, xx, this.y);

      this.y += this.lineHeight;
    }
  }]);
  return Debug;
}();

exports.default = Debug;

/***/ }),

/***/ "./render/ui/DrawUI.js":
/*!*****************************!*\
  !*** ./render/ui/DrawUI.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DrawUI;

var _UpdateUIMatrix = __webpack_require__(/*! ./UpdateUIMatrix */ "./render/ui/UpdateUIMatrix.js");

var _UpdateUIMatrix2 = _interopRequireDefault(_UpdateUIMatrix);

var _RenderScene = __webpack_require__(/*! ../../scene/components/RenderScene */ "./scene/components/RenderScene.js");

var _RenderScene2 = _interopRequireDefault(_RenderScene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawUI(gui, sceneManager) {

    (0, _UpdateUIMatrix2.default)(gui);

    // blend
    gui.context.globalCompositeOperation = 'source-over';

    var clip = gui.viewport.x !== 0 || gui.viewport.x !== 0 || gui.viewport.width !== gui.canvas.width || gui.viewport.height !== gui.canvas.height;

    if (clip) {
        gui.context.save();
        gui.context.beginPath();
        gui.context.rect(0, 0, gui.viewport.width, gui.viewport.height);
        gui.context.clip();
    }

    gui.context.setTransform(gui.matrix.a[0], gui.matrix.a[1], gui.matrix.a[3], gui.matrix.a[4], gui.matrix.a[6], gui.matrix.a[7]);

    if (gui.backgroundAlpha > 0) {
        gui.context.globalAlpha = gui.backgroundAlpha;
        gui.context.fillStyle = gui.backgroundColor;
        gui.context.fillRect(0, 0, gui.width, gui.height);
    }

    // alpha
    if (gui._alpha !== 1) {
        gui.context.globalAlpha = 1;
        gui._alpha = 1;
    }

    (0, _RenderScene2.default)(sceneManager, gui.draw);

    if (clip) {
        gui.context.restore();
    }
}

/***/ }),

/***/ "./render/ui/InitializeUI.js":
/*!***********************************!*\
  !*** ./render/ui/InitializeUI.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InitializeUI;

var _Debug = __webpack_require__(/*! ./Debug */ "./render/ui/Debug.js");

var _Debug2 = _interopRequireDefault(_Debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InitializeUI() {
    this.canvas = this.game.system.render.canvas;
    this.context = this.game.system.render.context;
    this.draw.init();

    if (this.game.config.debug) this.debug = new _Debug2.default(this.game, this.draw);
}

/***/ }),

/***/ "./render/ui/UI.js":
/*!*************************!*\
  !*** ./render/ui/UI.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _System = __webpack_require__(/*! ../../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _Rect = __webpack_require__(/*! ../../math/Rect */ "./math/Rect.js");

var _Rect2 = _interopRequireDefault(_Rect);

var _AspectRatio = __webpack_require__(/*! ./AspectRatio */ "./render/ui/AspectRatio.js");

var _AspectRatio2 = _interopRequireDefault(_AspectRatio);

var _Matrix = __webpack_require__(/*! ../../math/Matrix3 */ "./math/Matrix3.js");

var _Matrix2 = _interopRequireDefault(_Matrix);

var _UIResize = __webpack_require__(/*! ./UIResize */ "./render/ui/UIResize.js");

var _UIResize2 = _interopRequireDefault(_UIResize);

var _Debug = __webpack_require__(/*! ./Debug */ "./render/ui/Debug.js");

var _Debug2 = _interopRequireDefault(_Debug);

var _MathUtils = __webpack_require__(/*! ../../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _UIDrawer = __webpack_require__(/*! ./UIDrawer */ "./render/ui/UIDrawer.js");

var _UIDrawer2 = _interopRequireDefault(_UIDrawer);

var _InitializeUI = __webpack_require__(/*! ./InitializeUI */ "./render/ui/InitializeUI.js");

var _InitializeUI2 = _interopRequireDefault(_InitializeUI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UI = function () {
    function UI(game) {
        (0, _classCallCheck3.default)(this, UI);

        this.game = game;
        this.canvas = null;
        this.width = this.game.width;
        this.height = this.game.height;
        this.viewport = new _Rect2.default(0, 0, this.width, this.height);
        this.ratiobox = null;
        this.aspectRatio = this.width / this.height;
        this.pixelUnit = { x: 1, y: 1 };
        this._isDirty = true;
        this.matrix = new _Matrix2.default(1);
        this.context = null;
        this._alpha = 1;
        this.backgroundColor = '#000';
        this.backgroundAlpha = 0;
        this.debug = null;
        this.draw = new _UIDrawer2.default(game, this);
    }

    (0, _createClass3.default)(UI, [{
        key: 'setSize',
        value: function setSize(width, height) {
            (0, _UIResize2.default)(this, width, height);
            return this;
        }
    }, {
        key: 'setViewport',
        value: function setViewport(x0, y0, x1, y1) {
            this.viewport.x = x0;
            this.viewport.y = y0;
            this.viewport.width = x1;
            this.viewport.height = y1;
            this._isDirty = true;
            return this;
        }
    }, {
        key: 'setViewportByAspectRatio',
        value: function setViewportByAspectRatio(aspectRatio) {

            // TODO: IMPROVE THAT
            var canvasWidth = this.game.system.render.canvas.width; //this.game.system.render.canvas.clientWidth;
            var canvasHeight = this.game.system.render.canvas.height; //this.game.system.render.canvas.clientHeight

            this.ratiobox = _AspectRatio2.default.computeViewPort(canvasWidth / canvasHeight, aspectRatio);
            var borderX = 0;
            var borderY = 0; //rect.y * this.canvas.clientHeight;

            if (this.ratiobox.style === _AspectRatio2.default.Square) {
                this.viewport.set(0, 0, canvasWidth, canvasHeight);

                return this;
            } else {

                if (this.ratiobox.style === _AspectRatio2.default.Pillarbox) borderX = this.ratiobox.x * this.width; //this.canvas.clientWidth;
                else if (this.ratiobox.style === _AspectRatio2.default.Letterbox) borderY = this.ratiobox.y * this.height; //this.canvas.clientHeight;

                this.viewport.set(borderX, borderY, this.width * (canvasWidth / this.width) - borderX * 2, this.height * (canvasHeight / this.height) - borderY * 2);
            }

            var canvasRatioX = canvasWidth * (this.ratiobox.x * 2);
            var canvasRatioY = canvasHeight * (this.ratiobox.y * 2);
            var areaRatio = (this.canvas.clientWidth - canvasRatioX) / canvasHeight;
            var orthoSize = this.height / 2;
            var pixelUnit = canvasHeight / (orthoSize * 2) * areaRatio;

            this.pixelUnit.x = pixelUnit; //(this.canvas.clientWidth - canvasRatioX) / this.width;
            this.pixelUnit.y = pixelUnit; //(this.canvas.clientHeight - canvasRatioY) / this.height;

            this._isDirty = true;
            return this;
        }
    }, {
        key: 'setSizeByCanvas',
        value: function setSizeByCanvas() {
            (0, _UIResize2.default)(this, this.game.system.render.canvas.width, this.game.system.render.canvas.height);
            return this;
        }
    }, {
        key: 'setSizeByCamera',
        value: function setSizeByCamera() {
            (0, _UIResize2.default)(this, this.game.system.camera.width, this.game.system.camera.height);
            return this;
        }
    }, {
        key: 'setSizeByAspectRatio',
        value: function setSizeByAspectRatio(aspectRatio) {
            (0, _UIResize2.default)(this, this.game.system.render.canvas.width * aspectRatio, this.game.system.render.canvas.height * aspectRatio);
            return this;
        }
    }, {
        key: 'alpha',
        get: function get() {
            return this._alpha;
        },
        set: function set(value) {
            this._alpha = value;
        }
    }]);
    return UI;
}();

exports.default = UI;


_System2.default.register('UserInterface', UI, 'ui', _InitializeUI2.default);

/***/ }),

/***/ "./render/ui/UIDrawer.js":
/*!*******************************!*\
  !*** ./render/ui/UIDrawer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Validate = __webpack_require__(/*! ../../utils/Validate */ "./utils/Validate.js");

var _Validate2 = _interopRequireDefault(_Validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UIDrawer = function () {
  function UIDrawer(game, ui) {
    (0, _classCallCheck3.default)(this, UIDrawer);

    this.game = game;
    this.cache = null;
    this.context = null;
    this.canvas = null;
    this.ui = ui;
    this.lastAlpha = 1;
    this.lastColor = '#000';
    this.currentColor = '#FFF';
    this.currentTextAlign = 'center';
    this.disablePointTransform = false;
  }

  (0, _createClass3.default)(UIDrawer, [{
    key: 'init',
    value: function init() {

      this.cache = this.game.system.cache;
      this.context = this.game.system.render.context;
      this.canvas = this.game.system.render.canvas;

      return this;
    }
  }, {
    key: 'defaultComposite',
    value: function defaultComposite() {
      this.context.globalCompositeOperation = 'source-over';
    }
  }, {
    key: 'transformPosition',
    value: function transformPosition(x, y, w, h) {

      if (this.disablePointTransform) {
        return {
          x: x,
          y: y,
          w: w || 0,
          h: h || 0
        };
      } else {

        return {
          x: x - this.ui.viewport.x,
          y: y - this.ui.viewport.y,
          w: w - this.ui.viewport.x || 0,
          h: h - this.ui.viewport.y || 0
        };
      }
    }
  }, {
    key: 'font',
    value: function font(fontname, size, style) {

      if (_Validate2.default.isNumber(size)) size = size.toString() + 'px';

      if (style === undefined) style = "normal";

      this.context.font = style + " " + size + " \'" + fontname + "\'";
    }
  }, {
    key: 'text',
    value: function text(_text, x, y, color, align) {

      if (color !== undefined) this.color = color;
      if (align !== undefined) this.align = align;

      var pos = this.transformPosition(x, y);

      this.context.textAlign = align;

      //this.context.save();
      //this.context.translate(x, y);
      this.context.fillText(_text, pos.x, pos.y);
      //this.context.restore();
    }
  }, {
    key: 'image',
    value: function image(source, x, y, scalex, scaley) {

      var pos = this.transformPosition(x, y);

      this.context.drawImage(source, 0, 0, source.width, source.height, pos.x, pos.y, source.width, source.height);
    }
  }, {
    key: 'imageExtra',
    value: function imageExtra(source, x, y, scalex, scaley, halign, valign) {
      if (source === undefined || source === null) return;
      if (scalex === undefined) scalex = 1;
      if (scaley === undefined) scaley = 1;
      if (halign === undefined) halign = 0;
      if (valign === undefined) valign = 0;

      var pos = this.transformPosition(x, y);
      var dx = source.width * halign;
      var dy = source.height * valign;

      this.context.save();
      this.context.translate(pos.x, pos.y);
      this.context.scale(scalex, scaley);
      //this.context.rotate(scalex, scaley);

      this.context.drawImage(source, 0, // sx - pos crop x 
      0, // sy - pos crop y
      source.width, // sWidth - crop width
      source.height, // sHeight - crop height
      -dx, // destination x
      -dy, // destination y
      source.width, source.height);

      this.context.restore();
    }
  }, {
    key: 'sprite',
    value: function sprite(tag, x, y, halign, valign) {

      var source = this.cache.image.get(tag);

      if (source !== null) {

        if (halign === undefined) halign = 0;
        if (valign === undefined) valign = 0;

        var pos = this.transformPosition(x, y);
        var dx = source.width * halign;
        var dy = source.height * valign;

        this.context.save();
        this.context.translate(pos.x, pos.y);
        this.context.drawImage(source.data, 0, // sx - pos crop x 
        0, // sy - pos crop y
        source.width, // sWidth - crop width
        source.height, // sHeight - crop height
        -dx, // destination x
        -dy, // destination y
        source.width, source.height);
        this.context.restore();
      }
    }
  }, {
    key: 'spriteScaled',
    value: function spriteScaled(tag, x, y, xscale, yscale, halign, valign) {

      var source = this.cache.image.get(tag);

      if (source !== null) {

        if (halign === undefined) halign = 0;
        if (valign === undefined) valign = 0;

        var pos = this.transformPosition(x, y);
        var dx = source.width * halign;
        var dy = source.height * valign;

        this.context.save();
        this.context.translate(pos.x, pos.y);
        this.context.scale(xscale, yscale);
        this.context.drawImage(source.data, 0, // sx - pos crop x 
        0, // sy - pos crop y
        source.width, // sWidth - crop width
        source.height, // sHeight - crop height
        -dx, // destination x
        -dy, // destination y
        source.width, source.height);
        this.context.restore();
      }
    }
  }, {
    key: 'spriteSkew',
    value: function spriteSkew(tag, x, y, skewX, skewY, halign, valign) {
      var source = this.cache.image.get(tag);

      if (source !== null) {

        if (halign === undefined) halign = 0;
        if (valign === undefined) valign = 0;

        var pos = this.transformPosition(x, y);
        var dx = source.width * halign;
        var dy = source.height * valign;

        this.context.save();
        this.context.transform(1, Math.tan(skewX), 0, 1, x, y);
        this.context.transform(1, 0, Math.tan(skewY), 1, 0, 0);
        this.context.drawImage(source.data, 0, // sx - pos crop x 
        0, // sy - pos crop y
        source.width, // sWidth - crop width
        source.height, // sHeight - crop height
        -dx, // destination x
        -dy, // destination y
        source.width, source.height);
        this.context.restore();
      }
    }
  }, {
    key: 'spriteAskew',
    value: function spriteAskew(tag, x, y, skewX, skewY, halign, valign) {
      var source = this.cache.image.get(tag);

      if (source !== null) {

        if (halign === undefined) halign = 0;
        if (valign === undefined) valign = 0;

        var pos = this.transformPosition(x, y);
        var dx = source.width * halign;
        var dy = source.height * valign;

        this.context.save();
        this.context.transform(1, Math.atan(skewX), 0, 1, x, y);
        this.context.transform(1, 0, Math.atan(skewY), 1, 0, 0);
        this.context.drawImage(source.data, 0, // sx - pos crop x 
        0, // sy - pos crop y
        source.width, // sWidth - crop width
        source.height, // sHeight - crop height
        -dx, // destination x
        -dy, // destination y
        source.width, source.height);
        this.context.restore();
      }
    }
  }, {
    key: 'spriteRskew',
    value: function spriteRskew(tag, x, y, skewX, skewY, halign, valign) {
      var source = this.cache.image.get(tag);

      if (source !== null) {

        if (halign === undefined) halign = 0;
        if (valign === undefined) valign = 0;

        var pos = this.transformPosition(x, y);
        var dx = source.width * halign;
        var dy = source.height * valign;

        this.context.save();
        this.context.transform(1, skewX, 0, 1, x, y);
        this.context.transform(1, 0, skewY, 1, 0, 0);
        this.context.drawImage(source.data, 0, // sx - pos crop x 
        0, // sy - pos crop y
        source.width, // sWidth - crop width
        source.height, // sHeight - crop height
        -dx, // destination x
        -dy, // destination y
        source.width, source.height);
        this.context.restore();
      }
    }
  }, {
    key: 'spritePart',
    value: function spritePart(tag, x, y, frameX, frameY, frameWidth, frameHeight, halign, valign) {
      var source = this.cache.image.get(tag);

      if (source !== null) {

        if (halign === undefined) halign = 0;
        if (valign === undefined) valign = 0;

        var pos = this.transformPosition(x, y);
        var dx = frameWidth * halign;
        var dy = frameHeight * valign;

        this.context.save();
        this.context.translate(pos.x, pos.y);
        this.context.drawImage(source.data, frameX, // sx - pos crop x 
        frameY, // sy - pos crop y
        frameWidth, // sWidth - crop width
        frameHeight, // sHeight - crop height
        -dx, // destination x
        -dy, // destination y
        frameWidth, frameHeight);
        this.context.restore();
      }
    }
  }, {
    key: 'spritesheet',
    value: function spritesheet(tag, x, y, frameNumber, halign, valign, scale, scale_y) {

      var source = this.cache.animation.get(tag);

      if (source === null) return false;

      var key = source.get(frameNumber);

      if (key === null || key === undefined) return false;

      if (key.image === null) return false;

      var frame = key.frame;

      if (scale === undefined) scale = 1;
      if (scale_y === undefined) scale_y = scale;
      if (halign === undefined) halign = 0;
      if (valign === undefined) valign = 0;

      var pos = this.transformPosition(x, y);
      var dx = frame.width * halign;
      var dy = frame.height * valign;

      this.context.save();
      this.context.translate(pos.x, pos.y);
      this.context.scale(scale, scale_y);
      this.context.drawImage(key.image.data, frame.x, // sx - pos crop x 
      frame.y, // sy - pos crop y
      frame.width, // sWidth - crop width
      frame.height, // sHeight - crop height
      -dx, // destination x
      -dy, // destination y
      frame.width, frame.height);
      this.context.restore();

      return true;
    }
  }, {
    key: 'rect',
    value: function rect(x, y, width, height, color) {

      var pos = this.transformPosition(x, y, width, height);

      this.context.save();
      this.context.fillStyle = color || this.currentColor;
      this.context.translate(pos.x, pos.y);

      this.context.fillRect(0, 0, pos.w, pos.h);
      this.context.restore();
    }
  }, {
    key: 'outlineRect',
    value: function outlineRect(x, y, width, height, outlineWidth, color) {

      color = color || this.currentColor;

      var pos = this.transformPosition(x, y, width, height);
      //this.context.setLineDash([6]);
      this.context.save();
      this.context.translate(pos.x, pos.y);
      this.context.lineWidth = outlineWidth || 1;
      this.context.strokeStyle = color;
      this.context.strokeRect(0, 0, pos.w, pos.h);
      this.context.restore();
      //this.context.rect(x,y,width,height);
      //this.context.stroke();
    }
  }, {
    key: 'bounds',
    value: function bounds(bb, color) {

      if (color === undefined) color = 'red';
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.outlineRectangle(bb.min.x, bb.min.y, bb.max.x - bb.min.x, bb.max.y - bb.min.y, color, 1);
    }
  }, {
    key: 'color',
    set: function set(value) {
      this.lastColor = this.context.fillStyle;
      this.context.fillStyle = value;
      this.currentColor = this.context.fillStyle;
    }
  }, {
    key: 'alpha',
    set: function set(value) {
      this.lastAlpha = this.context.globalAlpha;
      this.context.globalAlpha = value;
    }
  }, {
    key: 'align',
    set: function set(value) {
      this.context.textAlign = value;
      this.currentTextAlign = this.context.textAlign;
    }
  }, {
    key: 'composite',
    set: function set(value) {
      this.context.globalCompositeOperation = value;
    }
  }]);
  return UIDrawer;
}();

//GameSystemManager.register('UIDrawer',UIDraw,'draw');
//import GameSystemManager from "../core/GameSystemManager";


exports.default = UIDrawer;

/***/ }),

/***/ "./render/ui/UIResize.js":
/*!*******************************!*\
  !*** ./render/ui/UIResize.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UIResize;
function UIResize(gui, w, h) {
    gui.width = w;
    gui.height = h;
    gui.aspectRatio = w / h;
    gui.pixelUnit.x = gui.canvas.width / w;
    gui.pixelUnit.y = gui.canvas.height / h;
    gui._isDirty = true;
}

/***/ }),

/***/ "./render/ui/UpdateUIMatrix.js":
/*!*************************************!*\
  !*** ./render/ui/UpdateUIMatrix.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateUIMatrix;
function UpdateUIMatrix(gui) {

    if (!gui._isDirty) return;

    gui.matrix.setIdentity().scale(gui.pixelUnit.x, gui.pixelUnit.y).translate(gui.viewport.x, gui.viewport.y);

    gui._isDirty = false;
}

/***/ }),

/***/ "./resources/ImageResource.js":
/*!************************************!*\
  !*** ./resources/ImageResource.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Resource2 = __webpack_require__(/*! ./Resource */ "./resources/Resource.js");

var _Resource3 = _interopRequireDefault(_Resource2);

var _ResourceType = __webpack_require__(/*! ./ResourceType */ "./resources/ResourceType.js");

var _ResourceType2 = _interopRequireDefault(_ResourceType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Image that holds image data.
* @class Image
* @constructor
*/
var ImageResource = function (_Resource) {
      (0, _inherits3.default)(ImageResource, _Resource);

      function ImageResource(name, data) {
            (0, _classCallCheck3.default)(this, ImageResource);

            var _this = (0, _possibleConstructorReturn3.default)(this, (ImageResource.__proto__ || (0, _getPrototypeOf2.default)(ImageResource)).call(this, name, _ResourceType2.default.Image));

            _this.data = data;
            _this.width = 0;
            _this.height = 0;
            _this.imageUrl = null;

            if ((_this.data.complete || _this.data.getContext) && _this.data.width && _this.data.height) {

                  _this.width = _this.data.naturalWidth || _this.data.width;
                  _this.height = _this.data.naturalHeight || _this.data.height;
            }
            return _this;
      }

      return ImageResource;
}(_Resource3.default);

exports.default = ImageResource;

/***/ }),

/***/ "./resources/Resource.js":
/*!*******************************!*\
  !*** ./resources/Resource.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _ResourceType = __webpack_require__(/*! ./ResourceType */ "./resources/ResourceType.js");

var _ResourceType2 = _interopRequireDefault(_ResourceType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Resource = function Resource(name, type) {
    (0, _classCallCheck3.default)(this, Resource);

    this.name = name || 'Resource';
    this.type = type || _ResourceType2.default.None;
};

exports.default = Resource;

/***/ }),

/***/ "./resources/ResourceType.js":
/*!***********************************!*\
  !*** ./resources/ResourceType.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResourceType = {
    None: -1,
    Image: 0,
    Tilemap: 1,
    Animation: 2,
    Spritesheet: 3,
    AnimationMachine: 4
};

(0, _freeze2.default)(ResourceType);

exports.default = ResourceType;

/***/ }),

/***/ "./resources/animation/AnimationMachineResource.js":
/*!*********************************************************!*\
  !*** ./resources/animation/AnimationMachineResource.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Resource2 = __webpack_require__(/*! ../Resource */ "./resources/Resource.js");

var _Resource3 = _interopRequireDefault(_Resource2);

var _ResourceType = __webpack_require__(/*! ../ResourceType */ "./resources/ResourceType.js");

var _ResourceType2 = _interopRequireDefault(_ResourceType);

var _Map = __webpack_require__(/*! ../../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnimationMachineResource = function (_Resource) {
    (0, _inherits3.default)(AnimationMachineResource, _Resource);

    function AnimationMachineResource(name) {
        (0, _classCallCheck3.default)(this, AnimationMachineResource);

        var _this = (0, _possibleConstructorReturn3.default)(this, (AnimationMachineResource.__proto__ || (0, _getPrototypeOf2.default)(AnimationMachineResource)).call(this, name, _ResourceType2.default.AnimationMachine));

        _this.states = new _Map2.default();

        return _this;
    }

    (0, _createClass3.default)(AnimationMachineResource, [{
        key: "add",
        value: function add(state, animation) {

            if (this.states.has(state)) {
                Console.warn("AnimationMachineResource.add: Could not add state. There is already a state called \'" + state + "\".");
                return this;
            }

            //let anim = this._cache.get(animationTag);
            if (animation !== undefined) {
                this.states.insert(state, animation);
            } else {
                Console.warn("AnimationMachineResource.add: Could not add state with undefined animation.");
            }

            return this;
        }

        /// TODO
        /*create(state) {
            if (this.states.has(state)) {
                Console.warn("AnimationMachineResource.create: Could not create state. There is already a state called \'" + state + "\".");
                return this;
            }
              this.states.set(stateName, );
        }*/

    }, {
        key: "get",
        value: function get(stateName) {
            return this.states.get(stateName);
        }
    }, {
        key: "at",
        value: function at(index) {
            return this.states.at(index);
        }
    }, {
        key: "duration",
        set: function set(miliSeconds) {
            this.states.each(function (key, value) {

                value.duration = miliSeconds;
            });
        }
    }]);
    return AnimationMachineResource;
}(_Resource3.default);

exports.default = AnimationMachineResource;

/***/ }),

/***/ "./resources/animation/AnimationResource.js":
/*!**************************************************!*\
  !*** ./resources/animation/AnimationResource.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _List = __webpack_require__(/*! ../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _Resource2 = __webpack_require__(/*! ../Resource */ "./resources/Resource.js");

var _Resource3 = _interopRequireDefault(_Resource2);

var _ResourceType = __webpack_require__(/*! ../ResourceType */ "./resources/ResourceType.js");

var _ResourceType2 = _interopRequireDefault(_ResourceType);

var _Validate = __webpack_require__(/*! ../../utils/Validate */ "./utils/Validate.js");

var _Validate2 = _interopRequireDefault(_Validate);

var _AnimationUpdateFrameRate = __webpack_require__(/*! ./components/AnimationUpdateFrameRate */ "./resources/animation/components/AnimationUpdateFrameRate.js");

var _AnimationUpdateFrameRate2 = _interopRequireDefault(_AnimationUpdateFrameRate);

var _ComputeTotalDuration = __webpack_require__(/*! ./components/ComputeTotalDuration */ "./resources/animation/components/ComputeTotalDuration.js");

var _ComputeTotalDuration2 = _interopRequireDefault(_ComputeTotalDuration);

var _WrapMode = __webpack_require__(/*! ./WrapMode */ "./resources/animation/WrapMode.js");

var _WrapMode2 = _interopRequireDefault(_WrapMode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// storage of animation state
var Animation = function (_Resource) {
  (0, _inherits3.default)(Animation, _Resource);

  function Animation(name) {
    (0, _classCallCheck3.default)(this, Animation);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Animation.__proto__ || (0, _getPrototypeOf2.default)(Animation)).call(this, name, _ResourceType2.default.Animation));

    _this.keyFrames = new _List2.default(null, false);
    //this._duration = 1;
    _this._totalDuration = 1;
    _this._frameRate = 30;
    _this._secondsPerFrame = 1;
    //this.loop = true;
    _this._wrapMode = _WrapMode2.default.Loop;
    _this.uniformDuration = true;

    _AnimationUpdateFrameRate2.default.call(_this, 30, null, 1);
    return _this;
  }

  (0, _createClass3.default)(Animation, [{
    key: "get",
    value: function get(frameIndex) {
      return this.keyFrames.at(frameIndex);
    }
  }, {
    key: "duplicate",
    value: function duplicate(frameIndex, atIndex) {

      var frame = this.keyFrames.at(frameIndex);

      if (frame !== null) {

        if (atIndex === undefined) this.keyFrames.push(frame);else this.keyFrames.splice(atIndex, 0, frame);
      }

      _AnimationUpdateFrameRate2.default.call(this, this._frameRate, null);

      return this;
    }
  }, {
    key: "remove",
    value: function remove(frameIndex) {
      var frame = this.keyFrames.eraseAt(frameIndex);
      _AnimationUpdateFrameRate2.default.call(this, this._frameRate, null);
      return frame;
    }
  }, {
    key: "wrapMode",
    get: function get() {
      return this._wrapMode;
    }
  }, {
    key: "loop",
    set: function set(value) {
      if (value === true) {
        this._wrapMode = _WrapMode2.default.Loop;
      }
    }
  }, {
    key: "duration",
    set: function set(value) {
      if (_Validate2.default.isNumber(value)) {
        _AnimationUpdateFrameRate2.default.call(this, null, value);
      }
    },
    get: function get() {
      return this._totalDuration;
    }
  }, {
    key: "frameRate",
    set: function set(value) {
      if (_Validate2.default.isNumber(value)) {
        _AnimationUpdateFrameRate2.default.call(this, value, null);
      }
    },
    get: function get() {
      return this._frameRate;
    }
  }, {
    key: "length",
    get: function get() {
      return this.keyFrames.size;
    }
  }, {
    key: "size",
    get: function get() {
      return this.keyFrames.size;
    }
  }, {
    key: "secondsPerFrame",
    get: function get() {
      return this._secondsPerFrame;
    }
  }, {
    key: "totalDuration",
    get: function get() {
      if (this.uniformDuration) {
        return this._totalDuration;
      } else {
        return (0, _ComputeTotalDuration2.default)(this.keyFrames);
      }
    }
  }]);
  return Animation;
}(_Resource3.default);

exports.default = Animation;

/***/ }),

/***/ "./resources/animation/KeyFrame.js":
/*!*****************************************!*\
  !*** ./resources/animation/KeyFrame.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpritesheetKeyFrame = undefined;

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Rect = __webpack_require__(/*! ../../math/Rect */ "./math/Rect.js");

var _Rect2 = _interopRequireDefault(_Rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KeyFrame = function () {
    function KeyFrame(animation) {
        (0, _classCallCheck3.default)(this, KeyFrame);

        this.animation = animation;
        this.duration = 0;
        this.progress = 0;
        this.type = 'key';
    }

    (0, _createClass3.default)(KeyFrame, [{
        key: 'destroy',
        value: function destroy() {
            this.animation = null;
        }
    }]);
    return KeyFrame;
}();

exports.default = KeyFrame;

var SpritesheetKeyFrame = exports.SpritesheetKeyFrame = function (_KeyFrame) {
    (0, _inherits3.default)(SpritesheetKeyFrame, _KeyFrame);

    function SpritesheetKeyFrame(animation, image, frame, duration) {
        (0, _classCallCheck3.default)(this, SpritesheetKeyFrame);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SpritesheetKeyFrame.__proto__ || (0, _getPrototypeOf2.default)(SpritesheetKeyFrame)).call(this, animation));

        _this.duration = duration || 1;
        _this.type = 'sprite';
        _this.frame = frame || new _Rect2.default();
        _this.image = image || null;
        return _this;
    }

    (0, _createClass3.default)(SpritesheetKeyFrame, [{
        key: 'destroy',
        value: function destroy() {
            this.frame = null;
            this.image = null;
            this.animation = null;
        }
    }]);
    return SpritesheetKeyFrame;
}(KeyFrame);

/***/ }),

/***/ "./resources/animation/SpritesheetResource.js":
/*!****************************************************!*\
  !*** ./resources/animation/SpritesheetResource.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _AnimationResource = __webpack_require__(/*! ./AnimationResource */ "./resources/animation/AnimationResource.js");

var _AnimationResource2 = _interopRequireDefault(_AnimationResource);

var _KeyFrame = __webpack_require__(/*! ./KeyFrame */ "./resources/animation/KeyFrame.js");

var _KeyFrame2 = _interopRequireDefault(_KeyFrame);

var _Validate = __webpack_require__(/*! ../../utils/Validate */ "./utils/Validate.js");

var _Validate2 = _interopRequireDefault(_Validate);

var _ResourceType = __webpack_require__(/*! ../ResourceType */ "./resources/ResourceType.js");

var _ResourceType2 = _interopRequireDefault(_ResourceType);

var _Rect = __webpack_require__(/*! ../../math/Rect */ "./math/Rect.js");

var _Rect2 = _interopRequireDefault(_Rect);

var _AnimationUpdateFrameRate = __webpack_require__(/*! ./components/AnimationUpdateFrameRate */ "./resources/animation/components/AnimationUpdateFrameRate.js");

var _AnimationUpdateFrameRate2 = _interopRequireDefault(_AnimationUpdateFrameRate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpritesheetResource = function (_Animation) {
    (0, _inherits3.default)(SpritesheetResource, _Animation);

    function SpritesheetResource(name, image, duration) {
        (0, _classCallCheck3.default)(this, SpritesheetResource);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SpritesheetResource.__proto__ || (0, _getPrototypeOf2.default)(SpritesheetResource)).call(this, name));

        _this.mainImage = image || null;
        _this.type = _ResourceType2.default.Spritesheet;

        return _this;
    }

    (0, _createClass3.default)(SpritesheetResource, [{
        key: "addFrame",
        value: function addFrame(x, y, width, height, image, duration, shouldUpdateFrameRate) {

            if (duration === undefined) duration = this._secondsPerFrame;
            if (shouldUpdateFrameRate === undefined) shouldUpdateFrameRate = true;

            if (image === undefined) {
                image = this.mainImage;
            } else {
                image = this.cache.image.get(image);
            }

            var keyFrame = new _KeyFrame.SpritesheetKeyFrame(this, image, new _Rect2.default(x, y, width, height), duration);

            this.keyFrames.push(keyFrame);

            if (shouldUpdateFrameRate === true) {
                _AnimationUpdateFrameRate2.default.call(this, this._frameRate, null);
            }

            return this;
        }

        /** Add stripped images frames from the main image of the SpriteSheet animation.
         * 
         * @param {Number} x Initial x position of the strip
         * @param {Number} y Initial y position of the strip
         * @param {Number} frameWidth The frame image width.
         * @param {Number} frameHeight The frame image height.
         * @param {Number} numberOfImages The number of frames. Default: 1.
         * @param {Number} [framesPerRow] Optional: Frames per row. Default: Equal to numberOfImages
         * @param {Number|Object} [spacing] Optional: the spacing between the frames images. 
         * To define spacing for x and y axis, spacing should be defined as Object ie: {x:Number,y:Number}.
         */

    }, {
        key: "addStrip",
        value: function addStrip(x, y, frameWidth, frameHeight, numberOfImages, framesPerRow, spacing) {

            if (framesPerRow === undefined) framesPerRow = numberOfImages;

            if (spacing === undefined) {
                spacing = { x: 0, y: 0 };
            } else if (_Validate2.default.isNumber(spacing)) {
                spacing = { x: spacing, y: spacing };
            }

            var verticalCount = 0;
            var horizontalCount = 0;
            var xx = x;
            var yy = y;

            for (var i = 0; i < numberOfImages; i++) {

                this.addFrame(xx, yy, frameWidth, frameHeight, undefined, undefined, false);

                //this._size++;
                xx += spacing.x + frameWidth;

                if (i % framesPerRow == framesPerRow - 1) {
                    xx = x;
                    yy += spacing.y + frameHeight;
                }
            }

            _AnimationUpdateFrameRate2.default.call(this, this._frameRate, null);

            return this;
        }
    }, {
        key: "addImageStrip",
        value: function addImageStrip(image, x, y, frameWidth, frameHeight, numberOfImages, framesPerRow, spacing) {}
    }]);
    return SpritesheetResource;
}(_AnimationResource2.default);

exports.default = SpritesheetResource;

/***/ }),

/***/ "./resources/animation/WrapMode.js":
/*!*****************************************!*\
  !*** ./resources/animation/WrapMode.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrapMode = {
    Once: 0,
    Loop: 1,
    PingPong: 2
};

(0, _freeze2.default)(WrapMode);

exports.default = WrapMode;

/***/ }),

/***/ "./resources/animation/components/AnimationUpdateFrameRate.js":
/*!********************************************************************!*\
  !*** ./resources/animation/components/AnimationUpdateFrameRate.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AnimationUpdateFrameRate;
function AnimationUpdateFrameRate(frameRate, duration, keyFramesLength) {

    if (keyFramesLength === undefined) keyFramesLength = this.keyFrames.length;

    if (duration === null && frameRate === null) {
        this._frameRate = 60;
        this._totalDuration = frameRate / keyFramesLength * 1000;
    } else if (duration && frameRate === null) {
        this._totalDuration = duration;
        this._frameRate = keyFramesLength / (duration / 1000);
    } else {
        this._frameRate = frameRate;
        this._totalDuration = keyFramesLength / frameRate * 1000;
    }

    this._secondsPerFrame = 1000 / this._frameRate;
}

/***/ }),

/***/ "./resources/animation/components/ComputeTotalDuration.js":
/*!****************************************************************!*\
  !*** ./resources/animation/components/ComputeTotalDuration.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComputeTotalDuration;
function ComputeTotalDuration(keyFrames) {

  var size = keyFrames.size;

  if (size === 0) return 0;else {

    var dur = 0;

    for (var i = 0; i < size; i++) {
      dur += keyFrames.at(i).duration || 0;
    }

    return dur;
  }
}

/***/ }),

/***/ "./resources/animation/index.js":
/*!**************************************!*\
  !*** ./resources/animation/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    AnimationBase: __webpack_require__(/*! ./AnimationResource */ "./resources/animation/AnimationResource.js"),
    Spritesheet: __webpack_require__(/*! ./SpritesheetResource */ "./resources/animation/SpritesheetResource.js"),
    AnimationMachine: __webpack_require__(/*! ./AnimationMachineResource */ "./resources/animation/AnimationMachineResource.js")
};

/***/ }),

/***/ "./resources/index.js":
/*!****************************!*\
  !*** ./resources/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    ResourceType: __webpack_require__(/*! ./ResourceType */ "./resources/ResourceType.js"),
    Image: __webpack_require__(/*! ./ImageResource */ "./resources/ImageResource.js"),
    Tilemap: __webpack_require__(/*! ./tilemap/TilemapResource */ "./resources/tilemap/TilemapResource.js"),
    Animation: __webpack_require__(/*! ./animation */ "./resources/animation/index.js")
};

/***/ }),

/***/ "./resources/tilemap/TilemapResource.js":
/*!**********************************************!*\
  !*** ./resources/tilemap/TilemapResource.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Resource2 = __webpack_require__(/*! ../Resource */ "./resources/Resource.js");

var _Resource3 = _interopRequireDefault(_Resource2);

var _ResourceType = __webpack_require__(/*! ../ResourceType */ "./resources/ResourceType.js");

var _ResourceType2 = _interopRequireDefault(_ResourceType);

var _ObjectGet = __webpack_require__(/*! ../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TilemapResource = function (_Resource) {
    (0, _inherits3.default)(TilemapResource, _Resource);

    function TilemapResource(name, metadata, config) {
        (0, _classCallCheck3.default)(this, TilemapResource);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TilemapResource.__proto__ || (0, _getPrototypeOf2.default)(TilemapResource)).call(this, name, _ResourceType2.default.Tilemap));

        _this.metadata = metadata || null;
        _this.tilesets = _ObjectGet2.default.value(config, 'tilesets', null);
        _this.tileLayers = _ObjectGet2.default.value(config, 'tilelayers', null);
        _this.objectLayers = _ObjectGet2.default.value(config, 'objectlayers', null);

        return _this;
    }

    (0, _createClass3.default)(TilemapResource, [{
        key: "getObjectsLayer",
        value: function getObjectsLayer(name) {
            return this.objectLayers.find(function (a) {
                if (a.name === name) return a;
            }) || null;
        }
    }, {
        key: "getTileLayer",
        value: function getTileLayer(name) {
            return this.tileLayers.find(function (layer) {
                if (layer.name === name) return layer;
            }) || null;
        }
    }, {
        key: "getTilesetByGID",
        value: function getTilesetByGID(gid) {

            return this.tilesets.each(function (set) {
                if (set.hasGID(gid)) {
                    return set;
                }
            }) || null;
        }
    }, {
        key: "getTileGID",
        value: function getTileGID(gid) {
            return this.tilesets.each(function (set) {

                var tileGID = set.getTileGID(gid);

                if (tileGID !== undefined) {
                    return tileGID;
                }
            }) || null;
        }
    }]);
    return TilemapResource;
}(_Resource3.default);

exports.default = TilemapResource;

/***/ }),

/***/ "./resources/tilemap/data/ObjectType.js":
/*!**********************************************!*\
  !*** ./resources/tilemap/data/ObjectType.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectType = {
    None: 0,
    Point: 1,
    Rect: 2,
    Ellipse: 3,
    Polygon: 4,
    Polyline: 5
};

(0, _freeze2.default)(ObjectType);

exports.default = ObjectType;

/***/ }),

/***/ "./resources/tilemap/data/Tile.js":
/*!****************************************!*\
  !*** ./resources/tilemap/data/Tile.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tile = function Tile(layer, tileData, tileX, tileY, id) {
    (0, _classCallCheck3.default)(this, Tile);

    this.layer = layer;
    this.data = tileData;
    this.tileX = tileX;
    this.tileY = tileY;
    this.id = id;
    this.frame = tileData.st;

    // pixels positions
    this.x = Math.round(tileX * tileData.st.width);
    this.y = Math.round(tileY * tileData.st.height);
};

exports.default = Tile;

/***/ }),

/***/ "./resources/tilemap/data/TileGID.js":
/*!*******************************************!*\
  !*** ./resources/tilemap/data/TileGID.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _Rect = __webpack_require__(/*! ../../../math/Rect */ "./math/Rect.js");

var _Rect2 = _interopRequireDefault(_Rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TileGID = function TileGID(tileset, gid, tileID, u, v, umax, vmax) {
    (0, _classCallCheck3.default)(this, TileGID);

    this.id = tileID;
    this.gid = gid;
    this.tileset = tileset || null;
    this.st = new _Rect2.default(u, v, umax, vmax); // tex coords
    this.keyFrames = undefined;
    this.isAnimated = false;
    this.currentFrame = 0;
    this.properties = null;
};

exports.default = TileGID;

/***/ }),

/***/ "./resources/tilemap/data/TileLayerData.js":
/*!*************************************************!*\
  !*** ./resources/tilemap/data/TileLayerData.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _ObjectGet = __webpack_require__(/*! ../../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TileLayerData = function () {
    function TileLayerData(config) {
        (0, _classCallCheck3.default)(this, TileLayerData);

        this.width = _ObjectGet2.default.value(config, 'width', 0);
        this.height = _ObjectGet2.default.value(config, 'height', 0);
        this.x = _ObjectGet2.default.value(config, 'x', 0);
        this.y = _ObjectGet2.default.value(config, 'y', 0);
        this.name = _ObjectGet2.default.value(config, 'name', '');
        this.alpha = _ObjectGet2.default.value(config, 'alpha', 1);
        //this.type ="tilelayer";
        this.visible = _ObjectGet2.default.value(config, 'visible', true);
        this.tiles = _ObjectGet2.default.value(config, 'tiles', []);
        this.hasAnimatedTiles = false;
    }

    (0, _createClass3.default)(TileLayerData, [{
        key: 'getTile',
        value: function getTile(x, y) {
            var index = x + y * this.width;

            return this.tiles[index];
        }
    }]);
    return TileLayerData;
}();

exports.default = TileLayerData;

/***/ }),

/***/ "./resources/tilemap/data/TilemapMetadata.js":
/*!***************************************************!*\
  !*** ./resources/tilemap/data/TilemapMetadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _ObjectGet = __webpack_require__(/*! ../../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TilemapMetadata = function TilemapMetadata(config) {
    (0, _classCallCheck3.default)(this, TilemapMetadata);


    this.name = _ObjectGet2.default.value(config, 'name', 'tilemap');
    this.width = _ObjectGet2.default.value(config, 'width', 0);
    this.height = _ObjectGet2.default.value(config, 'height', 0);
    this.tileWidth = _ObjectGet2.default.value(config, 'tileWidth', 16);
    this.tileHeight = _ObjectGet2.default.value(config, 'tileHeight', 16);
    this.pixelsWidth = _ObjectGet2.default.value(config, 'pixelsWidth', this.width * this.tileWidth);
    this.pixelsHeight = _ObjectGet2.default.value(config, 'pixelsHeight', this.height * this.tileHeight);
    this.orientation = _ObjectGet2.default.value(config, 'orientation', 'orthogonal');
};

exports.default = TilemapMetadata;

/***/ }),

/***/ "./resources/tilemap/data/TilemapObject.js":
/*!*************************************************!*\
  !*** ./resources/tilemap/data/TilemapObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _ObjectGet = __webpack_require__(/*! ../../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _ObjectType = __webpack_require__(/*! ./ObjectType */ "./resources/tilemap/data/ObjectType.js");

var _ObjectType2 = _interopRequireDefault(_ObjectType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TilemapObject = function () {
    function TilemapObject(config) {
        (0, _classCallCheck3.default)(this, TilemapObject);


        this.x = _ObjectGet2.default.value(config, 'x', 0);
        this.y = _ObjectGet2.default.value(config, 'y', 0);
        this.width = _ObjectGet2.default.value(config, 'width', 0);
        this.height = _ObjectGet2.default.value(config, 'height', 0);
        this.rotation = _ObjectGet2.default.value(config, 'rotation', 0);
        this.name = _ObjectGet2.default.value(config, 'name', "");
        this.id = _ObjectGet2.default.value(config, 'id', null);
        this.visible = _ObjectGet2.default.value(config, 'visible', true);
        this.type = _ObjectGet2.default.value(config, 'type', "");

        this.objectType = _ObjectType2.default.Rect;

        if (config['ellipse'] === true) {
            this.objectType = _ObjectType2.default.Ellipse;
        } else if (config['point'] === true) {
            this.objectType = _ObjectType2.default.Point;
        } else if (config['polygon'] === true) {
            this.objectType = _ObjectType2.default.Polygon;
        } else if (config['polyline'] === true) {
            this.objectType = _ObjectType2.default.Polyline;
        }
    }

    (0, _createClass3.default)(TilemapObject, [{
        key: 'contains',
        value: function contains(x, y) {

            if (this.width <= 0 && this.height <= 0) return false;

            return x > this.x && x < this.x + this.width && y >= this.y && y < this.y + this.height;
        }
    }, {
        key: 'intersects',
        value: function intersects(x, y, width, height) {

            if (width <= 0 || height <= 0 || this.width <= 0 || this.height <= 0) return false;

            return !(x > this.x + this.width || x + width < this.x || y > this.y + this.height || y + height < this.y);
        }
    }]);
    return TilemapObject;
}();

exports.default = TilemapObject;

/***/ }),

/***/ "./resources/tilemap/data/Tileset.js":
/*!*******************************************!*\
  !*** ./resources/tilemap/data/Tileset.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _List = __webpack_require__(/*! ../../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _TileGID = __webpack_require__(/*! ./TileGID */ "./resources/tilemap/data/TileGID.js");

var _TileGID2 = _interopRequireDefault(_TileGID);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tileset = function () {
    function Tileset(name, firstgid, tileWidth, tileHeight, margin, spacing) {
        (0, _classCallCheck3.default)(this, Tileset);


        this.name = name;
        this.firstgid = firstgid || 1;
        this.tileWidth = tileWidth || 16;
        this.tileHeight = tileHeight || 16;
        this.margin = margin || 0;
        this.spacing = spacing || 0;
        this.image = null;
        this.data = new _List2.default();
        this.rows = 0;
        this.collumns = 0;
        this.gidCount = 0;
    }

    (0, _createClass3.default)(Tileset, [{
        key: 'getTileGID',
        value: function getTileGID(gid) {

            if (gid === 'string') gid = parseInt(gid);

            if (gid < this.firstgid && gid >= this.firstgid + this.gidCount) return null;

            return this.data.at(gid - this.firstgid);
        }
    }, {
        key: 'getTile',
        value: function getTile(index) {

            if (index === 'string') index = parseInt(index);

            return this.data.at(index);
        }
    }, {
        key: 'hasGID',
        value: function hasGID(gid) {
            return gid >= this.firstgid && gid < this.firstgid + this.gidCount;
        }
    }, {
        key: 'updateData',
        value: function updateData(imageWidth, imageHeight) {

            if (this.image !== undefined || this.image != null) {
                imageWidth = this.image.width;
                imageHeight = this.image.height;
            }

            //slice into tiles
            var columns = (imageHeight - this.margin * 2 + this.spacing) / (this.tileHeight + this.spacing);
            var rows = (imageWidth - this.margin * 2 + this.spacing) / (this.tileWidth + this.spacing);

            this.rows = Math.floor(rows);
            this.collumns = Math.floor(columns);
            this.gidCount = rows * columns;

            var u = this.margin;
            var v = this.margin;
            var x = 0;

            this.data.clear();

            for (var i = 0; i < this.gidCount; i++) {

                this.data.push(new _TileGID2.default(this, this.firstgid + i, i, u, v, this.tileWidth, this.tileHeight));

                u += this.tileWidth + this.spacing;
                x++;

                if (x >= rows) {
                    x = 0;
                    u = this.margin;
                    v += this.tileHeight + this.spacing;
                }
            }
        }
    }]);
    return Tileset;
}();

exports.default = Tileset;

/***/ }),

/***/ "./resources/tilemap/parser/ParseGID.js":
/*!**********************************************!*\
  !*** ./resources/tilemap/parser/ParseGID.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ParseGID;

// Bits on the far end of the 32-bit global tile ID are used for tile flags
var FLIPPED_HORIZONTALLY_FLAG = 0x80000000;
var FLIPPED_VERTICALLY_FLAG = 0x40000000;
var FLIPPED_DIAGONALLY_FLAG = 0x20000000;

function ParseGIDFlags(flipped_horizontally, flipped_vertically, flipped_diagonally) {

    var flip = false;
    var rot = 0;

    return { flipped: flip, rotation: rot };
}

// http://docs.mapeditor.org/en/latest/reference/tmx-map-format/
function ParseGID(global_tile_id) {

    // The global_tile_id is alredy parsed on Base64.decodeToUint32() phase.

    /* unsigned global_tile_id = data[tile_index] |
                              data[tile_index + 1] << 8 |
                              data[tile_index + 2] << 16 |
                              data[tile_index + 3] << 24;*/

    // Read out the flags
    var flipped_horizontally = Boolean(global_tile_id & FLIPPED_HORIZONTALLY_FLAG);
    var flipped_vertically = Boolean(global_tile_id & FLIPPED_VERTICALLY_FLAG);
    var flipped_diagonally = Boolean(global_tile_id & FLIPPED_DIAGONALLY_FLAG);

    // Clear the flags
    global_tile_id = global_tile_id & ~(FLIPPED_HORIZONTALLY_FLAG | FLIPPED_VERTICALLY_FLAG | FLIPPED_DIAGONALLY_FLAG);

    var flags = ParseGIDFlags(flipped_horizontally, flipped_vertically, flipped_diagonally);

    return {
        gid: global_tile_id,
        flipHorizontal: flipped_horizontally,
        flipVertical: flipped_vertically,
        flipDiagonal: flipped_diagonally,
        flipped: flags.flipped,
        rotation: flags.rotation
    };
}

/***/ }),

/***/ "./resources/tilemap/parser/ParseObjectsLayers.js":
/*!********************************************************!*\
  !*** ./resources/tilemap/parser/ParseObjectsLayers.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = ParseObjectLayers;

var _TilemapObject = __webpack_require__(/*! ../data/TilemapObject */ "./resources/tilemap/data/TilemapObject.js");

var _TilemapObject2 = _interopRequireDefault(_TilemapObject);

var _List = __webpack_require__(/*! ../../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ParseObjectLayers(json, map) {

        var size = json.layers.length;
        var layers = new _List2.default();

        if (size <= 0) return layers;

        for (var i = 0; i < size; i++) {

                var jsonLayer = json.layers[i];

                if (jsonLayer.type !== "objectgroup") continue;

                if (jsonLayer.objects === undefined) continue;

                var newLayer = {
                        name: jsonLayer.name || "",
                        objects: new _List2.default()
                };

                var objectsSize = jsonLayer.objects.length;

                for (var j = 0; j < objectsSize; j++) {

                        var obj = new _TilemapObject2.default(jsonLayer.objects[j]);
                        newLayer.objects.push(obj);
                }

                layers.push(newLayer);
        }

        return layers;
}

/***/ }),

/***/ "./resources/tilemap/parser/ParseTileLayers.js":
/*!*****************************************************!*\
  !*** ./resources/tilemap/parser/ParseTileLayers.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ParseTileLayers;

var _ObjectGet = __webpack_require__(/*! ../../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _Base64Utils = __webpack_require__(/*! ../../../utils/Base64Utils */ "./utils/Base64Utils.js");

var _Base64Utils2 = _interopRequireDefault(_Base64Utils);

var _Set = __webpack_require__(/*! ../../../structures/Set */ "./structures/Set.js");

var _Set2 = _interopRequireDefault(_Set);

var _List = __webpack_require__(/*! ../../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _ParseGID = __webpack_require__(/*! ./ParseGID */ "./resources/tilemap/parser/ParseGID.js");

var _ParseGID2 = _interopRequireDefault(_ParseGID);

var _TileLayerData = __webpack_require__(/*! ../data/TileLayerData */ "./resources/tilemap/data/TileLayerData.js");

var _TileLayerData2 = _interopRequireDefault(_TileLayerData);

var _Tile = __webpack_require__(/*! ../data/Tile */ "./resources/tilemap/data/Tile.js");

var _Tile2 = _interopRequireDefault(_Tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GetTilesetByGID(tilesets, gid) {

    return tilesets.each(function (set) {
        if (set.hasGID(gid)) {
            return set;
        }
    }) || null;
}

function ParseTileLayers(json, tilesets) {

    var size = json.layers.length;
    var layers = new _List2.default();

    if (size <= 0) return layers;

    for (var i = size - 1; i >= 0; i--) {

        var jsonLayer = json.layers[i];

        if (jsonLayer.type !== "tilelayer") continue;

        if (jsonLayer.enconding) {
            if (jsonLayer.enconding === 'base64') {
                //  should be interpreted as an array of unsigned 32-bit integers using little-endian byte ordering.
                jsonLayer.data = _Base64Utils2.default.decodeToUint32(jsonLayer.data);
                delete jsonLayer.enconding;
            }
        }

        var newLayer = new _TileLayerData2.default({
            name: jsonLayer.name,
            x: _ObjectGet2.default.value(jsonLayer, 'offsetx', 0) + jsonLayer.x,
            y: _ObjectGet2.default.value(jsonLayer, 'offsety', 0) + jsonLayer.y,
            width: jsonLayer.width,
            height: jsonLayer.height,
            tileWidth: jsonLayer.tilewidth,
            tileHeight: jsonLayer.tileheight,
            alpha: jsonLayer.opacity,
            visible: jsonLayer.visible
            //properties: GetFastValue(layer, 'properties', {})
        });

        var tiles = [];
        var x = 0;
        var y = 0;
        var hasAnimatedTiles = false;
        var animatedTilesGID = new _Set2.default();

        for (var j = 0; j < jsonLayer.data.length; j++) {

            var gidProp = (0, _ParseGID2.default)(jsonLayer.data[j]);
            var id = x + y * newLayer.width;
            var tile = null;

            // The first tileset always has a firstgid value of 1. 
            if (gidProp.gid > 0) {
                var gid = gidProp.gid;
                var tileset = GetTilesetByGID(tilesets, gid); //map.getTilesetByGID(gid);
                var tileData = tileset.getTileGID(gid);

                if (tileData.isAnimated) {
                    animatedTilesGID.insert(gid);
                    hasAnimatedTiles = true;
                }

                tile = new _Tile2.default(newLayer, tileData, x, y, id);
            }

            tiles.push(tile);

            x++;

            if (x >= newLayer.width) {
                x = 0;
                y++;
            }
        }

        newLayer.tiles = tiles;
        newLayer.hasAnimatedTiles = hasAnimatedTiles;
        newLayer.animatedTiles = animatedTilesGID.size > 0 ? animatedTilesGID : undefined;

        layers.push(newLayer);
    }

    return layers;
}

/***/ }),

/***/ "./resources/tilemap/parser/ParseTiledJSON.js":
/*!****************************************************!*\
  !*** ./resources/tilemap/parser/ParseTiledJSON.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ParseTiledJSON;

var _TilemapResource = __webpack_require__(/*! ../TilemapResource */ "./resources/tilemap/TilemapResource.js");

var _TilemapResource2 = _interopRequireDefault(_TilemapResource);

var _TilemapMetadata = __webpack_require__(/*! ../data/TilemapMetadata */ "./resources/tilemap/data/TilemapMetadata.js");

var _TilemapMetadata2 = _interopRequireDefault(_TilemapMetadata);

var _ParseTileset = __webpack_require__(/*! ./ParseTileset */ "./resources/tilemap/parser/ParseTileset.js");

var _ParseTileset2 = _interopRequireDefault(_ParseTileset);

var _ParseTileLayers = __webpack_require__(/*! ./ParseTileLayers */ "./resources/tilemap/parser/ParseTileLayers.js");

var _ParseTileLayers2 = _interopRequireDefault(_ParseTileLayers);

var _ParseObjectsLayers = __webpack_require__(/*! ./ParseObjectsLayers */ "./resources/tilemap/parser/ParseObjectsLayers.js");

var _ParseObjectsLayers2 = _interopRequireDefault(_ParseObjectsLayers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ParseTiledJSON(name, source, cache) {

    var metadata = new _TilemapMetadata2.default({
        name: source.name,
        width: source.width,
        height: source.height,
        tileWidth: source.tilewidth,
        tileHeight: source.tileheight,
        orientation: source.orientation
    });

    var tilesets = (0, _ParseTileset2.default)(source, cache);

    var config = {
        tilesets: tilesets,
        tilelayers: (0, _ParseTileLayers2.default)(source, tilesets),
        objectlayers: (0, _ParseObjectsLayers2.default)(source)
    };

    return new _TilemapResource2.default(name, metadata, config);
}

/***/ }),

/***/ "./resources/tilemap/parser/ParseTilesConfig.js":
/*!******************************************************!*\
  !*** ./resources/tilemap/parser/ParseTilesConfig.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ParseTilesConfig;
function ParseTilesConfig(tileset, tilesetTilesConfig) {

    for (var tileIndex in tilesetTilesConfig) {

        var index = parseInt(tileIndex);
        var tileData = tileset.getTile(index);

        if (tileData === null || tileData === undefined) continue;

        var tileProperties = tilesetTilesConfig[tileIndex];

        // check properties
        for (var property in tileProperties) {

            var propertyContent = tileProperties[property];

            if (property == 'animation') {

                var animationSize = propertyContent.length;

                if (animationSize > 1) {
                    tileData.isAnimated = true;

                    var keyFrames = [];

                    for (var i = 0; i < animationSize; i++) {
                        var anim = propertyContent[i];
                        keyFrames.push({
                            duration: anim.duration,
                            tileID: anim.tileid
                        });
                    }

                    tileData.keyFrames = keyFrames;
                }
            }
        }
    }
}

/***/ }),

/***/ "./resources/tilemap/parser/ParseTilesProperties.js":
/*!**********************************************************!*\
  !*** ./resources/tilemap/parser/ParseTilesProperties.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = ParseTileProperties;
function ParseTileProperties(tileset, tileProperties) {

        for (var tileIndex in tileProperties) {

                var index = parseInt(tileIndex);
                var tileData = tileset.getTile(index);

                if (tileData === null || tileData === undefined) continue;

                var props = tileProperties[tileIndex];
                tileData.properties = props;

                // check properties
                /*for (let property in props) {
                
                    let propertyContent = tileProperties[property];
                    tileData.properties = propertyContent;
                }*/
        }
}

/***/ }),

/***/ "./resources/tilemap/parser/ParseTileset.js":
/*!**************************************************!*\
  !*** ./resources/tilemap/parser/ParseTileset.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ParseTilesets;

var _Tileset = __webpack_require__(/*! ../data/Tileset */ "./resources/tilemap/data/Tileset.js");

var _Tileset2 = _interopRequireDefault(_Tileset);

var _List = __webpack_require__(/*! ../../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _Path = __webpack_require__(/*! ../../../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

var _ParseTilesConfig = __webpack_require__(/*! ./ParseTilesConfig */ "./resources/tilemap/parser/ParseTilesConfig.js");

var _ParseTilesConfig2 = _interopRequireDefault(_ParseTilesConfig);

var _ParseTilesProperties = __webpack_require__(/*! ./ParseTilesProperties */ "./resources/tilemap/parser/ParseTilesProperties.js");

var _ParseTilesProperties2 = _interopRequireDefault(_ParseTilesProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ParseTilesets(json, cache) {

    var size = json.tilesets.length || 0;

    var tileSets = new _List2.default();

    for (var i = 0; i < size; i++) {

        var jsonTileset = json.tilesets[i];

        if (jsonTileset.image) {

            var newTileSet = new _Tileset2.default(jsonTileset.name, jsonTileset.firstgid, jsonTileset.tilewidth, jsonTileset.tileheight, jsonTileset.margin, jsonTileset.spacing);

            newTileSet.image = cache.image.get(_Path2.default.getFilenameWithoutExtension(jsonTileset.image) || jsonTileset.name);

            newTileSet.updateData(jsonTileset.imagewidth, jsonTileset.imageheight);

            // check tile properties
            if (jsonTileset.tiles !== undefined) {
                (0, _ParseTilesConfig2.default)(newTileSet, jsonTileset.tiles);
            }

            if (jsonTileset.tileproperties !== undefined) {
                (0, _ParseTilesProperties2.default)(newTileSet, jsonTileset.tileproperties);
            }

            tileSets.push(newTileSet);
        }
    }

    return tileSets;
}

/***/ }),

/***/ "./scene/Scene.js":
/*!************************!*\
  !*** ./scene/Scene.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _PostPreloadingScene = __webpack_require__(/*! ./components/PostPreloadingScene */ "./scene/components/PostPreloadingScene.js");

var _PostPreloadingScene2 = _interopRequireDefault(_PostPreloadingScene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Scene = function () {
  function Scene(name) {
    (0, _classCallCheck3.default)(this, Scene);


    this.name = name || 'New Scene';
    //this.childs = new EntityHierarchy("SceneHierarchy", this.game);
    /*this.camera = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.view = 0;*/

    /*if (myGame != null) {
      this.width = myGame.width;
      this.height = myGame.height;
    }*/
  }

  (0, _createClass3.default)(Scene, [{
    key: 'preloadDone',
    value: function preloadDone(transition) {

      if (this.scene === undefined) return;

      (0, _PostPreloadingScene2.default)(this.scene, transition);
    }
  }, {
    key: 'instanceDestroy',
    value: function instanceDestroy(gameObject) {

      if (gameObject['destroy']) gameObject.destroy();

      //console.log("deleted " + gameObject._id)

      var index = this.instances.indexOf(gameObject);

      this.instances.splice(index, 1);
    }
  }, {
    key: 'addGameObject',
    value: function addGameObject(gameObject, clone) {

      var obj = void 0;
      var cl = false;

      if (arguments.length == 0) obj = new scintilla.GameObject();else {

        if (clone === undefined) cl = false;else cl = clone;

        if (cl) obj = gameObject.clone();else obj = gameObject;
      }

      obj._id = this.instances.length;
      obj._game = this.game;
      this.instances.push(obj);

      obj.start();
      return obj;
    }
  }, {
    key: 'setBounds',
    value: function setBounds(x, y, width, height) {

      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  }]);
  return Scene;
}();

exports.default = Scene;

/***/ }),

/***/ "./scene/SceneManager.js":
/*!*******************************!*\
  !*** ./scene/SceneManager.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _System = __webpack_require__(/*! ../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _Scene = __webpack_require__(/*! ./Scene */ "./scene/Scene.js");

var _Scene2 = _interopRequireDefault(_Scene);

var _ScintillaLoadingScene = __webpack_require__(/*! ./builtin/ScintillaLoadingScene */ "./scene/builtin/ScintillaLoadingScene.js");

var _ScintillaLoadingScene2 = _interopRequireDefault(_ScintillaLoadingScene);

var _SetScene = __webpack_require__(/*! ./components/SetScene */ "./scene/components/SetScene.js");

var _SetScene2 = _interopRequireDefault(_SetScene);

var _InjectSystems = __webpack_require__(/*! ../core/system/components/InjectSystems */ "./core/system/components/InjectSystems.js");

var _InjectSystems2 = _interopRequireDefault(_InjectSystems);

var _CreateSceneFrom = __webpack_require__(/*! ./components/CreateSceneFrom */ "./scene/components/CreateSceneFrom.js");

var _CreateSceneFrom2 = _interopRequireDefault(_CreateSceneFrom);

var _Validate = __webpack_require__(/*! ../utils/Validate */ "./utils/Validate.js");

var _Validate2 = _interopRequireDefault(_Validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SceneManager = function () {
  function SceneManager(game) {
    (0, _classCallCheck3.default)(this, SceneManager);


    this.game = game;
    this._scenes = new _Map2.default();

    this.currentScene = null;
    this._currentSceneName = '';
    this._changeScene = null;
    this._transition = null;
    this._isTranistioning = false;

    this._setup = false;
    this._clearCache = false;

    this._scintillaLoading = false;

    // callbacks

    this.onStartCallback = null;
    this.onLoadingCallback = null;
    this.onLoadingRenderCallback = null;
    this.onPreloadCallback = null;
    this.onUpdateCallback = null;
    this.onRenderCallback = null;
    this.onDestroyCallback = null;
    this._loadingPlaceHolder = new _ScintillaLoadingScene2.default(this.game);
  }

  (0, _createClass3.default)(SceneManager, [{
    key: 'add',
    value: function add(sceneName, scene) {

      if (sceneName === undefined) {
        throw new Error("SceneManager.add: Could not add Scene. \'sceneName\' is undefined.");
      }

      if (!_Validate2.default.isString(sceneName)) {
        throw new Error("SceneManager.add: Could not add Scene. \'sceneName\' is not string.");
      }

      if (this._scenes.has(sceneName)) {
        throw new Error("SceneManager.add: Could not add Scene. There is already a scene with name \"" + sceneName + "\".");
      }

      var newScene = (0, _CreateSceneFrom2.default)(scene, sceneName);
      this._scenes.insert(sceneName, newScene);
      return this;
    }
  }, {
    key: 'new',
    value: function _new(sceneName) {

      if (this._scenes.has(sceneName)) {
        throw new Error("Could not create new Scene. The scene name \"" + name + "\" already exists.");
      }

      var newScene = new _Scene2.default(this.game, sceneName);
      this._scenes.insert(sceneName, newScene);

      return newScene;
    }
  }, {
    key: 'set',
    value: function set(sceneName, clearCache) {
      return (0, _SetScene2.default)(this, sceneName, clearCache);
    }
  }, {
    key: 'transition',
    value: function transition(sceneName, type) {
      (0, _SetScene2.default)(this, sceneName, false, type);
      /// TODO
    }
  }, {
    key: 'restart',
    value: function restart(clearCache) {

      if (clearCache === undefined) {
        clearCache = false;
      }

      this._changeScene = this._currentSceneName;
      this._clearCache = clearCache;
    }
  }, {
    key: 'remove',
    value: function remove(sceneName) {

      if (this._currentSceneName === sceneName) {

        this.currentScene = null;

        this.onStartCallback = null;
        this.onLoadingCallback = null;
        this.onLoadingRenderCallback = null;
        this.onPreloadCallback = null;
        this.onUpdateCallback = null;
        this.onRenderCallback = null;
        this.onDestroyCallback = null;
      }

      delete this.scenes[sceneName];
    }
  }]);
  return SceneManager;
}();

exports.default = SceneManager;


_System2.default.register('SceneManager', SceneManager, 'scene', function () {
  (0, _InjectSystems2.default)(this.game, this._loadingPlaceHolder);
});

/***/ }),

/***/ "./scene/SceneState.js":
/*!*****************************!*\
  !*** ./scene/SceneState.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO - FUTURE
var SceneState = {
    NONE: 0,
    START: 1,
    LOADING: 2,
    RUNNING: 3
};

(0, _freeze2.default)(SceneState);

module.exports = SceneState;

/***/ }),

/***/ "./scene/builtin/ScintillaLoadingScene.js":
/*!************************************************!*\
  !*** ./scene/builtin/ScintillaLoadingScene.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Scene2 = __webpack_require__(/*! ../Scene */ "./scene/Scene.js");

var _Scene3 = _interopRequireDefault(_Scene2);

var _Define = __webpack_require__(/*! ../../Define */ "./Define.js");

var _Define2 = _interopRequireDefault(_Define);

var _MathUtils = __webpack_require__(/*! ../../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _TranstionBehavior = __webpack_require__(/*! ../../render/transition/TranstionBehavior */ "./render/transition/TranstionBehavior.js");

var _TranstionBehavior2 = _interopRequireDefault(_TranstionBehavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScintillaLoadingScreen = function (_Scene) {
    (0, _inherits3.default)(ScintillaLoadingScreen, _Scene);

    function ScintillaLoadingScreen(game) {
        (0, _classCallCheck3.default)(this, ScintillaLoadingScreen);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ScintillaLoadingScreen.__proto__ || (0, _getPrototypeOf2.default)(ScintillaLoadingScreen)).call(this, 'Scintilla Loading Scene'));

        var blob = void 0;
        var logoData = ["%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M224%20387.814V512L32 320l192-192v126.912C447.375 260.152 437.794 103.016 380.93 0 521.287 151.707 491.48 394.785 224 387.814z'/%3E%3C/svg%3E"];

        try {
            blob = new window.Blob(logoData, { type: 'data:image/svg+xml;charset=utf-8' });
        } catch (e) {
            console.error(e);
        }

        _this.scintillaLogo = new Image();
        _this.scintillaLogo.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI2MC45OCIgdmlld0JveD0iMCAwIDYzLjUgNjkuMDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2RjMzBhOSI+PHBhdGggZD0iTTQzLjQ5IDM2Ljg1NmwtMTQuMTgtNi40MzRMNi45NTYgNDkuNzg0bDE5LjM2Mi0yNy4yNC02LjU3Ni05LjU2OCAxNC40NTUgNi41NzVMNTYuNTUxLjE5IDM3LjE5IDI3LjQzeiIgcGFpbnQtb3JkZXI9InN0cm9rZSBtYXJrZXJzIGZpbGwiLz48cGF0aCBkPSJNMTEuMTIgMzYuOTA4bC0uNTQzLTEuMDQxLTEuMDM2LjU0My41MzggMS4wMzZ6bS0xLjg4OC00LjE3NmwtLjM2LTEuMTE2LTEuMTE2LjM2MS4zNjYgMS4xMTV6bS0xLjA2NC00LjQ1NmwtLjA5Ny0uNjM1di0uMDNsLS4wMDYtLjAzLS4wMy0uNDI5LTEuMTY2LjA4LjAzNC40OC4wMDYuMDQ3LjEwMy42ODZ6bS0uMTAzLTUuNjk4bC0xLjE2Ny0uMTA4LS4xMDggMS4xNjcgMS4xNjcuMTA4em0uODY0LTQuNDMzbC4wMDYtLjAzLjAwNi0uMDMtLjMwMy0uMDgtLjgxMi0uMjgxLS4wMDYuMDMtLjAxMi4wNDYtLjI4NiAxLjExNSAxLjEzMi4yOTN6bTEuNDE5LTMuNjMzbC4zMzctLjYyMy0xLjAzLS41NTUtLjM2LjY2My0uMDE4LjA0Mi0uMTcxLjM4MyAxLjA3NS40N3ptMi44NTQtNC40NWwtLjkyNi0uNzIxLS43MjEuOTI3LjkyNy43MTV6bTMuMTg3LTMuMjlsLS43OS0uODYzLS44NjQuNzk1Ljc5Ni44NTh6bTMuMTgtMi4yNjVsLjAzLS4wM2guMDExbC41MjEtLjI4LS41Ni0xLjAzLS41NjEuMzAyLS4wNC4wMy0uNDQ3LjI5My42NDEuOTg0ek00Mi42NDUgMi41bC0uMjUxLS4xMzItLjA0Ni0uMDMtLjgxOC0uMzQzLS40NTIgMS4wNzUuNzcyLjMyNi4yNTIuMTMyem0tMTguMzIzLS4xMzJsLS4zODMtMS4xMS0xLjEwNC4zODQuMzgzIDEuMTA0ek0zOC4xMi44MjhMMzYuOTgyLjU1M2wtLjI2OSAxLjE0NCAxLjEzOC4yN3ptLTkuNTA3LjUzOGguMTMzTDI4LjY0My4xOTloLS4xODNsLTEuMDE4LjE3OC4yIDEuMTU2em00LjgtMS4zMDRMMzIuNTIgMGgtLjMyNmwuMDEyIDEuMTY3aC4yMzVsLjg4Ni4wNjJ6TTUyLjM4IDEzLjA2NWwuNTM4IDEuMDQgMS4wNC0uNTQyLS41NDMtMS4wMzZ6bTEuODgyIDQuMTc2bC4zNjYgMS4xMTUgMS4xMS0uMzYtLjM2LTEuMTE2em0xLjA2NCA0LjQ1NmwuMTAzLjY0di4wM2wuMDA2LjAzLjAyOS40MyAxLjE2Ny0uMDc4LS4wMzQtLjQ4LS4wMDYtLjA0Ny0uMTAzLS42ODZ6bS4xMDkgNS42OThsMS4xNjcuMTA4LjEwMy0xLjE2Ny0xLjE2Ny0uMTA4em0tLjg2NCA0LjQzM2wtLjAwNi4wMy0uMDA2LjAzLjI5Mi4wOC44MTguMjgxLjAxMi0uMDMuMDEyLS4wNDguMjg1LTEuMTEtMS4xMzItLjI5MnptLTEuNDAyIDMuNTkzbC0uMDEyLjAzLS4wMTIuMDMtLjMzNy42MTcgMS4wMzUuNTU1LjM1NS0uNjYzLjAyMy0uMDQyLjE2Ni0uMzg0LTEuMDctLjQ2OXptLTIuODcxIDQuNDlsLjkyNi43MjEuNzE1LS45MjctLjkyNi0uNzE1em0tMy4xOTIgMy4yOWwuNzk1Ljg2My44NjMtLjc5NS0uNzk1LS44NTh6bS0zLjE3NSAyLjI2NWwtLjAzLjAzaC0uMDEybC0uNTIuMjguNTU1IDEuMDMuNTYtLjMwMy4wNDYtLjAzLjQ0Ni0uMjkzLS42NC0uOTg0em0tMjMuMDc2IDIuMDA4bC4yNTEuMTMyLjA0LjAzLjgxOS4zNDMuNDU3LTEuMDc2LS43NzgtLjMyNmgtLjAwNmwtLjAzNC0uMDMtLjIxMi0uMTE0em0xOC4zMTcuMTM4bC4zODMgMS4xMDQgMS4xMS0uMzg0LS4zODQtMS4xMDR6bS0xMy43OTggMS41MzNsMS4xNDQuMjc1LjI2OS0xLjE0NC0xLjE0NC0uMjd6bTkuNTEzLS41MzhoLS4xMzhsLjEwOCAxLjE2N2guMTgzbDEuMDE5LS4xNzgtLjItMS4xNTZ6bS00LjggMS4zMDRsLjg5My4wNjRoLjMybC0uMDEyLTEuMTY3aC0uMjI5bC0uODkyLS4wNjR6IiBjb2xvcj0iIzAwMCIgc29saWQtY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWluZGVudDowO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7dGV4dC10cmFuc2Zvcm06bm9uZSIgcGFpbnQtb3JkZXI9InN0cm9rZSBtYXJrZXJzIGZpbGwiIHdoaXRlLXNwYWNlPSJub3JtYWwiLz48cGF0aCBkPSJNNi4zMiA2NS43MjhxLS4xMDcgMS4zMzMtLjkxIDIuMjc2LS41MjguNjQyLTEuNDA1LjktLjQ3NS4xNDctMS4wODIuMTQ3LTEuMTMxIDAtMS44MTgtLjU1OS0uNTctLjQ2LS44NTgtMS4yNDMtLjI4OC0uNzg5LS4yNDUtMS44MTVsMS44MzQtLjEyNnEuMDIgMS4xMS40NCAxLjYwNi4zMDYuMzc3Ljc1NS4zNTYuNjMtLjAzIDEuMDY0LS42MTQuMjI0LS4zLjI3Ni0uODQ1LjA3Ny0uODAzLS41NjctMS41ODUtLjUyMS0uNTM4LTEuNTU2LTEuNjEzLS44NjktLjkyMi0xLjE5LTEuNjU1LS4zNDYtLjgyMy0uMjU0LTEuNzg3LjE2Ni0xLjczOCAxLjQxOC0yLjYzMlEyLjk5MiA1NiA0LjA2IDU2cTEuMDI2IDAgMS43MTUuNDYxLjUzMS4zNTYuODE5Ljk5OS4yODguNjM1LjI4NSAxLjQ2NmwtMS44NzUuMzM1cS0uMDAyLS43ODItLjMzLTEuMjE1LS4yMzUtLjMyMS0uNzMtLjMyMS0uNTI0IDAtLjg0OC40NjgtLjI2LjM3Ny0uMzEzLjkzNS0uMDg0Ljg3My41ODMgMS43OC4yNTQuMzQzLjc3NC44MS42MTcuNTU5LjgxMi43ODIuNjM3LjcxMi45NjIgMS40MDQuMTUuMzIuMjM2LjYuMjA3LjY3Ny4xNjkgMS4yMjJ6bTQuOTYgMy4zMnEtMS4yNyAwLTIuMDcyLS44ODctLjgwMi0uODg2LS42ODEtMi4xNWwuNjY3LTYuOTc1cS4xMjEtMS4yNjMgMS4xLTIuMTUuOTgtLjg5NCAyLjIzNi0uODk0IDEuMjcgMCAyLjA2NS44OTQuOC44OTMuNjggMi4xNWwtLjEzOSAxLjQ1MmgtMS45OWwuMTQzLTEuNDg3cS4wNDQtLjQ2LS4yNTMtLjc4Mi0uMjktLjMyOC0uNzUtLjMyOC0uNDU1IDAtLjgwNy4zMjgtLjM1Mi4zMjItLjM5Ni43ODJsLS42NyA2Ljk4OXEtLjA0My40Ni4yNDcuNzgyLjI5LjMyMS43NDQuMzIxLjQ2MSAwIC44MTMtLjMyMS4zNTktLjMyMS40MDMtLjc4MmwuMTY4LTEuNzUyaDEuOTlsLS4xNyAxLjc3M3EtLjEyMiAxLjI3LTEuMSAyLjE1Ny0uOTc4Ljg4LTIuMjI4Ljg4em03LjE5LS4xNmgtMS45MTNsMS4yMi0xMi43MzVoMS45MTJ6bTUuNzQtMTIuNzM0bDEuNzIzIDguNTUzLjgxOC04LjU1M2gxLjkybC0xLjIxOSAxMi43MzVoLTIuMDZsLTEuODY1LTguMTU1LS43OCA4LjE1NWgtMS45MTRsMS4yMi0xMi43MzV6bTguNTMgMS45MjFoLTIuMDM5bC4xODQtMS45Mmg1Ljk5bC0uMTgzIDEuOTJIMzQuNjZMMzMuNjI1IDY4Ljg5aC0xLjkyem03LjAzIDEwLjgxM2gtMS45MTNsMS4yMi0xMi43MzVoMS45MTJ6bTcuNiAwaC01LjIzbDEuMjItMTIuNzM1aDEuOTEzbC0xLjAzNyAxMC44MjloMy4zMTZ6bTcuMjEgMGgtNS4yM2wxLjIyLTEyLjczNWgxLjkxM2wtMS4wMzcgMTAuODI5aDMuMzE2em00LjczLTIuOTJsLS43NDggMi45MjVoLTEuOTk3bDMuMzc3LTEyLjczNWgyLjY0NmwuOTEgMTIuNzM1aC0yLjAxbC0uMTc0LTIuOTI1em0xLjY2NS02Ljg5MWwtMS4xOTMgNS4wMmgxLjQyNXoiLz48L2c+PC9zdmc+";
        _this._loaded = false;
        var self = _this;
        _this._finished = false;
        //"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA0CAQAAABxuOPTAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiBAEENCBdKapvAAABjklEQVRYw+2YSxKDIAyGA6seyiXH8mgsORS7dAFpUMNDJ9CNmakFAnz8MVIswCPbkT8L7IqS4REVgSO2HKiGvQOMa+7yGbhY5XKdhFPV2ZpMLaz3gqeIPd5PeeJaWBX3qiNYqqnn7VVrPayqu/JZl3ISSWstEb2wPtDaHjLhbo4nUwunrHQUOyWN2kBFpRJ26iMjp49qgHuPTDvQKkpbW5+i1n1wa5fAijp7P21/OP+wT0Hnws3uefDUdP7pNLtY5ULgPexE4Ohr4tR31H11er322muPdqXrealWYrPrkQNQgI8ZXVDqGbt/GRh20eSp/jERz7jUQn7qe10Ut5Z+HmdTM08WsaxJx02GUMvIgabsYwMA+AIcsuqQO3vk75CRoQhnyCN5LPu5nKQUYz1G5KmPq5V9tbaWn+aKCGABnAmFonAIijPXVUtKSHXd79H9lNqIAM4AbBm7/fDJNqF8biM1W3WMx9JnA3hkRaXqdD1GQW6j1AqdMVS3zgB49FkvXT16dIaDPFaq+5kC4MwX1X+rgjIvVdUAAAAASUVORK5CYII=";
        //this.scintillaLogo.src = blob;

        _this.progress = 0;
        _this.fromProgress = 0;
        _this.toProgress = 0;
        _this.t = 0;
        _this.game = game;
        _this.nextScene = null;
        _this.preloadingDone = false;

        var setLoadingPos = function setLoadingPos() {
            this._midPos = { x: 320 / 2, y: 240 / 2 };
            this._barColor = '#dc30a9';
            this._barPosX = 160 - this.scintillaLogo.width * 0.3 * 0.5;
            this._barPosY = 120 - 16 + this.scintillaLogo.height * 0.3 * 0.5 + 8;
            this._barPosW = this.scintillaLogo.width * 0.3;
        };

        _this.scintillaLogo.onload = function () {
            self._loaded = true;
            setLoadingPos.call(self);
        };

        var drawFunc = function drawFunc(draw) {
            if (this._loaded) {
                draw.imageExtra(this.scintillaLogo, 160, 120 - 16, 0.3, 0.3, 0.5, 0.5); //131,73);

                draw.color = this._barColor;
                draw.outlineRect(this._barPosX, this._barPosY, this._barPosW, 7);
                draw.rect(this._barPosX + 2, this._barPosY + 2, (this._barPosW - 4) * this.progress, 3);
                draw.font('Verdana', 6);
                draw.text('WIP - ' + _Define2.default.VERSION, 320 - 4, 240 - 4, '#490c37', 'right');
            }
        };

        var loadingFunc = function loadingFunc(dt) {

            if (!this._finished) {
                this.t += dt / 0.15;

                if (this.t >= 1) this.t = 1.0;

                if (!this.preloadingDone) {
                    var prog = this.load.progress;

                    if (prog >= 1.0) this.preloadingDone = true;

                    if (prog > this.progress) {
                        this.fromProgress = this.progress;
                        this.toProgress = prog;
                        this.t = 0;
                    }
                } else {
                    this.wait += dt;

                    if (this.wait >= 1.5) {
                        //this.preloadDone(TransitionBehavior.FADEIN);
                        var done = function done() {
                            this.transition.reset();
                            this.preloadDone();
                        };
                        this.transition.in();
                        this.events.subscribeOnce('transition_end', done, this);
                        this._finished = true;
                    }
                }

                this.progress = _MathUtils2.default.lerp(this.fromProgress, this.toProgress, this.t);
            }
        };

        _this.loading = loadingFunc;
        _this.update = loadingFunc;
        _this.loadingGUI = drawFunc;
        _this.gui = drawFunc;
        return _this;
    }

    (0, _createClass3.default)(ScintillaLoadingScreen, [{
        key: "init",
        value: function init(next) {
            this.nextScene = next;
            this.wait = 0;
            this.t = 0;
            this.progress = 0;
            this.preloadingDone = false;
            this.ui.setSize(320, 240);
            this.ui.setViewportByAspectRatio(1.33333333333);
            this.transition.settings.setInDuration(0.35);
        }
    }, {
        key: "start",
        value: function start() {
            //this.progress = 1;
        }
    }]);
    return ScintillaLoadingScreen;
}(_Scene3.default);

exports.default = ScintillaLoadingScreen;

/***/ }),

/***/ "./scene/components/ClearScene.js":
/*!****************************************!*\
  !*** ./scene/components/ClearScene.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ClearScene;

var _UnjectSystems = __webpack_require__(/*! ../../core/system/components/UnjectSystems */ "./core/system/components/UnjectSystems.js");

var _UnjectSystems2 = _interopRequireDefault(_UnjectSystems);

var _ClearAudioSources = __webpack_require__(/*! ../../audio/manager/components/ClearAudioSources */ "./audio/manager/components/ClearAudioSources.js");

var _ClearAudioSources2 = _interopRequireDefault(_ClearAudioSources);

var _ClearEntities = __webpack_require__(/*! ../../entities/hierarchy/ClearEntities */ "./entities/hierarchy/ClearEntities.js");

var _ClearEntities2 = _interopRequireDefault(_ClearEntities);

var _ResetKeyboard = __webpack_require__(/*! ../../input/keyboard/components/ResetKeyboard */ "./input/keyboard/components/ResetKeyboard.js");

var _ResetKeyboard2 = _interopRequireDefault(_ResetKeyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ClearScene(game, sceneManager) {

    if (sceneManager.currentScene !== null && sceneManager.currentScene !== undefined) {

        //game.system.unject(sceneManager.currentScene);
        (0, _UnjectSystems2.default)(sceneManager.currentScene);

        if (sceneManager.onDestroyCallback) {
            sceneManager.onDestroyCallback.call(sceneManager.currentScene);
        }

        if (sceneManager._clearCache) {
            game.cache.clear();
        }

        (0, _ClearEntities2.default)(game.system.entityList, game);
        _ResetKeyboard2.default.call(game.input.keyboard);
        _ClearAudioSources2.default.call(game.audio);
    }
}

/***/ }),

/***/ "./scene/components/CreateSceneFrom.js":
/*!*********************************************!*\
  !*** ./scene/components/CreateSceneFrom.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = CreateSceneFrom;

var _Scene = __webpack_require__(/*! ../Scene */ "./scene/Scene.js");

var _Scene2 = _interopRequireDefault(_Scene);

var _Extend = __webpack_require__(/*! ../../utils/object/Extend */ "./utils/object/Extend.js");

var _Extend2 = _interopRequireDefault(_Extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CreateSceneFrom(value, sceneName) {

    if (value === undefined) {
        throw new Error("SceneManager.add: Could not add Scene. \'scene\' is undefined.");
    }

    if (value === null) {
        throw new Error("SceneManager.add: Could not add Scene. \'scene\' is null.");
    }

    var newScene;

    if (value instanceof _Scene2.default) {
        newScene = scene;
    } else if ((typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === _Scene2.default) {
        newScene = new value();
    } else if ((typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === 'object') {
        var placeholder = new _Scene2.default(sceneName);
        newScene = (0, _Extend2.default)(placeholder, value);
    } else if (typeof value === 'function') {
        var _placeholder = new value();

        if (value instanceof _Scene2.default) {
            newScene = _placeholder;
        } else {
            if (_placeholder.name === undefined) {
                _placeholder.name = sceneName;
            }
            newScene = (0, _Extend2.default)(true, _placeholder, _Scene2.default);
        }
    }

    return newScene;
}

/***/ }),

/***/ "./scene/components/PostPreloadingScene.js":
/*!*************************************************!*\
  !*** ./scene/components/PostPreloadingScene.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = PostPreloadingScene;

var _TransitionBetweenScenes = __webpack_require__(/*! ./TransitionBetweenScenes */ "./scene/components/TransitionBetweenScenes.js");

var _TransitionBetweenScenes2 = _interopRequireDefault(_TransitionBetweenScenes);

var _TranstionBehavior = __webpack_require__(/*! ../../render/transition/TranstionBehavior */ "./render/transition/TranstionBehavior.js");

var _TranstionBehavior2 = _interopRequireDefault(_TranstionBehavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PostPreloadingScene(sceneManger, transition) {

    if (transition === undefined) transition = _TranstionBehavior2.default.NONE;

    sceneManger._scintillaLoading = false;
    sceneManger._transition = transition;

    if (sceneManger.currentScene === undefined || sceneManger.currentScene === null) return;

    function start() {

        this._isTranistioning = false;

        if (this.onStartCallback) {
            this.onStartCallback.call(this.currentScene, this.game);
        }
    }

    if (transition <= _TranstionBehavior2.default.NONE) {
        start.call(sceneManger);
    } else {

        (0, _TransitionBetweenScenes2.default)(sceneManger, start.bind(sceneManger));
    }
}

/***/ }),

/***/ "./scene/components/PreUpdateScene.js":
/*!********************************************!*\
  !*** ./scene/components/PreUpdateScene.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PreUpdateScene;

var _SetupScene = __webpack_require__(/*! ./SetupScene */ "./scene/components/SetupScene.js");

var _SetupScene2 = _interopRequireDefault(_SetupScene);

var _PreloadSceneComplete = __webpack_require__(/*! ./PreloadSceneComplete */ "./scene/components/PreloadSceneComplete.js");

var _PreloadSceneComplete2 = _interopRequireDefault(_PreloadSceneComplete);

var _ClearScene = __webpack_require__(/*! ./ClearScene */ "./scene/components/ClearScene.js");

var _ClearScene2 = _interopRequireDefault(_ClearScene);

var _StartLoadAssets = __webpack_require__(/*! ../../loader/components/StartLoadAssets */ "./loader/components/StartLoadAssets.js");

var _StartLoadAssets2 = _interopRequireDefault(_StartLoadAssets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PreUpdateScene(sceneManager) {

  if (!sceneManager.game.systemInited || sceneManager._changeScene === null) return;

  (0, _ClearScene2.default)(sceneManager.game, sceneManager);

  _SetupScene2.default.call(sceneManager, sceneManager._changeScene);

  if (sceneManager._currentSceneName !== sceneManager._changeScene) {
    return;
  } else {
    sceneManager._changeScene = null;
  }

  if (sceneManager.onPreloadCallback) {

    sceneManager.game.system.load.reset();
    sceneManager.onPreloadCallback.call(sceneManager.currentScene, sceneManager.game);

    // should we run the loading screen
    var bothIsNull = sceneManager.onLoadingCallback === null && sceneManager.onLoadingRenderCallback === null;

    if (sceneManager.onLoadingCallback === null || sceneManager.onLoadingRenderCallback === null) {
      if (bothIsNull && sceneManager.game.system.load.totalQueuedFiles > 0) {
        sceneManager._loadingPlaceHolder.init(sceneManager.currentScene);
        sceneManager._scintillaLoading = true;
      } else {
        sceneManager._scintillaLoading = false;
      }
    }

    if (sceneManager.game.system.load.totalQueuedFiles === 0) {
      _PreloadSceneComplete2.default.call(sceneManager);
    } else {

      //sceneManager.game.system.load.start();
      _StartLoadAssets2.default.call(sceneManager.game.system.load);
    }
  } else {

    _PreloadSceneComplete2.default.call(sceneManager);
  }
}

/***/ }),

/***/ "./scene/components/PreloadSceneComplete.js":
/*!**************************************************!*\
  !*** ./scene/components/PreloadSceneComplete.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = PreloadSceneComplete;

var _TranstionBehavior = __webpack_require__(/*! ../../render/transition/TranstionBehavior */ "./render/transition/TranstionBehavior.js");

var _TranstionBehavior2 = _interopRequireDefault(_TranstionBehavior);

var _TransitionBetweenScenes = __webpack_require__(/*! ./TransitionBetweenScenes */ "./scene/components/TransitionBetweenScenes.js");

var _TransitionBetweenScenes2 = _interopRequireDefault(_TransitionBetweenScenes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PreloadSceneComplete() {

    if (this._setup === false && this.onLoadingCallback) {
        this.onLoadingCallback.call(this.currentScene, this.game);
    }

    function start() {
        if (this._scintillaLoading) {
            this._loadingPlaceHolder.start();
        } else {
            if (this.onStartCallback) {
                this.onStartCallback.call(this.currentScene, this.game);
            }
        }
    }

    if (this._transition <= _TranstionBehavior2.default.NONE) {
        start.call(this);
    } else {
        (0, _TransitionBetweenScenes2.default)(this, start.bind(this));
    }

    this._setup = true;
}

/***/ }),

/***/ "./scene/components/RenderScene.js":
/*!*****************************************!*\
  !*** ./scene/components/RenderScene.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RenderScene;
function RenderScene(sceneManager, drawer) {

    if (sceneManager._setup) {

        if (sceneManager._scintillaLoading) {
            sceneManager._loadingPlaceHolder.gui(drawer);
        } else {
            if (sceneManager.onRenderCallback) sceneManager.onRenderCallback.call(sceneManager.currentScene, drawer);
        }
    } else {
        if (sceneManager._scintillaLoading) {
            sceneManager._loadingPlaceHolder.loadingGUI(drawer);
        } else {
            if (sceneManager.onLoadingRenderCallback) sceneManager.onLoadingRenderCallback.call(sceneManager.currentScene, drawer);
        }
    }
}

/***/ }),

/***/ "./scene/components/SetScene.js":
/*!**************************************!*\
  !*** ./scene/components/SetScene.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SetScene;

var _TranstionBehavior = __webpack_require__(/*! ../../render/transition/TranstionBehavior */ "./render/transition/TranstionBehavior.js");

var _TranstionBehavior2 = _interopRequireDefault(_TranstionBehavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SetScene(manager, sceneName, clearCache, type) {

  if (!manager._scenes.has(sceneName)) throw new Error('SceneManager.set: Scene \'' + sceneName + '\' does not exist.');

  if (clearCache === undefined) {
    clearCache = false;
  }
  if (type === undefined) {
    type = _TranstionBehavior2.default.NONE;
  }

  manager._transition = type;
  manager._changeScene = sceneName;
  manager._clearCache = clearCache;

  return manager;
}

/***/ }),

/***/ "./scene/components/SetupScene.js":
/*!****************************************!*\
  !*** ./scene/components/SetupScene.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SetupScene;

var _InjectSystems = __webpack_require__(/*! ../../core/system/components/InjectSystems */ "./core/system/components/InjectSystems.js");

var _InjectSystems2 = _interopRequireDefault(_InjectSystems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SetupScene(sceneName) {

  this.currentScene = this._scenes.get(sceneName);

  this.onLoadingCallback = this.currentScene['loading'] || null;
  this.onLoadingRenderCallback = this.currentScene['loadingGUI'] || null;
  this.onRenderCallback = this.currentScene['gui'] || null;
  this.onUpdateCallback = this.currentScene['update'] || null;
  this.onStartCallback = this.currentScene['start'] || null;
  this.onPreloadCallback = this.currentScene['preload'] || null;
  this.onDestroyCallback = this.currentScene['destroy'] || null;

  (0, _InjectSystems2.default)(this.game, this.currentScene);
  //this.game.system.inject(this.currentScene);

  this._currentSceneName = sceneName;

  this._setup = false;
}

/***/ }),

/***/ "./scene/components/TransitionBetweenScenes.js":
/*!*****************************************************!*\
  !*** ./scene/components/TransitionBetweenScenes.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TransitionBetweenScenes;

var _TranstionBehavior = __webpack_require__(/*! ../../render/transition/TranstionBehavior */ "./render/transition/TranstionBehavior.js");

var _TranstionBehavior2 = _interopRequireDefault(_TranstionBehavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TransitionBetweenScenes(sceneManager, delegate) {

    var transit = sceneManager._transition;

    sceneManager.game.system.transition.by(transit);
    if (transit === _TranstionBehavior2.default.FADEINOUT) {
        sceneManager.game.system.events.subscribeOnce('transition_pause_end', delegate);
    } else {
        sceneManager.game.system.events.subscribeOnce('transition_end', delegate);
    }
    sceneManager._transition = _TranstionBehavior2.default.NONE;
    sceneManager._isTranistioning = true;
}

/***/ }),

/***/ "./scene/components/UpdateScene.js":
/*!*****************************************!*\
  !*** ./scene/components/UpdateScene.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateScene;
function UpdateScene(sceneManager, deltaTime) {

    if (sceneManager._setup) {

        if (sceneManager._scintillaLoading) {

            sceneManager._loadingPlaceHolder.update(deltaTime);
        } else {
            if (sceneManager.onUpdateCallback) sceneManager.onUpdateCallback.call(sceneManager.currentScene, deltaTime);
        }
    } else {
        if (sceneManager._scintillaLoading) {

            sceneManager._loadingPlaceHolder.loading(deltaTime);
        } else {

            if (sceneManager.onLoadingCallback) sceneManager.onLoadingCallback.call(sceneManager.currentScene, deltaTime);
        }
    }
}

/***/ }),

/***/ "./scene/index.js":
/*!************************!*\
  !*** ./scene/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    State: __webpack_require__(/*! ./SceneState */ "./scene/SceneState.js"),
    Scene: __webpack_require__(/*! ./Scene */ "./scene/Scene.js"),
    SceneManager: __webpack_require__(/*! ./SceneManager */ "./scene/SceneManager.js")
};

/***/ }),

/***/ "./structures/List.js":
/*!****************************!*\
  !*** ./structures/List.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _MergeSort = __webpack_require__(/*! ./useful/MergeSort */ "./structures/useful/MergeSort.js");

var _MergeSort2 = _interopRequireDefault(_MergeSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataList = function () {
    function DataList(elements, unique) {
        (0, _classCallCheck3.default)(this, DataList);

        this.unique = unique || true;
        this.childs = [];

        if (elements !== null && Array.isArray(elements)) {
            for (var i = 0; i < elements.length; i++) {
                this.push(elements[i]);
            }
        }
    }

    (0, _createClass3.default)(DataList, [{
        key: 'first',
        value: function first() {
            if (this.childs.length > 0) return this.childs[0];else return null;
        }
    }, {
        key: 'last',
        value: function last() {
            if (this.childs.length > 0) {
                var idx = this.childs.length - 1;
                return this.childs[idx];
            } else return null;
        }
    }, {
        key: 'push',
        value: function push(child) {

            if (this.unique) {
                if (this.indexOf(child) === -1) this.childs.push(child);
            } else {
                this.childs.push(child);
            }

            return child;
        }
    }, {
        key: 'pushFront',
        value: function pushFront(child) {
            if (this.unique) {
                if (this.indexOf(child) === -1) this.childs.unshift(child);
            } else {
                this.childs.unshift(child);
            }
            return child;
        }
    }, {
        key: 'insert',
        value: function insert(child, index) {

            if (index === undefined) index = 0;

            if (this.childs.length === 0) return this.push(child);

            if (index >= 0 && index <= this.childs.length) {

                if (this.unique) {
                    if (this.indexOf(child) === -1) this.childs.splice(index, 0, child);
                } else {
                    this.childs.splice(index, 0, child);
                }
            }

            return child;
        }
    }, {
        key: 'indexOf',
        value: function indexOf(child) {
            return this.childs.indexOf(child);
        }
    }, {
        key: 'get',
        value: function get(index) {
            return this.childs[index];
        }
    }, {
        key: 'at',
        value: function at(index) {
            return this.childs[index];
        }
    }, {
        key: 'erase',
        value: function erase(child) {

            var idx = this.childs.indexOf(child);
            var childToErase = null;

            if (idx !== -1) childToErase = this.childs.splice(idx, 1);

            return childToErase;
        }
    }, {
        key: 'eraseAt',
        value: function eraseAt(index) {
            var child = this.childs[index];

            if (child) this.childs.splice(index, 1);

            return child;
        }
    }, {
        key: 'eraseList',
        value: function eraseList(listToRemove, size, destroy) {

            if (destroy === undefined) destroy = false;

            if (Array.isArray(listToRemove)) {
                if (size === undefined) size = listToRemove.length;

                for (var i = 0; i < size; i++) {
                    var child = listToRemove[i];
                    this.erase(child);
                }
            } else {
                if (size === undefined) size = listToRemove.size;

                for (var _i = 0; _i < size; _i++) {
                    var _child = listToRemove.childs[_i];
                    this.erase(_child);
                }
            }
        }
    }, {
        key: 'eraseIndexedList',
        value: function eraseIndexedList(listToRemove) {

            var size = listToRemove.length;

            if (Array.isArray(listToRemove)) {

                for (var i = 0; i < size; i++) {
                    var index = listToRemove[i];
                    this.eraseAt(index);
                }
            } else {
                for (var _i2 = 0; _i2 < size; _i2++) {
                    var _index = listToRemove.childs[_i2];
                    this.eraseAt(_index);
                }
            }
            return this;
        }
    }, {
        key: 'pop',
        value: function pop() {
            return this.childs.pop();
        }
    }, {
        key: 'popFront',
        value: function popFront() {
            return this.childs.shift();
        }
    }, {
        key: 'has',
        value: function has(child) {
            return this.childs.indexOf(child) > -1;
        }
    }, {
        key: 'hasAt',
        value: function hasAt(index) {
            return this.childs[index] !== undefined;
        }
    }, {
        key: 'empty',
        value: function empty() {
            return this.childs.length === 0;
        }
    }, {
        key: 'clear',
        value: function clear() {
            /*let i = this.childs.length;
              while(i--) {
                this.erase(this.childs[i]);
            }*/

            this.childs.length = 0;

            return this;
        }
    }, {
        key: 'splice',
        value: function splice(start, count, items) {
            if (items === undefined) return this.childs.splice(start, count);else return this.childs.splice(start, count, items);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.clear();
            this.childs = [];
            this.parent = null;
        }
    }, {
        key: 'concat',
        value: function concat(otherList, clearOther) {
            if (clearOther === undefined) clearOther = false;

            if (clearOther) {
                this.childs = this.childs.concat(otherList.childs.splice(0));
            } else {
                this.childs = this.childs.concat(otherList.childs);
            }

            return this;
        }
    }, {
        key: 'each',
        value: function each(callback, context) {
            //let params = [];

            var content = this.childs;
            var r = void 0;
            // let istart = (context === undefined) ? 1 : 2;

            // for (let i = istart; i < arguments.length; i++)
            //     params.push(arguments[i]);

            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                args[_key - 2] = arguments[_key];
            }

            for (var i = 0; i < content.length; i++) {

                if (context === undefined) {
                    r = callback(content[i], i, args);
                } else {
                    r = callback.call(context, content[i], i, args);
                }

                if (r !== undefined) {
                    return r;
                }
                //break;
            }

            return r;
        }
    }, {
        key: 'sort',
        value: function sort(predicate) {
            if (predicate === undefined) return;
            return (0, _MergeSort2.default)(this.childs, predicate);

            //childs.sort(predicate);
        }
    }, {
        key: 'find',
        value: function find(predicate) {
            if (predicate === undefined) return;

            var size = this.childs.length;

            for (var i = 0; i < size; i++) {
                if (predicate(this.childs[i])) {
                    return this.childs[i];
                }
            }

            return null;
        }
    }, {
        key: 'swap',
        value: function swap(childA, childB) {

            if (childA === childB) return;

            var idx0 = this.indexOf(childA);
            var idx1 = this.indexOf(childB);

            if (idx0 < 0 || idx1 < 0) {
                throw new Error('DataList.swap: Could not swap childrens. The objects are not in the list.');
            }

            this.list[idx0] = childA;
            this.list[idx1] = childB;

            return this;
        }
    }, {
        key: 'swapByIndex',
        value: function swapByIndex(indexA, indexB) {
            if (indexA === indexB) return;

            var cA = this.at(indexA);
            var cB = this.at(indexB);

            if (cA === undefined || cB === undefined) {
                throw new Error('DataList.swapByIndex: Could not swap childrens by index. The objects are not in the list.');
            }

            this.list[indexA] = cA;
            this.list[indexB] = cB;

            return this;
        }
    }, {
        key: 'reverse',
        value: function reverse() {
            this.childs.reverse();
            return this;
        }
    }, {
        key: 'content',
        value: function content() {
            return this.childs;
        }
    }, {
        key: 'size',
        get: function get() {
            return this.childs.length;
        }
    }, {
        key: 'length',
        get: function get() {
            return this.childs.length;
        }
    }]);
    return DataList;
}();

exports.default = DataList;

/***/ }),

/***/ "./structures/Map.js":
/*!***************************!*\
  !*** ./structures/Map.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "../node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// DataMap simple class
var DataMap = function () {
  function DataMap() {
    (0, _classCallCheck3.default)(this, DataMap);

    this._content = {};
    this._size = 0;
  }

  (0, _createClass3.default)(DataMap, [{
    key: "set",


    /* 
    Add or set value to the map
    key = keyName
    value = value
    */
    value: function set(key, value) {
      return this.insert(key, value);
    }
  }, {
    key: "insert",
    value: function insert(key, value) {
      if (!this.has(key)) {
        this._size++;
      }

      this._content[key] = value;

      return this;
    }
  }, {
    key: "get",
    value: function get(key) {

      if (key === undefined) return null;

      if (this.has(key)) {
        return this._content[key];
      } else {
        return null;
      }
    }
  }, {
    key: "at",
    value: function at(index) {
      var n = 0;
      for (var key in this._content) {
        if (index === n) {
          return this._content[key];
        }
        n++;
      }

      return null;
    }
  }, {
    key: "has",
    value: function has(key) {
      return this._content.hasOwnProperty(key);
    }
  }, {
    key: "contains",
    value: function contains(value) {
      for (var key in this._content) {
        if (entries[key] === value) {
          return true;
        } else continue;
      }

      return false;
    }
  }, {
    key: "keys",
    value: function keys() {
      return (0, _keys2.default)(this._content);
    }
  }, {
    key: "values",
    value: function values() {
      var values = [];
      var content = this._content;

      for (var key in content) {
        values.push(entries[key]);
      }return values;
    }
  }, {
    key: "remove",
    value: function remove(key) {

      if (!this.has(key)) return null;

      var prop = this._content[key];
      delete this._content[key];
      this._size--;
      return prop;
    }
  }, {
    key: "erase",
    value: function erase(key) {

      if (!this.has(key)) return false;

      delete this._content[key];
      this._size--;

      return true;
    }

    /*eraseAt(key) {
        //if (!this.hasTagInKey(key))
      //  return false;
        this._size--;
       delete this._content[key];
      }*/

  }, {
    key: "eraseList",
    value: function eraseList(listToRemove) {

      if (listToRemove === undefined) return this;

      var size = listToRemove.length;

      if (Array.isArray(listToRemove)) {

        for (var i = 0; i < size; i++) {
          var index = listToRemove[i];
          this.erase(index);
        }
      }

      return this;
    }

    /*deleteByIndexedArray(array) {
      for (let i = 0; i < array.length; i++) {
        delete this._content[array[i]];
        this._size--;
      }
      }*/

  }, {
    key: "clear",
    value: function clear() {

      for (var property in this._content) {
        delete this._content[property];
      }this._size = 0;

      return this;
    }
  }, {
    key: "slowSize",
    value: function slowSize() {
      return (0, _keys2.default)(_contents).length;
    }
  }, {
    key: "each",
    value: function each(callback, context) {
      var content = this._content;
      var r = void 0;
      if (context === undefined) {
        for (var property in content) {
          r = callback(property, content[property]);
          if (r !== undefined) break;
        }
      } else {
        for (var _property in content) {
          r = callback.call(context, _property, content[_property]);
          if (r !== undefined) break;
        }
      }

      return r;
    }
  }, {
    key: "find",
    value: function find(predicate) {

      if (predicate === undefined) return;

      var content = this._content;

      for (var property in content) {

        if (predicate(property, content[property])) {
          return content[property];
        }
      }

      return null;
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    }
  }]);
  return DataMap;
}();

exports.default = DataMap;

/***/ }),

/***/ "./structures/Set.js":
/*!***************************!*\
  !*** ./structures/Set.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _MergeSort = __webpack_require__(/*! ./useful/MergeSort */ "./structures/useful/MergeSort.js");

var _MergeSort2 = _interopRequireDefault(_MergeSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataSet = function () {
    function DataSet(elements) {
        (0, _classCallCheck3.default)(this, DataSet);

        this._content = [];
        this._size = 0;

        if (Array.isArray(elements)) {
            for (var i = 0; i < elements.length; i++) {
                this.insert(elements[i]);
            }
        }
    }

    (0, _createClass3.default)(DataSet, [{
        key: "insert",
        value: function insert(value) {
            if (this._content.indexOf(value) === -1) this._content.push(value);

            return this;
        }
    }, {
        key: "get",
        value: function get(value) {
            var index = this._content.indexOf(value);
            if (index > -1) {
                return this._content[index];
            } else {
                return null;
            }
        }
    }, {
        key: "at",
        value: function at(index) {
            return this._content[index];
        }
    }, {
        key: "has",
        value: function has(value) {
            return this._content.indexOf(value) > -1;
        }
    }, {
        key: "erase",
        value: function erase(value) {
            var idx = this._content.indexOf(value);

            if (idx > -1) this._content.splice(idx, 1);

            return this;
        }
    }, {
        key: "clear",
        value: function clear() {
            this._content.length = 0;
            return this;
        }
    }, {
        key: "each",
        value: function each(callback, context) {
            var content = this._content.slice();
            var size = content.length;
            var i;

            if (context) {
                for (i = 0; i < size; i++) {
                    if (callback.call(context, content[i], i) === false) break;
                }
            } else {
                for (i = 0; i < size; i++) {
                    if (callback(content[i], i) === false) break;
                }
            }

            return this;
        }
    }, {
        key: "sort",
        value: function sort(predicate) {
            if (predicate === undefined) return;
            return (0, _MergeSort2.default)(this._content, predicate);
        }
    }, {
        key: "content",
        value: function content() {
            return this._content;
        }
    }, {
        key: "size",
        get: function get() {
            return this._content.length;
        }
    }, {
        key: "length",
        get: function get() {
            return this._content.length;
        }
    }]);
    return DataSet;
}();

exports.default = DataSet;

/***/ }),

/***/ "./structures/index.js":
/*!*****************************!*\
  !*** ./structures/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Utils = exports.Utils = __webpack_require__(/*! ./useful */ "./structures/useful/index.js");
var Set = exports.Set = __webpack_require__(/*! ./Set */ "./structures/Set.js").default;
var Map = exports.Map = __webpack_require__(/*! ./Map */ "./structures/Map.js").default;
var List = exports.List = __webpack_require__(/*! ./List */ "./structures/List.js").default;

/***/ }),

/***/ "./structures/useful/MergeSort.js":
/*!****************************************!*\
  !*** ./structures/useful/MergeSort.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = MergeSort;

// http://www.stoimen.com/blog/2010/07/02/friday-algorithms-javascript-merge-sort/
// https://codereview.stackexchange.com/questions/87000/fast-merge-sort-in-javascript
function MergeSort(array, predicate) {
    var size = array.length;

    if (size < 2) return array;

    if (predicate === undefined) {
        predicate = function predicate(a, b) {
            return a < b ? -1 : a === b ? 0 : 1;
        };
    }

    /*function merge(left, right)
    {
        var result = [];
           while (left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
     
        while (left.length)
            result.push(left.shift());
     
        while (right.length)
            result.push(right.shift());
     
        return result;
    }*/

    function merge(begin, begin_right, end) {
        // Create a copy of the left and right halves.
        var left_size = begin_right - begin;
        var right_size = end - begin_right;
        var left = array.slice(begin, begin_right);
        var right = array.slice(begin_right, end);
        // Merge left and right halves back into original array.
        var i = begin,
            j = 0,
            k = 0;
        while (j < left_size && k < right_size) {
            if (predicate(left[j], right[k]) <= 0) array[i++] = left[j++];else array[i++] = right[k++];
        } // At this point, at least one of the two halves is finished.
        // Copy any remaining elements from left array back to original array.
        while (j < left_size) {
            array[i++] = left[j++];
        } // Copy any remaining elements from right array back to original array.
        while (k < right_size) {
            array[i++] = right[k++];
        }return array;
    }

    function msort(start, end) {
        var len = end - start;

        if (len < 2) return;

        var mid = start + (len >>> 1);
        //let left = list.slice(start, mid);
        //let right = list.slice(mid, end);
        msort(start, mid);
        msort(mid, end);
        return merge(start, mid, end);
    }

    //let mid = 0 + (size >>> 1);

    return msort(0, size); //mid,size);

}

/***/ }),

/***/ "./structures/useful/index.js":
/*!************************************!*\
  !*** ./structures/useful/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    MergeSort: __webpack_require__(/*! ./MergeSort */ "./structures/useful/MergeSort.js")
};

/***/ }),

/***/ "./system/DetectAudioFeatures.js":
/*!***************************************!*\
  !*** ./system/DetectAudioFeatures.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DetectAudioFeatures;
function DetectAudioFeatures(browser) {

    var audioFeatures = {
        webAudio: false,
        audioData: false,
        format: {
            ogg: false,
            mp3: false,
            wav: false,
            webm: false,
            dolby: false,
            opus: false
        }
    };

    audioFeatures.audioData = !!window['Audio'];
    audioFeatures.webAudio = !!(window['AudioContext'] || window['webkitAudioContext']);

    // test if we can play audio in the current document
    // Edge:
    // dolby: true
    // m4a: true
    // mp3: true
    // ogg: false
    // opus: false
    // wav: true
    // webm: false

    var element = document.createElement('audio');
    var result = !!element.canPlayType;

    if (result) {

        try {
            if (element.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '')) audioFeatures.format.ogg = true;

            if (element.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') || element.canPlayType('audio/opus;').replace(/^no$/, '')) audioFeatures.format.opus = true;

            if (element.canPlayType('audio/mpeg;').replace(/^no$/, '')) audioFeatures.format.mp3 = true;

            //  Mimetypes accepted:
            //  developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
            //  bit.ly/iphoneoscodecs
            if (element.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '')) audioFeatures.format.wav = true;

            if (element.canPlayType('audio/x-m4a;') || element.canPlayType('audio/aac;').replace(/^no$/, '')) audioFeatures.format.m4a = true;

            if (element.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')) audioFeatures.format.webm = true;

            if (element.canPlayType('audio/mp4;codecs="ec-3"') !== '') {
                if (browser.manufacturer.edge) {
                    audioFeatures.format.dolby = true;
                } else if (browser.manufacturer.safari && browser.version >= 9) {
                    if (/Mac OS X (\d+)_(\d+)/.test(navigator.userAgent)) {
                        var major = parseInt(RegExp.$1, 10);
                        var minor = parseInt(RegExp.$2, 10);

                        if (major === 10 && minor >= 11 || major > 10) {
                            audioFeatures.format.dolby = true;
                        }
                    }
                }
            }
        } catch (exception) {}
    }

    return audioFeatures;
}

/***/ }),

/***/ "./system/DetectBrowser.js":
/*!*********************************!*\
  !*** ./system/DetectBrowser.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DetectBrowser;
function DetectBrowser(userAgent) {

    var browser = {
        name: undefined,
        version: 0,
        manufacturer: {
            firefox: false,
            opera: false,
            ie: false,
            edge: false,
            chrome: false,
            blink: false,
            safari: false,
            silk: false
        }
    };

    /// MAYBE IS BETTER TODO WITH REGEX

    // Opera 8.0+
    browser.manufacturer.opera = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    browser.manufacturer.firefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    browser.manufacturer.safari = /constructor/i.test(window.HTMLElement) || function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
    }(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    browser.manufacturer.ie = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    browser.manufacturer.edge = !browser.manufacturer.edge && !!window.StyleMedia;

    // Chrome 1+
    browser.manufacturer.chrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    browser.manufacturer.blink = (browser.manufacturer.chrome || browser.manufacturer.opera) && !!window.CSS;

    /// GET VERSION

    var pattern = /(\w+)(?:\D+|\/)?((\d+)?\.?(\d+)?)?;?/;
    var match = pattern.exec(userAgent);
    var version = 0;

    browser.name = match[0];

    if (match[1] !== undefined) version = parseInt(match[1], 10);

    browser.version = version;

    return browser;
}

/***/ }),

/***/ "./system/DetectFullscreen.js":
/*!************************************!*\
  !*** ./system/DetectFullscreen.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DetectFullscreen;
function DetectFullscreen() {

    // https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API


    var fullscreenFeature = {
        available: false,
        cancel: '',
        //keyboard: false,
        request: ''
    };

    var vendorsActiveFullscreen = ['requestFullscreen', 'requestFullScreen', 'webkitRequestFullscreen', 'webkitRequestFullScreen', 'msRequestFullscreen', 'msRequestFullScreen', 'mozRequestFullScreen', 'mozRequestFullscreen'];

    var tempElement = document.createElement('div');

    for (var i = 0; i < vendorsActiveFullscreen.length; i++) {
        if (tempElement[vendorsActiveFullscreen[i]]) {
            fullscreenFeature.available = true;
            fullscreenFeature.request = vendorsActiveFullscreen[i];
            break;
        }
    }

    if (fullscreenFeature.available) {

        var vendorsCancelFullscreen = ['cancelFullScreen', 'exitFullscreen', 'webkitCancelFullScreen', 'webkitExitFullscreen', 'msCancelFullScreen', 'msExitFullscreen', 'mozCancelFullScreen', 'mozExitFullscreen'];

        for (var _i = 0; _i < vendorsCancelFullscreen.length; _i++) {
            if (document[vendorsCancelFullscreen[_i]]) {
                fullscreenFeature.cancel = vendorsCancelFullscreen[_i];
                break;
            }
        }
    }

    return fullscreenFeature;
}

/***/ }),

/***/ "./system/DetectOS.js":
/*!****************************!*\
  !*** ./system/DetectOS.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = DetectOS;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DetectOS(userAgent) {

    var silk = /Silk/.test(userAgent);

    // name, deviceType
    var info = {
        name: undefined, // pretty name
        mobile: false, // is mobile
        desktop: false, // is desktop
        os: { // operational system
            windows: false,
            windowsPhone: false,
            macOS: false,
            linux: false,
            android: false,
            iOS: false,
            chromeOS: false,
            kindle: false
        },
        environment: { // environment
            node: false,
            electron: false,
            cordova: false,
            nodewebkit: false,
            cocoonJS: false,
            cocoonApp: false,
            ejecta: false
        }
    };

    if (/Windows/.test(userAgent)) {
        info.name = 'Windows';
        info.os.windows = true;
    } else if (/Mac OS/.test(userAgent)) {
        info.name = 'MacOS';
        info.os.macOS = true;
    } else if (/Linux/.test(userAgent)) {
        info.name = 'Linux';
        info.os.linux = true;
    } else if (/Android/.test(userAgent)) {
        info.name = 'Android';
        info.os.android = true;
    } else if (/iP[ao]d|iPhone/i.test(userAgent)) {
        info.name = 'iOS';
        info.os.iOS = true;
    } else if (/Kindle/.test(userAgent) || /\bKF[A-Z][A-Z]+/.test(userAgent) || /Silk.*Mobile Safari/.test(userAgent)) {
        info.name = "Kindle";
        info.os.kindle = true;
    } else if (/CrOS/.test(userAgent)) {
        info.name = 'ChromeOS';
        info.os.chromeOS = true;
    }

    if (/Windows Phone/i.test(userAgent) || /IEMobile/i.test(userAgent)) {
        info.name = 'Windows Phone';
        info.os.android = false;
        info.os.iOS = false;
        info.os.macOS = false;
        info.os.windows = true;
        info.os.windowsPhone = true;
    }

    if (info.os.windows || info.os.macOS || info.os.linux && !silk || info.os.chromeOS) {
        info.desktop = true;
        info.mobile = false;
    }

    if (info.os.windowsPhone || /Windows NT/i.test(userAgent) && /Touch/i.test(userAgent)) {
        info.os.desktop = false;
        info.mobile = true;
    }

    if (window.cordova !== undefined) {
        info.environment.cordova = true;
    }

    if (typeof process !== 'undefined' && typeof process.versions.node !== 'undefined') {
        info.environment.node = true;
    }

    if (info.environment.node && (0, _typeof3.default)(process.versions) === 'object') {
        info.environment.nodeWebkit = !!process.versions['node-webkit'];
        info.environment.electron = !!process.versions.electron;
    }

    if (navigator.isCocoonJS) {
        info.environment.cocoonJS = true;

        try {
            info.environment.cocoonApp = typeof CocoonJS !== 'undefined';
        } catch (error) {
            info.environment.cocoonApp = false;
        }
    }

    if (window.ejecta !== undefined) {
        info.environment.ejecta = true;
    }

    return info;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "./system/FeatureDetection.js":
/*!************************************!*\
  !*** ./system/FeatureDetection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = FeatureDetection;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FeatureDetection(os) {

    var features = {
        canvas: false,
        svg: false,
        file: false,
        fileSystem: false,
        worker: false, // computationally expensive tasks
        pointerLock: false, // restrict mouse movement to an element
        vibration: false
    };

    features.canvas = !!window['CanvasRenderingContext2D'] || os.environment.cocoonJS;

    features.file = !!window['File'] && !!window['FileReader'] && !!window['FileList'] && !!window['Blob'];
    features.fileSystem = !!window['requestFileSystem'];

    features.worker = !!window['Worker'];

    features.pointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

    features.svg = (typeof SVGRect === 'undefined' ? 'undefined' : (0, _typeof3.default)(SVGRect)) !== undefined && document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1');

    window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

    if (navigator.vibrate) {
        features.vibration = true;
    }

    return features;
}

/***/ }),

/***/ "./system/PlatformEnvironment.js":
/*!***************************************!*\
  !*** ./system/PlatformEnvironment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _DetectOS = __webpack_require__(/*! ./DetectOS */ "./system/DetectOS.js");

var _DetectOS2 = _interopRequireDefault(_DetectOS);

var _DetectBrowser = __webpack_require__(/*! ./DetectBrowser */ "./system/DetectBrowser.js");

var _DetectBrowser2 = _interopRequireDefault(_DetectBrowser);

var _FeatureDetection = __webpack_require__(/*! ./FeatureDetection */ "./system/FeatureDetection.js");

var _FeatureDetection2 = _interopRequireDefault(_FeatureDetection);

var _DetectAudioFeatures = __webpack_require__(/*! ./DetectAudioFeatures */ "./system/DetectAudioFeatures.js");

var _DetectAudioFeatures2 = _interopRequireDefault(_DetectAudioFeatures);

var _DeepFreeze = __webpack_require__(/*! ../utils/object/DeepFreeze */ "./utils/object/DeepFreeze.js");

var _DeepFreeze2 = _interopRequireDefault(_DeepFreeze);

var _DetectFullscreen = __webpack_require__(/*! ./DetectFullscreen */ "./system/DetectFullscreen.js");

var _DetectFullscreen2 = _interopRequireDefault(_DetectFullscreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlatformEnvironment = function () {
    function PlatformEnvironment() {
        (0, _classCallCheck3.default)(this, PlatformEnvironment);


        this._userAgent = navigator.userAgent;
        this._osInfo = (0, _DetectOS2.default)(this._userAgent);
        this._browser = (0, _DetectBrowser2.default)(this._userAgent);
        this._features = (0, _FeatureDetection2.default)(this._osInfo);
        this._audio = (0, _DetectAudioFeatures2.default)(this._browser);
        this._fullscreen = (0, _DetectFullscreen2.default)();
    }

    (0, _createClass3.default)(PlatformEnvironment, [{
        key: "info",
        get: function get() {
            return this._userAgent;
        }
    }, {
        key: "platformName",
        get: function get() {
            return this._osInfo.name;
        }
    }, {
        key: "mobile",
        get: function get() {
            return this._osInfo.mobile;
        }
    }, {
        key: "desktop",
        get: function get() {
            return this._osInfo.desktop;
        }
    }, {
        key: "os",
        get: function get() {
            return this._osInfo.os;
        }
    }, {
        key: "environment",
        get: function get() {
            return this._osInfo.environment;
        }
    }, {
        key: "browserName",
        get: function get() {
            return this._browser.name;
        }
    }, {
        key: "browserVersion",
        get: function get() {
            return this._browser.version;
        }
    }, {
        key: "features",
        get: function get() {
            return this._features;
        }
    }, {
        key: "fullscreenInfo",
        get: function get() {
            return this._fullscreen;
        }
    }, {
        key: "supportFullscreen",
        get: function get() {
            return this._fullscreen.available;
        }
    }, {
        key: "supportAudio",
        get: function get() {
            return this._audio.audioData;
        }
    }, {
        key: "supportWebAudio",
        get: function get() {
            return this._audio.webAudio;
        }
    }, {
        key: "audioFormats",
        get: function get() {
            return this._audio.format;
        }
    }]);
    return PlatformEnvironment;
}();

var Environment = new PlatformEnvironment();

(0, _DeepFreeze2.default)(Environment);

exports.default = Environment;

/***/ }),

/***/ "./time/GameTime.js":
/*!**************************!*\
  !*** ./time/GameTime.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Wrapper class for game time

var GameTime = function () {
    function GameTime(game) {
        (0, _classCallCheck3.default)(this, GameTime);

        this.game = game;
    }

    (0, _createClass3.default)(GameTime, [{
        key: "init",
        value: function init(gameLoop) {
            this._updateStep = gameLoop.updateStep;
        }
    }, {
        key: "now",
        get: function get() {
            return this._updateStep.time;
        }
    }, {
        key: "fps",
        get: function get() {
            return this._updateStep.fps;
        }
    }, {
        key: "desiredFps",
        get: function get() {
            return this._updateStep.fpsDesired;
        }
    }, {
        key: "delta",
        get: function get() {
            return this._updateStep.deltaTime;
        }
    }, {
        key: "elapsed",
        get: function get() {
            return this._updateStep.elapsed;
        }
    }, {
        key: "rawDelta",
        get: function get() {
            return this._updateStep.hiDeltaTime;
        }
    }]);
    return GameTime;
}();

exports.default = GameTime;

/***/ }),

/***/ "./time/UpdateStep.js":
/*!****************************!*\
  !*** ./time/UpdateStep.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _RequestAnimationFrame = __webpack_require__(/*! ../dom/RequestAnimationFrame */ "./dom/RequestAnimationFrame.js");

var _RequestAnimationFrame2 = _interopRequireDefault(_RequestAnimationFrame);

var _ObjectGet = __webpack_require__(/*! ../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _MathUtils = __webpack_require__(/*! ../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UpdateStep = function () {
        function UpdateStep(game, config) {
                (0, _classCallCheck3.default)(this, UpdateStep);

                // CORE
                this.game = game;
                this.requestAnimationFrame = new _RequestAnimationFrame2.default(config.time.timeoutMode);
                this.isRunning = false;
                this.loop = null;
                this.render = null;

                // TIMER
                this.startTime = 0; // start time
                this.time = 0; // current hi-time
                this.previousTime = 0; // last hi-time
                this.elapsed = 0; // elapsed time
                this.hiDeltaTime = 0; // raw delta time
                this.deltaTime = 0; // delta time in miliseconds
                // FPS
                this.requireFpsUpdate = true;
                this.fpsDesired = _ObjectGet2.default.value(config, 'fps', 60);
                this.fps = this.fpsDesired;
                this.currentFps = 0;
                this._nextFpsUpdate = 0;
                this._framesThisSecond = 0;

                // ACCUMALATOR METHOD
                this.interpolation = false;
                this.timeStep = Math.ceil(1000 / this.fpsDesired);
                this.minTimeStep = this.timeStep * 1.25;
                this.accumalator = 0;
                this.accumulatorMax = this.timeStep * 10;
                this.updateLast = 0;
                this.updateAverageDelta = 0;
                this.frameCounter = 0;
        }

        (0, _createClass3.default)(UpdateStep, [{
                key: "init",
                value: function init(gameLoop) {

                        if (this.isRunning) return;

                        this.reset();

                        this.loop = gameLoop.loop.bind(gameLoop);
                        this.render = gameLoop.render.bind(gameLoop);

                        this.startTime = window.performance.now();

                        this.requestAnimationFrame.start(this.update.bind(this));

                        this.isRunning = true;
                }
        }, {
                key: "update",
                value: function update(timeStamp) {

                        this.hiDeltaTime = timeStamp - this.previousTime;

                        // current
                        this.time = timeStamp;

                        // game elapsed time
                        this.elapsed += this.hiDeltaTime;

                        // FPS Update
                        if (this.requireFpsUpdate) this.fpsUpdate(timeStamp);

                        // set previous time
                        this.previousTime = timeStamp;

                        // game loop
                        this.accumalatorMethod(this.hiDeltaTime, timeStamp);

                        // game render
                        this.render(this.hiDeltaTime);
                }
        }, {
                key: "fpsUpdate",
                value: function fpsUpdate(timeStamp) {

                        if (timeStamp > this._nextFpsUpdate) {
                                this.currentFps = 0.25 * this._framesThisSecond + 0.75 * this.fps;
                                this.fps = _MathUtils2.default.clamp(~~this.currentFps, 0, this.fpsDesired);

                                this._nextFpsUpdate = timeStamp + 1000;
                                this._framesThisSecond = 0;
                        }

                        this._framesThisSecond++;
                }
        }, {
                key: "accumalatorMethod",
                value: function accumalatorMethod(deltaTime, timeStamp) {

                        if (++this.frameCounter % this.frameRate === 0) {

                                this.frameCounter = 0;

                                this.accumalator += deltaTime; //Math.max(Math.min(this.timeStep * 3, this.elapsed),0);
                                this.accumulator = Math.min(this.accumalator, this.accumalatorMax); //, this.updateAverage);

                                var deltaUpdate = this.interpolation ? deltaTime : this.timeStep;
                                var accumulatorUpdateDelta = this.interpolation ? deltaUpdate : Math.max(deltaUpdate, this.updateAverageDelta);
                                this.deltaTime = deltaUpdate / 1000;

                                while (this.accumalator >= accumulatorUpdateDelta || this.interpolation) {

                                        var updateStart = window.performance.now();

                                        // UPDATE GAME
                                        this.loop(deltaUpdate / 1000.0, timeStamp);

                                        var updateLast = window.performance.now();
                                        this.updateAverageDelta = updateLast - updateStart;

                                        this.accumalator -= accumulatorUpdateDelta;
                                        if (this.interpolation) {
                                                this.accumalator = 0;
                                                break;
                                        }
                                }
                        }
                }
        }, {
                key: "accumalatorReset",
                value: function accumalatorReset() {
                        this.frameCounter = 0;
                        this.frameRate = ~~(0.5 + 60 / this.fpsDesired);
                        this.accumalator = 0;
                        this.timeStep = 1000 / this.fpsDesired;
                        this.accumulatorMax = this.stepSize * 10;
                }
        }, {
                key: "reset",
                value: function reset() {
                        var now = window.performance.now();

                        this.deltaTime = 0;
                        this.hiDeltaTime = 0;
                        this.time = now;
                        this.previousTimeTime = now;
                        this._nextFpsUpdate = now + 1000;
                        this._framesThisSecond = 0;

                        this.accumalatorReset();
                }
        }]);
        return UpdateStep;
}();

/*
if (this.game.systemInited) {

    this.time.update(time);

    if (this._spiraling > 1) {

        this.time.deltaTime = 0;
        this._spiraling = 0;
        this.time.accumalator = 0;

        this.render(this.time.accumulatorDelta);

    } else {

    var countFrames = 0;

    while (this.time.accumalator >= this.time.accumulatorDelta) {

      //  this.time.updateStart = window.performance.now();

        this.time.deltaTime = Math.min(this.time.accumalator,this.time.accumulatorDelta) / 1000;

        this.logic(this.time.deltaTime);

        //this.time.updateLast =  window.performance.now();
      //  this.time.updateAverage = this.time.updateLast - this.time.updateStart;

        this.time.accumalator -= this.time.accumulatorDelta;

        countFrames++;

        this.time.refresh();

        if (countFrames >= 240) { // SPIRAL
            //panic();
            this.time.accumalator = 0;

            break;
        }
    }

      if (countFrames > this._lastFrameCount)
         this._spiraling++;
     else if (countFrames < this._lastFrameCount)
        this._spiraling = 0;

        this._lastFrameCount = countFrames;

        this.render(this.time.accumalator/this.time.accumulatorDelta);

    }



}*/


exports.default = UpdateStep;

/***/ }),

/***/ "./transform/ComputeBounds.js":
/*!************************************!*\
  !*** ./transform/ComputeBounds.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComputeBounds;
function ComputeBounds(bounds, transform, width, height, origin) {

  if (origin === undefined) origin = { x: 0, y: 0 };

  var top = transform.matrix.transformPoint(-origin.x, -origin.y);
  var left = transform.matrix.transformPoint(width - origin.x, -origin.y);
  var bottom = transform.matrix.transformPoint(-origin.x, height - origin.y);
  var right = transform.matrix.transformPoint(width - origin.x, height - origin.y);

  bounds.min.x = Math.min(top.x, left.x, bottom.x, right.x);
  bounds.min.y = Math.min(top.y, left.y, bottom.y, right.y);
  bounds.max.x = Math.max(top.x, left.x, bottom.x, right.x);
  bounds.max.y = Math.max(top.y, left.y, bottom.y, right.y);
}

/***/ }),

/***/ "./transform/ComputeDelimiterPoint.js":
/*!********************************************!*\
  !*** ./transform/ComputeDelimiterPoint.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ComputeDelimiterPoint;
function ComputeDelimiterPoint(x, y, rotation, anchor) {

    var coord = { x: 0, y: 0 };

    if (anchor === undefined) {
        coord.x = x * rotation.x - y * rotation.y;
        coord.y = x * rotation.y - y * rotation.x;
    } else {

        var xa = x - anchor.x;
        var ya = y - anchor.y;
        // cx = anchor.x + ((x-anchor.x) * Math.cos(rotation)) - ((y-anchor.y) * Math.sin(rotation));
        coord.x = anchor.x + xa * rotation.x - ya * rotation.y;
        // cy = anchor.y - ((x-anchor.x) * Math.sin(rotation)) - ((y-anchor.y) * Math.cos(rotation));
        coord.y = anchor.y - xa * rotation.y - ya * rotation.x;
    }

    return coord;
}

/***/ }),

/***/ "./transform/Transform.js":
/*!********************************!*\
  !*** ./transform/Transform.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Vector = __webpack_require__(/*! ../math/Vector2 */ "./math/Vector2.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _Matrix = __webpack_require__(/*! ../math/Matrix3 */ "./math/Matrix3.js");

var _Matrix2 = _interopRequireDefault(_Matrix);

var _BoundingBox = __webpack_require__(/*! ../math/BoundingBox */ "./math/BoundingBox.js");

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Transform = function () {
  function Transform() {
    (0, _classCallCheck3.default)(this, Transform);


    this.matrix = new _Matrix2.default(1);
    this.position = new _Vector2.default(0, 0, this);
    this.scale = new _Vector2.default(1, 1, this);
    this.origin = new _Vector2.default(0, 0, this);
    this.angle = 0;
    this.rotation = 0;
    this._cosSin = { x: 1, y: 0 };
    this._oldRotation = -1;
    this._isDirty = true;
    //this.worldPosition = new Vector2(0,0);
    //this.worldScale =  new Vector2(1,1);
    //this.worldRotation = 0;
    //this.bounds = new BoundingBox(0,0,1,1); // the full bounds of the node - defined by render
    //this.globalBounds = new BoundingBox(0,0,1,1); // defined by render
  }

  (0, _createClass3.default)(Transform, [{
    key: 'markDirty',
    value: function markDirty() {
      this._isDirty = true;
    }
  }, {
    key: 'destroy',
    value: function destroy() {

      delete this.position;
      delete this.scale;
      delete this.matrix;
      delete this.worldPosition;
      delete this.worldScale;
      delete this.origin;
      delete this.bounds;
      delete this.globalBounds;
      delete this._cosSin;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.matrix.setIdentity();
      this._isDirty = true;
      this._cosSin.x = 1;
      this._cosSin.y = 0;
      this.position.set(0, 0);
      this.angle = 0;
      this.rotation = 0;
      this._oldRotation = 0;
      this.origin.set(0, 0);
      this.scale.set(0, 0);
    }
  }]);
  return Transform;
}();

exports.default = Transform;

/***/ }),

/***/ "./transform/UpdateBounds.js":
/*!***********************************!*\
  !*** ./transform/UpdateBounds.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateBounds;

var _ComputeDelimiterPoint = __webpack_require__(/*! ./ComputeDelimiterPoint */ "./transform/ComputeDelimiterPoint.js");

var _ComputeDelimiterPoint2 = _interopRequireDefault(_ComputeDelimiterPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateBounds(bounds, x, y, width, height, cosSin, origin) {

    var coords = [];

    coords[0] = (0, _ComputeDelimiterPoint2.default)(x, y, cosSin, origin);
    coords[1] = (0, _ComputeDelimiterPoint2.default)(x + width, y, cosSin, origin);
    coords[2] = (0, _ComputeDelimiterPoint2.default)(x, y + height, cosSin, origin);
    coords[3] = (0, _ComputeDelimiterPoint2.default)(x + width, y + height, cosSin, origin);

    bounds.min.x = Math.min(coords[0].x, coords[1].x, coords[2].x, coords[3].x);
    bounds.min.y = Math.min(coords[0].y, coords[1].y, coords[2].y, coords[3].y);

    bounds.max.x = Math.max(coords[0].x, coords[1].x, coords[2].x, coords[3].x);
    bounds.max.y = Math.max(coords[0].y, coords[1].y, coords[2].y, coords[3].y);
}

/***/ }),

/***/ "./transform/UpdateTransform.js":
/*!**************************************!*\
  !*** ./transform/UpdateTransform.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateTransform;

var _MathUtils = __webpack_require__(/*! ../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _Matrix = __webpack_require__(/*! ../math/Matrix3 */ "./math/Matrix3.js");

var _Matrix2 = _interopRequireDefault(_Matrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

* | a | b | x |
* | c | d | y |
* | 0 | 0 | 1 |

* | 0 | 3 | 6 | * | a | d | x |
* | 1 | 4 | 7 | * | b | e | y |
* | 2 | 5 | 8 | * | c | f | 1 |

*/

function UpdateTransform(transform, parentTransform) {

    //if (parentMatrix === undefined) parentMatrix = null;
    if (!transform._isDirty && !parentTransform._isDirty) return;

    transform.rotation = transform.angle * _MathUtils2.default.toRadian;

    // if (transform.rotation % MathUtils.TAU) {


    if (transform.rotation !== transform._oldRotation) {
        transform._oldRotation = transform.rotation;
        transform._cosSin.y = Math.sin(transform.rotation);
        transform._cosSin.x = Math.cos(transform.rotation);
    }

    transform.matrix.setModelMatrix(transform.position, transform.scale, transform._cosSin, transform.origin).concat(parentTransform.matrix);

    // } else {

    /*a  = transform.scale.x;
    d  = transform.scale.y;
    x =  transform.position.x;
    y =  transform.position.y;
    x -= transform.origin.x * a;
    y -= transform.origin.y * d;
      wt.a  = a  * pt.a;
    wt.b  = a  * pt.b;
    wt.c  = d  * pt.c;
    wt.d  = d  * pt.d;
    wt.x = x * pt.a + y * pt.c + pt.x;
    wt.y = x * pt.b + y * pt.d + pt.y;*/

    //  }

    //transform.worldPosition.set(wt.x ,wt.y);
    //transform.worldScale.set(Math.sqrt(wt.a * wt.a + wt.b * wt.b), Math.sqrt(wt.c * wt.c + wt.d * wt.d));
    //transform.worldRotation = Math.atan2(-wt.c, wt.d);
}

/***/ }),

/***/ "./transform/UpdateTransformBounds.js":
/*!********************************************!*\
  !*** ./transform/UpdateTransformBounds.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateTransformBounds;

var _MathUtils = __webpack_require__(/*! ../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _Vector = __webpack_require__(/*! ../math/Vector2 */ "./math/Vector2.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _ComputeDelimiterPoint = __webpack_require__(/*! ./ComputeDelimiterPoint */ "./transform/ComputeDelimiterPoint.js");

var _ComputeDelimiterPoint2 = _interopRequireDefault(_ComputeDelimiterPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateTransformBounds(bounds, frame, transform) {

    var coords = [];
    /* let scale = Vector2.abs(transform.scale);
     let pos = transform.position;
     let anchor = transform.origin;
     let size = {
       x : frame.width * scale.x,
       y : frame.height * scale.y
     };
    
     anchor.x *= scale.x;
     anchor.y *= scale.y;
     pos.x -= anchor.x;
     pos.y -= anchor.y;
     anchor.x += pos.x;
     anchor.y += pos.y;*/

    //coords[0] = ComputeDelimiterPoint( pos.x, pos.y, transform._cosSin, anchor);
    //coords[1] = ComputeDelimiterPoint( pos.x + size.x,  pos.y, transform._cosSin, anchor);
    //coords[2] = ComputeDelimiterPoint( pos.x , pos.y + size.y, transform._cosSin, anchor);
    //coords[3] = ComputeDelimiterPoint( pos.x + size.x , pos.y + size.y, transform._cosSin, anchor);

    var top = transform.matrix.transformPoint(0, 0);
    var left = transform.matrix.transformPoint(frame.width, 0);
    var bottom = transform.matrix.transformPoint(0, frame.height);
    var right = transform.matrix.transformPoint(frame.width, frame.height);

    bounds.min.x = Math.min(top.x, left.x, bottom.x, right.x);
    bounds.min.y = Math.min(top.y, left.y, bottom.y, right.y);
    bounds.max.x = Math.max(top.x, left.x, bottom.x, right.x);
    bounds.max.y = Math.max(top.y, left.y, bottom.y, right.y);
}

// position (vector)
// scale (vector)
// rotation (vector x = cos, y = sin)
/*
setup(pos, scale, rotation, anchor, width, height) {
    var coords = [];
  var negx = 1;
  var negy = 1;
    if (scale.x < 0)
        negx = -1;
  if (scale.y < 0)
        negy = -1;

    this.size.x = width*scale.x*negx;
  this.size.y = height*scale.y*negy;
  anchor.x *= scale.x*negx;
  anchor.y *= scale.y*negy;
  pos.x -= anchor.x;
  pos.y -= anchor.y;
  anchor.x += pos.x;
  anchor.y += pos.y;
    var callback = null;
    if (rotation instanceof  scintilla.Vector2)
      callback = this['calcCoordsCosSin'];
    else
      callback = this['calcCoords'];
    coords[0] = callback( pos.x, pos.y, anchor, rotation);
  coords[1] = callback( pos.x + this.size.x,  pos.y, anchor,rotation);
    coords[2] = callback( pos.x , pos.y + this.size.y, anchor,rotation);
  coords[3] = callback( pos.x + this.size.x , pos.y + this.size.y,anchor, rotation);

    this.min.x = Math.min(coords[0].x,coords[1].x,coords[2].x,coords[3].x);
  this.min.y = Math.min(coords[0].y,coords[1].y,coords[2].y,coords[3].y);
    this.max.x = Math.max(coords[0].x,coords[1].x,coords[2].x,coords[3].x);
  this.max.y = Math.max(coords[0].y,coords[1].y,coords[2].y,coords[3].y);
  this.center.x = pos.x+(this.max.x-this.min.x)/2;
  this.center.y = pos.y+(this.max.y-this.min.y)/2;
  this.box.set(this.min.x,this.min.y,this.max.x-this.min.x,this.max.y-this.min.y);
  }

setByGameObject(gameObject, local) {
    //if (gameObject.render != null) {
      if (local) {
      this.setup(gameObject.position,
              gameObject.scale,
              gameObject._cosSin,
              gameObject.render.origin,
              gameObject.render.width,
              gameObject.render.height
            );
    } else {
        var frame = gameObject.component['render'].frame;
        var pos = {x:gameObject.worldPosition.x, y:gameObject.worldPosition.y};
      var org = {
        x:gameObject.origin.x * frame.width,
        y:gameObject.origin.y * frame.height};
        pos.x += gameObject.game.camera.view.x;
      pos.y += gameObject.game.camera.view.y;
        this.setup(pos,
              gameObject.worldScale,
              gameObject.worldRotation,
              org,
              frame.width,
              frame.height
            );
    }

  return this;

}

setByShape(shape,position) {

  var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  var type = shape.getType();
    if (type == "Polygon") {
      var points = shape.getPoints();
      points.forEach(function (point) {
        minX = Math.min(minX, point.x);
        minY = Math.min(minY, point.y);
        maxX = Math.max(maxX, point.x);
        maxY = Math.max(maxY, point.y);
      });
  }
    if (position !== undefined) {
    minX += position.x;
    minY += position.y;
    maxX += position.x;
    maxY += position.y;
  }

  this.min.set(minX,minY);
  this.max.set(maxX,maxY)
  this.box.set(minX,minY,maxX-minX,maxY-minY);
  }
  calcCoordsCosSin(x, y, anchor, cos_and_sin) {
    var coord = {x:0,y:0};
    coord.x = anchor.x + ((x-anchor.x) * cos_and_sin.x) - ((y-anchor.y) * cos_and_sin.y);
  coord.y = anchor.y - ((x-anchor.x) * cos_and_sin.y) - ((y-anchor.y) * cos_and_sin.x);
      return coord;
  }
  calcCoords(x,y,anchor,rotation) {
    var coord = {x:0,y:0};
    coord.x = anchor.x + ((x-anchor.x) * Math.cos(rotation)) - ((y-anchor.y) * Math.sin(rotation));
  coord.y = anchor.y - ((x-anchor.x) * Math.sin(rotation)) - ((y-anchor.y) * Math.cos(rotation));
      return coord;
  }*/

/***/ }),

/***/ "./utils/Base64Utils.js":
/*!******************************!*\
  !*** ./utils/Base64Utils.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base64Utils = {
    decode: function decode(str) {
        return window.atob(str);
        // Base64.decode(encodedString);
    },
    decodeToUint32: function decodeToUint32(str) {
        var bin = window.atob(str);
        var len = bin.length;
        var bytes = new Array(len);

        for (var i = 0; i < len; i += 4) {
            bytes[i / 4] = (bin.charCodeAt(i) | bin.charCodeAt(i + 1) << 8 | bin.charCodeAt(i + 2) << 16 | bin.charCodeAt(i + 3) << 24) >>> 0;
        }

        return bytes;
    },
    encode: function encode(str) {
        return window.btoa(str);
        // Base64.encode(string);
    }
};

(0, _freeze2.default)(Base64Utils);

exports.default = Base64Utils;

/***/ }),

/***/ "./utils/Path.js":
/*!***********************!*\
  !*** ./utils/Path.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Path = {
  getExtension: function getExtension(filename) {
    return filename.substring(filename.lastIndexOf('.') + 1, filename.length) || "";
  },
  getFilename: function getFilename(path) {
    return path.split('\\').pop().split('/').pop() || path;
  },
  getFilenameWithoutExtension: function getFilenameWithoutExtension(path) {
    return this.removeExtension(this.getFilename(path));
  },
  removeExtension: function removeExtension(path) {
    return path.substr(0, path.lastIndexOf('.')) || path;
  },
  getPath: function getPath(path) {
    return path.substr(0, path.lastIndexOf("/") + 1) || "";
  },
  getRootPath: function getRootPath(path) {
    return path.substr(0, path.indexOf("/") + 1) || path;
  },
  getPathWithoutRoot: function getPathWithoutRoot(path) {
    var s = path.indexOf("/") + 1 || 0;
    var l = path.lastIndexOf("/") - s + 1 || path.length;
    return path.substr(s, l) || path;
  },
  getDirectoryName: function getDirectoryName(path) {
    var dir = path.split('/');
    var len = dir.length;
    if (len <= 1) return dir[dir.length - 1];else return dir[dir.length - 2];
  },
  getURL: function getURL(url, baseURL) {
    if (!url) return null;

    if (url.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/)) return url;else return baseURL + url;
  }
};

(0, _freeze2.default)(Path);

exports.default = Path;

/***/ }),

/***/ "./utils/Validate.js":
/*!***************************!*\
  !*** ./utils/Validate.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Validate = {
    isFunction: function isFunction(value) {
        // return (value instanceof Function);
        return typeof value === "function" && typeof value.nodeType !== "number";
    },
    isClass: function isClass(value) {
        return !!(value && value.constructor && value.call && value.apply);
    },
    isArray: function isArray(value) {
        return Array.isArray(value);
    },
    isNumber: function isNumber(value) {
        return !isNaN(value);
    },
    isString: function isString(value) {
        return typeof value === 'string' || value instanceof String;
    }
};

(0, _freeze2.default)(Validate);

exports.default = Validate;

/***/ }),

/***/ "./utils/object/DeepFreeze.js":
/*!************************************!*\
  !*** ./utils/object/DeepFreeze.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyNames = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-names */ "../node_modules/babel-runtime/core-js/object/get-own-property-names.js");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

exports.default = DeepFreeze;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// To do so, we use this function.
function DeepFreeze(obj) {

    // Retrieve the property names defined on obj
    var propNames = (0, _getOwnPropertyNames2.default)(obj);

    // Freeze properties before freezing self
    propNames.forEach(function (name) {
        var prop = obj[name];

        // Freeze prop if it is an object
        if ((typeof prop === 'undefined' ? 'undefined' : (0, _typeof3.default)(prop)) == 'object' && prop !== null) DeepFreeze(prop);
    });

    // Freeze self (no-op if already frozen)
    return (0, _freeze2.default)(obj);
}

/***/ }),

/***/ "./utils/object/Extend.js":
/*!********************************!*\
  !*** ./utils/object/Extend.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = Extend;

var _IsPlainObject = __webpack_require__(/*! ./IsPlainObject */ "./utils/object/IsPlainObject.js");

var _IsPlainObject2 = _interopRequireDefault(_IsPlainObject);

var _Validate = __webpack_require__(/*! ../Validate */ "./utils/Validate.js");

var _Validate2 = _interopRequireDefault(_Validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://api.jquery.com/jQuery.extend/
// Merge the contents of two or more objects together into the first object.
function Extend() {

    var options = void 0,
        name = void 0,
        src = void 0,
        copy = void 0,
        copyIsArray = void 0,
        clone = void 0;
    var target = arguments[0] || {};
    var i = 1;
    var length = arguments.length;
    var deep = false;

    // Handle a deep copy situation
    if (typeof target === "boolean") {
        deep = target;

        // Skip the boolean and the target
        target = arguments[i] || {};
        i++;
    }

    // Handle case when target is a string or something (possible in deep copy)
    if ((typeof target === "undefined" ? "undefined" : (0, _typeof3.default)(target)) !== "object" && !_Validate2.default.isFunction(target)) {
        target = {};
    }

    // Extend scintilla itself if only one argument is passed
    if (i === length) {
        target = this;
        i--;
    }

    for (; i < length; i++) {

        // Only deal with non-null/undefined values
        if ((options = arguments[i]) != null) {

            for (name in options) {

                src = target[name];
                copy = options[name];

                // Prevent never-ending loop
                if (target === copy) {
                    continue;
                }

                // Recurse if we're merging plain objects or arrays
                if (deep && copy && ((0, _IsPlainObject2.default)(copy) || (copyIsArray = Array.isArray(copy)))) {

                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];
                    } else {
                        clone = src && (0, _IsPlainObject2.default)(src) ? src : {};
                    }

                    // Never move original objects, clone them
                    target[name] = Extend(deep, clone, copy);

                    // Don't bring in undefined values
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }

    return target;
}

/***/ }),

/***/ "./utils/object/IsPlainObject.js":
/*!***************************************!*\
  !*** ./utils/object/IsPlainObject.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = IsPlainObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/// From jQuery

function HasOwn(classToType) {
    return classToType.hasOwnProperty;
}

function IsPlainObject(obj) {

    // Detect obvious negatives
    if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== 'object' || obj.nodeType || obj === obj.window) {
        return false;
    }

    // Objects with no prototype (e.g., `Object.create( null )`) are plain
    /*let proto = obj.getPrototypeOf;
      if (!proto)
        return true;*/

    try {
        // Objects with prototype are plain if they were constructed by a global Object function
        //  //!HasOwn.call(proto, 'constructor');
        if (obj.constructor && !{}.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')) {
            return false;
        }
    } catch (e) {
        return false;
    }

    return true;
}

/***/ }),

/***/ "./utils/object/MakeImmutable.js":
/*!***************************************!*\
  !*** ./utils/object/MakeImmutable.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

exports.default = MakeImmutable;

var _DeepFreeze = __webpack_require__(/*! ./DeepFreeze */ "./utils/object/DeepFreeze.js");

var _DeepFreeze2 = _interopRequireDefault(_DeepFreeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MakeImmutable(value, deep) {

    if (deep === undefined) deep = false;

    if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) {
            if (deep) {
                (0, _DeepFreeze2.default)(value[i]);
            } else {
                (0, _freeze2.default)(value[i]);
            }
        }
    } else {

        if (deep) {
            (0, _DeepFreeze2.default)(value);
        } else {
            (0, _freeze2.default)(value);
        }
    }

    return value;
}

/***/ }),

/***/ "./utils/object/ObjectGet.js":
/*!***********************************!*\
  !*** ./utils/object/ObjectGet.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ "../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectGetter = function () {
    function ObjectGetter() {
        (0, _classCallCheck3.default)(this, ObjectGetter);
    }

    (0, _createClass3.default)(ObjectGetter, [{
        key: 'value',
        value: function value(obj, key, defaultValue) {
            var type = typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj);

            if (!obj || type === 'number' || type === 'string') return defaultValue;else if (obj.hasOwnProperty(key) && obj[key] !== undefined) return obj[key];else return defaultValue;
        }

        // Get value in complex object

    }, {
        key: 'propertyValue',
        value: function propertyValue(source, key, defaultValue) {
            if (!source || typeof source === 'number') return defaultValue;else if (source.hasOwnProperty(key)) return source[key];else if (key.indexOf('.')) {
                var keys = key.split('.');
                var parent = source;
                var value = defaultValue;

                for (var i = 0; i < keys.length; i++) {
                    if (parent.hasOwnProperty(keys[i])) {
                        value = parent[keys[i]];
                        parent = parent[keys[i]];
                    } else {
                        value = defaultValue;
                        break;
                    }
                }

                return value;
            } else {
                return defaultValue;
            }
        }
    }]);
    return ObjectGetter;
}();

;

var ObjectGet = new ObjectGetter();

(0, _freeze2.default)(ObjectGet);

exports.default = ObjectGet;

/***/ })

/******/ });
});
//# sourceMappingURL=scintilla.dev.js.map