import Renderable from "./Renderable";
import DrawTilemapLayer from "./components/DrawTilemapLayer";

export default class TilemapLayer extends Renderable {

    constructor(tilemap, layerData) {

        super('tilemapLayer', tilemap.moduleManager);     
        this.tilemap = tilemap;
        this.layerData = layerData;
    }


    get width() {return this.layerData.width * this.tilemap.tileWidth;}
    get height() {return this.layerData.height * this.tilemap.tileHeight;}


    render(context) {

        if (!this._visible && !this.tilemap.visible)
            return false;

        DrawTilemapLayer(context, this.tilemap, this.layerData, this.tilemap.moduleManager.entity.transform);
    
        return true;
    }

}