import Keyboard from "../Keyboard";

/**
 * 
 * @param {Keyboard} keyboard 
 * @param {HTMLElement} target 
 */
export default function StartKeyboardListeners(keyboard, target) {

    let eventQueue = keyboard._eventQueue;

    // key event handler
    const handler = function (event) {

      if (event.defaultPrevented) {
        return;
      }

      if (keyboard.preventDefault) {
        event.preventDefault();
      }

      eventQueue.push(event);

    };

    target.addEventListener('keydown', handler, false);
    target.addEventListener('keyup', handler, false);

    return handler;
  


}