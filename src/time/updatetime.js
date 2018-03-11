

export default class UpdateTime {
    
    constructor(game, timeout) {

        if (timeout === undefined) { timeout = false; }

        this.game = game;
        this.isRunning = false;
        this.setTimeOutMode = timeout;
        this._isTimeOutMode = false;

        var vendors = [
            'ms',
            'moz',
            'webkit',
            'o'
        ];

        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; x++)
        {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame  = window[vendors[x] + 'CancelAnimationFrame'];
        }

        //callbacks
        this._onLoopingCallback = null;
        this._timeOutCallback = null;
    }

    start() {

        this.isRunning = true;

        var self = this;

        if (!window.requestAnimationFrame || this.setTimeOutMode)
        {
            this._isTimeOutMode = true;

            this._onLoopingCallback = function () {
                return self.updateTimeout();
            };

            this._timeOutCallback = window.setTimeout(this._onLoopingCallback, 0);


        }
        else
        {

            this._isTimeOutMode = false;

            this._onLoopingCallback = function (time) {
                return self.updateRequestAnimationFrame(time);
            };

            this._timeOutCallback = window.requestAnimationFrame(this._onLoopingCallback, this.game.canvas);

        }

    }

    updateRequestAnimationFrame(time) {

        this.game.update(time);
        this._timeOutCallback = window.requestAnimationFrame(this._onLoopingCallback, this.game.canvas);

    }

    updateTimeout() {

        this.game.update(Date.now());
        this._timeOutCallback = window.setTimeout(this._onLoopingCallback, this.game.time.timeOut_toCall);

    }

    stop() {

        if (this._isTimeOutMode)
        {
            clearTimeout(this._timeOutCallback);
        }
        else
        {
            window.cancelAnimationFrame(this._timeOutCallback);
        }

        this.isRunning = false;

    }

}
