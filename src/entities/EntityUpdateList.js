import System from "../core/system/System";
import DataList from "../structures/List";
import UpdateTransform from '../transform/UpdateTransform'
import Matrix from '../math/Matrix'
import ModulesUpdater from "../modules/components/ModulesUpdater";


export default class EntityUpdateList {

    constructor(game)
    {
        this.game = game;
        this._instances = new DataList();
        this._destroyInstances = new DataList();
        this._pendingInstances = new DataList();
        this._camera = null;
    }

    get length() {return this._instances.size;}

    add(instance) {
        if (this._instances.indexOf(instance) === -1 && this._pendingInstances.indexOf(instance) === -1) {
            this._pendingInstances.push(instance);
        }
        return instance;
    }

    remove(instance) {

    }

    update(dt) {

        for (let i = 0; i < this._instances.length; i++) {

            let element = this._instances.at(i);

            if (element.active)
            {
                if (element.update !== undefined)
                    element.update.call(element, dt); //update(dt);

                UpdateTransform(element.transform, this._camera.transform);

                ModulesUpdater(element.modules, this.game);

                if (element.transform._isDirty)
                    element.transform._isDirty = false;
            }


        }

    }

    lateUpdate()
    {
        let removeSize = this._destroyInstances.length;
        let insertSize = this._pendingInstances.length;
        
        if (insertSize === 0 && removeSize === 0)
            return;


        if (removeSize > 0) {
            this._instances.eraseList(this._destroyInstances, removeSize);
            this._destroyInstances.childs.length = 0;
        }

        
        /*let content = this._pendingInstances.content();

        for (let i = 0; i < insertSize; i++) {

            let element = content[i];
            this._instances.push(element);
            this._pendingInstances.eraseAt(i);
        }*/

        if (insertSize > 0) {
            this._instances.concat(this._pendingInstances);
            this._pendingInstances.childs.length = 0;
            console.log( this._instances.childs);
        }

        /*    

        this._pendingInstances.clear();*/

        //this._instances.concat(this._pendingInstances, true);

        
        

    }

}

System.register('EntityUpdateList', EntityUpdateList, 'entityList', 
function() {

    this._camera = this.game.system.camera;
});

