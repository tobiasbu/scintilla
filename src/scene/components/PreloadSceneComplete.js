

export default function PreloadSceneComplete() {

      if (this._setup === false && this.onLoadingCallback) {
          this.onLoadingCallback.call(this.currentScene, this.game);
      }

      if (this._scintillaLoading) {
        //this._scintillaLoading = false;
        sceneManager._loadingPlaceHolder.start();
      }

      if (this._setup === false && this.onStartCallback) {
          this._setup  = true;
          this.onStartCallback.call(this.currentScene, this.game);


      }
      else
      {
          this._setup = true;

      }
}