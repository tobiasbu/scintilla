import Renderable from "../Renderable";
import DrawTilemapLayer from "../components/DrawTilemapLayer";

export default class TilemapLayer extends Renderable {

    constructor(tilemap, layerData) {

        super('tilemapLayer', tilemap.moduleManager);     
        this.tilemap = tilemap;
        this.data = layerData;
    }


    get width() {return this.data.width * this.tilemap.tileWidth;}
    get height() {return this.data.height * this.tilemap.tileHeight;}


    render(context) {

        if (!this._enabled && !this.tilemap._enabled)
            return false;

        return DrawTilemapLayer(context, this.tilemap, this.data, this.tilemap.moduleManager.entity.transform);

    }

    getTile(x, y) {
        return this.data.getTile(x, y);
    }

}