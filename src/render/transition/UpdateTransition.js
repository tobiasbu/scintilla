import TransitionBehavior from "./TranstionBehavior";
import TransitionState from "./TransitionState";
import MathUtils from '../../math/MathUtils';
import Ease from "../../math/easing/Ease";
import Color from "../color/Color";

export default function UpdateTransition(transition, deltaTime) {

    if (transition._behaviour === TransitionBehavior.NONE)
        return;

    let setg = transition.settings;
    let changeState;

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
                Color.ease(
                    transition._startColor, setg.inColor, transition._t,
                    setg.timingInMethod, 0, setg.timingInArgument, transition._tColor);

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
                Color.ease(
                    transition._startColor, setg.outColor, transition._t,
                    setg.timingOutMethod, 1, setg.timingOutArgument, transition._tColor);
                break;
            }
    }

    if (changeState === undefined)
        return;


    /// CHANGE TRANSITION STATE

    transition._t = 0;

    switch (transition._behaviour) {
        case TransitionBehavior.FADEIN:
        case TransitionBehavior.FADEOUT: // just fade in or out
            {
               
                transition._behaviour = TransitionBehavior.NONE;
                transition._state = TransitionState.IDLE;
                if (transition._behaviour === TransitionBehavior.FADEOUT) {
                    transition._behaviour = TransitionBehavior.FADEOUT;
                }
                transition.game.system.event.dispatch('transition_end');
                break;
            }
        case TransitionBehavior.FADEINOUT: // fade in and out
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
                    transition.game.system.event.dispatch('transition_pause_end');
                } else if (transition._state === TransitionState.OUT) { // end fade out
                   
                    transition._state = TransitionState.IDLE;
                    transition._behaviour = TransitionBehavior.NONE;
                    transition.game.system.event.dispatch('transition_end');
                }
                break;
            }
    }
}