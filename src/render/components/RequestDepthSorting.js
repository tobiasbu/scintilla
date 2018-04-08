
export default function RequestDepthSorting(layerID) {

    let layer = this.layer.renderLayers.at(layerID);

    if (layer === undefined) return;

    if (layer.__isDirty === true)
        return;

    layer.__isDirty = true;

}