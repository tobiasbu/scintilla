import System from "../core/system/System";
import SceneEntity from "./SceneEntity";


export default class EntityFactory {
    
    constructor(game) {
        this.game = game;
        this.scene = null;
        this.entityList = null;
    }

    entity(entityName) {
        entityName = entityName || 'SceneEntity ' + this.entityList.size;
        return new SceneEntity(entityName, this.game);
    }

    sprite(tag, entityName) {

        let entity = this.entity(entityName);
        entity.modules.attach.sprite(tag);

        if (this.scene.current_scene !== null) {
            this.entityList.add(entity);
        }

        return entity;
    }

    tilemap(tag, entityName) {
        let entity = this.entity(entityName);
        entity.modules.attach.tilemap(tag);

        if (this.scene.current_scene !== null) {
            this.entityList.add(entity);
        }

        return entity;
    }

}

System.register('EntityFactory', EntityFactory, 'create', 
function() {
    this.entityList = this.game.system.entityList;
    this.scene = this.game.scene;
});