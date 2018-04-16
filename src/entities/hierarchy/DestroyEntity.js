import ClearModules from "../../modules/components/ClearModules";

export default function DestroyEntity(instance, game, verifyPersistance) {


    if (instance === undefined)
        return;

    if (verifyPersistance === undefined) verifyPersistance = false;

    if (instance['destroy'] !== undefined && instance['destroy'] !== null) {
        instance.destroy.call(instance);
    }

    let completelyDestroy = true;

    if (verifyPersistance) {
        completelyDestroy = element.persistent === false;        
    }

    if (completelyDestroy) {
        ClearModules(instance.modules, game);

        if (instance.isPooled === true) {
            let pool = game.system.pool.get(instance._pool);
            pool.remove(instance);
        }

        instance.scene = null;
        instance.transform = null;
        instance.modulesManager = null;
        instance = null;

       
    }

}
