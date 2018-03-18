
import Vector from '../math/vector'
import Matrix from '../math/matrix'
import BoundingBox from '../math/boundingbox'
//Vector = Math.Vector;
//Matrix = Math.Matrix;
//BoundingBox = Math.BoundingBox;

export default class Transform {

// private:
//var _cosSin = new scintilla.Vector(0,0);
//var _oldRotation = -2;

  // public:
  constructor() {

    this.parent = null;

    this.rotation = 0;

    this.position = new Vector(0,0);
    this.scale = new Vector(1,1);
    this.angle = 0;

    this.matrix = new Matrix();
    this.worldPosition = new Vector(0,0);
    this.worldScale =  new Vector(1,1);
    this.worldRotation = 0;


    this.origin = new Vector(0,0);
    this.bounds = new BoundingBox(0,0,1,1); // the full bounds of the node - defined by render
    this.globalBounds = new BoundingBox(0,0,1,1); // defined by render

    this.rotation = 0; // radians

    //this._cosSin = new scintilla.Vector(0,0);

  }

  update() {

    var a, b, c, d, x, y;
    var wt = this.matrix;
    var pt = this.parent.matrix;

      this.rotation = this.angle * scintilla.Math.degToRad;

      if (this.rotation % scintilla.Math.PI2)
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

    destroy() {

      delete this.position;
      delete this.scale;
      delete this.matrix;
      delete this.worldPosition;
      delete this.worldScale;
      delete this.origin;
      delete this.bounds;
      delete this.globalBounds;

    }
  }

