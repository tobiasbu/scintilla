import DataMap from '../../structures/Map';
import AnimationBaseModule from "./AnimationBaseModule";
import ModuleProvider from '../ModuleProvider';
import InitializeAnimationModule from './components/InitializeAnimationModule';
import ResourceType from '../../resources/ResourceType';
import SetSpritesheetFrame from './components/SetSpritesheetFrame';
import AnimationMachineResource from '../../resources/animation/AnimationMachineResource';

export default class AnimationMachine extends AnimationBaseModule {

  constructor(moduleManager, config) {

    super('animMachine', moduleManager, config);

    this._currentState = null;

    InitializeAnimationModule(this);

  }

  set machine(animMachine) {

    let resource;

    if (typeof (animMachine) === 'string') {

      if (this._resource !== null) {
        if (this._resource.name === animMachine) {
          return;
        }
      }

      resource = this.entity.game.system.cache.animMachine.get(animMachine);
    } else if (animMachine instanceof AnimationMachineResource) {
      resource = animMachine;
    }

    if (resource !== undefined) {
      this._resource = resource;
      InitializeAnimationModule(this);

    } else {
      console.warn("AnimationControl.setAnimation: Could not set animation. The animation is undefined.");
    }
  }

  get machine() {
    return this._resource;
  }

  get currentState() {
    return this._currentState;
  }

  setState(stateName) {
    if (this.resource === null)
      return;

    let animation = this._resource.get(stateName);

    if (animation !== null && animation !== undefined) {
      this._currentState = animation;
      //this._currentStateName = animation.name;
      this.restart();



    } else {
      console.warn("AnimationMachine.setState: Invalid state name \'" + stateName + "\".");
    }

    return this;
  }

  stop() {


    super.stop();

    if (this._currentState === null)
      return;

    if (this._currentState.type === ResourceType.Spritesheet) {
      SetSpritesheetFrame(this._spriteModule, this._currentState.get(0));
    }
  }

  setFrame(index, resetTimer) {

    if (resetTimer === undefined) resetTimer = true;

    if (index >= this._currentAnimObj.length)
      index = this._currentAnimObj.length - 1
    else if (index < 0)
      index = 0;

    this.currentFrame = index;

    // set in sprite

    this._gameObject.component['render'].setFrameRect(this._currentAnimObj.getFrame(this.currentFrame));
    this._gameObject.component['render'].setImage(this._currentAnimObj.source);


    if (resetTimer)
      this._timer = 0;

  }

  setSpeed(time) {

    this.frameSpeed = time;

  }

  add(name, image) {

    return this.animations[name] = new scintilla.Animation(name, image);
  }

  addFromCache(container, name) {

    var anim = this.game.animationCache.get(container, name);

    if (anim) {

      this.animations[name] = anim;

      if (this.currentAnimation == null) {
        this.setState(name);
      }

      return anim;
    } else
      return null;


  }


  remove(name) {

    if (this.animations[name])
      delete this.animations[name];


  }

}

ModuleProvider.register('animMachine', function (moduleManager, args) {

  let asset;

  if (args[1] !== undefined) {
    // this.entity.game.system.cache.image.get(tag);
    asset = moduleManager.entity.game.system.cache.animMachine.get(args[1]);
  }



  let config = {
    resource: asset,
    spriteModule: args[0]
  };

  let animMachine = new AnimationMachine(moduleManager, config);

  return animMachine;

});