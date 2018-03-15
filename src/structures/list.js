
export default class List
{
    constructor(elements, unique)
    {
        this.unique = unique || true;
        this.childs = [];
        this.length = 0;

        if (Array.isArray(elements))
        {
            for (var i = 0; i < elements.length; i++)
                this.push(elements[i]);
        }

    }

    get size() {return this.childs.length;}

    get first() {
        if (this.list.length > 0) 
            return this.childs[0];
        else
            return null;
        
    }

    get last() {
          if (this.childs.length > 0) {
            let idx = this.childs.length - 1;
            return this.childs[idx];
          } else
            return null;
    }

    push(child) {

        if (this.unique) {
            if (this.indexOf(child) === -1)
                this.childs.push(child);
        } else {
            this.childs.push(child);
        }

        return child;
    }

    pushFront(child) {
        if (this.unique) {
            if (this.indexOf(child) === -1)
                this.childs.unshift(child);
        } else {
            this.childs.unshift(child);
        }
        return child;
    }

    insert(child, index) {

        if (index === undefined) 
            index = 0;

        if (this.childs.length === 0) 
            return this.push(child);

        if (index >= 0 && index <= this.childs.length) {
        
            if (this.unique) {
                if (this.indexOf(child) === -1) 
                    this.childs.splice(index, 0, child);
            } else {
                this.childs.splice(index, 0, child);
            }
            
        }

        return child;
    
    }

    indexOf(child) {
        return this.childs.indexOf(child);
    }

    at(index) {
        return this.childs[index];
    }

    erase(child) {
        let idx = this.childs.indexOf(child);

        if (idx !== -1)
            this.childs.splice(idx, 1);
        
        return child;
    }

    eraseAt(index) {
        var child = this.childs[index];

        if (child)
            this.childs.splice(index, 1);

        return child;
    }

    has(child) {
        return (this.childs.indexOf(child) > -1);
    }

    empty() {
        return (this.childs.length == 0)
    }

    clear() {
        let i = this.childs.length;

        while(i--) {
            this.remove(this.childs[i]);
        }

        return this;
    }

    destroy() {
        this.clear();
        this.childs = [];
        this.parent = null;
    }

    each(callback) {
        let params = [ null ];

        for (let i = 0; i < arguments.length; i++)
            params.push(arguments[i]);

        for (let i = 0; i < this.childs.length; i++) {
            params[0] = this.childs[i];
            callback.apply(params);
        }
    }

    sort(predicate) {
        if (predicate === undefined) return;
        return childs.sort(predicate.bind(this));
    }

    swap(childA, childB) {

        if (childA === childB)
            return;

        let idx0 = this.indexOf(childA);
        let idx1 = this.indexOf(childB);

        if (idx0 < 0 || idx1 < 0) {
            throw new Error('List.swap: Could not swap childrens. The objects are not in the list.');
        }

        this.list[idx0] = childA;
        this.list[idx1] = childB;

        return this;

    }

    swapByIndex(indexA, indexB) {
        if (indexA === indexB)
            return;

        var cA = this.at(indexA);
        var cB = this.at(indexB);

        if (cA === undefined || cB === undefined) {
            throw new Error('List.swapByIndex: Could not swap childrens by index. The objects are not in the list.');
        }

        this.list[indexA] = cA;
        this.list[indexB] = cB;

        return this;
    }

    reverse() {
        this.childs.reverse();
        return this;
    }


    
}