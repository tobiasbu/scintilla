import SetSpritesheetFrame from "./SetSpritesheetFrame";
import ResourceType from "../../../resources/ResourceType";

export default  function InitializeAnimationModule(animationModule) {


    let resource = animationModule._resource;

    if (resource !== null) {

        if (animationModule.name === 'animMachine') {
            let state = resource.at(0);
            animationModule._currentState = state || null;
            resource = state;
        } else {
            animationModule.loop = resource.loop;
        }

        if (resource.type === ResourceType.Spritesheet) {
            SetSpritesheetFrame(animationModule._spriteModule, resource.get(0));
        }
        //this._currentStateName = state.name || null;

        animationModule.play();
      }
}