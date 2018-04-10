
import DataMap from '../structures/Map';
import Signal from './Signal';
import Validate from '../utils/Validate';
import GameEvents from './GameEvents';
import System from '../core/system/System';

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

    subscribe(eventName, delegate, context, priority) {

        let signal = this._signalsMap.get(eventName);

        if (signal === undefined || signal === null) {
            console.warn("EventManager.subscribe: There is no registered event called \'" + eventName + '\'.');
            return this;
        }

        if (!Validate.isFunction(delegate)) {
            console.warn("EventManager.subscribe: The variable is not a function.");
            return this;
        }

        signal.subscribe(delegate, context, priority);

        return this;

    } 

    subscribeOnce(eventName, delegate, context, priority) {

        let signal = this._signalsMap.get(eventName);

        if (signal === undefined || signal === null) {
            console.warn("EventManager.subscribeOnce: There is no registered event called \'" + eventName + '\'.');
            return this;
        }

        if (!Validate.isFunction(delegate)) {
            console.warn("EventManager.subscribeOnce: The variable \'" + eventName +"\' is not a function.");
            return this;
        }

        signal.subscribeOnce(delegate, context, priority);

        return this;

    }

    /**
    * Dispatch to subscribed Signal
    * @param {String} eventName The subscribed Signal name.
    * @param {...*} [params] Parameters that should be passed to each handler.
    */
    dispatch(eventName) {

        let signal = this._signalsMap.get(eventName);

        if (signal === undefined || signal === null) {
            //console.warn("EventManager.dispatch: There is no registered event called \'" + eventName + '\'.');
            return this;
        }


        let args = (arguments.length > 1) ? [arguments[1]] : Array.apply(null, arguments);

        signal.dispatch(args);

        return this;

    }

    has(eventName) {
        return this._signalsMap.has(eventName);
    }

} 

function BulkEventCreation(manager, events) {

    for (let i = 0; i < events.length; i++) {
        manager.create(events[i]);
    } 

}


System.register('EventManager', EventManager, 'events', function() {
    BulkEventCreation(this, GameEvents);
})