

import DataMap from '../structures/Map'
import InitializeModuleBase from './components/InitializeModuleBase';


class ModuleProviderManager
{
    constructor()
    {
        this.proxyModules = new DataMap();
    }

    attach(moduleManager, moduleName, args)
    {
        let attached = moduleManager.attached;

        if (attached.has(moduleName))
            throw new Error('ModuleManager.attach: Could not attach module ' + moduleName + '. Already exists');

        if (!this.proxyModules.has(moduleName))
            throw new Error('ModuleManager.attach: Module type ' + moduleName + ' don\'t exists.');

        // create a new module
        let newModule = this.proxyModules.get(moduleName)(moduleManager, args);

        // initialize entity module
        InitializeModuleBase(newModule, moduleManager.entity);

        // attach the new module to manager
        attached.insert(newModule.type, newModule);

        // add to pending initialization list only modules that require this option
        if (newModule.type === 'render') {
            moduleManager._pendingModulesInitialization.push(newModule);
        }

        return newModule;
    }

    register(moduleName, func)
    {
        if (!ModuleProvider.proxyModules.has(moduleName))
        ModuleProvider.proxyModules.insert(moduleName, func); // { type: moduleType, func: func }
        
    }    
}

var ModuleProvider = new ModuleProviderManager();

export default ModuleProvider;