
import Config from './config';
import Time from '../time/time'
import UpdateTime from '../time/updatetime'
import Input from '../input/input'
import SceneManager from '../scene/scenemanager'
import Physics from '../physics/physics'
import Debug from '../others/debug'
import GameSystemManager from './gameSystemManager';

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
  this.scene = null;
  this.sound = null;
  this.input = null;
  this.time = null;
  this.updateGameMethod = null;
  this.pool = null;
  this.systems =  null;

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

    this.time = new Time(this);
    this.physics = new Physics(this);
    this.input = new Input(this);
    this.scene = new SceneManager(this);
    this.system = new GameSystemManager(this);
    
    
    this.system.init();

    

    this.scene.init();
    this.time.start();
    this.input.init();

    if (this.debugMode)
      this.debug = new Debug(this);
      
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

          this.display(this.time.accumulatorDelta);

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

          this.display(this.time.accumalator/this.time.accumulatorDelta);
            //this.render.render(this.time.accumalator/this.time.accumulatorDelta);

      }



    }
  }

  display(timeStep) {
    this.system.render.renderBegin();
    this.system.render.render(timeStep);
    this.system.render.renderEnd();
  }

  logic(timeStep) {

    // Core Managers

    this.input.update();
    //this.sound.update();

    // Scene Update
    this.physics.update();
    this.scene.preUpdate();
    this.scene.update(timeStep);

    
    
    //this.universe.preUpdate(timeStep);


    //this.world.camera.update();

    //this.universe.update(timeStep);
    
    //

    //this.universe._updateTransform();


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