import SceneSystem from "./SceneSystem";


var gameSystems = {};

export default class GameSystemManager
{

    constructor(game)
    {
        this.game = game;
        //this.systems = {};
    }

    init() {
        // register all game systems
        for (let property in gameSystems) {

            var sys = gameSystems[property];
            this[sys.name] = new sys.system(this.game, this);
        }

        // set core system to game class
        this.game.scene = this['scene'];

        // initialize systems
        for (let property in gameSystems) {

            
            var sys = this[gameSystems[property].name];
            if (sys.init === undefined) continue;

            sys.init();
        }

        
    }

    get(system) {
        return this[system];
    }

    inject(scene) {
        
        scene.game = this._game;

        for (let property in SceneSystem)
        {
            
            let sys = gameSystems[SceneSystem[property]];

            if (sys !== undefined)
                scene[sys.name] = this[sys.name];
        }

        // Special injections, input and sound:

        scene['key'] = this.game.input.keyboard;
        scene['mouse'] = this.game.input.mouse;

        /*for (let property in gameSystems) {

            let sys = gameSystems[property];
            scene[sys.name] = property[sys.system];
        }*/
    }

    unject(scene) {

        for (let property in gameSystems) {
            scene[sys.name] = undefined;
        }
    }

    update(time, deltaTime) {

    }

    static register(key, system, systemName)
    {
        gameSystems[key] = {name: systemName, system: system};
    }
    

    
}
