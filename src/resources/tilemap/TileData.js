import Rect from "../../math/Rect";

export default class TileData {

    constructor(tileset, gid, u, v, umax, vmax) {
        this.gid = gid;
        this.tileset = tileset || null;
        this.st = new Rect(u,v,umax,vmax); // tex coords
        this.keyFrames = null;
    }
    
}