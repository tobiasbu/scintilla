

tobi.Keyboard = function(game) {

this.game = game;
this.context = game.context;
this.active = true;
this._keys = [];
this._keyLock = [];
this._keyLockPressed = [];
this._keyDownDuration = [];
this.lastkey = null;

//callbacks
this._onKeyDown = null;
this._onKeyUp = null;
this._onKeyPress = null;



}

tobi.Keyboard.prototype = {

reset : function() {

  for (var prop in tobi.KeyCode){
    if (tobi.KeyCode.hasOwnProperty(prop)) {

          var value = tobi.KeyCode[prop];
          this._keys[value] = false;
          this._keyLock[value] = tobi.KeyEvent.NONE;
          this._keyLockPressed[value] = tobi.KeyEvent.NONE;
          this._keyDownDuration[value] = 0;
    }
  }

},

init : function() {

  var self = this;

  this.reset();

    this._onKeyDown = function (event) {
           return self.processKeyDown(event);
   };

   this._onKeyUp = function (event) {
       return self.processKeyUp(event);
   };

   /*this._onKeyPress = function (event) {
       return self.processKeyPress(event);
   };*/

  window.addEventListener('keydown', this._onKeyDown, false);
  window.addEventListener('keyup', this._onKeyUp, false);
  //window.addEventListener('keypress', this._onKeyPress, false);

},

stop : function() {

  window.removeEventListener('keydown', this._onKeyDown);
  window.removeEventListener('keyup', this._onKeyUp);
  //window.removeEventListener('keypress', this._onKeyPress);

  this._onKeyDown = null;
  this._onKeyUp = null;
  this._onKeyPress = null;

},

processKeyUp : function(event) {

   var key = event.keyCode;

   event.preventDefault();

   if (!this.active)
    return;

    this._keyLock[key] = tobi.KeyEvent.RELEASE;
    this._keyLockPressed[key] = tobi.KeyEvent.NONE;
    this._keys[key] = false;

},

processKeyPress : function(event) { // commom characters

   var key = event.keyCode;

   event.preventDefault();

   if (!this.active)
    return;


    this._keyLock[key] = tobiJS.KeyEvent.PRESS;
    this._keys[key] = true;



},

processKeyDown : function(event) { // commom characters

   var key = event.keyCode;

   event.preventDefault();

   if (!this.active)
    return;

    if (this._keyLockPressed[key] != tobi.KeyEvent.PRESSED && this._keyLockPressed[key] != tobi.KeyEvent.PRESS) {
      this._keyLockPressed[key] = tobi.KeyEvent.PRESSED;
      this._keyDownDuration[key] = 1;
    }

    this._keyLock[key] = tobi.KeyEvent.PRESS;
    this._keys[key] = true;
    this.lastkey = key;



},

update : function() {

  for (var prop in tobi.KeyCode){
    if (tobi.KeyCode.hasOwnProperty(prop)) {

      var value = tobi.KeyCode[prop];

        if (this._keyLockPressed[value] ==  tobi.KeyEvent.PRESSED) {
            if (this._keyDownDuration[value] > 0)
              this._keyDownDuration[value]--;
            else {
              this._keyLockPressed[value] = tobi.KeyEvent.PRESS;
            }
        } else {
          continue;
        }
    }
  }



},

pressed : function(keycode) {

  var keyLock = false;

if (this._keyLockPressed[keycode] == tobi.KeyEvent.PRESSED) {
		keyLock = true;
    this._keyLockPressed[keycode] = tobi.KeyEvent.PRESS;
  }

	var hit = this._keys[keycode] && keyLock;

	return hit;

},

release : function(keycode) {

  var keyLock = false;

	if (this._keyLock[keycode] ==  tobi.KeyEvent.PRESSED ||
    this._keyLock[keycode] ==  tobi.KeyEvent.PRESS ||
    this._keyLock[keycode] ==  tobi.KeyEvent.NONE)
		keyLock = false;
	else
		keyLock = true;

	var hit = !this._keys[keycode] && keyLock;

	this._keyLock[keycode] = tobi.KeyEvent.NONE;

	return hit;

},

press : function(keycode) {

  var keyLock = false;

  if (this._keyLock[keycode] ==  tobi.KeyEvent.RELEASE ||
    this._keyLock[keycode] ==  tobi.KeyEvent.NONE)
    keyLock = false;
  else
    keyLock = true;

  var hit = this._keys[keycode] && keyLock;

  return hit;

}



}

tobi.Keyboard.prototype.constructor = tobi.Keyboard;

tobi.KeyEvent = {
  NONE : 0,
  PRESS : 1,
  PRESSED : 2,
  RELEASE : 3,
};

tobi.KeyCode = {
Backspace: 8,
Tab: 9,
Enter: 13,
Shift: 16,
Ctrl: 17,
Alt: 18,
Pause: 19,
CapsLock: 20,
Escape: 27,
Space:32,
PageUp: 33,
PageDown: 34,
End: 35,
Home: 36,
Left: 37,
Up: 38,
Right: 39,
Down: 40,
Insert: 45,
Delete:	46,
Num0: 48,
Num1: 49,
Num2: 50,
Num3: 51,
Num4: 52,
Num5:	53,
Num6: 54,
Num7: 55,
Num8: 56,
Num9: 57,
A: 65,
B: 66,
C: 67,
D: 68,
E: 69,
F: 70,
G: 71,
H: 72,
I: 73,
J: 74,
K: 75,
L: 76,
M: 77,
N: 78,
O: 79,
P: 80,
Q: 81,
R: 82,
S: 83,
T: 84,
U: 85,
V: 86,
W: 87,
X: 88,
Y: 89,
Z: 90,
LSystem: 91,
RSystem: 92,
SelectK:	93,
Numpad0: 96,
Numpad1: 97,
Numpad2: 98,
Numpad3: 99,
Numpad4: 100,
Numpad5: 101,
Numpad6: 102,
Numpad7: 103,
Numpad8: 104,
Numpad9: 105,
Multiply: 106,
Add: 107,
Subtract: 109,
DecimalPoint: 110,
Divide: 111,
F1:	112,
F2:	113,
F3:	114,
F4:	115,
F5:	116,
F6:	117,
F7:	118,
F8:	119,
F9:	120,
F10: 121,
F11: 122,
F12: 123,
NumLock: 144,
ScrollLock: 145,
SemiColon: 186,
Equal: 187,
Comma: 188,
Dash: 189,
Period:	190,
Slash: 191,
LBraket: 219,
BackSlash: 220,
RBracket: 221,
Quote: 222,
};
