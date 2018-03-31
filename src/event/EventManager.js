
import DataMap from '../structures/Map'
import Signal from './Signal'
import Validate from '../utils/Validate';

export default class EventManager {

    constructor() {
        this._signalsMap = new DataMap();
    }

    create(eventName) {

        let has = this._signalsMap.get(eventName);

        if (has !== undefined && has != null) return has;

        let signal = new Signal();

        this._signalsMap.set(eventName, signal);

        return signal;
    }

    subscribe(eventName, func) {

        let has = this._signalsMap.get(eventName);

        if (has === undefined || has === null) {
            console.warn("EventManager.subscribe: There is no registered event called \'" + eventName + '\'.');
            return this;
        }

        if (!Validate.isFunction(func)) {
            console.warn("EventManager.subscribe: The variable is not a function.");
            return this;
        }

        has.subscribe(func);

        return this;

    }

    /**
    * Dispatch to subscribed Signal
    * @param {String} eventName The subscribed Signal name.
    * @param {...*} [params] Parameters that should be passed to each handler.
    */
    dispatch(eventName) {

        let has = this._signalsMap.get(eventName);

        if (has === undefined || has === null) return this;

        let args = (arguments.length > 1 ? [arguments[1]] : Array.apply(null, arguments));

        has.dispatch(args);

        return this;

    }

} 