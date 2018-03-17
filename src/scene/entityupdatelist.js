import List from "../structures/list";
import GameSystemManager from "../core/gameSystemManager";


export default class EntityUpdateList {

    constructor(game)
    {
        this.game = this.game;
        this._instances = null;
        this._destroyInstances = null;
        this._pendingInstances = null;
    }

    init()
    {
        this._instances = new List();
        this._destroyInstances = new List();
        this._pendingInstances = new List();
    }

    add(instance) {
        if (this._instances.indexOf(instance) === -1 && this._pendingInstances.indexOf(instance) === -1)
            this._pendingInstances.push(instance);

        return instance;
    }

    remove(instance) {

    }

    update() {

        this._instances.each(element => {
            
            if (element.active)
            {
                element.updateTransform();

                element.modules.updateModules();

                if (element.update !== undefined)
                    element.update();
            }

            
        });
    }

    lateUpdate()
    {
        let removeSize = this._destroyInstances.size;
        let insertSize = this._pendingInstances.size;
        
        if (insertSize === 0 && insertSize === 0)
            return;


        this._instances.eraseList(this._destroyInstances, removeSize, true);

        this._instances.concat(this._pendingInstances, true);

        this._pendingInstances.childs.length = 0;
        this._destroyInstances.childs.length = 0;

    }

}

GameSystemManager.register('EntityUpdateList', EntityUpdateList, 'entityList');

