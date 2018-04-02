import SetupScene from "./SetupScene";
import PreloadSceneComplete from "./PreloadSceneComplete";
import ClearScene from "./ClearScene";
import StartLoadAssets from "../../loader/components/StartLoadAssets";

export default function PreUpdateScene(sceneManager) {

    if (!sceneManager.game.systemInited || sceneManager._changeScene == null)
      return;


      ClearScene(sceneManager, sceneManager.game);

      SetupScene.call(sceneManager, sceneManager._changeScene);

      if (sceneManager._currentSceneName !== sceneManager._changeScene)
      {
          return;
      }
      else
      {
        sceneManager._changeScene = null;
      }

      if (sceneManager.onPreloadCallback) {

        sceneManager.game.system.load.reset();
        sceneManager.onPreloadCallback.call(sceneManager.currentScene, sceneManager.game);

        if (sceneManager.game.system.load.totalQueuedFiles === 0)
        {
          PreloadSceneComplete.call(sceneManager);

        } else {

            //sceneManager.game.system.load.start();
            StartLoadAssets.call(sceneManager.game.system.load);
        }

      } else {

        PreloadSceneComplete.call(sceneManager);
      }
}