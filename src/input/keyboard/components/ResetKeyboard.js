import Keyboard from "../Keyboard";

/**
 * 
 * @param {Keyboard} keyboard 
 */
export default function ResetKeyboard(keyboard) {

    if (!keyboard)
        return;

    keyboard._keyMapping.each(function (code, key) {
          key.reset();         
    });

    keyboard.clear();



}