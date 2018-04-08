import SceneEntity from "../SceneEntity";
import ObjectGet from "../../utils/object/ObjectGet";

export default function CreateEntityFromObject(value) {

    let entity = new SceneEntity(value.name || undefined);

    for (let prop in value)
    {
        if (object.hasOwnProperty(prop)) {

            if (prop === 'function') // create function
                entity[prop] = value[prop].bind(entity);
            else
                entity[prop] = value[prop];
        }
        
    }

   
}