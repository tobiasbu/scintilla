

import Map from '../structures/map'


class ModuleProxyRegister
{
    constructor()
    {
        this.proxyModules = new Map();
    }

    attach(manager, moduleName, args)
    {
        let modules = manager.modules;

        if (modules.has(moduleName))
            throw new Error('ModuleManager.attach: Could not attach module ' + moduleName + '. Already exists');

        if (!this.proxyModules.has(moduleName))
            throw new Error('ModuleManager.attach: Module type ' + moduleName + ' don\'t exists.');

        var mod = this.proxyModules.get(moduleName).func.call(manager, args);
        modules.set(moduleName, mod);
        return mod;
    }

    register(moduleName, moduleType, func)
    {
        if (!ModuleRegister.proxyModules.has(moduleName))
            ModuleRegister.proxyModules.set(moduleName, { type: moduleType, func: func });
        
    }    
}

var ModuleRegister = new ModuleProxyRegister();

export default ModuleRegister;