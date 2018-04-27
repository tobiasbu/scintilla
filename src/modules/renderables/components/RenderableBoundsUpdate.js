import ComputeBounds from "../../../transform/ComputeBounds";

export default function RenderableBoundsUpdate(renderable, entity, camera) {

    if (!entity._transform._isDirty && !camera._transform._isDirty)
        return;

    if (renderable._originIsDirty) {
        // destination
        renderable._originInPixels.x = entity._transform.origin.x * renderable.width;
        renderable._originInPixels.y = entity._transform.origin.y * renderable.height;
        // renderable._originIsDirty = false;
    }

    ComputeBounds(
        renderable._bounds, entity._transform, 
        renderable.width, renderable.height,
        renderable._originInPixels);

}