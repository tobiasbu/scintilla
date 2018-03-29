

export default function ComputeDelimiterPoint(x, y, rotation, anchor) {

    let coord = {x:0, y:0};


    if (anchor === undefined) {
        coord.x = (x * rotation.x) - (y * rotation.y);
        coord.y = (x * rotation.y) - (y * rotation.x);
    } else {
      
        
        let xa = x - anchor.x;
        let ya = y - anchor.y;
    // cx = anchor.x + ((x-anchor.x) * Math.cos(rotation)) - ((y-anchor.y) * Math.sin(rotation));
        coord.x = anchor.x + (xa * rotation.x) - (ya * rotation.y);
    // cy = anchor.y - ((x-anchor.x) * Math.sin(rotation)) - ((y-anchor.y) * Math.cos(rotation));
        coord.y = anchor.y - (xa * rotation.y) - (ya * rotation.x);
    }

    return coord;
}