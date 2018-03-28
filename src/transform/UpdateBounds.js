import ComputeDelimiterPoint from "./ComputeDelimiterPoint";


export default function UpdateBounds(bounds, x, y, width, height, cosSin, origin) {

    let coords = [];

    coords[0] = ComputeDelimiterPoint( x, y, cosSin, origin);
    coords[1] = ComputeDelimiterPoint( x + width,  y, cosSin, origin);
    coords[2] = ComputeDelimiterPoint( x , y + height, cosSin, origin);
    coords[3] = ComputeDelimiterPoint( x + width , y + height, cosSin, origin);
  
    bounds.min.x = Math.min(coords[0].x,coords[1].x,coords[2].x,coords[3].x);
    bounds.min.y = Math.min(coords[0].y,coords[1].y,coords[2].y,coords[3].y);
    bounds.max.x = Math.max(coords[0].x,coords[1].x,coords[2].x,coords[3].x);
    bounds.max.y = Math.max(coords[0].y,coords[1].y,coords[2].y,coords[3].y);

}