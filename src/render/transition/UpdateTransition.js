import TransitionBehavior from "./TranstionBehavior";
import TransitionState from "./TransitionState";
import MathUtils from '../../math/MathUtils'
import Ease from "../../math/easing/Ease";
import Color from "../color/Color";

export default function UpdateTransition(transition, deltaTime) {

    if (transition._behaviour === TransitionBehavior.NONE)
        return;

    let setg = transition.settings;
    let changeState = undefined;

    // UPDATE STATE
    switch (transition._state) {

        case TransitionState.IN:
            {
                transition._t += (deltaTime / setg.inDuration);

                if (transition._t >= 1) {
                    transition._t = 1;
                    changeState = true;
                }

                // ease(to, t, easingType, easingMode, easingArg)
                transition._tColor = Color.ease(
                    transition._startColor, setg.inColor, transition._t,
                    setg.timingInMethod, 0, setg.timingInArgument);

                

                break;
            }

        case TransitionState.WAIT:
            {
                transition._t += deltaTime / setg.pauseDuration;

                if (transition._t >= 1) {
                    transition._t = 1;
                    changeState = true;
                }
                break;
            }

        case TransitionState.OUT:
            {
                transition._t += deltaTime / setg.outDuration;

                if (transition._t >= 1) {
                    transition._t = 1;
                    changeState = true;
                }

                transition._color.alpha = Ease.out.by(setg.timingOutMethod, setg.outColor.a, 0, transition._t, setg.timingOutArgument);
                break;
            }
    }

    if (changeState === undefined)
        return;


    /// CHANGE TRANSITION STATE

    transition._t = 0;

    switch (transition._behaviour) {
        case TransitionBehavior.IN:
        case TransitionBehavior.OUT: // just fade in or out
            {
                transition._behaviour = TransitionBehavior.NONE;
                transition._state = TransitionState.IDLE;
                break;
            }
        case TransitionBehavior.INOUT: // fade in and out
            {
                if (transition._state === TransitionState.IN) { // end fade in
                    transition._color.setColor(setg.outColor);
                    if (setg.pauseDuration > 0) {
                        transition._state = TransitionState.WAIT;
                    } else {
                        transition._state = TransitionState.OUT;
                    }
                } else if (transition._state === TransitionState.WAIT) { // end pause beteween
                    transition._state = TransitionState.OUT;
                } else if (transition._state === TransitionState.OUT) { // end fade out
                    transition._state = TransitionState.IDLE;
                    transition._behaviour = TransitionBehavior.NONE;
                }
                break;
            }
    }
}