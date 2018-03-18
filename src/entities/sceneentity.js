
import EntityHierarchy from './entityhierarchy'
import BoundingBox from '../math/boundingbox'
import Transform from '../modules/transform'
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
        this._transformDirty = false;
        this._currentScene = null;
        
        
    }

    set ['position.x'](value) { this.transform.position.x = value; }

    
}