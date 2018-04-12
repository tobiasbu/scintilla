import ResourceType from "../../../resources/ResourceType";
import SetSpritesheetFrame from "./SetSpritesheetFrame";

export default function UpdateAnimationControl(deltaTime) {

  if (this._animation === undefined && this._animation === null)
    return;

    // if not paused and we have a valid animation
    if (!this.isPaused && this.isPlaying) {

      // add delta time
      this._timer += deltaTime; // * this.frameSpeed;

      let duration;
      let currentKeyFrame = this._animation.get(this.currentFrame);

      if (this._animation.uniformDuration) {
        duration = this._animation.duration;
      } else {
        duration = currentKeyFrame.duration;
      }

      //let currentKeyFrame = 

      // if current time is bigger then the frame time advance one frame
      if (this._timer >= duration) {

        // reset time, but keep the remainder
        this._timer = 0;

        // get next Frame index
        if (this.currentFrame + 1 < this._animation.size) {
          this.currentFrame++;
        } else {

          // animation has ended
          this.currentFrame = 0; // reset to start

          if (!this.loop) {
            this.stop();
          } 
        }

        // set the current frame, not reseting the time
        if (this._animation.type === ResourceType.Spritesheet) {
          currentKeyFrame = this._animation.get(this.currentFrame);
          SetSpritesheetFrame(this, currentKeyFrame);
        }

      }

    }
}