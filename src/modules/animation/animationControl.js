
export default class AnimationControl {

constructor(game) {

this.game = game;
this.animations = {};

this.currentAnimation = null;

this.loop = false;
this.isPlaying = false;
this.isPaused = true;

this.currentFrame = 0;
this._gameObject = null;
this._currentAnimObj = null;

this.frameSpeed = 1; // frame rate 1 / 60

}

  add(name, image) {



    return this.animations[name] = new scintilla.Animation(name,image);

  }

  addFromCache(container,name) {

    var anim = this.game.animationCache.get(container,name);

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
      this.setFrame(0,true);
    }



  }

  setFrame(index,resetTimer) {

      if (resetTimer === undefined) resetTimer = true;

      if (index >= this._currentAnimObj.length)
        index = this._currentAnimObj.length-1
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

  play(loop) {

    this.loop = loop;
    this.isPlaying = true;
    this.isPaused = false;


  }

  pause() {

    this.isPaused = true;

  }

  stop() {

    this.isPaused = true;
	  this.currentFrame = 0;
	  this.setFrame(this.currentFrame);

  }

  update(time) {

    // if not paused and we have a valid animation
	if (!this.isPaused && this._currentAnimObj != null)	{


		// add delta time
		this._timer += time*this.frameSpeed;

		// if current time is bigger then the frame time advance one frame
		if (this._timer >= this.game.clock.timeStep_mili) {

			// reset time, but keep the remainder
			this._timer =  0;

			// get next Frame index
			if (this.currentFrame + 1 < this._currentAnimObj.length)
				this.currentFrame++;
			else
			{

        // animation has ended
        this.currentFrame = 0; // reset to start

        if (!this.loop)
        {
          this.isPaused = true;
        }

        if (this._gameObject["onAnimationEnd"]) {


          this._gameObject.onAnimationEnd();

        }

			}

			// set the current frame, not reseting the time
			   this.setFrame(this.currentFrame, false);
		}

  }



}
}
