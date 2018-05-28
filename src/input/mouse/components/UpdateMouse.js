
import InputData from "../../InputData";
import WatchButtons from "../../components/WatchButtons";
import ButtonStatus from "../../button/ButtonStatus";

import Mouse from "../Mouse";

import ProcessMouseMove from "./ProcessMouseMove";
import ProcessMouseButtonDown from "./ProcessMouseButtonDown";
import ProcessMouseButtonUp from "./ProcessMouseButtonUp";


/**
 * 
 * @param {Mouse} mouse 
 * @param {InputData} inputData 
 * @param {number} timeStamp 
 */
export default function UpdateMouse(mouse, inputData, timeStamp) {

    if (!mouse)
        return;

    if (!mouse._enabled)
        return;

    WatchButtons(mouse._buttonWatcher, mouse._buttonGarbage);

    mouse._isDirty = false;

    let eventSize = mouse._eventQueue.size;

    if (eventSize === 0)
        return;

    // clear and copy queue
    let queue = mouse._eventQueue.splice(0, eventSize);

    for (let i = 0; i < eventSize; i++) {
        let event = queue[i];
        let button;
        let buttonCode = event.button;

        if (buttonCode !== undefined)
            button = mouse._buttonsList.get(buttonCode);

        switch (event.type) {
            case 'mousemove':
                {
                    ProcessMouseMove(event, mouse, inputData);
                    break;
                }
            case 'mousedown':
                {

                    if (button.press === false) {
                        if (button.status === ButtonStatus.NONE) {
                            mouse._buttonWatcher.insert(buttonCode, button);
                        }

                        ProcessMouseButtonDown(event, button, mouse, inputData);
                    }

                    break;
                }
            case 'mouseup':
                {

                    ProcessMouseButtonUp(event, button, mouse, inputData);

                    break;
                }
        }

    }

}