import MathUtils from "../MathUtils";
import EaseIn from "./EaseIn";
import EasingType, { EASE_BACK_CONST } from "./EasingType";


class EaseInOutFunctions {

    linear(from, to, t) {
        return MathUtils.lerp(from, to, t);
    }

    stepped(from, to, t) {
        return to * ((t < 0.5) ? 0 : 1) + from;
    }

    cut(from, to, t, levels) {
        if (levels === undefined) levels = 2;
        return MathUtils.lerp(from, to, MathUtils.floor(t * levels) / levels);
    }

    sine(from, to, t) {
        return to * ((Math.sin(t * Math.PI - MathUtils.HALFPI) + 1) / 2) + from;
    }

    power(from, to, t, power) {

        t *= 2;
        if (t < 1)
            return EaseIn.power(from, to, t, power) / 2;

        let sign = (power % 2 == 0) ? -1 : 1;
        return to * (sign / 2.0 * (Math.pow(s - 2, power) + sign * 2)) + from;
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

        if (t == 0.0 || t == 1.0)
            return (to * t) + from;

        if (t < 0.5) {
            return (to * 0.5 * Math.pow(2, (20 * t) - 10)) + from;
        } else {
            return (to * -0.5 * Math.pow(2, (-20 * t) + 10) + 1) + from;
        }
    }

    circ(from, to, t) {

        if (t / 2 < 1)
            return -to / 2 * (Math.sqrt(1 - t * t) - 1) + from;

        return to / 2 * (Math.sqrt(1 - t * (t -= 2)) + 1) + from;

    }

    elastic(from, to, t, duration) {
        if (duration === undefined) duration = 1;

        if (t == 0)
            return from;

        if ((t /= duration / 2) == 2)
            return from + to;

        let p = duration * (0.3 * 1.5);


        let s = p / 4;
        let postFix = 0;


        if (to >= Math.abs(to)) {
            s = p / (2 * Math.PI) * Math.asin(to / to);
        }

        if (t < 1) {
            postFix = to * Math.pow(2, 10 * (t -= 1));
            return -0.5 * (postFix * Math.sin((t * duration - s) * (2 * Math.PI) / p)) + from;
        }

        // postIncrement is evil
        postFix = to * Math.pow(2, -10 * (t -= 1));
        return postFix * Math.sin((t * duration - s) * (2 * Math.PI) / p) * 0.5 + to + from;
    }

    back(from, to, t) {

        if (t == 0)
            return from;

        if ((t /= 0.5) == 2)
            return from + to;

        let p = (.3 * 1.5);
        let s = EASE_BACK_CONST;

        if (t < 1)
            return to / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + from;

        return to / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + from;
    }

    /**
     * Ease-in and ease out by specific EasingType.
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

        if (arg === undefined) arg = 1;

        switch (type) {

            case EasingType.NONE:
                return t;
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

}

const EaseInOut = new EaseInOutFunctions();

Object.freeze(EaseInOut);

export default EaseInOut;