import SceneEntity from "../SceneEntity";
import CreateEntityFromObject from "./CreateEntityFromObject";
import Extend from "../../utils/object/Extend";

export default function CreateEntityFrom(value, game) {

    let entity;

    if (value instanceof SceneEntity) {

    } else if (typeof value === 'object') {

        let placeholder = new SceneEntity(value.name || undefined, game);
        entity = Extend(true, placeholder, value);

        return entity;

    } else if (typeof value === 'function') {

    }

}