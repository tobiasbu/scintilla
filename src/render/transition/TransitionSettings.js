
const TranstionStyle = {
    NONE : 0,
    FILL : 1,
}




export default class TransitionSettings {

    constructor(parent) {
        this.transition = parent;

        this.fromAlpha = 0;
        this.toAlpha = 0;

        this.fromColor = '#000';
        this.toColor = '#000';

        this.inDuration = 0.5;
        this.outDuration = 0.5;

        this.pauseDuration = 0;
        this.style = undefined;

        this.timingInMethod = undefined;
        this.timingOutMethod = undefined;
        this.timingInArgument = 3; // step
        this.timingOutArgument = 3;
    }

    setSettings(config) {

    }

    setInColor(color) {

    }

    setOutColor(color) {

    }

    setDuration(duration) {
        this.setInDuration(duration);
        this.setOutDuration(duration);
        return this;  
    }

    setInDuration(duration) {
        this.inDuration = Math.abs(duration);
        return this; 
    }

    setOutDuration(duration) {
        this.outDuration = Math.abs(duration);
        return this; 
    }
    
    setPauseDuration(duration) {
        this.pauseDuration = Math.abs(duration);
        return this; 
    }

    setTiming(easingType, parameter) {
        this.setInTiming(easingType, parameter);
        this.setOutTiming(easingType, parameter);
        return this;
    }

    setInTiming(easingType, parameter) {
        this.timingInMethod = easingType;
        this.timingInArgument = parameter || 1;
        return this; 
    }

    setOutTiming(easingType, parameter) {
        this.timingOutMethod = easingType;
        this.timingOutArgument = parameter || 1;
        return this; 
    }
}