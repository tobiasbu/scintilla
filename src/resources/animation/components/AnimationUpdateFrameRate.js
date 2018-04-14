
export default function AnimationUpdateFrameRate(frameRate, duration, keyFramesLength) {

    if (keyFramesLength === undefined) keyFramesLength = this.keyFrames.length;

    if (duration === null && frameRate === null)
    {
        this._frameRate = 60;
        this._totalDuration = (frameRate / keyFramesLength) * 1000;
    }
    else if (duration && frameRate === null)
    {
        this._totalDuration = duration;
        this._frameRate = keyFramesLength / (duration / 1000);
    }
    else
    {
        this._frameRate = frameRate;
        this._totalDuration = (keyFramesLength / frameRate) * 1000;
    }

    this._secondsPerFrame = 1000 / this._frameRate;
}