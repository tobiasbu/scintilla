import TransitionBehavior from "../../render/transition/TranstionBehavior";
import TransitionBetweenScenes from "./TransitionBetweenScenes";


export default function PreloadSceneComplete() {

      if (this._setup === false && this.onLoadingCallback) {
          this.onLoadingCallback.call(this.currentScene, this.game);
      }



      function start() {
      if (this._scintillaLoading) {
        this._loadingPlaceHolder.start();
      } else {
        if (this.onStartCallback) {
          this.onStartCallback.call(this.currentScene, this.game);
        }
      }
    }

    if (this._transition <= TransitionBehavior.NONE) {
        start.call(this);
    } else {
        TransitionBetweenScenes(this, start.bind(this));
    }

      this._setup = true;

      

}