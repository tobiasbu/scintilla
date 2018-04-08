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
        this._state = TransitionState.NONE;
        this._alpha = 0;     
        this._tColor = Color.transparent;
        this._startColor = new Color();
        this._t = 0;
    }

    in() {

        let old = this._behaviour;

        if (old === TransitionBehavior.FADEIN)
            return;

        this._alpha = 0;
        this._t = 0;
        let oldAlpha = 0;//this._color.a;
        this._startColor.setColor(this.settings.inColor, 0);
        this._tColor.setColor(this._startColor, 0);
        this.settings.inColor.a = 1;
        this._behaviour = TransitionBehavior.FADEIN;
        this._state = TransitionState.IN;

    }

    out() {

        if (this._behaviour === TransitionBehavior.FADEOUT)
            return;

        this._t = 0;
        this._startColor.setColor(this.settings.outColor, 1);
        this._tColor.setColor(this._startColor, 1);
        this.settings.outColor.a = 0;
        this._behaviour = TransitionBehavior.FADEOUT;
        this._state = TransitionState.OUT;

    }

    inout() {

        this.in();
        this._behaviour = TransitionBehavior.FADEINOUT;
    }

    by(type) {

        switch(type) {
            case TransitionBehavior.NONE: return;
            case TransitionBehavior.FADEINOUT: return this.inout();
            case TransitionBehavior.FADEIN: return this.in();
        }
    }

    reset() {
        this._tColor.setColor(this._startColor, 0);
        this._t = 0;
        this._behaviour = TransitionBehavior.NONE;
        this._state = TransitionState.NONE;

    }


}

System.register('Transition', Transition, 'transition');