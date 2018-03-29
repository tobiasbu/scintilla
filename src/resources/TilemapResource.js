import TilemapMetadata from "./tilemap/TilemapMetadata";
import Resource from "./Resource";
import ParseTilesets from "./tilemap/ParseTileset";
import ParseLayers from "./tilemap/ParseLayers";
import ResourceType from './ResourceType'

export default class TilemapResource extends Resource {

    constructor(name, source, cache) {

        super(name);

        this.metaData = new TilemapMetadata ({
            name: source.name,
            width: source.width,
            height: source.height,
            tileWidth: source.tileWidth,
            tileHeight: source.tileHeight,
            orietation: source.orietation
        });

        this.name = name;
        this.tilesets = ParseTilesets(source, cache);
        this.layers = ParseLayers(source, this);
        //this.data.tiles = ParseTiles(this.data);
        this.type = ResourceType.Tilemap;
        

    }

    getTilesetByGID(gid) {

        return this.tilesets.each((set)=>{
            if (set.hasGID(gid)) {
                return set;
            }
        }) || null;

    }

}
