

/**
* Class for points and vectors.
* @class Vector
* @constructor
*/
Scintilla.Vector = function(x,y) {

  this.x = x || 0;
  this.y = y || 0;

}

Scintilla.Vector.prototype = {

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

  return Scintilla.Vector.dot(this,other);

},

project : function(other) {

  return Scintilla.Vector.project(this,other);

},

clone : function() {

  return new Scintilla.Vector(this.x,this.y);

},

length : function() {

  return Math.sqrt(this.squaredLenght());

},

squaredLenght : function() {

  return Scintilla.Vector.dot(this,this);

},



}

Scintilla.Vector.prototype.constructor = Scintilla.Vector;

// static functions

Scintilla.Vector.scalar = function(a, b) {

   return a.x * b.y - a.y * b.x;

};

Scintilla.Vector.distance = function(a, b) {

  return Scintilla.Math.distance(a.x,a.y,b.x,b.y);

};

Scintilla.Vector.angleBetween = function(a, b) {

  return Scintilla.Math.angleBetween(a.x,a.y,b.x,b.y);

};

Scintilla.Vector.dot = function(a, b) {

  return (a.x * b.x) + (a.y * b.y);

};

Scintilla.Vector.project = function(a,b) {

  var dp = Scintilla.Vector.dot(a,b);
  var proj = new Scintilla.Vector(
   ( dp / (b.x*b.x + b.y*b.y) ) * b.x,
   ( dp / (b.x*b.x + b.y*b.y) ) * b.y
 );
 return proj;


};

// project for unit vector
Scintilla.Vector.projectNormal = function(a,b) {

  var dp = Scintilla.Vector.dot(a,b);
  var proj = new Scintilla.Vector(   dp / b.x,   dp / b.y );
 return proj;

};

Scintilla.Vector.reflect = function(vec,axis) {

  var r = Scintilla.Vector.project(vec,axis);
  r.scale(2);
  r.sub(vec);
  return r;

};

Scintilla.Vector.reflectNormal = function(vec,axis) {

  var r = Scintilla.Vector.projectNormal(vec,axis);
  r.scale(2);
  r.sub(vec);
  return r;


};


Scintilla.Vector.lerp = function(a, b, t) {

  var vec = new Scintilla.Vector(
    Scintilla.Math.lerp(a.x,b.x,t),
    Scintilla.Math.lerp(a.y,b.y,t)
  );

  return vec;
}



Object.defineProperty(Scintilla.Vector.prototype, "magnitude", {

get : function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
}

});

Object.defineProperty(Scintilla.Vector.prototype, "normal", {

get : function() {
  var mag = this.magnitude;
  var vec = new tobiJS.Vector(this.x / mag,this.y / mag);
  return vec;
}

});
