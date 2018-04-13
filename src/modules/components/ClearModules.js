
export default function ClearModules(modulesManager) {

    
    modulesManager.attached.each(function(key, value) {

        value.entity = null;
        value.moduleManager = null;

    });

    modulesManager.attached.clear();
    

}