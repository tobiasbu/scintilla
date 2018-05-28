
import Button from "../Button";
import ButtonStatus from "../ButtonStatus";

/**
 * 
 * @param {KeyboardEvent|MouseEvent} event 
 * @param {Button} button 
 */
export default function ProcessButtonUp(event, button) {

    if (button.preventDefault === true) {
        event.preventDefault();
    }

    if (!button.enabled) {
        return;
    }

    // set key properties
    button.press = false;
    button.down = false;
    button.up = true;

    // set press time duration
    button.upTime = event.timeStamp;
    button.downDuration = button.upTime - button.downTime;
    button.upDuration = 0;
    button.downTime = 0;


    button.status = ButtonStatus.RELEASED;

}