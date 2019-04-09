
/**
 *
 * @param {Str} [str]
 */
function StringReader(str) {
  /**
   * @type {string | object}
   */
  var _str;
  /**
   * @type {string}
   */
  var _name;
  /**
   * @type {number}
   */
  var _len;
  var _pos = 0;
  /**
   * @type {boolean}
   */
  var _isobj = false;
  /**
   * @type {Rule[]}
   */
  var _rules = [];
  /**
   * @type {RuleMatcher[]}
   */
  var _rulesMatcher = [];
  var _ss;
  var _fw = -1;
  var _ew = -1;
  var _firstMatchIndex = -1;
  var _ruleMatchs = [];
  /**
   * @returns {string | string[] | null}
   */
  var capture = function () {

    if (_fw >= 0) {
      if (_ruleMatchs.length <= 0) {
        if (_isobj) {
          _ss = _str[_name].substring(_fw, _ew);
        }
        else {
          _ss = _str.substring(_fw, _ew);
        }
        return _ss;
      }
      else {
        _ss = [];
        if (_isobj) {
          _ss.push(_str[_name].substring(_fw, _firstMatchIndex));
        }
        else {
          _ss.push(_str.substring(_fw, _firstMatchIndex));
        }
        if (_ruleMatchs.length > 0) {
          let match;
          let nextMatch;
          for (let i = 0; i < _ruleMatchs.length; i += 1) {
            match = _ruleMatchs[i];
            if (match.rule.type === 'split') {
              nextMatch = _ruleMatchs[i + 1];
              if (!nextMatch) {
                if (_isobj) {
                  _ss.push(_str[_name].substring(match.fw + 1, _ew));
                }
                else {
                  _ss.push(_str.substring(match.fw + 1, _ew));
                }
              }
            }
            else {
              if (_isobj) {
                _ss.push(_str[_name].substring(match.fw + 1, match.ew));
              }
              else {
                _ss.push(_str.substring(match.fw + 1, match.ew));
              }
            }
          }
        }
        return _ss;
      }
    }
    return null;
  };
  var matchRule = function (char) {
    for (let i = 0; i < _rules.length; i += 1) {
      if (char === _rules[i].char) {
        return _rulesMatcher[_rules[i].index];
      }
    }
    return null;
  };
  /**
   * Read the string buffer;
   * 
   * @returns {string | string[] | null} Captured buffer.
   */
  this.read = function () {
    _fw = -1;
    _ew = -1;
    _firstMatchIndex = -1;
    if (_ruleMatchs.length > 0) {
      _ruleMatchs.length = 0;
    }
    /**
     * @type {number}
     */
    let char;
    let ss;
    let rmtr;
    let lastSplit;
    let ignore = false;
    /**
     * @type {RuleMatcher}
     */
    let activeRule;
    while (_pos < _len) {
      if (_isobj) {
        char = _str[_name].charCodeAt(_pos);
      }
      else {
        char = _str.charCodeAt(_pos);
      }
      rmtr = matchRule(char);
      if (rmtr === null) {
        if (activeRule) {
          //if (activeRule.rule.type === 'split') {
          if (activeRule.rule.ignore) {
            ignore = char === activeRule.rule.ignore;
          }
          //}
        }
        else {
          ignore = false;
        }
        if (!ignore) {
          if (!StringReader.isWhitespace(char)) {
            if (_fw === -1) {
              _fw = _pos;
            }
          }
          else {
            if (_fw !== -1) {
              _ew = _pos;
            }
          }
        }
      }
      else {
        if (rmtr.rule.type === 'split') {
          const splitMatch = { fw: _pos, rule: rmtr.rule };
          _ruleMatchs.push(splitMatch);
          if (_firstMatchIndex == -1) {
            _firstMatchIndex = _pos;
          }
        }
        else {
          if (rmtr.fw === -1) {
            rmtr.fw = _pos;
            activeRule = rmtr;
            if (_firstMatchIndex == -1) {
              _firstMatchIndex = _pos;
            }
          }
          else {
            rmtr.ew = _pos;
            _ruleMatchs.push({ fw: rmtr.fw, ew: rmtr.ew, rule: rmtr.rule });
            rmtr.fw = -1;
            rmtr.ew = -1;
            activeRule = null;
          }
        }
      }
      _pos += 1;
      if (_ew > 0) {
        ss = capture();
      }
      if (ss) {
        return ss;
      }
    }
    ss = capture();
    if (ss) {
      return ss;
    }
    return ss;
  };
  /**
   *
   * @param {Str} str
   */
  this.str = function (str) {
    if (str === undefined) {
      str = null;
    }
    else {
      if (typeof (str) === 'object') {
        _name = str.name;
        _str = str.obj;
        _len = _str[_name].length || 0;
        _isobj = true;
      }
      else {
        _str = str || '';
        _len = str.length || 0;
        _isobj = false;
      }
    }
    _pos = 0;
  };
  /**
   * @returns {boolean}
   */
  this.eof = function () {
    return _pos >= _len - 1;
  };
  /**
   * @param {RuleTypes} type
   * @param {RuleOptions} options
   */
  this.addRule = function (type, options) {
    const rule = {
      type,
      index: _rules.length,
    };
    let charCode;
    if (options) {
      const { char, ignore } = options;
      if (typeof (char) === 'string') {
        charCode = char.charCodeAt(0);
      }
      else {
        charCode = char || 0;
      }
      rule.char = charCode;
      if (typeof (ignore) === 'string') {
        charCode = ignore.charCodeAt(0);
      }
      else {
        charCode = ignore;
      }
      rule.ignore = charCode;
    }
    _rules.push(rule);
    _rulesMatcher.push({
      fw: -1,
      ew: -1,
      rule: rule,
    });
  };

  this.clear = function () {

    _str = null;
    _name = null;
    _len = null;
    _pos = null;
    _isobj = null;
    _rules.length = 0;
    _rules = null;
    _rulesMatcher.length = 0
    _rulesMatcher = null;
    _ss = null;
    _fw = null;
    _ew = null;
    _firstMatchIndex = null;
    _ruleMatchs.length = 0;
    _ruleMatchs = null;

  }

  this.str(str);


}

/**
  * @param {number} char
  */
StringReader.isWhitespace = function (char) {
  // space | new line | horizontal tab | carriage return
  return char == 32 || char == 10 || char === 9 || char == 13;
}

export default StringReader;