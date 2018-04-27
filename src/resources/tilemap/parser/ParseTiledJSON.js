import TilemapResource from "../TilemapResource";
import TilemapMetadata from "../data/TilemapMetadata";
import ParseTilesets from "./ParseTileset";
import ParseTileLayers from "./ParseTileLayers";
import ParseObjectLayers from "./ParseObjectsLayers";

export default function ParseTiledJSON(name, source, cache) {

    var metadata = new TilemapMetadata({
        name: source.name,
        width: source.width,
        height: source.height,
        tileWidth: source.tilewidth,
        tileHeight: source.tileheight,
        orientation: source.orientation
    });

    var tilesets = ParseTilesets(source, cache);

    var config = {
        tilesets: tilesets,
        tilelayers: ParseTileLayers(source, tilesets),
        objectlayers: ParseObjectLayers(source)
    };

    return new TilemapResource(name, metadata, config);

}