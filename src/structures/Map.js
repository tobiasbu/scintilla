


// DataMap simple class
export default class DataMap {
  
  constructor() {
    this._content = {};
    this._size = 0;
  }

  /* 
  Add or set value to the map
  key = keyName
  value = value
  */
  set(key, value) {

    if (!this.has(key))
    {
        this._size++;
    }

    this._content[key] = value;
    
    return this;

  }

  get(key) {
      if (this.has(key))
      {
        return this._content[key];
      }
      else
      {
        return null;
      }
  }

  has(key) {
    return this._content.hasOwnProperty(key);
  }

  contains(value) {
    for (var key in this._content)
    {
      if (entries[key] === value)
      {
        return true;
      } else
        continue;
    }

    return false;
  }

  keys() {
    return Object.keys(this._content);
  }

  values() {
    var values = [];
    var content = this._content;

    for (var key in content)
      values.push(entries[key]);
        
    return values;
  }

  remove(key) {

    if (!this.has(key))
      return null;

    var prop =  this._content[key];
    delete this._content[key];
    this._size--;
    return prop;

  }

  delete(key) {

    if (!this.has(key))
      return false;

      delete this._content[key];
      this._size--;

      return true;
  }

  deleteAt(key) {

    //if (!this.hasTagInKey(key))
    //  return false;
      this._size--;
     delete this._content[key];

  }

  deleteByIndexedArray(array) {
    for (var i = 0; i < array.length; i++) {
      delete this._content[array[i]];
      this._size--;
    }

  }

  clear() {

    for (var property in this._content) 
      delete this._content[property];
    

    this._size = 0;

  }

  slowSize() {
    return Object.keys(_contents).length;
  }

  each(callback) {
    var content = this._content;

    for (var property in content) {

      if (callback(property, content[property]) === false)
          break;
      
    }

    return this;
  }

  get size() {return this._size;}

}

