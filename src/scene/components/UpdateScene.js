
export default function UpdateScene(sceneManager, deltaTime) {

    if (sceneManager._setup) {

        if (sceneManager._scintillaLoading) {
            sceneManager._loadingPlaceHolder.update(deltaTime);
        } else {
        if (sceneManager.onUpdateCallback)
            sceneManager.onUpdateCallback.call(sceneManager.currentScene, deltaTime);
        
        }
    } else {
        if (sceneManager._scintillaLoading) {
            sceneManager._loadingPlaceHolder.loading(deltaTime);
        } else {
            if (sceneManager.onLoadingCallback)
                sceneManager.onLoadingCallback.call(sceneManager.currentScene, deltaTime);
            
        }
    }

}