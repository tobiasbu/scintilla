import RequestAnimationFrame from "../dom/requestAnimationFrame";
import GameSystemManager from "./gameSystemManager";
import UpdateStep from "../time/updateStep";
import UpdateCamera from "../camera/updateCamera";


/*
*
* core game loop system
*
* @class GameLoop
* @protected
*/
export default class GameLoop {

    constructor(game, system) {
        this.game = game;
        this.system = system;
        this.updateStep = new UpdateStep(this.game, this.game.config);
        this.entityUpdateList = null;
        this.currentScene = null;
        this.camera = null;
    }

    init() {
       this.updateStep.init(this);
       this.entityUpdateList = this.game.system.entityList;
       this.camera = this.system.camera;
    }

    loop(deltaTime) {

         // Core Managers

         this.game.input.update();
         

         // Entities and Scene Update

         this.currentScene = this.game.scene.currentScene;

        let shouldUpdate = (this.currentScene != null && this.currentScene !== undefined);
        //let changeScene = (this.game.scene._changeScene != null || this.game.scene._changeScene !== undefined)

        //if (changeScene)
            this.game.scene.preUpdate();
        

        if (shouldUpdate)
        {
            
            if (this.game.scene._setup)
            {
                // global scene update
                if (this.currentScene.update !== undefined)
                    this.currentScene.update(deltaTime);
            } else {
                if (this.currentScene.loading !== undefined)
                    this.currentScene.loading(deltaTime);
            }

            console.clear();

            UpdateCamera(this.camera);
            
            console.log(this.camera.transform.matrix.toString())
            

            this.entityUpdateList.update(deltaTime);

            this.entityUpdateList.lateUpdate(deltaTime);

            if (this.camera._isDirty)
                this.camera._isDirty = false;

        }

    }

    render(deltaTime) {

        if (this.currentScene == null || this.currentScene === undefined)
            return;

        this.system.render.renderBegin();
        this.system.render.render(deltaTime);
        this.system.render.renderEnd();
          
    }

}

GameSystemManager.register('GameLoop', GameLoop, 'loop');