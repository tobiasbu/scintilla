import Scene from "../Scene";
import Extend from '../../utils/object/Extend';

export default function CreateSceneFrom(value, sceneName) {

    if (value === undefined) {
        throw new Error("SceneManager.add: Could not add Scene. \'scene\' is undefined.");
    }

    if (value === null) {
        throw new Error("SceneManager.add: Could not add Scene. \'scene\' is null.");
    }

    var newScene;

    if (value instanceof Scene) {
      newScene = scene;
    } else if (typeof value === Scene) {
      newScene = new value();
    } else if (typeof value === 'object') {
        let placeholder = new Scene(sceneName);
        newScene = Extend(placeholder, value);
    } else if (typeof value === 'function') {
        let placeholder = new value();

        if (value instanceof Scene) {
            newScene = placeholder;
        } else {
            if (placeholder.name === undefined) {
                placeholder.name = sceneName;
            }
            newScene = Extend(true, placeholder, Scene);
            
        }
    }

    return newScene;
}