// DataMap simple class
export default class DataMap {

  constructor() {
    this._content = {};
    this._size = 0;
  }

  get size() {
    return this._size;
  }

  /* 
  Add or set value to the map
  key = keyName
  value = value
  */
  set(key, value) {
    return this.insert(key, value);

  }

  insert(key, value) {
     if (!this.has(key)) {
      this._size++;
    }

    this._content[key] = value;

    return this;
  }

  get(key) {

    if (key === undefined) return null;

    if (this.has(key)) {
      return this._content[key];
    } else {
      return null;
    }
  }

  at(index) {
    let n = 0;
    for (let key in this._content) {
      if (index === n) {
        return this._content[key];
      }
      n++;
    }

    return null;
  }

  has(key) {
    return this._content.hasOwnProperty(key);
  }

  contains(value) {
    for (let key in this._content) {
      if (entries[key] === value) {
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

    var prop = this._content[key];
    delete this._content[key];
    this._size--;
    return prop;

  }

  erase(key) {

    if (!this.has(key))
      return false;

    delete this._content[key];
    this._size--;

    return true;
  }

  /*eraseAt(key) {

    //if (!this.hasTagInKey(key))
    //  return false;
      this._size--;
     delete this._content[key];

  }*/

  eraseList(listToRemove) {

    if (listToRemove === undefined) return this;

    let size = listToRemove.length;

    if (Array.isArray(listToRemove)) {

      for (let i = 0; i < size; i++) {
        let index = listToRemove[i];
        this.erase(index);
      }
    }

    return this;
  }

  /*deleteByIndexedArray(array) {
    for (let i = 0; i < array.length; i++) {
      delete this._content[array[i]];
      this._size--;
    }

  }*/

  clear() {

    for (let property in this._content)
      delete this._content[property];


    this._size = 0;

    return this;

  }

  slowSize() {
    return Object.keys(_contents).length;
  }

  each(callback, context) {
    let content = this._content;
    let r;
    if (context === undefined) {
      for (let property in content) {
        r = callback(property, content[property]);
        if (r !== undefined)
          break;
      }
    } else {
      for (let property in content) {
        r = callback.call(context, property, content[property]);
        if (r !== undefined)
          break;
      }
    }

    return r;
  }

  find(predicate) {

    if (predicate === undefined)
      return;

    let content = this._content;

    for (let property in content) {

      if (predicate(property, content[property])) {
        return content[property];
      }

    }

    return null;
  }



}