import startScene from "./startScene";


export default function PreloadSceneComplete() {

      if (this._setup === false && this.onLoadingCallback) {
          this.onLoadingCallback.call(this.currentScene, this.game);
      }


      startScene.call(this);


    //   const start = () => {
    //     if (this._scintillaLoading) {
    //       this._loadingPlaceHolder.start();
    //     } else {

    //       if (this.onPostloadCallback) {
    //         this.onPostloadCallback.call(this.currentScene);
    //       }

    //       if (this.onStartCallback) {
    //         this.onStartCallback.call(this.currentScene, this.game);
    //       }
    //     }
    // }

    // if (this._transition <= TransitionBehavior.NONE) {
    //     start.call(this);
    // } else {
    //     TransitionBetweenScenes(this, start.bind(this));
    // }

      this._setup = true;

      

}