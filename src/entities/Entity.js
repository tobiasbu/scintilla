/*
*
* Base class for Entities
*
*/
export default class Entity {

    constructor(name, game)
    {
        this._name = name || 'New Entity';
        this._active = true;
        this._pool = null;
       // this._priority = 0;
        this.game = game || undefined; 
        this.persistent = false;
    }

    /*set priority(value) {
        this._priority = value;
    }

    get priority() {
        return this._priority;
    }*/

    get active() {return this._active;}
    set active(value)
    {
        value = !!value;

        if (value !== this._active)
            this._active = value;

        return this._active;
    }

    get name() {return this._name;}
    set name(value)
    {
        value = !!value;

        if (value !== this._name)
            this._name = value;

        return this._name;
    }

    destroy()
    {
        
    }

};