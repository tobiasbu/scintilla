import Renderable from "../renderables/Renderable";
import Tilemap from "../renderables/Tilemap";
import Sprite from "../renderables/Sprite";

export default function UpdateModules(modulesManager, game)
{
    let size = modulesManager._pendingModules.size;

    if (size > 0)
    {
        // add pending modules
        modulesManager._pendingModules.each(mod => {

            mod.init(modulesManager.entity, game);

            modulesManager.attached.set(mod.type, mod);

            // RENDERABLES
            if (mod instanceof Sprite) {
                game.system.render.layer.renderLayers.at(0).add(mod);
            } else if (mod instanceof Tilemap) {
                for (let i = 0; i < mod.layers.length; i++) {
                    game.system.render.layer.renderLayers.at(0).add(mod.layers[i]);
                }

               
            }
        });

        modulesManager._pendingModules.clear();
    }

    let entity = modulesManager.entity;


    var render = modulesManager.attached.render;
    if (render !== undefined || render != null)
        render.moduleUpdate();
    
}

