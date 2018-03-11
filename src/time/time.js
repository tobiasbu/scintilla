

scintilla.Time = function(game) {

  this.game = game;

  // START TIME
  this.startTime = 0;

  // date now
  this.time = 0;

  this.currentTime = 0;
  this.previousTime = 0;

  this.elapsed = 0;
  this.elapsed_mili = 0;

  // FOR TIME OUT MODE
  this.timeOut_toCall = 0;
  this.timeOut_expected = 0;

  // FPS
  this.fps = 60;
  this.fpsDesired = 60;
  this.timeStep_mili = 1 / this.fpsDesired;
  this.timeStep = 1000 / this.fpsDesired;

  // lag
  this.accumalator = 0;
  this.accumulatorMax = this.timeStep * 10;
  this.accumulatorDelta = this.timeStep;

  this.updateStart = 0;
  this.updateLast = 0;
  this.updateAverage = 0;
  this.updateDelta = 0;

  this.deltaTime = 0;



  this._lastFpsUpdate = 0;
  this._framesThisSecond = 0;

}

scintilla.Time.prototype = {

start : function() {

  this.startTime = Date.now();
  this.time = Date.now();

},

refresh: function() {

  var previousDateNow = this.time;

  this.time = Date.now();

 this.elapsed_mili = this.time - previousDateNow;

 //this.currentTime =  this.previousTime = window.performance.now();
 //this.deltaTime = 0;
 //this.elapsed = 0;
 //this._framesThisSecond = 0;

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
  this.deltaTime = 0; //this.elapsed / 1000.0;



  if (this.game.updateGameMethod._isTimeOutMode)
  {


      this.timeOut_toCall = Math.floor(Math.max(0, (1000.0 / this.fpsDesired) - (this.timeOut_expected - time)));

      // time when the next call is expected if using timers
      this.timeOut_expected = time + this.timeOut_toCall;

  }

  // Track acumulate time


  //this.accumalator += this.elapsed; //Math.max(Math.min(this.timeStep * 3, this.elapsed), 0); //timestamp - this._lastTimeStamp;
  this.accumalator += Math.max(Math.min(this.timeStep * 3, this.elapsed),0);

  this.accumulatorDelta = this.timeStep; //, this.updateAverage);

  //console.log(this.accumalator + " " + this.updateAverage);
  //this._lag = Math.min(this._lag, this.accumulatorMax);

  //  this.updateDelta = this.timeStep // interpolation = this.elapsed (deltatime); // or step
  //this.accumulatorUpdateDelta = this.updateDelta; // interpolation = Math.max(this.updateDelta, this.updateAverage);

  // FPS Update
  if (this.game.debugMode)
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

scintilla.Time.prototype.constructor = scintilla.Time;
