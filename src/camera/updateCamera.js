import UpdateBounds from "../transform/UpdateBounds";
import ComputeDelimiterPoint from "../transform/ComputeDelimiterPoint";


export default function UpdateCamera(camera, canvas) {
    
    if (!camera.transform._isDirty)
        return;

    let t = camera.transform;


  let pixelUnit = {x:1,y:1};

    pixelUnit.x = canvas.width / camera.width;
    pixelUnit.y = canvas.height / camera.height;

  if (camera.roundPixels) {
    t.position.x = Math.round(t.position.x);
    t.position.y = Math.round(t.position.y);
  }

  //camera._rotation = camera._angle * MathUtils.degToRad;

  if (t.rotation != t._oldRotation) {
    t._oldRotation = t.rotation;
    t._cosSin.y = Math.sin(t.rotation);
    t._cosSin.x = Math.cos(t.rotation);
  }

  let origin = {
    x:camera.width * t.origin.x,
    y:camera.height * t.origin.y
  };

  // todo resolution
  t.matrix.setIdentity()
  .scale(pixelUnit.x, pixelUnit.y)
  .translate(t.position.x + origin.x , t.position.y + origin.y)
  .radianRotate(t._cosSin.x, t._cosSin.y)
  .scale(t.scale.x, t.scale.x)
  .translate(-origin.x, -origin.y)

  let x = t.matrix.a[6];
  let y = t.matrix.a[7];

  //let coords = [];

    //coords[0] = ComputeDelimiterPoint( x, y, t._cosSin);
    //coords[1] = ComputeDelimiterPoint( x + camera.width,  y, t._cosSin);
    //coords[2] = ComputeDelimiterPoint( x , y +  camera.height, t._cosSin);
    //coords[3] = ComputeDelimiterPoint( x +  camera.width , y +  camera.height, t._cosSin);
  
    //camera.bounds.min.x = Math.min(coords[0].x,coords[1].x,coords[2].x,coords[3].x);
    //camera.bounds.min.y = Math.min(coords[0].y,coords[1].y,coords[2].y,coords[3].y);
    //camera.bounds.max.x = Math.max(coords[0].x,coords[1].x,coords[2].x,coords[3].x);
    //camera.bounds.max.y = Math.max(coords[0].y,coords[1].y,coords[2].y,coords[3].y);

  
  //console.log("min:" + camera.bounds.min.toString());
  //console.log("max" + camera.bounds.max);


}