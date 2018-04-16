import DestroyRenderable from "../renderables/components/DestroyRenderable";

export default function ClearModules(moduleManager, game) {

    
    moduleManager.attached.each(function(key, value) {

        if (value.type === 'render') {
            DestroyRenderable(value, game.render);
        }

        value.entity = null;
        value.moduleManager = null;

        

    });

    moduleManager.attached.clear();
    

}