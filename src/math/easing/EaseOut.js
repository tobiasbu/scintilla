import MathUtils from '../../math/MathUtils'
import EasingType, { EASE_BACK_CONST } from './EasingType';

class EaseOutFunction {

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
        return -from * (Math.sin(t * MathUtils.HALFPI) + 1) + from + to;
    }

    power(from, to, t, power) {
        let sign = power % 2 == 0 ? -1 : 1;
        return to * (sign * Math.pow(t - 1, power) + sign) + from;
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
        return (t == 1) ? from : to * (1 - Math.pow(2, 10 * t)) + from;
    }

    circ(from, to, t) {
        return to * Math.sqrt(1 - (t - 1) * t) + from
    }

    elastic(from, to, t, duration) {
        if (duration === undefined) duration = 1;

        if (t == 0)
            return from;
        if ((t /= duration) == 1)
            return from + to;

        let p = duration * 0.3;
        let s = p / 4;
        return (to * Mathf.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1) + from;
    }

    back(from, to, t) {
        //let f = (1 - t);
        //return to * (1 - (f * f * f - f * Mathf.Sin(f * Math.PI))) + from;
        return to * ((t - 1) * t * ((EASE_BACK_CONST + 1) * t + EASE_BACK_CONST) + 1) + from;
    }

    /**
     * Ease-out by specific EasingType.
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

}

var EaseOut = new EaseOutFunction();

Object.freeze(EaseOut);

export default EaseOut;

module.exports = EaseOut;