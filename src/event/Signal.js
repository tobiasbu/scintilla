/** @license
 * JS Signals <http://millermedeiros.github.com/js-signals/>
 * Released under the MIT license
 * Author: Miller Medeiros
 * Version: ::VERSION_NUMBER:: - Build: ::BUILD_NUMBER:: (::BUILD_DATE::)
*/

import DataList from '../structures/List'
import SignalBinding from './SignalBinding'
import IndexOfListener from './components/IndexOfListener';
import ValidateListener from './components/ValidateListener';
import RegisterListener from './components/RegisterListener';
import Validate from '../utils/Validate';



// Based on https://github.com/millermedeiros/js-signals
 /**
 * Custom event broadcaster
 * Inspired by Robert Penner's AS3 Signals.
 * @name Signal
 * @author Miller Medeiros
 * @class
 */
export default class Signal {

    /**
     * @constructor
     */
    constructor() {
        this._bindings = new DataList();
        this.active = true;
        this._shouldPropagate = true;
    }

    set propagate(value) {this._shouldPropagate = value;}
    get propagate() {return this._shouldPropagate;}
    get count() {return this._bindings.size;}


    /**
     * Check if listener was attached to Signal.
     * @param {Function} listener The listener
     * @param {Object} [context] Context
     * @return {boolean} if Signal has the specified listener.
     */
    has(listener, context) {
        return IndexOfListener(this, listener, context) !== -1;
    }

    /**
     * Add a listener to the signal.
     * @param {Function} listener Signal handler function.
     * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
     * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
     * @return {Signal} return this signal.
     */
    subscribe(listener, context, priority) {
        ValidateListener(listener, 'subscribe');
        RegisterListener(this, listener, context, priority);
        return this;
    }

    /**
     * Remove a single listener from the dispatch queue.
     * @param {Function} listener Handler function that should be removed.
     * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
     * @return {Function} Listener handler function.
     */
    unsubscribe(listener, context) {
        ValidateListener(listener, 'unsubscribe');

        let i = IndexOfListener(this, listener, context);
        if (i !== -1) {
            this._bindings[i]._destroy();
            this._bindings.eraseAt(i);
        }

        return listener;
    }

    unsubscribeAll() {

    }

     /**
    * Dispatch/Broadcast Signal to all listeners added to the queue.
    * @param {...*} [params] Parameters that should be passed to each handler.
    */
    dispatch(params) {
        if (!this.active)
            return;
        
        let size = this._bindings.length;

        if (!size)
            return;

        let paramsSize = arguments.length;

        if (paramsSize > 1)
        {
            params = Array.prototype.slice.call(arguments);
        }

        let binds = this._bindings.childs.slice();

        do { size--; } 
        while (binds[size] && this._shouldPropagate && binds[size].execute(params) !== false);
    }

    destroy() {
        this.unsubscribeAll();
        delete this._bindings;
    }

}