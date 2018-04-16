import InitializeModuleBase from "./InitializeModuleBase";
import RenderableUpdate from "../renderables/components/RenderableUpdate";
import UpdateAnimationModule from "../animation/components/UpdateAnimationModule";

export default function ModulesUpdater(modulesManager, game)
{
   
    let entity = modulesManager.entity;


    let animationModule = modulesManager.attached.get('animation');
    if (animationModule !== undefined && animationModule !== null) {
        let resource;
        if (animationModule.name === 'animationControl') {
            resource = animationModule._resource;
        } else if (animationModule.name === 'animMachine') {
            resource = animationModule._currentState;
        }

        if (resource !== undefined) {
            UpdateAnimationModule(animationModule, resource, game.system.loop.updateStep.hiDeltaTime);
        }
    }

    
    let render = modulesManager.attached.get('render');
    if (render !== undefined || render !== null) {
        RenderableUpdate(entity, render, game.system.camera, game.system.loop.updateStep);
    }
    

}

