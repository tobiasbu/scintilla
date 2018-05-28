import ProcessButtonDown from "../../button/components/ProcessButtonDown";
import ProcessButtonUp from "../../button/components/ProcessButtonUp";
import WatchButtons from "../../components/WatchButtons";

import ButtonStatus from "../../button/ButtonStatus";

import Keyboard from "../Keyboard";




/**
 * Updates Keyboard logic
 * 
 * @param {Keyboard} keyboard Keyboard Manager
 */
export default function UpdateKeyboard(keyboard) {

    if (!keyboard)
        return;

    if (!keyboard.enabled)
        return;

    WatchButtons(keyboard._buttonWatcher, keyboard._buttonGarbage);

    let eventSize = keyboard._eventQueue.size;

    if (eventSize === 0)
        return;


    // clear and copy queue
    let queue = keyboard._eventQueue.splice(0, eventSize);

    // process key events
    for (let i = 0; i < eventSize; i++) {
        let event = queue[i];
        let code = event.keyCode;

        // check if is valid scintilla key
        let key = keyboard._keyMapping.get(code);

        if (key === undefined || key === null) {
            continue;
        }

        if (event.type === 'keydown') {

            if (key.press === false) {
                if (key.status === ButtonStatus.NONE) {
                    keyboard._buttonWatcher.insert(code, key);
                }

                ProcessButtonDown(event, key);
            }

        } else { 
            ProcessButtonUp(event, key);
        }

        
    }

}