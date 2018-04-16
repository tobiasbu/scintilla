import Renderable from "../renderables/Renderable";
import Tilemap from "../renderables/tilemap/Tilemap";
import Sprite from "../renderables/Sprite";

export default function AttachModules(moduleManager, game) {

    // RENDERABLES

    

    moduleManager._pendingModulesInitialization.each(entityModule => {

        if (entityModule instanceof Sprite) {
            game.system.render.layer.addRenderable(entityModule, entityModule.layerID || 0);
        } else if (entityModule instanceof Tilemap) {

            for (let i = 0; i < entityModule.layers.length; i++) {
                game.system.render.layer.addRenderable(entityModule.layers[i], entityModule.layerID || 0);
            }
        }
    });

    moduleManager._pendingModulesInitialization.clear();

}