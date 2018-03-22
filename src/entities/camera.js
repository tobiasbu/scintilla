
import Rect from '../math/rect'
import Vector from '../math/vector'
import Matrix from '../math/matrix'
import BoundingBox from '../math/boundingbox';
import Color from '../utils/color'
import UpdateBounds from '../modules/core/updateBounds';
import GameSystemManager from '../core/gameSystemManager';

export default class Camera {
  
  constructor(game, width, height) {

    this.game = game;
    this._view = new Rect(0,0, width, height);
    this._bounds = new BoundingBox();
    this._matrix = new Matrix(1);
    this._rotation = 0;
    this._oldRotation = 0;
    this._isDirty = true;
    this._angle = 0;
    this._cosSin = {x:0, y:0};
    this._scale = 1;
    this._resolution = 1;

    this._backgroundColor = Color.rgbToHex(0,0,0);
    this._roundPixels = false;

  }

  get position() { return {x : this._x, y : this._y}; }
  set position(value) { 
    this._view.x = value.x;
    this._view.y = value.y; 
    this._isDirty = true;
    return this;
  }
  set x(value) { 
    this._view.x = value; 
    this._isDirty = true;
    return this;
  }
  set y(value) { 
    this._view.y = value; 
    this._isDirty = true;
    return this;
  }

  get scale() { return this._zoom; }
  set scale(value) { 
    this._zoom = value; 
    this._isDirty = true; 
    return this;
  }

  get angle() { return this._angle; }
  set angle(value) { 
    this._angle = value; 
    this._rotation = value * MathUtils.degToRad;
    this._isDirty = true;
    return this;
  }

  get rotation() { return this._rotation; }

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
    this._x = this.width * 0.5;
    this._y = this.height * 0.5;
    this._isDirty = true;
    return this;
  }

  centerToEntity(entity) {
    this._x = entity.position.x;
    this._y = entity.position.y;
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
    this._view.width = width;
    this._view.height = height;
    this._isDirty = true;
    return this;
  }

  setView(x, y, width, height) {
    this._view.x = x;
    this._view.y = y;
    this._view.width = width;
    this._view.height = height;
    this._isDirty = true;
    return this;
  }

  update() {

    if (!this._isDirty)
      return;

    if (this.roundPixels) {
      this._view.x = Math.round(this._view.x);
      this._view.y = Math.round(this._view.y);
    }

    if (this._rotation !== this._oldRotation) {
      this._oldRotation = this.rotation;
      this._cosSin.y = Math.sin(this.rotation);
      this._cosSin.x = Math.cos(this.rotation);
    }

    UpdateBounds(this._bounds, this._view, this.rotation);

    // todo resolution
    this._matrix.setIdentity()
    .scale(this._zoom, this._zoom)
    .translate(this._x, this._y)
    .radianRotate(this._cosSin.x, this._cosSin.y);

    

    this._isDirty = false;

  }

  reset() {
    this._view.x = 0;
    this._view.y = 0;
    this._angle = 0;
    this._scale = 1;    
    this._cosSin.x = 0;
    this._cosSin.y = 0;
    this._scale = 1;
    this._resolution = 1;
    this._isDirty = true;
  }

}

GameSystemManager.register('Camera', Camera, 'camera');