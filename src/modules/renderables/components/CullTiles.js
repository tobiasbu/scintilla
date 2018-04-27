import MathUtils from "../../../math/MathUtils";
import CullingMethod from "./CullingMethod";

function LimitCulling(culling, tilemap) {

    // limit culling

    if (culling.start.x < 0)
    culling.start.x = 0;

    if (culling.start.y < 0)
    culling.start.y = 0;

    if (culling.end.x > tilemap.width)
    culling.end.x = tilemap.width;
    
    if (culling.end.y > tilemap.height)
    culling.end.y = tilemap.height;

}

export default function CullTiles(tilemap, camera) {
    
    let t = tilemap.entity._transform;
    let rot = camera._transform.rotation + t.rotation;

    // 90 DEGREE ROTATION
    // We will use the linear culling that is faster



    if (rot % MathUtils.HALFPI === 0) {

        let tx = t.position.x - tilemap._originInPixels.x;
        let ty = t.position.y - tilemap._originInPixels.y;


        tilemap.culling.method = CullingMethod.LINEAR;

            tilemap.culling.start.x =  Math.floor((camera.viewBounds.min.x - tx) / tilemap.tileWidth);
            tilemap.culling.start.y =  Math.floor((camera.viewBounds.min.y - ty) / tilemap.tileHeight);
            tilemap.culling.end.x =  Math.ceil((camera.viewBounds.max.x - tx) / tilemap.tileWidth);
            tilemap.culling.end.y =  Math.ceil((camera.viewBounds.max.y - ty) / tilemap.tileHeight);

        LimitCulling(tilemap.culling, tilemap);

        // TODO FOR 90 Deg TILES


    } else {

        tilemap.culling.method = 1;

        // TODO ROTATED TILES

    }
    

}