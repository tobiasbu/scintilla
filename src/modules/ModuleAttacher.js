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

        if (tag === undefined || tag == null) {
            console.warn("ModuleAttacher.tilemap: Can not create Tilemap module without a proper tag name.");
            return null;
        }

        return ModuleProvider.attach(this.moduleManager, 'tilemap', tag);
    }

    spritesheet(tag) {

        let spriteModule;

        if (this.moduleManager.has('render') === false) {
            spriteModule = ModuleProvider.attach(this.moduleManager, 'sprite');
        } else {
            spriteModule = this.moduleManager.getByName('sprite');
        }

        if (spriteModule === undefined || spriteModule === null) {
            console.warn("ModuleAttacher.spritesheet: Could not create Spritesheet module. There is no Sprite module attached. The current Renderable module is not compatible with SpriteSheet module.");
            return null;
        }

        return ModuleProvider.attach(this.moduleManager,'spritesheet', [spriteModule, tag]);


    }
}