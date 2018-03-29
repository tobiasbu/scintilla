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
  KeyCode: __webpack_require__(/*! ./input/KeyCode */ "./input/KeyCode.js"),
  MouseButton: __webpack_require__(/*! ./input/MouseButton */ "./input/MouseButton.js"),
  Input: __webpack_require__(/*! ./input */ "./input/index.js"),
  // MATH
  MathUtils: __webpack_require__(/*! ./math/MathUtils */ "./math/MathUtils.js"),
  Matrix: __webpack_require__(/*! ./math/Matrix */ "./math/Matrix.js"),
  // ENTITIES
  Camera: __webpack_require__(/*! ./camera/Camera */ "./camera/Camera.js"),
  Module: __webpack_require__(/*! ./modules */ "./modules/index.js"),
  Entity: __webpack_require__(/*! ./entities */ "./entities/index.js"),
  // CORE
  Resources: __webpack_require__(/*! ./resources */ "./resources/index.js"),
  Cache: __webpack_require__(/*! ./cache/CacheManager */ "./cache/CacheManager.js"),
  Loader: __webpack_require__(/*! ./loader */ "./loader/index.js"),
  Game: __webpack_require__(/*! ./core/Game */ "./core/Game.js"),
  // UTILITIES
  Color: __webpack_require__(/*! ./utils/Color */ "./utils/Color.js")
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cache = function () {
    function Cache(wrapperFunction) {
        _classCallCheck(this, Cache);

        this.resources = new _Map2.default();
        this.adderWrapper = wrapperFunction || undefined;
    }

    _createClass(Cache, [{
        key: "add",
        value: function add(tag, asset) {

            var resource = asset;

            if (this.adderWrapper !== undefined) resource = this.adderWrapper(tag, asset);

            this.resources.set(tag, resource);
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameSystemManager = __webpack_require__(/*! ../core/GameSystemManager */ "./core/GameSystemManager.js");

var _GameSystemManager2 = _interopRequireDefault(_GameSystemManager);

var _ImageResource = __webpack_require__(/*! ../resources/ImageResource */ "./resources/ImageResource.js");

var _ImageResource2 = _interopRequireDefault(_ImageResource);

var _TilemapResource = __webpack_require__(/*! ../resources/TilemapResource */ "./resources/TilemapResource.js");

var _TilemapResource2 = _interopRequireDefault(_TilemapResource);

var _Cache = __webpack_require__(/*! ./Cache */ "./cache/Cache.js");

var _Cache2 = _interopRequireDefault(_Cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CacheTypes = ['image', 'json', 'audio', 'text', 'tilemap'];

/**
* Cache manager - holds file data
* @class Cache
* @constructor
*/

var CacheManager = function () {
  function CacheManager(game) {
    _classCallCheck(this, CacheManager);

    this.game = game;

    var self = this;

    this.image = new _Cache2.default(function (tag, data) {
      return new _ImageResource2.default(tag, data);
    });

    this.tilemap = new _Cache2.default(function (tag, data) {
      return new _TilemapResource2.default(tag, data, self);
    });

    this.json = new _Cache2.default();
    this.text = new _Cache2.default();
  }

  /*addTilemap(tag, dataFormat) {
    this._cache.tilemap[tag] = new TilemapResource(dataFormat, tag, this);
  }
    addJSON(tag, dataFormat) {
    this._cache.json[tag] = dataFormat;
  }
    addImage(tag, url, data) {
      if (this.tagExists('images',tag))
      this.removeTagAt('images',tag);
      
    var img = new ImageResource(data,tag)
      this._cache.images[tag] = img;
    }
    addSound(tag, url,data,webAudio) {
      var decoded = false;
      if (!webAudio)
    {
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
    soundDecoded(tag, data) {
      var sound = this.getAssetInfo("sounds",tag);
      sound.data = data;
    sound.decoded = true;
    sound.isDecoding = false;
    }*/

  _createClass(CacheManager, [{
    key: "hasCache",
    value: function hasCache(cacheType) {
      return _typeof(CacheTypes[cacheType]) !== undefined;
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

    // SOUND STUFF

  }]);

  return CacheManager;
}();

exports.default = CacheManager;


_GameSystemManager2.default.register('Cache', CacheManager, 'cache');

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BoundingBox = __webpack_require__(/*! ../math/BoundingBox */ "./math/BoundingBox.js");

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

var _Transform = __webpack_require__(/*! ../transform/Transform */ "./transform/Transform.js");

var _Transform2 = _interopRequireDefault(_Transform);

var _Color = __webpack_require__(/*! ../utils/Color */ "./utils/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _GameSystemManager = __webpack_require__(/*! ../core/GameSystemManager */ "./core/GameSystemManager.js");

var _GameSystemManager2 = _interopRequireDefault(_GameSystemManager);

var _MathUtils = __webpack_require__(/*! ../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _Vector = __webpack_require__(/*! ../math/Vector */ "./math/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camera = function () {
  function Camera(game) {
    _classCallCheck(this, Camera);

    this.game = game;
    //this._view = new Rect(0, 0, game.config.width, game.config.height);
    this.bounds = new _BoundingBox2.default();
    this.transform = new _Transform2.default();
    this.width = game.config.camera.width;
    this.height = game.config.camera.height;
    this._onResize(this.width, this.height);
    //this.transform.origin.set(0.5,0.5)
    //this.centerView();
    this._resolution = 1;
    this.aspectRatio = 1;

    this._backgroundColor = _Color2.default.rgbToHex(0, 0, 0);
    this._roundPixels = false;
  }

  _createClass(Camera, [{
    key: 'centerView',
    value: function centerView() {
      this.x = this.width * 0.5;
      this.y = this.height * 0.5;
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'centerToEntity',
    value: function centerToEntity(entity) {
      this.x = entity.position.x;
      this.y = entity.position.y;
      this.transform._isDirty = true;
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
      this._onResize(width, height);
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'setView',
    value: function setView(x, y, width, height) {
      this.transform.position.x = x;
      this.transform.position.y = y;
      this._onResize(width, height);
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.transform.reset();
    }
  }, {
    key: '_onResize',
    value: function _onResize(width, height) {

      this.width = width;
      this.height = height;
      this.aspectRatio = this.width / this.height;
      //this._areaRatio = (this.width - (_aspectPreviewRatioBox.x * 2)) / height;
      //this._pixelUnit =  (height / (settings.OrthographicSize * 2)) * _areaRatio;
    }
  }, {
    key: 'position',
    get: function get() {
      return {
        x: this.transform.position.x,
        y: this.transform.position.y
      };
    },
    set: function set(value) {
      this.transform.position.x = value.x;
      this.transform.position.y = value.y;
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'x',
    get: function get() {
      return this.transform.position.x;
    },
    set: function set(value) {
      this.transform.position.x = value;
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'y',
    get: function get() {
      return this.transform.position.y;
    },
    set: function set(value) {
      this.transform.position.y = value;
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'scale',
    get: function get() {
      return this.transform.scale.x;
    },
    set: function set(value) {
      this.transform.scale.x = value;
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'angle',
    get: function get() {
      return this.transform.angle;
    },
    set: function set(value) {
      this.transform.angle = value;
      this.transform.rotation = value * _MathUtils2.default.degToRad;
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'origin',
    get: function get() {
      return this.transform.origin;
    },
    set: function set(value) {
      this.transform.x = value.x;
      this.transform.y = value.y;
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'rotation',
    get: function get() {
      return this.transform.rotation;
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
      this.transform._isDirty = true;
      return this;
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


_GameSystemManager2.default.register('Camera', Camera, 'camera');

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateCamera(camera, canvas) {

  if (!camera.transform._isDirty) return;

  var t = camera.transform;

  var pixelUnit = { x: 1, y: 1 };

  pixelUnit.x = canvas.width / camera.width;
  pixelUnit.y = canvas.height / camera.height;

  if (camera.roundPixels) t.position.round();

  if (t.rotation != t._oldRotation) {
    t._oldRotation = t.rotation;
    t._cosSin.y = Math.sin(t.rotation);
    t._cosSin.x = Math.cos(t.rotation);
  }

  var origin = {
    x: camera.width * t.origin.x,
    y: camera.height * t.origin.y
  };

  var pos = { x: -(t.position.x + origin.x),
    y: -(t.position.y + origin.y) };

  // todo resolution
  t.matrix.setIdentity().scale(pixelUnit.x, pixelUnit.y) // resolution
  .translate(pos.x, pos.y).scale(t.scale.x, t.scale.x);

  (0, _ComputeBounds2.default)(camera.bounds, camera.transform, camera.width, camera.height, pos);

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

var _ObjectUtils = __webpack_require__(/*! ../utils/ObjectUtils */ "./utils/ObjectUtils.js");

var _ObjectUtils2 = _interopRequireDefault(_ObjectUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = function Config(config) {
        _classCallCheck(this, Config);

        if (config === undefined) config = {};

        var callback = _ObjectUtils2.default.getValue;
        var callback_2 = _ObjectUtils2.default.getPropertyValue;

        // view and canvas
        this.width = callback(config, 'width', 640);
        this.height = callback(config, 'height', 480);
        this.parent = callback(config, 'parent', null);
        this.debug = callback(config, 'debug', false);
        //this.floatPrecision = callback(config, 'precision', undefined);
        //this.fixedFloat = callback(config, 'fixedFloat', undefined);

        // loader
        this.loader = {
                baseURL: callback_2(config, 'loader.baseURL', ''),
                path: callback_2(config, 'loader.path', ''),
                responseType: callback_2(config, 'loader.responseType', ''),
                async: callback_2(config, 'loader.async', true)
        };

        this.fps = callback(config, 'fps', 60);

        this.time = {
                timeoutMode: callback_2(config, 'time.timeOutMode', false)

        };

        this.camera = {
                width: callback_2(config, 'camera.width', this.width),
                height: callback_2(config, 'camera.height', this.height)
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Config = __webpack_require__(/*! ./Config */ "./core/Config.js");

var _Config2 = _interopRequireDefault(_Config);

var _Input = __webpack_require__(/*! ../input/Input */ "./input/Input.js");

var _Input2 = _interopRequireDefault(_Input);

var _SceneManager = __webpack_require__(/*! ../scene/SceneManager */ "./scene/SceneManager.js");

var _SceneManager2 = _interopRequireDefault(_SceneManager);

var _physics = __webpack_require__(/*! ../physics/physics */ "./physics/physics.js");

var _physics2 = _interopRequireDefault(_physics);

var _Debug = __webpack_require__(/*! ../others/Debug */ "./others/Debug.js");

var _Debug2 = _interopRequireDefault(_Debug);

var _GameSystemManager = __webpack_require__(/*! ./GameSystemManager */ "./core/GameSystemManager.js");

var _GameSystemManager2 = _interopRequireDefault(_GameSystemManager);

var _GameTime = __webpack_require__(/*! ../time/GameTime */ "./time/GameTime.js");

var _GameTime2 = _interopRequireDefault(_GameTime);

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
        this.config = new _Config2.default(config);

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
            this.input = new _Input2.default(this);
            this.scene = new _SceneManager2.default(this);
            this.system = new _GameSystemManager2.default(this);
            this.time = new _GameTime2.default(this);

            this.system.init();
            this.input.init();
            this.time.init(this.system.loop);

            if (this.debugMode) this.debug = new _Debug2.default(this);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RequestAnimationFrame = __webpack_require__(/*! ../dom/RequestAnimationFrame */ "./dom/RequestAnimationFrame.js");

var _RequestAnimationFrame2 = _interopRequireDefault(_RequestAnimationFrame);

var _GameSystemManager = __webpack_require__(/*! ./GameSystemManager */ "./core/GameSystemManager.js");

var _GameSystemManager2 = _interopRequireDefault(_GameSystemManager);

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
        this.updateStep = new _UpdateStep2.default(this.game, this.game.config);
        this.entityUpdateList = null;
        this.currentScene = null;
        this.camera = null;
        this.canvas = null;
    }

    _createClass(GameLoop, [{
        key: "init",
        value: function init() {
            this.updateStep.init(this);
            this.entityUpdateList = this.game.system.entityList;
            this.camera = this.system.camera;
            this.canvas = this.system.render.canvas;
        }
    }, {
        key: "loop",
        value: function loop(deltaTime) {

            // Core Managers

            this.game.input.update();

            // Entities and Scene Update

            this.currentScene = this.game.scene.currentScene;

            var shouldUpdate = this.currentScene != null && this.currentScene !== undefined;
            //let changeScene = (this.game.scene._changeScene != null || this.game.scene._changeScene !== undefined)

            //if (changeScene)
            this.game.scene.preUpdate();

            if (shouldUpdate) {

                if (this.game.scene._setup) {
                    // global scene update
                    if (this.currentScene.update !== undefined) this.currentScene.update(deltaTime);
                } else {
                    if (this.currentScene.loading !== undefined) this.currentScene.loading(deltaTime);
                }

                (0, _UpdateCamera2.default)(this.camera, this.canvas);

                this.entityUpdateList.update(deltaTime);

                this.entityUpdateList.lateUpdate(deltaTime);

                if (this.camera.transform._isDirty) this.camera.transform._isDirty = false;
            }
        }
    }, {
        key: "render",
        value: function render(deltaTime) {

            if (this.currentScene == null || this.currentScene === undefined) return;

            (0, _BeginDrawRender2.default)(this.system.render);

            (0, _DrawRender2.default)(this.system.render, this.camera, deltaTime);

            (0, _EndDrawRender2.default)(this.system.render);
        }
    }]);

    return GameLoop;
}();

exports.default = GameLoop;


_GameSystemManager2.default.register('GameLoop', GameLoop, 'loop');

/***/ }),

/***/ "./core/GameSystemManager.js":
/*!***********************************!*\
  !*** ./core/GameSystemManager.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SceneSystem = __webpack_require__(/*! ./SceneSystem */ "./core/SceneSystem.js");

var _SceneSystem2 = _interopRequireDefault(_SceneSystem);

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

            for (var property in _SceneSystem2.default) {

                var _sys = gameSystems[_SceneSystem2.default[property]];
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

/***/ "./core/SceneSystem.js":
/*!*****************************!*\
  !*** ./core/SceneSystem.js ***!
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

/***/ "./core/index.js":
/*!***********************!*\
  !*** ./core/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Config: __webpack_require__(/*! ./Config */ "./core/Config.js"),
    GameSystemManager: __webpack_require__(/*! ./GameSystemManager */ "./core/GameSystemManager.js"),
    SceneSystem: __webpack_require__(/*! ./SceneSystem */ "./core/SceneSystem.js"),
    GameLoop: __webpack_require__(/*! ./GameLoop */ "./core/GameLoop.js")
};

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameSystemManager = __webpack_require__(/*! ../core/GameSystemManager */ "./core/GameSystemManager.js");

var _GameSystemManager2 = _interopRequireDefault(_GameSystemManager);

var _SceneEntity = __webpack_require__(/*! ./SceneEntity */ "./entities/SceneEntity.js");

var _SceneEntity2 = _interopRequireDefault(_SceneEntity);

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
        key: "entity",
        value: function entity(entityName) {
            entityName = entityName || 'SceneEntity ' + this.entityList.size;
            return new _SceneEntity2.default(entityName, this.game);
        }
    }, {
        key: "sprite",
        value: function sprite(tag, entityName) {

            var entity = this.entity(entityName);
            entity.modules.attach.sprite(tag);

            if (this.scene.current_scene !== null) {
                this.entityList.add(entity);
            }

            return entity;
        }
    }, {
        key: "tilemap",
        value: function tilemap(tag, entityName) {
            var entity = this.entity(entityName);
            entity.modules.attach.tilemap(tag);

            if (this.scene.current_scene !== null) {
                this.entityList.add(entity);
            }

            return entity;
        }
    }]);

    return EntityFactory;
}();

exports.default = EntityFactory;


_GameSystemManager2.default.register('EntityFactory', EntityFactory, 'create');

/***/ }),

/***/ "./entities/EntityHierarchy.js":
/*!*************************************!*\
  !*** ./entities/EntityHierarchy.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entity2 = __webpack_require__(/*! ./Entity */ "./entities/Entity.js");

var _Entity3 = _interopRequireDefault(_Entity2);

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
}(_Entity3.default);

exports.default = EntityHierarchy;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _List = __webpack_require__(/*! ../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _GameSystemManager = __webpack_require__(/*! ../core/GameSystemManager */ "./core/GameSystemManager.js");

var _GameSystemManager2 = _interopRequireDefault(_GameSystemManager);

var _UpdateTransform = __webpack_require__(/*! ../transform/UpdateTransform */ "./transform/UpdateTransform.js");

var _UpdateTransform2 = _interopRequireDefault(_UpdateTransform);

var _Matrix = __webpack_require__(/*! ../math/Matrix */ "./math/Matrix.js");

var _Matrix2 = _interopRequireDefault(_Matrix);

var _ModulesUpdater = __webpack_require__(/*! ../modules/components/ModulesUpdater */ "./modules/components/ModulesUpdater.js");

var _ModulesUpdater2 = _interopRequireDefault(_ModulesUpdater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EntityUpdateList = function () {
    function EntityUpdateList(game) {
        _classCallCheck(this, EntityUpdateList);

        this.game = game;
        this._instances = null;
        this._destroyInstances = null;
        this._pendingInstances = null;
        this._camera = null;
    }

    _createClass(EntityUpdateList, [{
        key: "init",
        value: function init() {
            this._instances = new _List2.default();
            this._destroyInstances = new _List2.default();
            this._pendingInstances = new _List2.default();
            this._camera = this.game.system.camera;
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

            for (var i = 0; i < this._instances.size; i++) {

                var element = this._instances.at(i);

                if (element.active) {

                    if (element.update !== undefined) element.update.call(element, dt); //update(dt);

                    (0, _UpdateTransform2.default)(element.transform, this._camera.transform);

                    (0, _ModulesUpdater2.default)(element.modules, this.game);

                    if (element.transform._isDirty) element.transform._isDirty = false;
                }
            }
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


_GameSystemManager2.default.register('EntityUpdateList', EntityUpdateList, 'entityList');

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EntityHierarchy2 = __webpack_require__(/*! ./EntityHierarchy */ "./entities/EntityHierarchy.js");

var _EntityHierarchy3 = _interopRequireDefault(_EntityHierarchy2);

var _BoundingBox = __webpack_require__(/*! ../math/BoundingBox */ "./math/BoundingBox.js");

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

var _Transform = __webpack_require__(/*! ../transform/Transform */ "./transform/Transform.js");

var _Transform2 = _interopRequireDefault(_Transform);

var _ModuleManager = __webpack_require__(/*! ../modules/ModuleManager */ "./modules/ModuleManager.js");

var _ModuleManager2 = _interopRequireDefault(_ModuleManager);

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

        _this.transform = new _Transform2.default();
        _this.type = null;
        _this.pool = null;
        _this.modules = new _ModuleManager2.default(_this);
        //this.bounds = new BoundingBox();
        //this._transformDirty = false;
        //this._currentScene = null;


        return _this;
    }

    _createClass(SceneEntity, [{
        key: 'x',
        set: function set(value) {
            this.transform.position.x = value;
            this.transform.markDirty();
        },
        get: function get() {
            return this.transform.position.y;
        }
    }, {
        key: 'y',
        set: function set(value) {
            this.transform.position.y = value;
            this.transform.markDirty();
        },
        get: function get() {
            return this.transform.position.y;
        }
    }, {
        key: 'position',
        get: function get() {
            return this.transform.position;
        },
        set: function set(value) {
            this.transform.position = value;this.transform._isDirty = true;
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
}(_EntityHierarchy3.default);

exports.default = SceneEntity;

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
    EntityFactory: __webpack_require__(/*! ./EntityFactory */ "./entities/EntityFactory.js")
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Keyboard = __webpack_require__(/*! ./Keyboard */ "./input/Keyboard.js");

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _Mouse = __webpack_require__(/*! ./Mouse */ "./input/Mouse.js");

var _Mouse2 = _interopRequireDefault(_Mouse);

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
      this.keyboard = new _Keyboard2.default(this.game);
      this.mouse = new _Mouse2.default(this.game);
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

/***/ "./input/Key.js":
/*!**********************!*\
  !*** ./input/Key.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KeyEvent = __webpack_require__(/*! ./KeyEvent */ "./input/KeyEvent.js");

var _KeyEvent2 = _interopRequireDefault(_KeyEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Key = function () {
    function Key(keycode, game) {
        _classCallCheck(this, Key);

        this.game = game;
        this.keyCode = keycode;

        this._enabled = true;
        this.status = false;
        this.press = false;
        this.release = false;

        this._event = _KeyEvent2.default.NONE;

        this.pressTime = 0;
        this.pressDuration = -2500;
        this.releaseTime = 0;
        this.releaseDuration = -2500;
    }

    _createClass(Key, [{
        key: 'onKeyDown',
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
        key: 'onKeyUp',
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
        key: 'update',
        value: function update() {
            if (!this._enabled) return;

            if (this.press) {
                this.pressDuration = this.game.time.time - this.pressTime;
            } else {
                this.releaseDuration = this.game.time.time - this.releaseTime;
            }

            if (this.press) {
                if (this.pressDuration == 0) {
                    this._event = _KeyEvent2.default.PRESSED;
                }
            } else {

                if (this.releaseDuration == 0) {
                    this._event = _KeyEvent2.default.RELEASED;
                } else {
                    this._event = _KeyEvent2.default.IDLE;
                }
            }

            if (this._event == _KeyEvent2.default.IDLE) {
                this._event = _KeyEvent2.default.NONE;
            }
        }
    }, {
        key: 'isPressing',
        value: function isPressing() {
            return this.status;
        }
    }, {
        key: 'isPressed',
        value: function isPressed() {
            return this.press && this.pressDuration == 0;
        }
    }, {
        key: 'isReleased',
        value: function isReleased() {
            return !this.press && this.releaseDuration == 0;
        }
    }, {
        key: 'event',
        value: function event() {
            return this._event;
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.status = false;
            this._event = _KeyEvent2.default.NONE;
            this.press = false;
            this.release = false;

            this.pressTime = 0;
            this.pressDuration = -2500;
            this.releaseTime = 0;
            this.releaseDuration = -2500;
        }
    }, {
        key: 'enabled',
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

/***/ "./input/KeyCode.js":
/*!**************************!*\
  !*** ./input/KeyCode.js ***!
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

/***/ "./input/KeyEvent.js":
/*!***************************!*\
  !*** ./input/KeyEvent.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var KeyEvent = {
    NONE: -1,
    IDLE: 0,
    PRESSED: 1,
    RELEASED: 2
};

exports.default = KeyEvent;

/***/ }),

/***/ "./input/Keyboard.js":
/*!***************************!*\
  !*** ./input/Keyboard.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Key = __webpack_require__(/*! ./Key */ "./input/Key.js");

var _Key2 = _interopRequireDefault(_Key);

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _KeyCode = __webpack_require__(/*! ./KeyCode */ "./input/KeyCode.js");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _KeyEvent = __webpack_require__(/*! ./KeyEvent */ "./input/KeyEvent.js");

var _KeyEvent2 = _interopRequireDefault(_KeyEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Keyboard = function () {
  function Keyboard(game) {
    _classCallCheck(this, Keyboard);

    this.game = game;
    this.context = game.context;
    this.active = true;
    //this._keys = [];
    this._keyMapping = new _Map2.default();
    this._keyWatch = new _Map2.default();
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
      for (var prop in _KeyCode2.default) {

        if (_KeyCode2.default.hasOwnProperty(prop)) {
          var value = _KeyCode2.default[prop];
          this._keyMapping.set(value, new _Key2.default(value, this.game));
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

        if (value.event() == _KeyEvent2.default.IDLE) {

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

/***/ "./input/Mouse.js":
/*!************************!*\
  !*** ./input/Mouse.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MouseEvent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MouseButton = __webpack_require__(/*! ./MouseButton */ "./input/MouseButton.js");

var _MouseButton2 = _interopRequireDefault(_MouseButton);

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

            if (this._mouseButtonsLocksPressed[value] != MouseEvent.PRESSED && this._mouseButtonsLocksPressed[value] != MouseEvent.PRESS) {
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

/***/ "./input/MouseButton.js":
/*!******************************!*\
  !*** ./input/MouseButton.js ***!
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

/***/ "./input/index.js":
/*!************************!*\
  !*** ./input/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    Key: __webpack_require__(/*! ./Key */ "./input/Key.js"),
    Keyboard: __webpack_require__(/*! ./Keyboard */ "./input/Keyboard.js"),
    Mouse: __webpack_require__(/*! ./Mouse */ "./input/Mouse.js"),
    Input: __webpack_require__(/*! ./Input */ "./input/Input.js")

};

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

var AssetsType = {
    'none': 0,
    'image': 1,
    'audio': 2,
    'text': 3,
    'json': 4,
    'tilemapJSON': 5
};

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ObjectUtils = __webpack_require__(/*! ../utils/ObjectUtils */ "./utils/ObjectUtils.js");

var _ObjectUtils2 = _interopRequireDefault(_ObjectUtils);

var _XHR = __webpack_require__(/*! ./XHR */ "./loader/XHR.js");

var _XHR2 = _interopRequireDefault(_XHR);

var _LoaderState = __webpack_require__(/*! ./LoaderState */ "./loader/LoaderState.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var File = function () {
    function File(config) {
        _classCallCheck(this, File);

        this.type = _ObjectUtils2.default.getValue(config, 'type', null);
        this.tag = _ObjectUtils2.default.getValue(config, 'tag', null);
        this.useExternal = _ObjectUtils2.default.getValue(config, 'useExternal', false);

        if (this.type == null || this.tag == null) {
            throw new Error('Loader.File: Invalid tag \"' + tag + "\".");
        }

        this.url = _ObjectUtils2.default.getValue(config, 'url', undefined);

        if (this.url === undefined) this.url = _ObjectUtils2.default.getValue(config, 'path', '') + this.tag + '.' + _ObjectUtils2.default.getValue(config, 'ext', '');else {
            if (!this.useExternal || this.useExternal !== undefined) this.url = _ObjectUtils2.default.getValue(config, 'path', '').concat(this.url);
        }

        this.xhrSettings = _XHR2.default.createSettings(_ObjectUtils2.default.getValue(config, 'responseType', undefined));

        if (_ObjectUtils2.default.getValue(config, 'xhrSettings', false)) this.xhrSettings = _XHR2.default.merge(this.xhrSettings, _ObjectUtils2.default.getValue(config, 'xhrSettings', {}));

        //console.log(this.xhrSettings);

        this.loader = null;
        this.state = _LoaderState.LOADER_STATE.PENDING;
        this.totalBytes = 0;
        this.loadedBytes = 0;
        this.progress = 0;
        this.data = undefined;
        this.source = null;
        this.xhrRequest = null;
        this.config = _ObjectUtils2.default.getValue(config, 'config', {});
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

            if (this.state === _LoaderState.LOADER_STATE.FINISHED) {
                this.onDone();

                this.loader.nextFile(this);
            } else {

                this.source = _ObjectUtils2.default.getURL(this.url, gameLoader.baseURL);

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

            if (event.target && event.target.status !== 200) {
                this.loader.next(this, true);
            } else {

                if (this.onPostLoad !== undefined) this.onPostLoad(this.loader, this.xhrRequest);

                this.loader.next(this, false);
            }
        }
    }, {
        key: 'onError',
        value: function onError(event) {
            console.error("Loader.File: Error on load file: " + this.url + ".");

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
            this.state = _LoaderState.LOADER_STATE.DONE;
        }
    }, {
        key: 'onProcessing',
        value: function onProcessing(processingCallback) {
            this.state = _LoaderState.LOADER_STATE.PROCESSING;

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
                //this.xhrRequest.onreadystatechange = undefined;
            }
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LoaderState = __webpack_require__(/*! ./LoaderState */ "./loader/LoaderState.js");

var _Set = __webpack_require__(/*! ../structures/Set */ "./structures/Set.js");

var _Set2 = _interopRequireDefault(_Set);

var _XHR = __webpack_require__(/*! ./XHR */ "./loader/XHR.js");

var _XHR2 = _interopRequireDefault(_XHR);

var _ObjectUtils = __webpack_require__(/*! ../utils/ObjectUtils */ "./utils/ObjectUtils.js");

var _ObjectUtils2 = _interopRequireDefault(_ObjectUtils);

var _GameSystemManager = __webpack_require__(/*! ../core/GameSystemManager */ "./core/GameSystemManager.js");

var _GameSystemManager2 = _interopRequireDefault(_GameSystemManager);

var _AssetsType = __webpack_require__(/*! ./AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

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

    this.xhr = _XHR2.default.createSettings(_ObjectUtils2.default.getValue(config, 'responseType', gameConfig.responseType), _ObjectUtils2.default.getValue(config, 'async', gameConfig.async),
    //scintilla.ObjectUtils.getPropertyValue(config, 'user', gameConfig.loaderUser),
    //scintilla.ObjectUtils.getPropertyValue(config, 'password', gameConfig.loaderPassword),
    _ObjectUtils2.default.getValue(config, 'timeout', gameConfig.timeout));

    _LoaderState.AssetTypeHandler.inject(this);
  }

  _createClass(LoadManager, [{
    key: 'init',
    value: function init() {
      this.cache = this.game.system.cache;

      this._filesQueue = new _Set2.default();
      this._filesLoading = new _Set2.default();
      this._successFiles = new _Set2.default();
      this._failedFiles = new _Set2.default();
      this._processedFiles = new _Set2.default();

      this._filesQueueCount = 0;
      this._loadedFilesCount = 0;

      this.progress = 0;
      this.path = '';
      this.baseURL = '';
      this.state = _LoaderState.LOADER_STATE.IDLE;
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
    value: function addAsset(asset, check) {

      if (check === undefined) check = true;

      if (!this.isOK() && check) return -1;

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
      this.state = _LoaderState.LOADER_STATE.IDLE;
    }
  }, {
    key: 'start',
    value: function start() {

      if (!this.isOK()) {
        return -1;
      }

      this.progress = 0;
      this._loadedFilesCount = 0;
      this.state = _LoaderState.LOADER_STATE.LOADING;
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

        if (file.state === _LoaderState.LOADER_STATE.FINISHED || file.state === _LoaderState.LOADER_STATE.PENDING) //  && this.inflight.size < this.maxParallelDownloads))
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

      if (this.state === _LoaderState.LOADER_STATE.PROCESSING) return;

      this.progress = 1;
      this.isDownloading = false;
      this.state = _LoaderState.LOADER_STATE.PROCESSING;

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

      if (file.state === _LoaderState.LOADER_STATE.ERROR) {
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

      if (this._successFiles.size === 0 && this.state === _LoaderState.LOADER_STATE.PROCESSING) this.processingDone();
    }
  }, {
    key: 'processingDone',
    value: function processingDone() {
      this._successFiles.clear();
      this._filesQueue.clear();

      var cache = this.cache;

      if (this._processedFiles.size > 0) {

        // sort the assets by type priority 
        this._processedFiles.sort(function (a, b) {
          return a.type > b.type;
        });

        this._processedFiles.each(function (file) {

          switch (file.type) {
            default:
              break;

            case _AssetsType2.default.image:
              {
                cache.image.add(file.tag, file.data);
                break;
              }
            case _AssetsType2.default.audio:
              {

                file.data = requestXHR.response;

                cache.addSound(file.tag, file.url, file.data, true);

                if (file.autoDecode) {
                  this.game.sound.decode(file.tag);
                }

                break;
              }
            case _AssetsType2.default.json:
              {
                cache.json.add(file.tag, file.data);
                break;
              }

            case _AssetsType2.default.tilemapJSON:
              {
                cache.tilemap.add(file.tag, file.data);
                break;
              }
          }
        });

        this._processedFiles.clear();
      }

      this.state = _LoaderState.LOADER_STATE.DONE;

      this.game.scene.preloadComplete();
    }
  }, {
    key: 'isLoading',
    value: function isLoading() {
      return this.state === _LoaderState.LOADER_STATE.LOADING || this.state === _LoaderState.LOADER_STATE.PROCESSING;
    }
  }, {
    key: 'isOK',
    value: function isOK() {
      return this.state === _LoaderState.LOADER_STATE.IDLE || this.state === _LoaderState.LOADER_STATE.DONE || this.state === _LoaderState.LOADER_STATE.ERROR;
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

_GameSystemManager2.default.register('Loader', LoadManager, 'load');

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
exports.LOADER_STATE = exports.AssetTypeHandler = undefined;

var _ListInjector = __webpack_require__(/*! ./ListInjector */ "./loader/ListInjector.js");

var _ListInjector2 = _interopRequireDefault(_ListInjector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AssetTypeHandler = exports.AssetTypeHandler = new _ListInjector2.default();

var LOADER_STATE = exports.LOADER_STATE = {
    NONE: 0,
    IDLE: 1,
    PENDING: 2,
    LOADING: 3,
    PROCESSING: 4,
    ERROR: 5,
    FINISHED: 6,
    DONE: 7
};

/***/ }),

/***/ "./loader/URLObject.js":
/*!*****************************!*\
  !*** ./loader/URLObject.js ***!
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _File2 = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File3 = _interopRequireDefault(_File2);

var _URLObject = __webpack_require__(/*! ../URLObject */ "./loader/URLObject.js");

var _URLObject2 = _interopRequireDefault(_URLObject);

var _ObjectUtils = __webpack_require__(/*! ../../utils/ObjectUtils */ "./utils/ObjectUtils.js");

var _ObjectUtils2 = _interopRequireDefault(_ObjectUtils);

var _Path = __webpack_require__(/*! ../../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

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
            assetTag = _ObjectUtils2.default.getValue(tag, 'tag', '');
        }

        var fileConfig = {
            type: _AssetsType2.default.image,
            tag: assetTag,
            ext: _ObjectUtils2.default.getValue(tag, 'ext', _Path2.default.getExtension(url)),
            url: _ObjectUtils2.default.getValue(tag, 'file', url),
            path: path,
            responseType: 'blob',
            xhrSettings: _ObjectUtils2.default.getValue(tag, 'xhr', xhrSettings),
            config: _ObjectUtils2.default.getValue(tag, 'config', config)
        };

        return _possibleConstructorReturn(this, (ImageFile.__proto__ || Object.getPrototypeOf(ImageFile)).call(this, fileConfig));
    }

    _createClass(ImageFile, [{
        key: 'onProcessing',
        value: function onProcessing(processingCallback) {
            this.state = _LoaderState.LOADER_STATE.PROCESSING;
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

                self.state = _LoaderState.LOADER_STATE.ERROR;

                processingCallback(self);
            };

            _URLObject2.default.create(this.data, this.xhrRequest.response, 'image/' + this.config.ext);
        }
    }]);

    return ImageFile;
}(_File3.default);

exports.default = ImageFile;


_LoaderState.AssetTypeHandler.register('image', function (tag, url, path, xhrSettings, force) {

    this.addAsset(new ImageFile(tag, url, this.path, xhrSettings), force);

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _File2 = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File3 = _interopRequireDefault(_File2);

var _ObjectUtils = __webpack_require__(/*! ../../utils/ObjectUtils */ "./utils/ObjectUtils.js");

var _ObjectUtils2 = _interopRequireDefault(_ObjectUtils);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSONFile = function (_File) {
    _inherits(JSONFile, _File);

    function JSONFile(tag, url, path, xhrSettings, config) {
        _classCallCheck(this, JSONFile);

        var config = {
            type: _AssetsType2.default.json,
            ext: _ObjectUtils2.default.getValue(tag, 'ext', 'json'),
            responseType: 'text',
            tag: tag,
            url: _ObjectUtils2.default.getValue(tag, 'file', url),
            path: path,
            xhrSettings: _ObjectUtils2.default.getValue(tag, 'xhr', xhrSettings)
        };

        var _this = _possibleConstructorReturn(this, (JSONFile.__proto__ || Object.getPrototypeOf(JSONFile)).call(this, config));

        if (_typeof(config.url) === 'object') {
            _this.data = config.url;
            _this.state = _LoaderState.LOADER_STATE.DONE;
        }

        return _this;
    }

    _createClass(JSONFile, [{
        key: "onProcess",
        value: function onProcess(processingCallback) {
            this.state = _LoaderState.LOADER_STATE.PROCESSING;
            this.data = JSON.parse(this.xhrLoader.responseText);
            this.onDone();
            callback(this);
        }
    }]);

    return JSONFile;
}(_File3.default);

exports.default = JSONFile;


_LoaderState.AssetTypeHandler.register('json', function (tag, url, path, xhrSettings) {
    this.addAsset(new JSONFile(tag, url, this.path, xhrSettings));
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _File2 = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File3 = _interopRequireDefault(_File2);

var _ObjectUtils = __webpack_require__(/*! ../../utils/ObjectUtils */ "./utils/ObjectUtils.js");

var _ObjectUtils2 = _interopRequireDefault(_ObjectUtils);

var _Path = __webpack_require__(/*! ../../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

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
            assetTag = _ObjectUtils2.default.getValue(tag, 'tag', '');
        }

        var useExternal = false;

        if (path !== undefined) {
            if (typeof path === "boolean") useExternal = path;
        }

        var fileConfig = {
            type: _AssetsType2.default.text,
            tag: assetTag,
            ext: _ObjectUtils2.default.getValue(tag, 'ext', _Path2.default.getExtension(url)),
            url: _ObjectUtils2.default.getValue(tag, 'file', url),
            path: path,
            responseType: '',
            xhrSettings: _ObjectUtils2.default.getValue(tag, 'xhr', xhrSettings),
            config: _ObjectUtils2.default.getValue(tag, 'config', config),
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
            this.state = _LoaderState.LOADER_STATE.PROCESSING;
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


_LoaderState.AssetTypeHandler.register('text', function (tag, url, path, xhrSettings) {
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _File = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File2 = _interopRequireDefault(_File);

var _JSONFile2 = __webpack_require__(/*! ./JSONFile */ "./loader/assets/JSONFile.js");

var _JSONFile3 = _interopRequireDefault(_JSONFile2);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _Path = __webpack_require__(/*! ../../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    _inherits(TilemapFileJSON, _JSONFile);

    function TilemapFileJSON(tag, url, path, xhrSettings) {
        _classCallCheck(this, TilemapFileJSON);

        var _this = _possibleConstructorReturn(this, (TilemapFileJSON.__proto__ || Object.getPrototypeOf(TilemapFileJSON)).call(this, tag, url, path, xhrSettings));

        _this.type = _AssetsType2.default.tilemapJSON;

        return _this;
    }

    _createClass(TilemapFileJSON, [{
        key: 'onPostLoad',
        value: function onPostLoad(loader, xhrLoader) {

            this.state = _LoaderState.LOADER_STATE.PROCESSING;
            this.data = JSON.parse(xhrLoader.responseText);

            // check tileset images and pipe to the loader
            CheckImagesSources(loader, this.data.tilesets, this.url);
        }
    }, {
        key: 'onProcess',
        value: function onProcess(processingCallback) {
            this.onDone();
            callback(this);
        }
    }]);

    return TilemapFileJSON;
}(_JSONFile3.default);

exports.default = TilemapFileJSON;


_LoaderState.AssetTypeHandler.register('tilemapJSON', function (tag, url, path, xhrSettings) {
    this.addAsset(new TilemapFileJSON(tag, url, this.path, xhrSettings));
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
    ImageFile: __webpack_require__(/*! ./ImageFile */ "./loader/assets/ImageFile.js"),
    TextFile: __webpack_require__(/*! ./TextFile */ "./loader/assets/TextFile.js"),
    JSONFile: __webpack_require__(/*! ./JSONFile */ "./loader/assets/JSONFile.js"),
    TilemapJSON: __webpack_require__(/*! ./TilemapJSON */ "./loader/assets/TilemapJSON.js")
};

/***/ }),

/***/ "./loader/index.js":
/*!*************************!*\
  !*** ./loader/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    File: __webpack_require__(/*! ./File */ "./loader/File.js"),
    XHR: __webpack_require__(/*! ./XHR */ "./loader/XHR.js"),
    URLObject: __webpack_require__(/*! ./URLObject */ "./loader/URLObject.js"),
    AssetsType: __webpack_require__(/*! ./AssetsType */ "./loader/AssetsType.js"),
    Assets: __webpack_require__(/*! ./assets */ "./loader/assets/index.js"),
    LoaderState: __webpack_require__(/*! ./LoaderState */ "./loader/LoaderState.js"),
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(/*! ./Vector */ "./math/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _Rect = __webpack_require__(/*! ./Rect */ "./math/Rect.js");

var _Rect2 = _interopRequireDefault(_Rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BoundingBox = function () {
  function BoundingBox(x, y, width, height) {
    _classCallCheck(this, BoundingBox);

    x = x || Infinity;
    y = y || Infinity;
    width = width || -Infinity;
    height = height || -Infinity;
    this.min = new _Vector2.default(x, y);
    this.max = new _Vector2.default(x + width, y + height);
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
      var o = { x: x, y: y };
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


var MathUtils = {

  round: function round(value) {

    // With a bitwise or.
    //let rounded = (0.5 + value) | 0;

    // FASTEST - A double bitwise not.
    return ~~(0.5 + value);

    // Finally, a left bitwise shift.
    //rounded = (0.5 + value) << 0;
  },

  clamp: function clamp(value, min, max) {
    return value > min ? value < max ? value : max : min;
  },

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

exports.default = MathUtils;

/***/ }),

/***/ "./math/Matrix.js":
/*!************************!*\
  !*** ./math/Matrix.js ***!
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
    key: "multiplySlow",
    value: function multiplySlow(a, b) {
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

    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
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

/***/ "./math/Vector.js":
/*!************************!*\
  !*** ./math/Vector.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MathUtils = __webpack_require__(/*! ./MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Class for points and vectors.
* @class Vector
* @constructor
*/
var Vector = function () {
  function Vector(x, y, managed) {
    _classCallCheck(this, Vector);

    this.x = x || 0;
    this.y = y || 0;
    this.managed = managed || undefined;
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
    key: "toString",
    value: function toString() {
      return "{ x: " + this.x + ", y: " + this.y + " }";
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
    key: "abs",
    value: function abs(vector) {
      return new Vector(Math.abs(vector.x), Math.abs(vector.y));
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
      var vec = new Vector(_MathUtils2.default.lerp(a.x, b.x, t), _MathUtils2.default.lerp(a.y, b.y, t));
      return vec;
    }
  }]);

  return Vector;
}();

exports.default = Vector;


module.exports = Vector;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module = function () {
    function Module(moduleType, moduleName, moduleManager) {
        _classCallCheck(this, Module);

        this._moduleType = moduleType || "none";
        this._moduleName = moduleName || "noName";
        this._enabled = true;
        this.entity = null;
        this.moduleManager = moduleManager || undefined;

        if (moduleManager !== undefined) {
            this.entity = moduleManager.entity;
        }
        //this.game = moduleManager.game || null;
    }

    _createClass(Module, [{
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

exports.default = Module;


module.exports = Module;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ModuleProvider = __webpack_require__(/*! ./ModuleProvider */ "./modules/ModuleProvider.js");

var _ModuleProvider2 = _interopRequireDefault(_ModuleProvider);

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
            return _ModuleProvider2.default.attach(this.moduleManager, 'sprite', tag);
        }
    }, {
        key: "tilemap",
        value: function tilemap(tag) {

            if (tag === undefined || tag == null) throw new Error("ModuleAttacher.tilemap: Can not create Tilemap module without a proper tag name.");

            return _ModuleProvider2.default.attach(this.moduleManager, 'tilemap', tag);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _List = __webpack_require__(/*! ../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _ModuleAttacher = __webpack_require__(/*! ./ModuleAttacher */ "./modules/ModuleAttacher.js");

var _ModuleAttacher2 = _interopRequireDefault(_ModuleAttacher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleManager = function () {
    function ModuleManager(entity) {
        _classCallCheck(this, ModuleManager);

        this.entity = entity || null;
        this.attached = new _Map2.default();
        this._pendingModulesInitialization = new _List2.default();
        this.attach = new _ModuleAttacher2.default(this);
    }

    _createClass(ModuleManager, [{
        key: 'detach',
        value: function detach(moduleName, index) {}
    }, {
        key: 'has',
        value: function has(moduleName) {
            return this.attached.has(moduleName);
        }
    }, {
        key: 'get',
        value: function get(moduleName) {
            return this.attached.get(moduleName);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _InitializeModuleBase = __webpack_require__(/*! ./components/InitializeModuleBase */ "./modules/components/InitializeModuleBase.js");

var _InitializeModuleBase2 = _interopRequireDefault(_InitializeModuleBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleProviderManager = function () {
    function ModuleProviderManager() {
        _classCallCheck(this, ModuleProviderManager);

        this.proxyModules = new _Map2.default();
    }

    _createClass(ModuleProviderManager, [{
        key: 'attach',
        value: function attach(modulesManager, moduleName, args) {
            var attached = modulesManager.attached;

            if (attached.has(moduleName)) throw new Error('ModuleManager.attach: Could not attach module ' + moduleName + '. Already exists');

            if (!this.proxyModules.has(moduleName)) throw new Error('ModuleManager.attach: Module type ' + moduleName + ' don\'t exists.');

            // create a new module
            var newModule = this.proxyModules.get(moduleName)(modulesManager, args);

            // initialize entity module
            (0, _InitializeModuleBase2.default)(newModule, modulesManager.entity);

            // attach the new module to manager
            attached.set(newModule.type, newModule);

            // add to pending initialization list
            modulesManager._pendingModulesInitialization.push(newModule);

            return newModule;
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

/***/ "./modules/components/AttachModuleInGame.js":
/*!**************************************************!*\
  !*** ./modules/components/AttachModuleInGame.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AttachModuleInGame;

var _Renderable = __webpack_require__(/*! ../renderables/Renderable */ "./modules/renderables/Renderable.js");

var _Renderable2 = _interopRequireDefault(_Renderable);

var _Tilemap = __webpack_require__(/*! ../renderables/Tilemap */ "./modules/renderables/Tilemap.js");

var _Tilemap2 = _interopRequireDefault(_Tilemap);

var _Sprite = __webpack_require__(/*! ../renderables/Sprite */ "./modules/renderables/Sprite.js");

var _Sprite2 = _interopRequireDefault(_Sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AttachModuleInGame(entityModule, modulesManager, game) {

    // RENDERABLES
    if (entityModule instanceof _Sprite2.default) {
        game.system.render.layer.renderLayers.at(0).add(entityModule);
    } else if (entityModule instanceof _Tilemap2.default) {
        for (var i = 0; i < entityModule.layers.length; i++) {
            game.system.render.layer.renderLayers.at(0).add(entityModule.layers[i]);
        }
    }
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

var _UpdateRenderable = __webpack_require__(/*! ../renderables/components/UpdateRenderable */ "./modules/renderables/components/UpdateRenderable.js");

var _UpdateRenderable2 = _interopRequireDefault(_UpdateRenderable);

var _AttachModuleInGame = __webpack_require__(/*! ./AttachModuleInGame */ "./modules/components/AttachModuleInGame.js");

var _AttachModuleInGame2 = _interopRequireDefault(_AttachModuleInGame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModulesUpdater(modulesManager, game) {
    var size = modulesManager._pendingModulesInitialization.size;
    var entity = modulesManager.entity;

    if (size > 0) {
        // add pending modules
        modulesManager._pendingModulesInitialization.each(function (mod) {
            (0, _AttachModuleInGame2.default)(mod, modulesManager, game);
        });

        modulesManager._pendingModulesInitialization.clear();
    }

    var render = modulesManager.attached.get('render');
    if (render !== undefined || render != null) {
        (0, _UpdateRenderable2.default)(entity, render);
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
    Renderables: __webpack_require__(/*! ./renderables */ "./modules/renderables/index.js")
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BoundingBox = __webpack_require__(/*! ../../math/BoundingBox */ "./math/BoundingBox.js");

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

var _Vector = __webpack_require__(/*! ../../math/Vector */ "./math/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _Module2 = __webpack_require__(/*! ../Module */ "./modules/Module.js");

var _Module3 = _interopRequireDefault(_Module2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Renderable = function (_Module) {
    _inherits(Renderable, _Module);

    function Renderable(moduleName, moduleManager) {
        _classCallCheck(this, Renderable);

        var _this = _possibleConstructorReturn(this, (Renderable.__proto__ || Object.getPrototypeOf(Renderable)).call(this, 'render', moduleName || 'renderable', moduleManager));

        _this._layerID = 0;
        _this._depth = 0;
        _this._visible = true;
        _this._alpha = 1;
        _this._depthDirty = true;
        _this._bounds = new _BoundingBox2.default();
        _this._originInPixels = { x: 0, y: 0 };
        _this._originIsDirty = true;

        //this.type = EntityType.Renderable;
        return _this;
    }

    _createClass(Renderable, [{
        key: 'bounds',
        get: function get() {
            return this._bounds;
        }

        //get originInPixels() {return this._originInPixels; }

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sprite = function (_Renderable) {
    _inherits(Sprite, _Renderable);

    function Sprite(moduleManager) {
        _classCallCheck(this, Sprite);

        //this._type = "sprite";
        var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this, 'sprite', moduleManager));

        _this.source = null;
        _this.frame = new _Rect2.default();

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
                var sprite = this.entity.game.system.cache.image.get(tag);

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
        key: "render",
        value: function render(context) {
            if (!this._enabled) return false;

            (0, _DrawImage2.default)(context, this.source, this.frame, this.entity.transform, this._originInPixels);

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


_ModuleProvider2.default.register('sprite', function (moduleManager, tag) {

    var spr = new Sprite(moduleManager);

    if (tag !== undefined) {
        spr.setSprite(tag);
    }

    return spr;
});

/***/ }),

/***/ "./modules/renderables/Tilemap.js":
/*!****************************************!*\
  !*** ./modules/renderables/Tilemap.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Renderable2 = __webpack_require__(/*! ./Renderable */ "./modules/renderables/Renderable.js");

var _Renderable3 = _interopRequireDefault(_Renderable2);

var _ModuleProvider = __webpack_require__(/*! ../ModuleProvider */ "./modules/ModuleProvider.js");

var _ModuleProvider2 = _interopRequireDefault(_ModuleProvider);

var _TilemapLayer = __webpack_require__(/*! ./TilemapLayer */ "./modules/renderables/TilemapLayer.js");

var _TilemapLayer2 = _interopRequireDefault(_TilemapLayer);

var _UpdateBounds = __webpack_require__(/*! ../../transform/UpdateBounds */ "./transform/UpdateBounds.js");

var _UpdateBounds2 = _interopRequireDefault(_UpdateBounds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tilemap = function (_Renderable) {
    _inherits(Tilemap, _Renderable);

    function Tilemap(moduleManager, resource) {
        _classCallCheck(this, Tilemap);

        //this._type = "tilemap";
        var _this = _possibleConstructorReturn(this, (Tilemap.__proto__ || Object.getPrototypeOf(Tilemap)).call(this, 'tilemap', moduleManager));

        _this.tileWidth = resource.metaData.tileWidth;
        _this.tileHeight = resource.metaData.tileHeight;
        _this.mapWidth = resource.metaData.width;
        _this.mapHeight = resource.metaData.height;
        _this.orientation = resource.metaData.orientation;
        _this.pixelsWidth = resource.metaData.pixelsWidth;
        _this.pixelsHeight = resource.metaData.pixelsHeight;

        _this.tilesets = resource.tilesets;
        _this.layers = [];

        for (var i = 0; i < resource.layers.length; i++) {
            _this.layers.push(new _TilemapLayer2.default(_this, resource.layers.at(i)));
        }return _this;
    }

    _createClass(Tilemap, [{
        key: "moduleUpdate",
        value: function moduleUpdate() {
            if (!this.entity.transform._isDirty) return;

            (0, _UpdateBounds2.default)(this.bounds, this.entity.transform.position.x, this.entity.transform.position.y, this.pixelsWidth, this.pixelsHeight, this.entity.transform._cosSin);

            console.log(this.bounds);
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

    return tilemap;
});

/***/ }),

/***/ "./modules/renderables/TilemapLayer.js":
/*!*********************************************!*\
  !*** ./modules/renderables/TilemapLayer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Renderable2 = __webpack_require__(/*! ./Renderable */ "./modules/renderables/Renderable.js");

var _Renderable3 = _interopRequireDefault(_Renderable2);

var _DrawTilemapLayer = __webpack_require__(/*! ./components/DrawTilemapLayer */ "./modules/renderables/components/DrawTilemapLayer.js");

var _DrawTilemapLayer2 = _interopRequireDefault(_DrawTilemapLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TilemapLayer = function (_Renderable) {
    _inherits(TilemapLayer, _Renderable);

    function TilemapLayer(tilemap, layerData) {
        _classCallCheck(this, TilemapLayer);

        var _this = _possibleConstructorReturn(this, (TilemapLayer.__proto__ || Object.getPrototypeOf(TilemapLayer)).call(this, 'tilemapLayer', tilemap.moduleManager));

        _this.tilemap = tilemap;
        _this.layerData = layerData;
        return _this;
    }

    _createClass(TilemapLayer, [{
        key: "render",
        value: function render(context) {

            if (!this._visible && !this.tilemap.visible) return false;

            (0, _DrawTilemapLayer2.default)(context, this.tilemap, this.layerData, this.tilemap.moduleManager.entity.transform);

            return true;
        }
    }, {
        key: "width",
        get: function get() {
            return this.layerData.width * this.tilemap.tileWidth;
        }
    }, {
        key: "height",
        get: function get() {
            return this.layerData.height * this.tilemap.tileHeight;
        }
    }]);

    return TilemapLayer;
}(_Renderable3.default);

exports.default = TilemapLayer;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawTilemapLayer(context, tilemap, layer, transform) {

    var draws = 0;
    var matrix = transform.matrix;

    context.setTransform(matrix.a[0], matrix.a[1], // 2
    matrix.a[3], matrix.a[4], // 5
    matrix.a[6], matrix.a[7]);

    //for (let i = 0; i < layer.culledTiles.lenght; i++) {
    for (var i = 0; i < layer.tiles.length; i++) {

        var tile = layer.tiles[i];

        if (tile == null || tile === undefined) continue;

        context.drawImage(tile.data.tileset.image.data, // image
        tile.frame.x, // sx - pos crop x
        tile.frame.y, // sy - pos crop y
        tile.frame.width, // sWidth - crop width
        tile.frame.height, // sHeight - crop height
        _MathUtils2.default.round(tile.x - 0.1), // destination x
        _MathUtils2.default.round(tile.y - 0.1), // destination y
        _MathUtils2.default.round(tile.frame.width + 0.1), _MathUtils2.default.round(tile.frame.height + 0.1));

        draws++;
    }

    return draws;
}

/***/ }),

/***/ "./modules/renderables/components/UpdateRenderable.js":
/*!************************************************************!*\
  !*** ./modules/renderables/components/UpdateRenderable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateRenderable;

var _ComputeBounds = __webpack_require__(/*! ../../../transform/ComputeBounds */ "./transform/ComputeBounds.js");

var _ComputeBounds2 = _interopRequireDefault(_ComputeBounds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateRenderable(entity, renderable) {

    if (!entity.transform._isDirty && !renderable._originIsDirty) return;

    if (renderable.name == 'tilemap') {
        for (var i = 0; i < renderable.layers.length; i++) {
            UpdateRenderable(entity, renderable.layers[i]);
        }
    } else {
        if (renderable._originIsDirty) {
            // destination
            renderable._originInPixels.x = entity.transform.origin.x * renderable.width;
            renderable._originInPixels.y = entity.transform.origin.y * renderable.height;
            // renderable._originIsDirty = false;
        }

        (0, _ComputeBounds2.default)(renderable._bounds, entity.transform, renderable.width, renderable.height, renderable._originInPixels);
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


module.exports = {
    Renderable: __webpack_require__(/*! ./Renderable */ "./modules/renderables/Renderable.js"),
    Sprite: __webpack_require__(/*! ./Sprite */ "./modules/renderables/Sprite.js"),
    TilemapLayer: __webpack_require__(/*! ./TilemapLayer */ "./modules/renderables/TilemapLayer.js"),
    Tilemap: __webpack_require__(/*! ./Tilemap */ "./modules/renderables/Tilemap.js")
};

/***/ }),

/***/ "./others/Debug.js":
/*!*************************!*\
  !*** ./others/Debug.js ***!
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

      //this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.strokeStyle = this.bgcolor;
      this.context.font = this.font;
      this.draw.alpha(0.5);
      this.draw.rectangle(0, 0, this.game.width, 14 * 4 + 16, this.bgcolor);
      this.draw.alpha(1);
      this.drawLine("FPS: " + Math.round(this.game.time.fps) + " / " + this.game.time.desiredFps);
      //this.drawLine("Instances in view: " + this.game.camera.instancesInView);
      this.drawLine("Instances: " + this.game.system.entityList.length);
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

var _Vector = __webpack_require__(/*! ../math/Vector */ "./math/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SAT = function () {
    function SAT() {
        _classCallCheck(this, SAT);

        this.VECTORS = [];
        for (var v = 0; v < 10; v++) {
            VECTORS.push(new _Vector2.default());
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
        this.overlapN = new Vector();
        this.overlapV = new Vector();
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
var RENDERING_TYPE = exports.RENDERING_TYPE = {
    NEAREST: 0,
    LINEAR: 1
};

/***/ }),

/***/ "./render/Draw.js":
/*!************************!*\
  !*** ./render/Draw.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameSystemManager = __webpack_require__(/*! ../core/GameSystemManager */ "./core/GameSystemManager.js");

var _GameSystemManager2 = _interopRequireDefault(_GameSystemManager);

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

      //this.context.beginPath();
      this.context.lineWidth = outlineWidth;
      //this.context.setLineDash([6]);
      this.context.strokeStyle = color;
      this.context.strokeRect(x, y, width, height);
      //this.context.rect(x,y,width,height);
      //this.context.stroke();
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
    key: "bounds",
    value: function bounds(bb, color) {

      if (color === undefined) color = 'red';
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.outlineRectangle(bb.min.x, bb.min.y, bb.max.x - bb.min.x, bb.max.y - bb.min.y, color, 1);
    }
  }]);

  return Draw;
}();

exports.default = Draw;


_GameSystemManager2.default.register('Draw', Draw, 'draw');

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _RenderLayer = __webpack_require__(/*! ./RenderLayer */ "./render/RenderLayer.js");

var _RenderLayer2 = _interopRequireDefault(_RenderLayer);

var _RenderLayersManagement = __webpack_require__(/*! ./RenderLayersManagement */ "./render/RenderLayersManagement.js");

var _RenderLayersManagement2 = _interopRequireDefault(_RenderLayersManagement);

var _Canvas = __webpack_require__(/*! ./canvas/Canvas */ "./render/canvas/Canvas.js");

var _Canvas2 = _interopRequireDefault(_Canvas);

var _Define = __webpack_require__(/*! ./Define */ "./render/Define.js");

var _GameSystemManager = __webpack_require__(/*! ../core/GameSystemManager */ "./core/GameSystemManager.js");

var _GameSystemManager2 = _interopRequireDefault(_GameSystemManager);

var _Smoothing = __webpack_require__(/*! ./canvas/Smoothing */ "./render/canvas/Smoothing.js");

var _Smoothing2 = _interopRequireDefault(_Smoothing);

var _DrawRenderLayer = __webpack_require__(/*! ./components/DrawRenderLayer */ "./render/components/DrawRenderLayer.js");

var _DrawRenderLayer2 = _interopRequireDefault(_DrawRenderLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Render = function () {
    function Render(game) {
        _classCallCheck(this, Render);

        this.game = game;
        this.layer = new _RenderLayersManagement2.default(this.game);
        this.canvas = _Canvas2.default.create(this.game.parent, this.game.width, this.game.height);
        this.context = this.canvas.getContext("2d", { alpha: false });
        this.imageRendering = game.config.pixelated ? _Define.RENDERING_TYPE.NEAREST : _Define.RENDERING_TYPE.LINEAR;
        this.smooth = new _Smoothing2.default(this.context);
        this.smooth.set(this.imageRendering);

        this._backgroundColor = '#000';
        this._alpha = 1;
        this._enable = true;
        this.clear = true;
        this.drawCalls = 0;
    }

    _createClass(Render, [{
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


_GameSystemManager2.default.register('Render', Render, 'render');

/***/ }),

/***/ "./render/RenderLayer.js":
/*!*******************************!*\
  !*** ./render/RenderLayer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _List = __webpack_require__(/*! ../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RenderLayer = function () {
    function RenderLayer(game, layerName) {
        _classCallCheck(this, RenderLayer);

        this._name = layerName;
        this.game = game;
        this.renderList = new _List2.default(true);
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

/***/ "./render/RenderLayersManagement.js":
/*!******************************************!*\
  !*** ./render/RenderLayersManagement.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _RenderLayer = __webpack_require__(/*! ./RenderLayer */ "./render/RenderLayer.js");

var _RenderLayer2 = _interopRequireDefault(_RenderLayer);

var _List = __webpack_require__(/*! ../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RenderLayersManagement = function () {
    function RenderLayersManagement(game) {
        _classCallCheck(this, RenderLayersManagement);

        this.game = game;
        this.renderLayers = new _List2.default();
        //this.__renderLayersMap = new DataMap();
        this.add('default');
    }

    _createClass(RenderLayersManagement, [{
        key: 'add',
        value: function add(name) {

            if (this.contains(name)) {
                throw new Error("Render.add: There is already a RenderLayer called: \"" + name + "\".");
            }

            //this.__renderLayersMap.set(name, this.__renderLayers.length);
            this.renderLayers.push(new _RenderLayer2.default(this.game, name));
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

/***/ "./render/canvas/Canvas.js":
/*!*********************************!*\
  !*** ./render/canvas/Canvas.js ***!
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

/***/ "./render/canvas/Smoothing.js":
/*!************************************!*\
  !*** ./render/canvas/Smoothing.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Define = __webpack_require__(/*! ../Define */ "./render/Define.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasSmoothing = function () {
    function CanvasSmoothing(context) {
        _classCallCheck(this, CanvasSmoothing);

        this.context = context;
        this.prefix = this.getPrefix(context);
    }

    _createClass(CanvasSmoothing, [{
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
            if (renderType == _Define.RENDERING_TYPE.NEAREST) this.setEnable(false);else this.setEnable(true);
        }
    }]);

    return CanvasSmoothing;
}();

exports.default = CanvasSmoothing;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawRender(render, camera, delta) {

    if (!render._enable) return;

    var clip = camera.x !== 0 || camera.y !== 0 || camera.width !== render.context.canvas.width || camera.height !== render.context.canvas.height;

    // alpha
    if (render._alpha !== 1) {
        render.context.globalAlpha = 1;
        render._alpha = 1;
    }

    // blend
    render.context.globalCompositeOperation = 'source-over';

    /*if (clip)
    {
        let resolution = 1;
        this.context.save();
        this.context.beginPath();
        this.context.rect(
            0,
            0,
            320 * resolution,
            240 * resolution);
        this.context.clip();
    }*/

    for (var i = 0; i < render.layer.renderLayers.length; i++) {
        var layer = render.layer.renderLayers.at(i);

        if (!layer.enable) continue;

        var drawCalls = 0;
        drawCalls += (0, _DrawRenderLayer2.default)(layer, camera, render.context);

        render.drawCalls += drawCalls;
    }

    camera.game.system.draw.bounds(camera.bounds);

    render.context.setTransform(1, 0, 0, 1, 0, 0);

    render.game.scene.render();

    if (render.game.debug != null) {

        render.game.debug.test();
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
function DrawRenderLayer(layer, camera, context) {

        if (!layer.__enable) return 0;

        var drawCalls = 0;

        if (layer.__isDirty) {
                layer.renderList.sort(layer.sortDepth);

                layer.__isDirty = false;
        }

        var self = this;
        var size = layer.renderList.size;

        for (var i = 0; i < size; i++) {
                var element = layer.renderList.at(i);

                if (camera.bounds.intersects(element.bounds)) {
                        drawCalls += element.render(context);

                        camera.game.system.draw.bounds(element.bounds);
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

/***/ "./render/index.js":
/*!*************************!*\
  !*** ./render/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    RenderLayer: __webpack_require__(/*! ./RenderLayer */ "./render/RenderLayer.js"),
    RenderLayerManagement: __webpack_require__(/*! ./RenderLayersManagement */ "./render/RenderLayersManagement.js"),
    Render: __webpack_require__(/*! ./Render */ "./render/Render.js"),
    Draw: __webpack_require__(/*! ./Draw */ "./render/Draw.js")
};

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

var _Resource2 = __webpack_require__(/*! ./Resource */ "./resources/Resource.js");

var _Resource3 = _interopRequireDefault(_Resource2);

var _ResourceType = __webpack_require__(/*! ./ResourceType */ "./resources/ResourceType.js");

var _ResourceType2 = _interopRequireDefault(_ResourceType);

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

      function ImageResource(name, data) {
            _classCallCheck(this, ImageResource);

            var _this = _possibleConstructorReturn(this, (ImageResource.__proto__ || Object.getPrototypeOf(ImageResource)).call(this, name));

            _this.data = data;
            _this.width = 0;
            _this.height = 0;
            _this.imageUrl = null;
            _this.type = _ResourceType2.default.Image;

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

var _ResourceType = __webpack_require__(/*! ./ResourceType */ "./resources/ResourceType.js");

var _ResourceType2 = _interopRequireDefault(_ResourceType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resource = function Resource(name, data) {
    _classCallCheck(this, Resource);

    //this.data = data || undefined;
    this.name = name || 'Resource';
    this.type = _ResourceType2.default.None;
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

var ResourceType = {
    None: -1,
    Image: 0,
    Tilemap: 1
};

exports.default = ResourceType;

/***/ }),

/***/ "./resources/TilemapResource.js":
/*!**************************************!*\
  !*** ./resources/TilemapResource.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TilemapMetadata = __webpack_require__(/*! ./tilemap/TilemapMetadata */ "./resources/tilemap/TilemapMetadata.js");

var _TilemapMetadata2 = _interopRequireDefault(_TilemapMetadata);

var _Resource2 = __webpack_require__(/*! ./Resource */ "./resources/Resource.js");

var _Resource3 = _interopRequireDefault(_Resource2);

var _ParseTileset = __webpack_require__(/*! ./tilemap/ParseTileset */ "./resources/tilemap/ParseTileset.js");

var _ParseTileset2 = _interopRequireDefault(_ParseTileset);

var _ParseLayers = __webpack_require__(/*! ./tilemap/ParseLayers */ "./resources/tilemap/ParseLayers.js");

var _ParseLayers2 = _interopRequireDefault(_ParseLayers);

var _ResourceType = __webpack_require__(/*! ./ResourceType */ "./resources/ResourceType.js");

var _ResourceType2 = _interopRequireDefault(_ResourceType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TilemapResource = function (_Resource) {
    _inherits(TilemapResource, _Resource);

    function TilemapResource(name, source, cache) {
        _classCallCheck(this, TilemapResource);

        var _this = _possibleConstructorReturn(this, (TilemapResource.__proto__ || Object.getPrototypeOf(TilemapResource)).call(this, name));

        _this.metaData = new _TilemapMetadata2.default({
            name: source.name,
            width: source.width,
            height: source.height,
            tileWidth: source.tilewidth,
            tileHeight: source.tileheight,
            orietation: source.orietation
        });

        _this.name = name;
        _this.tilesets = (0, _ParseTileset2.default)(source, cache);
        _this.layers = (0, _ParseLayers2.default)(source, _this);
        //this.data.tiles = ParseTiles(this.data);
        _this.type = _ResourceType2.default.Tilemap;

        return _this;
    }

    _createClass(TilemapResource, [{
        key: "getTilesetByGID",
        value: function getTilesetByGID(gid) {

            return this.tilesets.each(function (set) {
                if (set.hasGID(gid)) {
                    return set;
                }
            }) || null;
        }
    }]);

    return TilemapResource;
}(_Resource3.default);

exports.default = TilemapResource;

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
    ImageResource: __webpack_require__(/*! ./ImageResource */ "./resources/ImageResource.js"),
    TilemapResource: __webpack_require__(/*! ./TilemapResource */ "./resources/TilemapResource.js")
};

/***/ }),

/***/ "./resources/tilemap/ParseGID.js":
/*!***************************************!*\
  !*** ./resources/tilemap/ParseGID.js ***!
  \***************************************/
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

/***/ "./resources/tilemap/ParseLayers.js":
/*!******************************************!*\
  !*** ./resources/tilemap/ParseLayers.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ParseLayers;

var _ObjectUtils = __webpack_require__(/*! ../../utils/ObjectUtils */ "./utils/ObjectUtils.js");

var _ObjectUtils2 = _interopRequireDefault(_ObjectUtils);

var _Base64Utils = __webpack_require__(/*! ../../utils/Base64Utils */ "./utils/Base64Utils.js");

var _Base64Utils2 = _interopRequireDefault(_Base64Utils);

var _List = __webpack_require__(/*! ../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _ParseGID = __webpack_require__(/*! ./ParseGID */ "./resources/tilemap/ParseGID.js");

var _ParseGID2 = _interopRequireDefault(_ParseGID);

var _TilemapLayerData = __webpack_require__(/*! ./TilemapLayerData */ "./resources/tilemap/TilemapLayerData.js");

var _TilemapLayerData2 = _interopRequireDefault(_TilemapLayerData);

var _Tile = __webpack_require__(/*! ./Tile */ "./resources/tilemap/Tile.js");

var _Tile2 = _interopRequireDefault(_Tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ParseLayers(json, map) {

    var size = json.layers.length;
    var tileLayers = new _List2.default();

    if (size <= 0) return tileLayers;

    for (var i = 0; i < size; i++) {

        var jsonLayer = json.layers[i];

        if (jsonLayer.enconding) {
            if (jsonLayer.enconding === 'base64') {
                //  should be interpreted as an array of unsigned 32-bit integers using little-endian byte ordering.
                jsonLayer.data = _Base64Utils2.default.decodeToUint32(jsonLayer.data);
                delete jsonLayer.enconding;
            }
        }

        var newLayer = new _TilemapLayerData2.default({
            name: jsonLayer.name,
            x: _ObjectUtils2.default.getValue(jsonLayer, 'offsetx', 0) + jsonLayer.x,
            y: _ObjectUtils2.default.getValue(jsonLayer, 'offsety', 0) + jsonLayer.y,
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

        for (var j = 0; j < jsonLayer.data.length; j++) {

            var gidProp = (0, _ParseGID2.default)(jsonLayer.data[j]);
            var id = x + y * newLayer.width;
            var tile = null;

            // The first tileset always has a firstgid value of 1. 
            if (gidProp.gid > 0) {
                var tileset = map.getTilesetByGID(gidProp.gid);
                tile = new _Tile2.default(newLayer, tileset.getTile(gidProp.gid), x, y, id);
            }

            tiles.push(tile);

            x++;

            if (x >= newLayer.width) {
                x = 0;
                y++;
            }
        }

        newLayer.tiles = tiles;

        tileLayers.push(newLayer);
    }

    return tileLayers;
}

/***/ }),

/***/ "./resources/tilemap/ParseTileset.js":
/*!*******************************************!*\
  !*** ./resources/tilemap/ParseTileset.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ParseTilesets;

var _Tileset = __webpack_require__(/*! ./Tileset */ "./resources/tilemap/Tileset.js");

var _Tileset2 = _interopRequireDefault(_Tileset);

var _List = __webpack_require__(/*! ../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _Path = __webpack_require__(/*! ../../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

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

            tileSets.push(newTileSet);
        }
    }

    return tileSets;
}

/***/ }),

/***/ "./resources/tilemap/Tile.js":
/*!***********************************!*\
  !*** ./resources/tilemap/Tile.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tile = function Tile(layer, tileData, tileX, tileY, id) {
    _classCallCheck(this, Tile);

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

/***/ "./resources/tilemap/TileData.js":
/*!***************************************!*\
  !*** ./resources/tilemap/TileData.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Rect = __webpack_require__(/*! ../../math/Rect */ "./math/Rect.js");

var _Rect2 = _interopRequireDefault(_Rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TileData = function TileData(tileset, gid, u, v, umax, vmax) {
    _classCallCheck(this, TileData);

    this.gid = gid;
    this.tileset = tileset || null;
    this.st = new _Rect2.default(u, v, umax, vmax); // tex coords
    this.keyFrames = null;
};

exports.default = TileData;

/***/ }),

/***/ "./resources/tilemap/TilemapLayerData.js":
/*!***********************************************!*\
  !*** ./resources/tilemap/TilemapLayerData.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ObjectUtils = __webpack_require__(/*! ../../utils/ObjectUtils */ "./utils/ObjectUtils.js");

var _ObjectUtils2 = _interopRequireDefault(_ObjectUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TilemapLayerData = function TilemapLayerData(config) {
    _classCallCheck(this, TilemapLayerData);

    this.width = _ObjectUtils2.default.getValue(config, 'width', 0);
    this.height = _ObjectUtils2.default.getValue(config, 'height', 0);
    this.x = _ObjectUtils2.default.getValue(config, 'x', 0);
    this.y = _ObjectUtils2.default.getValue(config, 'y', 0);
    this.name = _ObjectUtils2.default.getValue(config, 'name', 'tilemaplayer');
    this.alpha = _ObjectUtils2.default.getValue(config, 'alpha', 1);
    //this.type ="tilelayer";
    this.visible = _ObjectUtils2.default.getValue(config, 'visible', true);
    this.tiles = _ObjectUtils2.default.getValue(config, 'tiles', []);
};

exports.default = TilemapLayerData;

/***/ }),

/***/ "./resources/tilemap/TilemapMetadata.js":
/*!**********************************************!*\
  !*** ./resources/tilemap/TilemapMetadata.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ObjectUtils = __webpack_require__(/*! ../../utils/ObjectUtils */ "./utils/ObjectUtils.js");

var _ObjectUtils2 = _interopRequireDefault(_ObjectUtils);

var _List = __webpack_require__(/*! ../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TilemapMetadata = function TilemapMetadata(config) {
    _classCallCheck(this, TilemapMetadata);

    this.name = _ObjectUtils2.default.getValue(config, 'name', 'tilemap');
    this.width = _ObjectUtils2.default.getValue(config, 'width', 0);
    this.height = _ObjectUtils2.default.getValue(config, 'height', 0);
    this.tileWidth = _ObjectUtils2.default.getValue(config, 'tileWidth', 16);
    this.tileHeight = _ObjectUtils2.default.getValue(config, 'tileHeight', 16);
    this.widthPixels = _ObjectUtils2.default.getValue(config, 'pixelsWidth', this.width * this.tileWidth);
    this.heightPixels = _ObjectUtils2.default.getValue(config, 'pixelsHeight', this.height * this.tileHeight);
    this.orientation = _ObjectUtils2.default.getValue(config, 'orientation', 'orthogonal');
};

exports.default = TilemapMetadata;

/***/ }),

/***/ "./resources/tilemap/Tileset.js":
/*!**************************************!*\
  !*** ./resources/tilemap/Tileset.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _List = __webpack_require__(/*! ../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _TileData = __webpack_require__(/*! ./TileData */ "./resources/tilemap/TileData.js");

var _TileData2 = _interopRequireDefault(_TileData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tileset = function () {
    function Tileset(name, firstgid, tileWidth, tileHeight, margin, spacing) {
        _classCallCheck(this, Tileset);

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

    _createClass(Tileset, [{
        key: "getTile",
        value: function getTile(gid) {

            if (gid < this.firstgid && gid >= this.firstgid + this.gidCount) return null;

            return this.data.at(gid - this.firstgid);
        }
    }, {
        key: "hasGID",
        value: function hasGID(gid) {
            return gid >= this.firstgid && gid < this.firstgid + this.gidCount;
        }
    }, {
        key: "updateData",
        value: function updateData(imageWidth, imageHeight) {

            if (this.image !== undefined || this.image != null) {
                imageWidth = this.image.width;
                imageHeight = this.image.height;
            }

            //slice into tiles
            var columns = (imageHeight - this.margin * 2 + this.spacing) / (this.tileHeight + this.spacing);
            var rows = (imageWidth - this.margin * 2 + this.spacing) / (this.tileWidth + this.spacing);

            //rows = Math.floor(rows);
            //columns = Math.floor(columns);


            this.rows = rows;
            this.collumns = columns;
            this.gidCount = rows * columns;

            var u = this.margin;
            var v = this.margin;
            var x = 0;

            this.data.clear();
            //let gid = 0;

            for (var i = 0; i < this.gidCount; i++) {
                //for (let x = 0; x < colCount; x++) {

                // let gid = x + y * this.rows;
                this.data.push(new _TileData2.default(this, this.firstgid + i, u, v, this.tileWidth, this.tileHeight));

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _Scene = __webpack_require__(/*! ./Scene */ "./scene/Scene.js");

var _Scene2 = _interopRequireDefault(_Scene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SceneManager = function () {
  function SceneManager(game) {
    _classCallCheck(this, SceneManager);

    this.game = game;
    this.entityUpdateList = null;
    this._scenes = new _Map2.default();

    this.currentScene = null;
    this._currentSceneName = '';
    this._changeScene = null;

    this._setup = false;
    this._clearCache = false;

    // callbacks

    this.onStartCallback = null;
    this.onLoadingCallback = null;
    this.onLoadingRenderCallback = null;
    this.onPreloadCallback = null;
    //this.onUpdateCallback = null;
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

      var newScene = new _Scene2.default(this.game, sceneName);
      this._scenes.set(sceneName, newScene);

      return newScene;
    }
  }, {
    key: 'set',
    value: function set(sceneName, clearCache) {

      if (!this._scenes.has(sceneName)) throw new Error('SceneManager.set: Scene' + sceneName + ' does not exist.');

      if (clearCache === undefined) {
        clearCache = false;
      }

      this._changeScene = sceneName;
      this._clearCache = clearCache;
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
  }, {
    key: 'setupScene',
    value: function setupScene(sceneName) {

      this.currentScene = this._scenes.get(sceneName);
      this.onStartCallback = this.currentScene['start'] || null;
      this.onLoadingCallback = this.currentScene['loading'] || null;
      this.onLoadingRenderCallback = this.currentScene['loadingRender'] || null;
      this.onPreloadCallback = this.currentScene['preload'] || null;
      this.onRenderCallback = this.currentScene['render'] || null;
      this.onDestroyCallback = this.currentScene['destroy'] || null;

      this.game.system.inject(this.currentScene);

      this._currentSceneName = sceneName;

      //this.game.time.refresh();


      //this.currentScene.camera = this.game.world.camera;

      //this.game.instance.scene = this.currentScene;

      this._setup = false;
    }
  }, {
    key: 'clearCurrentScene',
    value: function clearCurrentScene() {

      if (this._currentSceneName) {

        this.game.system.unject(this.currentScene);

        if (this.onDestroyCallback) {
          this.onDestroyCallback.call(this.currentScene, this.game);
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

      if (!this.game.systemInited || this._changeScene == null) return;

      this.clearCurrentScene();

      this.setupScene(this._changeScene);

      if (this._currentSceneName !== this._changeScene) {
        return;
      } else {
        this._changeScene = null;
      }

      if (this.onPreloadCallback) {

        this.game.system.load.reset();
        this.onPreloadCallback.call(this.currentScene, this.game);

        if (this.game.system.load.totalQueuedFiles === 0) {
          this.preloadComplete();
        } else {

          this.game.system.load.start();
        }
      } else {

        this.preloadComplete();
      }
    }
  }, {
    key: 'preloadComplete',
    value: function preloadComplete() {

      //this.currentScene.quadtree = new tobiJS.Quadtree({x: 0, y: 0, width: 640,height: 480});

      if (this._setup === false && this.onLoadingCallback) {
        this.onLoadingCallback.call(this.currentScene, this.game);
      }

      if (this._setup === false && this.onStartCallback) {
        this._setup = true;
        this.onStartCallback.call(this.currentScene, this.game);
      } else {
        this._setup = true;
      }
    }
  }, {
    key: 'render',
    value: function render() {

      if (this._setup) {

        if (this.onRenderCallback) {
          this.onRenderCallback.call(this.currentScene, this.game);
        }
      } else {

        if (this.onLoadingRenderCallback) {
          this.onLoadingRenderCallback.call(this.currentScene, this.game);
        }
      }
    }
  }]);

  return SceneManager;
}();

exports.default = SceneManager;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MergeSort = __webpack_require__(/*! ./useful/MergeSort */ "./structures/useful/MergeSort.js");

var _MergeSort2 = _interopRequireDefault(_MergeSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataList = function () {
    function DataList(elements, unique) {
        _classCallCheck(this, DataList);

        this.unique = unique || true;
        this.childs = [];

        if (Array.isArray(elements)) {
            for (var i = 0; i < elements.length; i++) {
                this.push(elements[i]);
            }
        }
    }

    _createClass(DataList, [{
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
            return (0, _MergeSort2.default)(this.childs, predicate);

            //childs.sort(predicate);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// DataMap simple class
var DataMap = function () {
  function DataMap() {
    _classCallCheck(this, DataMap);

    this._content = {};
    this._size = 0;
  }

  /* 
  Add or set value to the map
  key = keyName
  value = value
  */


  _createClass(DataMap, [{
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MergeSort = __webpack_require__(/*! ./useful/MergeSort */ "./structures/useful/MergeSort.js");

var _MergeSort2 = _interopRequireDefault(_MergeSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataSet = function () {
    function DataSet(elements) {
        _classCallCheck(this, DataSet);

        this._content = [];
        this._size = 0;

        if (Array.isArray(elements)) {
            for (var i = 0; i < elements.length; i++) {
                this.set(elements[i]);
            }
        }
    }

    _createClass(DataSet, [{
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
        key: "sort",
        value: function sort(predicate) {
            if (predicate === undefined) return;
            return (0, _MergeSort2.default)(this._content, predicate);
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


module.exports = {
    Utils: __webpack_require__(/*! ./useful */ "./structures/useful/index.js"),
    Set: __webpack_require__(/*! ./Set */ "./structures/Set.js"),
    Map: __webpack_require__(/*! ./Map */ "./structures/Map.js"),
    List: __webpack_require__(/*! ./List */ "./structures/List.js")
};

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RequestAnimationFrame = __webpack_require__(/*! ../dom/RequestAnimationFrame */ "./dom/RequestAnimationFrame.js");

var _RequestAnimationFrame2 = _interopRequireDefault(_RequestAnimationFrame);

var _ObjectUtils = __webpack_require__(/*! ../utils/ObjectUtils */ "./utils/ObjectUtils.js");

var _ObjectUtils2 = _interopRequireDefault(_ObjectUtils);

var _MathUtils = __webpack_require__(/*! ../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UpdateStep = function () {
        function UpdateStep(game, config) {
                _classCallCheck(this, UpdateStep);

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
                this.fpsDesired = _ObjectUtils2.default.getValue(config, 'fps', config.fps);
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
                                this.currentFps = 0.25 * this._framesThisSecond + 0.75 * this.fps;
                                this.fps = _MathUtils2.default.clamp(~~this.currentFps, 0, this.fpsDesired);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(/*! ../math/Vector */ "./math/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _Matrix = __webpack_require__(/*! ../math/Matrix */ "./math/Matrix.js");

var _Matrix2 = _interopRequireDefault(_Matrix);

var _BoundingBox = __webpack_require__(/*! ../math/BoundingBox */ "./math/BoundingBox.js");

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transform = function () {
  function Transform() {
    _classCallCheck(this, Transform);

    this.matrix = new _Matrix2.default(1);
    this.position = new _Vector2.default(0, 0, this);
    this.scale = new _Vector2.default(1, 1, this);
    this.origin = new _Vector2.default(0, 0, this);
    this.angle = 0;
    this.rotation = 0;
    this._cosSin = { x: 1, y: 0 };
    this._oldRotation = -1;
    this._isDirty = true;
    //this.worldPosition = new Vector(0,0);
    //this.worldScale =  new Vector(1,1);
    //this.worldRotation = 0;
    //this.bounds = new BoundingBox(0,0,1,1); // the full bounds of the node - defined by render
    //this.globalBounds = new BoundingBox(0,0,1,1); // defined by render
  }

  _createClass(Transform, [{
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

var _Matrix = __webpack_require__(/*! ../math/Matrix */ "./math/Matrix.js");

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

    transform.rotation = transform.angle * _MathUtils2.default.degToRad;

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

var _Vector = __webpack_require__(/*! ../math/Vector */ "./math/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _ComputeDelimiterPoint = __webpack_require__(/*! ./ComputeDelimiterPoint */ "./transform/ComputeDelimiterPoint.js");

var _ComputeDelimiterPoint2 = _interopRequireDefault(_ComputeDelimiterPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateTransformBounds(bounds, frame, transform) {

    var coords = [];
    /* let scale = Vector.abs(transform.scale);
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

exports.default = Base64Utils;

/***/ }),

/***/ "./utils/Color.js":
/*!************************!*\
  !*** ./utils/Color.js ***!
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

/***/ "./utils/ObjectUtils.js":
/*!******************************!*\
  !*** ./utils/ObjectUtils.js ***!
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
  }
};

exports.default = Path;

/***/ })

/******/ });
});
//# sourceMappingURL=scintilla.dev.js.map