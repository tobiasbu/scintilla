
/**
 * Describes the easing method type
 */
const EasingType = {
    /**
     * No easing : 0
     */
    NONE : 0,
    /**
     * Clamped interpolation between tMin and tMax : 1
     */
    STEPPED : 1,
    /**
     * Linear interpolation : 2
     */
    LINEAR : 2,
    CUT : 3,
    SINE : 4,
    QUADRATIC : 5,
    CUBIC : 6,
    QUARTIC : 7,
    QUINTIC : 8,
    POWER : 9,
    EXPONENTIAL : 10,
    CIRC : 11,
    BACK : 12,
    ELASTIC : 13,
    BOUNCE : 14,
    
    
}

export const EASE_BACK_CONST = 1.70158;

Object.freeze(EasingType);

export default EasingType;

module.exports = EasingType;