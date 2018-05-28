import ButtonStatus from "../button/ButtonStatus";
import DataMap from "../../structures/Map";


/**
 * 
 * @param {DataMap} watcher 
 * @param {Array} garbage 
 *
 */
export default function WatchButtons(watcher, garbage) {

    if (watcher.length === 0) 
        return;

    watcher.each(function (code, button) {

        if (button.status === ButtonStatus.PRESSED) {
            button.status = ButtonStatus.POST_PRESSED;
           
        } else if (button.status === ButtonStatus.RELEASED) {
            button.status = ButtonStatus.NONE;
            garbage.push(code);
        }

    });

    if (garbage.length !== 0) {
        watcher.eraseList(garbage);
        garbage.splice(0, garbage.length);
    }

}