import Renderable from "./Renderable";
import ModuleProvider from "../ModuleProvider";
import TilemapLayer from "./TilemapLayer";
import UpdateBounds from '../core/UpdateBounds'

export default class Tilemap extends Renderable {
    
    constructor(moduleManager, resource)
    {
        super(moduleManager);

        this._type = "tilemap";
        this.tileWidth = resource.metaData.tileWidth;
        this.tileHeight = resource.metaData.tileHeight;
        this.width = resource.metaData.width;
        this.height = resource.metaData.height;
        this.orientation = resource.metaData.orientation;
        this.pixelsWidth = resource.metaData.pixelsWidth;
        this.pixelsHeight = resource.metaData.pixelsHeight;

        this.tilesets = resource.tilesets;
        this.layers = [];

        for (let i = 0; i < resource.layers.length; i++)
            this.layers.push(new TilemapLayer(this, resource.layers.at(i)));

        console.log(this.layers);
    }

    moduleUpdate() {
        if (!this.entity.transform._isDirty)
            return;

        UpdateBounds(this.bounds, this.entity.transform.position.x, this.entity.transform.position.y, this.pixelsWidth, this.pixelsHeight, this.entity.transform._cosSin);
    }

}

ModuleProvider.register('tilemap', function(moduleManager, tag) {

    let res = null;
    let cache = moduleManager.entity.game.system.cache;

    if (cache !== undefined)
        res = cache.tilemap.get(tag);

    var tilemap = new Tilemap(moduleManager, res);

    return tilemap;

});