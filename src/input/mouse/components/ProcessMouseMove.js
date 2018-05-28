import Mouse from "../Mouse";
import InputData from "../../InputData";

/**
 * 
 * @param {MouseEvent} event 
 * @param {Mouse} mouse 
 * @param {InputData} inputData 
 */
export default function ProcessMouseMove(event, mouse, inputData) {

    mouse.event = event;

    //mouse.clientPosition.set(event.clientX, event.clientY);

    mouse.clientPosition.set(inputData.clientRectTransformX(event.pageX), inputData.clientRectTransformY(event.pageY));
    mouse.x = inputData.transformX(event.clientX);
    mouse.y = inputData.transformY(event.clientY);

    mouse.moved = true;

    mouse._isDirty = true;

}