import GameSystemManager from "../core/GameSystemManager";
import ImageResource from "../resources/ImageResource";
import TilemapResource from "../resources/tilemapResource";
import Cache from "./Cache";

const CacheTypes = [
  'image',
  'json',
  'audio',
  'text',
  'tilemap',
];

/**
* Cache manager - holds file data
* @class Cache
* @constructor
*/
export default class CacheManager {

constructor(game) {
  this.game = game;


  let self = this;

  this.image = new Cache((tag, data) => {
    return new ImageResource(tag, data)
  });
  
  this.tilemap = new Cache((tag, data) => {
    return new TilemapResource(tag, data, self);
  });

  this.json = new Cache();
  this.text = new Cache();


}

  /*addTilemap(tag, dataFormat) {
    this._cache.tilemap[tag] = new TilemapResource(dataFormat, tag, this);
  }

  addJSON(tag, dataFormat) {
    this._cache.json[tag] = dataFormat;
  }

  addImage(tag, url, data) {

    if (this.tagExists('images',tag))
      this.removeTagAt('images',tag);

    
    var img = new ImageResource(data,tag)

    this._cache.images[tag] = img;

  }

  addSound(tag, url,data,webAudio) {

    var decoded = false;

    if (!webAudio)
    {
        decoded = true;
    }

    var audio = {
            tag: tag,
            url: url,
            data: data,
            usingWebAudio: webAudio,
            decoded: decoded,
            isDecoding: false
    };

    this._cache.sounds[tag] = audio;

  }

  soundDecoded(tag, data) {

    var sound = this.getAssetInfo("sounds",tag);

    sound.data = data;
    sound.decoded = true;
    sound.isDecoding = false;

  }*/

  hasCache(cacheType) {
    return (typeof CacheTypes[cacheType] !== undefined);
  }

  getAsset(cacheType, tag) { // return the cache container

    if (!this.hasCache(cacheType))
      return null;

    return this[cacheType].get(tag);

  }

  clear() {

    for (let i = 0; i < CacheTypes.length; i++) {
      this[props[i]].clear();
    }

  }

  destroy() {

    for (let i = 0; i < CacheTypes.length; i++) {
      this[props[i]].destroy();
      this[props[i]] = null;
    }

    this.game = null;
  }

  // SOUND STUFF

}

GameSystemManager.register('Cache', CacheManager, 'cache');