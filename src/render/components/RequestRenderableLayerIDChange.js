
/// TODO - BETTER
export default function RequestRenderableLayerIDChange(renderable, oldLayerID, toLayerID) {

    // if the to layer is the same of old, we don't change
    if (oldLayerID === toLayerID)
        return oldLayerID;

    let oldLayer = this.layer.renderLayers.at(oldLayerID);
    

    // if we don't find the old layer ID 
    if (oldLayer === undefined) {

        // we need to check if the renderable is somewhere
        oldLayer = this.layer.findRenderableLayer(renderable);

        // still undefined
        if (oldLayer === undefined) {

            // we add to default layer
            this.layer.renderLayers.at(0).add(renderable);
            return 0;
        }
    }

    let toLayer = this.layer.renderLayers.at(toLayerID);

    // if tolayer is undefined or same has oldLayer
    if (toLayer === undefined || toLayer === oldLayer)
        return oldLayerID;
    

    // find the renderable index
    let index = oldLayer.renderList.indexOf(renderer);

    if (index === -1)
        return oldLayerID;

    oldLayer.removeAt(index);
    toLayer.add(renderer);

    return toLayerID;
    
    
}