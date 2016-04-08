
// instance of gameobjects and transforms in the world
// can be a group of gameobjects
tobi.Instance = tobi.Hierarchy.extend(function() {

// private
this.game = null;
this.name = "instance";
this.z = 0;
this.depth = 0;
this.visible = true;
this.active = true;
this._selfDestroy = false;
this._changeDepth = false;
var _keepAlive = false;


this.constructor = function(game,parent,name) {

this.super();

this.game = game;
this.name = name;


}

this.preUpdate = function (time) {


    if (!this.active) {
      return;
    }



    if (this.component['animation'])
        this.component['animation'].update(time);




    for (var i = 0; i < this.children.length; i++)
    {
      this.children[i].z = i;
      this.children[i].preUpdate(time);

        /*if (this.children[i].active) {

          this.children[i].z = i;

           if (this.children[i]['update']) // call update of childrens
            this.children[i].update();




            //if (this.children[i]['_cycleUpdate']) // call the childrens
             this.children[i]._cycleUpdate(time);

           if (this.children[i]._selfDestroy)
              destroyList.push(this.children[i]);


       } else
       continue;*/

     }

     /*for (var i = 0; i < destroyList.length; i++) {
         if (destroyList[i]._keepAlive)
          destroyList[i]._poolBack();
         else
          destroyList[i]._destroy();
      }



     if (this._changeDepth) {
       if (this.parent !== undefined || this.parent !== null) {
          this.parent._updateDepth();
        }
        this._changeDepth = false;
      }*/

};



this._updateTransform = function() {

  if (!this.active)
    return;

  this.updateTransform();

  if (this.component['render']) {
    this.bounds.setByGameObject(this,false);
  }


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

  for (var i = 0; i < this.children.length; i++) {

    this.children[i]._updateTransform();

      this.children[i].z = i;

      if (this.children[i].component['render']) {

        // calculate the local bounds of node
          var bb =  this.children[i].bounds;

         //calculate the global bounds of group object
         minX = minX < bb.min.x ? minX : bb.min.x;
         minY = minY < bb.min.y ? minY : bb.min.y;
         maxX = maxX > bb.max.x ? maxX : bb.max.x;
         maxY = maxY > bb.max.y ? maxY : bb.max.y;


      }

  }

  this.globalBounds.set(minX,minY,maxX,maxY);

}

this.render = function(context) {


  if (!this.visible || this._selfDestroy)
    return;

  if (this.component['render']) {
    if (this.game.camera.view.intersects(this.bounds.box)) {

      //  if (this.component['collider'])
        //  this.component['collider'].debugDraw(context,'red');

          this.component['render'].render(context);
          this.game.camera.instancesInView++;
    }
  }

  if (this['freelyrender']) {
    context.setTransform(1, 0, 0, 1, 0, 0);
    this.freelyrender(context);
  }

  if (this.children.length === 0)
    return;


  var i = 0;

   while (i < this.children.length)
   {

     this.children[i].render(context);


     /*if (this.children[i].visible && !this.children[i]._selfDestroy) {

     if (this.children[i]['_cycleRender'])
        this.children[i]._cycleRender(context);

        if (this.game.camera.view.intersects(this.children[i].bounds.box)) {

          if (this.children[i].component['collider']) {
             this.children[i].component['collider'].debugDraw(context,'red');

          }

        if (this.children[i].component['render']) { // if is gameobject
            this.children[i].component['render'].render(context);
            this.game.camera.instancesInView++;
       }

     }



    if (this.children[i]['freelyrender']) {
      context.setTransform(1, 0, 0, 1, 0, 0);
      this.children[i].freelyrender(context);
    }
  }*/


    i++;
   }

};

this._updateDepth = function() { // sort ascending

  this.children.sort(
    function(a, b) {

      if (a.depth > b.depth) {

        return 1;

      } else if (a.depth < b.depth) {

        return -1;

      } else {

        if (a.z > b.z) {
          return 1;
        } else {
          return -1;
        }


      }

      /*  if (a.z > b.z) {

          if (a.depth < b.depth) {
            return -1;
          } else {
            return 1;
          }

        } else {

          if (a.depth > b.depth) {
            return 1;
          } else {
            return - 1;
          }

        }*/


    }
    );



  this._changeDepth  = false;


}

this.setDepth = function(depth) {

  this.depth = depth;
  this._changeDepth = true;

};

this.setActive = function(flag) {

  if (flag === undefined) flag = true;

  this.visible = flag;
  this.active = flag;

}

// set destroy process
// if keepAlive is true, it will set to the pool
this.destroy = function(keepAlive) {

if (keepAlive === undefined) keepAlive = false;

this._selfDestroy = true;
_keepAlive = keepAlive;


}

this._garbage = function() {

  if (_keepAlive)
   this._poolBack();
  else
   this._destroy();

}

// internal method to destroy object
this._destroy = function() {

  if (this.game === null) return;

  this._selfDestroy = true;

  // last call
  if (this["onDestroy"])
    this.onDestroy();

  // remove the parent
  if (this.parent)
    this.parent.removeChild(this);

  // remove components
  if (this.component['collider'])
      this.game.physics.removeColliderObj(this.component.collider);

    this.removeAllComponents();

    // remove transform
    this.destroyTransform();

    var i = this.children.length;

   while (i--)
   {
       this.children[i]._destroy();
   }


   this.setActive(false);
   this.game = null;
   this.parent = null;

}

this.destroyAllChilds = function() {

  var i = this.children.length;

  while (i--)
  {
      this.children[i]._destroy();
  }

}

// internal method to pooled objects
this._poolBack = function(callOnDestroy) {

  if (this.pool == null) {

    //its not pooled? no problem,
    this.pool = this.name;

  }

  if (callOnDestroy === undefined) callOnDestroy = true;

  if (this.parent)
  {
      this.parent.removeChild(this);
  }

  this.parent = null;

  if (callOnDestroy) {
    if (this["onDestroy"])
      this.onDestroy();
  }

  if (this.component['collider'])
      this.game.physics.removeColliderObj(this.component.collider);


    this.game.pool.pushBack(this);


    var i = this.children.length;

  while (i--)
  {
      this.children[i]._poolBack(callOnDestroy);
  }

  //this._selfDestroy = false;

}

});


Object.defineProperty(tobi.Instance.prototype, "length", {

    get: function() {
        return this.children.length;
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
