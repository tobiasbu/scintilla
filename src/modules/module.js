
export default class Module
{
    constructor(moduleType, moduleName, moduleManager)
    {
        this._moduleType = moduleType || "none";
        this._moduleName = moduleName || "noName";
        this._enabled = true;
        this.entity = null;
        this.moduleManager = moduleManager || undefined;

        if (moduleManager !== undefined)
        {
            this.entity = moduleManager.entity;
        }
        //this.game = moduleManager.game || null;
    }


    get type() {return this._moduleType;}
    get name() {return this._moduleName;}
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