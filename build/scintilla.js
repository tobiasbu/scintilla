(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["estest"] = factory();
	else
		root["estest"] = factory();
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

/***/ "./Scintilla.js":
/*!**********************!*\
  !*** ./Scintilla.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
* @author       Tobias Beise Ulrich
* @license      MIT
*
* @overview
*
* --- Scintilla ---
*
* v0.0.2
*
* tobiasbu.github.io
*
* Scintilla is simple 2D game engine for HTML5 games.
* The first version is only for browsers based in canvas.
*
*/

/**
* @namespace scintilla
*/
var scintilla = scintilla || {
  VERSION: '0.0.1',
  Game: __webpack_require__(/*! ./core/game */ "./core/game.js")
};

scintilla.ShapeType = {
  Rect: 1,
  Circle: 2,
  Polygon: 3
};

module.exports = scintilla;

global.scintilla = scintilla;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./core/config.js":
/*!************************!*\
  !*** ./core/config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = function Config(config) {
    _classCallCheck(this, Config);

    if (config === undefined) config = {};

    var callback = _utils2.default.getValue;
    var callback_2 = _utils2.default.getPropertyValue;

    // view and canvas
    this.width = callback(config, 'width', 640);
    this.height = callback(config, 'height', 480);
    this.parent = callback(config, 'parent', null);
    this.debug = callback(config, 'debug', false);

    // loader
    this.loader = {
        baseURL: callback_2(config, 'loader.baseURL', ''),
        path: callback_2(config, 'loader.path', ''),
        responseType: callback_2(config, 'loader.responseType', ''),
        async: callback_2(config, 'loader.async', true)
        /* this.loaderEnableParallel = GetValue(config, 'loader.enableParallel', true);
            this.loaderMaxParallelDownloads = GetValue(config, 'loader.maxParallelDownloads', 4);
            this.loaderCrossOrigin = GetValue(config, 'loader.crossOrigin', undefined);
            
            this.loaderUser = GetValue(config, 'loader.user', '');
            this.loaderPassword = GetValue(config, 'loader.password', '');
        this.loaderTimeout = GetValue(config, 'loader.timeout', 0);*/

    };
};

exports.default = Config;

/***/ }),

/***/ "./core/game.js":
/*!**********************!*\
  !*** ./core/game.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(/*! ./config */ "./core/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        _classCallCheck(this, Game);

        this.parent = 'body';
        this.width = 800;
        this.height = 600;

        // object
        this.config = new _config2.default(config);

        // boolean
        this.systemInited = false;
        this.isRunning = false;
        this.debugMode = false;

        // float
        this.timeMode = false;

        // time
        this._spiraling = 0;
        this._lastFrameCount = 0;

        //objects
        this.debug = null;
        this.cache = null;
        this.load = null;
        this.canvas = null;
        this.scene = null;
        this.sound = null;
        this.draw = null;
        this.render = null;
        this.universe = null;
        this.world = null;
        this.input = null;
        this.time = null;
        this.component = null;
        this.instance = null;
        this.animationCache = null;
        this.updateGameMethod = null;
        this.pool = null;

        this.context = null;

        this.parseConfiguration(this.config);

        this.init();
    }

    _createClass(Game, [{
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
        /**
          * Initialize engine
          *
          * @method tobiJS.Game#init()
          * @protected
          */

    }, {
        key: 'init',
        value: function init() {

            if (this.systemInited) return;

            this.canvas = scintilla.Canvas.create(this.parent, this.width, this.height);
            this.context = this.canvas.getContext("2d", { alpha: false });

            this.cache = new scintilla.Cache(this);
            this.load = new scintilla.LoadManager(this);
            this.time = new scintilla.Time(this);
            this.universe = new scintilla.Universe(this);
            this.world = new scintilla.World(this);
            this.draw = new scintilla.Draw(this);
            this.render = new scintilla.Render(this, this.canvas, this.context);
            this.scene = new scintilla.SceneManager(this);
            this.input = new scintilla.Input(this);
            this.instance = new scintilla.Creator(this, this.world);
            this.component = new scintilla.GameComponents(this);
            this.animationCache = new scintilla.AnimationCache(this);
            this.sound = new scintilla.SoundManager(this);
            this.pool = new scintilla.Pool(this);
            this.physics = new scintilla.Physics(this);

            if (this.debugMode) this.debug = new scintilla.Debug(this);

            this.time.start();
            this.input.init();
            this.sound.start();
            this.world.start();

            this.updateGameMethod = new scintilla.UpdateGame(this, this.timeMode);
            this.updateGameMethod.start();

            this.systemInited = true;
            this.isRunning = true;

            console.log("scintilla started!");
        }

        /**
          * core game loop
          *
          * @method tobiJS.Game#update()
          * @protected
          */

    }, {
        key: 'update',
        value: function update(time) {

            if (this.systemInited) {

                this.time.update(time);

                if (this._spiraling > 1) {

                    this.time.deltaTime = 0;
                    this._spiraling = 0;
                    this.time.accumalator = 0;

                    this.render._render(this.time.accumulatorDelta);
                } else {

                    var countFrames = 0;

                    while (this.time.accumalator >= this.time.accumulatorDelta) {

                        //  this.time.updateStart = window.performance.now();

                        this.time.deltaTime = Math.min(this.time.accumalator, this.time.accumulatorDelta) / 1000;

                        this.logic(this.time.deltaTime);

                        //this.time.updateLast =  window.performance.now();
                        //  this.time.updateAverage = this.time.updateLast - this.time.updateStart;

                        this.time.accumalator -= this.time.accumulatorDelta;

                        countFrames++;

                        this.time.refresh();

                        if (countFrames >= 240) {
                            // SPIRAL
                            //panic();
                            this.time.accumalator = 0;

                            break;
                        }
                    }

                    if (countFrames > this._lastFrameCount) this._spiraling++;else if (countFrames < this._lastFrameCount) this._spiraling = 0;

                    this._lastFrameCount = countFrames;

                    this.render._render(this.time.accumalator / this.time.accumulatorDelta);
                }
            }
        }
    }, {
        key: 'logic',
        value: function logic(timeStep) {

            this.scene.preUpdate();
            this.scene.update(timeStep);
            this.input.update();
            this.universe.preUpdate(timeStep);

            //this.world.camera.update();

            this.universe.update(timeStep);
            this.physics.update();
            this.sound.update();

            this.universe._updateTransform();
        }
    }, {
        key: 'destroy',
        value: function destroy() {

            this.updateGameMethod.destroy();
            this.physics.destroy();
            this.universe.destroy();
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

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, [{
        key: 'isFunction',
        value: function isFunction(obj) {
            return !!(obj && obj.constructor && obj.call && obj.apply);
        }
    }, {
        key: 'getValue',
        value: function getValue(obj, key, defaultValue) {
            var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);

            if (!obj || type === 'number' || type === 'string') return defaultValue;else if (obj.hasOwnProperty(key) && obj[key] !== undefined) return obj[key];else return defaultValue;
        }

        // Get value in complex object

    }, {
        key: 'getPropertyValue',
        value: function getPropertyValue(source, key, defaultValue) {
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
    }, {
        key: 'getFileExtension',
        value: function getFileExtension(filename) {
            return filename.substring(filename.lastIndexOf('.') + 1, filename.length) || "";
        }
    }, {
        key: 'getURL',
        value: function getURL(url, baseURL) {
            if (!url) return null;

            if (url.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/)) return url;else return baseURL + url;
        }
    }]);

    return Utils;
}();

;

exports.default = new Utils();

/***/ })

/******/ });
});
//# sourceMappingURL=scintilla.js.map