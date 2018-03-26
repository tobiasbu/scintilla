
import DataMap from '../structures/map'
import DataList from '../structures/list'
import ModuleAttacher from './moduleAttacher'


export default class ModuleManager
{
    constructor(entity)
    {
        this.entity = entity || null;
        this.attached = new DataMap();
        this._pendingModules = new DataList();
        this.attach = new ModuleAttacher(this);
    }

    detach(moduleName, index)
    {
        
    }



} 