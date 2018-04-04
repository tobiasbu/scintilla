import TranstionStyle from "./TransitionStyle";
import TransitionState from "./TransitionState";


export default function DrawTransition(transition, canvas, context) {

    if (transition._state === TransitionState.IDLE)
        return;

    let settings = transition.settings;

    switch(settings.style) {
        case TranstionStyle.NONE: return;
        case TranstionStyle.FILL: {

            //let color = transition._color.rgba;
            context.fillStyle = transition._color.rgba;  
            context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

            break;
        }
    }

}