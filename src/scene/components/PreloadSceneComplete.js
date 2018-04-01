

export default function PreloadSceneComplete() {

      if (this._setup === false && this.onLoadingCallback) {
          this.onLoadingCallback.call(this.currentScene, this.game);
      }

      if (this._scintillaLoading) {
        //this._scintillaLoading = false;
        this._loadingPlaceHolder.start();
      }

      this._setup = true;

      /*if (!this._scintillaLoading && this.onStartCallback) {
          this.onStartCallback.call(this.currentScene, this.game);
      }*/

}