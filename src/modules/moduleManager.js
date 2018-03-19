
import Map from '../structures/map'
import List from '../structures/list'
import ModuleAttacher from './moduleAttacher'


export default class ModuleManager
{
    constructor(entity)
    {
        this.entity = entity || null;
        this.attached = new Map();
        this._pendingModules = new List();
        this.attach = new ModuleAttacher(this);
    }

    detach(moduleName, index)
    {
        
    }



} 