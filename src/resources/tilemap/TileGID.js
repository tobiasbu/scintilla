
export default class TileGID {

    constructor(gid, tileset, x, y, xmax, ymax) {
        this.gid = gid;
        this.tileset = tileset || null;
        this.x = x;
        this.y = y;
        this.xmax = xmax;
        this.ymax = ymax;
        this.isAnimated = false;
    }
    
}