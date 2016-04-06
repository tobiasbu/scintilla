

tobi.Clock = function(game) {

  this.game = game;

  this.startTime = 0;

  this.time = 0;

  this.currentTime = 0;
  this.previousTime = 0;

  this.elapsed = 0;
  this.elapsed_mili = 0;

  this.fps = 60;
  this.fpsDesired = 60;
  this.timeStep_mili = 1.0 / this.fpsDesired;
  this.timeStep = 1000.0 / this.fpsDesired;

  this.accumulatorMax = this.timeStep * 10;
  this.accumulatorUpdateDelta = 0;


  this.updateStart = 0;
  this.updateLast = 0;
  this.updateAverage = 0;

  this.deltaTime = 0;


  this._lag = 0;
  this._lastFpsUpdate = 0;
  this._framesThisSecond = 0;

}

tobi.Clock.prototype = {

init : function() {

  this.startTime = Date.now();
  this.time = Date.now();

},

refresh : function() {

  var previousDateNow = this.time;

  this.time = Date.now();

 this.elapsed_mili = this.time - previousDateNow;

},

update : function(timestamp) {

  // DATE NOW ----------------------------------
  var previousDateNow = this.time;

  this.time = Date.now(); // current time

  this.elapsed_mili = this.time - previousDateNow;

  // timestamp --------------------

  // Throttle the frame rate.
  if (timestamp < this.previousTime + (this.timeStep)) {
         //requestAnimationFrame(mainLoop);
         return false;
  }

  // set prev
  this.previousTime = this.currentTime;

  // set current
  this.currentTime = timestamp;

  // delta time (MILISECONDS)
  this.elapsed = this.currentTime - this.previousTime;

  // delta time in  seconds
  this.deltaTime = this.elapsed / 1000.0;

  // Track acumulate time
  this._lag += this.elapsed; //Math.max(Math.min(this.timeStep * 3, this.elapsed), 0); //timestamp - this._lastTimeStamp;
  this._lag = Math.min(this._lag, this.accumulatorMax);
  this.accumulatorUpdateDelta = Math.max(this.elapsed, this.updateAverage);

  // FPS Update
  this.fpsUpdate(timestamp);

  return true;

  //this.last_time = now;

  /*var elapsed = (this.current_time - this.last_time)/1000.0;
  this.last_time = this.current_time;
  this.delta_time = Math.min(elapsed, 1/60.0);*/

  //console.log(this.delta_time);

  //  Adjust accordingly.
  /*this.time_elapsed_mili = this.current_time - previousDateNow;

  // 'now' is currently still holding the time of the last call, move it into prevTime
  this.prev_time  = this.now_time;

  // update 'now' to hold the current time
  // this.now may hold the RAF high resolution time value if RAF is available (otherwise it also holds Date.now)
  this.now_time = time;

 // elapsed time between previous call and now - this could be a high resolution value
  this.time_elapsed = this.now_time - this.prev_time;*/



  //if (this.game.updateGameMethod._usingTimeout)
  //{
      // console.log('Time isSet', this._desiredFps, 'te', this.timeExpected, 'time', time);

      // time to call this function again in ms in case we're using timers instead of RequestAnimationFrame to update the game
      //this.timeToCall = Math.floor(Math.max(0, (1000.0 / this._desiredFps) - (this.timeExpected - time)));

      // time when the next call is expected if using timers
    //  this.timeExpected = time + this.timeToCall;

      // console.log('Time expect', this.timeExpected);
//  }

        //  Paused but still running?
      /*  if (!this.game.paused)
        {
            //  Our internal Phaser.Timer
            this.events.update(this.time);

            if (this._timers.length)
            {
                this.updateTimers();
            }
        }*/

},

fpsUpdate : function(timestamp) {

  // METHOD 2

        // count the number of time.update calls
  /*this._frameCount++;
  this._elapsedAccumulator += this.elapsed;

  // occasionally recalculate the suggestedFps based on the accumulated elapsed time
  if (this._frameCount >= this._desiredFps * 2)
  {
      // this formula calculates suggestedFps in multiples of 5 fps
      this.suggestedFps = Math.floor(200 / (this._elapsedAccumulator / this._frameCount)) * 5;
      this._frameCount = 0;
      this._elapsedAccumulator = 0;
  }

  this.msMin = Math.min(this.msMin, this.elapsed);
  this.msMax = Math.max(this.msMax, this.elapsed);

  this.frames++;

  if (this.now > this._timeLastSecond + 1000)
  {
      this.fps = Math.round((this.frames * 1000) / (this.now - this._timeLastSecond));
      this.fpsMin = Math.min(this.fpsMin, this.fps);
      this.fpsMax = Math.max(this.fpsMax, this.fps);
      this._timeLastSecond = this.now;
      this.frames = 0;
  }*/

  // METHOD 1
   if (timestamp > this._lastFpsUpdate + 1000) {
       this.fps = 0.25 * this._framesThisSecond + 0.75 * this.fps;

       this._lastFpsUpdate = timestamp;
       this._framesThisSecond = 0;
   }

     this._framesThisSecond++;


}

}

tobi.Clock.prototype.constructor = tobi.Clock;
