
import DataMap from '../structures/Map'
import DataList from '../structures/List'
import ModuleAttacher from './ModuleAttacher'
import Validate from '../utils/Validate';

const ModulesMap = {
    'sprite' : 'render'
}

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

    has(moduleType) {
        return this.attached.has(moduleType);
    }

    hasByName(moduleName) {
        
        let moduleType = ModulesMap[moduleName];

        if (moduleType === undefined)
            return false;

        return this.has(moduleType);
    }

    get(moduleType) {
        return this.attached.get(moduleType);
    }

    getByName(moduleType) {
        
        if (!Validate.isString(moduleName))
            return null;

        return this.attached.find(function(key, value) {

            if (value.name === moduleName)
                return value;

        });

    }



    

} 