import { GameSystems } from "../System";
import SceneSystem from "../SceneSystem";

export default function UnjectSystems(scene) {

        for (let property in SceneSystem) {

            let sys = GameSystems[SceneSystem[property]];

            if (sys !== undefined)
            {
                delete scene[sys.name]; // = undefined;
            }
        }

        delete scene['key']; 
        delete scene['mouse'];
        delete scene['audio']; 
}