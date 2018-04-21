import MathUtils from "../MathUtils";
import EasingType, { EASE_BACK_CONST } from "./EasingType";


class EaseInFunctions {


    /**
     * 
     * @param {Number} from 
     * @param {Number} to 
     * @param {Number} t 
     * @param {Number} [duration]
     */
    linear(from, to, t) {
        return MathUtils.lerp(from, to, t);
    }

    stepped(from, to, t) {

        if (t < 0.5)
            return from;

        return from + to;
    }

    cut(from, to, t, levels) {
        if (levels === undefined) levels = 2;
        return MathUtils.lerp(from, to, MathUtils.floor(t * levels) / levels);
    }

    sine(from, to, t) {
        return to * (Math.sin(t * MathUtils.HALFPI - MathUtils.HALFPI) + 1) + from;
    }

    power(from, to, t, power) {
        return to * Math.pow(t, power) + from;
    }

    quadratic(from, to, t) {
        return this.power(from, to, t, 2);
    }

    cubic(from, to, t) {
        return this.power(from, to, t, 3);
    }

    quartic(from, to, t) {
        return this.power(from, to, t, 4);
    }

    quintic(from, to, t) {
        return this.power(from, to, t, 5);
    }

    exponential(from, to, t) {
        return (t == 0) ? from : to * Math.pow(2, 10 * (t - 1)) + from;
    }

    circ(from, to, t) {
        return -to * (Math.sqrt(1 - t * t) - 1) + from
    }

    elastic(from, to, t, duration) {
        if (duration === undefined) duration = 1;

        if (t == 0)
            return from;
        if ((t /= duration) == 1)
            return from + to;

        let p = duration * 0.3;
        let s = p / 4;
        // this is a fix, again, with post-increment operators
        let postFix = to * Math.pow(2, 10 * (t -= 1));
        return -(postFix * Math.sin((t * duration - s) * (2 * Math.PI) / p)) + from;
    }

    back(from, to, t) {
        return to * t * t * ((EASE_BACK_CONST + 1) * t - EASE_BACK_CONST) + from;
    }

    /**
     * Ease-in by specific EasingType.
     * 
     * @param {EasingType} type The type of easing
     * @param {Number} from Start point
     * @param {Number} to End point
     * @param {Number} t Normalized time
     * @param {Number} [arg] Additional argument for specific types:
     * 
     * @constant EasingType.CUT: The cell levels of the interpolation
     * @constant EasintType.ELASTIC: The duration of the easing.
     * @constant EasintType.POWER: The pow product.
     */
    by(type, from, to, t, arg) {

        if (arg === undefined) arg = 3;

        switch (type) {

            case EasingType.NONE:
                return t;
            case EasingType.STEPPED:
                return this.stepped(from, to, t);
            case EasingType.CUT:
                return this.cut(from, to, t, arg);
            case EasingType.LINEAR:
                return this.linear(from, to, t);
            case EasingType.SINE:
                return this.sine(from, to, t);
            case EasingType.QUADRATIC:
                return this.power(from, to, t, 2);
            case EasingType.CUBIC:
                return this.power(from, to, t, 3);
            case EasingType.QUARTIC:
                return this.power(from, to, t, 4);
            case EasingType.QUINTIC:
                return this.power(from, to, t, 5);
            case EasingType.POWER:
                return this.power(from, to, t, arg);
            case EasingType.EXPONENTIAL:
                return this.exponential(from, to, t);
            case EasingType.CIRC:
                return this.circ(from, to, t);
            case EasingType.BACK:
                return this.back(from, to, t);
            case EasingType.ELASTIC:
                return this.elastic(from, to, t, arg);
        }

        return t;
    }


};

const EaseIn = new EaseInFunctions();

Object.freeze(EaseIn);

export default EaseIn;