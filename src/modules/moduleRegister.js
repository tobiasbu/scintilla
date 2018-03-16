

import List from '../structures/list'

class ModuleProxyRegister
{
    constructor()
    {
        this.entityModules = {};
    }

    attach(manager, moduleType, args)
    {
        if (!this.manager.modules[moduleType])
            this.manager.modules[moduleType] = new List();

        this.manager.modules[moduleType].push(this.modules[moduleType].call(args));
    }

    static register(moduleType, func)
    {
        if (!ModuleRegister.entityModules.hasOwnProperty(moduleType))
            ModuleRegister.entityModules[moduleType] = func;
        
    }    
}

var ModuleRegister = new ModuleProxyRegister();

export default ModuleRegister;