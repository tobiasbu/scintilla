import TilemapData from "./tilemap/TilemapData";
import Resource from "./Resource";
import ParseTilesets from "./tilemap/ParseTileset";
import ParseLayers from "./tilemap/ParseLayers";
import ResourceType from './ResourceType'

export default class TilemapResource extends Resource {

    constructor(name, source, cache) {

        super(name);

        this.data = new TilemapData({
            width: source.width,
            height: source.height,
            tileWidth: source.tileWidth,
            tileHeight: source.tileHeight,
            orietation: source.orietation
        });

        this.name = name;
        this.data.tilesets = ParseTilesets(source, cache);
        this.data.layers = ParseLayers(source);
        //this.data.tiles = ParseTiles(this.data);
        this.type = ResourceType.Tilemap;
        

    }

}
