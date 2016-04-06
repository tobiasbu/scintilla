

tobi.UpdateGame = function(game, timeout) {

  if (timeout === undefined) { timeout = false; }

this.game = game;
this.isRunning = false;
this.timeOutMode = timeout;
this._usingTimeout = false;

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

tobi.UpdateGame.prototype = {

init : function() {

  this.isRunning = true;

  var self = this;

        if (!window.requestAnimationFrame || this.timeOutMode)
        {
            this._usingTimeout = true;

            this._onLoopingCallback = function () {
                return self.updateTimeout();
            };

            this._timeOutCallback = window.setTimeout(this._onLoopingCallback, 1000 / 60);
        }
        else
        {


            this._usingTimeout = false;

            this._onLoopingCallback = function (time) {
                return self.updateRequest(time);
            };

            this._timeOutCallback = window.requestAnimationFrame(this._onLoopingCallback, this.game.canvas);
        }

},

updateRequest : function(time) {

  this.game.update(time);

  this._timeOutCallback = window.requestAnimationFrame(this._onLoopingCallback, this.game.canvas);

},

updateTimeout : function() {

  this.game.update(Date.now());

  //this._timeOutCallback = window.setTimeout(this._onLoopingCallback, this.game.time.timeToCall);

},

stop: function () {

        if (this._usingTimeout)
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
