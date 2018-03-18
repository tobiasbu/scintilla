
import Map from '../structures/map'
import RenderLayer from './renderlayer'
import List from '../structures/list';

export default class RenderLayersManagement {

    constructor(game) {
        this.game = game;
        this.renderLayers = new List();
        //this.__renderLayersMap = new Map();
        this.add('default');
    }



    add(name) {

        if (this.contains(name))
        {
            throw new Error("Render.add: There is already a RenderLayer called: \"" +  name + "\".");
        }
       
        //this.__renderLayersMap.set(name, this.__renderLayers.length);
        this.renderLayers.push(new RenderLayer(this.game, name));
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

        this.renderLayers.erase(name);
    }

    contains(layerName)
    {
        if (typeof layerName !== 'string')
            throw new Error("Render.contains: The value name is not a string.");

        this.renderLayers.each(function(layer) {
            if (layer.name == layerName)
            {
                return true;
            }
        });

        return false;
    }

}