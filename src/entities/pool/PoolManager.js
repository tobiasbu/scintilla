import DataMap from "../../structures/Map";
import Pool from "./Pool";
import System from "../../core/system/System";

export default class PoolManager {

  constructor(game) {

    this._poolsMap = new DataMap();
    this.game = game;

  }


  get(pool) {
    return this._poolsMap.get(pool);
  }

  // create objects pool
  create(poolName, entityBase, size) {

    if (entityBase === undefined || entityBase === null) return null;
    if (size === undefined) size = 1;

    if (this._poolsMap.has(poolName)) {
      console.warn('PoolManager.create: Could not create pool named \'' + poolName + '\'. There is already a pool registered with this name.');
      return null;
    }

    let pool = new Pool(this.game, poolName, entityBase, size);
    this._poolsMap.set(poolName, pool);

    return pool;

  }

  // get a obj
  pull(poolName) {

    let pool = this._poolsMap.get(poolName);

    if (pool !== null && pool !== undefined) {
      return pool.pull();
    } else {
      console.warn("PoolManager.pull: The specified pool container don't exists: " + poolName);
      return null;
    }

  }

  push(entity) {

    if (entity.pool !== null) {

      let pool = this._poolsMap.get(entity._pool);
      if (pool !== null && pool !== undefined) {
        pool.push(entity);
        return true;
      }
    }

    return false;

  }


  clearAll() {

    this._poolsMap.each((key, value) => {
      value.clear();
    });

    return this;

  }


}

System.register('PoolManager', PoolManager, 'pool');
