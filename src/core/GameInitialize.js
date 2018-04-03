import Physics from "../physics/physics";
import Input from "../input/Input";
import GameTime from "../time/GameTime";
import InitializeSystems from "./system/components/InitializeSystems";

  /**
    * Initialize engine
    *
    * @method Game#init()
    * @protected
    */
export default function GameInitialize(game) {

    if (game.systemInited)
        return;

    game.physics = new Physics(game);
    game.input = new Input(game);
    //this.scene = new SceneManager(this);
    //new GameSystemManager(this);
    game.time = new GameTime(game);

    game.system = InitializeSystems(game);

    game.input.init();
    game.time.init(game.system.loop);
    game.systemInited = true;
    game.isRunning = true;


    console.log("scintilla started!");

}