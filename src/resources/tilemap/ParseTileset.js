import Tileset from "./Tileset";
import DataList from "../../structures/List";


export default function ParseTilesets(json, cache) {

    let size = json.tilesets.length || -1;

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

            newTileSet.image = cache.getAsset('image', Path.getFilenameWithoutExtension(jsonTileset.image) || jsonTileset.name);

            newTileSet.updateData(jsonTileset.imagewidth, jsonTileset.imageheight);

            tileSets.push(newTileSet);
        }
    }

    return tileSets;

}