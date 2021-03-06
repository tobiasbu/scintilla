import ObjectGet from '../../../utils/object/ObjectGet';
import Base64Utils from '../../../utils/Base64Utils';
import DataSet from '../../../structures/Set';
import DataList from '../../../structures/List';
import ParseGID from './ParseGID';
import TileLayerData from '../data/TileLayerData';
import Tile from '../data/Tile';

function GetTilesetByGID(tilesets, gid) {

    return tilesets.each((set)=>{
        if (set.hasGID(gid)) {
            return set;
        }
    }) || null;

}

export default function ParseTileLayers(json, tilesets) {

    let size = json.layers.length;
    let layers = new DataList();

    if (size <= 0)
        return layers;

    for (let i = size - 1; i >= 0; i--) {

        let jsonLayer = json.layers[i];

        if (jsonLayer.type !== "tilelayer")
            continue;

        if (jsonLayer.enconding) {
            if (jsonLayer.enconding === 'base64') {
                //  should be interpreted as an array of unsigned 32-bit integers using little-endian byte ordering.
                jsonLayer.data = Base64Utils.decodeToUint32(jsonLayer.data);
                delete jsonLayer.enconding;
            }
        }

        let newLayer = new TileLayerData({
            name: jsonLayer.name,
            x: ObjectGet.value(jsonLayer, 'offsetx', 0) + jsonLayer.x,
            y: ObjectGet.value(jsonLayer, 'offsety', 0) + jsonLayer.y,
            width: jsonLayer.width,
            height: jsonLayer.height,
            tileWidth: jsonLayer.tilewidth,
            tileHeight: jsonLayer.tileheight,
            alpha: jsonLayer.opacity,
            visible: jsonLayer.visible,
            //properties: GetFastValue(layer, 'properties', {})
        });

        let tiles = [];
        let x = 0;
        let y = 0;
        let hasAnimatedTiles = false;
        let animatedTilesGID = new DataSet();

        for (let j = 0; j < jsonLayer.data.length; j++) {

            let gidProp = ParseGID(jsonLayer.data[j]);
            let id = x + y * newLayer.width;
            let tile = null;

            // The first tileset always has a firstgid value of 1. 
            if (gidProp.gid > 0) {
                let gid = gidProp.gid;
                let tileset = GetTilesetByGID(tilesets, gid); //map.getTilesetByGID(gid);
                let tileData = tileset.getTileGID(gid);

                if (tileData.isAnimated) {
                    animatedTilesGID.insert(gid);
                    hasAnimatedTiles = true;

                }

                tile = new Tile(newLayer, tileData, x, y, id);
            }

            tiles.push(tile);

            x++;

            if (x >= newLayer.width) {
                x = 0;
                y++;
            }
        }

        newLayer.tiles = tiles;
        newLayer.hasAnimatedTiles = hasAnimatedTiles;
        newLayer.animatedTiles = (animatedTilesGID.size > 0) ? animatedTilesGID : undefined;

        layers.push(newLayer);

    }


    return layers;

}