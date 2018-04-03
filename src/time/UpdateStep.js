import RequestAnimationFrame from "../dom/RequestAnimationFrame";
import ObjectGet from "../utils/object/ObjectGet";
import MathUtils from '../math/MathUtils'

export default class UpdateStep {

    constructor(game, config) {
        // CORE
        this.game = game;
        this.requestAnimationFrame = new RequestAnimationFrame(config.time.timeoutMode);
        this.isRunning = false;
        this.loop = null;
        this.render = null;

        // TIMER
        this.startTime = 0; // start time
        this.time = 0; // current hi-time
        this.previousTime = 0; // last hi-time
        this.elapsed = 0; // elapsed time
        this.hiDeltaTime = 0; // raw delta time
        this.deltaTime = 0; // delta time in miliseconds
        // FPS
        this.requireFpsUpdate = true;
        this.fpsDesired = ObjectGet.value(config, 'fps', 60);
        this.fps = this.fpsDesired;
        this.currentFps = 0;
        this._nextFpsUpdate = 0;
        this._framesThisSecond = 0;

        // ACCUMALATOR METHOD
        this.interpolation = false;
        this.timeStep = Math.ceil(1000 / this.fpsDesired);
        this.minTimeStep = this.timeStep * 1.25;
        this.accumalator = 0;
        this.accumulatorMax = this.timeStep * 10;
        this.updateLast = 0;
        this.updateAverageDelta = 0;
        this.frameCounter = 0;
    }

    init(gameLoop) {
        
        if (this.isRunning)
            return;

        this.reset();

        this.loop = gameLoop.loop.bind(gameLoop);
        this.render = gameLoop.render.bind(gameLoop);

        this.startTime = window.performance.now();

        this.requestAnimationFrame.start(this.update.bind(this));

        this.isRunning = true;

    }

    update(timeStamp) {

        this.hiDeltaTime = timeStamp - this.previousTime;

        // current
        this.time = timeStamp;

        // game elapsed time
        this.elapsed += this.hiDeltaTime;

        // FPS Update
        if (this.requireFpsUpdate)
            this.fpsUpdate(timeStamp);

         // set previous time
         this.previousTime = timeStamp;

         // game loop
        this.accumalatorMethod(this.hiDeltaTime);

        // game render
        this.render(this.hiDeltaTime);

    }

    fpsUpdate(timeStamp) {

        

        if (timeStamp > this._nextFpsUpdate) {
            this.currentFps = 0.25 * this._framesThisSecond + 0.75 * this.fps;
            this.fps = MathUtils.clamp(~~this.currentFps, 0, this.fpsDesired);
     
            this._nextFpsUpdate = timeStamp + 1000;
            this._framesThisSecond = 0;
        }
     
        this._framesThisSecond++;
    }



    accumalatorMethod(deltaTime) {

        if ((++this.frameCounter % this.frameRate) === 0) {

            this.frameCounter = 0;

            this.accumalator += deltaTime;//Math.max(Math.min(this.timeStep * 3, this.elapsed),0);
            this.accumulator = Math.min(this.accumalator, this.accumalatorMax); //, this.updateAverage);

            let deltaUpdate = (this.interpolation) ? deltaTime : this.timeStep;
            let accumulatorUpdateDelta = (this.interpolation) ? deltaUpdate : Math.max(deltaUpdate, this.updateAverageDelta);
            this.deltaTime = deltaUpdate / 1000;

            while (this.accumalator >= accumulatorUpdateDelta || this.interpolation) {

                let updateStart = window.performance.now();

                // UPDATE GAME
                this.loop(deltaUpdate / 1000.0);

                let updateLast = window.performance.now();
                this.updateAverageDelta = updateLast - updateStart;

                this.accumalator -= accumulatorUpdateDelta;
                if (this.interpolation) {
                    this.accumalator = 0;
                    break;
                }

            }
        }


    }


    accumalatorReset() {
        this.frameCounter = 0;
        this.frameRate = ~~(0.5 + 60 / this.fpsDesired);
        this.accumalator = 0;
        this.timeStep = 1000 / this.fpsDesired;
        this.accumulatorMax = this.stepSize * 10;
    }
    
    reset() {
        let now = window.performance.now();

        this.deltaTime = 0;
        this.hiDeltaTime = 0;
        this.time = now;
        this.previousTimeTime = now;
        this._nextFpsUpdate = now + 1000;
        this._framesThisSecond = 0;

        this.accumalatorReset();
    }


}


/*
if (this.game.systemInited) {

    this.time.update(time);

    if (this._spiraling > 1) {

        this.time.deltaTime = 0;
        this._spiraling = 0;
        this.time.accumalator = 0;

        this.render(this.time.accumulatorDelta);

    } else {

    var countFrames = 0;

    while (this.time.accumalator >= this.time.accumulatorDelta) {

      //  this.time.updateStart = window.performance.now();

        this.time.deltaTime = Math.min(this.time.accumalator,this.time.accumulatorDelta) / 1000;

        this.logic(this.time.deltaTime);

        //this.time.updateLast =  window.performance.now();
      //  this.time.updateAverage = this.time.updateLast - this.time.updateStart;

        this.time.accumalator -= this.time.accumulatorDelta;

        countFrames++;

        this.time.refresh();

        if (countFrames >= 240) { // SPIRAL
            //panic();
            this.time.accumalator = 0;

            break;
        }
    }

      if (countFrames > this._lastFrameCount)
         this._spiraling++;
     else if (countFrames < this._lastFrameCount)
        this._spiraling = 0;

        this._lastFrameCount = countFrames;

        this.render(this.time.accumalator/this.time.accumulatorDelta);

    }



}*/