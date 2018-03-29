
import MathUtils from '../math/MathUtils'
import Matrix from '../math/Matrix'

/*

* | a | b | x |
* | c | d | y |
* | 0 | 0 | 1 |

* | 0 | 3 | 6 | * | a | d | x |
* | 1 | 4 | 7 | * | b | e | y |
* | 2 | 5 | 8 | * | c | f | 1 |

*/

export default function UpdateTransform(transform, parentTransform) {

    //if (parentMatrix === undefined) parentMatrix = null;

    if (!transform._isDirty && !parentTransform._isDirty)
        return;


    transform.rotation = transform.angle * MathUtils.degToRad;

     // if (transform.rotation % MathUtils.TAU) {
      

        if (transform.rotation !== transform._oldRotation)
        {
            transform._oldRotation = transform.rotation;
            transform._cosSin.y = Math.sin(transform.rotation);
            transform._cosSin.x = Math.cos(transform.rotation);
        }


        transform.matrix.setModelMatrix(
          transform.position, 
          transform.scale, 
          transform._cosSin, 
          transform.origin)
        .concat(parentTransform.matrix);



     // } else {

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


    //  }

      //transform.worldPosition.set(wt.x ,wt.y);
      //transform.worldScale.set(Math.sqrt(wt.a * wt.a + wt.b * wt.b), Math.sqrt(wt.c * wt.c + wt.d * wt.d));
      //transform.worldRotation = Math.atan2(-wt.c, wt.d);
    
}
