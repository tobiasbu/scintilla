import ButtonStatus from "./ButtonStatus";

export default class Button {

    constructor(code, game) {

        this.game = game;
        this.code = code; 

        this._enabled = true;    
        this.status = ButtonStatus.NONE; 

        this.press = false;
        this.down = false;
        this.up = false;

        this.preventDefault = true;
      
        this.downTime = 0;
        this.downDuration = -2500;
        this.upTime = 0;
        this.upDuration = -2500;
      

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

    isPressing() {
        return this.press;
    }

    isPressed() {
        return (this.down && this.status === ButtonStatus.PRESSED);
    }

    isReleased() {
        return (!this.down && this.upDuration === 0);
    }

    reset() {   
        this.press = false;
        this._event = ButtonStatus.NONE;
        this.down = false;
        this.up = false;
    
        this.downTime = 0;
        this.downDuration = -2500;
        this.upTime = 0;
        this.upDuration = -2500;
    }


}