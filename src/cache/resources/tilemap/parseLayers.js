
import ObjectUtils from '../../../utils/objectutils'
import Base64Utils from '../../../utils/Base64Utils';

export default function ParseLayers(json, mapdata) {

    let size = json.layers.lenght;

    if (size <= 0)
        return;

    for (let i = 0; i < size; i++) {

        let layer = json.layers[i];

        if (layer.enconding) {
            if (layer.enconding === 'base64') {
                layer.data = Base64Utils.decodeToUint32(layer.data);
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

    }

}