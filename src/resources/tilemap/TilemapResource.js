
import Resource from "../Resource";
import TilemapMetadata from "./data/TilemapMetadata";
import ParseTilesets from "./parser/ParseTileset";
import ParseLayers from "./parser/ParseLayers";
import ResourceType from '../ResourceType'

export default class TilemapResource extends Resource {

    constructor(name, source, cache) {

        super(name, ResourceType.Tilemap);

        this.metaData = new TilemapMetadata ({
            name: source.name,
            width: source.width,
            height: source.height,
            tileWidth: source.tilewidth,
            tileHeight: source.tileheight,
            orietation: source.orietation
        });

        this.tilesets = ParseTilesets(source, cache);
        this.layers = ParseLayers(source, this);
    }

    getTilesetByGID(gid) {

        return this.tilesets.each((set)=>{
            if (set.hasGID(gid)) {
                return set;
            }
        }) || null;

    }

    getTileGID(gid) {
        return this.tilesets.each((set)=>{

            let tileGID = set.getTileGID(gid);

            if (tileGID !== undefined) {
                return tileGID;
            }
        }) || null;
    }

}
