
import ProcessButtonUp from "../../button/components/ProcessButtonUp";
import Button from "../../button/Button";
import InputData from "../../InputData";

import Mouse from "../Mouse";

/**
 * 
 * @param {MouseEvent} event 
 * @param {Button} button 
 * @param {Mouse} mouse 
 * @param {InputData} inputData 
 */
export default function ProcessMouseButtonUp(event, button, mouse, inputData) {

    if (event.buttons) {
        mouse.buttons = event.buttons;
    }

    ProcessButtonUp(event, button);

    mouse.clientPosition.set(inputData.clientRectTransformX(event.pageX), inputData.clientRectTransformY(event.pageY));
    mouse.x = inputData.transformX(event.clientX);
    mouse.y = inputData.transformY(event.clientY);

    mouse.event = event;

    mouse._isDirty = true;
    mouse.down = false;

}