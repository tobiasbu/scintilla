
tobi.SceneManager = function(game) {

this.game = game;
this.scenes = {};

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
    this.scenes[sceneName] = newScene;

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



  this.current_scene = this.scenes[sceneName];
  this.onStartCallback = this.scenes[sceneName]['start'] || null;
  this.onLoadingCallback = this.scenes[sceneName]['loading'] || null;
  this.onLoadingRenderCallback = this.scenes[sceneName]['loadingRender'] || null;
  this.onPreloadCallback = this.scenes[sceneName]['preload'] || null;
  this.onUpdateCallback = this.scenes[sceneName]['update'] || null;
  this.onRenderCallback = this.scenes[sceneName]['render'] || null;
  this.onDestroyCallback = this.scenes[sceneName]['destroy'] || null;
  this.current_scene_name = sceneName;

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


          this.game.load.startDownload();

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

        this.current_scene._update();

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
