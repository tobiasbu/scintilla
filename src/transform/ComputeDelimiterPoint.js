

export default function ComputeDelimiterPoint(x, y, rotation, anchor) {

    let coord = {x:0, y:0};
    

    if (anchor === undefined) {
        coord.x = (x * rotation.x) - (y * rotation.y);
        coord.y = (x * rotation.y) - (y * rotation.x);
    } else {
        let xa = x - anchor.x;
        let ya = y - anchor.y;
        coord.x = anchor.x + (xa * rotation.x) - (ya * rotation.y);
        coord.y = anchor.y - (xa * rotation.y) - (ya * rotation.x);
    }

    //coord.x = anchor.x + ((x-anchor.x) * cos_and_sin.x) - ((y-anchor.y) * cos_and_sin.y);
    //coord.y = anchor.y - ((x-anchor.x) * cos_and_sin.y) - ((y-anchor.y) * cos_and_sin.x);

    return coord;
}