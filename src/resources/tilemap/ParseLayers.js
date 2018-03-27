
import ObjectUtils from '../../utils/ObjectUtils'
import Base64Utils from '../../utils/Base64Utils';
import DataList from '../../structures/List';
import ParseGID from './ParseGID'
import TilemapLayerData from './TilemapLayerData';
import Tile from './Tile';

export default function ParseLayers(json, map) {

    let size = json.layers.length;
    let tileLayers = new DataList();

    if (size <= 0)
        return tileLayers;

    for (let i = 0; i < size; i++) {

        let jsonLayer = json.layers[i];

        if (jsonLayer.enconding) {
            if (jsonLayer.enconding === 'base64') {
                //  should be interpreted as an array of unsigned 32-bit integers using little-endian byte ordering.
                jsonLayer.data = Base64Utils.decodeToUint32(jsonLayer.data);
                delete jsonLayer.enconding;
            }
        }

        let newLayer = new TilemapLayerData({
            name: jsonLayer.name,
            x: ObjectUtils.getValue(jsonLayer, 'offsetx', 0) + jsonLayer.x,
            y: ObjectUtils.getValue(jsonLayer, 'offsety', 0) + jsonLayer.y,
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

        for (let j = 0; j < jsonLayer.data.length; j++) {

            let gidProp = ParseGID(jsonLayer.data[j]);
            let id = x + y * newLayer.width;
            let tile = null;

            // The first tileset always has a firstgid value of 1. 
            if (gidProp.gid > 0) {
                let tileset = map.getTilesetByGID(gidProp.gid);
                tile = new Tile(newLayer, tileset.getTile(gidProp.gid), x, y, id);
            } 

            tiles.push(tile);

            x++;

            if (x >= newLayer.width) {
                x = 0;
                y++;
            }
        }

        newLayer.tiles = tiles;

        tileLayers.push(newLayer);

    }

   
    return tileLayers;

}