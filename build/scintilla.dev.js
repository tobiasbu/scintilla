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
* v0.0.1
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

  Core: __webpack_require__(/*! ./core */ "./core/index.js"),

  // DATA STRUCTURES
  Struct: __webpack_require__(/*! ./structures */ "./structures/index.js"),
  // RENDER
  Render: __webpack_require__(/*! ./render */ "./render/index.js"),
  // INPUT
  KeyCode: __webpack_require__(/*! ./input/keycode */ "./input/keycode.js"),
  MouseButton: __webpack_require__(/*! ./input/mousebutton */ "./input/mousebutton.js"),
  Input: __webpack_require__(/*! ./input */ "./input/index.js"),
  // MATH
  MathUtils: __webpack_require__(/*! ./math/mathutils */ "./math/mathutils.js"),
  Matrix: __webpack_require__(/*! ./math/matrix */ "./math/matrix.js"),
  // ENTITIES
  Module: __webpack_require__(/*! ./modules */ "./modules/index.js"),
  Entity: __webpack_require__(/*! ./entities */ "./entities/index.js"),
  // CORE
  Cache: __webpack_require__(/*! ./cache/cache */ "./cache/cache.js"),
  Loader: __webpack_require__(/*! ./loader */ "./loader/index.js"),
  Game: __webpack_require__(/*! ./core/game */ "./core/game.js"),
  // UTILITIES
  Color: __webpack_require__(/*! ./utils/color */ "./utils/color.js")
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

/***/ "./cache/cache.js":
/*!************************!*\
  !*** ./cache/cache.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _imageResource = __webpack_require__(/*! ./resources/imageResource */ "./cache/resources/imageResource.js");

var _imageResource2 = _interopRequireDefault(_imageResource);

var _gameSystemManager = __webpack_require__(/*! ../core/gameSystemManager */ "./core/gameSystemManager.js");

var _gameSystemManager2 = _interopRequireDefault(_gameSystemManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    key: "addImage",
    value: function addImage(tag, url, data) {

      if (this.tagExists('images', tag)) this.removeTagAt('images', tag);

      var img = new _imageResource2.default(data, tag);

      this._cache.images[tag] = img;
    }
  }, {
    key: "addSound",
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
    key: "soundDecoded",
    value: function soundDecoded(tag, data) {

      var sound = this.getAssetInfo("sounds", tag);

      sound.data = data;
      sound.decoded = true;
      sound.isDecoding = false;
    }
  }, {
    key: "tagExists",
    value: function tagExists(cacheType, tag) {

      if (this._cache[cacheType][tag]) return true;

      return false;
    }
  }, {
    key: "removeTagAt",
    value: function removeTagAt(cacheType, tag) {

      delete this._cache[cacheType][tag];
    }
  }, {
    key: "getAsset",
    value: function getAsset(cacheType, tag) {
      // return the cache container

      if (this.tagExists(cacheType, tag)) {

        var asset = this._cache[cacheType][tag];

        return asset;
      } else {
        return null;
      }
    }
  }, {
    key: "getAssetInfo",
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
    key: "clear",
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


_gameSystemManager2.default.register('Cache', Cache, 'cache');

/***/ }),

/***/ "./cache/resources/imageResource.js":
/*!******************************************!*\
  !*** ./cache/resources/imageResource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});

var _resource = __webpack_require__(/*! ./resource */ "./cache/resources/resource.js");

var _resource2 = _interopRequireDefault(_resource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* Image that holds image data.
* @class Image
* @constructor
*/
var ImageResource = function (_Resource) {
      _inherits(ImageResource, _Resource);

      function ImageResource(source, name) {
            var _ret;

            _classCallCheck(this, ImageResource);

            var _this = _possibleConstructorReturn(this, (ImageResource.__proto__ || Object.getPrototypeOf(ImageResource)).call(this, source, name));

            _this.width = 100;
            _this.height = 100;
            _this.isLoaded = false;
            _this.source = source;
            _this.imageUrl = null;
            _this.type = _resource.ResourceType.Image;

            if (!source) return _ret = _this, _possibleConstructorReturn(_this, _ret);

            if ((_this.source.complete || _this.source.getContext) && _this.source.width && _this.source.height) {

                  _this.width = _this.source.naturalWidth || _this.source.width;
                  _this.height = _this.source.naturalHeight || _this.source.height;
            }
            return _this;
      }

      return ImageResource;
}(_resource2.default);

exports.default = ImageResource;

/***/ }),

/***/ "./cache/resources/resource.js":
/*!*************************************!*\
  !*** ./cache/resources/resource.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResourceType = exports.ResourceType = {
    None: -1,
    Image: 0
};

var Resource = function Resource(data, name) {
    _classCallCheck(this, Resource);

    this.data = data || null;
    this.name = name;
    this.type = ResourceType.None;
};

exports.default = Resource;

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

var _objectutils = __webpack_require__(/*! ../utils/objectutils */ "./utils/objectutils.js");

var _objectutils2 = _interopRequireDefault(_objectutils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = function Config(config) {
    _classCallCheck(this, Config);

    if (config === undefined) config = {};

    var callback = _objectutils2.default.getValue;
    var callback_2 = _objectutils2.default.getPropertyValue;

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
    };

    this.time = {
        timeoutMode: callback_2(config, 'time.timeOutMode', false)
    };

    this.pixelated = callback(config, 'pixelated', false);
    /* this.loaderEnableParallel = GetValue(config, 'loader.enableParallel', true);
        this.loaderMaxParallelDownloads = GetValue(config, 'loader.maxParallelDownloads', 4);
        this.loaderCrossOrigin = GetValue(config, 'loader.crossOrigin', undefined);
        
        this.loaderUser = GetValue(config, 'loader.user', '');
        this.loaderPassword = GetValue(config, 'loader.password', '');
    this.loaderTimeout = GetValue(config, 'loader.timeout', 0);*/
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

var _input = __webpack_require__(/*! ../input/input */ "./input/input.js");

var _input2 = _interopRequireDefault(_input);

var _scenemanager = __webpack_require__(/*! ../scene/scenemanager */ "./scene/scenemanager.js");

var _scenemanager2 = _interopRequireDefault(_scenemanager);

var _physics = __webpack_require__(/*! ../physics/physics */ "./physics/physics.js");

var _physics2 = _interopRequireDefault(_physics);

var _debug = __webpack_require__(/*! ../others/debug */ "./others/debug.js");

var _debug2 = _interopRequireDefault(_debug);

var _gameSystemManager = __webpack_require__(/*! ./gameSystemManager */ "./core/gameSystemManager.js");

var _gameSystemManager2 = _interopRequireDefault(_gameSystemManager);

var _gameTime = __webpack_require__(/*! ../time/gameTime */ "./time/gameTime.js");

var _gameTime2 = _interopRequireDefault(_gameTime);

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

        //objects
        this.debug = null;
        this.scene = null;
        this.sound = null;
        this.input = null;
        this.pool = null;
        this.systems = null;
        this.context = null;
        this.time = null;

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

            this.physics = new _physics2.default(this);
            this.input = new _input2.default(this);
            this.scene = new _scenemanager2.default(this);
            this.system = new _gameSystemManager2.default(this);
            this.time = new _gameTime2.default(this);

            this.system.init();
            this.scene.init();
            this.input.init();
            this.time.init(this.system.loop);

            if (this.debugMode) this.debug = new _debug2.default(this);

            this.systemInited = true;
            this.isRunning = true;

            console.log("scintilla started!");
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

/***/ "./core/gameLoop.js":
/*!**************************!*\
  !*** ./core/gameLoop.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestAnimationFrame = __webpack_require__(/*! ../dom/requestAnimationFrame */ "./dom/requestAnimationFrame.js");

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _gameSystemManager = __webpack_require__(/*! ./gameSystemManager */ "./core/gameSystemManager.js");

var _gameSystemManager2 = _interopRequireDefault(_gameSystemManager);

var _updateStep = __webpack_require__(/*! ../time/updateStep */ "./time/updateStep.js");

var _updateStep2 = _interopRequireDefault(_updateStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
*
* core game loop system
*
* @class GameLoop
* @protected
*/
var GameLoop = function () {
    function GameLoop(game, system) {
        _classCallCheck(this, GameLoop);

        this.game = game;
        this.system = system;
        this.updateStep = new _updateStep2.default(this.game, this.game.config);
    }

    _createClass(GameLoop, [{
        key: "init",
        value: function init() {
            this.updateStep.init(this);
        }
    }, {
        key: "loop",
        value: function loop(deltaTime) {

            // Core Managers

            console.log("asdasd");

            this.game.input.update();
            //this.sound.update();

            // Scene Update
            //this.game.update();
            this.game.scene.preUpdate();
            this.game.scene.update(deltaTime);
        }
    }, {
        key: "render",
        value: function render(deltaTime) {

            this.system.render.renderBegin();
            this.system.render.render(deltaTime);
            this.system.render.renderEnd();
        }
    }]);

    return GameLoop;
}();

exports.default = GameLoop;


_gameSystemManager2.default.register('GameLoop', GameLoop, 'loop');

/***/ }),

/***/ "./core/gameSystemManager.js":
/*!***********************************!*\
  !*** ./core/gameSystemManager.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scenesystem = __webpack_require__(/*! ./scenesystem */ "./core/scenesystem.js");

var _scenesystem2 = _interopRequireDefault(_scenesystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gameSystems = {};

var GameSystemManager = function () {
    function GameSystemManager(game) {
        _classCallCheck(this, GameSystemManager);

        this.game = game;
        //this.systems = {};
    }

    _createClass(GameSystemManager, [{
        key: 'init',
        value: function init() {
            // register all game systems
            for (var property in gameSystems) {

                var sys = gameSystems[property];
                this[sys.name] = new sys.system(this.game, this);
            }

            // initialize systems
            for (var _property in gameSystems) {

                var sys = this[gameSystems[_property].name];
                if (sys.init === undefined) continue;

                sys.init();
            }
        }
    }, {
        key: 'get',
        value: function get(system) {
            return this[system];
        }
    }, {
        key: 'inject',
        value: function inject(scene) {

            scene.game = this._game;

            for (var property in _scenesystem2.default) {

                var _sys = gameSystems[_scenesystem2.default[property]];
                scene[_sys.name] = this[_sys.name];
            }

            // Special injections, input and sound:

            scene['key'] = this.game.input.keyboard;
            scene['mouse'] = this.game.input.mouse;

            /*for (let property in gameSystems) {
                  let sys = gameSystems[property];
                scene[sys.name] = property[sys.system];
            }*/
        }
    }, {
        key: 'unject',
        value: function unject(scene) {

            for (var property in gameSystems) {
                scene[sys.name] = undefined;
            }
        }
    }, {
        key: 'update',
        value: function update(time, deltaTime) {}
    }], [{
        key: 'register',
        value: function register(key, system, systemName) {
            gameSystems[key] = { name: systemName, system: system };
        }
    }]);

    return GameSystemManager;
}();

exports.default = GameSystemManager;

/***/ }),

/***/ "./core/index.js":
/*!***********************!*\
  !*** ./core/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Config: __webpack_require__(/*! ./config */ "./core/config.js"),
    GameSystemManager: __webpack_require__(/*! ./gameSystemManager */ "./core/gameSystemManager.js"),
    SceneSystem: __webpack_require__(/*! ./scenesystem */ "./core/scenesystem.js"),
    GameLoop: __webpack_require__(/*! ./gameLoop */ "./core/gameLoop.js")
};

/***/ }),

/***/ "./core/scenesystem.js":
/*!*****************************!*\
  !*** ./core/scenesystem.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var SceneSystem = ['Cache', 'Draw', 'Loader', 'EntityFactory', 'Camera'];

exports.default = SceneSystem;

/***/ }),

/***/ "./dom/requestAnimationFrame.js":
/*!**************************************!*\
  !*** ./dom/requestAnimationFrame.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestAnimationFrame = function () {
        function RequestAnimationFrame(timeoutMode) {
                _classCallCheck(this, RequestAnimationFrame);

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

        _createClass(RequestAnimationFrame, [{
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

/***/ "./entities/camera.js":
/*!****************************!*\
  !*** ./entities/camera.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rect = __webpack_require__(/*! ../math/rect */ "./math/rect.js");

var _rect2 = _interopRequireDefault(_rect);

var _vector = __webpack_require__(/*! ../math/vector */ "./math/vector.js");

var _vector2 = _interopRequireDefault(_vector);

var _matrix = __webpack_require__(/*! ../math/matrix */ "./math/matrix.js");

var _matrix2 = _interopRequireDefault(_matrix);

var _boundingbox = __webpack_require__(/*! ../math/boundingbox */ "./math/boundingbox.js");

var _boundingbox2 = _interopRequireDefault(_boundingbox);

var _color = __webpack_require__(/*! ../utils/color */ "./utils/color.js");

var _color2 = _interopRequireDefault(_color);

var _updateBounds = __webpack_require__(/*! ../modules/core/updateBounds */ "./modules/core/updateBounds.js");

var _updateBounds2 = _interopRequireDefault(_updateBounds);

var _gameSystemManager = __webpack_require__(/*! ../core/gameSystemManager */ "./core/gameSystemManager.js");

var _gameSystemManager2 = _interopRequireDefault(_gameSystemManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camera = function () {
  function Camera(game, width, height) {
    _classCallCheck(this, Camera);

    this.game = game;
    this._view = new _rect2.default(0, 0, width, height);
    this._bounds = new _boundingbox2.default();
    this._matrix = new _matrix2.default(1);
    this._rotation = 0;
    this._oldRotation = 0;
    this._isDirty = true;
    this._angle = 0;
    this._cosSin = { x: 0, y: 0 };
    this._scale = 1;
    this._resolution = 1;

    this._backgroundColor = _color2.default.rgbToHex(0, 0, 0);
    this._roundPixels = false;
  }

  _createClass(Camera, [{
    key: 'centerView',
    value: function centerView() {
      this._x = this.width * 0.5;
      this._y = this.height * 0.5;
      this._isDirty = true;
      return this;
    }
  }, {
    key: 'centerToEntity',
    value: function centerToEntity(entity) {
      this._x = entity.position.x;
      this._y = entity.position.y;
      this._isDirty = true;
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
      this._backgroundColor = _color2.default.rgba(r, g, b, a);
      return this;
    }
  }, {
    key: 'setSize',
    value: function setSize(width, height) {
      this._view.width = width;
      this._view.height = height;
      this._isDirty = true;
      return this;
    }
  }, {
    key: 'setView',
    value: function setView(x, y, width, height) {
      this._view.x = x;
      this._view.y = y;
      this._view.width = width;
      this._view.height = height;
      this._isDirty = true;
      return this;
    }
  }, {
    key: 'update',
    value: function update() {

      if (!this._isDirty) return;

      if (this.roundPixels) {
        this._view.x = Math.round(this._view.x);
        this._view.y = Math.round(this._view.y);
      }

      if (this._rotation !== this._oldRotation) {
        this._oldRotation = this.rotation;
        this._cosSin.y = Math.sin(this.rotation);
        this._cosSin.x = Math.cos(this.rotation);
      }

      (0, _updateBounds2.default)(this._bounds, this._view, this.rotation);

      // todo resolution
      this._matrix.setIdentity().scale(this._zoom, this._zoom).translate(this._x, this._y).radianRotate(this._cosSin.x, this._cosSin.y);

      this._isDirty = false;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this._view.x = 0;
      this._view.y = 0;
      this._angle = 0;
      this._scale = 1;
      this._cosSin.x = 0;
      this._cosSin.y = 0;
      this._scale = 1;
      this._resolution = 1;
      this._isDirty = true;
    }
  }, {
    key: 'position',
    get: function get() {
      return { x: this._x, y: this._y };
    },
    set: function set(value) {
      this._view.x = value.x;
      this._view.y = value.y;
      this._isDirty = true;
      return this;
    }
  }, {
    key: 'x',
    set: function set(value) {
      this._view.x = value;
      this._isDirty = true;
      return this;
    }
  }, {
    key: 'y',
    set: function set(value) {
      this._view.y = value;
      this._isDirty = true;
      return this;
    }
  }, {
    key: 'scale',
    get: function get() {
      return this._zoom;
    },
    set: function set(value) {
      this._zoom = value;
      this._isDirty = true;
      return this;
    }
  }, {
    key: 'angle',
    get: function get() {
      return this._angle;
    },
    set: function set(value) {
      this._angle = value;
      this._rotation = value * MathUtils.degToRad;
      this._isDirty = true;
      return this;
    }
  }, {
    key: 'rotation',
    get: function get() {
      return this._rotation;
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
      this._isDirty = true;
      return this;
    }
  }, {
    key: 'size',
    get: function get() {
      return { x: this._view.width, y: this._view.height };
    }
  }]);

  return Camera;
}();

exports.default = Camera;


_gameSystemManager2.default.register('Camera', Camera, 'camera');

/***/ }),

/***/ "./entities/entity.js":
/*!****************************!*\
  !*** ./entities/entity.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
*
* Base class for Entities
*
*/
var Entity = function () {
    function Entity(name, game) {
        _classCallCheck(this, Entity);

        this._name = name || 'New Entity';
        this._active = true;
        this.game = game || undefined;
    }

    _createClass(Entity, [{
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

/***/ "./entities/entityFactory.js":
/*!***********************************!*\
  !*** ./entities/entityFactory.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameSystemManager = __webpack_require__(/*! ../core/gameSystemManager */ "./core/gameSystemManager.js");

var _gameSystemManager2 = _interopRequireDefault(_gameSystemManager);

var _sceneentity = __webpack_require__(/*! ./sceneentity */ "./entities/sceneentity.js");

var _sceneentity2 = _interopRequireDefault(_sceneentity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EntityFactory = function () {
    function EntityFactory(game) {
        _classCallCheck(this, EntityFactory);

        this.game = game;
        this.scene = null;
        this.entityList = null;
    }

    _createClass(EntityFactory, [{
        key: "init",
        value: function init() {
            this.entityList = this.game.system.entityList;
            this.scene = this.game.scene;
        }
    }, {
        key: "sprite",
        value: function sprite(tag, entityName) {
            var entity = new _sceneentity2.default(entityName, this.game);
            entity.modules.attach.sprite(tag);

            if (this.scene.current_scene !== null) {
                this.entityList.add(entity);
            }

            return entity;
        }
    }]);

    return EntityFactory;
}();

exports.default = EntityFactory;


_gameSystemManager2.default.register('EntityFactory', EntityFactory, 'create');

/***/ }),

/***/ "./entities/entityhierarchy.js":
/*!*************************************!*\
  !*** ./entities/entityhierarchy.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _entity = __webpack_require__(/*! ./entity */ "./entities/entity.js");

var _entity2 = _interopRequireDefault(_entity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Hierarchy Tree of instances
// Instance is a children of the Hierarchy tree
var EntityHierarchy = function (_Entity) {
  _inherits(EntityHierarchy, _Entity);

  function EntityHierarchy(name, game) {
    _classCallCheck(this, EntityHierarchy);

    var _this = _possibleConstructorReturn(this, (EntityHierarchy.__proto__ || Object.getPrototypeOf(EntityHierarchy)).call(this, name, game));

    _this.children = [];
    _this.parent = null;
    return _this;
  }

  _createClass(EntityHierarchy, [{
    key: 'addChild',
    value: function addChild(child) {
      return this.addChildAt(child, this.children.length);
    }
  }, {
    key: 'addChildAt',
    value: function addChildAt(child, index) {
      if (index >= 0 && index <= this.children.length) {
        if (child.parent) {
          child.parent.removeChild(child);
        }

        child.parent = this;

        this.children.splice(index, 0, child);

        this._changeDepth = true;

        //if(this.stage)child.setStageReference(this.stage);

        return child;
      } else {
        throw new Error(child + 'addChildAt: The index ' + index + ' supplied is out of bounds ' + this.children.length);
      }
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      var index = this.children.indexOf(child);

      if (index === -1) return;

      return this.removeChildAt(index);
    }
  }, {
    key: 'removeChildAt',
    value: function removeChildAt(index) {
      var child = this.getChildAt(index);

      child.parent = undefined;
      this.children.splice(index, 1);
      return child;
    }
  }, {
    key: 'getChildAt',
    value: function getChildAt(index) {
      if (index < 0 || index >= this.children.length) {
        throw new Error('Hierarchy.getChildAt: Index ' + index + ' does not exist in the child list');
      }
      return this.children[index];
    }

    /*preUpdate(time) {
        for (var i = 0; i < this.children.length; i++)
      {
            this.children[i].preUpdate(time);
        }
      }
      update() {
        for (var i = 0; i < this.children.length; i++)
      {
            this.children[i].update();
      }
    
    }
      _updateTransform() {
      for (var i = 0; i < this.children.length; i++)
      {
          this.children[i]._updateTransform();
      }
    }*/

  }, {
    key: 'childCount',
    get: function get() {
      return this.children.length;
    }
  }]);

  return EntityHierarchy;
}(_entity2.default);

exports.default = EntityHierarchy;

/***/ }),

/***/ "./entities/entityupdatelist.js":
/*!**************************************!*\
  !*** ./entities/entityupdatelist.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _list = __webpack_require__(/*! ../structures/list */ "./structures/list.js");

var _list2 = _interopRequireDefault(_list);

var _gameSystemManager = __webpack_require__(/*! ../core/gameSystemManager */ "./core/gameSystemManager.js");

var _gameSystemManager2 = _interopRequireDefault(_gameSystemManager);

var _updateTransform = __webpack_require__(/*! ../modules/core/updateTransform */ "./modules/core/updateTransform.js");

var _updateTransform2 = _interopRequireDefault(_updateTransform);

var _updateModules = __webpack_require__(/*! ../modules/core/updateModules */ "./modules/core/updateModules.js");

var _updateModules2 = _interopRequireDefault(_updateModules);

var _matrix = __webpack_require__(/*! ../math/matrix */ "./math/matrix.js");

var _matrix2 = _interopRequireDefault(_matrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EntityUpdateList = function () {
    function EntityUpdateList(game) {
        _classCallCheck(this, EntityUpdateList);

        this.game = game;
        this._instances = null;
        this._destroyInstances = null;
        this._pendingInstances = null;
    }

    _createClass(EntityUpdateList, [{
        key: "init",
        value: function init() {
            this._instances = new _list2.default();
            this._destroyInstances = new _list2.default();
            this._pendingInstances = new _list2.default();
        }
    }, {
        key: "add",
        value: function add(instance) {
            if (this._instances.indexOf(instance) === -1 && this._pendingInstances.indexOf(instance) === -1) {
                this._pendingInstances.push(instance);
            }

            return instance;
        }
    }, {
        key: "remove",
        value: function remove(instance) {}
    }, {
        key: "update",
        value: function update(dt) {
            var _this = this;

            var parent = _matrix2.default.identity();

            this._instances.each(function (element) {

                if (element.active) {

                    (0, _updateTransform2.default)(element.transform, parent);

                    (0, _updateModules2.default)(element.modules, _this.game);

                    if (element.transform._isDirty) element.transform._isDirty = false;

                    if (element.update !== undefined) element.update(dt);
                }
            });
        }
    }, {
        key: "lateUpdate",
        value: function lateUpdate() {
            var removeSize = this._destroyInstances.size;
            var insertSize = this._pendingInstances.size;

            if (insertSize === 0 && removeSize === 0) return;

            if (removeSize > 0) this._instances.eraseList(this._destroyInstances, removeSize);

            /*this._pendingInstances.each(instance => {
                  this.initializeModules(instance);
                  this._instances.push(instance);
            })
              this._pendingInstances.clear();*/

            this._instances.concat(this._pendingInstances, true);

            this._pendingInstances.childs.length = 0;
            this._destroyInstances.childs.length = 0;
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


_gameSystemManager2.default.register('EntityUpdateList', EntityUpdateList, 'entityList');

/***/ }),

/***/ "./entities/index.js":
/*!***************************!*\
  !*** ./entities/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Entity: __webpack_require__(/*! ./entity */ "./entities/entity.js"),
    SceneEntity: __webpack_require__(/*! ./sceneentity */ "./entities/sceneentity.js"),
    EntityUpdateList: __webpack_require__(/*! ./entityupdatelist */ "./entities/entityupdatelist.js"),
    EntityFactory: __webpack_require__(/*! ./entityFactory */ "./entities/entityFactory.js"),
    Camera: __webpack_require__(/*! ./camera */ "./entities/camera.js")
};

/***/ }),

/***/ "./entities/sceneentity.js":
/*!*********************************!*\
  !*** ./entities/sceneentity.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _entityhierarchy = __webpack_require__(/*! ./entityhierarchy */ "./entities/entityhierarchy.js");

var _entityhierarchy2 = _interopRequireDefault(_entityhierarchy);

var _boundingbox = __webpack_require__(/*! ../math/boundingbox */ "./math/boundingbox.js");

var _boundingbox2 = _interopRequireDefault(_boundingbox);

var _transform = __webpack_require__(/*! ../modules/core/transform */ "./modules/core/transform.js");

var _transform2 = _interopRequireDefault(_transform);

var _moduleManager = __webpack_require__(/*! ../modules/moduleManager */ "./modules/moduleManager.js");

var _moduleManager2 = _interopRequireDefault(_moduleManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneEntity = function (_EntityHierarchy) {
    _inherits(SceneEntity, _EntityHierarchy);

    function SceneEntity(name, game) {
        _classCallCheck(this, SceneEntity);

        name = name || 'New SceneEntity';

        var _this = _possibleConstructorReturn(this, (SceneEntity.__proto__ || Object.getPrototypeOf(SceneEntity)).call(this, name, game || null));

        _this.transform = new _transform2.default();
        _this.type = null;
        _this.pool = null;
        _this.modules = new _moduleManager2.default(_this);
        //this.bounds = new BoundingBox();
        //this._transformDirty = false;
        //this._currentScene = null;


        return _this;
    }

    _createClass(SceneEntity, [{
        key: 'position',
        get: function get() {
            return this.transform.position;
        },
        set: function set(value) {
            this.transform.position = value;this.transform._isDirty = true;
        }
    }, {
        key: 'position.x',
        set: function set(value) {
            this.transform.position.x = value;this.transform._isDirty = true;
        }
    }, {
        key: 'position.y',
        set: function set(value) {
            this.transform.position.y = value;this.transform._isDirty = true;
        }
    }, {
        key: 'origin',
        get: function get() {
            return this.transform.origin;
        },
        set: function set(value) {
            this.transform.origin = value;this.transform._isDirty = true;
        }
    }, {
        key: 'origin.x',
        set: function set(value) {
            this.transform.origin.x = value;this.transform._isDirty = true;
        }
    }, {
        key: 'origin.y',
        set: function set(value) {
            this.transform.origin.y = value;this.transform._isDirty = true;
        }
    }, {
        key: 'scale',
        get: function get() {
            return this.transform.scale;
        },
        set: function set(value) {
            this.transform.scale = value;this.transform._isDirty = true;
        }
    }, {
        key: 'scale.x',
        set: function set(value) {
            this.transform.scale.x = value;this.transform._isDirty = true;
        }
    }, {
        key: 'scale.y',
        set: function set(value) {
            this.transform.scale.y = value;this.transform._isDirty = true;
        }
    }, {
        key: 'angle',
        get: function get() {
            return this.transform.angle;
        },
        set: function set(value) {
            this.transform.angle = value;this.transform._isDirty = true;
        }
    }]);

    return SceneEntity;
}(_entityhierarchy2.default);

exports.default = SceneEntity;

/***/ }),

/***/ "./input/index.js":
/*!************************!*\
  !*** ./input/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    Key: __webpack_require__(/*! ./key */ "./input/key.js"),
    Keyboard: __webpack_require__(/*! ./keyboard */ "./input/keyboard.js"),
    Mouse: __webpack_require__(/*! ./keyboard */ "./input/keyboard.js"),
    Input: __webpack_require__(/*! ./input */ "./input/input.js")

};

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

        this._event = KeyEvent.NONE;

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
                    this._event = KeyEvent.PRESSED;
                }
            } else {

                if (this.releaseDuration == 0) {
                    this._event = KeyEvent.RELEASED;
                } else {
                    this._event = KeyEvent.IDLE;
                }
            }

            if (this._event == KeyEvent.IDLE) {
                this._event = KeyEvent.NONE;
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
            this._event = KeyEvent.NONE;
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _key = __webpack_require__(/*! ./key */ "./input/key.js");

var _key2 = _interopRequireDefault(_key);

var _map = __webpack_require__(/*! ../structures/map */ "./structures/map.js");

var _map2 = _interopRequireDefault(_map);

var _keycode = __webpack_require__(/*! ./keycode */ "./input/keycode.js");

var _keycode2 = _interopRequireDefault(_keycode);

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
    this.reset();
  }

  _createClass(Keyboard, [{
    key: 'reset',
    value: function reset() {

      this._keyMapping.clear();
      this._keyWatch.clear();
      this._keyGarbage = [];
      for (var prop in _keycode2.default) {

        if (_keycode2.default.hasOwnProperty(prop)) {
          var value = _keycode2.default[prop];
          this._keyMapping.set(value, new _key2.default(value, this.game));
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

        if (value.event() == KeyEvent.IDLE) {

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

      return this._keyMapping.get(keycode).status;

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

/***/ }),

/***/ "./input/keycode.js":
/*!**************************!*\
  !*** ./input/keycode.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = KeyCode;

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
exports.MouseEvent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mousebutton = __webpack_require__(/*! ./mousebutton */ "./input/mousebutton.js");

var _mousebutton2 = _interopRequireDefault(_mousebutton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        this.canvas = game.system.get('render').canvas;
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

/***/ "./input/mousebutton.js":
/*!******************************!*\
  !*** ./input/mousebutton.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var MouseButton = exports.MouseButton = {
    Left: 0,
    Middle: 1,
    Right: 2,
    WheelUp: 3,
    WheelDown: 4
};

/***/ }),

/***/ "./loader/URLobject.js":
/*!*****************************!*\
  !*** ./loader/URLobject.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var URLObject = {

    create: function create(asset, response, type) {

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

            if (file.xhrSettings.responseType !== undefined) xmlHttpRequest.responseType = file.xhrSettings.responseType;
            xmlHttpRequest.timeout = xhrSettings.timeout;

            xmlHttpRequest.onload = file.onLoad.bind(file);
            xmlHttpRequest.onerror = file.onError.bind(file);
            xmlHttpRequest.onprogress = file.onProgress.bind(file);

            if (file.onReadyStateChange !== undefined) xmlHttpRequest.onreadystatechange = file.onReadyStateChange.bind(file);

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

/***/ "./loader/assets/imagefile.js":
/*!************************************!*\
  !*** ./loader/assets/imagefile.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loaderstate = __webpack_require__(/*! ../loaderstate */ "./loader/loaderstate.js");

var _file = __webpack_require__(/*! ../file */ "./loader/file.js");

var _file2 = _interopRequireDefault(_file);

var _URLobject = __webpack_require__(/*! ../URLobject */ "./loader/URLobject.js");

var _URLobject2 = _interopRequireDefault(_URLobject);

var _objectutils = __webpack_require__(/*! ../../utils/objectutils */ "./utils/objectutils.js");

var _objectutils2 = _interopRequireDefault(_objectutils);

var _pathutils = __webpack_require__(/*! ../../utils/pathutils */ "./utils/pathutils.js");

var _pathutils2 = _interopRequireDefault(_pathutils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageFile = function (_File) {
    _inherits(ImageFile, _File);

    function ImageFile(tag, url, path, xhrSettings, config) {
        _classCallCheck(this, ImageFile);

        var assetTag = null;

        if (typeof tag === 'string') {
            assetTag = tag;
        } else {
            assetTag = _objectutils2.default.getValue(tag, 'tag', '');
        }

        var fileConfig = {
            type: 'image',
            tag: assetTag,
            ext: _objectutils2.default.getValue(tag, 'ext', _pathutils2.default.getExtension(url)),
            url: _objectutils2.default.getValue(tag, 'file', url),
            path: path,
            responseType: 'blob',
            xhrSettings: _objectutils2.default.getValue(tag, 'xhr', xhrSettings),
            config: _objectutils2.default.getValue(tag, 'config', config)
        };

        return _possibleConstructorReturn(this, (ImageFile.__proto__ || Object.getPrototypeOf(ImageFile)).call(this, fileConfig));
    }

    _createClass(ImageFile, [{
        key: 'onProcessing',
        value: function onProcessing(processingCallback) {
            this.state = _loaderstate.LOADER_STATE.PROCESSING;
            this.data = new Image();
            this.data.crossOrigin = this.crossOrigin;

            var self = this;

            this.data.onload = function () {

                _URLobject2.default.revoke(self.data);

                self.onDone();

                processingCallback(self);
            };

            this.data.onerror = function () {

                _URLobject2.default.revoke(self.data);

                self.state = _loaderstate.LOADER_STATE.ERROR;

                processingCallback(self);
            };

            _URLobject2.default.create(this.data, this.xhrRequest.response, 'image/' + this.config.ext);
        }
    }]);

    return ImageFile;
}(_file2.default);

exports.default = ImageFile;


_loaderstate.AssetTypeHandler.register('image', function (tag, url, path, xhrSettings) {

    this.addAsset(new ImageFile(tag, url, this.path, xhrSettings));

    return this;
});

module.exports = ImageFile;

/***/ }),

/***/ "./loader/assets/index.js":
/*!********************************!*\
  !*** ./loader/assets/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    ImageFile: __webpack_require__(/*! ./imagefile */ "./loader/assets/imagefile.js"),
    TextFile: __webpack_require__(/*! ./textfile */ "./loader/assets/textfile.js")
};

/***/ }),

/***/ "./loader/assets/textfile.js":
/*!***********************************!*\
  !*** ./loader/assets/textfile.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loaderstate = __webpack_require__(/*! ../loaderstate */ "./loader/loaderstate.js");

var _file = __webpack_require__(/*! ../file */ "./loader/file.js");

var _file2 = _interopRequireDefault(_file);

var _objectutils = __webpack_require__(/*! ../../utils/objectutils */ "./utils/objectutils.js");

var _objectutils2 = _interopRequireDefault(_objectutils);

var _pathutils = __webpack_require__(/*! ../../utils/pathutils */ "./utils/pathutils.js");

var _pathutils2 = _interopRequireDefault(_pathutils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextFile = function (_File) {
    _inherits(TextFile, _File);

    function TextFile(tag, url, path, xhrSettings, config) {
        _classCallCheck(this, TextFile);

        var assetTag = null;

        if (typeof tag === 'string') {
            assetTag = tag;
        } else {
            assetTag = _objectutils2.default.getValue(tag, 'tag', '');
        }

        var useExternal = false;

        if (path !== undefined) {
            if (typeof path === "boolean") useExternal = path;
        }

        var fileConfig = {
            type: 'text',
            tag: assetTag,
            ext: _objectutils2.default.getValue(tag, 'ext', _pathutils2.default.getExtension(url)),
            url: _objectutils2.default.getValue(tag, 'file', url),
            path: path,
            responseType: '',
            xhrSettings: _objectutils2.default.getValue(tag, 'xhr', xhrSettings),
            config: _objectutils2.default.getValue(tag, 'config', config),
            useExternal: useExternal
        };

        return _possibleConstructorReturn(this, (TextFile.__proto__ || Object.getPrototypeOf(TextFile)).call(this, fileConfig));
    }

    //onLoad(event) {}

    /*onReadyStateChange(event)
    {
          console.log(event.target);
        if (this.xhrRequest.status == 200)
        {
            if (this.xhrRequest.readyState == 4)
            {
                this.state = LOADER_STATE.PROCESSING;
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

    _createClass(TextFile, [{
        key: 'onProcessing',
        value: function onProcessing(processingCallback) {
            this.state = _loaderstate.LOADER_STATE.PROCESSING;
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
}(_file2.default);

exports.default = TextFile;


_loaderstate.AssetTypeHandler.register('text', function (tag, url, path, xhrSettings) {
    var endPointPath = this.path;

    if (path !== undefined) {

        if (typeof path === "boolean") // external link
            endPointPath = path;
    }

    this.addAsset(new TextFile(tag, url, endPointPath, xhrSettings));

    return this;
});

module.exports = TextFile;

/***/ }),

/***/ "./loader/file.js":
/*!************************!*\
  !*** ./loader/file.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _objectutils = __webpack_require__(/*! ../utils/objectutils */ "./utils/objectutils.js");

var _objectutils2 = _interopRequireDefault(_objectutils);

var _XHR = __webpack_require__(/*! ./XHR */ "./loader/XHR.js");

var _XHR2 = _interopRequireDefault(_XHR);

var _loaderstate = __webpack_require__(/*! ./loaderstate */ "./loader/loaderstate.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var File = function () {
    function File(config) {
        _classCallCheck(this, File);

        this.type = _objectutils2.default.getValue(config, 'type', null);
        this.tag = _objectutils2.default.getValue(config, 'tag', null);
        this.useExternal = _objectutils2.default.getValue(config, 'useExternal', false);

        if (this.type == null || this.tag == null) {
            throw new Error('Loader.File: Invalid tag \"' + tag + "\".");
        }

        this.url = _objectutils2.default.getValue(config, 'url', undefined);

        if (this.url === undefined) this.url = _objectutils2.default.getValue(config, 'path', '') + this.tag + '.' + _objectutils2.default.getValue(config, 'ext', '');else {
            if (!this.useExternal) this.url = _objectutils2.default.getValue(config, 'path', '').concat(this.url);
        }

        this.xhrSettings = _XHR2.default.createSettings(_objectutils2.default.getValue(config, 'responseType', undefined));

        if (_objectutils2.default.getValue(config, 'xhrSettings', false)) this.xhrSettings = _XHR2.default.merge(this.xhrSettings, _objectutils2.default.getValue(config, 'xhrSettings', {}));

        //console.log(this.xhrSettings);

        this.loader = null;
        this.state = _loaderstate.LOADER_STATE.PENDING;
        this.totalBytes = 0;
        this.loadedBytes = 0;
        this.progress = 0;
        this.data = undefined;
        this.source = null;
        this.xhrRequest = null;
        this.config = _objectutils2.default.getValue(config, 'config', {});
        this.crossOrigin = undefined;

        // callbacks
        //loaded: false,
        //error: false,
        //loading:false,
    }

    _createClass(File, [{
        key: 'load',
        value: function load(gameLoader) {
            this.loader = gameLoader;

            if (this.state === _loaderstate.LOADER_STATE.FINISHED) {
                this.onDone();

                this.loader.nextFile(this);
            } else {

                this.source = _objectutils2.default.getURL(this.url, gameLoader.baseURL);

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

            this.XHRreset();

            if (event.target && event.target.status !== 200) this.loader.next(this, true);else this.loader.next(this, false);
        }
    }, {
        key: 'onError',
        value: function onError() {
            console.error("Loader.File: Error to load file.");

            this.XHRreset();

            this.loader.next(this, true);
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
            this.state = _loaderstate.LOADER_STATE.DONE;
        }
    }, {
        key: 'onProcessing',
        value: function onProcessing(processingCallback) {
            this.state = _loaderstate.LOADER_STATE.PROCESSING;

            this.onDone();

            processingCallback(this);
        }
    }, {
        key: 'XHRreset',
        value: function XHRreset() {
            if (this.xhrRequest) {
                this.xhrRequest.onload = undefined;
                this.xhrRequest.onerror = undefined;
                this.xhrRequest.onprogress = undefined;
                this.xhrRequest.onreadystatechange = undefined;
            }
        }
    }]);

    return File;
}();

exports.default = File;

/***/ }),

/***/ "./loader/index.js":
/*!*************************!*\
  !*** ./loader/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    File: __webpack_require__(/*! ./file */ "./loader/file.js"),
    XHR: __webpack_require__(/*! ./XHR */ "./loader/XHR.js"),
    URLObject: __webpack_require__(/*! ./URLobject */ "./loader/URLobject.js"),
    AssetsTypes: __webpack_require__(/*! ./assets */ "./loader/assets/index.js"),
    LoaderState: __webpack_require__(/*! ./loaderstate */ "./loader/loaderstate.js"),
    LoaderManager: __webpack_require__(/*! ./loadmanager */ "./loader/loadmanager.js")

};

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

var _objectutils = __webpack_require__(/*! ../utils/objectutils */ "./utils/objectutils.js");

var _objectutils2 = _interopRequireDefault(_objectutils);

var _gameSystemManager = __webpack_require__(/*! ../core/gameSystemManager */ "./core/gameSystemManager.js");

var _gameSystemManager2 = _interopRequireDefault(_gameSystemManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Class LoaderManager
var LoadManager = function () {
  function LoadManager(game) {
    _classCallCheck(this, LoadManager);

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

    var gameConfig = game.config.loader;

    this.xhr = _XHR2.default.createSettings(_objectutils2.default.getValue(config, 'responseType', gameConfig.responseType), _objectutils2.default.getValue(config, 'async', gameConfig.async),
    //scintilla.ObjectUtils.getPropertyValue(config, 'user', gameConfig.loaderUser),
    //scintilla.ObjectUtils.getPropertyValue(config, 'password', gameConfig.loaderPassword),
    _objectutils2.default.getValue(config, 'timeout', gameConfig.timeout));

    _loaderstate.AssetTypeHandler.inject(this);
  }

  _createClass(LoadManager, [{
    key: 'init',
    value: function init() {
      this.cache = this.game.system.cache;

      this._filesQueue = new _set2.default();
      this._filesLoading = new _set2.default();
      this._successFiles = new _set2.default();
      this._failedFiles = new _set2.default();
      this._processedFiles = new _set2.default();

      this._filesQueueCount = 0;
      this._loadedFilesCount = 0;

      this.progress = 0;
      this.path = '';
      this.baseURL = '';
      this.state = _loaderstate.LOADER_STATE.IDLE;
    }
  }, {
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
      this._filesQueue.clear();
      this._successFiles.clear();
      this._failedFiles.clear();
      this._processedFiles.clear();

      this._filesQueueCount = 0;
      this._loadedFilesCount = 0;

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
        //console.log(0);
        this.loadFinished();
      } else {
        this.isDownloading = true;
        this._successFiles.clear();
        this._failedFiles.clear();
        this._filesLoading.clear();

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

            self._filesLoading.set(file);

            self._filesQueue.delete(file);

            self.loadAsset(file);
          }
      });
    }
  }, {
    key: 'loadAsset',
    value: function loadAsset(file) {
      file.load(this);
    }
  }, {
    key: 'next',
    value: function next(concludedFile, hasError) {

      if (hasError) this._failedFiles.set(concludedFile);else this._successFiles.set(concludedFile);

      this._filesLoading.delete(concludedFile);
      //this._filesQueue.delete(concludedFile);
      this._loadedFilesCount++;

      this.updateProgress();

      if (this._filesQueue.size > 0) //(this._loadedFilesCount < this._filesQueueCount)
        {
          this.processFileQueue();
        } else if (this._filesLoading.size === 0) {

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
      this._successFiles.clear();
      this._filesQueue.clear();

      var cache = this.cache;

      if (this._processedFiles.size > 0) {
        this._processedFiles.each(function (file) {

          switch (file.type) {
            default:
              break;

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
    get: function get() {
      return this._filesQueueCount - this._loadedFilesCount;
    }
  }]);

  return LoadManager;
}();

exports.default = LoadManager;
;

_gameSystemManager2.default.register('Loader', LoadManager, 'load');

/***/ }),

/***/ "./math/boundingbox.js":
/*!*****************************!*\
  !*** ./math/boundingbox.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(/*! ./vector */ "./math/vector.js");

var _vector2 = _interopRequireDefault(_vector);

var _rect = __webpack_require__(/*! ./rect */ "./math/rect.js");

var _rect2 = _interopRequireDefault(_rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BoundingBox = function () {
  function BoundingBox(x, y, width, height) {
    _classCallCheck(this, BoundingBox);

    x = x || Infinity;
    y = y || Infinity;
    width = width || -Infinity;
    height = height || -Infinity;
    this.min = new _vector2.default(x, y);
    this.max = new _vector2.default(x + width, y + height);
    //this.box = new Rect(xx,yy,w,h);
  }

  _createClass(BoundingBox, [{
    key: 'set',
    value: function set(minX, minY, maxX, maxY) {

      this.min.set(minX, minY);
      this.max.set(maxX, maxY);
      this.box.set(this.min.x, this.min.y, this.max.x - this.min.x, this.max.y - this.min.y);
      return this;
    }
  }, {
    key: 'intersects',
    value: function intersects(bounds) {
      return this.max.x > bounds.min.x && this.max.y > bounds.min.y && this.min.x < bounds.max.x && this.min.y < bounds.max.y || this.min.x > bounds.max.x && this.min.y > bounds.max.y && this.max.x < bounds.min.x && this.max.y < bounds.min.y;
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
      } else if (value instanceof _vector2.default) {
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
      var o = { x: x, y: y };
      o.x -= this.min.x;
      o.y -= this.min.y;

      if (this.max.x > this.min.x) o.x /= this.max.x - this.min.x;

      if (this.max.y > this.min.y) o.y /= this.max.y - this.min.y;

      return o;
    }
  }, {
    key: 'center',
    get: function get() {
      return new _vector2.default((this.max.x - this.min.x) / 2, (this.max.y - this.min.y) / 2);
    }
  }, {
    key: 'size',
    get: function get() {
      return new _vector2.default(this.max.x - this.min.x, this.max.y - this.min.y);
    }
  }]);

  return BoundingBox;
}();

exports.default = BoundingBox;

/***/ }),

/***/ "./math/mathutils.js":
/*!***************************!*\
  !*** ./math/mathutils.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MathUtils = exports.MathUtils = {

  randomRange: function randomRange(min, max) {

    return Math.random() * (max - min) + min;
  },

  irandomRange: function irandomRange(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  lerp: function lerp(fromValue, toValue, t) {

    return (1.0 - t) * fromValue + t * toValue;
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
  },

  distance: function distance(x0, y0, x1, y1) {

    return Math.sqrt((x0 -= x1) * x0 + (y0 -= y1) * y0);
  },

  angleBetween: function angleBetween(x0, y0, x1, y1) {

    var angle = this.toDegree(Math.atan2(y1 - y0, x1 - x0));

    if (angle < 0 && angle >= -180) angle = 360 + angle;

    return angle;
  },

  degToRad: Math.PI / 180,
  radToDeg: 180 / Math.PI,
  TAU: Math.PI * 2,

  toDegree: function toDegree(radians) {

    return radians * tobiJS.Math.radToDeg;
  },

  toRadian: function toRadian(degrees) {

    return degrees * tobiJS.Math.degToRad;
  }

};

module.exports = MathUtils;

/***/ }),

/***/ "./math/matrix.js":
/*!************************!*\
  !*** ./math/matrix.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Matrix = function () {

  /*
  * Constructor is identity only
  */
  function Matrix(a, b) {
    _classCallCheck(this, Matrix);

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

  _createClass(Matrix, [{
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
      // 6 = 0 * x * 3 * y + 6

      // 5 = 1 * x + 3 * y + 5
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

      var a20 = this.a[5]; // x
      var a21 = this.a[6]; // y

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

      if (origin !== undefined) {
        this.a[6] -= origin.x * this.a[0] + origin.y * this.a[3];
        this.a[7] -= origin.y * this.a[1] + origin.y * this.a[4];
      }

      return this;
      /*
      a  =  transform._cosSin.x * transform.scale.x;
      b  = transform._cosSin.y * transform.scale.x;
      c  = -transform._cosSin.y * transform.scale.y;
      d  =  transform._cosSin.x * transform.scale.y;
      x =  transform.position.x;
      y =  transform.position.y;
        x -= transform.origin.x * a + transform.origin.y * c;
      y -= transform.origin.y * b + transform.origin.y * d;
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
      return new Matrix(1);
    }
  }, {
    key: "zero",
    value: function zero() {
      return new Matrix(0);
    }
  }, {
    key: "transpose",
    value: function transpose(mat) {
      var copy = Matrix.zero;
      return copy.setAll(mat.a[0], mat.a[3], mat.a[6], mat.a[1], mat.a[4], mat.a[7], mat.a[2], mat.a[5], mat.a[8]);
    }
  }, {
    key: "multiply",
    value: function multiply(a, b) {
      var mat = Matrix.zero(); // zeroes
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

  return Matrix;
}();

module.exports = Matrix;

/***/ }),

/***/ "./math/rect.js":
/*!**********************!*\
  !*** ./math/rect.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Simple class for rectangle. Usage for collision.
* @class Rect
* @constructor
*/
var Rect = function () {
  function Rect(x, y, width, height) {
    _classCallCheck(this, Rect);

    x = x || 0;
    y = y || 0;
    width = width || 0;
    height = height || 0;

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  _createClass(Rect, [{
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
    key: "set",
    value: function set(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  }, {
    key: "centerPoint",
    get: function get() {
      var vec2 = {};
      vec.x = this.x + this.width / 2;
      vec.y = this.y + this.height / 2;
      return vec2;
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

var _mathutils = __webpack_require__(/*! ./mathutils */ "./math/mathutils.js");

var _mathutils2 = _interopRequireDefault(_mathutils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  /*
  set x(value) {
    this.x = value;
    return this.x;
  }
  get x() {return this.x;}
  set y(value) {
    this.y = value;
    return this.y;
  }
  get y() {return this.y;}*/

  _createClass(Vector, [{
    key: 'set',
    value: function set(x, y) {

      this.x = x;
      this.y = y || x;
    }
  }, {
    key: 'move',
    value: function move(x, y) {

      this.x += x;
      this.y += y;
    }
  }, {
    key: 'scale',
    value: function scale(x, y) {

      this.x *= x;
      this.y *= y || x;
      return this;
    }
  }, {
    key: 'rotate',
    value: function rotate(radians) {

      var x = this.x;
      var y = this.y;
      this.x = x * Math.cos(radians) - y * Math.sin(radians);
      this.y = x * Math.sin(radians) + y * Math.cos(radians);
      return this;
    }
  }, {
    key: 'rotateAround',
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
    key: 'copy',
    value: function copy(otherVector) {

      this.x = otherVector.x;
      this.y = otherVector.y;
      return this;
    }
  }, {
    key: 'normalize',
    value: function normalize() {

      var mag = this.length();
      if (mag > 0) {
        this.x = this.x / mag;
        this.y = this.y / mag;
      }
      return this;
    }
  }, {
    key: 'reverse',
    value: function reverse() {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    }
  }, {
    key: 'add',
    value: function add(other) {
      this.x += other.x;
      this.y += other.y;
      return this;
    }
  }, {
    key: 'sub',
    value: function sub(other) {
      this.x -= other.x;
      this.y -= other.y;
      return this;
    }
  }, {
    key: 'perp',
    value: function perp() {

      var x = this.x;
      this.x = this.y;
      this.y = -x;
      return this;
    }
  }, {
    key: 'dot',
    value: function dot(other) {
      return Vector.dot(this, other);
    }
  }, {
    key: 'project',
    value: function project(other) {
      return Vector.project(this, other);
    }
  }, {
    key: 'clone',
    value: function clone() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: 'length',
    value: function length() {
      return Math.sqrt(this.squaredLenght());
    }
  }, {
    key: 'squaredLenght',
    value: function squaredLenght() {
      return Vector.dot(this, this);
    }
  }, {
    key: 'magnitude',
    get: function get() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: 'normal',
    get: function get() {
      var mag = this.magnitude;
      var vec = new tobiJS.Vector(this.x / mag, this.y / mag);
      return vec;
    }
  }], [{
    key: 'abs',
    value: function abs(vector) {
      return new Vector(Math.abs(vector.x), Math.abs(vector.y));
    }
  }, {
    key: 'scalar',
    value: function scalar(a, b) {
      return a.x * b.y - a.y * b.x;
    }
  }, {
    key: 'distance',
    value: function distance(a, b) {
      return _mathutils2.default.distance(a.x, a.y, b.x, b.y);
    }
  }, {
    key: 'angleBetween',
    value: function angleBetween(a, b) {
      return _mathutils2.default.angleBetween(a.x, a.y, b.x, b.y);
    }
  }, {
    key: 'dot',
    value: function dot(a, b) {
      return a.x * b.x + a.y * b.y;
    }
  }, {
    key: 'project',
    value: function project(a, b) {
      var dp = Vector.dot(a, b);
      var proj = new Vector(dp / (b.x * b.x + b.y * b.y) * b.x, dp / (b.x * b.x + b.y * b.y) * b.y);
      return proj;
    }
  }, {
    key: 'projectNormal',


    // project for unit vector
    value: function projectNormal(a, b) {
      var dp = Vector.dot(a, b);
      var proj = new Vector(dp / b.x, dp / b.y);
      return proj;
    }
  }, {
    key: 'reflect',
    value: function reflect(vec, axis) {

      var r = Vector.project(vec, axis);
      r.scale(2);
      r.sub(vec);
      return r;
    }
  }, {
    key: 'reflectNormal',
    value: function reflectNormal(vec, axis) {

      var r = Vector.projectNormal(vec, axis);
      r.scale(2);
      r.sub(vec);
      return r;
    }
  }, {
    key: 'lerp',
    value: function lerp(a, b, t) {
      var vec = new Vector(_mathutils2.default.lerp(a.x, b.x, t), _mathutils2.default.lerp(a.y, b.y, t));
      return vec;
    }
  }]);

  return Vector;
}();

exports.default = Vector;


module.exports = Vector;

/***/ }),

/***/ "./modules/core/computeDelimiterPoint.js":
/*!***********************************************!*\
  !*** ./modules/core/computeDelimiterPoint.js ***!
  \***********************************************/
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
        coord.x = x * rotation.x - y * rotation.x;
        coord.y = x * rotation.y - y * rotation.y;
    } else {
        coord.x = anchor.x + (x - anchor.x) * rotation.x - (y - anchor.y) * rotation.x;
        coord.y = anchor.y - (x - anchor.x) * rotation.y - (y - anchor.y) * rotation.y;
    }

    return coord;
}

/***/ }),

/***/ "./modules/core/transform.js":
/*!***********************************!*\
  !*** ./modules/core/transform.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(/*! ../../math/vector */ "./math/vector.js");

var _vector2 = _interopRequireDefault(_vector);

var _matrix = __webpack_require__(/*! ../../math/matrix */ "./math/matrix.js");

var _matrix2 = _interopRequireDefault(_matrix);

var _boundingbox = __webpack_require__(/*! ../../math/boundingbox */ "./math/boundingbox.js");

var _boundingbox2 = _interopRequireDefault(_boundingbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transform = function () {
  function Transform() {
    _classCallCheck(this, Transform);

    this.position = new _vector2.default(0, 0);
    this.scale = new _vector2.default(1, 1);
    this.angle = 0;
    this.rotation = 0;
    this.matrix = new _matrix2.default(1);
    this._isDirty = true;
    this.origin = new _vector2.default(0, 0);
    this._cosSin = { x: 0, y: 0 };
    //this.worldPosition = new Vector(0,0);
    //this.worldScale =  new Vector(1,1);
    //this.worldRotation = 0;
    //this.bounds = new BoundingBox(0,0,1,1); // the full bounds of the node - defined by render
    //this.globalBounds = new BoundingBox(0,0,1,1); // defined by render
  }

  _createClass(Transform, [{
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
  }]);

  return Transform;
}();

exports.default = Transform;

/***/ }),

/***/ "./modules/core/updateBounds.js":
/*!**************************************!*\
  !*** ./modules/core/updateBounds.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateBounds;

var _computeDelimiterPoint = __webpack_require__(/*! ./computeDelimiterPoint */ "./modules/core/computeDelimiterPoint.js");

var _computeDelimiterPoint2 = _interopRequireDefault(_computeDelimiterPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateBounds(bounds, rect, rotation) {

    coords[0] = (0, _computeDelimiterPoint2.default)(rect.x, rect.y, rotation);
    coords[1] = (0, _computeDelimiterPoint2.default)(rect.x + rect.width, rect.y, rotation);
    coords[2] = (0, _computeDelimiterPoint2.default)(rect.x, rect.y + rect.height, rotation);
    coords[3] = (0, _computeDelimiterPoint2.default)(rect.x + rect.width, rect.y + rect.height, rotation);

    bounds.min.x = Math.min(coords[0].x, coords[1].x, coords[2].x, coords[3].x);
    bounds.min.y = Math.min(coords[0].y, coords[1].y, coords[2].y, coords[3].y);
    bounds.max.x = Math.max(coords[0].x, coords[1].x, coords[2].x, coords[3].x);
    bounds.max.y = Math.max(coords[0].y, coords[1].y, coords[2].y, coords[3].y);
}

/***/ }),

/***/ "./modules/core/updateModules.js":
/*!***************************************!*\
  !*** ./modules/core/updateModules.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateModules;

var _renderable = __webpack_require__(/*! ../renderables/renderable */ "./modules/renderables/renderable.js");

var _renderable2 = _interopRequireDefault(_renderable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateModules(modulesManager, game) {
    var size = modulesManager._pendingModules.size;

    if (size > 0) {
        // add pending modules
        modulesManager._pendingModules.each(function (mod) {

            mod.init(modulesManager.entity, game);

            modulesManager.attached.set(mod.type, mod);

            // RENDERABLES
            if (mod instanceof _renderable2.default) {
                game.system.render.layer.renderLayers.at(0).add(mod);
            }
        });

        modulesManager._pendingModules.clear();
    }

    var entity = modulesManager.entity;

    var render = modulesManager.attached.render;
    if (render !== undefined || render != null) render.moduleUpdate();
}

/***/ }),

/***/ "./modules/core/updateTransform.js":
/*!*****************************************!*\
  !*** ./modules/core/updateTransform.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = UpdateTransform;

var _mathutils = __webpack_require__(/*! ../../math/mathutils */ "./math/mathutils.js");

var _mathutils2 = _interopRequireDefault(_mathutils);

var _matrix = __webpack_require__(/*! ../../math/matrix */ "./math/matrix.js");

var _matrix2 = _interopRequireDefault(_matrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

* | a | b | x |
* | c | d | y |
* | 0 | 0 | 1 |

* | 0 | 3 | 6 | * | a | d | x |
* | 1 | 4 | 7 | * | b | e | y |
* | 2 | 5 | 8 | * | c | f | 1 |

*/

function UpdateTransform(transform, parentMatrix) {

        //if (parentMatrix === undefined) parentMatrix = null;

        if (!transform._isDirty) return;

        var a = void 0,
            b = void 0,
            c = void 0,
            d = void 0,
            x = void 0,
            y = void 0;
        var wt = transform.matrix;
        var pt = _matrix2.default.identity();

        transform.rotation = transform.angle * _mathutils2.default.degToRad;

        //if (transform.rotation % MathUtils.TAU) {


        if (transform.rotation !== transform._oldRotation) {
                transform._oldRotation = transform.rotation;
                transform._cosSin.y = Math.sin(transform.rotation);
                transform._cosSin.x = Math.cos(transform.rotation);
        }

        console.clear();

        wt.setModelMatrix(transform.position, transform.scale, transform._cosSin, transform.origin); //.multiply(pt);

        console.log(transform.matrix.toString());

        //console.log(wt.toString());
        // concat the parent matrix with the objects transform.
        /*wt.a[0]  = a  * pt.a[0] + b  * pt.a[1]; // a = a * a + b * c
        wt.a[3]  = a  * pt.a[3] + b  * pt.a[4]; // b = a * b + b * d
        wt.a[1]  = c  * pt.a[0] + d  * pt.a[1]; // c = c * a + d * c
        wt.a[4]  = c  * pt.b + d  * pt.d; // d
        wt.a[6] = x * pt.a + y * pt.c + pt.x; // x
        wt.a[7] = x * pt.b + y * pt.d + pt.y; // y*/

        //} else {

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

        // }

        //transform.worldPosition.set(wt.x ,wt.y);
        //transform.worldScale.set(Math.sqrt(wt.a * wt.a + wt.b * wt.b), Math.sqrt(wt.c * wt.c + wt.d * wt.d));
        //transform.worldRotation = Math.atan2(-wt.c, wt.d);
}

/***/ }),

/***/ "./modules/core/updateTransformBounds.js":
/*!***********************************************!*\
  !*** ./modules/core/updateTransformBounds.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateTransformBounds;

var _mathutils = __webpack_require__(/*! ../../math/mathutils */ "./math/mathutils.js");

var _mathutils2 = _interopRequireDefault(_mathutils);

var _vector = __webpack_require__(/*! ../../math/vector */ "./math/vector.js");

var _vector2 = _interopRequireDefault(_vector);

var _computeDelimiterPoint = __webpack_require__(/*! ./computeDelimiterPoint */ "./modules/core/computeDelimiterPoint.js");

var _computeDelimiterPoint2 = _interopRequireDefault(_computeDelimiterPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateTransformBounds(bounds, frame, transform) {

    var coords = [];
    var scale = _vector2.default.abs(transform.scale);
    var pos = transform.position;
    var anchor = transform.origin;
    var size = {
        x: frame.width * scale.x,
        y: frame.height * scale.y
    };

    anchor.x *= scale.x;
    anchor.y *= scale.y;
    pos.x -= anchor.x;
    pos.y -= anchor.y;
    anchor.x += pos.x;
    anchor.y += pos.y;

    coords[0] = (0, _computeDelimiterPoint2.default)(pos.x, pos.y, rotation, anchor);
    coords[1] = (0, _computeDelimiterPoint2.default)(pos.x + size.x, pos.y, rotation, anchor);
    coords[2] = (0, _computeDelimiterPoint2.default)(pos.x, pos.y + size.y, rotation, anchor);
    coords[3] = (0, _computeDelimiterPoint2.default)(pos.x + size.x, pos.y + size.y, rotation, anchor);

    bounds.min.x = Math.min(coords[0].x, coords[1].x, coords[2].x, coords[3].x);
    bounds.min.y = Math.min(coords[0].y, coords[1].y, coords[2].y, coords[3].y);
    bounds.max.x = Math.max(coords[0].x, coords[1].x, coords[2].x, coords[3].x);
    bounds.max.y = Math.max(coords[0].y, coords[1].y, coords[2].y, coords[3].y);
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
    if (rotation instanceof  scintilla.Vector)
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

/***/ "./modules/index.js":
/*!**************************!*\
  !*** ./modules/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Module: __webpack_require__(/*! ./module */ "./modules/module.js"),
    ModuleProvider: __webpack_require__(/*! ./moduleProvider */ "./modules/moduleProvider.js"),
    ModuleAttacher: __webpack_require__(/*! ./moduleAttacher */ "./modules/moduleAttacher.js"),

    Transform: __webpack_require__(/*! ./core/transform */ "./modules/core/transform.js"),
    Renderables: __webpack_require__(/*! ./renderables */ "./modules/renderables/index.js")
};

/***/ }),

/***/ "./modules/module.js":
/*!***************************!*\
  !*** ./modules/module.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module = function () {
    function Module(name, moduleManager) {
        _classCallCheck(this, Module);

        this._type = name || "none";
        this._enabled = true;
        this.entity = null;
        this.moduleManager = moduleManager || undefined;

        if (moduleManager !== undefined) {
            this.entity = moduleManager.entity;
        }
        //this.game = moduleManager.game || null;
    }

    _createClass(Module, [{
        key: "init",
        value: function init(instace, game) {

            this.entity = instace;
            //this.game = game;
            this.moduleManager = instace.modules;
        }
    }, {
        key: "type",
        get: function get() {
            return this._type;
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

exports.default = Module;


module.exports = Module;

/***/ }),

/***/ "./modules/moduleAttacher.js":
/*!***********************************!*\
  !*** ./modules/moduleAttacher.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moduleProvider = __webpack_require__(/*! ./moduleProvider */ "./modules/moduleProvider.js");

var _moduleProvider2 = _interopRequireDefault(_moduleProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleAttacher = function () {
    function ModuleAttacher(moduleManager) {
        _classCallCheck(this, ModuleAttacher);

        this.moduleManager = moduleManager;
    }

    _createClass(ModuleAttacher, [{
        key: "sprite",
        value: function sprite(tag) {
            return _moduleProvider2.default.attach(this.moduleManager, 'sprite', tag);
        }
    }]);

    return ModuleAttacher;
}();

exports.default = ModuleAttacher;

/***/ }),

/***/ "./modules/moduleManager.js":
/*!**********************************!*\
  !*** ./modules/moduleManager.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _map = __webpack_require__(/*! ../structures/map */ "./structures/map.js");

var _map2 = _interopRequireDefault(_map);

var _list = __webpack_require__(/*! ../structures/list */ "./structures/list.js");

var _list2 = _interopRequireDefault(_list);

var _moduleAttacher = __webpack_require__(/*! ./moduleAttacher */ "./modules/moduleAttacher.js");

var _moduleAttacher2 = _interopRequireDefault(_moduleAttacher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleManager = function () {
    function ModuleManager(entity) {
        _classCallCheck(this, ModuleManager);

        this.entity = entity || null;
        this.attached = new _map2.default();
        this._pendingModules = new _list2.default();
        this.attach = new _moduleAttacher2.default(this);
    }

    _createClass(ModuleManager, [{
        key: 'detach',
        value: function detach(moduleName, index) {}
    }]);

    return ModuleManager;
}();

exports.default = ModuleManager;

/***/ }),

/***/ "./modules/moduleProvider.js":
/*!***********************************!*\
  !*** ./modules/moduleProvider.js ***!
  \***********************************/
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

var ModuleProviderManager = function () {
    function ModuleProviderManager() {
        _classCallCheck(this, ModuleProviderManager);

        this.proxyModules = new _map2.default();
    }

    _createClass(ModuleProviderManager, [{
        key: 'attach',
        value: function attach(manager, moduleName, args) {
            var modules = manager.attached;

            if (modules.has(moduleName)) throw new Error('ModuleManager.attach: Could not attach module ' + moduleName + '. Already exists');

            if (!this.proxyModules.has(moduleName)) throw new Error('ModuleManager.attach: Module type ' + moduleName + ' don\'t exists.');

            var mod = this.proxyModules.get(moduleName)(manager, args);
            manager._pendingModules.push(mod);
            return mod;
        }
    }, {
        key: 'register',
        value: function register(moduleName, func) {
            if (!ModuleProvider.proxyModules.has(moduleName)) ModuleProvider.proxyModules.set(moduleName, func); // { type: moduleType, func: func }
        }
    }]);

    return ModuleProviderManager;
}();

var ModuleProvider = new ModuleProviderManager();

exports.default = ModuleProvider;

/***/ }),

/***/ "./modules/renderables/drawImage.js":
/*!******************************************!*\
  !*** ./modules/renderables/drawImage.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


function DrawImage(context, source, transform, frame) {

    if (context === undefined) return false;

    if (source === undefined || source == null) return false;

    var resolution = 1;
    var matrix = transform.matrix;
    var origin = transform.origin;

    // destination
    var dx = origin.x * -frame.width / resolution;
    var dy = origin.y * -frame.height / resolution;

    context.setTransform(matrix.a[0], matrix.a[1], // 2
    matrix.a[3], matrix.a[4], // 5
    matrix.a[6] * resolution, matrix.a[7] * resolution);

    //context.globalAlpha = this.alpha;

    context.drawImage(source, // image
    frame.x, // sx - pos crop x
    frame.y, // sy - pos crop y
    frame.width, // sWidth - crop width
    frame.height, // sHeight - crop height
    dx, // destination x
    dy, // destination y
    frame.width / resolution, frame.height / resolution);

    return true;
}

exports.default = DrawImage;

/***/ }),

/***/ "./modules/renderables/index.js":
/*!**************************************!*\
  !*** ./modules/renderables/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Renderable: __webpack_require__(/*! ./renderable */ "./modules/renderables/renderable.js"),
    Sprite: __webpack_require__(/*! ./sprite */ "./modules/renderables/sprite.js")

};

/***/ }),

/***/ "./modules/renderables/renderable.js":
/*!*******************************************!*\
  !*** ./modules/renderables/renderable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _boundingbox = __webpack_require__(/*! ../../math/boundingbox */ "./math/boundingbox.js");

var _boundingbox2 = _interopRequireDefault(_boundingbox);

var _module = __webpack_require__(/*! ../module */ "./modules/module.js");

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import { EntityType } from '../entitytype';


var Renderable = function (_Module) {
    _inherits(Renderable, _Module);

    function Renderable(moduleManager) {
        _classCallCheck(this, Renderable);

        //this.moduleName = "Renderable";
        var _this = _possibleConstructorReturn(this, (Renderable.__proto__ || Object.getPrototypeOf(Renderable)).call(this, 'render', moduleManager));

        _this._layerID = 0;
        _this._depth = 0;
        _this._visible = true;
        _this._alpha = 1;
        _this._depthDirty = true;
        _this.bounds = new _boundingbox2.default();
        _this.source = null;

        //this.type = EntityType.Renderable;
        return _this;
    }

    _createClass(Renderable, [{
        key: 'setSource',
        value: function setSource(source) {
            if (source === undefined) return;

            if (this.source != source) this.source = source;
        }
    }, {
        key: 'render',
        value: function render(context, matrix) {
            if (!this._visible) return;
        }
    }, {
        key: 'depth',
        get: function get() {
            return this._depthSorting;
        },
        set: function set(value) {
            if (value != this._depthSorting) {
                this._depthSorting = value;
                this._depthDirty = true;
            }
            return this;
        }
    }, {
        key: 'visible',
        get: function get() {
            return this._visible;
        },
        set: function set(value) {
            this._visible = value;
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
            this._alpha = alpha;
            return this;
        }
    }]);

    return Renderable;
}(_module2.default);

exports.default = Renderable;

/***/ }),

/***/ "./modules/renderables/sprite.js":
/*!***************************************!*\
  !*** ./modules/renderables/sprite.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderable = __webpack_require__(/*! ./renderable */ "./modules/renderables/renderable.js");

var _renderable2 = _interopRequireDefault(_renderable);

var _rect = __webpack_require__(/*! ../../math/rect */ "./math/rect.js");

var _rect2 = _interopRequireDefault(_rect);

var _drawImage = __webpack_require__(/*! ./drawImage */ "./modules/renderables/drawImage.js");

var _drawImage2 = _interopRequireDefault(_drawImage);

var _moduleProvider = __webpack_require__(/*! ../moduleProvider */ "./modules/moduleProvider.js");

var _moduleProvider2 = _interopRequireDefault(_moduleProvider);

var _updateTransformBounds = __webpack_require__(/*! ../core/updateTransformBounds */ "./modules/core/updateTransformBounds.js");

var _updateTransformBounds2 = _interopRequireDefault(_updateTransformBounds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sprite = function (_Renderable) {
    _inherits(Sprite, _Renderable);

    function Sprite(moduleManager) {
        _classCallCheck(this, Sprite);

        var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this, moduleManager));

        _this._type = "sprite";
        _this.frame = new _rect2.default();
        return _this;
    }

    _createClass(Sprite, [{
        key: "setFrame",
        value: function setFrame(x, y, width, height) {
            this.frame.set(x, y, width, height);
        }
    }, {
        key: "setFrameRect",
        value: function setFrameRect(rect) {
            this.frame.set(x, y, width, height);
        }
    }, {
        key: "setSprite",
        value: function setSprite(tag) {

            if (this.entity != null || this.entity !== undefined) {
                var sprite = this.entity.game.system.cache.getAsset('images', tag);

                if (sprite != null) {
                    this.setSource(sprite.data, true);
                }
            } else {
                throw new Error("Sprite.setSprite: Can not set Sprite. The entity is not in the game");
            }
        }
    }, {
        key: "setSource",
        value: function setSource(image, changeFrame) {

            if (changeFrame === undefined) changeFrame = false;

            if (this.source != image) this.source = image;

            if (changeFrame) this.setFrame(0, 0, this.source.width, this.source.height);
        }
    }, {
        key: "moduleUpdate",
        value: function moduleUpdate() {

            if (!this.entity.transform._isDirty) return;

            (0, _updateTransformBounds2.default)(this.bounds, this.frame, this.entity.transform);
        }
    }, {
        key: "render",
        value: function render(context) {
            if (!this._visible) return false;

            return (0, _drawImage2.default)(context, this.source, this.entity.transform, this.frame);
        }
    }]);

    return Sprite;
}(_renderable2.default);

exports.default = Sprite;


_moduleProvider2.default.register('sprite', function (moduleManager, tag) {

    var spr = new Sprite(moduleManager);

    if (tag !== undefined) {
        spr.setSprite(tag);
    }

    return spr;
});

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
    this.draw = game.system.draw;
    this.context = game.system.render.context;
    this.x = 8;
    this.y = 12;
    this.lineHeight = 14;
    this.column = 100;
    this.font = "10px Verdana";
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
      this.draw.alpha(0.5);
      this.draw.rectangle(0, 0, this.game.width, 14 * 4 + 16, this.bgcolor);
      this.draw.alpha(1);
      //this.drawLine("FPS: " + Math.round(this.game.time.fps) + " / 60");
      //this.drawLine("Instances in view: " + this.game.camera.instancesInView);
      //this.drawLine("Instances " + this.game.system.entityList.length);
      this.drawLine("Draw Calls: " + this.game.system.render.drawCalls); /*this.game.physics.length);*/
      this.x += this.game.width / 2;
      this.y = 12 + 8;
      //this.drawLine("Sounds count " + this.game.sound.length);
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

/***/ "./render/define.js":
/*!**************************!*\
  !*** ./render/define.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var RENDERING_TYPE = exports.RENDERING_TYPE = {
    NEAREST: 0,
    LINEAR: 1
};

/***/ }),

/***/ "./render/draw.js":
/*!************************!*\
  !*** ./render/draw.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameSystemManager = __webpack_require__(/*! ../core/gameSystemManager */ "./core/gameSystemManager.js");

var _gameSystemManager2 = _interopRequireDefault(_gameSystemManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Draw = function () {
  function Draw(game) {
    _classCallCheck(this, Draw);

    this.game = game;
    this.cache = null;
    this.context = null;
  }

  _createClass(Draw, [{
    key: "init",
    value: function init() {

      this.cache = this.game.system.cache;
      this.context = this.game.system.render.context;
      return this;
    }
  }, {
    key: "font",
    value: function font(fontname, size) {

      this.context.font = size + "px " + fontname;
    }
  }, {
    key: "text",
    value: function text(_text, x, y, color) {

      if (color === undefined) color = 'black';

      this.context.fillStyle = color;
      this.context.fillText(_text, x, y);
    }
  }, {
    key: "sprite",
    value: function sprite(tag, x, y, anchor) {

      var img = this.cache.getAsset('images', tag);

      if (img != null) {

        if (anchor === undefined) {
          anchor[0] = 0;
          anchor[1] = 0;
        }

        var ctx = this.context;

        ctx.save();

        ctx.translate(x - img.width * anchor[0], y - img.height * anchor[1]);

        ctx.drawImage(img, 0, 0, img.width, img.height);

        ctx.restore();
      }
    }
  }, {
    key: "spriteTransformed",
    value: function spriteTransformed(tag, x, y, xscale, yscale, angle) {}
  }, {
    key: "rectangle",
    value: function rectangle(x, y, width, height, color) {

      this.context.fillStyle = color;
      this.context.fillRect(x, y, width, height);
    }
  }, {
    key: "outlineRectangle",
    value: function outlineRectangle(x, y, width, height, color, outlineWidth) {

      this.context.beginPath();
      this.context.lineWidth = outlineWidth;
      this.context.setLineDash([6]);
      this.context.strokeStyle = color;
      this.context.rect(x, y, width, height);
      this.context.stroke();
    }
  }, {
    key: "alpha",
    value: function alpha(a) {

      this.context.globalAlpha = a;
    }
  }, {
    key: "color",
    value: function color(_color) {

      this.context.fillStyle = _color;
    }
  }, {
    key: "boundingbox",
    value: function boundingbox(bb, color) {

      if (color === undefined) color = 'black';
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.outlineRectangle(bb.min.x, bb.min.y, bb.max.x - bb.min.x, bb.max.y - bb.min.y, color, 2);
    }
  }]);

  return Draw;
}();

exports.default = Draw;


_gameSystemManager2.default.register('Draw', Draw, 'draw');

/***/ }),

/***/ "./render/index.js":
/*!*************************!*\
  !*** ./render/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    RenderLayer: __webpack_require__(/*! ./renderlayer */ "./render/renderlayer.js"),
    RenderLayerManagement: __webpack_require__(/*! ./renderlayersmanagement */ "./render/renderlayersmanagement.js"),
    Render: __webpack_require__(/*! ./render */ "./render/render.js"),
    Draw: __webpack_require__(/*! ./draw */ "./render/draw.js")
};

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

var _renderlayersmanagement = __webpack_require__(/*! ./renderlayersmanagement */ "./render/renderlayersmanagement.js");

var _renderlayersmanagement2 = _interopRequireDefault(_renderlayersmanagement);

var _canvas = __webpack_require__(/*! ./canvas/canvas */ "./render/canvas/canvas.js");

var _canvas2 = _interopRequireDefault(_canvas);

var _define = __webpack_require__(/*! ./define */ "./render/define.js");

var _gameSystemManager = __webpack_require__(/*! ../core/gameSystemManager */ "./core/gameSystemManager.js");

var _gameSystemManager2 = _interopRequireDefault(_gameSystemManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Render = function () {
    function Render(game) {
        _classCallCheck(this, Render);

        this.game = game;
        this.layer = new _renderlayersmanagement2.default(this.game);
        this.canvas = _canvas2.default.create(this.game.parent, this.game.width, this.game.height);
        this.context = this.canvas.getContext("2d", { alpha: false });
        this.imageRendering = game.config.pixelelated ? _define.RENDERING_TYPE.NEAREST : _define.RENDERING_TYPE.LINEAR;

        this._backgroundColor = '#000';
        this._alpha = 1;
        this._enable = true;
        this.clear = true;
        this.drawCalls = 0;
    }

    _createClass(Render, [{
        key: 'renderBegin',
        value: function renderBegin() {

            if (this.clear) {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }

            this.context.fillStyle = this._backgroundColor;
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.drawCalls = 0;
        }
    }, {
        key: 'renderEnd',
        value: function renderEnd() {
            this.context.globalAlpha = 1;
            this.context.globalCompositeOperation = 'source-over';
        }
    }, {
        key: 'render',
        value: function render(scene) {
            if (!this._enable) return;

            this.context.setTransform(1, 0, 0, 1, 0, 0);

            // alpha
            if (this._alpha !== 1) {
                ctx.globalAlpha = 1;
                this._alpha = 1;
            }

            // blend
            this.context.globalCompositeOperation = 'source-over';

            for (var i = 0; i < this.layer.renderLayers.length; i++) {
                var layer = this.layer.renderLayers.at(i);

                if (!layer.enable) continue;

                layer.render(this.context);

                this.drawCalls += layer.drawCalls;
            }

            this.game.scene.render();

            if (this.game.debug != null) {

                this.context.setTransform(1, 0, 0, 1, 0, 0);
                this.game.debug.test();
                //console.log("asdasd");
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

exports.default = Render;


_gameSystemManager2.default.register('Render', Render, 'render');

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

var _list = __webpack_require__(/*! ../structures/list */ "./structures/list.js");

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RenderLayer = function () {
    function RenderLayer(game, layerName) {
        _classCallCheck(this, RenderLayer);

        this._name = layerName;
        this.game = game;
        this.renderList = new _list2.default(true);
        this.__drawCalls = 0;
        this.__enable = true;
        this.__isDirty = false;
    }

    _createClass(RenderLayer, [{
        key: 'add',


        // Add renderable components
        value: function add(renderer) {

            if (renderer === undefined) return;

            this.renderList.push(renderer);
            // this.renderer.__renderLayer = this;
            this.__isDirty = true;
        }
    }, {
        key: 'remove',
        value: function remove(renderer) {
            return this.renderList.remove(renderer);
        }
    }, {
        key: 'removeAt',
        value: function removeAt(index) {}
    }, {
        key: 'at',
        value: function at(index) {
            if (index < 0 || index >= this.__renderers.size) {
                throw new Error('RenderLayer.at: Renderer at ' + index + ' does not exist in the render layer list: \"' + name + "\".");
            }
            return this.renderList.at(index);
        }
    }, {
        key: 'render',
        value: function render(context) {
            this.__drawCalls = 0;

            if (!this.__enable) return;

            if (this.__isDirty) {
                this.renderList.sort(this.sortDepth);

                this.__isDirty = false;
            }

            var self = this;

            this.renderList.each(function (element) {
                if (element.render(context)) self.__drawCalls++;
            });
        }
    }, {
        key: 'sortDepth',
        value: function sortDepth(a, b) {
            // sort ascending

            return a._depthSorting - b._depthSorting;

            /*this.__renderers.sort(
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
              });*/
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

exports.default = RenderLayer;

/***/ }),

/***/ "./render/renderlayersmanagement.js":
/*!******************************************!*\
  !*** ./render/renderlayersmanagement.js ***!
  \******************************************/
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

var _list = __webpack_require__(/*! ../structures/list */ "./structures/list.js");

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RenderLayersManagement = function () {
    function RenderLayersManagement(game) {
        _classCallCheck(this, RenderLayersManagement);

        this.game = game;
        this.renderLayers = new _list2.default();
        //this.__renderLayersMap = new Map();
        this.add('default');
    }

    _createClass(RenderLayersManagement, [{
        key: 'add',
        value: function add(name) {

            if (this.contains(name)) {
                throw new Error("Render.add: There is already a RenderLayer called: \"" + name + "\".");
            }

            //this.__renderLayersMap.set(name, this.__renderLayers.length);
            this.renderLayers.push(new _renderlayer2.default(this.game, name));
        }
    }, {
        key: 'remove',
        value: function remove(name) {
            if (typeof name !== 'string') throw new Error("Render.remove: The value name is not a string.");

            if (name === "default") throw new Error("Render.remove: You can not remove the \"default\" layer.");

            if (!this.__renderLayersMap.has(name)) throw new Error("Render.remove: Could not remove layer. There is no layer named \"" + name + "\".");

            var index = this.__renderLayersMap.get(name);

            this.renderLayers.erase(name);
        }
    }, {
        key: 'contains',
        value: function contains(layerName) {
            if (typeof layerName !== 'string') throw new Error("Render.contains: The value name is not a string.");

            var val = this.renderLayers.each(function (layer) {

                if (layer.name == layerName) {
                    return true;
                }
            });

            return val || false;
        }
    }]);

    return RenderLayersManagement;
}();

exports.default = RenderLayersManagement;

/***/ }),

/***/ "./scene/scene.js":
/*!************************!*\
  !*** ./scene/scene.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _entityhierarchy = __webpack_require__(/*! ../entities/entityhierarchy */ "./entities/entityhierarchy.js");

var _entityhierarchy2 = _interopRequireDefault(_entityhierarchy);

var _camera = __webpack_require__(/*! ../entities/camera */ "./entities/camera.js");

var _camera2 = _interopRequireDefault(_camera);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function () {
  function Scene(name) {
    _classCallCheck(this, Scene);

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

  _createClass(Scene, [{
    key: "instanceDestroy",
    value: function instanceDestroy(gameObject) {

      if (gameObject['destroy']) gameObject.destroy();

      //console.log("deleted " + gameObject._id)

      var index = this.instances.indexOf(gameObject);

      this.instances.splice(index, 1);
    }
  }, {
    key: "addGameObject",
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
    key: "setBounds",
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

/***/ "./scene/scenemanager.js":
/*!*******************************!*\
  !*** ./scene/scenemanager.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _map = __webpack_require__(/*! ../structures/map */ "./structures/map.js");

var _map2 = _interopRequireDefault(_map);

var _scene = __webpack_require__(/*! ./scene */ "./scene/scene.js");

var _scene2 = _interopRequireDefault(_scene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SceneManager = function () {
  function SceneManager(game) {
    _classCallCheck(this, SceneManager);

    this.game = game;
    this.entityUpdateList = null;
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
    key: 'init',
    value: function init() {
      this.entityUpdateList = this.game.system.entityList;
    }
  }, {
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

      var newScene = new _scene2.default(this.game, sceneName);
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

      this.game.system.inject(this.current_scene);

      this.current_scene_name = sceneName;

      //this.game.time.refresh();


      //this.current_scene.camera = this.game.world.camera;

      //this.game.instance.scene = this.current_scene;

      this._setup = false;
    }
  }, {
    key: 'clearCurrentScene',
    value: function clearCurrentScene() {

      if (this.current_scene_name) {

        this.game.system.unject(this.current_scene);

        if (this.onDestroyCallback) {
          this.onDestroyCallback.call(this.current_scene, this.game);
        }

        if (this._clearCache) {
          this.game.cache.clear();
        }

        //this.game.world.destroyAllChilds();
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

          this.game.system.load.reset();
          this.onPreloadCallback.call(this.current_scene, this.game);

          if (this.game.system.load.totalQueuedFiles === 0) {
            this.preloadComplete();
          } else {

            this.game.system.load.start();
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
    value: function update(dt) {

      if (this._setup) {

        if (this.current_scene != null) {
          this.entityUpdateList.update(dt);

          this.entityUpdateList.lateUpdate(dt);
        }
        /*if (this.onUpdateCallback)
        {
            this.onUpdateCallback.call(this.current_scene, this.game);
        }*/

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

/***/ "./structures/index.js":
/*!*****************************!*\
  !*** ./structures/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Utils: __webpack_require__(/*! ./useful */ "./structures/useful/index.js"),
    SetData: __webpack_require__(/*! ./set */ "./structures/set.js"),
    Map: __webpack_require__(/*! ./map */ "./structures/map.js"),
    List: __webpack_require__(/*! ./list */ "./structures/list.js")
};

/***/ }),

/***/ "./structures/list.js":
/*!****************************!*\
  !*** ./structures/list.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mergesort = __webpack_require__(/*! ./useful/mergesort */ "./structures/useful/mergesort.js");

var _mergesort2 = _interopRequireDefault(_mergesort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = function () {
    function List(elements, unique) {
        _classCallCheck(this, List);

        this.unique = unique || true;
        this.childs = [];

        if (Array.isArray(elements)) {
            for (var i = 0; i < elements.length; i++) {
                this.push(elements[i]);
            }
        }
    }

    _createClass(List, [{
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
        value: function eraseList(listToRemove, size) {

            if (size === undefined) size = listToRemove.size;

            for (var i = 0; i < size; i++) {
                var child = listToRemove.childs[i];
                this.erase(child);
                /*let child = this.listToRemove[i];
                let index = this._instances.indexOf(gameObject);
                  if (index > -1)
                   this._instances.splice(index, 1);*/
            }
        }
    }, {
        key: 'has',
        value: function has(child) {
            return this.childs.indexOf(child) > -1;
        }
    }, {
        key: 'empty',
        value: function empty() {
            return this.childs.length == 0;
        }
    }, {
        key: 'clear',
        value: function clear() {
            var i = this.childs.length;

            while (i--) {
                this.erase(this.childs[i]);
            }

            return this;
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
        value: function each(callback) {
            var params = [null];

            var content = this.childs;

            for (var i = 0; i < arguments.length; i++) {
                params.push(arguments[i + 1]);
            }for (var _i = 0; _i < content.length; _i++) {
                params[0] = _i;
                var r = callback(content[_i], params);
                if (r !== undefined) return r;
                //break;
            }
        }
    }, {
        key: 'sort',
        value: function sort(predicate) {
            if (predicate === undefined) return;
            return (0, _mergesort2.default)(this.childs, predicate);

            //childs.sort(predicate);
        }
    }, {
        key: 'swap',
        value: function swap(childA, childB) {

            if (childA === childB) return;

            var idx0 = this.indexOf(childA);
            var idx1 = this.indexOf(childB);

            if (idx0 < 0 || idx1 < 0) {
                throw new Error('List.swap: Could not swap childrens. The objects are not in the list.');
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
                throw new Error('List.swapByIndex: Could not swap childrens by index. The objects are not in the list.');
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
        key: 'size',
        get: function get() {
            return this.childs.length;
        }
    }, {
        key: 'length',
        get: function get() {
            return this.childs.length;
        }
    }, {
        key: 'first',
        get: function get() {
            if (this.list.length > 0) return this.childs[0];else return null;
        }
    }, {
        key: 'last',
        get: function get() {
            if (this.childs.length > 0) {
                var idx = this.childs.length - 1;
                return this.childs[idx];
            } else return null;
        }
    }]);

    return List;
}();

exports.default = List;

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

var SetData = function () {
    function SetData(elements) {
        _classCallCheck(this, SetData);

        this._content = [];
        this._size = 0;

        if (Array.isArray(elements)) {
            for (var i = 0; i < elements.length; i++) {
                this.set(elements[i]);
            }
        }
    }

    _createClass(SetData, [{
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

    return SetData;
}();

exports.default = SetData;

/***/ }),

/***/ "./structures/useful/index.js":
/*!************************************!*\
  !*** ./structures/useful/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    MergeSort: __webpack_require__(/*! ./mergesort */ "./structures/useful/mergesort.js")
};

/***/ }),

/***/ "./structures/useful/mergesort.js":
/*!****************************************!*\
  !*** ./structures/useful/mergesort.js ***!
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

/***/ "./time/gameTime.js":
/*!**************************!*\
  !*** ./time/gameTime.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Wrapper class for game time

var GameTime = function () {
    function GameTime(game) {
        _classCallCheck(this, GameTime);

        this.game = game;
    }

    _createClass(GameTime, [{
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

/***/ "./time/updateStep.js":
/*!****************************!*\
  !*** ./time/updateStep.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestAnimationFrame = __webpack_require__(/*! ../dom/requestAnimationFrame */ "./dom/requestAnimationFrame.js");

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UpdateStep = function () {
        function UpdateStep(game, config) {
                _classCallCheck(this, UpdateStep);

                // CORE
                this.game = game;
                this.requestAnimationFrame = new _requestAnimationFrame2.default(config.time.timeoutMode);
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
                this.fps = 60;
                this.fpsDesired = 60;
                this._nextFpsUpdate = 0;
                this._framesThisSecond = 0;

                // ACCUMALATOR METHOD
                this.interpolation = false;
                this.timeStep = 1000 / this.fpsDesired;
                this.minTimeStep = this.timeStep * 1.25;
                this.accumalator = 0;
                this.accumulatorMax = this.timeStep * 10;
                this.updateLast = 0;
                this.updateAverageDelta = 0;
                this.frameCounter = 0;
        }

        _createClass(UpdateStep, [{
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
                        this.accumalatorMethod(this.hiDeltaTime);

                        // game render
                        this.render(this.hiDeltaTime);
                }
        }, {
                key: "fpsUpdate",
                value: function fpsUpdate(timeStamp) {

                        if (timeStamp > this._nextFpsUpdate) {
                                this.fps = 0.25 * this._framesThisSecond + 0.75 * this.fps;

                                this._nextFpsUpdate = timeStamp + 1000;
                                this._framesThisSecond = 0;
                        }

                        this._framesThisSecond++;
                }
        }, {
                key: "accumalatorMethod",
                value: function accumalatorMethod(deltaTime) {

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
                                        this.loop(deltaUpdate / 1000);

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

/***/ "./utils/color.js":
/*!************************!*\
  !*** ./utils/color.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Color = exports.Color = {

  rgba: function rgba(r, g, b, a) {

    return 'rgba(' + r.toString() + ',' + g.toString() + ',' + b.toString() + ',' + (a / 255).toString() + ')';
  },

  /*
  Source code: https://github.com/mjackson/mjijackson.github.com/blob/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.txt
  */
  HSLtoRGB: function HSLtoRGB(h, s, l, a) {

    var alp = 255;

    if (a !== undefined || a !== null) alp = a;

    h = h / 255.0;
    s = s / 255.0;
    l = l / 255.0;

    var result = { r: l, b: l, g: l };

    if (s !== 0) {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      result.r = this.hueToColor(p, q, h + 1 / 3);
      result.g = this.hueToColor(p, q, h);
      result.b = this.hueToColor(p, q, h - 1 / 3);
    }

    result.r = Math.floor(result.r * 255);
    result.g = Math.floor(result.g * 255);
    result.b = Math.floor(result.b * 255);

    return this.rgba(result.r, result.g, result.b, alp);
  },

  /*
  Source code: https://github.com/mjackson/mjijackson.github.com/blob/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.txt
  */
  hueToColor: function hueToColor(p, q, t) {

    if (t < 0) t += 1;

    if (t > 1) t -= 1;

    if (t < 1 / 6) return p + (q - p) * 6 * t;

    if (t < 1 / 2) return q;

    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;

    return p;
  },

  /*
  Source code: http://jsfiddle.net/mushigh/myoskaos/
  */
  rgbToHex: function rgbToHex(r, g, b) {

    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  },

  /*
  Source code: http://jsfiddle.net/mushigh/myoskaos/
  */
  componentToHex: function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

};

module.exports = Color;

/***/ }),

/***/ "./utils/objectutils.js":
/*!******************************!*\
  !*** ./utils/objectutils.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectUtils = function () {
    function ObjectUtils() {
        _classCallCheck(this, ObjectUtils);
    }

    _createClass(ObjectUtils, [{
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
        key: 'getURL',
        value: function getURL(url, baseURL) {
            if (!url) return null;

            if (url.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/)) return url;else return baseURL + url;
        }
    }]);

    return ObjectUtils;
}();

;

exports.default = new ObjectUtils();

/***/ }),

/***/ "./utils/pathutils.js":
/*!****************************!*\
  !*** ./utils/pathutils.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PathUtils = function () {
  function PathUtils() {
    _classCallCheck(this, PathUtils);
  }

  _createClass(PathUtils, [{
    key: "getExtension",
    value: function getExtension(filename) {
      return filename.substring(filename.lastIndexOf('.') + 1, filename.length) || "";
    }
  }]);

  return PathUtils;
}();

exports.default = new PathUtils();

/***/ })

/******/ });
});
//# sourceMappingURL=scintilla.dev.js.map