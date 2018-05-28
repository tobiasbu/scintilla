import StartMouseListener from "./StartMouseListener";
import MouseButton, {
    LogicalMouseButton
} from "../MouseButton";
import Button from "../../button/Button";
import ObjectGet from "../../../utils/object/ObjectGet";



export default function InitializeMouse(mouse, game) {

    if (!mouse)
        return;

    for (let prop in LogicalMouseButton) {

        if (LogicalMouseButton.hasOwnProperty(prop)) {
            let value = LogicalMouseButton[prop];
            mouse._buttonsList.push(new Button(value, game));
        }
    }

    let gameConfig = game.config.mouse;
    let target = ObjectGet.value(gameConfig, 'target', null);
    let enable = ObjectGet.value(gameConfig, 'enable', true);

    if (!target) {
        target = game.system.render.domCanvas;
    }

    mouse._enabled = enable;
    mouse.eventTarget = target;
    mouse.eventHandler = StartMouseListener(mouse, target);


}