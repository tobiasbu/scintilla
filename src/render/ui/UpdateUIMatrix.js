
export default function UpdateUIMatrix(gui) {

    if (!gui._isDirty)
        return;

    gui.matrix.setIdentity()
    .scale(gui.pixelUnit.x, gui.pixelUnit.y)
    .translate(gui.viewport.x, gui.viewport.y);

    gui._isDirty = false;

    console.log(gui.matrix);

}
