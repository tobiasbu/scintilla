import DataList from "../../structures/List";

export default class Pool {
    
    constructor(name, baseEntity) {

        this.name = name || 'Entity Pool';
        this._baseEntity = entity;
        this._pool = new DataList();
        this._pooledEntities = new DataList();
    }

    get length() {
        return this._pool.size;
    }

    add(count) {

        return this;
    }

    pull() {
        if (this._pool.size === 0) 
            return null;
        
        let pooled = this._pool.pop();
        this._pooledEntities.push(pooled);
        return pooled;
    }

    push(entity) {

    }
    
    clear() {
        this._pool.clear();
        return this;
    }

    backAll() {

    }
}