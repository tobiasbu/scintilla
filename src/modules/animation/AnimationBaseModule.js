import Module from "../Module";
import ObjectGet from "../../utils/object/ObjectGet";

export default class AnimationBaseModule extends Module {

  constructor(moduleName, moduleManager, config) {

    super('animation', moduleName, moduleManager);

    this._resource = ObjectGet.value(config, 'resource', null);
    this._spriteModule = ObjectGet.value(config, 'spriteModule', null);

    this.isPlaying = false;
    this.isPaused = false;
    this._timer = 0;
    this._position = 0;
    this.currentFrame = 0;
    this.speed = 0;
  }



  play() {

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
    this.currentFrame = 0;
    this._timer = 0;
    return this;
  }
}

