
import Map from '../structures/map'

export default class ModuleManager
{
    constructor(entity)
    {
        this.entity = entity || null;
        this.modules = new Map();
    }

    attach(moduleName)
    {
        ModuleRegister.attach(this, moduleName);
    }

    detach(moduleName, index)
    {
        
    }



} 