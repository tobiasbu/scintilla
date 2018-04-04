import TranstionStyle from "./TransitionStyle";
import TransitionState from "./TransitionState";


export default function DrawTransition(transition, context) {

    if (transition._state !== TransitionState.IDLE)
        return;

    let settings = transition.settings;

    switch(settings.style) {
        case TranstionStyle.NONE: return;
        case TranstionStyle.FILL: {

            context.fillStyle = transition._color.rgba;  
            context.fillRect(0, 0, context.width, context.height);

            break;
        }
    }

}