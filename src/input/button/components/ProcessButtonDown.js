import ButtonStatus from "../ButtonStatus";
import Button from "../Button";

/**
 * 
 * @param {KeyboardEvent|MouseEvent} event 
 * @param {Button} button 
 */
export default function ProcessButtonDown(event, button) {

    if (button.preventDefault === true) {
        event.preventDefault();
    }

    if (!button.enabled) {
        return;
    }

    if (button.down === true) {
        return;
    }

    // set key properties
    button.press = true;
    button.down = true;
    button.up = false;

    // set press time duration
    button.downTime = event.timeStamp; 
    button.downDuration = 0;
    button.upDuration = button.downTime - button.upTime;

    button.status = ButtonStatus.PRESSED;


}