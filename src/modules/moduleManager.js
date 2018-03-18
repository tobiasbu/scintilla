
import Map from '../structures/map'
import ModuleAttacher from './moduleAttacher'

export default class ModuleManager
{
    constructor(entity)
    {
        this.entity = entity || null;
        this.modules = new Map();
        this.attach = new ModuleAttacher(this);
    }

    detach(moduleName, index)
    {
        
    }



} 