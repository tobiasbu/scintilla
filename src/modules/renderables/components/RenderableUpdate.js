
import CullTiles from "./CullTiles";
import AnimateTilemap from './AnimateTilemap';
import RenderableBoundsUpdate from "./RenderableBoundsUpdate";


export default function RenderableUpdate(entity, renderable, camera, gameTime) {

    if (renderable.name === 'tilemap') {

        if (renderable._originIsDirty) {
            // destination
            renderable._originInPixels.x = entity._transform.origin.x * renderable.pixelsWidth;
            renderable._originInPixels.y = entity._transform.origin.y * renderable.pixelsHeight;
        }

        AnimateTilemap(renderable, gameTime);

        if (!entity._transform._isDirty && !camera._transform._isDirty)
            return;

        CullTiles(renderable, camera);

        for (let i = 0; i < renderable.layers.length; i++) {
            RenderableBoundsUpdate(renderable, entity, camera);
        }

    } else {
        
        RenderableBoundsUpdate(renderable, entity, camera);
    }


}