
/**
* Main class of engine. Holds all main data.
* @class Game
* @constructor
*/
tobi.Game = function (width, height, parent, timeOutMode, debugMode ) {

  /**
  * @property {string|HTMLElement} parent - The Games DOM parent.
  * @default
  */
  this.parent = 'body';
  this.width = 800;
  this.height = 600;

  // object
  this.config = null;

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
  this.universe = null;
  this.world = null;
  this.input = null;
  this.clock = null;
  this.component = null;
  this.instance = null;
  this.animationCache = null;
  this.updateGameMethod = null;
  this.pool = null;

  this.context = null;

  //parse config
  if (arguments.length === 1 && typeof arguments[0] === 'object')
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
   }


  this.init();

  return this;

}


tobi.Game.prototype = {



  parseConfiguration : function(config) {

    this.config = config;

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

        /*if (config['renderer'])
        {
            this.renderType = config['renderer'];
        }*/

    if (config['parent'])
    {
        this.parent = config['parent'];
    }

        /*if (config['transparent'] !== undefined)
        {
            this.transparent = config['transparent'];
        }*/

        /*if (config['antialias'] !== undefined)
        {
            this.antialias = config['antialias'];
        }

        if (config['resolution'])
        {
            this.resolution = config['resolution'];
        }

        if (config['preserveDrawingBuffer'] !== undefined)
        {
            this.preserveDrawingBuffer = config['preserveDrawingBuffer'];
        }

        if (config['physicsConfig'])
        {
            this.physicsConfig = config['physicsConfig'];
        }*/

    /*var seed = [(Date.now() * Math.random()).toString()];

    if (config['seed'])
    {
        seed = config['seed'];
    }

    this.rnd = new Phaser.RandomDataGenerator(seed);*/



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



    this.canvas = tobi.Canvas.create(this.parent,this.width,this.height);
    this.context = this.canvas.getContext("2d", { alpha: false });

    this.cache = new tobi.Cache(this);
    this.load = new tobi.LoadManager(this);
    this.clock = new tobi.Clock(this);
    this.universe = new tobi.Universe(this);
    this.world = new tobi.World(this);
    this.draw = new tobi.Draw(this);
    this.scene = new tobi.SceneManager(this);
    this.input = new tobi.Input(this);
    this.instance = new tobi.Creator(this,this.world);
    this.component = new tobi.GameComponents(this);
    this.animationCache = new tobi.AnimationCache(this);
    this.sound = new tobi.SoundManager(this);
    this.pool = new tobi.Pool(this);
    this.physics = new tobi.Physics(this);

    if (this.debugMode)
      this.debug = new tobi.Debug(this);

    this.clock.start();
    this.input.init();
    this.sound.start();
    this.world.start();

    this.updateGameMethod = new tobi.UpdateGame(this,this.timeMode);
    this.updateGameMethod.start();



    this.systemInited = true;
    this.isRunning = true;


    console.log("tobiJS Created!");

  },

  /*run : function() {


  //  if (  this.load.checkAssets()) {
      //this.interval = setInterval(function(){ me.update() },1000/60);
    //  this.interval = setTimeout(function(){me.update()}, 1000/60);
    //} else {
    //  console.log("Can not initialize the game. Failed to download game assets.");
    //}

  },*/


  /**
    * core game loop
    *
    * @method tobiJS.Game#update()
    * @protected
    */
  update : function(time) {

    if (this.systemInited) {



      this.clock.update(time);

      if (this._spiraling > 1) {

          this.clock.deltaTime = 0;
          this._spiraling = 0;
          this.clock.accumalator = 0;

          this.render(this.clock.accumulatorDelta);

      } else {

      var countFrames = 0;

      while (this.clock.accumalator >= this.clock.accumulatorDelta) {

        //  this.clock.updateStart = window.performance.now();

          this.clock.deltaTime = Math.min(this.clock.accumalator,this.clock.accumulatorDelta) / 1000;

          this.logic(this.clock.deltaTime);

          //this.clock.updateLast =  window.performance.now();
        //  this.clock.updateAverage = this.clock.updateLast - this.clock.updateStart;

          this.clock.accumalator -= this.clock.accumulatorDelta;

          countFrames++;

          this.clock.refresh();

          if (countFrames >= 240) { // SPIRAL
              //panic();
              this.clock.accumalator = 0;

              break;
          }
      }

        if (countFrames > this._lastFrameCount)
           this._spiraling++;
       else if (countFrames < this._lastFrameCount)
          this._spiraling = 0;

          this._lastFrameCount = countFrames;

            this.render(this.clock.accumalator/this.clock.accumulatorDelta);

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

  render : function(time) {

    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.globalCompositeOperation = 'source-over';
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = this.universe.backgroundColor;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.scene.render();
    this.universe.render();

    if (this.debug != null) {

      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.debug.test();
      //console.log("asdasd");

    }

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
    this.clock = null;
    this.component = null;
    this.instance = null;
    this.animationCache = null;
    this.updateGameMethod = null;


  },

}

tobi.Game.prototype.constructor = tobi.Game;
