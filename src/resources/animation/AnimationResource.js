import DataList from "../../structures/List";
import Resource from "./Resource";
import ResourceType from "./ResourceType";
import Validate from '../../utils/Validate';
import AnimationUpdateFrameRate from "./components/AnimationUpdateFrameRate";

// storage of animation state
export default class Animation extends Resource {


  constructor(name) {

    super(name, ResourceType.Animation);

    this.keyFrames = new DataList();
    this._duration = 1;
    this._frameRate = 60;
    this._secondsPerFrame = 1;
    this.loop = false;
    this.uniformDuration = true;
  }


 
  set duration(value) {
    if (Validate.isNumber(value)) {
      AnimationUpdateFrameRate.call(this, null, value);
    }
  }

  set frameRate(value) {
    if (Validate.isNumber(value)) {
      AnimationUpdateFrameRate.call(this, value, null);
    }
  }

  get length() {
    return this.keyFrames.size;
  }

  get duration() {
    return this._duration;
  }

  get frameRate() {
    return this._frameRate;
  }

  get secondsPerFrame() {
    return this._secondsPerFrame;
  }

  get totalDuration() {
    let size = this.keyFrames.size;

    if (size === 0)
      return 0;
    else {

      let dur = 0;

      for (let i = 0; i < size; i++) {
        dur += this.keyFrames.at(i).duration || 0;
      }

      return dur;
    }
  }

  get(frameIndex) {
    return this.keyFrames.at(frameIndex);
  }

  duplicate(frameIndex, atIndex) {
  
    let frame = this.keyFrames.at(frameIndex);

    if (frame !== null) {

      if (atIndex === undefined)
        this.keyFrames.push(frame);
      else
        this.keyFrames.splice(atIndex, 0, frame);

    }
  }

  remove(frameIndex) {
    let frame = this.keyFrames.eraseAt(frameIndex);
    return frame;
  }

}

