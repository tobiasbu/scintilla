import List from "../structures/list";
import GameSystemManager from "../core/gameSystemManager";
import UpdateTransform from '../modules/core/updateTransform'
import UpdateModules from '../modules/core/updateModules'
import Matrix from '../math/matrix'

export default class EntityUpdateList {

    constructor(game)
    {
        this.game = game;
        this._instances = null;
        this._destroyInstances = null;
        this._pendingInstances = null;
    }

    get length() {return this._instances.size;}

    init()
    {
        this._instances = new List();
        this._destroyInstances = new List();
        this._pendingInstances = new List();
    }

    add(instance) {
        if (this._instances.indexOf(instance) === -1 && this._pendingInstances.indexOf(instance) === -1)
        {
            this._pendingInstances.push(instance);
        }

        return instance;
    }

    remove(instance) {

    }

    update() {

        let parent = Matrix.identity();

        this._instances.each(element => {
            
            if (element.active)
            {
                
                UpdateTransform(element.transform, parent);

                UpdateModules(element.modules, this.game);

                if (element.update !== undefined)
                    element.update();
            }

            
        });
    }

    lateUpdate()
    {
        let removeSize = this._destroyInstances.size;
        let insertSize = this._pendingInstances.size;
        
        if (insertSize === 0 && removeSize === 0)
            return;


        if (removeSize > 0)
            this._instances.eraseList(this._destroyInstances, removeSize);

        
        /*this._pendingInstances.each(instance => {

            this.initializeModules(instance);

            this._instances.push(instance);
        })

        this._pendingInstances.clear();*/

        this._instances.concat(this._pendingInstances, true);

        this._pendingInstances.childs.length = 0;
        this._destroyInstances.childs.length = 0;

    }

    /*initializeModules(instace)
    {
        let modules = instace.modules.attached;

        modules.each(element => {
            if (element.initialize !== undefined)
                element.initialize(instace, this.game);
        });
    }*/

}

GameSystemManager.register('EntityUpdateList', EntityUpdateList, 'entityList');

