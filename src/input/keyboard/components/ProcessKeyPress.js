import KeyEvent from "../KeyEvent";

 export default function ProcessKeyPress(event, key) { 

  if (key.preventDefault) 
      event.preventDefault();
  
  if (!key._enabled)
    return;

  if (key.press === false)
  {

      // set key properties
      key.status = true;
      key.press = true;
      key.release = false;
      // set press time duration
      key.pressTime = event.timeStamp;//this.game.time.time;
      key.pressDuration = 0;
      key.releaseDuration = key.pressTime - key.releaseTime;

      key._event = KeyEvent.PRESSED;
  }

    //this.lastKey = key;



    /*var keyObj = this._keyMapping.get(key);
    keyObj.onKeyDown();

    if (!this._keyWatch.has(key))
    {
      this._keyWatch.set(key, keyObj);
    }*/

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