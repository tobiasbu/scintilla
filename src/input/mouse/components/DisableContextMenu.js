import Validate from "../../../utils/Validate";

export default function DisableContextMenu(game, target) {

    if (!target) {
        target = document.body;
    } else if (Validate.isString(target)) {

        if (target === 'canvas') {
            target = game.system.render.domCanvas;
        } else {
            target = document.getElementsByClassName(target).item(0);
        }
    }

    target.addEventListener('contextmenu', function (event)
    {
        event.preventDefault();
        return false;
    });

}