import TransitionSettings from "./TransitionSettings";
import TransitionState from "./TransitionState";
import Color from "../color/Color";
import TransitionBehavior from "./TranstionBehavior";
import System from "../../core/system/System";


export default class Transition {
 
    constructor(game) {
        this.game = game;

        this.settings = new TransitionSettings(this);
        this._behaviour = TransitionBehavior.NONE;
        this._state = TransitionState.IDLE;
        //this._alpha = 0;     
        this._color = new Color();
        this._t = 0;
    }

    in() {}

    out() {}

    inout() {}


}

System.register('Transition', Transition, 'transition');