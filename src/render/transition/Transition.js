import TransitionSettings from "./TransitionSettings";

export default class Transition {
 
    constructor(game) {
        this.game = game;

        this.settings = new TransitionSettings(this);
        this._behaviour = 0;
        this._state = -1;
        this._alpha = 0;     
        this._color = '#000';
        this._t = 0;
        this.running = false;
    }

    in() {}

    out() {}

    inout() {}


}