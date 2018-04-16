import Renderable from "../renderables/Renderable";

export default function DetachModules(moduleManager, game) {
    
    let manager = moduleManager;

    moduleManager.attached.each(function(key, entityModule) {
        if (entityModule instanceof Renderable) {

            game.system.render.layer.removeRenderable(entityModule);
            manager._pendingModulesInitialization.push(entityModule);
        }

        
    });



     

}