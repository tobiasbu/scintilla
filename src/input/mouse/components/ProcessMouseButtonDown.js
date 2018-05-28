import ProcessButtonDown from "../../button/components/ProcessButtonDown";
import Mouse from "../Mouse";
import Button from "../../button/Button";
import InputData from "../../InputData";

/*
 Left button=1, 
 Right button=2, 
 Middle (wheel) button=4, 
 4th button (typically, "Browser Back" button)=8,
 5th button (typically, "Browser Forward" button)=16.
*/

/**
 * 
 * @param {MouseEvent} event 
 * @param {Button} button 
 * @param {Mouse} mouse 
 * @param {InputData} inputData
 */
export default function ProcessMouseButtonDown(event, button, mouse, inputData) {

    if (event.buttons) {
        mouse.buttons = event.buttons;
    }

    ProcessButtonDown(event, button);

    mouse.event = event;

    mouse.clientPosition.set(inputData.clientRectTransformX(event.pageX), inputData.clientRectTransformY(event.pageY));
    mouse.x = inputData.transformX(event.clientX);
    mouse.y = inputData.transformY(event.clientY);

    mouse._isDirty = true;
    mouse.down = true;

    

}