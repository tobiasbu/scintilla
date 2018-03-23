
import Map from '../structures/map'
import Scene from './scene'

export default class SceneManager {
  
  constructor(game) {

    this.game = game;
    this.entityUpdateList = null;
    this._scenes = new Map();

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

  add(sceneName,scene) {

  var newScene;

  if (scintilla.Scene.prototype.isPrototypeOf(scene)) {
    newScene = scene;
    newScene.game = this.game;
  } else
    newScene = null;


  if (newScene != null)
    this._scenes.set(sceneName,newScene);

  }

  new(sceneName)
  {

  if (this._scenes.has(sceneName))
  {
    throw "Could not create new Scene. The scene name \"" + name + "\" already exists."; 
    return null;
  }

  var newScene = new Scene(this.game, sceneName);
  this._scenes.set(sceneName,newScene);

  return newScene;

  }

  set(sceneName, clearCache) {

    if (!this._scenes.has(sceneName))
      throw new Error('SceneManager.set: Scene' + sceneName + ' does not exist.')

  if (clearCache === undefined) { clearCache = false; }

  

  this._changeScene = sceneName;
  this._clearCache = clearCache;



  }

  restart(clearCache) {

  if (clearCache === undefined) { clearCache = false; }

  this._changeScene = this._currentSceneName;
  this._clearCache = clearCache;

  }

  remove(sceneName) {

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

  setupScene(sceneName) {


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

  clearCurrentScene() {

  if (this._currentSceneName)
  {

    this.game.system.unject(this.currentScene);

    if (this.onDestroyCallback)
    {
        this.onDestroyCallback.call(this.currentScene, this.game);
    }

    if (this._clearCache)
    {
          this.game.cache.clear();
    }

    //this.game.world.destroyAllChilds();

  }

  }

  preUpdate() {

    if (!this.game.systemInited || this._changeScene == null)
      return;


      this.clearCurrentScene();

      this.setupScene(this._changeScene);

      if (this._currentSceneName !== this._changeScene)
      {
          return;
      }
      else
      {
          this._changeScene = null;
      }

      if (this.onPreloadCallback) {

        this.game.system.load.reset();
        this.onPreloadCallback.call(this.currentScene, this.game);

        if (this.game.system.load.totalQueuedFiles === 0)
        {
          this.preloadComplete();

        } else {

          this.game.system.load.start();
        }

      } else {

        this.preloadComplete();
      }

    

  }

  preloadComplete() {

    //this.currentScene.quadtree = new tobiJS.Quadtree({x: 0, y: 0, width: 640,height: 480});

      if (this._setup === false && this.onLoadingCallback)
      {
          this.onLoadingCallback.call(this.currentScene, this.game);
      }

      if (this._setup === false && this.onStartCallback)
      {
          this._setup  = true;
          this.onStartCallback.call(this.currentScene, this.game);
      }
      else
      {
          this._setup = true;

      }
  }

    render() {

      if (this._setup) {


          if (this.onRenderCallback)
          {
              this.onRenderCallback.call(this.currentScene, this.game);
          }

      } else {

        if (this.onLoadingRenderCallback)
        {
            this.onLoadingRenderCallback.call(this.currentScene, this.game);
        }


      }

    }


}


