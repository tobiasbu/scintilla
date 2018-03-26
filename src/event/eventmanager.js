
import DataMap from '../structures/map'
import Signal from './signal'

export default class EventManager {

    constructor(game) {
        this.game;
        this._signalsMap = new DataMap();
    }

    create(eventName) {}

    subscribe(eventName, func) {}

    dispatch(eventName, params) {}

} 