

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

