import ModuleProvider from "./ModuleProvider";


export default class ModuleAttacher
{
    constructor(moduleManager) {
        this.moduleManager = moduleManager;
    }

    sprite(tag) {
        return ModuleProvider.attach(this.moduleManager, 'sprite', tag);
    }
}