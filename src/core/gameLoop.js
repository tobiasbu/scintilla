import RequestAnimationFrame from "../dom/requestAnimationFrame";
import GameSystemManager from "./gameSystemManager";
import UpdateStep from "../time/updateStep";


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
        
    }

    init() {
       this.updateStep.init(this);
    }

    loop(deltaTime) {

         // Core Managers

        console.log("asdasd");

         this.game.input.update();
        //this.sound.update();

        // Scene Update
        //this.game.update();
        this.game.scene.preUpdate();
        this.game.scene.update(deltaTime);

    }

    render(deltaTime) {

        this.system.render.renderBegin();
        this.system.render.render(deltaTime);
        this.system.render.renderEnd();
          
    }

}

GameSystemManager.register('GameLoop', GameLoop, 'loop');