
tobi.Physics = Class.extend( function() {

this.game = null;
this.sat = null;
this.response = null;

var colliadables = [];

this.constructor = function(game) {

  this.game = game;

};

this.init = function() {

  this.sat = new tobi.SAT();
  this.response = new tobi.SAT.Response();

};

this.getColliadables = function() {

  return colliadables;

}

this.addColliderObj = function(obj) {

  colliadables.push(obj);

};

this.removeColliderObj = function(obj) {

  var i = colliadables.indexOf(obj);

  if(i != -1) {
  	colliadables.splice(i, 1);
  }

};

this.clear = function() {

  colliadables = [];
  colliadables.length = 0;

};

this.update = function(time) {


// CHECK COLLISION
if (colliadables.length < 2) // at least we must have 2 objects
  return;

//var collision = 0;


for (var i = 0; i < colliadables.length; i++) {

    var objA = colliadables[i];
    var shapeA = objA.shape;

    var jit = i + 1;

    if (jit >= colliadables.length)
      break;

    for (var j = jit; j < colliadables.length; j++) {

      var objB = colliadables[j];
      var shapeB = objB.shape;

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
});

Object.defineProperty(tobi.Physics.prototype, "length", {

    get: function() {
        return this.getColliadables().length;
    }

});
