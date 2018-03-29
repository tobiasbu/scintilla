
import DataMap from '../structures/Map'
import Signal from './Signal'

export default class EventManager {

    constructor(game) {
        this.game;
        this._signalsMap = new DataMap();
    }

    create(eventName) {}

    subscribe(eventName, func) {}

    dispatch(eventName, params) {}

} 