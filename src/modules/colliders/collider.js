import Module from "../Module";
import Vector from '../../math/Vector'
import BoundingBox from '../../math/BoundingBox'

export default class Collider extends Module {
  
  
  constructor(moduleName, moduleManager) {

    super('collider', moduleName || 'collider', moduleManager);

    this.type = undefined;
    
    this.shape = null;
    
    //this.bounds = null;
    //this.offset = null
    //this._gameObject = null;
    //this.position = null;
    //var _oldScale = new scintilla.Vector(1,1);
    //var _oldRotation = 0;

    //this.position = new scintilla.Vector();
    this.isTrigger = false;
    this._offset = new Vector();
    this._bounds = new BoundingBox(0,0,1,1);
    this.setShape(shape);
  }


  setShape = function(shape) {

    this.shape = shape;
    this._updateBounds();

  }

  setPosition = function(position) {

    this.position.x = position.x - this.shape.centroid.x + this.offset.x;
    this.position.y = position.y - this.shape.centroid.y + this.offset.y;
    this.bounds.box.x = this.bounds.min.x + this.position.x;
    this.bounds.box.y = this.bounds.min.y + this.position.y;

  }

  scale = function(scale) {

    if (this.shape.getType() == "Polygon") {

      var points = this.shape.getPoints();

      for (var i = 0; i < points.length; i++) {
          points[i].scale(scale.x, scale.y);
      }

      this.shape._recalc();

    }

    this._updateBounds();

  }

  rotate = function(radians) {

    if (this.shape.getType() == "Polygon") {



      //if (radians % scintilla.Math.PI2) {

        var points = this.shape.getPoints();
        var pivot = this.shape.centroid;

        for (var i = 0; i <  points.length; i++) {
            //points[i].move(-this.bounds.x,-this.bounds.y);
            points[i].rotateAround(radians,pivot);
            //points[i].move(this.bounds.x,this.bounds.y);
        }
        this.shape._recalc();
        this._updateBounds();
      //}
    }

  }

  _updateBounds = function() {

    this.bounds.setByShape(this.shape);

    //this.bounds.box.x = this.bounds.min.x + this.position.x;
    //this.bounds.box.y = this.bounds.min.y + this.position.y;

  };

  update = function() {

    var calc = false;



    if (_oldRotation != this._gameObject.rotation) {
        this.rotate(this._gameObject.rotation-_oldRotation);
        _oldRotation = this._gameObject.rotation;
        calc = true;
    }

    /*if (_oldScale != this._gameObject.scale) {

        this.scale(_oldScale.sub(this._gameObject.scale));
        _oldScale.copy(this._gameObject.scale);

        calc = true;
    }*/

      this.setPosition(this._gameObject.position);

  }

debugDraw = function(context, color) {

  if (color === undefined) color = 'red';

  var points = this.shape.getPoints();
  var i = points.length;

  var xx = this.bounds.x;
  var yy = this.bounds.y;



  context.setTransform(1,0,0,1,0,0)



  //if (i == 3)

  context.fillStyle = color;

  context.save();
  context.translate(this.position.x, this.position.y);

  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  while (i--) context.lineTo(points[i].x, points[i].y);
  context.closePath();
  context.fill();
  context.fillStyle = "black";
  context.fillRect(this.shape.centroid.x-2, this.shape.centroid.y-2, 4, 4);
  context.restore();


  context.strokeStyle = "lime";
  context.strokeRect(this.bounds.box.x, this.bounds.box.y, this.bounds.box.width, this.bounds.box.height);



}


};
