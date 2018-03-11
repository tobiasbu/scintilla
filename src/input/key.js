

Scintilla.Key = function(keycode, game) {

    this.game = game;
    this.keyCode = keycode; 

    this._enabled = true;       
    this.status = false;
    this.press = false;
    this.release = false;

    this._event = Scintilla.KeyEvent.NONE;

    this.pressTime = 0;
    this.pressDuration = -2500;
    this.releaseTime = 0;
    this.releaseDuration = -2500;

}

Scintilla.Key.prototype = {

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
        this.pressDuration = this.game.time.time - this.pressTime;
        this.releaseDuration = 0;

    },

    update : function()
    {
        if (!this._enabled)
            return;

  

        if (this.press)
        {
            this.pressDuration = this.game.time.time - this.pressTime;
            
        }
        else
        {
            this.releaseDuration = this.game.time.time - this.releaseTime;
        }


        if (this.press)
        {
            if (this.pressDuration == 0)
            {
                this._event = Scintilla.KeyEvent.PRESSED;
            }

        } else {

            if (this.releaseDuration == 0)
            {
                this._event = Scintilla.KeyEvent.RELEASED;
            } else {
                this._event = Scintilla.KeyEvent.IDLE;
            }

        }

        if (this._event == Scintilla.KeyEvent.IDLE)
        {
            this._event = Scintilla.KeyEvent.NONE;
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
        return (!this.press && this.releaseDuration == 0)
    },

    event: function()
    {
        return this._event;
    },

    reset: function()
    {   
        this.status = false;
        this._event = Scintilla.KeyEvent.NONE;
        this.press = false;
        this.release = false;
    
        this.pressTime = 0;
        this.pressDuration = -2500;
        this.releaseTime = 0;
        this.releaseDuration = -2500;
    }
};

Object.defineProperty(Scintilla.Key.prototype, "enabled", {

    get: function () {
        return this._enabled;
    },

    set: function (value) {

        value = !!value;

        if (value !== this._enabled)
        {
            if (!value)
                this.reset();

            this._enabled = value;
        }
    }

});

Scintilla.Key.prototype.constructor = Scintilla.Key;

Scintilla.KeyEvent = {
    NONE : -1,
    IDLE: 0,
    PRESSED : 1,
    RELEASED : 2,
};
  
