
export default function InitializeEntity(entity, game) {

    // inject scene
    entity.scene = game.scene.currentScene;
            
    if (entity['start'] !== undefined && entity['start'] !== null) {
        entity.start.call(entity);
    }

    game.system.entityList.addInstance(entity);

    return entity;
 

}