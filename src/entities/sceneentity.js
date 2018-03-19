
import EntityHierarchy from './entityhierarchy'
import BoundingBox from '../math/boundingbox'
import Transform from '../modules/core/transform'
import ModuleManager from '../modules/moduleManager';

export default class SceneEntity extends EntityHierarchy
{
    constructor(name, game)
    {
        name = name || 'New SceneEntity';
        super(name, game || null)
        this.transform = new Transform();
        this.type = null;
        this.pool = null;
        this.modules = new ModuleManager(this);
        //this.bounds = new BoundingBox();
        //this._transformDirty = false;
        //this._currentScene = null;
        
        
    }

    get ['position']() { return this.transform.position; }
    set ['position'](value) { this.transform.position = value; this.transform._isDirty = true; }
    set ['position.x'](value) { this.transform.position.x = value; this.transform._isDirty = true;}
    set ['position.y'](value) { this.transform.position.y = value; this.transform._isDirty = true;}
    
}