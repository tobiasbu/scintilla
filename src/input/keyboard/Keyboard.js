import DataMap from '../../structures/Map';
import DataList from '../../structures/List';
import ResetKeyboard from './components/ResetKeyboard';
import InputSystem from '../InputSystem';


export default class Keyboard extends InputSystem{

  constructor(game) {

    super(game);

    this._keyMapping = new DataMap();
    this.lastKey = null;

  }


  reset() {
    ResetKeyboard(this);
    return this;
  }

  stop() {

    var target = this.eventTarget;

    target.removeEventListener('keydown', this.eventHandler);
    target.removeEventListener('keyup', this.eventHandler);

    this._keyMapping.clear();
    ResetKeyboard(this);
    return this;
  }


  pressed(keycode) {

    let key = this._keyMapping.get(keycode);
    
    return key.isPressed();
  }

  release(keycode) {
    return this._keyMapping.get(keycode).isReleased();
  }

  press(keycode) {
    return this._keyMapping.get(keycode).status;
  }
}