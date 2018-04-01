
export default function RenderScene(sceneManager, drawer) {

    if (sceneManager._setup) {

        if (sceneManager._scintillaLoading) {
            sceneManager._loadingPlaceHolder.gui(drawer);
        } else {
        if (sceneManager.onRenderCallback)
            sceneManager.onRenderCallback.call(sceneManager.currentScene, drawer);
        
        }
    } else {
        if (sceneManager._scintillaLoading) {
            sceneManager._loadingPlaceHolder.loadingGUI(drawer);
        } else {
            if (sceneManager.onLoadingRenderCallback)
                sceneManager.onLoadingRenderCallback.call(sceneManager.currentScene, drawer);
            
        }
    }

}