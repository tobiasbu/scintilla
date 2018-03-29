
import MathUtils from '../math/MathUtils'
import Vector from '../math/Vector'
import ComputeDelimiterPoint from './ComputeDelimiterPoint';



export default function UpdateTransformBounds(bounds, frame, transform) {
    
  let coords = [];
 /* let scale = Vector.abs(transform.scale);
  let pos = transform.position;
  let anchor = transform.origin;
  let size = {
    x : frame.width * scale.x,
    y : frame.height * scale.y
  };

  anchor.x *= scale.x;
  anchor.y *= scale.y;
  pos.x -= anchor.x;
  pos.y -= anchor.y;
  anchor.x += pos.x;
  anchor.y += pos.y;*/
  
  //coords[0] = ComputeDelimiterPoint( pos.x, pos.y, transform._cosSin, anchor);
  //coords[1] = ComputeDelimiterPoint( pos.x + size.x,  pos.y, transform._cosSin, anchor);
  //coords[2] = ComputeDelimiterPoint( pos.x , pos.y + size.y, transform._cosSin, anchor);
  //coords[3] = ComputeDelimiterPoint( pos.x + size.x , pos.y + size.y, transform._cosSin, anchor);

  let top = transform.matrix.transformPoint(0, 0);
  let left = transform.matrix.transformPoint(frame.width, 0);
  let bottom = transform.matrix.transformPoint(0, frame.height);
  let right = transform.matrix.transformPoint(frame.width, frame.height);

  bounds.min.x = Math.min(top.x,left.x,bottom.x,right.x);
  bounds.min.y = Math.min(top.y,left.y,bottom.y,right.y);
  bounds.max.x = Math.max(top.x,left.x,bottom.x,right.x);
  bounds.max.y = Math.max(top.y,left.y,bottom.y,right.y);

}





  // position (vector)
  // scale (vector)
  // rotation (vector x = cos, y = sin)
  /*
  setup(pos, scale, rotation, anchor, width, height) {

    var coords = [];
    var negx = 1;
    var negy = 1;

    if (scale.x < 0)
          negx = -1;
    if (scale.y < 0)
          negy = -1;



    this.size.x = width*scale.x*negx;
    this.size.y = height*scale.y*negy;
    anchor.x *= scale.x*negx;
    anchor.y *= scale.y*negy;
    pos.x -= anchor.x;
    pos.y -= anchor.y;
    anchor.x += pos.x;
    anchor.y += pos.y;

    var callback = null;

    if (rotation instanceof  scintilla.Vector)
        callback = this['calcCoordsCosSin'];
      else
        callback = this['calcCoords'];

    coords[0] = callback( pos.x, pos.y, anchor, rotation);
    coords[1] = callback( pos.x + this.size.x,  pos.y, anchor,rotation);

    coords[2] = callback( pos.x , pos.y + this.size.y, anchor,rotation);
    coords[3] = callback( pos.x + this.size.x , pos.y + this.size.y,anchor, rotation);



    this.min.x = Math.min(coords[0].x,coords[1].x,coords[2].x,coords[3].x);
    this.min.y = Math.min(coords[0].y,coords[1].y,coords[2].y,coords[3].y);

    this.max.x = Math.max(coords[0].x,coords[1].x,coords[2].x,coords[3].x);
    this.max.y = Math.max(coords[0].y,coords[1].y,coords[2].y,coords[3].y);
    this.center.x = pos.x+(this.max.x-this.min.x)/2;
    this.center.y = pos.y+(this.max.y-this.min.y)/2;
    this.box.set(this.min.x,this.min.y,this.max.x-this.min.x,this.max.y-this.min.y);

  }


  setByGameObject(gameObject, local) {

    //if (gameObject.render != null) {

      if (local) {
        this.setup(gameObject.position,
                gameObject.scale,
                gameObject._cosSin,
                gameObject.render.origin,
                gameObject.render.width,
                gameObject.render.height
              );
      } else {

        var frame = gameObject.component['render'].frame;

        var pos = {x:gameObject.worldPosition.x, y:gameObject.worldPosition.y};
        var org = {
          x:gameObject.origin.x * frame.width,
          y:gameObject.origin.y * frame.height};

        pos.x += gameObject.game.camera.view.x;
        pos.y += gameObject.game.camera.view.y;

        this.setup(pos,
                gameObject.worldScale,
                gameObject.worldRotation,
                org,
                frame.width,
                frame.height
              );
      }


    return this;


  }


  setByShape(shape,position) {


    var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    var type = shape.getType();

    if (type == "Polygon") {

      var points = shape.getPoints();

      points.forEach(function (point) {
          minX = Math.min(minX, point.x);
          minY = Math.min(minY, point.y);
          maxX = Math.max(maxX, point.x);
          maxY = Math.max(maxY, point.y);

      });
    }

    if (position !== undefined) {
      minX += position.x;
      minY += position.y;
      maxX += position.x;
      maxY += position.y;
    }


    this.min.set(minX,minY);
    this.max.set(maxX,maxY)
    this.box.set(minX,minY,maxX-minX,maxY-minY);

  }

  calcCoordsCosSin(x, y, anchor, cos_and_sin) {

    var coord = {x:0,y:0};

    coord.x = anchor.x + ((x-anchor.x) * cos_and_sin.x) - ((y-anchor.y) * cos_and_sin.y);
    coord.y = anchor.y - ((x-anchor.x) * cos_and_sin.y) - ((y-anchor.y) * cos_and_sin.x);

      return coord;

  }

  calcCoords(x,y,anchor,rotation) {

    var coord = {x:0,y:0};

    coord.x = anchor.x + ((x-anchor.x) * Math.cos(rotation)) - ((y-anchor.y) * Math.sin(rotation));
    coord.y = anchor.y - ((x-anchor.x) * Math.sin(rotation)) - ((y-anchor.y) * Math.cos(rotation));

      return coord;

  }*/