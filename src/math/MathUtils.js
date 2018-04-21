const MathUtils = {


  toRadian: Math.PI / 180,
  toDegree: 180 / Math.PI,
  TAU: Math.PI * 2,
  //HALFPI : Math.PI / 2,
  EPSILON: Math.pow(2, -52),
  HALFPI: 1.5707963267948966,

  floor: function (value) {
    return (value >> 0);
  },

  round: function (value) {
    // With a bitwise or.
    //let rounded = (0.5 + value) | 0;
    // FASTEST - A double bitwise not.
    return ~~(0.5 + value);

    // Finally, a left bitwise shift.
    //rounded = (0.5 + value) << 0;
  },

  abs: function (value) {
    return ((value < 0) ? (-value) : (value));
  },

  max: function (a, b) {
    return (a < b) ? b : a;
  },

  min: function (a, b) {
    return !(b < a) ? a : b;
  },

  sign : function(value) {
    return (value < 0) ? -1 : (value > 0) ? 1 : 0;
  },

  clamp: function (value, min, max) {
    return (value > min) ? (value < max) ? value : max : min;
  },

  lerp: function (fromValue, toValue, t) {
    return (1.0 - t) * fromValue + t * toValue;
  },

  clampedLerp: function (fromValue, toValue, t) {
    t = MathUtils.clamp(t, 0.0, 1.0);
    return MathUtils.lerp(fromValue, toValue, t);
  },
  

  impreciseLerp: function (fromValue, toValue, t) {
    return fromValue + t * (toValue - fromValue);
  },

  distance: function (x0, y0, x1, y1) {
    return Math.sqrt((x0 -= x1) * x0 + (y0 -= y1) * y0);
  },

  angleBetween: function (x0, y0, x1, y1) {
    let angle = this.toDegree(Math.atan2(y1 - y0, x1 - x0));

    if (angle < 0 && angle >= -180)
      angle = 360 + angle;


    return angle;
  },

  radianToDegree: function (radians) {
    return radians * MathUtils.toDegree;
  },

  degreeToRadian: function (degrees) {
    return degrees * MathUtils.toRadian;
  },

  manhattan: function (from_x, from_y, to_x, to_y) {
    return {
      x: MathUtils.abs(to_x - from_x),
      y: MathUtils.abs(to_y - from_y)
    };
  },

  inManhattanRadius: function (from_x, from_y, to_x, to_y, radius, radius_y) {
    if (radius_y === undefined) radius_y = radius;
    var dist = this.manhattan(from_x, from_y, to_x, to_y);
    if (dist.x <= radius && dist.y <= radius_y)
      return true;
    else
      return false;
  },
 
  average : function() {
    let length = arguments.length;
    if (length === 0)
      return 0;
    return (this.sum.apply(this, arguments) / length);

  },

  sum : function() {
    let length = arguments.length;
    if (length === 0)
      return 0;
    let r = arguments[0];
    for (let i = 1; i < length; i++) {
      r += arguments[i];
    }
    return r;
  },

  sub : function() {
    let length = arguments.length;
    if (length === 0)
      return 0;
    let r = arguments[0];
    for (let i = 1; i < length; i++) {
      r -= arguments[i];
    }
    return r;
  },

  lerpAngle: function (fromValue, toValue, t) {

    /*var shortest_angle = ((((toValue - fromValue) % 360) + 540) % 360) - 180;
    return shortest_angle * t;*/

    var end = toValue;
    var start = fromValue;

    var difference = Math.abs(end - start);
    if (difference > 180) {
      // We need to add on to one of the values.
      if (end > start) {
        // We'll add it on to start...
        start += 360;
      } else {
        // Add it on to end.
        end += 360;
      }
    }

    // Interpolate it.
    var value = (start + ((end - start) * t));

    // Wrap it..
    var rangeZero = 360;

    if (value >= 0 && value <= 360)
      return value;

    return (value % rangeZero);


  }

};

Object.freeze(MathUtils);

export default MathUtils;