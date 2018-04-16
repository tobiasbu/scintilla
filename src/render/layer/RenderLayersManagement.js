
import DataMap from '../../structures/Map';
import RenderLayer from './RenderLayer';
import DataList from '../../structures/List';
import Renderable from '../../modules/renderables/Renderable';

export default class RenderLayersManagement {

    constructor(game) {
        this.game = game;
        this.renderLayers = new DataList();
        //this.__renderLayersMap = new DataMap();
        this.add('default');
    }

    has(id) {
        return this.renderLayers.hasAt(id);
    }


    add(name) {

        if (this.contains(name))
        {
            throw new Error("RenderLayerManagement.add: There is already a RenderLayer called: \"" +  name + "\".");
        }
       
        //this.__renderLayersMap.set(name, this.__renderLayers.length);
        this.renderLayers.push(new RenderLayer(this.game, name));
    }

    remove(name)
    {
        if (typeof name !== 'string')
            throw new Error("RenderLayerManagement.remove: The value name is not a string.");

        if (name === "default")
            throw new Error("RenderLayerManagement.remove: You can not remove the \"default\" layer.");

        if (!this.__renderLayersMap.has(name))
            throw new Error("RenderLayerManagement.remove: Could not remove layer. There is no layer named \"" + name + "\".");

        var index = this.__renderLayersMap.get(name);

        this.renderLayers.erase(name);
    }

    contains(layerName)
    {
        if (typeof layerName !== 'string')
            throw new Error("RenderLayerManagement.contains: The value name is not a string.");

        let val = this.renderLayers.each(function(layer) {
           
            if (layer.name == layerName)
            {
                return true;
            }
        });

        return val || false;
    }


    findRenderableLayer(renderable) {
        return this.renderLayers.each(function(layer) {
            if (layer.has(renderable))
                return layer;
        }) || null;
    }

    findRenderableAtLayer(renderable, layerIndex) {

        if (layerIndex === undefined) layerIndex = 0;

        return this.renderLayers.at(layerIndex).has(renderable);
    }

    removeRenderable(renderable) {
        return this.renderLayers.each(function(layer) {
            let idx = layer.renderList.indexOf(renderable);

            if (idx !== -1) {
                return layer.removeAt(idx);
            }
        }) || null;
    }

    addRenderable(renderable, layerIndex) {

        if (layerIndex === undefined) layerIndex = 0;

        if (layerIndex >= this.renderLayers.size)
            layerIndex = this.renderLayers.size - 1;
        else if (layerIndex < 0)
            layerIndex = 0;

        if (renderable instanceof Renderable) {

            let layer = this.findRenderableLayer(renderable);

            if (layer !== null) {
                console.warn("RenderLayerManagement.addRenderable: Could not add renderable. The renderable is already in the layer \'" + layer.name + "\'.");
                return false;
            } else {
                this.renderLayers.at(layerIndex).add(renderable);
                return true;
            }

        } else {
            console.warn("RenderLayerManagement.addRenderable: Could not add renderable. It is not a instance of Renderable module.")
            return false;
        }
    }

}