

export default class SignalBinding {
    
    constructor(signal, listener, listenerContext, priority) {

        this._signal = signal;
        this._listener = listener;
        this.context = listenerContext;
        this._priority = priority || 0;
        this.active = true;
        this.args = undefined;
        this._isOnce = false;
    }

    execute(argsArray) {
        let handlerReturn, params;

            if (this.active && !!this._listener) {

                params = this.args ? this.args.concat(argsArray) : argsArray;
                handlerReturn = this._listener.apply(this.context, params);
                if (this._isOnce) {
                    this.detach();
                }

            }
        return handlerReturn;
    }

    get listener() { return this._listener; }
    get signal() {return this._signal;}

    detach() {
        return this.isBound() ? this._signal.remove(this._listener, this.context) : null;
    }

     /**
         * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
         */
    isBound() {
        return (!!this._signal && !!this._listener);
    }

     /**
         * Delete instance properties
         * @private
         */
    _destroy() {
        delete this._signal;
        delete this._listener;
        delete this.context;
    }

}