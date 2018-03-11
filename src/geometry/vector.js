

/**
* Class for points and vectors.
* @class Vector
* @constructor
*/
scintilla.Vector = function(x,y) {

  this.x = x || 0;
  this.y = y || 0;

}

scintilla.Vector.prototype = {

set : function(x,y) {

  this.x = x;
  this.y = y || x

},

move : function(x,y) {

  this.x += x;
  this.y += y;

},

scale : function(x, y) {

  this.x *= x;
  this.y *= y || x;
  return this;

},

rotate : function(radians) {

  var x = this.x;
  var y = this.y;
  this.x = x * Math.cos(radians) - y * Math.sin(radians);
  this.y = x * Math.sin(radians) + y * Math.cos(radians);
  return this;

},

rotateAround : function(radians, other) {

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

},

copy : function(other) {

  this.x = other.x;
  this.y = other.y;
  return this;

},

normalize : function() {

  var mag = this.length();
  if (mag > 0) {
    this.x = this.x / mag;
    this.y = this.y / mag;
  }
  return this;

},

reverse : function() {
  this.x = -this.x;
  this.y = -this.y;
  return this;
},

add : function(other) {

  this.x += other.x;
  this.y += other.y;
  return this;

},

sub : function(other) {

  this.x -= other.x;
  this.y -= other.y;
  return this;

},

perp : function() {

  var x = this.x;
  this.x = this.y;
  this.y = -x;
  return this;

},

dot : function(other) {

  return scintilla.Vector.dot(this,other);

},

project : function(other) {

  return scintilla.Vector.project(this,other);

},

clone : function() {

  return new scintilla.Vector(this.x,this.y);

},

length : function() {

  return Math.sqrt(this.squaredLenght());

},

squaredLenght : function() {

  return scintilla.Vector.dot(this,this);

},



}

scintilla.Vector.prototype.constructor = scintilla.Vector;

// static functions

scintilla.Vector.scalar = function(a, b) {

   return a.x * b.y - a.y * b.x;

};

scintilla.Vector.distance = function(a, b) {

  return scintilla.Math.distance(a.x,a.y,b.x,b.y);

};

scintilla.Vector.angleBetween = function(a, b) {

  return scintilla.Math.angleBetween(a.x,a.y,b.x,b.y);

};

scintilla.Vector.dot = function(a, b) {

  return (a.x * b.x) + (a.y * b.y);

};

scintilla.Vector.project = function(a,b) {

  var dp = scintilla.Vector.dot(a,b);
  var proj = new scintilla.Vector(
   ( dp / (b.x*b.x + b.y*b.y) ) * b.x,
   ( dp / (b.x*b.x + b.y*b.y) ) * b.y
 );
 return proj;


};

// project for unit vector
scintilla.Vector.projectNormal = function(a,b) {

  var dp = scintilla.Vector.dot(a,b);
  var proj = new scintilla.Vector(   dp / b.x,   dp / b.y );
 return proj;

};

scintilla.Vector.reflect = function(vec,axis) {

  var r = scintilla.Vector.project(vec,axis);
  r.scale(2);
  r.sub(vec);
  return r;

};

scintilla.Vector.reflectNormal = function(vec,axis) {

  var r = scintilla.Vector.projectNormal(vec,axis);
  r.scale(2);
  r.sub(vec);
  return r;


};


scintilla.Vector.lerp = function(a, b, t) {

  var vec = new scintilla.Vector(
    scintilla.Math.lerp(a.x,b.x,t),
    scintilla.Math.lerp(a.y,b.y,t)
  );

  return vec;
}



Object.defineProperty(scintilla.Vector.prototype, "magnitude", {

get : function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
}

});

Object.defineProperty(scintilla.Vector.prototype, "normal", {

get : function() {
  var mag = this.magnitude;
  var vec = new tobiJS.Vector(this.x / mag,this.y / mag);
  return vec;
}

});
