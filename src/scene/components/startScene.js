import TransitionBetweenScenes from "./TransitionBetweenScenes";
import TransitionBehavior from "../../render/transition/TranstionBehavior";



/**
 * @this SceneManager
 */
function startScene() {

  const start = () => {

    if (this._scintillaLoading) {
      this._loadingPlaceHolder.start();
    } else {
  
      this._isTransitioning = false;
  
      if (this.onPostloadCallback) {
        this.onPostloadCallback.call(this.currentScene);
      }
  
      if (this.onStartCallback) {
        console.log("start")
        this.onStartCallback.call(this.currentScene, this.game);
      }
    }
  
  };

  if (this._transition <= TransitionBehavior.NONE) {
    start();
  } else {
      TransitionBetweenScenes(this, start);
  }

}

export default startScene;