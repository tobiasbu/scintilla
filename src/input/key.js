

tobi.Key = function(game, keycode) {

    this.game = game;
    this._enabled = true;
    this.keyCode = keycode;    
    this.status = false;
    this._event = tobi.KeyEvent.NONE;
    this.press = false;
    this.release = false;

    this.pressTime = 0;
    this.pressDuration = -2500;
    this.releaseTime = 0;
    this.releaseDuration = -2500;

}

tobi.Key.prototype = {

    onKeyDown: function()
    {
        if (!this._enabled)
            return;

        if (this.press)
            return;

        // set key properties
        this.status = true;
        this.press = true;
        this.release = false;

        // set press time duration
        this.pressTime = this.game.time.time;
        this.pressDuration = 0;
        this.releaseDuration = this.game.time.time - this.releaseTime;
    
    },

    onKeyUp: function()
    {
        if (!this._enabled)
            return;

        if (this.release)
            return;

        // set key properties
        this.status = false;
        this.press = false;
        this.release = true;

        // set press time duration
        this.releaseTime = this.game.time.time;
        this.pressDuration = this.game.time.time - this.releaseTime;
        this.releaseDuration = 0;

    },

    update: function()
    {
        if (!this._enabled)
            return;


        

        if (this.press)
        {

            this.pressDuration = this.game.time.time - this.timeout;

        }
        else
        {
            this.releaseDuration = this.game.time.time - this.timeout;
        }

        if (this.press && this.pressDuration == 0)
        {
            this._event = tobi.KeyEvent.PRESSED;
        } 
        else if (this.release && this.releaseDuration == 0)
        {
            this._event = tobi.KeyEvent.RELEASE;
        }
        else
        {
            this._event = tobi.KeyEvent.NONE;
        }
        
    },

    isPressing: function()
    {
        return this.status;
    },

    isPressed: function()
    {
        return (this.press && this.pressDuration == 0);
    },

    isReleased: function()
    {
        return (this.release && this.releaseDuration == 0)
    },

    event: function()
    {
        return this._event;
    },

    reset: function()
    {   
        this.status = false;
        this.event = tobi.KeyEvent.NONE;
        this.press = false;
        this.release = false;
    
        this.pressTime = 0;
        this.pressDuration = -2500;
        this.releaseTime = 0;
        this.releaseDuration = -2500;
    }
};

Object.defineProperty(tobi.Key.prototype, "enabled", {

    get: function () {

        return this._enabled;

    },

    set: function (value) {

        value = !!value;

        if (value !== this._enabled)
        {
            if (!value)
                this.reset(false);

            this._enabled = value;
        }
    }

});

tobi.Key.prototype.constructor = tobi.Key;

tobi.KeyEvent = {
    NONE : 0,
    PRESSED : 1,
    RELEASE : 2,
};
  
