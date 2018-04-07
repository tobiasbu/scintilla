import { GameSystems } from "../System";

export default function InitializeSystems(game, render) {
    
    let systems = {};
 
    // register all game systems
    for (let property in GameSystems) {

        let registered = GameSystems[property];
        systems[registered.name] = new registered.system(game, systems);
    }

    // set core system to game class
    game.system = systems;
    game.scene = systems.scene;
    game.render = render;
    systems.render = render;

    // initialize systems
    for (let property in GameSystems) {

        
        let registered = GameSystems[property];
        let InitializeSystemFunction = registered.init;
        
        if (InitializeSystemFunction === undefined) continue;

        InitializeSystemFunction.call(systems[registered.name]);
    }

    return systems;

}