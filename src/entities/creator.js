
// simple helper class -
// game instances creator
scintilla.Creator = function(game, root) {

this.game = game;
this.root = root;

}

scintilla.Creator.prototype = {

addFromPool : function(containerName, node) {

  if (node === undefined || node === null) { node = this.root; }

  var obj = this.game.pool.pull(containerName);

  if (obj.component['collider']) {
    this.game.physics.addColliderObj(obj.component.collider);

  }

  obj._selfDestroy = false;
  obj.z = node.children.length;

  if (obj != null) {
    obj = node.addChild(obj);
    return obj;
  } else
      return null;

},

add : function(gameObject, node) {

  if (node === undefined || node === null) { node = this.root; }

  if (scintilla.ObjectUtils.isFunction(gameObject)) {
    this.create(gameObject);
    return;
  }

  gameObject = node.addChild(gameObject);
  gameObject.z = node.children.length;

  return gameObject;


},

create : function(gameObject, x, y, node) {


  if (node === undefined || node === null) { node = this.root; }

  var obj = gameObject;

  if (scintilla.ObjectUtils.isFunction(obj)) {

    obj = new gameObject();

  }

  obj.z = node.children.length;
  obj.game = this.game;

   obj = node.addChild(obj);

  var xx = 0;
  var yy = 0;

  if (typeof x != 'undefined')
    xx = x;

  if (typeof y !== 'undefined')
    yy = y;

    obj.position.x = xx;
    obj.position.y = yy;

    if (obj['start'])
      obj.start();

      if (obj.component['collider'])
        this.game.physics.addColliderObj(obj.component.collider);


  return obj;

},

/*
createClone : function(gameObject, x, y, node) {

    var obj = cloner.shallow.copy(gameObject);
    return this.create(obj,x,y,node);

}*/






}
