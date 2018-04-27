import ClearModules from "../../modules/components/ClearModules";

export default function DestroyEntity(instance, game, verifyPersistance) {


    if (instance === undefined)
        return;

    if (verifyPersistance === undefined) verifyPersistance = false;

    if (instance['destroy'] !== undefined && instance['destroy'] !== null) {
        instance.destroy.call(instance);
    }

    let completelyDestroy = true;

    if (verifyPersistance === true) {
        completelyDestroy = (instance.persistent === false);
    }

    if (completelyDestroy === false)
        return;

    let pool;

    if (instance.isPooled === true) {
        pool = game.system.pool.get(instance._pool);
    }

    if (pool !== undefined) {
        pool.remove(instance);
    }

    ClearModules(instance.modules, game);
    instance._transform = null;
    instance.modules = null;
    instance.scene = null;
    instance = null;

}