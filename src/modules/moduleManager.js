
import Map from '../structures/map'

export default class ModuleManager
{
    constructor(entity)
    {
        this.entity = entity || null;
        this.modules = new Map();
    }

    add(moduleName)
    {
        ModuleRegister.attach(this, moduleName);
    }

    detach(moduleName, index)
    {
        
    }



} 