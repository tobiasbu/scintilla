
import SetSpritesheetFrame from "./SetSpritesheetFrame";
import ResourceType from "../../../resources/ResourceType";

export default function UpdateAnimationModule(animationModule, resource, deltaTime) {

  if (resource === undefined || resource === null)
    return;


    // if not paused and we have a valid animation
    if (animationModule.isPlaying === true) {

      // add delta time
      animationModule._timer += deltaTime; // * this.frameSpeed;

      let duration;
      let currentKeyFrame = resource.get(animationModule.currentFrame);

      if (resource.uniformDuration) {
        duration = resource.duration;
      } else {
        duration = currentKeyFrame.duration;
      }

     

      animationModule._position = animationModule._timer / duration;

      

      // if current time is bigger then the frame time advance one frame
      if (animationModule._timer >= duration) {

        // reset time, but keep the remainder
        animationModule._timer = 0;
        animationModule._position = 0;

        // get next Frame index
        if (animationModule.currentFrame + 1 < resource.size) {
          animationModule.currentFrame++;
        } else {

          // animation has ended
          animationModule.currentFrame = 0; // reset to start

          if (animationModule.loop !== undefined && animationModule.loop === false) {
            animationModule.pause();
          } 
        }

        // set the current frame, not reseting the time
        if (resource.type === ResourceType.Spritesheet) {
          currentKeyFrame = resource.get(animationModule.currentFrame);
          SetSpritesheetFrame(animationModule._spriteModule, currentKeyFrame);
        }

      }

    }
}