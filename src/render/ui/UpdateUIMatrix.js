
export default function UpdateUIMatrix(gui) {

    if (!gui._isDirty)
        return;

    gui.matrix.setIdentity()
    .scale(gui.resolution, gui.resolution)
    //.translate(gui.viewport.x * gui.invertedResolution, gui.viewport.y *  gui.invertedResolution)
    .translate( gui.viewportOffset.x, gui.viewportOffset.y);

    gui._isDirty = false;
}
