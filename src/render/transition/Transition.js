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

        if (old === TransitionState.IN)
            return;

        this._alpha = 0;
        this._t = 0;
        let oldAlpha = 0;//this._color.a;
        this._startColor.setColor(this.settings.inColor, 0);
        this._tColor.setColor(this._startColor, 0);
        this.settings.inColor.a = 1;
        this._behaviour = TransitionBehavior.IN;
        this._state = TransitionState.IN;

    }

    out() {}

    inout() {}


}

System.register('Transition', Transition, 'transition');