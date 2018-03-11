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

/* WEBPACK VAR INJECTION */(function(global) {/**
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
* @namespace Scintilla
*/
var Scintilla = Scintilla || {
  VERSION: '0.0.1',
  Game : __webpack_require__(/*! ./core/game.js */ "./core/game.js"),
};

Scintilla.ShapeType = {
Rect : 1,
Circle : 2,
Polygon : 3
}


module.exports = Scintilla;

global.Scintilla = Scintilla;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./core/game.js":
/*!**********************!*\
  !*** ./core/game.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
* Main class of engine. Holds all main data.
* @class Game
* @constructor
*/
Scintilla.Game = function (config) {

  /**
  * @property {string|HTMLElement} parent - The Games DOM parent.
  * @default
  */
  this.parent = 'body';
  this.width = 800;
  this.height = 600;

  // object
  this.config = new Scintilla.Config(config);

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
  //parse config
 /* if (arguments.length === 1 && typeof arguments[0] === 'object')
   {

     this.parseConfiguration(arguments[0]);

   }
   else
   {
       if (typeof width !== 'undefined')
        this.width = width;

       if (typeof height !== 'undefined')
        this.height = height;

      if (typeof timeOutMode !== 'undefined')
        this.timeMode = timeOutMode;

        if (typeof debugMode !== 'undefined')
        this.debugMode = debugMode;
   }*/


   this.init();

  return this;

}


Scintilla.Game.prototype = {



  parseConfiguration : function(config) {

    //this.config = config;

    if (config['debug'])
    {
        this.debugMode = config['debug'];

    }

    if (config['width'])
    {
        this.width = config['width'];
    }

    if (config['height'])
    {
        this.height = config['height'];
    }

    if (config['parent'])
    {
        this.parent = config['parent'];
    }

  },
  /**
    * Initialize engine
    *
    * @method tobiJS.Game#init()
    * @protected
    */
  init : function() {

    if (this.systemInited)
        return;



    this.canvas = Scintilla.Canvas.create(this.parent,this.width,this.height);
    this.context = this.canvas.getContext("2d", { alpha: false });

    this.cache = new Scintilla.Cache(this);
    this.load = new Scintilla.LoadManager(this);
    this.time = new Scintilla.Time(this);
    this.universe = new Scintilla.Universe(this);
    this.world = new Scintilla.World(this);
    this.draw = new Scintilla.Draw(this);
    this.render = new Scintilla.Render(this, this.canvas, this.context);
    this.scene = new Scintilla.SceneManager(this);
    this.input = new Scintilla.Input(this);
    this.instance = new Scintilla.Creator(this,this.world);
    this.component = new Scintilla.GameComponents(this);
    this.animationCache = new Scintilla.AnimationCache(this);
    this.sound = new Scintilla.SoundManager(this);
    this.pool = new Scintilla.Pool(this);
    this.physics = new Scintilla.Physics(this);

    if (this.debugMode)
      this.debug = new Scintilla.Debug(this);

    this.time.start();
    this.input.init();
    this.sound.start();
    this.world.start();

    this.updateGameMethod = new Scintilla.UpdateGame(this,this.timeMode);
    this.updateGameMethod.start();



    this.systemInited = true;
    this.isRunning = true;


    console.log("tobiJS Created!");

  },
  
  /**
    * core game loop
    *
    * @method tobiJS.Game#update()
    * @protected
    */
  update : function(time) {

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

            this.render._render(this.time.accumalator/this.time.accumulatorDelta);

      }



    }

      //GI.context.fillRect(0, 0, GI.current_room.width, GI.current_room.height);

        /*var instances = this.current_scene.instances;

        //

        instances.forEach( function(instance, value) {

            instance.draw();
            //console.log("asdasd");


        })*/






  },

  logic : function(timeStep) {

    this.scene.preUpdate();
    this.scene.update(timeStep);
    this.input.update();
    this.universe.preUpdate(timeStep);


    //this.world.camera.update();

    this.universe.update(timeStep);
    this.physics.update();
    this.sound.update();

    this.universe._updateTransform();


  },

  destroy : function() {

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


  },

}

Scintilla.Game.prototype.constructor = Scintilla.Game;


module.exports = Scintilla.Game;

/***/ })

/******/ });
});
//# sourceMappingURL=scintilla.js.map