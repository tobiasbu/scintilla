
tobi.SceneManager = function(game) {

this.game = game;
this._scenes = new tobi.Map();

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

tobi.SceneManager.prototype = {

add : function (sceneName,scene) {

  var newScene;

  if (tobi.Scene.prototype.isPrototypeOf(scene)) {
    newScene = scene;
    newScene.game = this.game;
  } else
    newScene = null;


  if (newScene != null)
    this._scenes.set(sceneName,newScene);

},

new : function(sceneName)
{

  if (this._scenes.has(sceneName))
  {
    throw "Could not create new Scene. The scene name \"" + name + "\" already exists."; 
    return null;
  }
  
  var newScene = new tobi.Scene(this.game);
  this._scenes.set(sceneName,newScene);

  return newScene;

},

set : function (sceneName, clearCache) {

  if (clearCache === undefined) { clearCache = false; }

  this.change_scene = sceneName;
  this._clearCache = clearCache;



},

restart : function(clearCache) {

  if (clearCache === undefined) { clearCache = false; }

  this.change_scene = this.current_scene_name;
  this._clearCache = clearCache;

},

remove : function(sceneName) {

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

},

setupScene : function(sceneName) {



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

},

clearCurrentScene : function() {

  if (this.current_scene_name)
  {

    if (this.onDestroyCallback)
    {
        this.onDestroyCallback.call(this.current_scene, this.game);
    }

    if (this._clearCache)
    {
          this.game.cache.clear();
    }

    this.game.world.destroyAllChilds();

  }

},

preUpdate : function() {

  if (this.game.systemInited && this.change_scene != null)
  {

    this.clearCurrentScene();

    this.setupScene(this.change_scene);

    if (this.current_scene_name !== this.change_scene)
    {
        return;
    }
    else
    {
        this.change_scene = null;
    }

    if (this.onPreloadCallback) {

      this.game.load.reset();
      this.onPreloadCallback.call(this.current_scene, this.game);

      if (this.game.load.totalQueuedFiles() === 0)
      {
            this.preloadComplete();

      } else {


          this.game.load.start();

      }

    } else {

        this.preloadComplete();

    }

  }

},

    preloadComplete: function () {

      //this.current_scene.quadtree = new tobiJS.Quadtree({x: 0, y: 0, width: 640,height: 480});

        if (this._setup === false && this.onLoadingCallback)
        {
            this.onLoadingCallback.call(this.current_scene, this.game);
        }

        if (this._setup === false && this.onStartCallback)
        {
            this._setup  = true;
            this.onStartCallback.call(this.current_scene, this.game);
        }
        else
        {
            this._setup = true;

        }
    },

    update : function() {

      if (this._setup) {

        if (this.onUpdateCallback)
        {
            this.onUpdateCallback.call(this.current_scene, this.game);
        }

        //this.current_scene._update();

      } else {

        if (this.onLoadingCallback)
        {
            this.onLoadingCallback.call(this.current_scene, this.game);
        }

      }

    },

    render : function () {

      if (this._setup) {


          if (this.onRenderCallback)
          {
              this.onRenderCallback.call(this.current_scene, this.game);
          }

      } else {

        if (this.onLoadingRenderCallback)
        {
            this.onLoadingRenderCallback.call(this.current_scene, this.game);
        }


      }

    }


}

tobi.SceneManager.prototype.constructor = tobi.SceneManager;
