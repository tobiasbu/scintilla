
export default class Module
{
    constructor(moduleManager)
    {
        this.moduleName = "None";
        this._enabled = true;
        this.entity = null;
        this.parent = moduleManager || null;
        this.game = moduleManager.game || null;
    }

    get enabled() {return this._enabled;}
    set enabled(value) {
        value = !!value;

        if (value !== this._enabled)
        {
            this._enabled = value;
        }
    }
}