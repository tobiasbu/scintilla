import DataMap from '../../structures/Map';
import AnimationBaseModule from "./AnimationBaseModule";
import ModuleProvider from '../ModuleProvider';
import InitializeAnimationModule from './components/InitializeAnimationModule';

export default class AnimationMachine extends AnimationBaseModule {

  constructor(moduleManager, config) {

    super('animMachine', moduleManager, config);

    this._currentState = null;

    InitializeAnimationModule(this);    

  }

  get currentState() {
    return this._currentState;
  }

  setState(stateName) {
    if (this.resource === null)
      return;

    let animation = this.resource.get(stateName);

    if (animation !== null || animation !== undefined) {
      this._currentState = animation;
      //this._currentStateName = animation.name;
      this.restart();
    } else {
      console.warn("AnimationMachine.setState: Invalid state name \'" + stateName + "\".");
    }

    return this;
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

ModuleProvider.register('animMachine', function(moduleManager, args) {

  let asset;

  if (args[1] !== undefined) {
    // this.entity.game.system.cache.image.get(tag);
    asset = moduleManager.entity.game.system.cache.animMachine.get(args[1]);
  }



  let config = {
    resource : asset,
    spriteModule : args[0]
  };

  let animMachine = new AnimationMachine(moduleManager, config);

  return animMachine;

});