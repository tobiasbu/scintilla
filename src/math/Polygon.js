

scintilla.ShapeType = {
Triangle : 0,
Rectangle : 1,
Polygon : 2,
Circle : 3
}

scintilla.Polygon = Class.extend(function() {

var _points = null;
var _normals = null;
var _edges = null;
var type = null;
var _area = false;
this.centroid = new scintilla.Vector();
this.area = 0;

this.constructor = function(points) {

type = "Polygon";
this.setShape(points);

}

this.setShape = function(points) {

_points = points;
_area = false;
this._recalc();


}

this.getType = function() {

  return type;

}

this.getPoints = function() {

  return _points;

}

this.getNormals = function() {

  return _normals;

}

this._recalc = function() {

  var i;
  // The edges here are the direction of the `n`th edge of the polygon, relative to
  // the `n`th point. If you want to draw a given edge from the edge value, you must
  // first translate to the position of the starting point.
  var edges = _edges = [];
  // The normals here are the direction of the normal for the `n`th edge of the polygon, relative
  // to the position of the `n`th point. If you want to draw an edge normal, you must first
  // translate to the position of the starting point.
  var normals = _normals = [];
  // Copy the original points array and apply the offset/angle
  var points = _points;
  var len = _points.length;

  if (len < 3) {
    //throw new me.Polygon.Error("Requires at least 3 points");
  }

  var a = 0;

  if (!_area) {
    this.area = 0;
    this.centroid.x = 0;
    this.centroid.y = 0;
  }

  // Calculate the edges/normals
  for (i = 0; i < len; i++) {

    var p1 = points[i];
    var p2 = i < len - 1 ? points[i + 1] : points[0];
    var e = new scintilla.Vector().copy(p2).sub(p1);
    //e.copy(points[(i + 1) % len]).sub(points[i]);

    var n = new scintilla.Vector().copy(e).perp().normalize();

    if (!_area) {
      a = p1.x*p2.y - p2.x*p1.y;
      this.area += a;
      this.centroid.x += (p1.x+p2.x) * a;
      this.centroid.y += (p1.y+p2.y) * a;
    }


    _edges.push(e);
    _normals.push(n);
  }

  if (!_area) {
    this.area *= 0.5;
    this.centroid.x /= (6.0*this.area);
    this.centroid.y /= (6.0*this.area);
    _area = true;
  }


  return this;


}

});

scintilla.Polygon.makeTriangle = function(width,height) {

  if (height === undefined) height = width;

 return new scintilla.Polygon([
   new scintilla.Vector(-width/2,height/2),
   new scintilla.Vector(0,-height/2),
   new scintilla.Vector(width/2,height/2),
 ]);

};

scintilla.Polygon.makeRectangle = function(width,height) {

  if (height === undefined) height = width;

 return new scintilla.Polygon([
   new scintilla.Vector(-width/2,-height/2),
   new scintilla.Vector(width/2,-height/2),
   new scintilla.Vector(width/2,height/2),
   new scintilla.Vector(-width/2,height/2)
 ]);

}
