import { GameSystems } from "../System";

export default function UnjectSystems(scene) {

        for (let property in GameSystems) {

            if (scene[sys.name] !== undefined)
            {
                delete scene[sys.name]; // = undefined;
            }
        }
}