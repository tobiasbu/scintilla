
export default class Module
{
    constructor(name, moduleManager)
    {
        this._type = name || "none";
        this._enabled = true;
        this.entity = null;
        this.moduleManager = moduleManager || undefined;

        if (moduleManager !== undefined)
        {
            this.entity = moduleManager.entity;
        }
        //this.game = moduleManager.game || null;
    }

    init(instace, game) {

        this.entity = instace;
        //this.game = game;
        this.moduleManager = instace.modules;

    }

    get type() {return this._type;}
    get enabled() {return this._enabled;}
    set enabled(value) {
        value = !!value;

        if (value !== this._enabled)
        {
            this._enabled = value;
        }
    }
}

module.exports = Module;