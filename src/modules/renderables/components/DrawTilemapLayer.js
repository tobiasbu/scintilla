import MathUtils from "../../../math/MathUtils";
import CullingMethod from "./CullingMethod";

export default function DrawTilemapLayer(context, tilemap, layer, transform) {

    let draws = 0;
    let matrix = transform.matrix;
    let x = matrix.a[6];
    let y = matrix.a[7];

    if (tilemap.floorTiles)
    {
       x = MathUtils.round(x);
       y = MathUtils.round(y);
    }
    context.setTransform(
        matrix.a[0], matrix.a[1], // 2
        matrix.a[3], matrix.a[4], // 5
        x, y);

    if (tilemap.culling.method <= 1) {

        let idx = 0;

        for (let j = tilemap.culling.start.y; j < tilemap.culling.end.y; j++) {
            for (let i = tilemap.culling.start.x; i < tilemap.culling.end.x; i++) {
    
                //if (tilemap.culling.method == CullingMethod.LINEAR)
                    idx = i + j * tilemap.width;
                //else if (tilemap.culling.method == CullingMethod.LINEAR90DEG)
                //    idx = j + i * tilemap.width;

                let tile = layer.tiles[idx];

                if (tile == null || tile === undefined) continue;

                let frame;

                if (tile.data.isAnimated === false || tile.data.isAnimated === undefined)
                    frame = tile.data.st;
                else
                    frame = tile.data.tileset.getTile(tile.data.currentFrame).st;

                

                context.drawImage(
                tile.data.tileset.image.data, // image
                frame.x, // sx - pos crop x
                frame.y, // sy - pos crop y
                frame.width, // sWidth - crop width
                frame.height, // sHeight - crop height
                tile.x - tilemap._originInPixels.x, // destination x
                tile.y - tilemap._originInPixels.y,  // destination y
                frame.width,
                frame.height
                    );

                draws++;
            }
        }
    }
    
   //for (let i = 0; i < layer.culledTiles.lenght; i++) {
    /*for (let i = 0; i < layer.tiles.length; i++) {

        let tile = layer.tiles[i];

        if (tile == null || tile === undefined) continue;

        context.drawImage(
            tile.data.tileset.image.data, // image
            tile.frame.x, // sx - pos crop x
            tile.frame.y, // sy - pos crop y
            tile.frame.width, // sWidth - crop width
            tile.frame.height, // sHeight - crop height
            tile.x, // destination x
            tile.y,  // destination y
            tile.frame.width,
            tile.frame.height
                );

        draws++;

    }*/

    return draws;

}