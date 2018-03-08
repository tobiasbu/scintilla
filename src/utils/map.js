


// Map simple class
tobi.Map = function() 
{
  this._content = {};
}

tobi.Map.prototype = {


  /* 
  Add or set value to the map
  key = keyName
  value = value
  */
  set : function(key, value) {

    if (this._content[key] === undefined) { // create key
        this._content[key] = {};
    }

        this._content[key] = value;

        return this._content[key];

        //console.log("added " + key + " = " + value);
  },

  get : function(key) {
       return this._content[key];
  },

  keys : function()
  {
    return this._content;
  },

  has : function(key) {
      return this._content.hasOwnProperty(key);
  },

  delete : function(key) {

    if (!this.hasKey(key))
      return false;

      delete this._content[key];

      return true;
  },

  deleteAt : function(key) {

    if (!this.hasTagInKey(key))
      return false;

     delete this._content[key];

  },

  deleteByIndexedArray : function (array)
  {
    for (var i = 0; i < array.length; i++) {
      delete this._content[array[i]];
    }

  },

  clear : function() {

    for (var property in this._content) {

      delete this._content[property];

    }

  },

  size : function()
  {
    return Object.keys(_contents).length;
  }

}
