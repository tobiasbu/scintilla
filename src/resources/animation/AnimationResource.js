import DataList from "../../structures/List";
import Resource from "../Resource";
import ResourceType from "../ResourceType";
import Validate from '../../utils/Validate';
import AnimationUpdateFrameRate from "./components/AnimationUpdateFrameRate";
import ComputeTotalDuration from "./components/ComputeTotalDuration";

// storage of animation state
export default class Animation extends Resource {


  constructor(name) {

    super(name, ResourceType.Animation);

    this.keyFrames = new DataList();
    //this._duration = 1;
    this._totalDuration = 1;
    this._frameRate = 30;
    this._secondsPerFrame = 1;
    this.loop = true;
    this.uniformDuration = true;

    AnimationUpdateFrameRate.call(this, 30, null, 1);
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

  get size() {
    return this.keyFrames.size;
  }

  get duration() {
    return this._totalDuration;
  }

  get frameRate() {
    return this._frameRate;
  }

  get secondsPerFrame() {
    return this._secondsPerFrame;
  }

  get totalDuration() {
    if (this.uniformDuration) {
      return this._totalDuration;
    } else {
      return ComputeTotalDuration(this.keyFrames);
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

    AnimationUpdateFrameRate.call(this, this._frameRate, null);

    return this;
  }

  remove(frameIndex) {
    let frame = this.keyFrames.eraseAt(frameIndex);
    AnimationUpdateFrameRate.call(this, this._frameRate, null);
    return frame;
  }

}

