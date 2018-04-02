
import System from '../core/system/System';
import DataMap from '../structures/Map'
import Scene from './Scene'
import ScintillaLoadingScreen from './builtin/ScintillaLoadingScene';
import SetScene from './components/SetScene';
import InjectSystems from '../core/system/components/InjectSystems';


export default class SceneManager {
  
  constructor(game) {

    this.game = game;
    this._scenes = new DataMap();

    this.currentScene = null;
    this._currentSceneName = '';
    this._changeScene = null;

    this._setup = false;
    this._clearCache = false;

    this._scintillaLoading = false;

    // callbacks
    
    this.onStartCallback = null;
    this.onLoadingCallback = null;
    this.onLoadingRenderCallback = null;
    this.onPreloadCallback = null;
    this.onUpdateCallback = null;
    this.onRenderCallback = null;
    this.onDestroyCallback = null;
    this._loadingPlaceHolder = new ScintillaLoadingScreen(this.game);

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

  new(sceneName) {

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
    return SetScene(this, sceneName, clearCache, false);
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





}

System.register('SceneManager', SceneManager, 'scene', function()
{
  InjectSystems(this.game, this._loadingPlaceHolder);
});
