
import MathUtils from '../../math/mathutils'
import Matrix from '../../math/matrix'

/*

* | a | b | x |
* | c | d | y |
* | 0 | 0 | 1 |

* | 0 | 3 | 6 | * | a | d | x |
* | 1 | 4 | 7 | * | b | e | y |
* | 2 | 5 | 8 | * | c | f | 1 |

*/

function UpdateTransform(transform, parentMatrix) {

    if (parentMatrix === undefined) parentMatrix = null;

    if (!transform._isDirty)
        return;


    let a, b, c, d, x, y;
    let wt = transform.matrix;
    let pt = parentMatrix || Matrix.identity();

    transform.rotation = transform.angle * MathUtils.degToRad;

      //if (transform.rotation % MathUtils.TAU)
      {

        if (transform.rotation !== transform._oldRotation)
        {
            transform._oldRotation = transform.rotation;
            transform._cosSin.y = Math.sin(transform.rotation);
            transform._cosSin.x = Math.cos(transform.rotation);
        }

        a  =  transform._cosSin.x * transform.scale.x;
        b  = transform._cosSin.y * transform.scale.x;
        c  = -transform._cosSin.y * transform.scale.y;
        d  =  transform._cosSin.x * transform.scale.y;
        x =  transform.position.x;
        y =  transform.position.y;

        x -= transform.origin.x * a + transform.origin.y * c;
        y -= transform.origin.y * b + transform.origin.y * d;

        //transform.identity();

        wt.translate(x, y);
        //.rotate()
        //.scale()
        

        console.log(transform.matrix.toString());

        wt = wt.multiply(pt);
        // concat the parent matrix with the objects transform.
        /*wt.a[0]  = a  * pt.a[0] + b  * pt.a[1]; // a = a * a + b * c
        wt.a[3]  = a  * pt.a[3] + b  * pt.a[4]; // b = a * b + b * d
        wt.a[1]  = c  * pt.a[0] + d  * pt.a[1]; // c = c * a + d * c
        wt.a[4]  = c  * pt.b + d  * pt.d; // d
        wt.a[6] = x * pt.a + y * pt.c + pt.x; // x
        wt.a[7] = x * pt.b + y * pt.d + pt.y; // y*/


      //} else {

        /*a  = transform.scale.x;
        d  = transform.scale.y;
        x =  transform.position.x;
        y =  transform.position.y;
        x -= transform.origin.x * a;
        y -= transform.origin.y * d;

        wt.a  = a  * pt.a;
        wt.b  = a  * pt.b;
        wt.c  = d  * pt.c;
        wt.d  = d  * pt.d;
        wt.x = x * pt.a + y * pt.c + pt.x;
        wt.y = x * pt.b + y * pt.d + pt.y;*/


      }

      transform.worldPosition.set(wt.x ,wt.y);
      transform.worldScale.set(Math.sqrt(wt.a * wt.a + wt.b * wt.b), Math.sqrt(wt.c * wt.c + wt.d * wt.d));
      transform.worldRotation = Math.atan2(-wt.c, wt.d);
    
}

export default UpdateTransform;