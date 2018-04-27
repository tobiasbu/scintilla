
//import EntityHierarchy from './EntityHierarchy'
import BoundingBox from '../math/BoundingBox'
import Transform from '../transform/Transform'
import ModuleManager from '../modules/ModuleManager';
import Entity from './Entity';

export default class SceneEntity extends Entity //Hierarchy
{
    constructor(name, game)
    {
        name = name || 'New SceneEntity';
        super(name, game || null)
        this._transform = new Transform();
        this._pool = null;
        this.modules = new ModuleManager(this);
        this.scene = null;       
        this._pendingRemoval = false;
    }

    get isPooled() {
        return this._pool !== null;
    }

    /**
     * If the object is pooled, send back to his pool.
     * @returns {Boolean} True if the object was sent to pool, otherwise false.
     */
    back() {
        if (this.isPooled) {
            
            if (this.scene !== null) {
                this._pendingRemoval = true;
                return this.game.system.pool.push(this);
            } else {
                return false;
            }

        } else {
            return false;
        }
    }

    set x(value) {
        this._transform.position.x = value;
        this._transform.markDirty();
    }

    get x() { return this._transform.position.x; }

    set y(value) {
        this._transform.position.y = value;
        this._transform.markDirty();
    }

    get y() { return this._transform.position.y; }

    get position() { return this._transform.position; }
    set position(value) { this._transform.position = value; this._transform._isDirty = true; }

    get origin() { return this._transform.origin; }
    set origin(value) { this._transform.origin = value; this._transform._isDirty = true; }
    set ['origin.x'](value) { this._transform.origin.x = value; this._transform._isDirty = true;}
    set ['origin.y'](value) { this._transform.origin.y = value; this._transform._isDirty = true;}

    get scale() { return this._transform.scale; }
    set scale(value) { this._transform.scale = value; this._transform._isDirty = true; }
    set ['scale.x'](value) { this._transform.scale.x = value; this._transform._isDirty = true;}
    set ['scale.y'](value) { this._transform.scale.y = value; this._transform._isDirty = true;}

    get angle() { return this._transform.angle; }
    set angle(value) { this._transform.angle = value; this._transform._isDirty = true; }
   
    
}