
/**
* Cache manager - holds file data
* @class Cache
* @constructor
*/
tobi.Cache = function(game) {

this.game = game;
this._cache = {
    images : {},
    sounds : {}
};

}

tobi.Cache.prototype = {

  addImage : function (tag, url, data) {

    if (this.tagExists('images',tag)) {

      this.removeTagAt('images',tag);

    }

    var img = {
            tag: tag,
            url: url,
            data: data,
    };

    console.log(data);

    this._cache.images[tag] = img;

  },

  addSound : function(tag, url,data,webAudio) {

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

  },

  soundDecoded : function(tag, data) {

    var sound = this.getAssetInfo("sounds",tag);

    sound.data = data;
    sound.decoded = true;
    sound.isDecoding = false;

  },

  tagExists : function(cacheType, tag) {

    if (this._cache[cacheType][tag])
      return true;

    return false;

  },

  removeTagAt : function(cacheType, tag) {

    delete this._cache[cacheType][tag];

  },

  getAsset : function(cacheType, tag) { // return the cache container

    if (this.tagExists(cacheType,tag)) {

      var asset = this._cache[cacheType][tag];

        return asset.data;


    } else {
      return null;
    }

  },

  getAssetInfo : function(cacheType, tag) { // return the raw data

    if (this.tagExists(cacheType,tag)) {

      var asset = this._cache[cacheType][tag];

      //if (cacheType == 'images')
        return asset;


    } else {
      return null;
    }

  },

  clear : function() {

    //console.log(this._cache[property][tag]);

    for (var property in this._cache) {

         for (var tag in this._cache[property]) {

            delete this._cache[property][tag];

         }
    }

  }

  // SOUND STUFF

}
