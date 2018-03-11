

Scintilla.RenderLayer = function(game,name) {

    this.name = name;
    this.game = game;
    this.__enable = true;
    this.__renderers = [];
    this.__isDirty = true;

}

Scintilla.RenderLayer.prototype = {

    // Add renderable components
    add : function(renderer) {
    
        if (renderer === undefined)
            return;

        this.__renderers.push(renderer);
        this.renderer.__renderLayer = this;
        this.__isDirty = true;

    },

    remove : function(renderer)
    {
        var index = this.__renderers.indexOf(renderer);

        if(index === -1)
            return;

        return this.removeChildAt(index);
    },

    removeAt : function(index)
    {
        var child = this.getChildAt(index);
        this.__renderers.splice( index, 1 );
        return child;
    },

    at : function(index)
    {
        if (index < 0 || index >= this.__renderers.length)
        {
            throw new Error('RenderLayer.at: Renderer at '+ index +' does not exist in the render layer list: \"' + name + "\".");
        }
        return this.__renderers[index];

    },

    render : function()
    {
        if (!this.__enable)
            return;

        if (this.__isDirty)
        {
            this._updateDepth();
            this.__isDirty = false;
        }


        for (var i = 0; i < this.__renderers.length; i++)
        {
            this.__renderers[i].render(this.game.context);
        }
    },

    clear : function()
    {
        this.__renderers.splice(0, this.__renderers.length);
    },

    _updateDepth : function() { // sort ascending

        this.__renderers.sort(

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
          });

          
    }



}
Scintilla.RenderLayer.prototype.constructor = Scintilla.RenderLayer;


Object.defineProperty(Scintilla.RenderLayer.prototype, "length", {

    get: function() {
        return this.__renderers.length;
    }

});

Object.defineProperty(Scintilla.RenderLayer.prototype, "name", {

    get: function() {
        return this.__renderers.name;
    }

});

Object.defineProperty(Scintilla.RenderLayer.prototype, "enable", {

    get: function() {
        return this.__enable;
    },

    set: function(value) {

            value = !!value;
    
        if (value !== this._enabled)
        {
            //if (!value)
            //    this.reset();

            this._enabled = value;
        }
    }
    

});



