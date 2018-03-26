import Resource from "./resource";
import TilemapData from "./tilemap/tilemapData";
import { ResourceType } from "./resource";
import ParseTilesets from "./tilemap/parseTileset";
import ParseLayers from "./tilemap/parseLayers";

export default class TilemapResource extends Resource {

    constructor(source, name, cache) {

        super(null, name);

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
        this.type = ResourceType.Tilemap;
        

    }

}
