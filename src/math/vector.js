

/**
* Class for points and vectors.
* @class Vector
* @constructor
*/
export default class Vector {
  
  constructor(x,y) {

    this.x = x || 0;
    this.y = y || 0;
  }

  set(x,y) {

    this.x = x;
    this.y = y || x

  }

  move(x,y) {

    this.x += x;
    this.y += y;

  }

  scale(x, y) {

    this.x *= x;
    this.y *= y || x;
    return this;

  }

  rotate(radians) {

    var x = this.x;
    var y = this.y;
    this.x = x * Math.cos(radians) - y * Math.sin(radians);
    this.y = x * Math.sin(radians) + y * Math.cos(radians);
    return this;

  }

  rotateAround(radians, other) {

    /*var x = this.x;
    var y = this.y;*/
    var dx = this.x-other.x;
    var dy = this.y-other.y;

    var c = Math.cos(radians);
    var s = Math.sin(radians);

    /*this.x = c * (x-other.x) - s * (y-other.y) + other.x;
    this.y = s * (x-other.x) + c * (y-other.y) + other.y;*/


    this.x =  other.x + (c * dx - s * dy);
    this.y =  other.y + (s * dx + c * dy);

    return this;

  }

  copy(otherVector) {

    this.x = otherVector.x;
    this.y = otherVector.y;
    return this;

  }

  normalize() {

    var mag = this.length();
    if (mag > 0) {
      this.x = this.x / mag;
      this.y = this.y / mag;
    }
    return this;

  }

  reverse() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }

  add(other) {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  sub(other) {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  perp() {

    var x = this.x;
    this.x = this.y;
    this.y = -x;
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

  squaredLenght() {
    return Vector.dot(this,this);
  }

  static scalar(a, b) {
    return a.x * b.y - a.y * b.x;
  }

  static distance(a, b) {
    return Math.distance(a.x,a.y,b.x,b.y);
  }

  static angleBetween(a, b) {
    return Math.angleBetween(a.x,a.y,b.x,b.y);
  }

  static dot(a, b) {
    return (a.x * b.x) + (a.y * b.y);
  }

  static project(a,b) {
    var dp = Vector.dot(a,b);
    var proj = new Vector(
      ( dp / (b.x*b.x + b.y*b.y) ) * b.x,
      ( dp / (b.x*b.x + b.y*b.y) ) * b.y
    );
    return proj;
  };

  // project for unit vector
  static projectNormal(a,b) {
    var dp = Vector.dot(a,b);
    var proj = new Vector(   dp / b.x,   dp / b.y );
    return proj;
  };

  static reflect(vec,axis) {

    var r = Vector.project(vec,axis);
    r.scale(2);
    r.sub(vec);
    return r;

  };

  static reflectNormal(vec,axis) {

    var r = Vector.projectNormal(vec,axis);
    r.scale(2);
    r.sub(vec);
    return r;

  };


  static lerp(a, b, t) {
    var vec = new Vector(
      scintilla.Math.lerp(a.x,b.x,t),
      scintilla.Math.lerp(a.y,b.y,t)
    );
    return vec;
  }

  get magnitude() {return Math.sqrt((this.x * this.x) + (this.y * this.y));}
  get normal() {
    var mag = this.magnitude;
    var vec = new tobiJS.Vector(this.x / mag,this.y / mag);
    return vec;
  }

}
