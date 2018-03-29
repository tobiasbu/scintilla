
import Vector from '../math/Vector'
import Matrix from '../math/Matrix'
import BoundingBox from '../math/BoundingBox'

export default class Transform {


  constructor() {

    this.matrix = new Matrix(1);
    this.position = new Vector(0,0, this);
    this.scale = new Vector(1,1, this);
    this.origin = new Vector(0,0, this);
    this.angle = 0;
    this.rotation = 0;
    this._cosSin = {x:1,y:0};
    this._oldRotation = -1;
    this._isDirty = true;
    //this.worldPosition = new Vector(0,0);
    //this.worldScale =  new Vector(1,1);
    //this.worldRotation = 0;
    //this.bounds = new BoundingBox(0,0,1,1); // the full bounds of the node - defined by render
    //this.globalBounds = new BoundingBox(0,0,1,1); // defined by render
  }

  markDirty() {
    this._isDirty = true;
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

    reset() {
      this.matrix.setIdentity();
      this._isDirty = true;
      this._cosSin.x = 1;
      this._cosSin.y = 0;
      this.position.set(0,0);
      this.angle = 0;
      this.rotation = 0;
      this._oldRotation = 0;
      this.origin.set(0,0);
      this.scale.set(0,0);

    }
  }

