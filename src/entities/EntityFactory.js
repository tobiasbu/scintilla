import System from "../core/system/System";
import SceneEntity from "./SceneEntity";
import InitializeEntity from "./hierarchy/InitializeEntity";


export default class EntityFactory {
    
    constructor(game) {
        this.game = game;
        this.scene = null;
        this.entityList = null;
    }

    empty(entityName) {
        entityName = entityName || 'Scene Entity ' + this.entityList.length;
        return new SceneEntity(entityName, this.game);
    }

    sprite(tag, entityName, config) {

        if (config === undefined)
            config = {};

        let entity = this.empty(entityName);
        let spr = entity.modules.attach.sprite(tag, config.x, config.y, config.width, config.height);

        if (this.scene.current_scene !== null) {
            InitializeEntity(entity, this.game);
        }



        return entity;
    }

    tilemap(tag, entityName) {
        let entity = this.empty(entityName);
        entity.modules.attach.tilemap(tag);

        if (this.scene.current_scene !== null) {
            InitializeEntity(entity, this.game);
        }

        return entity;
    }

    spritesheet(tag, entityName) {
        let entity = this.empty(entityName);
        entity.modules.attach.spritesheet(tag);

        if (this.scene.current_scene !== null) {
            InitializeEntity(entity, this.game);
        }

        return entity;
    }

    rectangle(width, height, entityName) {
        let entity = this.empty(entityName);
        entity.modules.attach.rectangle(width, height);

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