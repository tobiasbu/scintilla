import Keyboard from "./keyboard/Keyboard";
import Mouse from "./mouse/Mouse";
import InitializeMouse from "./mouse/components/InitializeMouse";
import InitializeKeyboard from "./keyboard/components/InitializeKeyboard";
import UpdateKeyboard from "./keyboard/components/UpdateKeyboard";
import UpdateMouse from "./mouse/components/UpdateMouse";
import InputData from "./InputData";
import ObjectGet from "../utils/object/ObjectGet";
import ResetKeyboard from "./keyboard/components/ResetKeyboard";
import DisableContextMenu from "./mouse/components/DisableContextMenu";

export default class Input {

  constructor(game) {

    this.game = game;
    this.mouse = null;
    this.keyboard = null;
    this.data = null;

  }

  init() {

    let gameConfig = this.game.config;
    
    if (gameConfig.keyboard.active) {
      this.keyboard = new Keyboard(this.game);
    }

    if (gameConfig.mouse.active) {
      this.mouse = new Mouse(this.game);
    }

    this.data = new InputData(this);

    InitializeKeyboard(this.keyboard, this.game);

    InitializeMouse(this.mouse, this.game);

    
    if (gameConfig.contextMenu.disable) {
      DisableContextMenu(this.game, gameConfig.contextMenu.target);
    }



  }

  update(timeStamp) {

    UpdateKeyboard(this.keyboard);

    this.data.updateClientRect();

    UpdateMouse(this.mouse, this.data, timeStamp);

  }

  reset() {
   
    ResetKeyboard(this.keyboard);

    if (this.mouse)
      this.mouse.reset();
  }

}