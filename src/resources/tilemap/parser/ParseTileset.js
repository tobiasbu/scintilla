import Tileset from "../data/Tileset";
import DataList from "../../../structures/List";
import Path from '../../../utils/Path';
import ParseTilesConfig from "./ParseTilesConfig";
import ParseTileProperties from "./ParseTilesProperties";


export default function ParseTilesets(json, cache) {

    let size = json.tilesets.length || 0;

    let tileSets = new DataList();

    for (let i = 0; i < size; i++) {

        let jsonTileset = json.tilesets[i];

        if (jsonTileset.image) {

            var newTileSet = new Tileset(
                jsonTileset.name,
                jsonTileset.firstgid,
                jsonTileset.tilewidth,
                jsonTileset.tileheight,
                jsonTileset.margin,
                jsonTileset.spacing);

            newTileSet.image = cache.image.get(Path.getFilenameWithoutExtension(jsonTileset.image) || jsonTileset.name);

            newTileSet.updateData(jsonTileset.imagewidth, jsonTileset.imageheight);

            // check tile properties
            if (jsonTileset.tiles !== undefined) {
                ParseTilesConfig(newTileSet, jsonTileset.tiles);
            }

            if (jsonTileset.tileproperties !== undefined) {
                ParseTileProperties(newTileSet, jsonTileset.tileproperties);
            }

            tileSets.push(newTileSet);
        }
    }

    return tileSets;

}