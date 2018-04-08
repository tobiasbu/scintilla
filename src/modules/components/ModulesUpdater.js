import InitializeModuleBase from "./InitializeModuleBase";
import RenderableUpdate from "../renderables/components/RenderableUpdate";
import AttachModuleInGame from "./AttachModuleInGame";

export default function ModulesUpdater(modulesManager, game)
{
    let size = modulesManager._pendingModulesInitialization.size;
    let entity = modulesManager.entity;

    if (size > 0)
    {
        // add pending modules
        modulesManager._pendingModulesInitialization.each(mod => {
            AttachModuleInGame(mod, modulesManager, game);
        });

        modulesManager._pendingModulesInitialization.clear();
    }

    
    let render = modulesManager.attached.get('render');
    if (render !== undefined && render != null) {
        RenderableUpdate(entity, render, game.system.camera, game.system.loop.updateStep);
    }
    
}

