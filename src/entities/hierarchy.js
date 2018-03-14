
// Hierarchy Tree of instances
// Instance is a children of the Hierarchy tree
export default class Hierarchy {

  constructor() {
    this.children = [];
  }

  addChild(child) {
    return this.addChildAt(child,this.children.length);
  }

  addChildAt(child,index) {
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
  }

  removeChild(child)
  {
      var index = this.children.indexOf( child );

      if(index === -1) return;

      return this.removeChildAt( index );
  }

  removeChildAt(index)
  {
    var child = this.getChildAt( index );

    child.parent = undefined;
    this.children.splice( index, 1 );
    return child;

  }


  getChildAt(index)
  {
      if (index < 0 || index >= this.children.length)
      {
          throw new Error('Hierarchy.getChildAt: Index '+ index +' does not exist in the child list');
      }
      return this.children[index];

  }


  preUpdate(time) {

    for (var i = 0; i < this.children.length; i++)
    {
          this.children[i].preUpdate(time);

    }

  }

  update() {

    for (var i = 0; i < this.children.length; i++)
    {
          this.children[i].update();
    }


  }

  _updateTransform() {
    for (var i = 0; i < this.children.length; i++)
    {
        this.children[i]._updateTransform();
    }
  }



}


//scintilla.Hierarchy.prototype = Object.create( scintilla.Transform.prototype );
//scintilla.Hierarchy.prototype.constructor = scintilla.Hierarchy;

//scintilla.Hierarchy.prototype.updateCycle = scintilla.Hierarchy.prototype._updateCycle;


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

//scintilla.Hierarchy.prototype.renderCycle = scintilla.Hierarchy.prototype._renderCycle;
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
