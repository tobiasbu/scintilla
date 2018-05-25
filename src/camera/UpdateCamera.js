import UpdateBounds from "../transform/UpdateBounds";
import ComputeDelimiterPoint from "../transform/ComputeDelimiterPoint";
import ComputeBounds from "../transform/ComputeBounds";
import MathUtils from "../math/MathUtils";


export default function UpdateCamera(camera, canvas) {
    
  if (camera._transform._isDirty === false)
    return;

  let t = camera._transform;


  if (t.rotation != t._oldRotation) {
    t._oldRotation = t.rotation;
    t._cosSin.y = Math.sin(t.rotation);
    t._cosSin.x = Math.cos(t.rotation);
  }

  let origin = {
    x: camera.width * t.origin.x,
    y: camera.height * t.origin.y
  };

  let pos = {x: (t.position.x + origin.x),
             y: (t.position.y + origin.y)};

  if (camera._roundPixels) {
    pos.x = MathUtils.round(pos.x);
    pos.y = MathUtils.round(pos.y);
  }

  // update camera view
  camera.viewBounds
  .setMin(pos.x, pos.y)
  .setMax(pos.x + camera.width, pos.y + camera.height);

  pos.x = -pos.x;
  pos.y = -pos.y;

  // compute the basic rotation
  t.matrix.setIdentity()
  .scale(camera._pixelUnit.x, camera._pixelUnit.y) // resolution
  .translate(pos.x , pos.y)
  .scale(t.scale.x, t.scale.x);
  
  // bounds should not be rotated
  ComputeBounds(
    camera.bounds, camera._transform, 
    camera.width, camera.height, 
    pos);

    t.matrix
    .radianRotate(t._cosSin.x, t._cosSin.y)
    .translate(-origin.x, -origin.y);

  

}