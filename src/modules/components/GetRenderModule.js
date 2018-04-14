import ModuleProvider from "../ModuleProvider";

export default function GetRenderModule(moduleManager, attacherName, formalName) {

    let spriteModule;

    if (moduleManager.has('render') === false) {
        spriteModule = ModuleProvider.attach(moduleManager, 'sprite');
    } else {
        spriteModule = moduleManager.getByName('sprite');
    }

    if (spriteModule === undefined || spriteModule === null) {
        console.warn("ModuleAttacher." + attacherName + ": Could not create " + formalName + " module. There is no Sprite module attached. The current Renderable module is not compatible with " + formalName + " module.");
        return null;
    }

    return spriteModule;
}