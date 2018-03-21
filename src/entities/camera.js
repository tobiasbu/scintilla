
import Rect from '../math/rect'
import Vector from '../math/vector'
import BoundingBox from '../math/boundingbox';
import Transform from '../modules/core/transform';
import Color from '../utils/color'

export default class Camera {
  
  constructor(game) {

    this.game = game;
    this.view = new Rect();
    this._bounds = new BoundingBox();
    this._transform = new Transform();
    this._backgroundColor = Color.rgbToHex(0,0,0);
    this.roundPixels = false;
    this.instancesInView = 0;

    this.target = null;
    this.scale = new Vector(1,1);
    this.angle = 0;

    this._width = width;
    this._height = height;

  }

  update() {
    this.instancesInView = 0;
    this.root.position.x = -this.view.x;
    this.root.position.y = -this.view.y;
    this.root.scale = this.scale;
    this.root.angle = this.angle;
  }

  setScale(x,y) {
    this.scale.set(x,y);
  }

  setPosition(x,y) {
    this.view.x = x;
    this.view.y = y;
  }

  setFocus(vector) {

    this.setPosition(Math.round(vector.x - (this.view.width/2)), Math.round(vector.y - (this.view.height/2)));

  }

  setFocusXY(x,y) {

    this.setPosition(Math.round(x - (this.view.width/2)), Math.round(y - (this.view.height/2)));

  }

  setTarget(target) {

    this.target = target;

  }

  reset() {

        this.target = null;
        this.view.x = 0;
        this.view.y = 0;
        this.angle = 0;
        this.scale.set(1,1)
  }

}
