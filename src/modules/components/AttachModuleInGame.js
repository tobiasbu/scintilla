import Renderable from "../renderables/Renderable";
import Tilemap from "../renderables/tilemap/Tilemap";
import Sprite from "../renderables/Sprite";

export default function AttachModuleInGame(entityModule, modulesManager, game) {
 
    // RENDERABLES
    if (entityModule instanceof Sprite) 
    {
        console.log("asdasdsad");
        game.system.render.layer.renderLayers.at(0).add(entityModule);
    } 
    else if (entityModule instanceof Tilemap) {
        for (let i = 0; i < entityModule.layers.length; i++) {
            game.system.render.layer.renderLayers.at(0).add(entityModule.layers[i]);
        
    }

       
    }

}