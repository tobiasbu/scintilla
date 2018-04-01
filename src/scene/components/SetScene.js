

export default function SetScene(manager, sceneName, clearCache) {

if (!manager._scenes.has(sceneName))
    throw new Error('SceneManager.set: Scene' + sceneName + ' does not exist.')

  if (clearCache === undefined) { clearCache = false; }


    manager._changeScene = sceneName;
    manager._clearCache = clearCache;
  
}