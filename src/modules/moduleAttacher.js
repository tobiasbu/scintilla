import ModuleRegister from "./moduleRegister";


export default class ModuleAttacher
{
    constructor(moduleManager) {
        this.moduleManager = moduleManager;
    }

    sprite(tag) {
        return ModuleRegister.attach(this.moduleManager, 'sprite', tag);
    }
}