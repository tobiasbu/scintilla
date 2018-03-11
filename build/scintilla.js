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

/***/ "./core/cache.js":
/*!***********************!*\
  !*** ./core/cache.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Cache manager - holds file data
* @class Cache
* @constructor
*/
var Cache = function () {
    function Cache(game) {
        _classCallCheck(this, Cache);

        this.game = game;
        this._cache = {
            images: {},
            sounds: {}
        };
    }

    _createClass(Cache, [{
        key: 'addImage',
        value: function addImage(tag, url, data) {

            if (this.tagExists('images', tag)) {

                this.removeTagAt('images', tag);
            }

            var img = {
                tag: tag,
                url: url,
                data: data
            };

            console.log(data);

            this._cache.images[tag] = img;
        }
    }, {
        key: 'addSound',
        value: function addSound(tag, url, data, webAudio) {

            var decoded = false;

            if (!webAudio) {
                decoded = true;
            }

            var audio = {
                tag: tag,
                url: url,
                data: data,
                usingWebAudio: webAudio,
                decoded: decoded,
                isDecoding: false
            };

            this._cache.sounds[tag] = audio;
        }
    }, {
        key: 'soundDecoded',
        value: function soundDecoded(tag, data) {

            var sound = this.getAssetInfo("sounds", tag);

            sound.data = data;
            sound.decoded = true;
            sound.isDecoding = false;
        }
    }, {
        key: 'tagExists',
        value: function tagExists(cacheType, tag) {

            if (this._cache[cacheType][tag]) return true;

            return false;
        }
    }, {
        key: 'removeTagAt',
        value: function removeTagAt(cacheType, tag) {

            delete this._cache[cacheType][tag];
        }
    }, {
        key: 'getAsset',
        value: function getAsset(cacheType, tag) {
            // return the cache container

            if (this.tagExists(cacheType, tag)) {

                var asset = this._cache[cacheType][tag];

                return asset.data;
            } else {
                return null;
            }
        }
    }, {
        key: 'getAssetInfo',
        value: function getAssetInfo(cacheType, tag) {
            // return the raw data

            if (this.tagExists(cacheType, tag)) {

                var asset = this._cache[cacheType][tag];

                //if (cacheType == 'images')
                return asset;
            } else {
                return null;
            }
        }
    }, {
        key: 'clear',
        value: function clear() {

            //console.log(this._cache[property][tag]);

            for (var property in this._cache) {

                for (var tag in this._cache[property]) {

                    delete this._cache[property][tag];
                }
            }
        }

        // SOUND STUFF

    }]);

    return Cache;
}();

exports.default = Cache;

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

var _canvas = __webpack_require__(/*! ../render/canvas/canvas */ "./render/canvas/canvas.js");

var _canvas2 = _interopRequireDefault(_canvas);

var _cache = __webpack_require__(/*! ./cache */ "./core/cache.js");

var _cache2 = _interopRequireDefault(_cache);

var _loadmanager = __webpack_require__(/*! ../loader/loadmanager */ "./loader/loadmanager.js");

var _loadmanager2 = _interopRequireDefault(_loadmanager);

var _time = __webpack_require__(/*! ../time/time */ "./time/time.js");

var _time2 = _interopRequireDefault(_time);

var _updatetime = __webpack_require__(/*! ../time/updatetime */ "./time/updatetime.js");

var _updatetime2 = _interopRequireDefault(_updatetime);

var _input = __webpack_require__(/*! ../input/input */ "./input/input.js");

var _input2 = _interopRequireDefault(_input);

var _render = __webpack_require__(/*! ../render/render */ "./render/render.js");

var _render2 = _interopRequireDefault(_render);

var _scenemanager = __webpack_require__(/*! ./scenemanager */ "./core/scenemanager.js");

var _scenemanager2 = _interopRequireDefault(_scenemanager);

var _physics = __webpack_require__(/*! ../physics/physics */ "./physics/physics.js");

var _physics2 = _interopRequireDefault(_physics);

var _debug = __webpack_require__(/*! ../others/debug */ "./others/debug.js");

var _debug2 = _interopRequireDefault(_debug);

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

            this.canvas = _canvas2.default.create(this.parent, this.width, this.height);
            this.context = this.canvas.getContext("2d", { alpha: false });

            this.cache = new _cache2.default(this);
            this.load = new _loadmanager2.default(this);
            this.time = new _time2.default(this);
            //this.universe = new scintilla.Universe(this);
            //this.world = new scintilla.World(this);
            //this.draw = new scintilla.Draw(this);
            this.render = new _render2.default(this, this.canvas, this.context);
            this.scene = new _scenemanager2.default(this);
            this.input = new _input2.default(this);
            //this.instance = new scintilla.Creator(this,this.world);
            //this.component = new scintilla.GameComponents(this);
            //this.animationCache = new scintilla.AnimationCache(this);
            //this.sound = new scintilla.SoundManager(this);
            //this.pool = new scintilla.Pool(this);
            this.physics = new _physics2.default(this);

            if (this.debugMode) this.debug = new _debug2.default(this);

            this.time.start();
            this.input.init();
            //this.sound.start();
            //this.world.start();

            this.updateGameMethod = new _updatetime2.default(this, this.timeMode);
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
            //this.universe.preUpdate(timeStep);


            //this.world.camera.update();

            //this.universe.update(timeStep);
            this.physics.update();
            //this.sound.update();

            //this.universe._updateTransform();

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

/***/ "./core/scenemanager.js":
/*!******************************!*\
  !*** ./core/scenemanager.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _map = __webpack_require__(/*! ../structures/map */ "./structures/map.js");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SceneManager = function () {
    function SceneManager(game) {
        _classCallCheck(this, SceneManager);

        this.game = game;
        this._scenes = new _map2.default();

        this.current_scene_name = '';
        this.change_scene = null;

        this._setup = false;
        this._clearCache = false;

        // callbacks
        this.current_scene = null;
        this.onStartCallback = null;
        this.onLoadingCallback = null;
        this.onLoadingRenderCallback = null;
        this.onPreloadCallback = null;
        this.onUpdateCallback = null;
        this.onRenderCallback = null;
        this.onDestroyCallback = null;
    }

    _createClass(SceneManager, [{
        key: 'add',
        value: function add(sceneName, scene) {

            var newScene;

            if (scintilla.Scene.prototype.isPrototypeOf(scene)) {
                newScene = scene;
                newScene.game = this.game;
            } else newScene = null;

            if (newScene != null) this._scenes.set(sceneName, newScene);
        }
    }, {
        key: 'new',
        value: function _new(sceneName) {

            if (this._scenes.has(sceneName)) {
                throw "Could not create new Scene. The scene name \"" + name + "\" already exists.";
                return null;
            }

            var newScene = new scintilla.Scene(this.game);
            this._scenes.set(sceneName, newScene);

            return newScene;
        }
    }, {
        key: 'set',
        value: function set(sceneName, clearCache) {

            if (clearCache === undefined) {
                clearCache = false;
            }

            this.change_scene = sceneName;
            this._clearCache = clearCache;
        }
    }, {
        key: 'restart',
        value: function restart(clearCache) {

            if (clearCache === undefined) {
                clearCache = false;
            }

            this.change_scene = this.current_scene_name;
            this._clearCache = clearCache;
        }
    }, {
        key: 'remove',
        value: function remove(sceneName) {

            if (this.current_scene_name === sceneName) {

                this.current_scene = null;

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
    }, {
        key: 'setupScene',
        value: function setupScene(sceneName) {

            this.current_scene = this._scenes.get(sceneName);
            this.onStartCallback = this.current_scene['start'] || null;
            this.onLoadingCallback = this.current_scene['loading'] || null;
            this.onLoadingRenderCallback = this.current_scene['loadingRender'] || null;
            this.onPreloadCallback = this.current_scene['preload'] || null;
            this.onUpdateCallback = this.current_scene['update'] || null;
            this.onRenderCallback = this.current_scene['render'] || null;
            this.onDestroyCallback = this.current_scene['destroy'] || null;
            this.current_scene_name = sceneName;

            this.game.time.refresh();

            this.current_scene.camera = this.game.world.camera;

            this.game.instance.scene = this.current_scene;

            this._setup = false;
        }
    }, {
        key: 'clearCurrentScene',
        value: function clearCurrentScene() {

            if (this.current_scene_name) {

                if (this.onDestroyCallback) {
                    this.onDestroyCallback.call(this.current_scene, this.game);
                }

                if (this._clearCache) {
                    this.game.cache.clear();
                }

                this.game.world.destroyAllChilds();
            }
        }
    }, {
        key: 'preUpdate',
        value: function preUpdate() {

            if (this.game.systemInited && this.change_scene != null) {

                this.clearCurrentScene();

                this.setupScene(this.change_scene);

                if (this.current_scene_name !== this.change_scene) {
                    return;
                } else {
                    this.change_scene = null;
                }

                if (this.onPreloadCallback) {

                    this.game.load.reset();
                    this.onPreloadCallback.call(this.current_scene, this.game);

                    if (this.game.load.totalQueuedFiles() === 0) {
                        this.preloadComplete();
                    } else {

                        this.game.load.start();
                    }
                } else {

                    this.preloadComplete();
                }
            }
        }
    }, {
        key: 'preloadComplete',
        value: function preloadComplete() {

            //this.current_scene.quadtree = new tobiJS.Quadtree({x: 0, y: 0, width: 640,height: 480});

            if (this._setup === false && this.onLoadingCallback) {
                this.onLoadingCallback.call(this.current_scene, this.game);
            }

            if (this._setup === false && this.onStartCallback) {
                this._setup = true;
                this.onStartCallback.call(this.current_scene, this.game);
            } else {
                this._setup = true;
            }
        }
    }, {
        key: 'update',
        value: function update() {

            if (this._setup) {

                if (this.onUpdateCallback) {
                    this.onUpdateCallback.call(this.current_scene, this.game);
                }

                //this.current_scene._update();
            } else {

                if (this.onLoadingCallback) {
                    this.onLoadingCallback.call(this.current_scene, this.game);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {

            if (this._setup) {

                if (this.onRenderCallback) {
                    this.onRenderCallback.call(this.current_scene, this.game);
                }
            } else {

                if (this.onLoadingRenderCallback) {
                    this.onLoadingRenderCallback.call(this.current_scene, this.game);
                }
            }
        }
    }]);

    return SceneManager;
}();

exports.default = SceneManager;

/***/ }),

/***/ "./input/input.js":
/*!************************!*\
  !*** ./input/input.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keyboard = __webpack_require__(/*! ./keyboard */ "./input/keyboard.js");

var _keyboard2 = _interopRequireDefault(_keyboard);

var _mouse = __webpack_require__(/*! ./mouse */ "./input/mouse.js");

var _mouse2 = _interopRequireDefault(_mouse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Input = function () {
  function Input(game) {
    _classCallCheck(this, Input);

    this.game = game;
    this.mouse = null;
    this.keyboard = null;
  }

  _createClass(Input, [{
    key: "init",
    value: function init() {

      //this.mouse = new tobiJS.Mouse(this.game);
      this.keyboard = new _keyboard2.default(this.game);
      this.mouse = new _mouse2.default(this.game);
      this.keyboard.init();
      this.mouse.init();
    }
  }, {
    key: "update",
    value: function update() {

      this.keyboard.update();
      this.mouse.update();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.keyboard.reset();
      this.mouse.reset();
    }
  }]);

  return Input;
}();

exports.default = Input;

/***/ }),

/***/ "./input/key.js":
/*!**********************!*\
  !*** ./input/key.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeyEvent = exports.KeyEvent = {
    NONE: -1,
    IDLE: 0,
    PRESSED: 1,
    RELEASED: 2
};

var Key = function () {
    function Key(keycode, game) {
        _classCallCheck(this, Key);

        this.game = game;
        this.keyCode = keycode;

        this._enabled = true;
        this.status = false;
        this.press = false;
        this.release = false;

        this._event = scintilla.KeyEvent.NONE;

        this.pressTime = 0;
        this.pressDuration = -2500;
        this.releaseTime = 0;
        this.releaseDuration = -2500;
    }

    _createClass(Key, [{
        key: "onKeyDown",
        value: function onKeyDown() {
            if (!this._enabled) return;

            if (this.press) return;

            // set key properties
            this.status = true;
            this.press = true;
            this.release = false;

            // set press time duration
            this.pressTime = this.game.time.time;
            this.pressDuration = 0;
            this.releaseDuration = this.game.time.time - this.releaseTime;
        }
    }, {
        key: "onKeyUp",
        value: function onKeyUp() {
            if (!this._enabled) return;

            if (this.release) return;

            // set key properties
            this.status = false;
            this.press = false;
            this.release = true;

            // set press time duration
            this.releaseTime = this.game.time.time;
            this.pressDuration = this.game.time.time - this.pressTime;
            this.releaseDuration = 0;
        }
    }, {
        key: "update",
        value: function update() {
            if (!this._enabled) return;

            if (this.press) {
                this.pressDuration = this.game.time.time - this.pressTime;
            } else {
                this.releaseDuration = this.game.time.time - this.releaseTime;
            }

            if (this.press) {
                if (this.pressDuration == 0) {
                    this._event = scintilla.KeyEvent.PRESSED;
                }
            } else {

                if (this.releaseDuration == 0) {
                    this._event = scintilla.KeyEvent.RELEASED;
                } else {
                    this._event = scintilla.KeyEvent.IDLE;
                }
            }

            if (this._event == scintilla.KeyEvent.IDLE) {
                this._event = scintilla.KeyEvent.NONE;
            }
        }
    }, {
        key: "isPressing",
        value: function isPressing() {
            return this.status;
        }
    }, {
        key: "isPressed",
        value: function isPressed() {
            return this.press && this.pressDuration == 0;
        }
    }, {
        key: "isReleased",
        value: function isReleased() {
            return !this.press && this.releaseDuration == 0;
        }
    }, {
        key: "event",
        value: function event() {
            return this._event;
        }
    }, {
        key: "reset",
        value: function reset() {
            this.status = false;
            this._event = scintilla.KeyEvent.NONE;
            this.press = false;
            this.release = false;

            this.pressTime = 0;
            this.pressDuration = -2500;
            this.releaseTime = 0;
            this.releaseDuration = -2500;
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

    return Key;
}();

exports.default = Key;
;

/***/ }),

/***/ "./input/keyboard.js":
/*!***************************!*\
  !*** ./input/keyboard.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyCode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _key = __webpack_require__(/*! ./key */ "./input/key.js");

var _key2 = _interopRequireDefault(_key);

var _map = __webpack_require__(/*! ../structures/map */ "./structures/map.js");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Keyboard = function () {
  function Keyboard(game) {
    _classCallCheck(this, Keyboard);

    this.game = game;
    this.context = game.context;
    this.active = true;
    //this._keys = [];
    this._keyMapping = new _map2.default();
    this._keyWatch = new _map2.default();
    this._keyGarbage = [];
    //this._keyLock = [];
    //this._keyLockPressed = [];
    //this._keyDownDuration = [];
    this.lastKey = null;

    //callbacks
    this._onKeyDown = null;
    this._onKeyUp = null;
    this._onKeyPress = null;
  }

  _createClass(Keyboard, [{
    key: 'reset',
    value: function reset() {

      this._keyMapping.clear();
      this._keyWatch.clear();
      this._keyGarbage = [];
      for (var prop in scintilla.KeyCode) {

        if (scintilla.KeyCode.hasOwnProperty(prop)) {
          var value = scintilla.KeyCode[prop];
          this._keyMapping.set(value, new scintilla.Key(value, this.game));
        }
        /*if (scintilla.KeyCode.hasOwnProperty(prop)) {
            
                var value = scintilla.KeyCode[prop];
              this._keys[value] = false;
              this._keyLock[value] = scintilla.KeyEvent.NONE;
              this._keyLockPressed[value] = scintilla.KeyEvent.NONE;
              this._keyDownDuration[value] = 0;
        }*/
      }
    }
  }, {
    key: 'init',
    value: function init() {

      var self = this;

      this.reset();

      this._onKeyDown = function (event) {
        return self.processKeyDown(event);
      };

      this._onKeyUp = function (event) {
        return self.processKeyUp(event);
      };

      window.addEventListener('keydown', this._onKeyDown, false);
      window.addEventListener('keyup', this._onKeyUp, false);
    }
  }, {
    key: 'stop',
    value: function stop() {

      window.removeEventListener('keydown', this._onKeyDown);
      window.removeEventListener('keyup', this._onKeyUp);
      this._onKeyDown = null;
      this._onKeyUp = null;
      this._onKeyPress = null;

      this._keyMapping.clear();
    }
  }, {
    key: 'processKeyUp',
    value: function processKeyUp(event) {

      var key = event.keyCode;

      event.preventDefault();

      if (!this.active) return;

      var keyObj = this._keyMapping.get(key);
      keyObj.onKeyUp();

      /*this._keyLock[key] = scintilla.KeyEvent.RELEASE;
      this._keyLockPressed[key] = scintilla.KeyEvent.NONE;
      this._keys[key] = false;*/
    }
  }, {
    key: 'processKeyDown',
    value: function processKeyDown(event) {

      var key = event.keyCode;

      event.preventDefault();

      if (!this.active) return;

      this.lastKey = key;

      var keyObj = this._keyMapping.get(key);
      keyObj.onKeyDown();

      if (!this._keyWatch.has(key)) {
        this._keyWatch.set(key, keyObj);
      }

      //_keyMapping[]
      //this._keys[key] = true;
      /* if (this._keyLockPressed[key] != scintilla.KeyEvent.PRESSED && this._keyLockPressed[key] != scintilla.KeyEvent.PRESS) {
        this._keyLockPressed[key] = scintilla.KeyEvent.PRESSED;
        this._keyDownDuration[key] = 1;
      }
        this._keyLock[key] = scintilla.KeyEvent.PRESS;
      this._keys[key] = true;
      */
    }

    /*processKeyPress : function(event) { // commom characters
        var key = event.keyCode;
        event.preventDefault();
        if (!this.active)
        return;
    
        this._keyLock[key] = tobiJS.KeyEvent.PRESS;
        this._keys[key] = true;
    
      },*/

  }, {
    key: 'update',
    value: function update() {

      /*var keys = this._keyMapping.keys();
      for (var key in keys)
      {
        if (keys.hasOwnProperty(key)) {
            var value = this._keyMapping.get(key);
          value.update();
          }
      }*/

      //var keyswatch = this._keyWatch; //.keys();

      var self = this;

      this._keyWatch.each(function (key, value) {
        //var value = this._keyWatch.get(key);
        value.update();

        //console.log(value);

        if (value.event() == scintilla.KeyEvent.IDLE) {

          // value.reset();
          self._keyGarbage.push(key);
        }
      });
      /*for (var key in keys)
      {
        //console.log("UPDATE")
          if (keys.hasOwnProperty(key)) {
              var value = this._keyWatch.get(key);
            value.update();
              if (value.event() == scintilla.KeyEvent.IDLE)
            {
              // value.reset();
                this._keyGarbage.push(key);
            }
        }
      }*/

      if (this._keyGarbage.length > 0) {
        this._keyWatch.deleteByIndexedArray(this._keyGarbage);
        this._keyGarbage.splice(0, this._keyGarbage.length);
      }
    }
  }, {
    key: 'pressed',
    value: function pressed(keycode) {

      /*var keyLock = false;
      if (this._keyLockPressed[keycode] == scintilla.KeyEvent.PRESSED) {
        keyLock = true;
        this._keyLockPressed[keycode] = scintilla.KeyEvent.PRESS;
      }
        var hit = this._keys[keycode] && keyLock;*/

      //return hit;

      return this._keyMapping.get(keycode).isPressed();

      /* if (this._keyMapping.has(keycode))
        {
          
        } 
        else 
        {
          return false;
        }*/
    }
  }, {
    key: 'release',
    value: function release(keycode) {

      /*var keyLock = false;
        if (this._keyLock[keycode] ==  scintilla.KeyEvent.PRESSED ||
        this._keyLock[keycode] ==  scintilla.KeyEvent.PRESS ||
        this._keyLock[keycode] ==  scintilla.KeyEvent.NONE)
        keyLock = false;
      else
        keyLock = true;
        var hit = !this._keys[keycode] && keyLock;
        this._keyLock[keycode] = scintilla.KeyEvent.NONE;
        return hit;*/
      return this._keyMapping.get(keycode).isReleased();
    }
  }, {
    key: 'press',
    value: function press(keycode) {

      /*var key = this._keyWatch.get(keycode);
        if (key === undefined)
        return false;*/

      return key.status;

      /*var keyLock = false;
        if (this._keyLock[keycode] ==  scintilla.KeyEvent.RELEASE ||
        this._keyLock[keycode] ==  scintilla.KeyEvent.NONE)
        keyLock = false;
      else
        keyLock = true;
        var hit = this._keys[keycode] && keyLock;
        return hit;*/
    }
  }]);

  return Keyboard;
}();

exports.default = Keyboard;
var KeyCode = exports.KeyCode = {
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

/***/ }),

/***/ "./input/mouse.js":
/*!************************!*\
  !*** ./input/mouse.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MouseButton = exports.MouseButton = {
    LEFT_BUTTON: 0,
    MIDDLE_BUTTON: 1,
    RIGHT_BUTTON: 2,
    WHEEL_UP: 3,
    WHEEL_DOWN: 4
};

var MouseEvent = exports.MouseEvent = {
    NONE: 0,
    PRESS: 1,
    PRESSED: 2,
    RELEASE: 3
};

var Mouse = function () {
    function Mouse(game) {
        _classCallCheck(this, Mouse);

        this.x = 0;
        this.y = 0;
        this.game = game;
        this.canvas = game.canvas;
        this.button = 0;
        this.wheelDelta = 0;
        this.active = true;

        this._mouseButtons = [];
        this._mouseButtonsLocks = [];
        this._mouseButtonsLocksPressed = [];
        this._mouseDownDuration = [];

        //callbacks
        this._onMouseDown = null;
        this._onMouseMove = null;

        this.reset();
    }

    _createClass(Mouse, [{
        key: 'reset',
        value: function reset() {

            for (var i = 0; i < 3; i++) {

                this._mouseButtons[i] = false;
                this._mouseButtonsLocks[i] = MouseEvent.NONE;
                this._mouseButtonsLocksPressed[i] = MouseEvent.NONE;
                this._mouseDownDuration[i] = 0;
            }
        }
    }, {
        key: 'init',
        value: function init() {

            var self = this;

            this._onMouseDown = function (event) {
                return self.onMouseDown(event);
            };

            this._onMouseUp = function (event) {
                return self.onMouseUp(event);
            };

            this._onMouseMove = function (event) {
                return self.onMouseMove(event);
            };

            this.canvas.addEventListener('mousedown', this._onMouseDown, true);
            this.canvas.addEventListener('mousemove', this._onMouseMove, true);
            this.canvas.addEventListener('mouseup', this._onMouseUp, true);
            this.canvas.addEventListener('mouseover', this._onMouseOver, true);
            this.canvas.addEventListener('mouseout', this._onMouseOut, true);
        }
    }, {
        key: 'onMouseMove',
        value: function onMouseMove(event) {

            if (!this.active) return;

            var rect = this.canvas.getBoundingClientRect();

            this.x = Math.floor((event.clientX - rect.left) / (rect.right - rect.left) * this.canvas.width);
            this.y = Math.floor((event.clientY - rect.top) / (rect.bottom - rect.top) * this.canvas.height);
            //this.x = event.clientX - rect.left;
            //this.y = event.clientY - rect.top;
        }
    }, {
        key: 'onMouseDown',
        value: function onMouseDown(event) {

            if (!this.active) return;

            var value = event.button;

            if (this._mouseButtonsLocksPressed[value] != KeyEvent.PRESSED && this._mouseButtonsLocksPressed[value] != KeyEvent.PRESS) {
                this._mouseButtonsLocksPressed[value] = MouseEvent.PRESSED;
                this._mouseDownDuration[value] = 1;
            }

            this._mouseButtons[value] = true;
            this._mouseButtonsLocks[value] = MouseEvent.PRESS;

            event.preventDefault();
        }
    }, {
        key: 'onMouseUp',
        value: function onMouseUp(event) {

            if (!this.active) return;

            var value = event.button;

            this._mouseButtons[value] = false;
            this._mouseButtonsLocks[value] = MouseEvent.RELEASE;
            this._mouseButtonsLocksPressed[value] = MouseEvent.NONE;

            event.preventDefault();
        }
    }, {
        key: 'pressed',
        value: function pressed(button) {

            var buttonLock = false;

            if (this._mouseButtonsLocksPressed[button] == MouseEvent.PRESSED) {
                buttonLock = true;
                this._mouseButtonsLocksPressed[button] = MouseEvent.PRESS;
            }

            var hit = this._mouseButtons[button] && buttonLock;

            return hit;
        }
    }, {
        key: 'release',
        value: function release(button) {

            var buttonLock = false;

            if (this._mouseButtonsLocks[button] == MouseEvent.PRESSED || this._mouseButtonsLocks[button] == MouseEvent.PRESS || this._mouseButtonsLocks[button] == MouseEvent.NONE) buttonLock = false;else buttonLock = true;

            var hit = !this._mouseButtons[button] && buttonLock;

            this._mouseButtonsLocks[button] = MouseEvent.NONE;

            return hit;
        }
    }, {
        key: 'press',
        value: function press(button) {

            var buttonLock = false;

            if (this._mouseButtonsLocks[button] == MouseEvent.RELEASE || this._mouseButtonsLocks[button] == MouseEvent.NONE) buttonLock = false;else buttonLock = true;

            var hit = this._mouseButtons[button] && buttonLock;

            return hit;
        }
    }, {
        key: 'update',
        value: function update() {

            for (var i = 0; i < this._mouseButtons.length; i++) {

                if (this._mouseButtonsLocksPressed[i] == MouseEvent.PRESSED) {
                    if (this._mouseDownDuration[i] > 0) this._mouseDownDuration[i]--;else this._mouseButtonsLocksPressed[i] = MouseEvent.PRESS;
                } else continue;
            }
        }
    }, {
        key: 'posRelativeTo',
        value: function posRelativeTo(object) {

            var vec2 = { x: 0, y: 0 };

            vec2.x = this.x - object.x;
            vec2.y = this.y - object.y;

            return vec2;
        }
    }]);

    return Mouse;
}();

exports.default = Mouse;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.default = function () {
    function XHR() {
        _classCallCheck(this, XHR);
    }

    _createClass(XHR, null, [{
        key: "createFileRequest",
        value: function createFileRequest(file, settings) {
            var xhrSettings = XHR.merge(settings, file.xhrSettings);

            var xmlHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.open("GET", file.source, xhrSettings.async);

            xmlHttpRequest.responseType = file.xhrSettings.responseType;
            xmlHttpRequest.timeout = xhrSettings.timeout;

            xmlHttpRequest.onload = file.onLoad.bind(file);
            xmlHttpRequest.onerror = file.onError.bind(file);
            xmlHttpRequest.onprogress = file.onProgress.bind(file);

            xmlHttpRequest.send();

            return xmlHttpRequest;
        }
    }, {
        key: "createSettings",
        value: function createSettings(type, doAsync, timeout) {
            if (type === undefined) type = '';

            if (doAsync === undefined) doAsync = true;

            if (timeout === undefined) timeout = 0;

            var settings = {
                responseType: type,
                timeout: timeout,
                async: doAsync
            };

            return settings;
        }
    }, {
        key: "merge",
        value: function merge(a, b) {
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
    }]);

    return XHR;
}();

/***/ }),

/***/ "./loader/listinjector.js":
/*!********************************!*\
  !*** ./loader/listinjector.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListInjector = function () {
    function ListInjector() {
        _classCallCheck(this, ListInjector);

        this.list = {};
    }

    _createClass(ListInjector, [{
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

/***/ "./loader/loaderstate.js":
/*!*******************************!*\
  !*** ./loader/loaderstate.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LOADER_STATE = exports.AssetTypeHandler = undefined;

var _listinjector = __webpack_require__(/*! ./listinjector */ "./loader/listinjector.js");

var _listinjector2 = _interopRequireDefault(_listinjector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AssetTypeHandler = exports.AssetTypeHandler = new _listinjector2.default();

var LOADER_STATE = exports.LOADER_STATE = {
    NONE: 0,
    IDLE: 1,
    PENDING: 2,
    LOADING: 3,
    PROCESSING: 4,
    ERROR: 5,
    FINISHED: 6,
    DONE: 7

    //export var AssetTypeHandler;
    //export var LOADER_STATE;

};

/***/ }),

/***/ "./loader/loadmanager.js":
/*!*******************************!*\
  !*** ./loader/loadmanager.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loaderstate = __webpack_require__(/*! ./loaderstate */ "./loader/loaderstate.js");

var _set = __webpack_require__(/*! ../structures/set */ "./structures/set.js");

var _set2 = _interopRequireDefault(_set);

var _XHR = __webpack_require__(/*! ./XHR */ "./loader/XHR.js");

var _XHR2 = _interopRequireDefault(_XHR);

var _utils = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Class LoaderManager
var LoadManager = function () {
  function LoadManager(game) {
    _classCallCheck(this, LoadManager);

    this.game = game;
    this.cache = game.cache;

    this._filesQueue = new _set2.default();
    this._successFiles = new _set2.default();
    this._failedFiles = new _set2.default();
    this._processedFiles = new _set2.default();

    this._filesQueueCount = 0;
    this._loadedFilesCount = 0;

    this.isDownloading = false;
    this._totalFiles = 0;

    var gameConfig = game.config.loader;

    this.xhr = _XHR2.default.createSettings(_utils2.default.getValue(config, 'responseType', gameConfig.responseType), _utils2.default.getValue(config, 'async', gameConfig.async),
    //scintilla.Utils.getPropertyValue(config, 'user', gameConfig.loaderUser),
    //scintilla.Utils.getPropertyValue(config, 'password', gameConfig.loaderPassword),
    _utils2.default.getValue(config, 'timeout', gameConfig.timeout));

    this.progress = 0;
    this.path = '';
    this.baseURL = '';
    this.state = _loaderstate.LOADER_STATE.IDLE;

    _loaderstate.AssetTypeHandler.inject(this);
  }

  _createClass(LoadManager, [{
    key: 'setPath',
    value: function setPath(path) {
      if (path !== '' && path.substr(-1) !== '/') path = path.concat('/');

      this.path = path;

      return this;
    }
  }, {
    key: 'setBaseURL',
    value: function setBaseURL(baseUrl) {
      if (baseUrl !== '' && baseUrl.substr(-1) !== '/') {
        baseUrl = baseUrl.concat('/');
      }

      this.baseURL = baseUrl || '';

      return this;
    }
  }, {
    key: 'addAsset',
    value: function addAsset(asset) {
      if (!this.isOK()) return -1;

      asset.path = this.path;
      this._filesQueue.set(asset);
      this._filesQueueCount++;
      return asset;
    }
  }, {
    key: 'reset',
    value: function reset() {

      this.isDownloading = false;
      this._filesQueueCount = 0;
      this._successCount = 0;
      this._filesQueue.length = 0;
      this._fileErrorCount = 0;
      this.progress = 0;
      this.state = _loaderstate.LOADER_STATE.IDLE;
    }
  }, {
    key: 'start',
    value: function start() {

      if (!this.isOK()) {
        return -1;
      }

      this.progress = 0;
      this._loadedFilesCount = 0;
      this.state = _loaderstate.LOADER_STATE.LOADING;
      this._filesQueueCount = this._filesQueue.size;

      if (this._filesQueue.size === 0) {
        console.log(0);
        this.loadFinished();
      } else {
        this.isDownloading = true;
        this._successFiles.clear();
        this._failedFiles.clear();
        //this._filesQueue.clear();

        this.processFileQueue();
      }
    }

    /*end : function() {
        if (this.state === LOADER_STATE.PROCESSING)
          return;
    
      this.progress = 1;
      this.isDownloading = false;
      this.state = LOADER_STATE.PROCESSING;
        
      this._filesQueue.clear();
      this._failedFiles.length = 0;
      
      this.processFiles();
        this._successFiles.clear();
        this.state = LOADER_STATE.DONE;
      //this.game.scene.preloadComplete();
      },*/

  }, {
    key: 'processFileQueue',
    value: function processFileQueue() {

      var self = this;

      this._filesQueue.each(function (file) {

        //var file = this._filesQueue[i];

        if (file.state === _loaderstate.LOADER_STATE.FINISHED || file.state === _loaderstate.LOADER_STATE.PENDING) //  && this.inflight.size < this.maxParallelDownloads))
          {
            file.load(self);
          }
      });
    }
  }, {
    key: 'next',
    value: function next(concludedFile, hasError) {
      if (hasError) this._failedFiles.set(concludedFile);else this._successFiles.set(concludedFile);

      this._filesQueue.delete(concludedFile);
      this._loadedFilesCount++;

      this.updateProgress();

      if (this._loadedFilesCount < this._filesQueueCount) {
        console.log("asdasd");
        this.processFileQueue();
      } else {

        this.loadFinished();
      }
    }
  }, {
    key: 'loadFinished',
    value: function loadFinished() {
      if (this.state === _loaderstate.LOADER_STATE.PROCESSING) return;

      this.progress = 1;
      this.isDownloading = false;
      this.state = _loaderstate.LOADER_STATE.PROCESSING;

      this._processedFiles.clear();

      if (this._successFiles.size === 0) {

        this.processingDone();
      } else {

        console.log("asdasd");
        this._successFiles.each(function (file) {
          file.onProcessing(this.processingUpdate.bind(this));
        }, this);
      }
    }
  }, {
    key: 'processingUpdate',
    value: function processingUpdate(file) {

      if (file.state === _loaderstate.LOADER_STATE.ERROR) {
        this._failedFiles.set(file);

        /*if (file.linkFile)
        {
            this.queue.delete(file.linkFile);
        }*/
        return this.deleteFromSuccessQueue(file);
      }

      this._processedFiles.set(file);

      return this.deleteFromSuccessQueue(file);
    }
  }, {
    key: 'deleteFromSuccessQueue',
    value: function deleteFromSuccessQueue(file) {

      this._successFiles.delete(file);

      if (this._successFiles.size === 0 && this.state === _loaderstate.LOADER_STATE.PROCESSING) this.processingDone();
    }
  }, {
    key: 'processingDone',
    value: function processingDone() {
      console.log("done");
      this._successFiles.clear();
      this._filesQueue.clear();

      var cache = this.game.cache;

      if (this._processedFiles.size > 0) {
        this._processedFiles.each(function (file) {

          switch (file.type) {
            case 'image':
              {
                cache.addImage(file.tag, file.url, file.data);
                break;
              }
            case 'audio':
              {

                file.data = requestXHR.response;

                cache.addSound(file.tag, file.url, file.data, true);

                if (file.autoDecode) {
                  this.game.sound.decode(file.tag);
                }

                break;
              }
          }
        });

        this._processedFiles.clear();
      }

      this.state = _loaderstate.LOADER_STATE.DONE;

      this.game.scene.preloadComplete();
      console.log("asdasd");
    }
  }, {
    key: 'isLoading',
    value: function isLoading() {
      return this.state === _loaderstate.LOADER_STATE.LOADING || this.state === _loaderstate.LOADER_STATE.PROCESSING;
    }
  }, {
    key: 'isOK',
    value: function isOK() {
      return this.state === _loaderstate.LOADER_STATE.IDLE || this.state === _loaderstate.LOADER_STATE.DONE || this.state === _loaderstate.LOADER_STATE.ERROR;
    }
  }, {
    key: 'downloadIsDone',
    value: function downloadIsDone() {
      return this._filesQueue.length == this._successCount + this._fileErrorCount;
    }
  }, {
    key: 'updateProgress',
    value: function updateProgress() {

      var progress = 0;

      if (this._filesQueueCount != 0) {
        this.progress = 1 - this._loadedFilesCount / this._filesQueueCount;
      }
      //progress = parseFloat(this._successCount) / parseFloat(this._filesQueueCount);

      this.progress = progress;
    }
  }, {
    key: 'totalQueuedFiles',
    value: function totalQueuedFiles() {
      return this._filesQueueCount - this._successCount;
    }
  }]);

  return LoadManager;
}();

exports.default = LoadManager;
;

/***/ }),

/***/ "./math/vector.js":
/*!************************!*\
  !*** ./math/vector.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Class for points and vectors.
* @class Vector
* @constructor
*/
var Vector = function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x || 0;
    this.y = y || 0;
  }

  _createClass(Vector, [{
    key: "set",
    value: function set(x, y) {

      this.x = x;
      this.y = y || x;
    }
  }, {
    key: "move",
    value: function move(x, y) {

      this.x += x;
      this.y += y;
    }
  }, {
    key: "scale",
    value: function scale(x, y) {

      this.x *= x;
      this.y *= y || x;
      return this;
    }
  }, {
    key: "rotate",
    value: function rotate(radians) {

      var x = this.x;
      var y = this.y;
      this.x = x * Math.cos(radians) - y * Math.sin(radians);
      this.y = x * Math.sin(radians) + y * Math.cos(radians);
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

      return this;
    }
  }, {
    key: "copy",
    value: function copy(otherVector) {

      this.x = otherVector.x;
      this.y = otherVector.y;
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
      return this;
    }
  }, {
    key: "reverse",
    value: function reverse() {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    }
  }, {
    key: "add",
    value: function add(other) {
      this.x += other.x;
      this.y += other.y;
      return this;
    }
  }, {
    key: "sub",
    value: function sub(other) {
      this.x -= other.x;
      this.y -= other.y;
      return this;
    }
  }, {
    key: "perp",
    value: function perp() {

      var x = this.x;
      this.x = this.y;
      this.y = -x;
      return this;
    }
  }, {
    key: "dot",
    value: function dot(other) {
      return Vector.dot(this, other);
    }
  }, {
    key: "project",
    value: function project(other) {
      return Vector.project(this, other);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: "length",
    value: function length() {
      return Math.sqrt(this.squaredLenght());
    }
  }, {
    key: "squaredLenght",
    value: function squaredLenght() {
      return Vector.dot(this, this);
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
      var vec = new tobiJS.Vector(this.x / mag, this.y / mag);
      return vec;
    }
  }], [{
    key: "scalar",
    value: function scalar(a, b) {
      return a.x * b.y - a.y * b.x;
    }
  }, {
    key: "distance",
    value: function distance(a, b) {
      return Math.distance(a.x, a.y, b.x, b.y);
    }
  }, {
    key: "angleBetween",
    value: function angleBetween(a, b) {
      return Math.angleBetween(a.x, a.y, b.x, b.y);
    }
  }, {
    key: "dot",
    value: function dot(a, b) {
      return a.x * b.x + a.y * b.y;
    }
  }, {
    key: "project",
    value: function project(a, b) {
      var dp = Vector.dot(a, b);
      var proj = new Vector(dp / (b.x * b.x + b.y * b.y) * b.x, dp / (b.x * b.x + b.y * b.y) * b.y);
      return proj;
    }
  }, {
    key: "projectNormal",


    // project for unit vector
    value: function projectNormal(a, b) {
      var dp = Vector.dot(a, b);
      var proj = new Vector(dp / b.x, dp / b.y);
      return proj;
    }
  }, {
    key: "reflect",
    value: function reflect(vec, axis) {

      var r = Vector.project(vec, axis);
      r.scale(2);
      r.sub(vec);
      return r;
    }
  }, {
    key: "reflectNormal",
    value: function reflectNormal(vec, axis) {

      var r = Vector.projectNormal(vec, axis);
      r.scale(2);
      r.sub(vec);
      return r;
    }
  }, {
    key: "lerp",
    value: function lerp(a, b, t) {
      var vec = new Vector(scintilla.Math.lerp(a.x, b.x, t), scintilla.Math.lerp(a.y, b.y, t));
      return vec;
    }
  }]);

  return Vector;
}();

exports.default = Vector;

/***/ }),

/***/ "./others/debug.js":
/*!*************************!*\
  !*** ./others/debug.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Debug = function () {
  function Debug(game) {
    _classCallCheck(this, Debug);

    this.game = game;
    this.context = game.context;
    this.x = 8;
    this.y = 12;
    this.lineHeight = 14;
    this.column = 100;
    this.font = "12px Verdana";
    this.textColor = 'white';
    this.bgcolor = 'black';
    this.textShadow = 'black';
  }

  _createClass(Debug, [{
    key: 'test',
    value: function test() {

      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.strokeStyle = this.bgcolor;
      this.context.font = this.font;
      this.game.draw.alpha(0.5);
      this.game.draw.rectangle(0, 0, this.game.width, 14 * 4 + 16, this.bgcolor);
      this.game.draw.alpha(1);
      this.drawLine("FPS: " + Math.round(this.game.time.fps) + " / 60");
      this.drawLine("Instances in view: " + this.game.camera.instancesInView);
      this.drawLine("Instances count " + this.game.world.length);
      this.drawLine("Colliders count " + this.game.physics.length);
      this.x += this.game.width / 2;
      this.y = 12 + 8;
      this.drawLine("Sounds count " + this.game.sound.length);
      this.x = 8;
      this.y = 12 + 8;
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sat = __webpack_require__(/*! ./sat */ "./physics/sat.js");

var _sat2 = _interopRequireDefault(_sat);

var _satresponse = __webpack_require__(/*! ./satresponse */ "./physics/satresponse.js");

var _satresponse2 = _interopRequireDefault(_satresponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Physics = function () {
  function Physics(game) {
    _classCallCheck(this, Physics);

    this.game = null;
    this.sat = null;
    this.response = null;

    this.game = game;
    this.colliadables = [];
  }

  _createClass(Physics, [{
    key: 'init',
    value: function init() {

      this.sat = new _sat2.default();
      this.response = new _satresponse2.default();
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
    key: 'update',
    value: function update(time) {

      var size = this.colliadables.length;

      // CHECK COLLISION
      if (size < 2) // at least we must have 2 objects
        return;

      //var collision = 0;

      for (var i = 0; i < size; i++) {

        var objA = this.colliadables[i];
        var shapeA = objA.shape;

        if (objA._gameObject._selfDestroy || !objA._gameObject.active) continue;

        var jit = i + 1;

        if (jit >= size) break;

        for (var j = jit; j < size; j++) {

          var objB = this.colliadables[j];
          var shapeB = objB.shape;

          if (objB._gameObject._selfDestroy || !objB._gameObject.active) continue;

          // AABB check of the shapes
          if (objB.bounds.box.intersects(objA.bounds.box)) {

            // check SAT
            if (this.sat["test" + shapeA.getType() + shapeB.getType()].call(this, objA, objB, this.response.clear()) === true) {

              if (objA._gameObject['onCollision']) if (objA._gameObject.onCollision(objB._gameObject, this.response) !== false) {}

              if (objB._gameObject['onCollision']) if (objB._gameObject.onCollision(objA._gameObject, this.response) !== false) {}
            } else continue;
          } else continue;
        }
      }
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

/***/ "./physics/sat.js":
/*!************************!*\
  !*** ./physics/sat.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(/*! ../math/vector */ "./math/vector.js");

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SAT = function () {
    function SAT() {
        _classCallCheck(this, SAT);

        this.VECTORS = [];
        for (var v = 0; v < 10; v++) {
            VECTORS.push(new _vector2.default());
        }

        this.ARRAYS = [];
        for (var a = 0; a < 5; a++) {
            ARRAYS.push([]);
        }
    }

    _createClass(SAT, [{
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

/***/ "./physics/satresponse.js":
/*!********************************!*\
  !*** ./physics/satresponse.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SATResponse = function () {
    function SATResponse() {
        _classCallCheck(this, SATResponse);

        this.a = null;
        this.b = null;
        this.overlapN = new scintilla.Vector();
        this.overlapV = new scintilla.Vector();
        this.aInB = true;
        this.bInA = true;
        this.overlap = Number.MAX_VALUE;
        this.indexShapeA = -1;
        this.indexShapeB = -1;
        this.clear();
    }

    _createClass(SATResponse, [{
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

/***/ "./render/canvas/canvas.js":
/*!*********************************!*\
  !*** ./render/canvas/canvas.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Create a Canvas object.
 * @class Canvas
 */
exports.default = function () {
  function Canvas() {
    _classCallCheck(this, Canvas);
  }

  _createClass(Canvas, null, [{
    key: "create",
    value: function create(parent, width, height) {

      // default definition
      var defaultDef = {
        width: width,
        height: height,
        id: Math.random().toString(36).substr(2, 9),
        class: "",
        container: "body",
        style: "padding: 0;margin: auto;display: block;top: 0; bottom: 0;left: 0;right: 0;border:1px solid #d3d3d3;background-color: #f1f1f1;"
      };

      //var CO = Object.assign(defaultDef, options);
      var CO = defaultDef;
      var canvas = void 0;

      canvas = document.createElement('canvas');
      //canvas.parent = parent;
      canvas.setAttribute("id", CO.id);
      canvas.setAttribute("width", CO.width);
      canvas.setAttribute("height", CO.height);
      canvas.setAttribute("style", CO.style);
      //canvas.style.position = 'absolute';


      Canvas.appendDOM(canvas, parent);
      //document.body.appendChild(canvas);
      //var context = canvas.getContext("2d");


      //tobiJS.Canvas.list.parent = document.body;

      //console.log("Canvas Created!");

      return canvas;
    }
  }, {
    key: "appendDOM",
    value: function appendDOM(canvas, parent) {

      var appendTo = void 0;
      var overflowHidden = true;
      var target = null;

      //if (overflowHidden === undefined) { overflowHidden = true; }

      if (parent) {
        if (typeof parent === 'string') {
          // hopefully an element ID
          target = document.getElementById(parent);
        } else if ((typeof parent === "undefined" ? "undefined" : _typeof(parent)) === 'object' && parent.nodeType === 1) {
          // quick test for a HTMLelement
          target = parent;
        }
      }

      // Fallback, covers an invalid ID and a non HTMLelement object
      if (!target) {
        target = document.body;
      }

      /*if (overflowHidden && target.style)
      {
          target.style.overflow = 'hidden';
      }*/

      target.appendChild(canvas);
    }
  }]);

  return Canvas;
}();

/***/ }),

/***/ "./render/render.js":
/*!**************************!*\
  !*** ./render/render.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _map = __webpack_require__(/*! ../structures/map */ "./structures/map.js");

var _map2 = _interopRequireDefault(_map);

var _renderlayer = __webpack_require__(/*! ./renderlayer */ "./render/renderlayer.js");

var _renderlayer2 = _interopRequireDefault(_renderlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Render = function () {
    function Render(game, canvas, context) {
        _classCallCheck(this, Render);

        this.game = game;
        this.canvas = canvas;
        this.context = context;
        this.__enable = true;
        this.__renderLayers = [];
        this.__renderLayersMap = new _map2.default();
        this.addLayer('default');
    }

    _createClass(Render, [{
        key: 'addLayer',
        value: function addLayer(name) {
            if (this.contains(name)) {
                throw new Error("Render.add: There is already a RenderLayer called: \"" + name + "\".");
            }

            this.__renderLayersMap.set(name, this.__renderLayers.length);
            this.__renderLayers.push(new _renderlayer2.default(game, name));
        }
    }, {
        key: 'remove',
        value: function remove(name) {
            if (typeof name !== 'string') throw new Error("Render.remove: The value name is not a string.");

            if (name === "default") throw new Error("Render.remove: You can not remove the \"default\" layer.");

            if (!this.__renderLayersMap.has(name)) throw new Error("Render.remove: Could not remove layer. There is no layer named \"" + name + "\".");

            var index = this.__renderLayersMap.get(name);
            this.__renderLayers.splice(index, 1);
            this.__renderLayersMap.delete(name);
        }
    }, {
        key: 'contains',
        value: function contains(layerName) {
            if (typeof layerName !== 'string') throw new Error("Render.contains: The value name is not a string.");

            return this.__renderLayers.indexOf(layerName) > -1;
        }
    }, {
        key: '_render',
        value: function _render() {
            if (!this.__enable) return;

            this.context.setTransform(1, 0, 0, 1, 0, 0);
            this.context.globalCompositeOperation = 'source-over';
            this.context.clearRect(0, 0, this.canvas.width, this.game.height);
            this.context.fillStyle = '#fff'; //this.universe.backgroundColor;
            this.context.fillRect(0, 0, this.canvas.width, this.game.height);

            for (var i = 0; i < this.__renderLayers.length; i++) {
                if (this.__renderLayers[i].enable) {
                    this.__renderLayers[i].render();
                }
            }

            this.game.scene.render();

            if (this.game.debug != null) {

                this.context.setTransform(1, 0, 0, 1, 0, 0);
                this.game.debug.test();
                //console.log("asdasd");
            }
        }
    }]);

    return Render;
}();

exports.default = Render;

/***/ }),

/***/ "./render/renderlayer.js":
/*!*******************************!*\
  !*** ./render/renderlayer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RenderLayer = function () {
    function RenderLayer(game, layerName) {
        _classCallCheck(this, RenderLayer);

        this._name = layerName;
        this.game = game;
        this.__enable = true;
        this.__renderers = [];
        this.__isDirty = true;
    }

    // Add renderable components


    _createClass(RenderLayer, [{
        key: 'add',
        value: function add(renderer) {

            if (renderer === undefined) return;

            this.__renderers.push(renderer);
            this.renderer.__renderLayer = this;
            this.__isDirty = true;
        }
    }, {
        key: 'remove',
        value: function remove(renderer) {
            var index = this.__renderers.indexOf(renderer);

            if (index === -1) return;

            return this.removeChildAt(index);
        }
    }, {
        key: 'removeAt',
        value: function removeAt(index) {
            var child = this.getChildAt(index);
            this.__renderers.splice(index, 1);
            return child;
        }
    }, {
        key: 'at',
        value: function at(index) {
            if (index < 0 || index >= this.__renderers.length) {
                throw new Error('RenderLayer.at: Renderer at ' + index + ' does not exist in the render layer list: \"' + name + "\".");
            }
            return this.__renderers[index];
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.__enable) return;

            if (this.__isDirty) {
                this._updateDepth();
                this.__isDirty = false;
            }

            for (var i = 0; i < this.__renderers.length; i++) {
                this.__renderers[i].render(this.game.context);
            }
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.__renderers.splice(0, this.__renderers.length);
        }
    }, {
        key: '_updateDepth',
        value: function _updateDepth() {
            // sort ascending

            this.__renderers.sort(function (a, b) {

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

exports.default = RenderLayer;

/***/ }),

/***/ "./structures/map.js":
/*!***************************!*\
  !*** ./structures/map.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Map simple class
var Map = function () {
  function Map() {
    _classCallCheck(this, Map);

    this._content = {};
    this._size = 0;
  }

  /* 
  Add or set value to the map
  key = keyName
  value = value
  */


  _createClass(Map, [{
    key: "set",
    value: function set(key, value) {

      if (!this.has(key)) {
        this._size++;
      }

      this._content[key] = value;

      return this;
    }
  }, {
    key: "get",
    value: function get(key) {
      if (this.has(key)) {
        return this._content[key];
      } else {
        return null;
      }
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
      return Object.keys(this._content);
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
    key: "delete",
    value: function _delete(key) {

      if (!this.has(key)) return false;

      delete this._content[key];
      this._size--;

      return true;
    }
  }, {
    key: "deleteAt",
    value: function deleteAt(key) {

      //if (!this.hasTagInKey(key))
      //  return false;
      this._size--;
      delete this._content[key];
    }
  }, {
    key: "deleteByIndexedArray",
    value: function deleteByIndexedArray(array) {
      for (var i = 0; i < array.length; i++) {
        delete this._content[array[i]];
        this._size--;
      }
    }
  }, {
    key: "clear",
    value: function clear() {

      for (var property in this._content) {
        delete this._content[property];
      }this._size = 0;
    }
  }, {
    key: "slowSize",
    value: function slowSize() {
      return Object.keys(_contents).length;
    }
  }, {
    key: "each",
    value: function each(callback) {
      var content = this._content;

      for (var property in content) {

        if (callback(property, content[property]) === false) break;
      }

      return this;
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    }
  }]);

  return Map;
}();

exports.default = Map;

/***/ }),

/***/ "./structures/set.js":
/*!***************************!*\
  !*** ./structures/set.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Set = function () {
    function Set(elements) {
        _classCallCheck(this, Set);

        this._content = [];
        this._size = 0;

        if (Array.isArray(elements)) {
            for (var i = 0; i < elements.length; i++) {
                this.set(elements[i]);
            }
        }
    }

    _createClass(Set, [{
        key: "set",
        value: function set(value) {
            if (this._content.indexOf(value) === -1) this._content.push(value);

            return this;
        }
    }, {
        key: "at",
        value: function at(value) {
            var index = this._content.indexOf(value);
            if (index > -1) {
                return this._content[index];
            } else {
                return null;
            }
        }
    }, {
        key: "has",
        value: function has(value) {
            return this._content.indexOf(value) > -1;
        }
    }, {
        key: "delete",
        value: function _delete(value) {
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
        value: function each(callback, scope) {
            var content = this._content.slice();
            var size = content.length;
            var i;

            if (scope) {
                for (i = 0; i < size; i++) {
                    if (callback.call(scope, content[i], i) === false) break;
                }
            } else {
                for (i = 0; i < size; i++) {
                    if (callback(content[i], i) === false) break;
                }
            }

            return this;
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

    return Set;
}();

exports.default = Set;

/***/ }),

/***/ "./time/time.js":
/*!**********************!*\
  !*** ./time/time.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Time = function () {
  function Time(game) {
    _classCallCheck(this, Time);

    this.game = game;

    // START TIME
    this.startTime = 0;

    // date now
    this.time = 0;

    this.currentTime = 0;
    this.previousTime = 0;

    this.elapsed = 0;
    this.elapsed_mili = 0;

    // FOR TIME OUT MODE
    this.timeOut_toCall = 0;
    this.timeOut_expected = 0;

    // FPS
    this.fps = 60;
    this.fpsDesired = 60;
    this.timeStep_mili = 1 / this.fpsDesired;
    this.timeStep = 1000 / this.fpsDesired;

    // lag
    this.accumalator = 0;
    this.accumulatorMax = this.timeStep * 10;
    this.accumulatorDelta = this.timeStep;

    this.updateStart = 0;
    this.updateLast = 0;
    this.updateAverage = 0;
    this.updateDelta = 0;

    this.deltaTime = 0;

    this._lastFpsUpdate = 0;
    this._framesThisSecond = 0;
  }

  _createClass(Time, [{
    key: "start",
    value: function start() {

      this.startTime = Date.now();
      this.time = Date.now();
    }
  }, {
    key: "refresh",
    value: function refresh() {

      var previousDateNow = this.time;

      this.time = Date.now();

      this.elapsed_mili = this.time - previousDateNow;

      //this.currentTime =  this.previousTime = window.performance.now();
      //this.deltaTime = 0;
      //this.elapsed = 0;
      //this._framesThisSecond = 0;
    }
  }, {
    key: "update",
    value: function update(timestamp) {

      // DATE NOW ----------------------------------
      var previousDateNow = this.time;

      this.time = Date.now(); // current time

      this.elapsed_mili = this.time - previousDateNow;

      // timestamp --------------------

      // Throttle the frame rate.
      if (timestamp < this.previousTime + this.timeStep) {
        //requestAnimationFrame(mainLoop);
        return false;
      }

      // set prev
      this.previousTime = this.currentTime;

      // set current
      this.currentTime = timestamp;

      // delta time (MILISECONDS)
      this.elapsed = this.currentTime - this.previousTime;

      // delta time in  seconds
      this.deltaTime = 0; //this.elapsed / 1000.0;


      if (this.game.updateGameMethod._isTimeOutMode) {

        this.timeOut_toCall = Math.floor(Math.max(0, 1000.0 / this.fpsDesired - (this.timeOut_expected - time)));

        // time when the next call is expected if using timers
        this.timeOut_expected = time + this.timeOut_toCall;
      }

      // Track acumulate time


      //this.accumalator += this.elapsed; //Math.max(Math.min(this.timeStep * 3, this.elapsed), 0); //timestamp - this._lastTimeStamp;
      this.accumalator += Math.max(Math.min(this.timeStep * 3, this.elapsed), 0);

      this.accumulatorDelta = this.timeStep; //, this.updateAverage);

      //console.log(this.accumalator + " " + this.updateAverage);
      //this._lag = Math.min(this._lag, this.accumulatorMax);

      //  this.updateDelta = this.timeStep // interpolation = this.elapsed (deltatime); // or step
      //this.accumulatorUpdateDelta = this.updateDelta; // interpolation = Math.max(this.updateDelta, this.updateAverage);

      // FPS Update
      if (this.game.debugMode) this.fpsUpdate(timestamp);

      return true;

      //this.last_time = now;

      /*var elapsed = (this.current_time - this.last_time)/1000.0;
      this.last_time = this.current_time;
      this.delta_time = Math.min(elapsed, 1/60.0);*/

      //console.log(this.delta_time);

      //  Adjust accordingly.
      /*this.time_elapsed_mili = this.current_time - previousDateNow;
        // 'now' is currently still holding the time of the last call, move it into prevTime
      this.prev_time  = this.now_time;
        // update 'now' to hold the current time
      // this.now may hold the RAF high resolution time value if RAF is available (otherwise it also holds Date.now)
      this.now_time = time;
       // elapsed time between previous call and now - this could be a high resolution value
      this.time_elapsed = this.now_time - this.prev_time;*/

      //if (this.game.updateGameMethod._usingTimeout)
      //{
      // console.log('Time isSet', this._desiredFps, 'te', this.timeExpected, 'time', time);

      // time to call this function again in ms in case we're using timers instead of RequestAnimationFrame to update the game
      //this.timeToCall = Math.floor(Math.max(0, (1000.0 / this._desiredFps) - (this.timeExpected - time)));

      // time when the next call is expected if using timers
      //  this.timeExpected = time + this.timeToCall;

      // console.log('Time expect', this.timeExpected);
      //  }

      //  Paused but still running?
      /*  if (!this.game.paused)
        {
            //  Our internal Phaser.Timer
            this.events.update(this.time);
              if (this._timers.length)
            {
                this.updateTimers();
            }
        }*/
    }
  }, {
    key: "fpsUpdate",
    value: function fpsUpdate(timestamp) {

      // METHOD 2

      // count the number of time.update calls
      /*this._frameCount++;
      this._elapsedAccumulator += this.elapsed;
        // occasionally recalculate the suggestedFps based on the accumulated elapsed time
      if (this._frameCount >= this._desiredFps * 2)
      {
          // this formula calculates suggestedFps in multiples of 5 fps
          this.suggestedFps = Math.floor(200 / (this._elapsedAccumulator / this._frameCount)) * 5;
          this._frameCount = 0;
          this._elapsedAccumulator = 0;
      }
        this.msMin = Math.min(this.msMin, this.elapsed);
      this.msMax = Math.max(this.msMax, this.elapsed);
        this.frames++;
        if (this.now > this._timeLastSecond + 1000)
      {
          this.fps = Math.round((this.frames * 1000) / (this.now - this._timeLastSecond));
          this.fpsMin = Math.min(this.fpsMin, this.fps);
          this.fpsMax = Math.max(this.fpsMax, this.fps);
          this._timeLastSecond = this.now;
          this.frames = 0;
      }*/

      // METHOD 1
      if (timestamp > this._lastFpsUpdate + 1000) {
        this.fps = 0.25 * this._framesThisSecond + 0.75 * this.fps;

        this._lastFpsUpdate = timestamp;
        this._framesThisSecond = 0;
      }

      this._framesThisSecond++;
    }
  }]);

  return Time;
}();

exports.default = Time;

/***/ }),

/***/ "./time/updatetime.js":
/*!****************************!*\
  !*** ./time/updatetime.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UpdateTime = function () {
    function UpdateTime(game, timeout) {
        _classCallCheck(this, UpdateTime);

        if (timeout === undefined) {
            timeout = false;
        }

        this.game = game;
        this.isRunning = false;
        this.setTimeOutMode = timeout;
        this._isTimeOutMode = false;

        var vendors = ['ms', 'moz', 'webkit', 'o'];

        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; x++) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'];
        }

        //callbacks
        this._onLoopingCallback = null;
        this._timeOutCallback = null;
    }

    _createClass(UpdateTime, [{
        key: 'start',
        value: function start() {

            this.isRunning = true;

            var self = this;

            if (!window.requestAnimationFrame || this.setTimeOutMode) {
                this._isTimeOutMode = true;

                this._onLoopingCallback = function () {
                    return self.updateTimeout();
                };

                this._timeOutCallback = window.setTimeout(this._onLoopingCallback, 0);
            } else {

                this._isTimeOutMode = false;

                this._onLoopingCallback = function (time) {
                    return self.updateRequestAnimationFrame(time);
                };

                this._timeOutCallback = window.requestAnimationFrame(this._onLoopingCallback, this.game.canvas);
            }
        }
    }, {
        key: 'updateRequestAnimationFrame',
        value: function updateRequestAnimationFrame(time) {

            this.game.update(time);
            this._timeOutCallback = window.requestAnimationFrame(this._onLoopingCallback, this.game.canvas);
        }
    }, {
        key: 'updateTimeout',
        value: function updateTimeout() {

            this.game.update(Date.now());
            this._timeOutCallback = window.setTimeout(this._onLoopingCallback, this.game.time.timeOut_toCall);
        }
    }, {
        key: 'stop',
        value: function stop() {

            if (this._isTimeOutMode) {
                clearTimeout(this._timeOutCallback);
            } else {
                window.cancelAnimationFrame(this._timeOutCallback);
            }

            this.isRunning = false;
        }
    }]);

    return UpdateTime;
}();

exports.default = UpdateTime;

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

exports.default = new Utils();

/***/ })

/******/ });
});
//# sourceMappingURL=scintilla.js.map