

export default function UpdatePhysics(time) {

    let size = this.colliadables.length;

    // CHECK COLLISION
    if (size < 2) // at least we must have 2 objects
      return;

    //var collision = 0;

    for (var i = 0; i < size; i++) {

        var objA = this.colliadables[i];
        var shapeA = objA.shape;

        if (objA._gameObject._selfDestroy || !objA._gameObject.active)
          continue;

        var jit = i + 1;

        if (jit >= size)
          break;

        for (var j = jit; j < size; j++) {

          var objB = this.colliadables[j];
          var shapeB = objB.shape;

          if (objB._gameObject._selfDestroy || !objB._gameObject.active)
            continue;

          // AABB check of the shapes
        if (objB.bounds.box.intersects(objA.bounds.box)) {

          // check SAT
          if (this.sat["test" + shapeA.getType() + shapeB.getType()].call(this,
            objA,objB,this.response.clear()) === true) {


              if (objA._gameObject['onCollision'])
              if (objA._gameObject.onCollision(objB._gameObject,this.response) !== false) {


              }

              if (objB._gameObject['onCollision'])
              if (objB._gameObject.onCollision(objA._gameObject,this.response) !== false) {


              }

          } else
            continue;
          } else
            continue;
        }
      }
  }