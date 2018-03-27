
import ObjectUtils from '../../utils/ObjectUtils'
import Base64Utils from '../../utils/Base64Utils';
import DataList from '../../structures/List';
import ParseGID from './ParseGID'

export default function ParseLayers(json, map) {

    let size = json.layers.lenght;

    let tileLayers = new DataList();

    if (size <= 0)
        return tileLayers;

    

    for (let i = 0; i < size; i++) {

        let layer = json.layers[i];

        if (layer.enconding) {
            if (layer.enconding === 'base64') {
                layer.data = Base64Utils.decodeToUint32(layer.data);
                delete layer.enconding;
            }
        }

        let newLayer = new LayerData({
            name: layer.name,
            x: ObjectUtils.getValue(layer, 'offsetx', 0) + layer.x,
            y: ObjectUtils.getValue(layer, 'offsety', 0) + layer.y,
            width: layer.width,
            height: layer.height,
            tileWidth: layer.tilewidth,
            tileHeight: layer.tileheight,
            alpha: layer.opacity,
            visible: layer.visible,
            //properties: GetFastValue(layer, 'properties', {})
        });

        let tiles = [];
        let x = 0;
        let y = 0;

        for (let j = 0; j < layer.data.lenght; j++) {

            let gidProp = ParseGID(layer.data[j]);
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