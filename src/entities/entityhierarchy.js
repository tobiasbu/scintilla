
import Entity from './entity'

// Hierarchy Tree of instances
// Instance is a children of the Hierarchy tree
export default class EntityHierarchy extends Entity {

  constructor(name, game) {
    super(name);    
    this.children = [];
    this.parent = null;
  }

  get childCount() {return this.children.length;}

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


  /*preUpdate(time) {

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
  }*/
}