import Physics from "../physics/physics";
import Input from "../input/Input";
import GameTime from "../time/GameTime";
import InitializeSystems from "./system/components/InitializeSystems";
import AppendDOM from "../dom/AppendDOM";
import AudioManager from "../audio/AudioManager";
import InitializeAudioSystem from "../audio/components/InitializeAudioSystem";
import InitializeRender from "../render/components/InitializeRender";

  /**
    * Initialize engine
    *
    * @method Game#init()
    * @protected
    */
export default function GameInitialize(game) {

    if (game.systemInited)
        return;

    let render = InitializeRender(game, game.config);
 
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
    game.audio = new AudioManager(game);

    InitializeSystems(game, render);

    InitializeAudioSystem.call(game.audio);

    game.input.init();
    game.time.init(game.system.loop);
    game.systemInited = true;
    game.isRunning = true;

    
    Object.seal(game);

    console.log("scintilla started!");

}