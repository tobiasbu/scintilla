
export default function PostPreloadingScene(sceneManger) {

    sceneManger._scintillaLoading = false;

    if (sceneManger.currentScene === undefined || sceneManger.currentScene === null) return;

    if (sceneManger.onStartCallback) {
        sceneManger.onStartCallback.call(sceneManger.currentScene, sceneManger.game);
    }
}