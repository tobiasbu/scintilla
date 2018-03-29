
import BoundingBox from '../../math/BoundingBox';
import Vector from '../../math/Vector'
import Module from '../Module';

export default class Renderable extends Module
{
    constructor(moduleName, moduleManager)
    {
        super('render', moduleName || 'renderable', moduleManager);

        this._layerID = 0;
        this._depth = 0;
        this._visible = true;
        this._alpha = 1;
        this._depthDirty = true; 
        this._bounds = new BoundingBox();
        this._originInPixels = {x:0, y:0};
        this._originIsDirty = true;
        
        //this.type = EntityType.Renderable;
    }

    get bounds() {return this._bounds;}

    //get originInPixels() {return this._originInPixels; }

    get depth() { return this._depthSorting; }
    get visible() { return this._visible; }
    get layerName() { }
    get layer() { return this._layerID; }
    get alpha() { return this._alpha; }
    set depth(value) {
        if (value != this._depthSorting)
        {
            this._depthSorting = value;
            this._depthDirty = true;
        }
        return this;
    }
    set visible(value) {
        this._visible = value;
        return this;
    }   
    set layer(value) {
        if (this.game != null)
        {
            if (value === 'number')
            {
                //this.game.render.get
            }
        }
    }   

    set alpha(value) {
        this._alpha = alpha;
        return this;
    }



}