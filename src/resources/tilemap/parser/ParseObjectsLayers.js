import TilemapObject from "../data/TilemapObject";
import DataList from "../../../structures/List";

export default function ParseObjectLayers(json, map) {

    let size = json.layers.length;
    let layers = new DataList();

    if (size <= 0)
        return layers;

    for (let i = 0; i < size; i++) {

        let jsonLayer = json.layers[i];

        if (jsonLayer.type !== "objectgroup")
            continue;

        

        if (jsonLayer.objects === undefined)
            continue;

        let newLayer = {
            name :  jsonLayer.name || "",
            objects : []
        };

        let objectsSize = jsonLayer.objects.length;

        for (let j = 0; j < objectsSize; j++) {

            let obj = new TilemapObject(jsonLayer.objects[j]);
            newLayer.objects.push(obj);

        }

        layers.push(newLayer);


    }

    return layers;

}