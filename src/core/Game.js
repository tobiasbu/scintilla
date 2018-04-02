
import Config from './Config';
import Input from '../input/Input'
import SceneManager from '../scene/SceneManager'
import Physics from '../physics/physics'
import GameTime from '../time/GameTime';
import System from './system/System';
import InitializeSystems from './system/components/InitializeSystems';

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


  //objects
  this.debug = null;
  //this.scene = null;
  this.sound = null;
  this.input = null;
  this.pool = null;
  this.systems =  null;
  this.context = null;
  this.time = null;
  this.events = null;

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
    * @method Game#init()
    * @protected
    */
  init() {

    if (this.systemInited)
        return;

    this.physics = new Physics(this);
    this.input = new Input(this);
    //this.scene = new SceneManager(this);
    //new GameSystemManager(this);
    this.time = new GameTime(this);

    this.system = InitializeSystems(this);

    this.input.init();
    this.time.init(this.system.loop);
    this.systemInited = true;
    this.isRunning = true;


    console.log("scintilla started!");

  }

  destroy() {

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

}

//scintilla.Game.prototype.constructor = scintilla.Game;


module.exports = Game;