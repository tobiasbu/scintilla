

export default class RequestAnimationFrame {
    
    constructor(timeoutMode) {

        if (timeoutMode === undefined) { timeoutMode = false; }

        this.isRunning = false;
        this._isTimeOutMode = timeoutMode;

        this.thick = 0;
        this.lastTime = 0;

        //callbacks

        // game loop
        this.loopCallback = null;

        // timeout/animation callback 
        this.timeOutIdentifier = null;

        /*let vendors = [
            'ms',
            'moz',
            'webkit',
            'o'
        ];

        for (let x = 0; x < vendors.length && !window.requestAnimationFrame; x++)
        {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame  = window[vendors[x] + 'CancelAnimationFrame'];
        }*/

        var self = this;

        this.updateRequestAnimationFrame = function(timeStamp) {

            self.lastTime = self.thick;
            self.thick = timeStamp;
            //this.game.update(time);
            self.loopCallback(timeStamp);
    
            self.timeOutIdentifier = window.requestAnimationFrame(self.updateRequestAnimationFrame);
    
        }
    
        this.updateTimeout = function() {
    
            let dateTime = Date.now();
            let delay = Math.max(16 + self.lastTime - dateTime, 0);
            self.lastTime = self.thick;
            self.thick = delay;
            self.loopCallback(delay);
            //this.game.update(Date.now());
            self.timeOutIdentifier = window.setTimeout(self.updateTimeout, delay);
    
        }
    }



    start(loopCallback) {

        if (this.isRunning)
            return;

        this.isRunning = true;

        this.loopCallback = loopCallback;

        if (!window.requestAnimationFrame || this._isTimeOutMode) {
            this._isTimeOutMode = true;
            this.timeOutIdentifier = window.setTimeout(this.updateTimeout, 0);
        } else {
            this._isTimeOutMode = false;
            this.timeOutIdentifier = window.requestAnimationFrame(this.updateRequestAnimationFrame);
        }

    }


    stop() {

        if (this._isTimeOutMode)
        {
            clearTimeout(this.timeOutIdentifier);
        }
        else
        {
            window.cancelAnimationFrame(this.timeOutIdentifier);
        }

        this.isRunning = false;

    }

    destroy() {
        this.stop();
        this.loopingCallback = null;
    }

}
