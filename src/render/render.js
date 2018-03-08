

tobi.Render = function(game, canvas, context) {

    this.game = game;
    this.canvas = canvas;
    this.context = context;
    this.__enable = true;
    this.__renderLayers = [];
    this.__renderLayersMap = new tobi.Map();
    this.add('default');
}

tobi.Render.prototype = {

    add : function(name)
    {
        if (this.contains(name))
        {
            throw new Error("Render.add: There is already a RenderLayer called: \"" +  name + "\".");
        }
       
        this.__renderLayersMap.set(name, this.__renderLayers.length);
        this.__renderLayers.push(new tobi.RenderLayer(game, name));
    },

    remove : function(name)
    {
        if (typeof name !== 'string')
            throw new Error("Render.remove: The value name is not a string.");

        if (name === "default")
            throw new Error("Render.remove: You can not remove the \"default\" layer.");

        if (!this.__renderLayersMap.has(name))
            throw new Error("Render.remove: Could not remove layer. There is no layer named \"" + name + "\".");

        var index = this.__renderLayersMap.get(name);
        this.__renderLayers.splice(index, 1);
        this.__renderLayersMap.delete(name);
    },

    contains : function(name)
    {
        if (typeof name !== 'string')
            throw new Error("Render.contains: The value name is not a string.");

        return this.__renderLayers.indexOf(name) > -1;
    },

    _render : function()
    {
        if (!this.__enable)
            return;

        this.game.context.setTransform(1, 0, 0, 1, 0, 0);
        this.game.context.globalCompositeOperation = 'source-over';
        this.game.context.clearRect(0, 0, this.canvas.width, this.game.height);
        //this.game.context.fillStyle = this.universe.backgroundColor;
        this.game.context.fillRect(0, 0, this.canvas.width, this.game.height);

        for (var i = 0; i < this.__renderLayers.length; i++)
        {
            if (this.__renderLayers[i].enable)
            {
                this.__renderLayers[i].render();
            }
        }
    }

    

}

tobi.Render.prototype.constructor = tobi.Render;

