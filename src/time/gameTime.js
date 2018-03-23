
// Wrapper class for game time

export default class GameTime {

    constructor(game) {
        this.game = game;

    }

    init(gameLoop) {
        this._updateStep = gameLoop.updateStep;
    }

    get now() {
        return this._updateStep.time;
    }

    get fps() {
        return this._updateStep.fps;
    }

    get desiredFps() {
        return this._updateStep.fpsDesired;
    }

    get delta() {
        return this._updateStep.deltaTime;
    }

    get elapsed() {
        return this._updateStep.elapsed;
    }

    get rawDelta() {
        return this._updateStep.hiDeltaTime;
    }

}