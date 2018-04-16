

import MathUtils from './MathUtils';

/**
* Class for points and vectors.
* @class Vector
* @constructor
*/
export default class Vector {
  
  constructor(x,y, managed) {

    this.x = x || 0;
    this.y = y || 0;
    this.managed = managed || undefined;
  }

  /*
  set x(value) {
    this.x = value;
    return this.x;
  }
  get x() {return this.x;}
  set y(value) {
    this.y = value;
    return this.y;
  }
  get y() {return this.y;}*/

  set(x,y) {

    this.x = x;
    this.y = y || x

    if (this.managed !== undefined)
      this.managed.markDirty();

    return this;
  }

  move(x,y) {

    this.x += x;
    this.y += y;

    if (this.managed !== undefined)
      this.managed.markDirty();

    return this;

  }

  scale(x, y) {

    this.x *= x;
    this.y *= y || x;

    if (this.managed !== undefined)
      this.managed.markDirty();

    return this;

  }

  rotate(radians) {

    let x = this.x;
    let y = this.y;
    this.x = x * Math.cos(radians) - y * Math.sin(radians);
    this.y = x * Math.sin(radians) + y * Math.cos(radians);

    if (this.managed !== undefined)
      this.managed.markDirty();

    return this;

  }

  rotateAround(radians, other) {

    /*var x = this.x;
    var y = this.y;*/
    let dx = this.x-other.x;
    let dy = this.y-other.y;

    let c = Math.cos(radians);
    let s = Math.sin(radians);

    /*this.x = c * (x-other.x) - s * (y-other.y) + other.x;
    this.y = s * (x-other.x) + c * (y-other.y) + other.y;*/


    this.x =  other.x + (c * dx - s * dy);
    this.y =  other.y + (s * dx + c * dy);

    if (this.managed !== undefined)
      this.managed.markDirty();

    return this;

  }

  copy(otherVector) {

    this.x = otherVector.x;
    this.y = otherVector.y;

    if (this.managed !== undefined)
      this.managed.markDirty();

    return this;

  }

  normalize() {

    let mag = this.length();
    if (mag > 0) {
      this.x = this.x / mag;
      this.y = this.y / mag;
    }

    if (this.managed !== undefined)
      this.managed.markDirty();

    return this;

  }

  round() {
    this.x = MathUtils.round(this.x);
    this.y = MathUtils.round(this.y);
    return this;
  }

  reverse() {
    this.x = -this.x;
    this.y = -this.y;

    if (this.managed !== undefined)
      this.managed.markDirty();

    return this;
  }

  add(other) {
    this.x += other.x;
    this.y += other.y;

    if (this.managed !== undefined)
      this.managed.markDirty();

    return this;
  }

  sub(other) {
    this.x -= other.x;
    this.y -= other.y;

    if (this.managed !== undefined)
      this.managed.markDirty();

    return this;
  }

  perp() {

    let x = this.x;
    this.x = this.y;
    this.y = -x;

    if (this.managed !== undefined)
      this.managed.markDirty();

    return this;
  }

  

  dot(other) {
    return Vector.dot(this,other);
  }

  project(other) {
    return Vector.project(this,other);
  }

  clone() {
    return new Vector(this.x,this.y);
  }

  length() {
    return Math.sqrt(this.squaredLenght());
  }

  toString() {
    return "{ x: " + this.x + ", y: " + this.y + " }"
  }

  squaredLenght() {
    return Vector.dot(this,this);
  }

  static abs(vector) {
    return new Vector(Math.abs(vector.x), Math.abs(vector.y));
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

  get magnitude() {return Math.sqrt((this.x * this.x) + (this.y * this.y));}
  get normal() {
    let mag = this.magnitude;
    let vec = new Vector(this.x / mag,this.y / mag);
    return vec;
  }

}

module.exports = Vector;