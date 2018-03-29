
export default function InitializeModuleBase(entityModule, instace) {

    entityModule.entity = instace;
    entityModule.moduleManager = instace.modules;

}