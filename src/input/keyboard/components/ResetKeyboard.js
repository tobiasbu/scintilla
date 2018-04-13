
export default function ResetKeyboard() {

    this._keyWatch.each(function (code, key) {
          key._event = KeyEvent.NONE;
          key.status = false;
    });

    
    this._keyWatch.clear();
    this._keyGarbage.splice(0, this._keyGarbage.length);
    this._eventQueue.splice(0, this._eventQueue.length);


}