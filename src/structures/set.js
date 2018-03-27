import MergeSort from "./useful/MergeSort";


export default class DataSet {

    constructor(elements) {
        this._content = [];
        this._size = 0;

        if (Array.isArray(elements))
        {
            for (var i = 0; i < elements.length; i++)
                this.set(elements[i]);
        }

    }

    set(value) {
        if (this._content.indexOf(value) === -1)
            this._content.push(value);

        return this;
    }

    at(value) {
        var index = this._content.indexOf(value);
        if (index > -1)
        {
            return this._content[index];
        } else {
            return null;
        }
    }

    has(value) {
        return (this._content.indexOf(value) > -1);
    }

    delete(value) {
        var idx = this._content.indexOf(value);

        if (idx > -1)
            this._content.splice(idx, 1);

        return this;
    }

    clear() {
        this._content.length = 0;
        return this;
    }

    each(callback, scope) {
        var content = this._content.slice();
        var size = content.length;
        var i;

        if (scope)
        {
            for (i = 0; i < size; i++)
            {
                if (callback.call(scope, content[i], i) === false)
                    break;                
            }
        } else {
            for (i = 0; i < size; i++)
            {
                if (callback(content[i], i) === false)
                    break;                
            }
        }

      return this;
    }

    sort(predicate) {
        if (predicate === undefined) return;
        return MergeSort(this._content, predicate);
    }

    get size () { return this._content.length; }
    get length () { return this._content.length; }

}
