
export default function UIResize(gui, w, h) {
    gui.width = w;
    gui.height = h;
    gui.aspectRatio = w / h;
    gui.pixelUnit.x = gui.canvas.width / w;
    gui.pixelUnit.y = gui.canvas.height / h;
    gui._isDirty = true;
}
