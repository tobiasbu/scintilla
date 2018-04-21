import MathUtils from "./MathUtils";


class LCG {

    constructor() {
        /// TODO
        this.seed = 0;
    }

    range(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    irange(min, max) {
        return MathUtils.floor(Math.random() * (max - min)) + min; //  + 1
    }

}

