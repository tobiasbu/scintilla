

export const MouseButton = {
  LEFT_BUTTON : 0,
  MIDDLE_BUTTON : 1,
  RIGHT_BUTTON : 2,
  WHEEL_UP : 3,
  WHEEL_DOWN : 4
  };
  
  export const MouseEvent = {
  NONE : 0,
  PRESS : 1,
  PRESSED : 2,
  RELEASE : 3
  };
  

export default class Mouse {
  
  constructor(game) {

    this.x = 0;
    this.y = 0;
    this.game = game;
    this.canvas = game.canvas;
    this.button = 0;
    this.wheelDelta = 0;
    this.active = true;

    this._mouseButtons = [];
    this._mouseButtonsLocks = [];
    this._mouseButtonsLocksPressed = [];
    this._mouseDownDuration = [];

    //callbacks
    this._onMouseDown = null;
    this._onMouseMove = null;

    this.reset();
  }

  reset() {

    for (var i = 0; i < 3; i++){


            this._mouseButtons[i] = false;
            this._mouseButtonsLocks[i] = MouseEvent.NONE;
            this._mouseButtonsLocksPressed[i] = MouseEvent.NONE;
            this._mouseDownDuration[i] = 0;

    }

  }

  init() {


    var self = this;

    this._onMouseDown = function (event) {
            return self.onMouseDown(event);
    };

    this._onMouseUp = function (event) {
            return self.onMouseUp(event);
    };

    this._onMouseMove = function (event) {
            return self.onMouseMove(event);
    };

    this.canvas.addEventListener('mousedown', this._onMouseDown, true);
    this.canvas.addEventListener('mousemove', this._onMouseMove, true);
    this.canvas.addEventListener('mouseup', this._onMouseUp, true);
    this.canvas.addEventListener('mouseover', this._onMouseOver, true);
    this.canvas.addEventListener('mouseout', this._onMouseOut, true);

  }

  onMouseMove(event) {

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

    if (this._mouseButtonsLocksPressed[value] != KeyEvent.PRESSED && this._mouseButtonsLocksPressed[value] != KeyEvent.PRESS) {
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


  }

  pressed(button) {

    var buttonLock = false;

    if (this._mouseButtonsLocksPressed[button] == MouseEvent.PRESSED) {
      buttonLock = true;
      this._mouseButtonsLocksPressed[button] = MouseEvent.PRESS;
    }

    var hit = this._mouseButtons[button] && buttonLock;

    return hit;

  }

  release(button) {

    var buttonLock = false;

  	if (this._mouseButtonsLocks[button] ==  MouseEvent.PRESSED ||
        this._mouseButtonsLocks[button] ==  MouseEvent.PRESS ||
        this._mouseButtonsLocks[button] ==  MouseEvent.NONE)
  		buttonLock = false;
  	else
  		buttonLock = true;

  	var hit = !this._mouseButtons[button] && buttonLock;

  	this._mouseButtonsLocks[button] = MouseEvent.NONE;

  	return hit;

  }

  press(button) {

    var buttonLock = false;

    if (this._mouseButtonsLocks[button] ==  MouseEvent.RELEASE ||
      this._mouseButtonsLocks[button] ==  MouseEvent.NONE)
      buttonLock = false;
    else
      buttonLock = true;

    var hit = this._mouseButtons[button] && buttonLock;

    return hit;


  }

  update() {

    for (var i = 0; i < this._mouseButtons.length; i++) {

          if (this._mouseButtonsLocksPressed[i] ==  MouseEvent.PRESSED) {
              if (this._mouseDownDuration[i] > 0)
                this._mouseDownDuration[i]--;
              else
                this._mouseButtonsLocksPressed[i] = MouseEvent.PRESS;
          } else
            continue;


    }

  }

  posRelativeTo(object) {

    var vec2 = {x:0,y:0};

    vec2.x = this.x - object.x;
    vec2.y = this.y - object.y;


    return vec2;

  }


}

