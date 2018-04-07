
import DataList from '../../structures/List';

// based in pixi
class CanvasListManager {

    constructor() {
        this.list = new DataList();
    }

    create(gameParent, width, height) {

        let canvasContainer = this.firstFree();
        let canvas;

        // no parent found
        if (canvasContainer === null) {

            canvasContainer = {
                parent: gameParent,
                canvas: document.createElement('canvas')
            };

            this.list.push(canvasContainer);

            canvas = canvasContainer.canvas;

        } else {

            canvasContainer.parent = gameParent;
            canvas = canvasContainer.canvas;
        }

        canvas.width = width;
        canvas.height = height;

        return canvas;
    }

    filter(gameParent) { // functional programming

        var list = scintilla.CanvasList.list;

        return list.parent === gameParent;

    }

    firstFree() {

        this.list.each((canvas) => {

            if (!canvas.parent) {
                return canvas;
            }

        });

        return null;
    }

    remove(parent) {

        var list = this.list;

        for (var i = 0; i < list.length; i++)
        {
            if (list[i].parent === parent)
            {
                list[i].parent = null;
            }
        }

    }

    clear() {
        /// TODO
    }

}

var CanvasManager = new CanvasListManager();

Object.seal(CanvasManager);

export default CanvasManager;