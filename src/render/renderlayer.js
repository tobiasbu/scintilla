

tobi.RenderLayer = function(game,name) {

    this.name = name;
    this.game = game;
    this.__renderers = [];

}

tobi.RenderLayer.prototype = {

    // Add renderable components
    add : function(renderer) {
    
        
    
    },

    remove : function(renderer)
    {

    },

    removeAt : function(index)
    {

    },

    get : function(index)
    {

    }

}

tobi.RenderLayer.prototype.constructor = tobi.RenderLayer;