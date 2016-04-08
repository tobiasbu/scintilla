
// Hierarchy Tree of instances
// Instance is a children of the Hierarchy tree
tobi.Hierarchy = tobi.Transform.extend(function() {

this.children = [];
//tobi.Transform.call(this);

//if (newTransform)
//this._newTransform();

this.constructor = function() {

  this.super();

};

this.addChild = function(child) {

  return this.addChildAt(child,this.children.length);

};

this.addChildAt = function(child,index) {

      if(index >= 0 && index <= this.children.length)
      {
          if(child.parent)
          {
              child.parent.removeChild(child);
          }

          child.parent = this;

          this.children.splice(index, 0, child);

          this._changeDepth = true;

          //if(this.stage)child.setStageReference(this.stage);

          return child;
      }
      else
      {
          throw new Error(child + 'addChildAt: The index '+ index +' supplied is out of bounds ' + this.children.length);
      }


};

this.removeChild = function(child)
{
    var index = this.children.indexOf( child );

    if(index === -1) return;

    return this.removeChildAt( index );
};

this.removeChildAt = function(index)
{
  var child = this.getChildAt( index );

  child.parent = undefined;
  this.children.splice( index, 1 );
  return child;

};


this.getChildAt = function(index)
{
    if (index < 0 || index >= this.children.length)
    {
        throw new Error('getChildAt: Supplied index '+ index +' does not exist in the child list, or the supplied DisplayObject must be a child of the caller');
    }
    return this.children[index];

};


this.preUpdate = function(time) {

  for (var i = 0; i < this.children.length; i++)
  {
        this.children[i].preUpdate(time);

  }

};

this.update = function() {

  for (var i = 0; i < this.children.length; i++)
  {

        this.children[i].update();


  }


};

this._updateTransform = function() {



  for (var i = 0; i < this.children.length; i++)
  {

      this.children[i]._updateTransform();

  }


};

this.render = function() {

  for (var i = 0; i < this.children.length; i++)
  {

      this.children[i].render(this.game.context);

  }
};


});


//tobi.Hierarchy.prototype = Object.create( tobi.Transform.prototype );
//tobi.Hierarchy.prototype.constructor = tobi.Hierarchy;

//tobi.Hierarchy.prototype.updateCycle = tobi.Hierarchy.prototype._updateCycle;


      //  if (self.game.world.camera.view.intersects(instance.bounds.box)) {

          /*var transform = {
            x : instance.position.x,
            y : instance.position.y,
            xscale : instance.scale.x,
            yscale : instance.scale.y,
            angle : instance.angle,
          }*/



          //self.view++;
     //}

//}

//tobi.Hierarchy.prototype.renderCycle = tobi.Hierarchy.prototype._renderCycle;
/*
setScene : function(scene) {

this.scene = scene;

},

update : function() {

  var destroyList = [];

  for (var i = 0; i < this.children.length; i++) {
    if (!this.children[i]._selfDestroy) {
      this.children[i].update();
      this.children[i].bounds.setByGameObject(this.children[i]);
      this.children[i].updateTransform();
    } else {
      destroyList.push(i);
    }
  }

  for (var i = destroyList.length-1; i >= 0; i--) {

    var index = destroyList[i];

    if (this.children[index]['destroy'])
      this.children[index].destroy();

      this.children.splice( index, 1 );

  }

},*/

/*


    //self.game.context.fillText("Instances in view: " + this.view,0,36);

//},

/*clear : function() {


}


}*/
