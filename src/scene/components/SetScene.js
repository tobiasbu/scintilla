import TransitionBehavior from "../../render/transition/TranstionBehavior";


export default function SetScene(manager, sceneName, clearCache, type) {

if (!manager._scenes.has(sceneName))
    throw new Error('SceneManager.set: Scene \'' + sceneName + '\' does not exist.')

  if (clearCache === undefined) { clearCache = false; }
  if (type === undefined) {type = TransitionBehavior.NONE;}

  manager._transition = type;
  manager._changeScene = sceneName;
  manager._clearCache = clearCache;

  return manager;
  
}