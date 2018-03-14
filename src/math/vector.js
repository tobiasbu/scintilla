

import MathUtils from './mathutils'

/**
* Class for points and vectors.
* @class Vector
* @constructor
*/
export default class Vector {
  
  constructor(x,y) {

    this._x = x || 0;
    this._y = y || 0;
  }

  set x(value) {
    this._x = value;
    return this._x;
  }
  get x() {return this._x;}
  set y(value) {
    this._y = value;
    return this._y;
  }
  get y() {return this._y;}

  set(x,y) {

    this._x = x;
    this._y = y || x

  }

  move(x,y) {

    this._x += x;
    this._y += y;

  }

  scale(x, y) {

    this._x *= x;
    this._y *= y || x;
    return this;

  }

  rotate(radians) {

    let x = this._x;
    let y = this._y;
    this._x = x * Math.cos(radians) - y * Math.sin(radians);
    this._y = x * Math.sin(radians) + y * Math.cos(radians);
    return this;

  }

  rotateAround(radians, other) {

    /*var x = this._x;
    var y = this._y;*/
    let dx = this._x-other.x;
    let dy = this._y-other.y;

    let c = Math.cos(radians);
    let s = Math.sin(radians);

    /*this._x = c * (x-other.x) - s * (y-other.y) + other.x;
    this._y = s * (x-other.x) + c * (y-other.y) + other.y;*/


    this._x =  other.x + (c * dx - s * dy);
    this._y =  other.y + (s * dx + c * dy);

    return this;

  }

  copy(otherVector) {

    this._x = otherVector.x;
    this._y = otherVector.y;
    return this;

  }

  normalize() {

    let mag = this.length();
    if (mag > 0) {
      this._x = this._x / mag;
      this._y = this._y / mag;
    }
    return this;

  }

  reverse() {
    this._x = -this._x;
    this._y = -this._y;
    return this;
  }

  add(other) {
    this._x += other.x;
    this._y += other.y;
    return this;
  }

  sub(other) {
    this._x -= other.x;
    this._y -= other.y;
    return this;
  }

  perp() {

    let x = this._x;
    this._x = this._y;
    this._y = -x;
    return this;
  }

  dot(other) {
    return Vector.dot(this,other);
  }

  project(other) {
    return Vector.project(this,other);
  }

  clone() {
    return new Vector(this._x,this._y);
  }

  length() {
    return Math.sqrt(this.squaredLenght());
  }

  squaredLenght() {
    return Vector.dot(this,this);
  }

  static scalar(a, b) {
    return a.x * b.y - a.y * b.x;
  }

  static distance(a, b) {
    return MathUtils.distance(a.x,a.y,b.x,b.y);
  }

  static angleBetween(a, b) {
    return MathUtils.angleBetween(a.x,a.y,b.x,b.y);
  }

  static dot(a, b) {
    return (a.x * b.x) + (a.y * b.y);
  }

  static project(a,b) {
    let dp = Vector.dot(a,b);
    var proj = new Vector(
      ( dp / (b.x*b.x + b.y*b.y) ) * b.x,
      ( dp / (b.x*b.x + b.y*b.y) ) * b.y
    );
    return proj;
  };

  // project for unit vector
  static projectNormal(a,b) {
    let dp = Vector.dot(a,b);
    let proj = new Vector(   dp / b.x,   dp / b.y );
    return proj;
  };

  static reflect(vec,axis) {

    let r = Vector.project(vec,axis);
    r.scale(2);
    r.sub(vec);
    return r;

  };

  static reflectNormal(vec,axis) {

    let r = Vector.projectNormal(vec,axis);
    r.scale(2);
    r.sub(vec);
    return r;

  };


  static lerp(a, b, t) {
    let vec = new Vector(
      MathUtils.lerp(a.x,b.x,t),
      MathUtils.lerp(a.y,b.y,t)
    );
    return vec;
  }

  get magnitude() {return Math.sqrt((this._x * this._x) + (this._y * this._y));}
  get normal() {
    let mag = this.magnitude;
    let vec = new tobiJS.Vector(this._x / mag,this._y / mag);
    return vec;
  }

}
