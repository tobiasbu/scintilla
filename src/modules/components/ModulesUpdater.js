import InitializeModuleBase from "./InitializeModuleBase";
import UpdateRenderable from "../renderables/components/UpdateRenderable";
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
    if (render !== undefined || render != null) {
        UpdateRenderable(entity, render);
    }
    
}

