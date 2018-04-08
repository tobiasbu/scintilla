import Entity from "../Entity";
import System from "../../core/system/System";
import CreateEntityFrom from "./CreateEntityFrom";

export default class EntityHierarchy {

    constructor(game) {
        this.game = game;
        this._entityList = null;
    }

    get count() {return this._entityList._instances.size;}

    find(name) {
        
        let instances = [];
        let count = this._entityList._instances.size;

        for (let i = 0; i < count; i++) {
            if (this._entityList[i].name !== name)
                continue;

            instances.push(this._entityList[i]);
        }

        return instances;

    }

    findFirst(name) {
        this._entityList.each(entity => {

            if (entity.name === name)
                return entity;
            
        });

        return null;
    }

    findLast(name) {
        
        let count = this._entityList._instances.size;

        for (let i = count - 1; i >= 0; i--) {
            if (this._entityList[i].name === name)
                return this._entityList[i];
        }

        return null;
    }

    get(index) {
        return this._entityList._instances.at(index) || null;
    }

    create(entityBase, count) {

        let entity = CreateEntityFrom(entityBase, this.game);

        
        if (entity['start'] !== undefined && entity['start'] !== null) {
            entity.start.call(entity);
        }

        this._entityList.add(entity);



        return entity;
    }

    destroy(entity) {

    }

    destroyAt(index) {

    }

    clear() {

    }

}

System.register('EntityHierarchy', EntityHierarchy, 'entity', function() {
    this._entityList = this.game.system.entityList;
});