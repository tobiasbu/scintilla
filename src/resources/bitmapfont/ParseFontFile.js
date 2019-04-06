
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
      const char = _str[_pos];
      if (char === ' ') {
        if (_fw === -1) {
          _fw = _pos;
          continue;
        } else {
          fdiff = _pos - _fw;
          if (fdiff >= 1) {
            _ew = _pos;
          }
        }
      }
      _pos += 1;
      if (_fw || _ew) {
        _ss = _str.substr(_fw, _ew);
        _fw = -1;
        _ew = -1;
        return _ss;
      }
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
    return _pos >= _len;
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

      reader.str(current);

      while (!reader.eof()) {
        const str = reader.read();
        console.log(str);
      }


    }

  }

}