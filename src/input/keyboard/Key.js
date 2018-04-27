

import KeyEvent from './KeyEvent'

export default class Key {
    
    constructor(keycode, game) {

        this.game = game;
        this.keyCode = keycode; 

        this._enabled = true;       
        this.status = false;
        this.press = false;
        this.release = false;

        this.preventDefault = true;
        this._event = KeyEvent.NONE;

        this.pressTime = 0;
        this.pressDuration = -2500;
        this.releaseTime = 0;
        this.releaseDuration = -2500;
      

    }

    get event() {
        return this._event;
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


    /*update() {
        if (!this._enabled)
            return;

        if (this.press) {
            this.pressDuration = this.game.time.time - this.pressTime;
            
        } else {
            this.releaseDuration = this.game.time.time - this.releaseTime;
        }


        if (this.press) {
            if (this.pressDuration == 0) {
                this._event = KeyEvent.PRESSED;
            }

        } else {

            if (this.releaseDuration == 0) {
                this._event = KeyEvent.RELEASED;
            } else {
                this._event = KeyEvent.IDLE;
            }

        }

    }*/

    isPressing() {
        return this.status;
    }

    isPressed() {
        
        return (this.press && this._event === KeyEvent.PRESSED);
    }

    isReleased() {
        return (!this.press && this.releaseDuration === 0)
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


};



  
