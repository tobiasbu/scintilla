
import DataMap from '../structures/Map'
import DataList from '../structures/List'
import ModuleAttacher from './ModuleAttacher'


export default class ModuleManager
{
    constructor(entity)
    {
        this.entity = entity || null;
        this.attached = new DataMap();
        this._pendingModulesInitialization = new DataList();
        this.attach = new ModuleAttacher(this);
    }

    detach(moduleName, index)
    {
        
    }

    has(moduleName) {
        return this.attached.has(moduleName);
    }

    get(moduleName) {
        return this.attached.get(moduleName);
    }

} 