import RequestAnimationFrame from "../dom/RequestAnimationFrame";
import GameSystemManager from "./GameSystemManager";
import UpdateStep from "../time/UpdateStep";
import UpdateCamera from "../camera/UpdateCamera";
import BeginDrawRender from "../render/components/BeginDrawRender";
import DrawRender from "../render/components/DrawRender";
import EndDrawRender from "../render/components/EndDrawRender";


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
        this.canvas = null;
    }

    init() {
       this.updateStep.init(this);
       this.entityUpdateList = this.game.system.entityList;
       this.camera = this.system.camera;
       this.canvas = this.system.render.canvas;
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

            UpdateCamera(this.camera, this.canvas);
            
            this.entityUpdateList.update(deltaTime);

            this.entityUpdateList.lateUpdate(deltaTime);

            if (this.camera.transform._isDirty)
                this.camera.transform._isDirty = false;

        }

    }

    render(deltaTime) {

        if (this.currentScene == null || this.currentScene === undefined)
            return;

        BeginDrawRender(this.system.render);

        DrawRender(this.system.render, this.camera, deltaTime);

        EndDrawRender(this.system.render);

    }

}

GameSystemManager.register('GameLoop', GameLoop, 'loop');