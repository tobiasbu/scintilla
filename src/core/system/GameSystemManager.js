import SceneSystem from "./SceneSystem";


var gameSystems = {};

export default class GameSystemManager
{

    constructor(game)
    {
        this.game = game;
        //this.systems = {};
    }


    get(system) {
        return this[system];
    }


    static register(key, system, systemName, initFunc)
    {
        gameSystems[key] = {
            name: systemName, 
            system: system, 
            init : initFunc
        };
    }
    

    
}
