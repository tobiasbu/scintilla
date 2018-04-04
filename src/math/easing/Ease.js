import EaseIn from "./EaseIn";
import EaseOut from './EaseOut'
import EaseInOut from "./EaseInOut";

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
    inout: EaseInOut



}

Object.freeze(Ease);

module.exports = Ease;

export default Ease;