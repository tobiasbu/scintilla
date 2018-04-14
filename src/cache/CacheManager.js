import System from "../core/system/System";
import Cache from "./Cache";
import ImageResource from "../resources/ImageResource";
import TilemapResource from "../resources/tilemap/TilemapResource";
import SpritesheetResource from "../resources/animation/SpritesheetResource";
import AnimationMachineResource from "../resources/animation/AnimationMachineResource";
import AssetsType from "../loader/AssetsType";


const CacheTypes = [
  'image',
  'json',
  'audio',
  'text',
  'tilemap',
  'animation',
  'animMachine'
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
  this.audio = new Cache();
  this.animation = new Cache((tag, data) => {

    let resource;

    if (data.type ===  AssetsType.spritesheet) {
      let image = self.image.get(data.imageTag);

      resource = new SpritesheetResource(tag, image);
      resource.addStrip(data.x, data.y, data.frameWidth, data.frameHeight, data.numberOfImages, data.framesPerRow, data.spacing);
    }

    return resource;

  });

  this.animMachine = new Cache((tag, data) => {
    
    let resource = new AnimationMachineResource(tag);

    if (data.animations !== undefined) {

        for (let i = 0; i < data.animations.length; i++) {

            let anim = self.animation.get(data.animations[i]);
            resource.add(data.animations[i], anim);          
        }
    }

    return resource;

  });  


}


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

}

System.register('Cache', CacheManager, 'cache');