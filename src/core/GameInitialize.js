import Physics from "../physics/physics";
import Input from "../input/Input";
import GameTime from "../time/GameTime";
import InitializeSystems from "./system/components/InitializeSystems";
import CreateRender from "./CreateRender";
import AppendDOM from "../dom/AppendDOM";

  /**
    * Initialize engine
    *
    * @method Game#init()
    * @protected
    */
export default function GameInitialize(game) {

    if (game.systemInited)
        return;

    let render = CreateRender(game, game.config);
 
    let canvas = render.canvas;

    if (render.doubleBuffer)
    {
        canvas = render._domCanvas;
    }

    AppendDOM(canvas, game.config.parent);

    // Core system
    game.physics = new Physics(game);
    game.input = new Input(game);
    game.time = new GameTime(game);

    InitializeSystems(game, render);

    game.input.init();
    game.time.init(game.system.loop);
    game.systemInited = true;
    game.isRunning = true;

    
    Object.seal(game);

    console.log("scintilla started!");

}