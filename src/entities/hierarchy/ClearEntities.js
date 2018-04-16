import ClearModules from "../../modules/components/ClearModules";
import DestroyEntity from "./DestroyEntity";

export default function ClearEntities(entityList, game) {

    for (let i = 0; i < entityList._instances.length; i++) {

        let instance = entityList._instances.at(i);

        if (instance.isPooled) {
            game.system.pool.pull(instance);
        } else {
            DestroyEntity(instance, game, true);
        }

    }

    for (let i = 0; i < entityList._pendingInstances.length; i++) {

        let instance = entityList._instances.at(i);

        if (instance.isPooled) {
            game.system.pool.pull(instance);
        } else {
            DestroyEntity(instance, game, true);
        }
    }

    entityList._pendingInstances.childs.length = 0;
    entityList._destroyInstances.childs.length = 0;
    entityList._instances.childs.length = 0;

}