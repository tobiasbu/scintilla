import DataList from "../structures/List";
import DataMap from "../structures/Map";

export default class InputSystem {

    constructor(game) {
        this.game = game;

        this._enabled = true;

        this._eventQueue = new DataList();
        this._buttonWatcher = new DataMap();
        this._buttonGarbage = [];
    
        this.eventTarget = null;
        this.eventHandler = null;
    
        this.preventDefault = true;
    }

    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        value = !!value;

        if (value !== this._enabled) {
            if (!value)
                this.reset();

            this._enabled = value;
        }
    }

    clear() {
        this._buttonWatcher.clear();
        this._buttonGarbage.splice(0, this._buttonGarbage.length);
        this._eventQueue.clear();
    }

    reset () {
        
    }


}