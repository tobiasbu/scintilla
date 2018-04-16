
export default function PreparePooledToGame(pool, entity, game) {
    if (game.scene.currentScene === null || game.scene.currentScene === undefined)
    {
        console.warn("Pool.pull: Could not pull entity. There is no active scene.");
        return false;
    }

    entity.active = true;
    entity._pool = pool.name;
    entity.scene = game.scene.currentScene;
    game.system.entityList.addInstance(entity);
    return true;
}