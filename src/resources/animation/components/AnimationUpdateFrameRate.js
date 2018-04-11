
export default function AnimationUpdateFrameRate(frameRate, duration) {

 
    if (duration === null && frameRate === null)
    {
        this._frameRate = 60;
        this._duration = (frameRate / this.keyFrames.length) * 1000;
    }
    else if (duration && frameRate === null)
    {
        this._duration = duration;
        this._frameRate = this.keyFrames.length / (duration / 1000);
    }
    else
    {
        this._frameRate = frameRate;
        this._duration = (this.keyFrames.length / frameRate) * 1000;
    }

    this._secondsPerFrame = 1000 / this._frameRate;
}