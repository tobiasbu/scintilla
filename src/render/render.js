
import Map from '../structures/map'
import RenderLayer from './renderlayer'

export default class Render {
    
    constructor(game, canvas, context) {
        this.game = game;
        this.canvas = canvas;
        this.context = context;
        this.__enable = true;
        this.__renderLayers = [];
        this.__renderLayersMap = new Map();
        this.addLayer('default');
    }

    addLayer(name)
    {
        if (this.contains(name))
        {
            throw new Error("Render.add: There is already a RenderLayer called: \"" +  name + "\".");
        }
       
        this.__renderLayersMap.set(name, this.__renderLayers.length);
        this.__renderLayers.push(new RenderLayer(game, name));
    }

    remove(name)
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
    }

    contains(layerName)
    {
        if (typeof layerName !== 'string')
            throw new Error("Render.contains: The value name is not a string.");

        return this.__renderLayers.indexOf(layerName) > -1;
    }

    _render()
    {
        if (!this.__enable)
            return;

        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.globalCompositeOperation = 'source-over';
        this.context.clearRect(0, 0, this.canvas.width, this.game.height);
        this.context.fillStyle = '#fff';//this.universe.backgroundColor;
        this.context.fillRect(0, 0, this.canvas.width, this.game.height);

        for (var i = 0; i < this.__renderLayers.length; i++)
        {
            if (this.__renderLayers[i].enable)
            {
                this.__renderLayers[i].render();
            }
        }

        this.game.scene.render();


        if (this.game.debug != null) {

            this.context.setTransform(1, 0, 0, 1, 0, 0);
            this.game.debug.test();
            //console.log("asdasd");
      
      }
    }
}

