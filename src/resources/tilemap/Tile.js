
export default class Tile {

    constructor(layer, tileData, tileX, tileY, id) {
        this.layer = layer;
        this.data = tileData;
        this.tileX = tileX;
        this.tileY = tileY;
        this.id = id;
        this.frame = tileData.st;
        // pixels positions
        this.x = Math.floor(tileX * tileData.st.width);
        this.y = Math.floor(tileY * tileData.st.height);
    }

}