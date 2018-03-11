
import Config from './config';
import Canvas from '../render/canvas/canvas'
import Cache from './cache'
import LoadManager from '../loader/loadmanager'
import Time from '../time/time'
import UpdateTime from '../time/updatetime'
import Input from '../input/input'
import Debug from '../others/debug'

/**
* Main class of engine. Holds all main data.
* @class Game
* @constructor
*/
export default class Game {

  /**
  * @property {string|HTMLElement} parent - The Games DOM parent.
  * @default
  */
 constructor()
 {
  this.parent = 'body';
  this.width = 800;
  this.height = 600;

  // object
  this.config = new Config(config);

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

  parseConfiguration(config) {

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

  }
  /**
    * Initialize engine
    *
    * @method tobiJS.Game#init()
    * @protected
    */
  init() {

    if (this.systemInited)
        return;

    this.canvas = Canvas.create(this.parent,this.width,this.height);
    this.context = this.canvas.getContext("2d", { alpha: false });

    this.cache = new Cache(this);
    this.load = new LoadManager(this);
    this.time = new Time(this);
    //this.universe = new scintilla.Universe(this);
    //this.world = new scintilla.World(this);
    //this.draw = new scintilla.Draw(this);
    //this.render = new scintilla.Render(this, this.canvas, this.context);
    //this.scene = new scintilla.SceneManager(this);
    this.input = new Input(this);
    //this.instance = new scintilla.Creator(this,this.world);
    //this.component = new scintilla.GameComponents(this);
    //this.animationCache = new scintilla.AnimationCache(this);
    //this.sound = new scintilla.SoundManager(this);
    //this.pool = new scintilla.Pool(this);
    //this.physics = new scintilla.Physics(this);

    if (this.debugMode)
      this.debug = new Debug(this);

    this.time.start();
    this.input.init();
    //this.sound.start();
    //this.world.start();

    this.updateGameMethod = new UpdateTime(this,this.timeMode);
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
  update(time) {

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
  }

  logic(timeStep) {

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

  destroy() {

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

}

//scintilla.Game.prototype.constructor = scintilla.Game;


module.exports = Game;