
import MergeSort from './useful/MergeSort'

export default class DataList
{
    constructor(elements, unique)
    {
        this.unique = unique || true;
        this.childs = [];

        if (elements !== null && Array.isArray(elements))
        {
            for (let i = 0; i < elements.length; i++)
                this.push(elements[i]);
        }

    }

    get size() {return this.childs.length;}
    get length() {return this.childs.length;}

    first() {
        if (this.childs.length > 0) 
            return this.childs[0];
        else
            return null;
        
    }

    last() {
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

    get(index) {
        return  this.childs[index];
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
        let child = this.childs[index];

        if (child)
            this.childs.splice(index, 1);

        return child;
    }

    eraseList(listToRemove, size, destroy){

        if (destroy === undefined) destroy = false;

        if (Array.isArray(listToRemove)) {
            if (size === undefined) size = listToRemove.length;

            for (let i = 0; i < size; i++)
            {
                let child = listToRemove[i];
                this.erase(child);           
            }

        } else {
            if (size === undefined) size = listToRemove.size;

            for (let i = 0; i < size; i++)
            {
                let child = listToRemove.childs[i];
                this.erase(child);           
            }
        }        
    }

    eraseIndexedList(listToRemove) {

        let size = listToRemove.length;

        if (Array.isArray(listToRemove)) {
            
            for (let i = 0; i < size; i++)
            {
                let index = listToRemove[i];
                this.eraseAt(index);   
            }

        } else {
            for (let i = 0; i < size; i++)
            {
                let index = listToRemove.childs[i];
                this.eraseAt(index);           
            }
        }
        return this;
    }

    pop() {
        return this.childs.pop();
    }

    popFront() {
        return this.childs.shift();
    }

    has(child) {
        return (this.childs.indexOf(child) > -1);
    }

    hasAt(index) {
        return this.childs[index] !== undefined;
    }

    empty() {
        return (this.childs.length === 0);
    }

    clear() {
        /*let i = this.childs.length;

        while(i--) {
            this.erase(this.childs[i]);
        }*/

        this.childs.length = 0;

        return this;
    }

    splice(start, count, items) {
        if (items === undefined)
        return this.childs.splice(start, count);
        else 
        return this.childs.splice(start, count, items);
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
        let params = [];

        let content = this.childs;
        let r;

        for (let i = 1; i < arguments.length; i++)
            params.push(arguments[i]);

        for (let i = 0; i < content.length; i++) {
            r = callback(content[i], i, params);
            if (r !== undefined) {
                return r;
            }
           //break;
        }

        return r;
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

    content() {
        return this.childs;
    }


    
}