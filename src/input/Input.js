
import Keyboard from "./keyboard/Keyboard";
import Mouse from "./mouse/Mouse";

export default class Input {

  constructor(game) {

  this.game = game;
  this.mouse = null;
  this.keyboard = null;

  }

  init() {

    //this.mouse = new tobiJS.Mouse(this.game);
    this.keyboard = new Keyboard(this.game);
    this.mouse = new Mouse(this.game);
    this.keyboard.init();
    this.mouse.init();

  }

  update() {

    this.keyboard.update();
    this.mouse.update();

  }

  reset()
  {
    this.keyboard.reset();
    this.mouse.reset();
  }

}
