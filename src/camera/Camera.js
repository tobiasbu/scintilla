import System from '../core/system/System';
import BoundingBox from '../math/BoundingBox';
import Transform  from '../transform/Transform';
import Color from '../utils/Color'
import MathUtils from '../math/MathUtils'
import Vector from '../math/Vector'
import ResizeCamera from './ResizeCamera';


export default class Camera {
  
  constructor(game) {

    this.game = game;
    this.canvas = null;

   
    this.width = game.config.camera.width;
    this.height = game.config.camera.height;


    this.bounds = new BoundingBox(); // render bounds
    this.viewBounds = new BoundingBox(0,0, this.width, this.height); // global bounds
    this.transform = new Transform();
   
    
    //this.transform.origin.set(0.5,0.5)
    //this.centerView();
    // this._resolution = 1;
    this._pixelUnit = {x:1,y:1};    
    this._aspectRatio = 1;

    this._backgroundColor = Color.rgbToHex(0,0,0);
    this._roundPixels = game.config.roundPixels;

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
    this.transform._isDirty = true;
    return this;
  }
  get x() {return this.transform.position.x;}
  set x(value) { 
    this.transform.position.x = value; 
    this.transform._isDirty = true;
    return this;
  }
  
  get y() {return this.transform.position.y;}
  set y(value) { 
    this.transform.position.y = value; 
    this.transform._isDirty = true;
    return this;
  }

  get scale() { return this.transform.scale.x; }
  set scale(value) { 
    this.transform.scale.x = value; 
    this.transform._isDirty = true; 
    return this;
  }

  get angle() { return this.transform.angle; }
  set angle(value) { 
    this.transform.angle = value; 
    this.transform.rotation = value * MathUtils.degToRad;
    this.transform._isDirty = true;
    return this;
  }

  get origin() { return this.transform.origin; }
  set origin(value) {
    this.transform.x = value.x;
    this.transform.y = value.y;
    this.transform._isDirty = true;
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
    this.transform._isDirty = true;
    return this;
  }
  get size() {
    return {x:this.width, y:this.height};
  }

  centerView() {
    this.x = this.width * 0.5;
    this.y = this.height * 0.5;
    this.transform._isDirty = true;
    return this;
  }

  centerToEntity(entity) {
    this.x = entity.position.x;
    this.y = entity.position.y;
    this.transform._isDirty = true;
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
    this.transform._isDirty = true;
    return this;
  }

  setView(x, y, width, height) {
    this.transform.position.x = x;
    this.transform.position.y = y;
    ResizeCamera(width, height);
    this.transform._isDirty = true;
    return this;
  }

  reset() {
    this.transform.reset();
  }

}

System.register('Camera', Camera, 'camera', function() {
  this.canvas = this.game.system.render.canvas;
  ResizeCamera(this, this.canvas, this.width, this.height);
});