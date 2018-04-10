import { GameSystems } from "../System";
import RequestDepthSorting from "../../../render/components/RequestDepthSorting";
import RequestRenderableLayerIDChange from "../../../render/components/RequestRenderableLayerIDChange";

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

    // render events callbacks
    systems.events.subscribe('__render_depthsorting', RequestDepthSorting, render);
    systems.events.subscribe('__render_layeridchange', RequestRenderableLayerIDChange, render);

    return systems;

}