import MathUtils from "../../../math/MathUtils";

export default function DrawTilemapLayer(context, tilemap, layer, transform) {

    let draws = 0;
    let matrix = transform.matrix;

    context.setTransform(
        matrix.a[0], matrix.a[1], // 2
        matrix.a[3], matrix.a[4], // 5
        matrix.a[6], matrix.a[7]);
    
   //for (let i = 0; i < layer.culledTiles.lenght; i++) {
    for (let i = 0; i < layer.tiles.length; i++) {

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

    }

    /*
MathUtils.round(tile.x - 0.1), // destination x
            MathUtils.round(tile.y - 0.1),  // destination y
            MathUtils.round(tile.frame.width + 0.1),
            MathUtils.round(tile.frame.height + 0.1)
    */

    return draws;

}