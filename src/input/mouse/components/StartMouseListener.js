import Mouse from "../Mouse";

/**
 * 
 * @param {Mouse} mouse 
 * @param {HTMLElement} target
 */
export default function StartMouseListener(mouse, target) {

    // mouse event handler
    let eventQueue = mouse._eventQueue;

    let config = {
        passive: false
    };

    let handler = function (event) {

        if (event.defaultPrevented) {
            return;
        }

        if (mouse.preventDefault) {
            event.preventDefault();
        }

        eventQueue.push(event);

    };


    target.addEventListener('mousedown', handler, config);
    target.addEventListener('mousemove', handler, config);
    target.addEventListener('mouseup', handler, config);
    target.addEventListener('mouseenter', handler, config);
    target.addEventListener('mouseleave', handler, config);

    return handler;

}