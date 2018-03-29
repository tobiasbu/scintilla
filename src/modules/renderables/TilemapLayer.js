import Renderable from "./Renderable";
import DrawTilemapLayer from "./components/DrawTilemapLayer";

export default class TilemapLayer extends Renderable {

    constructor(tilemap, layerData) {

        super(tilemap.moduleManager);
        this._type = "tile";        
        this.tilemap = tilemap;
        this.layerData = layerData;
    }

    render(context) {

        if (!this._visible && !this.tilemap.visible)
            return false;

        DrawTilemapLayer(context, this.tilemap, this.layerData, this.tilemap.moduleManager.entity.transform);
    
        return true;
    }

}