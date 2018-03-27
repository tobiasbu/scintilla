
/*


* | a | b | x | * | 0 | 2 | 4 |
* | c | d | y | * | 1 | 3 | 5 |
* | 0 | 0 | 1 |

* | 0 | 3 | 6 | * | a | c | x |
* | 1 | 4 | 7 | * | b | d | y |
* | 2 | 5 | 8 | * | 0 | 0 | 1 |

a = scale_x
b = cos
x = x translate

c = scale_y
d = sin
y = y translate

HTML5/CSS3 uses matrices in column-major order based.

*/

class Matrix {
  
  /*
  * Constructor is identity only
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

  setIdentity() {
    return this.setTransform(
      1,0,0,
      0,1,0,
      0,0,1
    );
  }

  setTransform(a, b, c, d, e, f, g, h, i) {

    this.a[0] = a;
    this.a[1] = b;
    this.a[2] = c; // 0

    this.a[3] = d;
    this.a[4] = e;
    this.a[5] = f; // 0

    this.a[6] = g; // x
    this.a[7] = h; // y
    this.a[8] = i;

    return this;

  }

  translate(x, y) {


  /* | a | b | x | * | 0 | 2 | 4 |
  *  | c | d | y | * | 1 | 3 | 5 |

  * | 0 | 3 | 6 | * | a | c | x |
  * | 1 | 4 | 7 | * | b | d | y |
  * | 2 | 5 | 8 |
  */
    // 4 = 0 * x * 2 * y + 4
    // 5 = 1 * x * 3 * y + 5

    // 6 = 1 * x + 3 * y + 5
    // 7 = 1 * x + 4 * y + 7
    this.a[6] = this.a[0] * x + this.a[3] * y + this.a[6];
    this.a[7] = this.a[1] * x + this.a[4] * y + this.a[7];
    return this;
  }

  scale(x, y) {

    this.a[0] *= x; // a
    this.a[1] *= x; // b

    this.a[3] *= y; // c
    this.a[4] *= y; // d

    this.a[6] *= x; // x
    this.a[7] *= y; // y
    return this;

  }

  rotate(radianAngle) {
    let cos = Math.cos(radianAngle);
    let sin = Math.sin(radianAngle);

    return this.radianRotate(cos, sin);
 }

 radianRotate(cos, sin) {
 return this.transform(cos, sin, -sin, cos, 0, 0);
 }

 transform(a, b, c, d, x, y) {
  let a00 = this.a[0]; // a
  let a01 = this.a[1]; // b

  let a10 = this.a[3]; // c
  let a11 = this.a[4]; // d

  let a20 = this.a[6]; // x
  let a21 = this.a[7]; // y

  this.a[0] = a * a00 + b * a10; // a * a0 + b * c0;
  this.a[1] = a * a01 + b * a11; // a * b0 + b * d0;

  this.a[3] = c * a00 + d * a10; // c * a0 + d * c0;
  this.a[4] = c * a01 + d * a11; // c * b0 + d * d0;

  this.a[6] = x * a00 + y * a10 + a20; // x * a0 + y * c0 + x0;
  this.a[7] = x * a01 + y * a11 + a21; // x * b0 + y * d0 + y0;

  return this;
 }  

 setModelMatrix(position, scale, rotation, origin) {
    this.a[0] = rotation.x * scale.x; // a
    this.a[1] = rotation.y * scale.x; // b
    this.a[3] = -rotation.y * scale.y; // c
    this.a[4] =  rotation.x * scale.y; // d
    this.a[6] = position.x; // x
    this.a[7] = position.y; // y

    if (origin !== undefined) {
      //this.a[6] -= origin.x * this.a[0] + origin.y * this.a[3];
      //this.a[7] -= origin.y * this.a[1] + origin.y * this.a[4];
    }

    return this;
    /*
    a  =  transform._cosSin.x * transform.scale.x;
    b  = transform._cosSin.y * transform.scale.x;
    c  = -transform._cosSin.y * transform.scale.y;
    d  =  transform._cosSin.x * transform.scale.y;
    x =  transform.position.x;
    y =  transform.position.y;

    x -= transform.origin.x * a + transform.origin.y * c;
    y -= transform.origin.y * b + transform.origin.y * d;
    */

    
 }


 multiply(other) {

    // faster way
    let a00 = this.a[0]; // a - 0
    let a01 = this.a[1]; // b - 1
    let a10 = this.a[3]; // c - 3
    let a11 = this.a[4]; // d - 4
    let a20 = this.a[6]; // x - 6
    let a21 = this.a[7]; // y - 7

    this.a[0] = other.a[0] * a00 + other.a[1] * a10; // a1 * a0 + b1 * c0;
    this.a[1] = other.a[0] * a01 + other.a[1] * a11; // a1 * b0 + b1 * d0;

    this.a[3] = other.a[3] * a00 + other.a[4] * a10; // c1 * a0 + d1 * c0;
    this.a[4] = other.a[3] * a01 + other.a[4] * a11; // c1 * b0 + d1 * d0;

    this.a[6] = other.a[6] * a00 + other.a[7] * a10 + a20; // x1 * a0 + y1 * c0 + x0;
    this.a[7] = other.a[6] * a01 + other.a[7] * a11 + a21; // x1 * b0 + y1 * d0 + y0;

    return this;
 }

 concat(other) {

  let a = this.a[0]; // a - 0
  let b = this.a[1]; // b - 1
  let c = this.a[3]; // c - 3
  let d = this.a[4]; // d - 4
  let x = this.a[6]; // x - 6
  let y = this.a[7]; // y - 7

  this.a[0] = a * other.a[0] + b * other.a[3]; // a * pt.a + b * pt.c;
  this.a[1] = a * other.a[1] + b * other.a[4]; // a * pt.b + b * pt.d;

  this.a[3] = c * other.a[0] + d * other.a[3]; // c * pt.a + d * pt.c;
  this.a[4] = c * other.a[1] + d * other.a[4]; // c * pt.b + d * pt.d;

  this.a[6] = x * other.a[0] + y * other.a[3] + other.a[6]; // x * pt.a + y * pt.c + pt.x;
  this.a[7] = x * other.a[1] + y * other.a[4] + other.a[7]; // x * pt.b + y * pt.d + pt.y;

  return this;
 }

 transpose() {
  return this.setAll(
    mat.a[0], mat.a[3], mat.a[6],
    mat.a[1], mat.a[4], mat.a[7],
    mat.a[2], mat.a[5], mat.a[8],
  );
 }

 toString() {
  let str = "";
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
  let copy = Matrix.zero;
  return copy.setAll(
    mat.a[0], mat.a[3], mat.a[6],
    mat.a[1], mat.a[4], mat.a[7],
    mat.a[2], mat.a[5], mat.a[8],
  );

 }

 static multiplySlow(a, b) {
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