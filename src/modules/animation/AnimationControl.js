import Module from "../Module";
import Animation from "../../resources/animation/AnimationResource";
import ModuleProvider from "../ModuleProvider";
import AnimationBaseModule from "./AnimationBaseModule";
import InitializeAnimationModule from "./components/InitializeAnimationModule";

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
    return this._animation;
  }

  set animation(animation) {
    
    let animResource;
    
    if (typeof(animation) === 'string') {
      animResource = this.entity.game.cache.animation.get(animation);
    } else if (animation instanceof AnimationResource) {
      animResource = animation;
    } 

    if (animResource !== undefined) {
      this._resource = animResource;
      this.loop = animation.loop;
    } else {
      console.warn("AnimationControl.setAnimation: Could not set animation. The animation is undefined.");
    }
  }

}

ModuleProvider.register('spritesheet',function(moduleManager, args) {

  let asset = args[1];

  if (asset !== undefined) {
    // this.entity.game.system.cache.image.get(tag);
    asset = moduleManager.entity.game.system.cache.animation.get(tag);
  }

  let config = {
    resource : asset,
    spriteModule : args[0]
  };

  let spritesheetModule = new AnimationControl(moduleManager,config);

  return spritesheetModule;

});