import Rect from "../math/Rect";
import Vector2 from "../math/Vector2";
import MathUtils from "../math/MathUtils";


export default class InputData {

    constructor(manager) {
        this.manager = manager;
        this.canvas = manager.game.system.render.domCanvas;
        this.clientRect = new Rect();
        this.boundingClientRect = null;
        this.scale = new Vector2(1, 1);
    }

    updateClientRect() {

        let rect = this.clientRect;
        let clientRect = this.canvas.getBoundingClientRect();
        this.boundingClientRect = clientRect;

        rect.x = clientRect.left + window.pageXOffset - document.documentElement.clientLeft;
        rect.y = clientRect.top + window.pageYOffset - document.documentElement.clientTop;
        rect.width = clientRect.width;
        rect.height = clientRect.height;

        

    }

    transformX(x) {
        let rect = this.boundingClientRect;
        return MathUtils.floor((x - rect.left) / (rect.right - rect.left) * this.canvas.width);
    }

    transformY(y) {
        let rect = this.boundingClientRect;
        return MathUtils.floor((y - rect.top) / (rect.bottom - rect.top) * this.canvas.height);
    }

    clientRectTransformX(x) {
        return (x - this.clientRect.x) * this.scale.x;
    }

    clientRectTransformY(y) {
        return (y - this.clientRect.y) * this.scale.y;
    }

}