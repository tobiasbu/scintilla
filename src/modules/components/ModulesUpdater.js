import InitializeModuleBase from "./InitializeModuleBase";
import RenderableUpdate from "../renderables/components/RenderableUpdate";
import AttachModuleInGame from "./AttachModuleInGame";
import UpdateAnimationModule from "../animation/components/UpdateAnimationModule";

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

    let anim = modulesManager.attached.get('animation');
    if (anim !== undefined || anim !== null) {
        let resource;
        if (anim.name === 'animationControl') {
            resource = anim._resource;
        } else if (anim.name === 'animMachine') {
            resource = anim._currentState;
        }

        if (resource !== undefined) {
            UpdateAnimationModule(anim, resource, game.system.loop.updateStep.hiDeltaTime);
        }
    }

    
    let render = modulesManager.attached.get('render');
    if (render !== undefined || render !== null) {
        RenderableUpdate(entity, render, game.system.camera, game.system.loop.updateStep);
    }
    

}

