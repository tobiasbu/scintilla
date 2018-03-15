import List from "../structures/list";


export default class RenderLayer { 
    
    constructor(game,layerName) {

        this._name = layerName;
        this.game = game;
        this.__enable = true;
        this.renderList = new List(true);
        this.__isDirty = false;
    }

    // Add renderable components
    add(renderer) {
    
        if (renderer === undefined)
            return;

        this.renderList.push(renderer);
        this.renderer.__renderLayer = this;
        this.__isDirty = true;

    }

    remove(renderer)
    {
        return this.renderList.remove(renderer);
    }

    removeAt(index)
    {
        
    }

    at(index)
    {
        if (index < 0 || index >= this.__renderers.size)
        {
            throw new Error('RenderLayer.at: Renderer at '+ index +' does not exist in the render layer list: \"' + name + "\".");
        }
        return this.renderList.at(index);

    }

    render()
    {
        if (!this.__enable)
            return;

        if (this.__isDirty)
        {
            this.renderList.sort(this.sortDepth);

            this.__isDirty = false;
        }

        var self = this;

        this.renderList.each((element) => {
            element.render(self.game.context);
        });

    }

    sortDepth(a, b) { // sort ascending

        return a._depthSorting - b._depthSorting;

        /*this.__renderers.sort(

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
          });*/

    }

    get length() {return this.__renderers.length;}
    get name() {return this._name;}
    get enable() {return this.__enable;}
    set enable(value) {
        value = !!value;
    
        if (value !== this._enabled)
        {
            //if (!value)
            //    this.reset();

            this._enabled = value;
        }
    }

}


