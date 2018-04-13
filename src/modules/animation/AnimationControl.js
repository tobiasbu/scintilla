import Module from "../Module";
import Animation from "../../resources/animation/AnimationResource";
import ModuleProvider from "../ModuleProvider";

export default class AnimationControl extends Module {

  constructor(moduleManger, spriteModule, animation) {

    super('animation','animationControl', moduleManager);

    this._animation = animation || null;

    // playing stuff
    this.loop = false;

    if (animation !== null) {
      this.loop = animation.loop;
    }

    this.isPlaying = false;
    this.isPaused = false;
    this._timer = 0;
    this._spriteModule = spriteModule || null;

    this.currentFrame = 0;
    //this.overrideAnimationConfig = false;
    this.speed = 0;
  }

  get animation() {
    return this._animation;
  }

  setAnimation(animation) {
    
    let animResource;
    
    if (typeof(animation) === 'string') {
      animResource = this.entity.game.cache.animation.get(animation);
    } else if (animation instanceof AnimationResource) {
      animResource = animation;
    } 

    if (animResource !== undefined) {
      this._animation = animResource;
      this.loop = animation.loop;
    } else {
      console.warn("AnimationControl.setAnimation: Could not set animation. The animation is undefined.");
    }

    return this;
  }

  play(loop) {

    if (this.isPlaying || this._animation === null)
      return this;

    this.loop = loop;
    this.isPlaying = true;
    this.isPaused = false;

    return this;
  }

  pause() {
    if (this.isPaused || this._animation === null)
      return this;

    this.isPaused = true;
    this.isPlaying = false;

    return this;
  }

  stop() {
    this.isPaused = false;
    this.isPlaying = false;
    this.currentFrame = 0;
    this._timer = 0;
    return this;
  }
}

ModuleProvider.register('spritesheet',function(moduleManager, args) {

  let asset = args[1];

  if (asset !== undefined) {
    // this.entity.game.system.cache.image.get(tag);
    asset = moduleManager.entity.game.system.cache.animation.get(tag);
  }

  let spritesheetModule = new AnimationControl(moduleManager,args[0], asset);

  return spritesheetModule;

});