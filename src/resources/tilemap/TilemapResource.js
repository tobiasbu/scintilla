
import Resource from "../Resource";
import TilemapMetadata from "./data/TilemapMetadata";
import ParseTilesets from "./parser/ParseTileset";
import ResourceType from '../ResourceType';
import ParseTileLayers from "./parser/ParseTileLayers";
import ParseObjectLayers from "./parser/ParseObjectsLayers";

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
        this.tileLayers = ParseTileLayers(source, this);
        this.objectLayers = ParseObjectLayers(source);
        
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
