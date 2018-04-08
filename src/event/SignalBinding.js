

export default class SignalBinding {
    
    constructor(signal, listener, listenerContext, priority, once) {

        this._signal = signal;
        this._listener = listener;
        this._context = listenerContext;
        this._priority = priority || 0;
        this.active = true;
        this.args = undefined;
        this._isOnce = once || false;
    }

    get isOnce() {return this._isOnce;}
    get listener() { return this._listener; }
    get signal() {return this._signal;}

    execute(argsArray) {
        let handlerReturn, params;

            if (this.active && !!this._listener) {

                params = this.args ? this.args.concat(argsArray) : argsArray;
                handlerReturn = this._listener.apply(this._context, params);
                if (this._isOnce) {
                    this.detach();
                   
                }

            }
        return handlerReturn;
    }

    

    detach() {
        if (!this.isBound())
            return;
        this._signal.unsubscribe(this._listener, this._context);
        
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