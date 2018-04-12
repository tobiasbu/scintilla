import InitializeModuleBase from "./InitializeModuleBase";
import RenderableUpdate from "../renderables/components/RenderableUpdate";
import AttachModuleInGame from "./AttachModuleInGame";
import UpdateAnimationControl from "../animation/components/UpdateAnimationControl";

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
    if (render !== undefined || render !== null) {
        RenderableUpdate(entity, render, game.system.camera, game.system.loop.updateStep);
    }
    let anim = modulesManager.attached.get('animation');
    if (anim !== undefined || anim !== null) {
        if (anim.type === 'animationControl') {
            UpdateAnimationControl.call(anim, game.system.loop.updateStep.deltaTime);
        }
    }

}

