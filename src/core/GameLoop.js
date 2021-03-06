import System from "./system/System";
import RequestAnimationFrame from "../dom/RequestAnimationFrame";
import UpdateStep from "../time/UpdateStep";
import UpdateCamera from "../camera/UpdateCamera";
import BeginDrawRender from "../render/components/BeginDrawRender";
import DrawRender from "../render/components/DrawRender";
import EndDrawRender from "../render/components/EndDrawRender";
import PreUpdateScene from "../scene/components/PreUpdateScene";
import UpdateScene from "../scene/components/UpdateScene";
import DrawUI from "../render/ui/DrawUI";
import DrawTransition from "../render/transition/DrawTransition";
import UpdateTransition from "../render/transition/UpdateTransition";
import UpdateAudioManager from "../audio/manager/components/UpdateAudioManager";



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
        this.updateStep = new UpdateStep(game, game.config);
        this.entityUpdateList = null;
        this.currentScene = null;
        this.camera = null;
        this.canvas = null;
        this.renderer = null;
    }

    loop(deltaTime, timeStamp) {

         // Core Managers

        UpdateAudioManager.call(this.game.audio);

         this.game.input.update(timeStamp);
        
         UpdateTransition(this.game.system.transition, deltaTime);

         // Entities and Scene Update

        this.currentScene = this.game.scene.currentScene;

        let shouldUpdate = (this.currentScene != null && this.currentScene !== undefined);
        //let changeScene = (this.game.scene._changeScene != null || this.game.scene._changeScene !== undefined)



        //if (changeScene)
        PreUpdateScene(this.game.scene);
        //this.game.scene.preUpdate();
        

        

        if (shouldUpdate)
        {
         
            this.entityUpdateList.beginUpdate(deltaTime);

            let lastCameraState = this.camera._transform._isDirty;

            UpdateScene(this.game.scene, deltaTime);
            /*if (this.game.scene._setup)
            {
                // global scene update
                if (this.currentScene.update !== undefined)
                    this.currentScene.update(deltaTime);
            } else {
                if (this.currentScene.loading !== undefined)
                    this.currentScene.loading(deltaTime);
            }*/

            UpdateCamera(this.camera, this.canvas);

            //this.entityUpdateList.transformUpdate(this.camera);
            
            this.entityUpdateList.update(deltaTime);

            
            if (lastCameraState)
                this.camera._transform._isDirty = false;

           

        }

    }

    render(deltaTime) {

        BeginDrawRender(this.renderer);

        if (this.currentScene !== null || this.currentScene !== undefined)
        {
            // Scenes
            DrawRender(this.renderer, this.camera, deltaTime);

            DrawUI(this.system.ui, this.game.scene);

        }

        // User Interface
       

        EndDrawRender(this.system.render);

        // Transition
        this.renderer.context.setTransform(1, 0, 0, 1, 0, 0);

        DrawTransition(this.system.transition, this.renderer.canvas, this.renderer.context);

        // Debug
        if (this.system.ui.debug) {
            this.system.ui.debug.test();
        }

        if (this.renderer.doubleBuffer) {
            this.renderer._domContext.drawImage(this.renderer.canvas, 0, 0); 
        }

    }

}

System.register('GameLoop', GameLoop, 'loop', function() {
    this.updateStep.init(this);
    this.entityUpdateList = this.game.system.entityList;
    this.camera = this.system.camera;
    this.canvas = this.system.render.canvas;
    this.renderer = this.system.render;
});