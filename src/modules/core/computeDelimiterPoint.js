

export default function ComputeDelimiterPoint(x, y, rotation, anchor) {

    let coord = {x:0, y:0};

    if (anchor === undefined) {
        coord.x = (x * rotation.x) - (y * rotation.x);
        coord.y = (x * rotation.y) - (y * rotation.y);
    } else {
        coord.x = anchor.x + ((x-anchor.x) * rotation.x) - ((y-anchor.y) * rotation.x);
        coord.y = anchor.y - ((x-anchor.x) * rotation.y) - ((y-anchor.y) * rotation.y);
    }

    return coord;
}