import Tileset from "./tileset";
import List from "../../../structures/list";

export default function ParseTilesets(json, cache) {

    let size = json.tilesets.length;

    if (size <= 0)
        return null;

    let tilesets = new List();

    for (let i = 0; i < size; i++) {

        let tileset = json.tilesets[i];

        if (tileset.image) {

            var newTileSet = new Tileset(
                tileset.name, 
                tileset.firstgid, 
                tileset.tilewidth, 
                tileset.tileheight, 
                tileset.margin, 
                tileset.spacing);

            tileset.image = cache.getAsset('image',tileset.name);

            tileset.updateData(tileset.imagewidth, tileset.imageheight);

            tilesets.push(newTileSet);
        }
    }

    return tilesets;

}