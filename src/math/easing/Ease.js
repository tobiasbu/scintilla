import EaseIn from "./EaseIn";
import EaseOut from './EaseOut';
import EaseInOut from "./EaseInOut";
import EasingType from "./EasingType";

/**
 * Easing functions
 */
const Ease = {


    /**
     * Ease-in functions
     */
    in: EaseIn,

    /**
     * Ease-out functions
     */
    out: EaseOut,

    /**
     * Ease-in-out functions
     */
    inout: EaseInOut,


    Type : EasingType,
}

Object.freeze(Ease);

export default Ease;