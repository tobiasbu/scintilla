import GameSystemManager from "../core/gameSystemManager";
import SceneEntity from "./sceneentity";

export default class EntityFactory {
    
    constructor(game) {
        this.game = game;
        this.scene = game.scene;
        this.entityList = null;
    }

    init()
    {
        this.entityList = this.game.system.entityList;
    }

    sprite(tag) {
        var entity = new SceneEntity();
        entity.modules.attach.sprite(tag);

        if (this.scene.current_scene !== null)
        {
            this.entityList.add(entity);

        }

        return entity;
    }

}

GameSystemManager.register('EntityFactory', EntityFactory, 'create');