
export default Color = {

rgba : function(r,g,b,a) {

  return 'rgba(' + r.toString() + ',' + g.toString() + ',' + b.toString() + ',' + (a / 255).toString() + ')';

},

/*
Source code: https://github.com/mjackson/mjijackson.github.com/blob/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.txt
*/
HSLtoRGB : function(h,s,l,a) {

  var alp = 255;

  if (a !== undefined || a !== null)
    alp = a;

  h = h / 255.0;
  s = s / 255.0;
  l = l / 255.0;

  var result = {r:l,b:l,g:l};

  if (s !== 0)
  {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      result.r = this.hueToColor(p, q, h + 1 / 3);
      result.g = this.hueToColor(p, q, h);
      result.b = this.hueToColor(p, q, h - 1 / 3);
  }

  result.r = Math.floor((result.r * 255));
  result.g = Math.floor((result.g * 255));
  result.b = Math.floor((result.b * 255));


  return this.rgba(result.r,result.g,result.b,alp);

},

/*
Source code: https://github.com/mjackson/mjijackson.github.com/blob/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.txt
*/
hueToColor : function(p, q, t) {

  if (t < 0)
    t += 1;

  if (t > 1)
    t -= 1;

  if (t < 1 / 6)
      return p + (q - p) * 6 * t;

  if (t < 1 / 2)
      return q;

  if (t < 2 / 3)
      return p + (q - p) * (2 / 3 - t) * 6;

  return p;

},

/*
Source code: http://jsfiddle.net/mushigh/myoskaos/
*/
rgbToHex : function(r,g,b) {

  return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);

},

/*
Source code: http://jsfiddle.net/mushigh/myoskaos/
*/
componentToHex : function(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

}

module.exports = Color;
