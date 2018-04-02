import SceneSystem from "./SceneSystem";


export var GameSystems = {};

const System = {

    /** @inner 
     * Register a game system.
     * 
     * @param {String} key Long description of system
     * @param {Class} system The system class
     * @param {String} systemName The short description name of the system
     * @param {Function} [initFunc] [optional] Initialize function for the system.
     */
    register(key, system, systemName, initFunc)
    {
        GameSystems[key] = {
            name: systemName, 
            system: system, 
            init : initFunc
        };
    }
    
}

export default System;
