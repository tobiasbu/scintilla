import { GameSystems } from "../System";
import SceneSystem from "../SceneSystem";



export default function InjectSystems(game, scene) {
        
    scene.game = game;

    for (let property in SceneSystem)
    {
        
        let sys = GameSystems[SceneSystem[property]];

        if (sys !== undefined)
            scene[sys.name] = game.system[sys.name];
    }

    // Special injections, input and sound:

    scene['key'] = game.input.keyboard;
    scene['mouse'] = game.input.mouse;
    scene['audio'] = game.audio;

    /*for (let property in gameSystems) {

        let sys = gameSystems[property];
        scene[sys.name] = property[sys.system];
    }*/
}