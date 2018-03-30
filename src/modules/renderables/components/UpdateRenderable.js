import ComputeBounds from "../../../transform/ComputeBounds";
import CullTiles from "./CullTiles";


export default function UpdateRenderable(entity, renderable, camera) {

    if (!entity.transform._isDirty && !camera.transform._isDirty)
        return;

    


    if (renderable.name == 'tilemap') {

        if (renderable._originIsDirty) {
            // destination
            renderable._originInPixels.x = entity.transform.origin.x * renderable.pixelsWidth;
            renderable._originInPixels.y = entity.transform.origin.y * renderable.pixelsHeight;
        }

        CullTiles(renderable, camera)

        for (let i = 0; i < renderable.layers.length; i++) {
            UpdateRenderable(entity, renderable.layers[i], camera);
        }
    } else {
        
        if (renderable._originIsDirty) {
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