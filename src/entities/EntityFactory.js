import System from "../core/system/System";
import SceneEntity from "./SceneEntity";
import InitializeEntity from "./hierarchy/InitializeEntity";


export default class EntityFactory {
    
    constructor(game) {
        this.game = game;
        this.scene = null;
        this.entityList = null;
    }

    entity(entityName) {
        entityName = entityName || 'Scene Entity ' + this.entityList.length;
        return new SceneEntity(entityName, this.game);
    }

    sprite(tag, entityName) {

        let entity = this.entity(entityName);
        entity.modules.attach.sprite(tag);

        if (this.scene.current_scene !== null) {
            InitializeEntity(entity, this.game);
        }

        return entity;
    }

    tilemap(tag, entityName) {
        let entity = this.entity(entityName);
        entity.modules.attach.tilemap(tag);

        if (this.scene.current_scene !== null) {
            InitializeEntity(entity, this.game);
        }

        return entity;
    }

    spritesheet(tag, entityName) {
        let entity = this.entity(entityName);
        entity.modules.attach.spritesheet(tag);

        if (this.scene.current_scene !== null) {
            InitializeEntity(entity, this.game);
        }

        return entity;
    }

}

System.register('EntityFactory', EntityFactory, 'create', 
function() {
    this.entityList = this.game.system.entityList;
    this.scene = this.game.scene;
});