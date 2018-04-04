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
        this._alpha = 0;     
        this._color = new Color();
        this._toColor = undefined;
        this._t = 0;
    }

    in() {

        let old = this._behaviour;

        if (old === TransitionState.IDLE || old === TransitionState.WAIT)
        {

        }

        this._alpha = 0;
        this._t = 0;
        this._color.alpha = 0;
        this.settings.inColor.a = 1;
        //this._toColor = this.settings.inColor;
        this._behaviour = TransitionBehavior.IN;
        this._state = TransitionState.IN;

    }

    out() {}

    inout() {}


}

System.register('Transition', Transition, 'transition');