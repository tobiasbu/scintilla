import ModuleProvider from "./ModuleProvider";
import GetRenderModule from "./components/GetRenderModule";



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

        let spriteModule = GetRenderModule(this.moduleManager, 'spritesheet', "SpriteSheet");

        if (spriteModule !== null)
            return ModuleProvider.attach(this.moduleManager,'spritesheet', [spriteModule, tag]);
        else
            return null;


    }

    animMachine(tag) {

        let spriteModule = GetRenderModule(this.moduleManager, 'animMachine', "AnimationMachine");

        if (spriteModule !== null)
            return ModuleProvider.attach(this.moduleManager,'animMachine', [spriteModule, tag]);
        else
            return null;
    }
}