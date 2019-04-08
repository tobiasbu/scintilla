
/**
 * 
 * @param {string} [str] 
 */
function StringReader(str) {

  var _str = str || '';
  var _pos = 0;
  var _len = (typeof(str) === 'string') ? str.length : 0;
  var _ss = str || '';
  var _fw = -1;
  var _ew = -1;

  function seek() {

  }

  this.read = function () {
    let fdiff = 0;
    _fw = -1;
    _ew = -1;
    while (_pos < _len) {
      const char = _str.charCodeAt(_pos);
      if (char === 32 || char == 12 || char == 10) {
        if (_fw == -1) {
          _fw = _pos;
          continue;
        } else {
          // fdiff = _pos - _fw;
          // if (fdiff >= 1) {
          //   _ew = _pos;
          // }
          _ew = _pos;
          console.log(_ew)
        }
      } else {
        if (_fw === -1) {
          _fw = _pos;
          console.log('fw: ' + _fw)
        }
      }
      _pos += 1;
      if (_fw >= 0 && _ew > 0) {
        _ss = _str.substring(_fw, _ew);
        return _ss;
      }
      
    }
    if (_fw >= 0) {
      _ss = _str.substring(_fw, _len - 1);
      return _ss;
    }
    return _ss;
  }

  /**
   * 
   * @param {string} str 
   */
  this.str = function (str) {
    _str = str;
    _pos = 0;
    _len = str.length || 0;
  }

  /**
   * @returns {boolean}
   */
  this.eof = function () {
    return _pos >= _len - 1;
  }

}


/**
 * 
 * @param {string} tag 
 * @param {[]} data 
 * @param {Cache} cache 
 */
export default function ParseFontFile(tag, assets, cache) {

  console.log(assets);

  const fnt = assets[0].data;
  /**
   * @type {string[]}
   */
  let lines = fnt.split('\n');
  let info = {};
  /**
   * @type {string}
   */
  let current;

  let reader = new StringReader();

  while (current = lines.shift()) {

    if (current[0] === 'i' && current[1] === 'n' && current[2] === 'f' && current[3] === 'o') {

      console.log(current);
      reader.str(current);

      while (!reader.eof()) {
        const str = reader.read();
        console.log(str);
      }


    }
    

  }

  console.log('done');

}