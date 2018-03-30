import Renderable from "./Renderable";
import ModuleProvider from "../ModuleProvider";
import TilemapLayer from "./TilemapLayer";
import UpdateBounds from '../../transform/UpdateBounds'
import CullTiles from "./components/CullTiles";

export default class Tilemap extends Renderable {
    
    constructor(moduleManager, resource)
    {
        super('tilemap', moduleManager);

        //this._type = "tilemap";
        this.tileWidth = resource.metaData.tileWidth;
        this.tileHeight = resource.metaData.tileHeight;
        this.width = resource.metaData.width;
        this.height = resource.metaData.height;
        this.orientation = resource.metaData.orientation;
        this.pixelsWidth = resource.metaData.pixelsWidth;
        this.pixelsHeight = resource.metaData.pixelsHeight;

        this.culling = {
            method : 0,
            start : {x: 0, y: 0},
            end : {x : 0, y : 0}
        }

        this.floorTiles = false;
        this.tilesets = resource.tilesets;
        this.layers = [];

        for (let i = 0; i < resource.layers.length; i++)
            this.layers.push(new TilemapLayer(this, resource.layers.at(i)));

    }


    

}

ModuleProvider.register('tilemap', function(moduleManager, tag) {

    let res = null;
    let cache = moduleManager.entity.game.system.cache;

    if (cache !== undefined)
        res = cache.tilemap.get(tag);

    var tilemap = new Tilemap(moduleManager, res);
    tilemap.floorTiles = moduleManager.entity.game.config.floorTiles || false;

    return tilemap;

});