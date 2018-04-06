
import MergeSort from './useful/MergeSort'

export default class DataList
{
    constructor(elements, unique)
    {
        this.unique = unique || true;
        this.childs = [];

        if (Array.isArray(elements))
        {
            for (let i = 0; i < elements.length; i++)
                this.push(elements[i]);
        }

    }

    get size() {return this.childs.length;}
    get length() {return this.childs.length;}

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
        var childToErase = null;

        if (idx !== -1)
            childToErase = this.childs.splice(idx, 1);
        
        return childToErase;
    }

    eraseAt(index) {
        var child = this.childs[index];

        if (child)
            this.childs.splice(index, 1);

        return child;
    }

    eraseList(listToRemove, size){
        
        if (size === undefined) size = listToRemove.size;

        for (let i = 0; i < size; i++)
        {
            var child = listToRemove.childs[i];
            this.erase(child);
            /*let child = this.listToRemove[i];
            let index = this._instances.indexOf(gameObject);

            if (index > -1)
               this._instances.splice(index, 1);*/
            
        }
    }

    pop() {
        /// TODO
    }

    popFront() {
        /// TODO
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
            this.erase(this.childs[i]);
        }

        return this;
    }

    splice(start, count) {
        return this.childs.splice(start, count);
    }

    destroy() {
        this.clear();
        this.childs = [];
        this.parent = null;
    }

    concat(otherList, clearOther) {
        if (clearOther === undefined) clearOther = false;

        if (clearOther) {
            this.childs = this.childs.concat(otherList.childs.splice(0));
        } else {
            this.childs = this.childs.concat(otherList.childs);
        }

        
        return this;
    }

    each(callback) {
        let params = [ null ];

        var content = this.childs;

        for (let i = 0; i < arguments.length; i++)
            params.push(arguments[i+1]);

        for (let i = 0; i < content.length; i++) {
            params[0] = i;
            let r = callback(content[i], params);
            if (r !== undefined)
                return r;
           //break;
        }
    }

    sort(predicate) {
        if (predicate === undefined) return;
        return MergeSort(this.childs, predicate);
        
        //childs.sort(predicate);
    }

    find(predicate) {
        if (predicate === undefined) return;

        let size = this.childs.length;

        for (let i = 0; i < size; i++) {
            if (predicate(this.childs[i])) {
                return this.childs[i];
            }
        }
    
        return null;
      }

    swap(childA, childB) {

        if (childA === childB)
            return;

        let idx0 = this.indexOf(childA);
        let idx1 = this.indexOf(childB);

        if (idx0 < 0 || idx1 < 0) {
            throw new Error('DataList.swap: Could not swap childrens. The objects are not in the list.');
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
            throw new Error('DataList.swapByIndex: Could not swap childrens by index. The objects are not in the list.');
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