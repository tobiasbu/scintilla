


// Map simple class
scintilla.Map = function() 
{
  this._content = {};
  this._size = 0;
}

scintilla.Map.prototype = {


  /* 
  Add or set value to the map
  key = keyName
  value = value
  */
  set : function(key, value) {

    if (!this.has(key))
    {
        this._size++;
    }

    this._content[key] = value;
    
    return this;

  },

  get : function(key) {
      if (this.has(key))
      {
        return this._content[key];
      }
      else
      {
        return null;
      }
  },

  has : function(key) {
    return (this._content.hasOwnProperty(key));
  },

  contains : function(value)
  {
    for (var key in this._content)
    {
      if (entries[key] === value)
      {
        return true;
      } else
        continue;
    }

    return false;
  },

  keys : function()
  {
    return Object.keys(this._content);
  },

  values : function()
  {
    var values = [];
    var content = this._content;

    for (var key in content)
      values.push(entries[key]);
        
    return values;
  },

  remove : function(key) {

    if (!this.has(key))
      return null;

    var prop =  this._content[key];
    delete this._content[key];
    this._size--;
    return prop;

  },

  delete : function(key) {

    if (!this.has(key))
      return false;

      delete this._content[key];
      this._size--;

      return true;
  },

  deleteAt : function(key) {

    //if (!this.hasTagInKey(key))
    //  return false;
      this._size--;
     delete this._content[key];

  },

  deleteByIndexedArray : function (array)
  {
    for (var i = 0; i < array.length; i++) {
      delete this._content[array[i]];
      this._size--;
    }

  },


  clear : function() {

    for (var property in this._content) {

      delete this._content[property];
      

    }

    this._size = 0;

  },

  size : function()
  {
    return this._size;
  },

  slowSize : function()
  {
    return Object.keys(_contents).length;
  },

  each : function(callback)
  {
    var content = this._content;

    for (var property in content) {

      if (callback(property, content[property]) === false)
          break;
      
    }

    return this;
  }

}

scintilla.Map.prototype.constructor = scintilla.Map;
