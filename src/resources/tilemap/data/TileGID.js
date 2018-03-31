import Rect from "../../../math/Rect";

export default class TileGID {

    constructor(tileset, gid, tileID, u, v, umax, vmax) {
        this.id = tileID;
        this.gid = gid;
        this.tileset = tileset || null;
        this.st = new Rect(u,v,umax,vmax); // tex coords
        this.keyFrames = undefined;
        this.isAnimated = false;
        this.currentFrame = 0;
    }
    
}