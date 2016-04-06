


// Multimap simple class
tobi.Multimap = function() {
  this._content = {};
}

tobi.Multimap.prototype = {


  set : function(key, tag, value) {

    if (this._content[key] === undefined) { // create key
        this._content[key] = {};
    }

        this._content[key][tag] = value;

        return this._content[key][tag];

        //console.log("added " + key + " = " + value);
  },

  get : function(key) {
       return this._content[key];
  },

  getValue : function(key,tag) {
    return this._content[key][tag];
  },

  hasKey : function(key) {
      return this._content.hasOwnProperty(key);
  },

  hasTagInKey : function(key,tag) {

    if (this._content[key][tag])
      return true;

    return false;

  },

  delete : function(key) {

    if (!this.hasKey(key))
      return;

      for (var tag in this._content[key]) {

         delete this._content[key][tag];

      }

  },

  deleteAt : function(key,tag) {

    if (!this.hasTagInKey(key,tag))
      return;

     delete this._content[key][tag];

  },

  clear : function() {

    for (var property in this._content) {

         for (var tag in this._content[property]) {

            delete this._content[property][tag];

         }
    }

  }

}
