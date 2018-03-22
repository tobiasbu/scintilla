
import Vector from '../../math/vector'
import Matrix from '../../math/matrix'
import BoundingBox from '../../math/boundingbox'

export default class Transform {


  constructor() {

    this.position = new Vector(0,0);
    this.scale = new Vector(1,1);
    this.angle = 0;
    this.rotation = 0;
    this.matrix = new Matrix(1);
    this._isDirty = true;
    this.origin = new Vector(0,0);
    this._cosSin = {x:0,y:0};
    //this.worldPosition = new Vector(0,0);
    //this.worldScale =  new Vector(1,1);
    //this.worldRotation = 0;
    //this.bounds = new BoundingBox(0,0,1,1); // the full bounds of the node - defined by render
    //this.globalBounds = new BoundingBox(0,0,1,1); // defined by render
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
      delete this._cosSin;

    }
  }

