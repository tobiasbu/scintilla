
tobi.Transform = Class.extend(function(){

// private:
var _cosSin = new tobi.Vector(0,0);
var _oldRotation = -2;

// public:
this.constructor = function() {

  this.parent = null;

  this.rotation = 0;

  this.position = new tobi.Vector(0,0);
  this.scale = new tobi.Vector(1,1);
  this.angle = 0;

  this.matrix = new tobi.Matrix();
  this.worldPosition = new tobi.Vector(0,0);
  this.worldScale =  new tobi.Vector(1,1);
  this.worldRotation = 0;


  this.origin = new tobi.Vector(0,0);
  this.bounds = new tobi.BoundingBox(0,0,1,1); // the full bounds of the node - defined by render
  this.globalBounds = new tobi.BoundingBox(0,0,1,1); // defined by render

  this.rotation = 0; // radians

  //this._cosSin = new tobi.Vector(0,0);

}

this.updateTransform = function() {

var a, b, c, d, x, y;
var wt = this.matrix;
var pt = this.parent.matrix;

  this.rotation = this.angle * tobi.Math.degToRad;

  if (this.rotation % tobi.Math.PI2)
  {

    if (this.rotation !== this._oldRotation)
     {
         this._oldRotation = this.rotation;
         _cosSin.y = Math.sin(this.rotation);
         _cosSin.x = Math.cos(this.rotation);
     }

    a  =  _cosSin.x * this.scale.x;
    b  = _cosSin.y * this.scale.x;
    c  = -_cosSin.y * this.scale.y;
    d  =  _cosSin.x * this.scale.y;
    x =  this.position.x;
    y =  this.position.y;

   // anchor from image
    //if (this.renderComponent != null) {

      //var anchor = this.renderComponent.origin;

      x -= this.origin.x * a + this.origin.y * c;
      y -= this.origin.x * b + this.origin.y * d;
    //}

      // concat the parent matrix with the objects transform.
      wt.a  = a  * pt.a + b  * pt.c;
      wt.b  = a  * pt.b + b  * pt.d;
      wt.c  = c  * pt.a + d  * pt.c;
      wt.d  = c  * pt.b + d  * pt.d;
      wt.x = x * pt.a + y * pt.c + pt.x;
      wt.y = x * pt.b + y * pt.d + pt.y;


  } else {

    a  = this.scale.x;
    d  = this.scale.y;
    x =  this.position.x;
    y =  this.position.y;

    //if (this.renderComponent != null) {
      //var anchor = this.renderComponent.origin;
      x -= this.origin.x * a;
      y -= this.origin.y * d;
    //}

     wt.a  = a  * pt.a;
     wt.b  = a  * pt.b;
     wt.c  = d  * pt.c;
     wt.d  = d  * pt.d;
     wt.x = x * pt.a + y * pt.c + pt.x;
     wt.y = x * pt.b + y * pt.d + pt.y;


  }

  this.worldPosition.set(wt.x ,wt.y);
  this.worldScale.set(Math.sqrt(wt.a * wt.a + wt.b * wt.b), Math.sqrt(wt.c * wt.c + wt.d * wt.d));
  this.worldRotation = Math.atan2(-wt.c, wt.d);

  }

  this.destroyTransform = function() {

    delete this.position;
    delete this.scale;
    delete this.matrix;
    delete this.worldPosition;
    delete this.worldScale;
    delete this.origin;
    delete this.bounds;
    delete this.globalBounds;

  }

  //this.customTransform = false;
  /*this.position = null;
  this.scale = null;
  this.angle = 0;
  this.anchor = null;
  this.bounds = null;
  this.matrix = null;
  this._sin = 0;
  this._cos = 0;
  this._rotation = 0;
  this._oldRotation = 0;*/



});

//tobi.Transform.prototype.constructor = tobi.Transform;

/*tobi.Transform.prototype._newTransform = function() {



}*/


/*} else {



  * | a | b | x |
  * | c | d | y |
  * | 0 | 0 | 1 |

  a = scalex
  b = cos
  x = x translate

  c = scaley
  d = sin
  y = y translate



  a  =  this.scale.x; //a
  b  =  this._cosSin.y; // b
  c  =  this._cosSin.x; // c
  d  =  this.scale.y; // d

  x =  this.position.x;
  y =  this.position.y;

  wt.a  = a  * pt.a + b  * pt.c;
  wt.b  = a  * pt.b + b  * pt.d;
  wt.c  = c  * pt.a + d  * pt.c;
  wt.d  = c  * pt.b + d  * pt.d;
  wt.x = x * pt.a + y * pt.c + pt.x;
  wt.y = x * pt.b + y * pt.d + pt.y;

}*/




//tobi.Transform.prototype.updateTransform = tobi.Transform.prototype._updateTransform;
