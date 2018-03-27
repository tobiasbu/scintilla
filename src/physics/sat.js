
import Vector from '../math/Vector' 

export default class SAT {

  constructor()
  {

    this.VECTORS = [];
    for (var v = 0; v < 10; v++) { 
      VECTORS.push(new Vector()); 
    }

    this.ARRAYS = [];
    for (var a = 0; a < 5; a++) { 
      ARRAYS.push([]); 
    }
  }

  flattenPointsOn(points, normal, result) {
          var min = Number.MAX_VALUE;
          var max = -Number.MAX_VALUE;
          var len = points.length;
          for (var i = 0; i < len; i++) {
              // The magnitude of the projection of the point onto the normal
              var dot = points[i].dot(normal);
              if (dot < min) { min = dot; }
              if (dot > max) { max = dot; }
          }
          result[0] = min;
          result[1] = max;
  };

  isSeparatingAxis(posA, posB, pointsA, pointsB, axis, response) {

    var rangeA = ARRAYS.pop();
    var rangeB = ARRAYS.pop();

    // magnitude between the two polygons
    var offsetV = VECTORS.pop().copy(posB).sub(posA);
    var projectedOffset = offsetV.dot(axis);

    // Project the polygons onto the axis.
    flattenPointsOn(pointsA, axis, rangeA);
    flattenPointsOn(pointsB, axis, rangeB);

    // Move B's range to its position relative to A.
    rangeB[0] += projectedOffset;
    rangeB[1] += projectedOffset;

    // Check if there is a gap. If there is, this is a separating axis and we can stop
    if (rangeA[0] > rangeB[1] || rangeB[0] > rangeA[1]) {
        VECTORS.push(offsetV);
        ARRAYS.push(rangeA);
        ARRAYS.push(rangeB);
        return true;
    }

    if (response) {
        var overlap = 0;
        // A starts further left than B
        if (rangeA[0] < rangeB[0]) {

          response.aInB = false;

          // A ends before B does. We have to pull A out of B
          if (rangeA[1] < rangeB[1]) {

            overlap = rangeA[1] - rangeB[0];
            response.bInA = false;

          // B is fully inside A.  Pick the shortest way out.
          } else {

            var option1 = rangeA[1] - rangeB[0];
            var option2 = rangeB[1] - rangeA[0];
            overlap = option1 < option2 ? option1 : -option2;

          }
        // B starts further left than A
        } else {

          response.bInA = false;

          // B ends before A ends. We have to push A out of B
          if (rangeA[1] > rangeB[1]) {

            overlap = rangeA[0] - rangeB[1];
            response.aInB = false;

          // A is fully inside B.  Pick the shortest way out.
          } else {

            var option1 = rangeA[1] - rangeB[0];
            var option2 = rangeB[1] - rangeA[0];
            overlap = option1 < option2 ? option1 : -option2;

          }
        }
        // If this is the smallest amount of overlap we've seen so far, set it as the minimum overlap.
        var absOverlap = Math.abs(overlap);

        if (absOverlap < response.overlap) {

          response.overlap = absOverlap;
          response.overlapN.copy(axis);

          if (overlap < 0)
            response.overlapN.reverse();
        }
      }

      VECTORS.push(offsetV);
      ARRAYS.push(rangeA);
      ARRAYS.push(rangeB);



      return false;

  };

  testPolygonPolygon(a,b,response) {

    // collider a

    var pointsA = a.shape.getPoints();
    var normalsA =  a.shape.getNormals();
    var normalsALen = normalsA.length;

    // collider b

    var pointsB = b.shape.getPoints();
    var normalsB =  b.shape.getNormals();
    var normalsBLen = normalsB.length;


    // If any of the edge normals of A is a separating axis, no intersection.
    while (normalsALen--) {
        if (isSeparatingAxis(a.position, b.position, pointsA, pointsB, normalsA[normalsALen],response)) {
            return false;
        }
    }



    // If any of the edge normals of B is a separating axis, no intersection.
    while (normalsBLen--) {
        if (isSeparatingAxis(a.position, b.position, pointsA, pointsB, normalsB[normalsBLen], response)) {
        return false;
      }
    }



    // Since none of the edge normals of A or B are a separating axis, there is an intersection
    // and we've already calculated the smallest overlap (in isSeparatingAxis).  Calculate the
    // final overlap vector.
      if (response) {
          response.a = a;
          response.b = b;
          response.overlapV.copy(response.overlapN).scale(response.overlap);
      }
    return true;

  };

}


