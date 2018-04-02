import UnjectSystems from "../../core/system/components/UnjectSystems";

export default function ClearScene(game, sceneManager) {

    if (sceneManager._currentSceneName)
    {
  
      //game.system.unject(sceneManager.currentScene);
      UnjectSystems(sceneManager.currentScene);

      if (sceneManager.onDestroyCallback)
      {
        sceneManager.onDestroyCallback.call(sceneManager.currentScene, game);
      }
  
      if (sceneManager._clearCache)
      {
        game.cache.clear();
      }

    }

}