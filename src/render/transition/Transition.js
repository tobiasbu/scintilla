import TransitionSettings from "./TransitionSettings";

export default class Transition {
 
    constructor(game) {
        this.game = game;

        this.settings = new TransitionSettings(this);
        this._alpha = 0;     
        this._color = '#000';

        this.t = 0;
        this.running = false;
    }

    in() {}

    out() {}

    inOut() {}


}