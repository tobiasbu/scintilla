
import BoundingBox from '../math/boundingbox';
import Transform  from '../modules/core/transform';
import Color from '../utils/color'
import GameSystemManager from '../core/gameSystemManager';
import MathUtils from '../math/mathutils'

export default class Camera {
  
  constructor(game) {

    this.game = game;
    //this._view = new Rect(0, 0, game.config.width, game.config.height);
    this._bounds = new BoundingBox();
    this.transform = new Transform();
    this.width = game.config.width;
    this.height = game.config.height;
    this.transform.origin.set(0.5,0.5)
    this._resolution = 1;

    this._backgroundColor = Color.rgbToHex(0,0,0);
    this._roundPixels = false;

  }

  get position() { 
    return { 
      x : this.transform.position.x, 
      y : this.transform.position.y
    }; 
  }
  set position(value) { 
    this.transform.position.x = value.x;
    this.transform.position.y = value.y; 
    this._isDirty = true;
    return this;
  }
  get x() {return this.transform.position.x;}
  set x(value) { 
    this.transform.position.x = value; 
    this._isDirty = true;
    return this;
  }
  
  get y() {return this.transform.position.y;}
  set y(value) { 
    this.transform.position.y = value; 
    this._isDirty = true;
    return this;
  }

  get scale() { return this.transform.scale.x; }
  set scale(value) { 
    this.transform.scale.x = value; 
    this._isDirty = true; 
    return this;
  }

  get angle() { return this.transform.angle; }
  set angle(value) { 
    this.transform.angle = value; 
    this.transform.rotation = value * MathUtils.degToRad;
    this._isDirty = true;
    return this;
  }

  get origin() { return this.transform.origin; }
  set origin(value) {
    this.transform.origin.x = value.x;
    this.transform.origin.y = value.y;
    this._isDirty = true;
    return this;
  }

  get rotation() { return this.transform.rotation; }

  set backgroundColor(color) {
    if (color === undefined) { color = 'rgba(0,0,0,0)'; }
    this._backgroundColor = color;
    return this;
  }
  get backgroundColor() {
    return this._backgroundColor = color;
  }

  set roundPixels(flag) {
    this._roundPixels = flag;
    this._isDirty = true;
    return this;
  }
  get size() {
    return {x:this._view.width, y:this._view.height};
  }

  centerView() {
    this.x = this.width * 0.5;
    this.y = this.height * 0.5;
    this._isDirty = true;
    return this;
  }

  centerToEntity(entity) {
    this.x = entity.position.x;
    this.y = entity.position.y;
    this._isDirty = true;
    return this;
  }

  setBackgroundColor(r, g, b, a) {
    if (r === undefined) { g = 0; }
    if (g === undefined) { g = 0; }
    if (b === undefined) { b = 0; }
    if (a === undefined) { a = 1; }
    this._backgroundColor = Color.rgba(r,g,b,a);
    return this;
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
    this._isDirty = true;
    return this;
  }

  setView(x, y, width, height) {
    this.transform.position.x = x;
    this.transform.position.y = y;
    this.width = width;
    this.height = height;
    this._isDirty = true;
    return this;
  }

  reset() {
    this.transform.reset();
  }

}

GameSystemManager.register('Camera', Camera, 'camera');