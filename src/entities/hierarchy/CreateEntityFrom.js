import SceneEntity from "../SceneEntity";
import CreateEntityFromObject from "./CreateEntityFromObject";
import Extend from "../../utils/object/Extend";

export default function CreateEntityFrom(value, game) {

    let entity;

    if (value instanceof SceneEntity) {

        entity = value;

    } else if (typeof value === SceneEntity)  {

        entity = new value(value.name, game);

    } else if (typeof value === 'object') {

        let placeholder = new SceneEntity(value.name || undefined, game);
        entity = Extend(true, placeholder, value);

    } else if (typeof value === 'function') {
        let entityHolder = new SceneEntity(value.name, game);
        let placeholder = new value();

        entity = Extend(true, entityHolder, placeholder);
    }

    return entity;

}