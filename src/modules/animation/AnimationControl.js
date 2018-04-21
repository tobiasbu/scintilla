import Module from "../Module";
import Animation from "../../resources/animation/AnimationResource";
import ModuleProvider from "../ModuleProvider";
import AnimationBaseModule from "./AnimationBaseModule";
import InitializeAnimationModule from "./components/InitializeAnimationModule";
import ResourceType from "../../resources/ResourceType";
import SetSpritesheetFrame from "./components/SetSpritesheetFrame";

export default class AnimationControl extends AnimationBaseModule {

  constructor(moduleManager, config) {

    super('animationControl', moduleManager, config);

    // playing stuff
    this.loop = false;

    InitializeAnimationModule(this); 
  }


  get trackPosition() {
    return this._position;
  }

  get animation() {
    return this._resource;
  }

  set animation(animation) {
    
    let animResource;
    
    if (typeof(animation) === 'string') {
      if (this._resource.name === animation) {
        return;
      }
      animResource = this.entity.game.system.cache.animation.get(animation);
    } else if (animation instanceof AnimationResource) {
      animResource = animation;
    } 

    if (animResource !== undefined) {
      this._resource = animResource;
      //this.loop = animation.loop;
    } else {
      console.warn("AnimationControl.setAnimation: Could not set animation. The animation is undefined.");
    }
  }

  getKeyFrame(frameIndex) {
    if (this._resource === null)
      return null;

    return this._resource.get(frameIndex);
  } 

  stop() {

    super.stop();

    if (this._resource === null)
      return;

    if (this._resource.type === ResourceType.Spritesheet) {
      SetSpritesheetFrame(this._spriteModule, this._resource.get(0));
    }
  }

}

ModuleProvider.register('spritesheet',function(moduleManager, args) {

  let asset = args[1];

  if (args[1] !== undefined) {
    // this.entity.game.system.cache.image.get(tag);
    asset = moduleManager.entity.game.system.cache.animation.get(asset);
  }

  let config = {
    resource : asset,
    spriteModule : args[0]
  };

  let spritesheetModule = new AnimationControl(moduleManager,config);

  return spritesheetModule;

});