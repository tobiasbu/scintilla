
import System from '../core/system/System';
import DataMap from '../structures/Map';
import Scene from './Scene';
import ScintillaLoadingScreen from './builtin/ScintillaLoadingScene';
import SetScene from './components/SetScene';
import InjectSystems from '../core/system/components/InjectSystems';
import CreateSceneFrom from './components/CreateSceneFrom';
import Validate from '../utils/Validate';

export default class SceneManager {
  
  constructor(game) {

    this.game = game;
    this._scenes = new DataMap();

    this.currentScene = null;
    this._currentSceneName = '';
    this._changeScene = null;
    this._transition = null;
    this._isTranistioning = false;

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

  add(sceneName, scene) {

    if (sceneName === undefined) {
      throw new Error("SceneManager.add: Could not add Scene. \'sceneName\' is undefined."); 
    }

    if (!Validate.isString(sceneName)) {
      throw new Error("SceneManager.add: Could not add Scene. \'sceneName\' is not string."); 
    }

    if (this._scenes.has(sceneName)) {
      throw new Error("SceneManager.add: Could not add Scene. There is already a scene with name \"" + sceneName + "\"."); 
    }

    let newScene = CreateSceneFrom(scene, sceneName);
    this._scenes.insert(sceneName, newScene);
    return this;
  }

  new(sceneName) {

    if (this._scenes.has(sceneName))
    {
      throw new Error("Could not create new Scene. The scene name \"" + name + "\" already exists."); 
    }

    var newScene = new Scene(this.game, sceneName);
    this._scenes.insert(sceneName,newScene);

    return newScene;

  }

  set(sceneName, clearCache) {
    return SetScene(this, sceneName, clearCache);
  }

  transition(sceneName, type) {
    SetScene(this, sceneName, false, type);
    /// TODO
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
