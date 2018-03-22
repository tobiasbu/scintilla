

export default class GameLoop {

    constructor(game) {
        this.game = game;
        this.system = game.system;
        this.requestAnimationFrame = null;

        // time
        this._spiraling = 0;
        this._lastFrameCount = 0;
    }

    update(time) {

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
                //this.render.render(this.time.accumalator/this.time.accumulatorDelta);
    
          }
    
    
    
        }
    }

    logic() {

         // Core Managers

         this.system.input.update();
        //this.sound.update();

        // Scene Update
        this.physics.update();
        this.scene.preUpdate();
        this.scene.update(timeStep);

    }

    render() {

    }

}