

import KeyEvent from './KeyEvent'

export default class Key {
    
    constructor(keycode, game) {

        this.game = game;
        this.keyCode = keycode; 

        this._enabled = true;       
        this.status = false;
        this.press = false;
        this.release = false;

        this._event = KeyEvent.NONE;

        this.pressTime = 0;
        this.pressDuration = -2500;
        this.releaseTime = 0;
        this.releaseDuration = -2500;

    }


    onKeyDown()
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
    
    }

    onKeyUp()
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

    }

    update()
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
                this._event = KeyEvent.PRESSED;
            }

        } else {

            if (this.releaseDuration == 0)
            {
                this._event = KeyEvent.RELEASED;
            } else {
                this._event = KeyEvent.IDLE;
            }

        }

        if (this._event == KeyEvent.IDLE)
        {
            this._event = KeyEvent.NONE;
        }
        
    }

    isPressing()
    {
        return this.status;
    }

    isPressed()
    {
        return (this.press && this.pressDuration == 0);
    }

    isReleased()
    {
        return (!this.press && this.releaseDuration == 0)
    }

    event()
    {
        return this._event;
    }

    reset()
    {   
        this.status = false;
        this._event = KeyEvent.NONE;
        this.press = false;
        this.release = false;
    
        this.pressTime = 0;
        this.pressDuration = -2500;
        this.releaseTime = 0;
        this.releaseDuration = -2500;
    }

    get enabled() {return this._enabled;}
    set enabled(value) {
        value = !!value;

        if (value !== this._enabled)
        {
            if (!value)
                this.reset();

            this._enabled = value;
        }
    }
};



  
