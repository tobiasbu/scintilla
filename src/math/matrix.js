
/*


* | a | b | x |
* | c | d | y |
* | 0 | 0 | 1 |

a = scalex
b = cos
x = x translate

c = scaley
d = sin
y = y translate


*/

export default class Matrix {
  
  constructor(a,b,c,d,x,y) {

    a = a || 1;
    b = b || 0;
    c = c || 0;
    d = d || 1;
    x = x || 0;
    y = y || 0;

    this.a = a
    this.b = b;
    this.c = c;
    this.d = d;
    this.x = x;
    this.y = y;

  }

  set(a,b,c,d,x,y) {

    this.a = a
    this.b = b;
    this.c = c;
    this.d = d;
    this.x = x;
    this.y = y;

  }

  translate(x, y) {

    this.x += x;
    this.y += y;

  }

  scale(x, y) {

    this.a *= x;
    this.d *= y;
    this.c *= x;
    this.b *= y;
    this.x *= x;
    this.y *= y;

  }

  rotate(angle) {

    var cos = Math.cos(angle);
    var sin = Math.sin(angle);

    var a1 = this.a;
    var c1 = this.c;
    var x1 = this.x;

   this.a = a1 * cos-this.b * sin;
   this.b = a1 * sin+this.b * cos;
   this.c = c1 * cos-this.d * sin;
   this.d = c1 * sin+this.d * cos;
   this.x = x1 * cos - this.y * sin;
   this.y = x1 * sin + this.y * cos;

 }

 static identity() {

   return new Matrix(1, 0, 0, 1, 0, 0);

 }

}
