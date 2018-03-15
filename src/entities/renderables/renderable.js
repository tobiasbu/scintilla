
import SceneEntity from '../sceneentity'
import BoundingBox from '../../math/boundingbox';
import { EntityType } from '../entitytype';

export default class Renderable extends SceneEntity
{
    constructor(name, game)
    {
        super(name, game);

        this._layerID = 0;
        this._depthSorting = 0;
        this._visible = true;
        this._alpha = 1;
        this._depthDirty = true; 
        this.bounds = new BoundingBox();
        this.source = null;
        this.type = EntityType.Renderable;
    }

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

    setSource(source)
    {
        if (source === undefined) return;

        if (this.source != source)
            this.source = source;
    }

    render(context, matrix)
    {
        if (!this._visible)
            return;
    }

}