import System from '../core/system/System';
import BoundingBox from '../math/BoundingBox';
import Transform  from '../transform/Transform';
import Color from '../render/color/Color';
import MathUtils from '../math/MathUtils';
import Vector from '../math/Vector';
import ResizeCamera from './ResizeCamera';
import Renderable from '../modules/renderables/Renderable';


export default class Camera {
  
  constructor(game) {

    this.game = game;
    this.canvas = null;

   
    this.width = game.config.camera.width;
    this.height = game.config.camera.height;


    this.bounds = new BoundingBox(); // render bounds
    this.viewBounds = new BoundingBox(0,0, this.width, this.height); // global bounds
    this._transform = new Transform();
   
    this._pixelUnit = {x:1,y:1};    
    this._aspectRatio = 1;

    this._backgroundColor = new Color(); //.rgbToHex(0,0,0);
    this._roundPixels = game.config.roundPixels;

  }

  get position() { 
    return { 
      x : this._transform.position.x, 
      y : this._transform.position.y
    }; 
  }
  set position(value) { 
    this._transform.position.x = value.x;
    this._transform.position.y = value.y; 
    this._transform._isDirty = true;
    return this;
  }
  get x() {return this._transform.position.x;}
  set x(value) { 
    this._transform.position.x = value; 
    this._transform._isDirty = true;
    return this;
  }
  
  get y() {return this._transform.position.y;}
  set y(value) { 
    this._transform.position.y = value; 
    this._transform._isDirty = true;
    return this;
  }

  get scale() { return this._transform.scale.x; }
  set scale(value) { 
    this._transform.scale.x = value; 
    this._transform._isDirty = true; 
    return this;
  }

  get angle() { return this._transform.angle; }
  set angle(value) { 
    this._transform.angle = value; 
    this._transform.rotation = value * MathUtils.toRadian;
    this._transform._isDirty = true;
    return this;
  }

  get origin() { return this._transform.origin; }
  set origin(value) {
    this._transform.x = value.x;
    this._transform.y = value.y;
    this._transform._isDirty = true;
    return this;
  }

  get rotation() { return this._transform.rotation; }

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
    this._transform._isDirty = true;
    return this;
  }

  get roundPixels() {
    return this._roundPixels;
  }

  get size() {
    return {x:this.width, y:this.height};
  }

  centerView() {
    this.x = this.width * 0.5;
    this.y = this.height * 0.5;
    this._transform._isDirty = true;
    return this;
  }

  centerToEntity(entity) {
    this.x = entity.position.x;
    this.y = entity.position.y;
    this._transform._isDirty = true;
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
    ResizeCamera(this, this.canvas, width, height);
    this._transform._isDirty = true;
    return this;
  }

  setView(x, y, width, height) {
    this._transform.position.x = x;
    this._transform.position.y = y;
    ResizeCamera(width, height);
    this._transform._isDirty = true;
    return this;
  }

  reset() {
    this._transform.reset();
  }

  isCulled(entity) {

      if (entity === undefined || entity === null)
        return false;

      if (entity instanceof Renderable) {
        return this.bounds.intersects(entity.bounds);
      } else {
        let render = entity.modules.get('render');
        if (render !== null || render !== undefined) {
          return this.bounds.intersects(render.bounds);
        } else {
          return this.bounds.contains(entity.x, entity.y);
        }
      }

  }

}

System.register('Camera', Camera, 'camera', function() {
  this.canvas = this.game.system.render.canvas;
  ResizeCamera(this, this.canvas, this.width, this.height);
});