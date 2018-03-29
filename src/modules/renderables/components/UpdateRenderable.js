import ComputeBounds from "../../../transform/ComputeBounds";


export default function UpdateRenderable(entity, renderable) {

    if (!entity.transform._isDirty && !renderable._originIsDirty)
        return;




    if (renderable.name == 'tilemap') {
        for (let i = 0; i < renderable.layers.length; i++) {
            UpdateRenderable(entity, renderable.layers[i]);
        }
    } else {
        if (renderable._originIsDirty)
        {
            // destination
            renderable._originInPixels.x = entity.transform.origin.x * renderable.width;
            renderable._originInPixels.y = entity.transform.origin.y * renderable.height;
           // renderable._originIsDirty = false;
        }
    
        ComputeBounds(
            renderable._bounds, entity.transform, 
            renderable.width, renderable.height,
            renderable._originInPixels);
    }


}