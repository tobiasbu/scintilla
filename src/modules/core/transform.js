
import Vector from '../../math/vector'
import Matrix from '../../math/matrix'
import BoundingBox from '../../math/boundingbox'
//Vector = Math.Vector;
//Matrix = Math.Matrix;
//BoundingBox = Math.BoundingBox;

export default class Transform {

// private:
//var _cosSin = new scintilla.Vector(0,0);
//var _oldRotation = -2;

  // public:
  constructor() {

    //this.parent = null;

    this.rotation = 0;

    this.position = new Vector(0,0);
    this.scale = new Vector(1,1);
    this.angle = 0;

    this.matrix = new Matrix(1);
    this.worldPosition = new Vector(0,0);
    this.worldScale =  new Vector(1,1);
    this.worldRotation = 0;


    this.origin = new Vector(0,0);
    this.bounds = new BoundingBox(0,0,1,1); // the full bounds of the node - defined by render
    this.globalBounds = new BoundingBox(0,0,1,1); // defined by render

    this.rotation = 0; // radians
    this._isDirty = true;
    this._cosSin = {x:0,y:0};

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

