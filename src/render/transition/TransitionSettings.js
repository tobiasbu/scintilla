


export default class TransitionSettings {

    constructor(parent) {
        this.transition = parent;
        this.fromAlpha = 0;
        this.toAlpha = 0;
        this.fromColor = '#000';
        this.toColor = '#000';
        this.duration = 0.5;
        this.pauseDuration = 0;
        this.style = undefined;
        this.easingMethod = undefined;
        this.inMethod = undefined;
        this.outMethod = undefined;
        this.retroSteps = 3;
    }

    setSettings() {

    }

}