import UpdateBounds from "../modules/core/UpdateBounds";


export default function UpdateCamera(camera, canvas) {
    
    if (!camera.transform._isDirty)
        return;

    let t = camera.transform;


  let pixelUnit = {x:0,y:0};

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

  UpdateBounds(
      camera._bounds, 
      t.position.x, t.position.y,
      camera.width, camera.height,
      t._cosSin);

  // todo resolution
  t.matrix.setIdentity()
  .scale(pixelUnit.x, pixelUnit.y)
  .translate(t.position.x + origin.x , t.position.y + origin.y)
  .radianRotate(t._cosSin.x, t._cosSin.y)
  .scale(t.scale.x, t.scale.x)
  .translate(-origin.x, -origin.y)


}