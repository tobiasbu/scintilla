

import MouseButton, { LogicalMouseButton } from './MouseButton';
import DataList from '../../structures/List';
import Vector2 from '../../math/Vector2';
import DataMap from '../../structures/Map';
import InputSystem from '../InputSystem';


  export const MouseEvent = {
  NONE : 0,
  PRESS : 1,
  PRESSED : 2,
  RELEASE : 3
  };


export default class Mouse extends InputSystem {
  
  constructor(game) {

    super(game);

    this._buttonsList = new DataList();
    this._isDirty = false;

    this.event = null;
    this.moved = false;
    this.buttons = 0;
    this.down = false;
    

    this.clientPosition = new Vector2();
    this.position = new Vector2();

  }

  get x() {
    return this.position.x;
  }

  set x(value) {
    this.position.x = value;
  }

  get y() {
    return this.position.y;
  }

  set y(value) {
    this.position.y = value;
  }

 
  stop() {

    let target = this.eventTarget;

    target.removeEventListener('mousemove', this.handler);
    target.removeEventListener('mousedown', this.handler);
    target.removeEventListener('mouseup', this.handler);
    target.removeEventListener('mouseenter', this.handler);
    target.removeEventListener('mouseleave', this.handler);
  }

  /*onMouseMove(event) {

    if (!this.active)
      return;


    var rect = this.canvas.getBoundingClientRect();


    this.x = Math.floor((event.clientX-rect.left)/(rect.right-rect.left)*this.canvas.width);
    this.y = Math.floor((event.clientY-rect.top)/(rect.bottom-rect.top)*this.canvas.height);
    //this.x = event.clientX - rect.left;
    //this.y = event.clientY - rect.top;

  }

  onMouseDown(event) {

    if (!this.active)
      return;



    var value = event.button;

    if (this._mouseButtonsLocksPressed[value] != MouseEvent.PRESSED && this._mouseButtonsLocksPressed[value] != MouseEvent.PRESS) {
      this._mouseButtonsLocksPressed[value] = MouseEvent.PRESSED;
      this._mouseDownDuration[value] = 1;
    }

    this._mouseButtons[value] = true;
    this._mouseButtonsLocks[value] = MouseEvent.PRESS;

    event.preventDefault();

  }

  onMouseUp(event) {

    if (!this.active)
      return;

    var value = event.button;

    this._mouseButtons[value] = false;
    this._mouseButtonsLocks[value] = MouseEvent.RELEASE;
    this._mouseButtonsLocksPressed[value] = MouseEvent.NONE;

    event.preventDefault();


  }*/

  pressed(button) {

    // var buttonLock = false;

    // if (this._mouseButtonsLocksPressed[button] == MouseEvent.PRESSED) {
    //   buttonLock = true;
    //   this._mouseButtonsLocksPressed[button] = MouseEvent.PRESS;
    // }

    // var hit = this._mouseButtons[button] && buttonLock;

    // return hit;
    
    let mouseButton = this._buttonsList.get(button);

    if (mouseButton)
      return mouseButton.isPressed();

    return null;

  }

  release(button) {

    
    
    // var buttonLock = false;

  	// if (this._mouseButtonsLocks[button] ==  MouseEvent.PRESSED ||
    //     this._mouseButtonsLocks[button] ==  MouseEvent.PRESS ||
    //     this._mouseButtonsLocks[button] ==  MouseEvent.NONE)
  	// 	buttonLock = false;
  	// else
  	// 	buttonLock = true;

  	// var hit = !this._mouseButtons[button] && buttonLock;

  	// this._mouseButtonsLocks[button] = MouseEvent.NONE;

  	// return hit;

  }

  /**
   * Check if a Mouse button is pressing.
   * 
   * @param {MouseButton} button 
   */
  press(button) {
    return (this.buttons & (LogicalMouseButton[button] || 0));
  }

  /*update() {

    for (var i = 0; i < this._mouseButtons.length; i++) {

          if (this._mouseButtonsLocksPressed[i] ==  MouseEvent.PRESSED) {
              if (this._mouseDownDuration[i] > 0)
                this._mouseDownDuration[i]--;
              else
                this._mouseButtonsLocksPressed[i] = MouseEvent.PRESS;
          } else
            continue;


    }

  }*/

  posRelativeTo(object) {

    var vec2 = {x:0,y:0};

    vec2.x = this.x - object.x;
    vec2.y = this.y - object.y;


    return vec2;

  }

  destroy() {
    this.stop();
    this.game = null;
  }


}

