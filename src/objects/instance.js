
// instance of gameobjects and transforms in the world
// can be a group of gameobjects
tobi.Instance = tobi.Hierarchy.extend(function() {

// private
this._selfDestroy = false;
this._changeDepth = false;
var _keepAlive = false;

this.constructor = function(game,parent,name) {

//tobi.Hierarchy.call(this,newTransform);

this.super();


this.game = game;
this.name = name;
this.depth = 0;

this.visible = true;

}

this._cycleUpdate = function (time) {



  var destroyList = [];

    for (var i = 0; i < this.nodes.length; i++)
    {

       if (this.nodes[i]['update']) // call update of childrens
        this.nodes[i].update();

        if (this.nodes[i]['_updateComponents'])
          this.nodes[i]._updateComponents(time);

        if (!this.nodes[i]._selfDestroy) {

        if (this.nodes[i]['_cycleUpdate']) // call the childrens
         this.nodes[i]._cycleUpdate(time);

       } else {
          destroyList.push(this.nodes[i]);
          continue;
       }
     }

     for (var i = 0; i < destroyList.length; i++)
        destroyList[i]._onDestroy();


     if (this._changeDepth) {
       if (this.parent !== undefined || this.parent !== null) {
          this.parent._updateDepth();
        }
        this._changeDepth = false;
      }

};

this._cycleUpdateTransform = function() {

  var minX = Infinity;
  var minY = Infinity;
  var maxX = -Infinity;
  var maxY = -Infinity;

  if (this.name != "_world") {
    minX = this.bounds.min.x;
    minY = this.bounds.min.y;
    maxX = this.bounds.max.x;
    maxY = this.bounds.max.y;
  }

  for (var i = 0; i < this.nodes.length; i++) {

    this.nodes[i].updateTransform();

    if (this.nodes[i]['_cycleUpdateTransform'])
      this.nodes[i]._cycleUpdateTransform();

    if (this.nodes[i].component['render']) {

      // calculate the local bounds of node
        var bb =  this.nodes[i].bounds.setByGameObject(this.nodes[i],false);

       //calculate the global bounds of the group
       minX = minX < bb.min.x ? minX : bb.min.x;
       minY = minY < bb.min.y ? minY : bb.min.y;
       maxX = maxX > bb.max.x ? maxX : bb.max.x;
       maxY = maxY > bb.max.y ? maxY : bb.max.y;


    }


  }

  this.globalBounds.set(minX,minY,maxX,maxY);



}

this._cycleRender = function(context) {

  if (this._selfDestroy) {
    return;
  }

  var i = 0;

   while (i < this.nodes.length)
   {
     if (this.nodes[i]['_cycleRender'])
        this.nodes[i]._cycleRender(context);

        //console.log("asdasd");


        if (this.game.camera.view.intersects(this.nodes[i].bounds.box)) {

          /*if (this.nodes[i].component['collider']) {
             this.nodes[i].component['collider'].debugDraw(context,'red');

          }*/

        if (this.nodes[i].component['render']) { // if is gameobject
            this.nodes[i].component['render'].render(context);
            this.game.camera.instancesInView++;
       }

    }

    if (this.nodes[i]['freelyrender']) {
      context.setTransform(1, 0, 0, 1, 0, 0);
      this.nodes[i].freelyrender(context);
    }

    i++;
   }

};

this._updateDepth = function() { // sort ascending

  var sortProperty = 'depth';

  this.nodes.sort(
    function(a, b) {

      if (a[sortProperty] < b[sortProperty])
      {
          return -1;
      }
      else if (a[sortProperty] > b[sortProperty])
      {
          return 1;
      } else {
          return 0;
      }

    }
  );

  this._changeDepth  = false;


}

this.setDepth = function(depth) {

  this.depth = depth;
  this._changeDepth = true;

};

this.selfDestroy = function(keepalive) {

  if (keepalive === undefined) keepalive = false;

  this._selfDestroy = true;
  _keepAlive = keepalive;

};

this._removeAll = function() {

  if (this.nodes.length === 0)
   {
       return;
   }

   do
    {

      if (this.nodes[0].component['collider'])
          this.game.physics.removeColliderObj(this.nodes[0].component.collider);

        if (!_keepAlive) {
          if (this.nodes[0]['destroy'])
          {
              this.nodes[0].destroy();
          }

          if (this.pool) {

            this.game.pool.pushBack(this.nodes[0]);

          }

        }

         this.removeNode(this.nodes[0]);

    }
    while (this.nodes.length > 0);

}

this._onDestroy = function() {

  if (this.game === null) return;

  if (this.component['collider'])
      this.game.physics.removeColliderObj(this.component.collider);

  // need to destoy me?
  if (!_keepAlive) {

    if (typeof this.destroy == 'function')
    {
      this.destroy();
    }

    // return to pool if gameObject have
    if (this.pool) {

      this.game.pool.pushBack(this);

    }
  }

  this._removeAll();
  //this._selfDestroy = false;
  //this.game = null;

  if (this.parent)
  {
      this.parent.removeNode(this);
  }

   //this.game = null;

  }



});


Object.defineProperty(tobi.Instance.prototype, "length", {

    get: function() {
        return this.nodes.length;
    }

});

/*if (parent === undefined)
{
    parent = game.world;

}
if (parent != null) {
  this.parent = parent;
  this.parent.addNode(this);
}*/

//this.interator = null;






//tobi.Instance.prototype =  Object.create(tobi.Hierarchy.prototype);
//tobi.Instance.prototype.constructor = tobi.Instance;



//tobi.Instance.prototype.renderCycle = function(context) {



   //this.game.draw.boundingbox(this.bounds);


//}
