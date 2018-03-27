import GameSystemManager from "../core/GameSystemManager";
import SceneEntity from "./SceneEntity";

export default class EntityFactory {
    
    constructor(game) {
        this.game = game;
        this.scene = null;
        this.entityList = null;
    }

    init()
    {
        this.entityList = this.game.system.entityList;
        this.scene = this.game.scene;
    }

    sprite(tag, entityName) {
        var entity = new SceneEntity(entityName,this.game);
        entity.modules.attach.sprite(tag);

        if (this.scene.current_scene !== null)
        {
            this.entityList.add(entity);

        }

        return entity;
    }

}

GameSystemManager.register('EntityFactory', EntityFactory, 'create');