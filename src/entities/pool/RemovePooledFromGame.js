export default function RemovePooledFromGame(entity, game) {

    game.system.entityList.removeInstance(entity);
    entity.active = false;
    entity._pool = null;
    entity.scene = null;
}
