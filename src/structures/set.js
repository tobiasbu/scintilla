

tobi.Set = function(elements) 
{
  this._content = [];
  this._size = 0;



  if (Array.isArray(elements))
  {
      for (var i = 0; i < elements.length; i++)
          this.set(elements[i]);
  }

}


tobi.Set.prototype = {

    set : function(value)
    {
        if (this._content.indexOf(value) === -1)
            this._content.push(value);

        return this;
    },

    at : function(value)
    {
        var index = this._content.indexOf(value);
        if (index > -1)
        {
            return this._content[index];
        } else {
            return null;
        }
    },

    has : function(value)
    {
        return (this._content.indexOf(value) > -1);
    },

    delete : function(value)
    {
        var idx = this._content.indexOf(value);

        if (idx > -1)
            this._content.splice(idx, 1);

        return this;
    },

    clear : function()
    {
        this._content.length = 0;
        return this;
    },

    each : function(callback)
    {
        var content = this._content.slice();
        var size = content.length;

        for (var i = 0; i < size; i++)
        {
            if (callback(content[i], i) === false)
            {
                break;
            }
        }
    }


}

Object.defineProperty(tobi.Set.prototype, "size", {

    get: function () {
        return this._content.length;
    }

});


tobi.Set.prototype.constructor = tobi.Set;

