import ClearModules from "../../modules/components/ClearModules";

export default function ClearEntities() {

    for (let i = 0; i < this._instances.length; i++) {

        let element = this._instances.at(i);

        if (element['destroy'] !== undefined && element['destroy'] !== null) {
            element.destroy();
        }

        if (element.persistent === false)
        {
            ClearModules(element.modulesManager);
            element.transform = null;
            element.modulesManager = null;
            element = null;
            this._instances.splice(i,1);
        }


    }

}