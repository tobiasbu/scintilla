import ImageResource from "./resources/imageResource";
import GameSystemManager from "../core/gameSystemManager";
import TilemapResource from "./resources/tilemapResource";

/**
* Cache manager - holds file data
* @class Cache
* @constructor
*/
export default class CacheManager {

constructor(game) {
  this.game = game;
  this._cache = {
      images : {},
      sounds : {},
      json : {},
      tilemap : {}
  }
}

  addTilemap(tag, dataFormat) {
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

  }

  tagExists(cacheType, tag) {

    if (this._cache[cacheType] === undefined)
      return false;

    if (this._cache[cacheType][tag])
      return true;

    return false;

  }

  removeTagAt(cacheType, tag) {

    delete this._cache[cacheType][tag];

  }

  getAsset(cacheType, tag) { // return the cache container

    if (this.tagExists(cacheType,tag)) {

      var asset = this._cache[cacheType][tag];

        return asset;


    } else {
      return null;
    }

  }

  getAssetInfo(cacheType, tag) { // return the raw data

    if (this.tagExists(cacheType,tag)) {

      var asset = this._cache[cacheType][tag];

      //if (cacheType == 'images')
        return asset;


    } else {
      return null;
    }

  }

  clear() {

    //console.log(this._cache[property][tag]);

    for (var property in this._cache) {

         for (var tag in this._cache[property]) {

            delete this._cache[property][tag];

         }
    }

  }

  // SOUND STUFF

}

GameSystemManager.register('Cache', CacheManager, 'cache');