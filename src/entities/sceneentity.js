
import Entity from './entity'
import BoundingBox from '../math/boundingbox'
import Transform from '../components/transform'

export default class SceneEntity extends Entity
{
    constructor(name)
    {
        this._name = name || 'New SceneEntity';
        this._active = true;
        this.transform = new Transform();
        this.bounds = new BoundingBox();
        this._isDirty = false;
        this._currentScene = null;
        
    }

    set ['transform.position.x'](value) { this.transform.position.x = value; }

    
}