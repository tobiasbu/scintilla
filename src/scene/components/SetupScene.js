import InjectSystems from "../../core/system/components/InjectSystems";

  export default function SetupScene(sceneName) {

    this.currentScene = this._scenes.get(sceneName);
  
    this.onLoadingCallback = this.currentScene['loading'] || null;
    this.onLoadingRenderCallback = this.currentScene['loadingGUI'] || null;
  
    let bothIsNull = (this.onLoadingCallback === null && this.onLoadingRenderCallback === null);
  
    if (this.onLoadingCallback === null || this.onLoadingRenderCallback === null)
    {
      if (bothIsNull)
      {
        this._loadingPlaceHolder.init(this.currentScene);
        this._scintillaLoading = true;
      } else {
        this._scintillaLoading = false;
      }
    }
  
    this.onRenderCallback = this.currentScene['gui'] || null;
    this.onUpdateCallback = this.currentScene['update'] || null;
    this.onStartCallback = this.currentScene['start'] || null;
    this.onPreloadCallback = this.currentScene['preload'] || null;    
    this.onDestroyCallback = this.currentScene['destroy'] || null;
  
    InjectSystems(this.game, this.currentScene);
    //this.game.system.inject(this.currentScene);
  
    this._currentSceneName = sceneName;
  
    this._setup = false;
  
}