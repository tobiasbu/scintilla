
// Hierarchy Tree of instances
// Instance is a node of the Hierarchy tree
tobi.Hierarchy = tobi.Transform.extend(function() {

this.nodes = [];
//tobi.Transform.call(this);

//if (newTransform)
//this._newTransform();

this.constructor = function() {

  this.super();

};

this.addNode = function(node) {

  return this.addNodeAt(node,this.nodes.length);

};

this.addNodeAt = function(node,index) {

      if(index >= 0 && index <= this.nodes.length)
      {
          if(node.parent)
          {
              node.parent.removeNode(node);
          }

          node.parent = this;


          this.nodes.splice(index, 0, node);

          // automatic sort depth
          if (this['_updateDepth'])
            this._updateDepth();

          //if(this.stage)child.setStageReference(this.stage);

          return node;
      }
      else
      {
          throw new Error(node + 'addChildAt: The index '+ index +' supplied is out of bounds ' + this.children.length);
      }


};

this.removeNode = function(node)
{
    var index = this.nodes.indexOf( node );

    if(index === -1) return;

    return this.removeNodeAt( index );
};

this.removeNodeAt = function(index)
{
  var node = this.getNodeAt( index );

  node.parent = undefined;
  this.nodes.splice( index, 1 );
  return node;

};

this.getNodeAt = function(index)
{
    if (index < 0 || index >= this.nodes.length)
    {
        throw new Error('getChildAt: Supplied index '+ index +' does not exist in the child list, or the supplied DisplayObject must be a child of the caller');
    }
    return this.nodes[index];

};


this._cycleUpdate = function(time) {

  for (var i = 0; i < this.nodes.length; i++)
  {

      if (this.nodes[i]['_cycleUpdate'])
        this.nodes[i]._cycleUpdate(time);

  }

};

this._cycleUpdateTransform = function() {

  for (var i = 0; i < this.nodes.length; i++)
  {

      this.nodes[i].updateTransform();

      if (this.nodes[i]['_cycleUpdateTransform'])
        this.nodes[i]._cycleUpdateTransform();

  }


};

this._cycleRender = function() {

  for (var i = 0; i < this.nodes.length; i++)
  {

    if (this.nodes[i]['_cycleRender'])
      this.nodes[i]._cycleRender(this.game.context);

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
