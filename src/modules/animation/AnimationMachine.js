import Module from "../Module";
import DataMap from '../../structures/Map';
import ObjectGet from '../../utils/object/ObjectGet';

export default class AnimationMachine extends Module {

  constructor(moduleManager, config) {

    super('animation', 'animMachine', moduleManager);

    //this.animations = new DataMap();
    this._resource = ObjectGet.value(config, 'machineResource', null);
    this._spriteModule = ObjectGet.value(config, 'spriteModule', null);

    this.currentState = null;
    this._currentStateName = null;

    this.isPlaying = false;
    this.isPaused = true;
    this._timer = 0;

    this.currentFrame = 0;
    this.speed = 0;

  }

  play(loop) {

    if (this.isPlaying || this._resource === null)
      return this;

    this.isPlaying = true;
    this.isPaused = false;

    return this;
  }

  pause() {
    if (this.isPaused || this._resource === null)
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

  restart() {
    this.stop();
    this.isPlaying = true;
    return this;
  }

  setState(state) {
    if (this.resource === null)
      return;

    let animation = this.resource.get(state);

    if (animation !== null && animation !== undefined) {
      this.currentState = animation;
      this._currentStateName = animation.name;
      this.restart();
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

  setState(name) {

    if (this.animations[name]) {
      this.currentAnimation = name;
      this._currentAnimObj = this.animations[name];
      this.setFrame(0, true);
    }



  }

}