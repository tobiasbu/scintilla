import Module from "../Module";
import DataMap from '../../structures/Map';

export default class AnimationMachine extends Module {

    constructor(moduleManager) {

        super('animation','animMachine', moduleManager);

        this.animations = new DataMap();
    }

    setFrame(index, resetTimer) {

        if (resetTimer === undefined) resetTimer = true;
    
        if (index >= this._currentAnimObj.length)
          index = this._currentAnimObj.length - 1
        else if (index < 0)
          index = 0;
    
        this.currentFrame = index;
    
        // set in sprite
    
        this._gameObject.component['render'].setFrameRect(this._currentAnimObj.getFrame(this.currentFrame));
        this._gameObject.component['render'].setImage(this._currentAnimObj.source);
    
    
        if (resetTimer)
          this._timer = 0;
    
      }
    
      setSpeed(time) {
    
        this.frameSpeed = time;
    
      }

    add(name, image) {

        return this.animations[name] = new scintilla.Animation(name, image);
      }
    
      addFromCache(container, name) {
    
        var anim = this.game.animationCache.get(container, name);
    
        if (anim) {
    
          this.animations[name] = anim;
    
          if (this.currentAnimation == null) {
            this.setState(name);
          }
    
          return anim;
        } else
          return null;
    
    
      }
    
    
      remove(name) {
    
        if (this.animations[name])
          delete this.animations[name];
    
    
      }
    
      setState(name) {
    
        if (this.animations[name]) {
          this.currentAnimation = name;
          this._currentAnimObj = this.animations[name];
          this.setFrame(0, true);
        }
    
    
    
      }

}