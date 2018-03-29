/** @license
 * JS Signals <http://millermedeiros.github.com/js-signals/>
 * Released under the MIT license
 * Author: Miller Medeiros
 * Version: ::VERSION_NUMBER:: - Build: ::BUILD_NUMBER:: (::BUILD_DATE::)
*/

import DataList from '../structures/List'
import SignalBinding from './SignalBinding'

function ValidateListener(listener, func) {
    if (typeof listener !== 'function') 
        throw new Error( 'Signal.{fn}: Listener should be a function.'.replace('{fn}', func) );
    
}

// Based on https://github.com/millermedeiros/js-signals
export default class Signal {

    constructor() {
        this._bindings = new DataList(undefined, true);
        this.active = true;
        this._shouldPropagate = true;
    }

    set propagate(value) {this._shouldPropagate = value;}
    get propagate() {return this._shouldPropagate;}
    get count() {return this._bindings.size;}

    // PRIVATE FUNCTIONS

    _register(listener, context, priority) {

        let binding = null;
        let index = this._indexOfListener(listener, context);

        if (index !== -1) {
            binding = this._bindings[index];
        } else {

            binding = new SignalBinding(this, listener, isOnce, listenerContext, priority);
            this._addBinding(binding);
        }

        return binding;
        
    }

    _indexOfListener(listener, context) {
 
        let r = this.bindings.each(element, index => {
            if (element._listener === listener && element._context === context) {
                return index;
            }
        })

        return r || -1;
    }

    _addBinding(binding) {
        var n = this._bindings.length;
        do { --n; } while (this._bindings.at(n) && binding._priority <= this._bindings.at(n)._priority);
        this._bindings.insert(binding,n);
    }

    // PUBLIC

    has(listener, context) {
        return this._indexOfListener(listener, context) !== -1;
    }

    subscribe(listener, context, priority) {
        ValidateListener(listener, 'subscribe');
        return this._register(listener, context, priority);
    }

    unsubscribe(listener, context) {
        ValidateListener(listener, 'unsubscribe');

        let i = this._indexOfListener(listener, context);
        if (i !== -1) {
            this._bindings[i]._destroy();
            this._bindings.eraseAt(i);
        }

        return listener;
    }

    unsubscribeAll() {

    }

    dispatch(params) {
        if (!this.active)
            return;
        
        let length = this._bindings.length;

        if (!length)
            return;

        

        do { length--; } while (this.bindings[length] && this._shouldPropagate && this.bindings[length].execute(paramsArr) !== false);
    }

    destroy() {
        this.unsubscribeAll();
        delete this._bindings;
    }

}