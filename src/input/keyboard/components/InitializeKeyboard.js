import ObjectGet from "../../../utils/object/ObjectGet";

import Button from "../../button/Button";

import KeyCode from "./../KeyCode";

import StartKeyboardListeners from "./StartKeyboardListeners";
import ResetKeyboard from "./ResetKeyboard";


export default function InitializeKeyboard(keyboard, game) {

    if (!keyboard)
        return;

    let keyMapping = keyboard._keyMapping;

    for (let prop in KeyCode) {

        if (KeyCode.hasOwnProperty(prop)) {
            let value = KeyCode[prop];
            let key = new Button(value, game);
            keyMapping.insert(value, key);
        }
    }

    //ResetKeyboard(keyboard);

    let config = game.config.keyboard;
    let target = ObjectGet.value(config, 'target', window);    
    keyboard._enabled = ObjectGet.value(config, 'enable', true);
    
    keyboard.eventTarget = target;
    keyboard.eventHandler = StartKeyboardListeners(keyboard, target);



}