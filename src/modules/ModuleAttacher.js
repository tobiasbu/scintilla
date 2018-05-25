import ModuleProvider from "./ModuleProvider";
import GetRenderModule from "./components/GetRenderModule";



export default class ModuleAttacher
{
    constructor(moduleManager) {
        this.moduleManager = moduleManager;
    }

    sprite(tag, frameX, frameY, frameWidth, frameHeight) {
        return ModuleProvider.attach(this.moduleManager, 'sprite', [tag, frameX, frameY, frameWidth, frameHeight]);
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

        if (spriteModule === null)
            return null;
        else
            return ModuleProvider.attach(this.moduleManager,'spritesheet', [spriteModule, tag]);


    }


    animMachine(tag) {

        let spriteModule = GetRenderModule(this.moduleManager, 'animMachine', "AnimationMachine");

        if (spriteModule === null)
            return null;
        else
            return ModuleProvider.attach(this.moduleManager,'animMachine', [spriteModule, tag]);
    }

    rectangle(width, height, color) {
        return ModuleProvider.attach(this.moduleManager, 'rectangle', [width, height, color]);
    }
}