

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
        this.game = game || undefined; 
    }

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