
import Map from '../structures/map'
import Signal from './signal'

export default class EventManager {

    constructor(game) {
        this.game;
        this._signalsMap = new Map();
    }

    create(eventName) {}

    subscribe(eventName, func) {}

    dispatch(eventName, params) {}

} 