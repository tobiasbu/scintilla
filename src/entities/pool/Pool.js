import DataList from "../../structures/List";
import CreateEntityFrom from "../hierarchy/CreateEntityFrom";
import PreparePooledToGame from "./PreparePooledToGame";
import RemovePooledFromGame from "./RemovePooledFromGame";

export default class Pool {
    
    constructor(game, name, baseEntity, count) {

        this.game = game;
        this._baseEntity = baseEntity;
        this.name = name || baseEntity.name || 'Entity Pool';
        
        this._pool = new DataList();
        this._pooledEntities = new DataList();

        if (count === undefined) count = 1;

        this.add(count);
    }

    get length() {
        return this._pool.size;
    }

    add(count) {

        if (count === undefined) count = 1;

        for (let i = 0; i < count; i++) {

            let entity = CreateEntityFrom( this._baseEntity, this.game);

            if (entity['start'] !== undefined && entity['start'] !== null) {
                entity.start.call(entity);
            }

            this._pool.push(entity);
        }

        return this;
        
    }

    pull() {
        if (this._pool.size === 0) {
            console.warn("Pool.pull: Could not pull entity. The pool is empty");
            return null;
        }
        
        let pooled = this._pool.popFront();

        if (pooled !== undefined && pooled !== null) {

            if (PreparePooledToGame(this, pooled, this.game) === true) {
                this._pooledEntities.push(pooled);
                return pooled;
            } else {
                this._pool.push(pooled);
            }
        } else {
            console.warn("Pool.pull: Could not pull entity. The pool is empty");
        }

        return null;
        
        
    }

    push(entity) {
        if (entity === undefined) return false;

        //if (entity instanceof this._mergedBaseEntity) {

            let index = this._pooledEntities.indexOf(entity);

            if (index !== -1) {

                RemovePooledFromGame(entity, this.game);
                this._pooledEntities.eraseAt(index);
                this._pool.push(entity);
                return true;
            } else {
                return false;
            }

           
        /*} else {
            console.warn("Pool.push: Could not push the entity back to the pool. The entity is not entity of type: " + this._baseEntity.name);
            return false;
        }*/
    }

    remove(entity) {
        let index = this._pooledEntities.indexOf(entity);

        if (index > -1) {
            this._pooledEntities.eraseAt(index);
            return true;
        }

        return false;
    }
    
    clear() {
        this._pool.clear();
        this._pooledEntities.clear();
        return this;
    }

    backAll() {
        for (let i = 0; i < this._pooledEntities.length; i++) {

            let entity = this._pooledEntities.at(i);
            RemoveEntityFromGame(entity, this.game);
            this._pool.push(entity);
        }

        this._pooledEntities.childs.length = 0;
        return this;
    }
}