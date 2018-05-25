import System from "../core/system/System";
import DataList from "../structures/List";
import UpdateTransform from '../transform/UpdateTransform';
import ModulesUpdater from "../modules/components/ModulesUpdater";
import DestroyEntity from "./hierarchy/DestroyEntity";
import DetachModules from "../modules/components/DetachModules";
import AttachModules from "../modules/components/AttachModules";
import PrioritySorting from "./hierarchy/PrioritySorting";


export default class EntityUpdateList {

    constructor(game)
    {
        this.game = game;
        this._instances = new DataList();
        this._destroyInstances = new DataList();
        this._removalInstances = new DataList();
        this._pendingInstances = new DataList();
        this._camera = null;
        this._requirePrioritySorting = false;
    }

    get length() {return this._instances.size;}

    addInstance(instance) {
        if (this._instances.indexOf(instance) === -1 && this._pendingInstances.indexOf(instance) === -1) {
            this._pendingInstances.push(instance);
            //if (instance._priority !== 0) {
                //this._requirePrioritySorting = true;
            //}
        }
        return instance;
    }

    destroyInstance(instance) {

        if (instance === undefined) return false;

        if (this._instances.has(instance) && this._destroyInstances.indexOf(instance) === -1) {
            this._destroyInstances.push(instance);
             return true;
        }

        return false;
    }

    removeInstance(instance) {

        let index = this._instances.indexOf(instance);

        if (index > -1 && this._destroyInstances.indexOf(instance) === -1 && this._removalInstances.indexOf(instance) === -1) {
            this._removalInstances.push(instance);
            return true;
            //DetachModules(instance.modules, this.game);
            //return this._instances.eraseAt(instance);
        }

        return false;
    }

    update(dt) {

        let instances =  this._instances;

        for (let i = 0; i < instances.size; i++) {

            let element = instances.at(i);

            if (!element.active)
                continue;

                UpdateTransform(element._transform, this._camera._transform);

                ModulesUpdater(element.modules, this.game);

                if (element.update !== undefined)
                    element.update.call(element, dt); //update(dt);

       
                if (element._transform._isDirty)
                    element._transform._isDirty = false;
            


        }

    }

    beginUpdate()
    {
        let destroySize = this._destroyInstances.length;
        let removalSize = this._removalInstances.length;
        let insertSize = this._pendingInstances.length;
        
        if (insertSize === 0 && removalSize === 0 && destroySize === 0)
            return;


        if (destroySize > 0) {
           
            for (let i = 0; i < destroySize; i++) {
                let instance = this._destroyInstances.at(i);
        
                if (instance !== undefined) {
                    DestroyEntity(instance, this.game, false);
                    instance = null;
                }
            }

            this._instances.eraseList(this._destroyInstances, destroySize);
            this._destroyInstances.childs.length = 0;
        }

        if (removalSize > 0) {
            for (let i = 0; i < removalSize; i++) {
                let instance = this._removalInstances.at(i);
        
                if (instance !== undefined) {
                    DetachModules(instance.modules, this.game);
                    this._instances.erase(instance);
                }
            }

            this._removalInstances.childs.length = 0;

        }

        
        /*let content = this._pendingInstances.content();

        for (let i = 0; i < insertSize; i++) {

            let element = content[i];
            this._instances.push(element);
            this._pendingInstances.eraseAt(i);
        }*/

        let content = this._pendingInstances.content();

        if (insertSize !== 0) {
            for (let i = 0; i < insertSize; i++) {

                let instance =  content[i];
                AttachModules(instance.modules, this.game);
                this._instances.push(instance);
                //this._pendingInstances.eraseAt(i);
            }

 
           /* if (this._requirePrioritySorting) {
                this._instances.sort(PrioritySorting);
            }*/
            //this._instances.concat(this._pendingInstances);
            //this._pendingInstances.childs.length = 0;
            content.length = 0;
        }        

    }

}

System.register('EntityUpdateList', EntityUpdateList, 'entityList', 
function() {

    this._camera = this.game.system.camera;
});

