import UnjectSystems from "../../core/system/components/UnjectSystems";
import ClearAudioSources from "../../audio/manager/components/ClearAudioSources";
import ClearEntities from "../../entities/hierarchy/ClearEntities";
import ResetKeyboard from "../../input/keyboard/components/ResetKeyboard";

export default function ClearScene(game, sceneManager) {

    if (sceneManager.currentScene !== null && sceneManager.currentScene !== undefined)
    {
  
      //game.system.unject(sceneManager.currentScene);
      UnjectSystems(sceneManager.currentScene);

      if (sceneManager.onDestroyCallback)
      {
        sceneManager.onDestroyCallback.call(sceneManager.currentScene);
      }
  
      if (sceneManager._clearCache)
      {
        game.cache.clear();
      }

      ClearEntities(game.system.entityList, game);
      ResetKeyboard.call(game.input.keyboard);
      ClearAudioSources.call(game.audio);

    }

}