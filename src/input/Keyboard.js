

import Key from './Key'
import DataMap from '../structures/Map'
import KeyCode from './KeyCode'
import KeyEvent from './KeyEvent'

export default class Keyboard {
  
  constructor(game) {

  this.game = game;
  this.context = game.context;
  this.active = true;
  //this._keys = [];
  this._keyMapping = new DataMap();
  this._keyWatch = new DataMap();
  this._keyGarbage = [];
  //this._keyLock = [];
  //this._keyLockPressed = [];
  //this._keyDownDuration = [];
  this.lastKey = null;

  //callbacks
  this._onKeyDown = null;
  this._onKeyUp = null;
  this._onKeyPress = null;
  this.reset();
}

  reset() {

    this._keyMapping.clear();
    this._keyWatch.clear();
    this._keyGarbage = [];
    for (var prop in KeyCode){

      if (KeyCode.hasOwnProperty(prop)) {
        var value = KeyCode[prop];
        this._keyMapping.set(value, new Key(value,this.game));
      }
      /*if (scintilla.KeyCode.hasOwnProperty(prop)) {

        

            var value = scintilla.KeyCode[prop];
            this._keys[value] = false;
            this._keyLock[value] = scintilla.KeyEvent.NONE;
            this._keyLockPressed[value] = scintilla.KeyEvent.NONE;
            this._keyDownDuration[value] = 0;
      }*/
    }

  }

  init() {

    var self = this;

    this.reset();

      this._onKeyDown = function (event) {
            return self.processKeyDown(event);
    };

    this._onKeyUp = function (event) {
        return self.processKeyUp(event);
    };

    window.addEventListener('keydown', this._onKeyDown, false);
    window.addEventListener('keyup', this._onKeyUp, false);
  }

  stop() {

    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    this._onKeyDown = null;
    this._onKeyUp = null;
    this._onKeyPress = null;

    this._keyMapping.clear();
  }

  processKeyUp(event) {

    var key = event.keyCode;

    event.preventDefault();

    if (!this.active)
      return;

      var keyObj = this._keyMapping.get(key);
      keyObj.onKeyUp();

      /*this._keyLock[key] = scintilla.KeyEvent.RELEASE;
      this._keyLockPressed[key] = scintilla.KeyEvent.NONE;
      this._keys[key] = false;*/

  }

  processKeyDown(event) { 

    var key = event.keyCode;

    event.preventDefault();

    if (!this.active)
    return;

    this.lastKey = key;

    var keyObj = this._keyMapping.get(key);
    keyObj.onKeyDown();

    if (!this._keyWatch.has(key))
    {
      this._keyWatch.set(key, keyObj);
    }

    //_keyMapping[]
    //this._keys[key] = true;
    /* if (this._keyLockPressed[key] != scintilla.KeyEvent.PRESSED && this._keyLockPressed[key] != scintilla.KeyEvent.PRESS) {
      this._keyLockPressed[key] = scintilla.KeyEvent.PRESSED;
      this._keyDownDuration[key] = 1;
    }

    this._keyLock[key] = scintilla.KeyEvent.PRESS;
    this._keys[key] = true;
    */


  }

  /*processKeyPress : function(event) { // commom characters

    var key = event.keyCode;

    event.preventDefault();

    if (!this.active)
      return;


      this._keyLock[key] = tobiJS.KeyEvent.PRESS;
      this._keys[key] = true;



  },*/

  update() {

      /*var keys = this._keyMapping.keys();
      for (var key in keys)
      {
        if (keys.hasOwnProperty(key)) {

          var value = this._keyMapping.get(key);
          value.update();

        }
      }*/

    //var keyswatch = this._keyWatch; //.keys();

      var self = this;

    this._keyWatch.each(function (key, value) {
        //var value = this._keyWatch.get(key);
        value.update();

        //console.log(value);

        if (value.event() == KeyEvent.IDLE)
        {
        
          // value.reset();
            self._keyGarbage.push(key);
        }
    });
      /*for (var key in keys)
      {
        //console.log("UPDATE")

        if (keys.hasOwnProperty(key)) {

            var value = this._keyWatch.get(key);
            value.update();

            if (value.event() == scintilla.KeyEvent.IDLE)
            {
              // value.reset();
                this._keyGarbage.push(key);
            }
        }
      }*/

      if (this._keyGarbage.length > 0)
      {
        this._keyWatch.deleteByIndexedArray(this._keyGarbage);
        this._keyGarbage.splice(0, this._keyGarbage.length)
      }

  }

  pressed(keycode) {

    /*var keyLock = false;

  if (this._keyLockPressed[keycode] == scintilla.KeyEvent.PRESSED) {
      keyLock = true;
      this._keyLockPressed[keycode] = scintilla.KeyEvent.PRESS;
    }

    var hit = this._keys[keycode] && keyLock;*/

    //return hit;

    return this._keyMapping.get(keycode).isPressed();
    
  /* if (this._keyMapping.has(keycode))
    {
      
    } 
    else 
    {
      return false;
    }*/

  }

  release(keycode) {

    /*var keyLock = false;

    if (this._keyLock[keycode] ==  scintilla.KeyEvent.PRESSED ||
      this._keyLock[keycode] ==  scintilla.KeyEvent.PRESS ||
      this._keyLock[keycode] ==  scintilla.KeyEvent.NONE)
      keyLock = false;
    else
      keyLock = true;

    var hit = !this._keys[keycode] && keyLock;

    this._keyLock[keycode] = scintilla.KeyEvent.NONE;

    return hit;*/
    return this._keyMapping.get(keycode).isReleased();

  }

  press(keycode) {


    /*var key = this._keyWatch.get(keycode);

    if (key === undefined)
      return false;*/

    return this._keyMapping.get(keycode).status;

    /*var keyLock = false;

    if (this._keyLock[keycode] ==  scintilla.KeyEvent.RELEASE ||
      this._keyLock[keycode] ==  scintilla.KeyEvent.NONE)
      keyLock = false;
    else
      keyLock = true;

    var hit = this._keys[keycode] && keyLock;

    return hit;*/

  }
}

 