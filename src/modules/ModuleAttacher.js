import ModuleProvider from "./ModuleProvider";


export default class ModuleAttacher
{
    constructor(moduleManager) {
        this.moduleManager = moduleManager;
    }

    sprite(tag) {
        return ModuleProvider.attach(this.moduleManager, 'sprite', tag);
    }

    tilemap(tag) {

        if (tag === undefined || tag == null)
            throw new Error("ModuleAttacher.tilemap: Can not create Tilemap module without a proper tag name.");

        return ModuleProvider.attach(this.moduleManager, 'tilemap', tag);
    }
}