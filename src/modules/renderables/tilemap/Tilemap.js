import Renderable from "../Renderable";
import ModuleProvider from "../../ModuleProvider";
import TilemapLayer from "./TilemapLayer";
import TilemapAnimator from "./TilemapAnimator";
import DataList from "../../../structures/List";

export default class Tilemap extends Renderable {
    
    constructor(moduleManager, resource)
    {
        super('tilemap', moduleManager);

        //this._type = "tilemap";
        this.resource = resource;
        this.tileWidth = resource.metadata.tileWidth;
        this.tileHeight = resource.metadata.tileHeight;
        this.width = resource.metadata.width;
        this.height = resource.metadata.height;
        this.orientation = resource.metadata.orientation;
        this.pixelsWidth = resource.metadata.pixelsWidth;
        this.pixelsHeight = resource.metadata.pixelsHeight;
        this.animator = undefined;

        this.culling = {
            method : 0,
            start : {x: 0, y: 0},
            end : {x : 0, y : 0}
        }

        this.floorTiles = false;
        this.tilesets = resource.tilesets;
        this.layers = new DataList();
        this.objectLayers = resource.objectLayers;

        let animations = false;
        let layersSize = resource.tileLayers.length;


        for (let i = layersSize - 1; i >= 0; i--)
        {
            let layerData = resource.tileLayers.at(i);

            if (layerData.hasAnimatedTiles)
                animations = true;

            this.layers.push(new TilemapLayer(this, layerData));
        }

        if (animations === true) {
            this.animator = new TilemapAnimator(this, this.layers);
        }

    }
    
    getObjectsLayer(name) {
        return this.resource.getObjectsLayer(name);
    }

    getTileLayer(name) {
        return this.resource.getTileLayer(name);
    }

}

ModuleProvider.register('tilemap', function(moduleManager, tag) {

    let res = null;
    let cache = moduleManager.entity.game.system.cache;

    if (cache !== undefined)
        res = cache.tilemap.get(tag);

    let tilemap = new Tilemap(moduleManager, res);
    tilemap.floorTiles = moduleManager.entity.game.config.floorTiles || false;

    return tilemap;

});