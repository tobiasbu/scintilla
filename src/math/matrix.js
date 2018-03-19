
/*


* | a | b | x |
* | c | d | y |
* | 0 | 0 | 1 |

* | 0 | 3 | 6 | * | a | c | x |
* | 1 | 4 | 7 | * | b | d | y |
* | 2 | 5 | 8 | * | 0 | 0 | 1 |

a = scalex
b = cos
x = x translate

c = scaley
d = sin
y = y translate

HTML5/CSS3 uses matrices in column-major order based.

*/

class Matrix {
  
  /*
  * Constructor is idetity only
  */
  constructor(a, b) {

    /*a = a || i;
    b = b || 0;
    x = x || 0;

    c = c || 0;   
    d = d || i;   
    y = y || 0;*/

    a = a || 0;
    b = b || 0;

    this.a = [];

    // first column
    this.a[0] = a;
    this.a[1] = b;
    this.a[2] = b;
    // second column
    this.a[3] = b;
    this.a[4] = a;
    this.a[5] = b;
    // third column
    this.a[6] = b;
    this.a[7] = b;
    this.a[8] = a;
    //this.at = null;

  }

  at(i, j) {
    return this.a[i + j * 3];
  }

  set(i, j, value) {
    this.a[i + j * 3] = value;
    return this;
  }

  setAll(a, b, c, d, e, f, g, h, i) {

    this.a[0] = a;
    this.a[1] = b;
    this.a[2] = c;

    this.a[3] = d;
    this.a[4] = e;
    this.a[5] = f;

    this.a[6] = g;
    this.a[7] = h;
    this.a[8] = i;

    return this;

  }

  translate(x, y) {

    this.a[6] = x;
    this.a[7] = y;
    return this;
  }

  move(x, y) {

    this.a[6] += x;
    this.a[7] += y;
    return this;
  }



  scale(x, y) {

    this.a[0] *= x; // a
    this.a[1] *= x; // b

    this.a[2] *= y; // c
    this.a[3] *= y; // d

    this.a[4] *= x; // x
    this.a[5] *= y; // y
    return this;

    /*this.a *= x;
    this.d *= y;
    this.c *= x;
    this.b *= y;
    this.x *= x;
    this.y *= y;*/

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
   return this;

 }

 multiply(otherMatrix) {
    return Matrix.multiply(this, otherMatrix);
 }

 transpose() {
  return Matrix.transpose(this);
 }

 toString() {
   var str = "";
   for(let y = 0; y < 3; y++) {
      for(let x = 0; x < 3; x++) {
        let val = this.at(x, y); 
        //str += val.toString() + " ";
        //console.log("---- " + (x + y * 3).toString());
        str += val + " ";
      }
      str += "\n"
   }

   return str;
    
 }

 static identity() { return new Matrix(1); }

 static zero() { return new Matrix(0); }

 static transpose(mat) {

  var mat = Matrix.zero();
  return mat.setAll(
    mat.a[0], mat.a[3], mat.a[6],
    mat.a[1], mat.a[4], mat.a[7],
    mat.a[2], mat.a[5], mat.a[8],
  );

 }

 static multiply(a, b) {
    var mat = Matrix.zero(); // zeroes
    let val;

    for (let i = 0; i < 3; ++i)
    {
      for (let j = 0; j < 3; ++j)
      {
        for (let k = 0; k < 3; ++k)
        {
          val = mat.at(i, k);
          val += a.at(i, j) * b.at(j, k);
          mat.set(i, k, val);
        }
      }
    }

    return mat;
 }

}

module.exports = Matrix;