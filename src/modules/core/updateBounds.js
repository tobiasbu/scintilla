import ComputeDelimiterPoint from "./computeDelimiterPoint";


export default function UpdateBounds(bounds, rect, rotation) {

    coords[0] = ComputeDelimiterPoint( rect.x, rect.y, rotation);
    coords[1] = ComputeDelimiterPoint( rect.x + rect.width,  rect.y, rotation);
    coords[2] = ComputeDelimiterPoint( rect.x , rect.y + rect.height, rotation);
    coords[3] = ComputeDelimiterPoint( rect.x + rect.width , rect.y + rect.height, rotation);
  
    bounds.min.x = Math.min(coords[0].x,coords[1].x,coords[2].x,coords[3].x);
    bounds.min.y = Math.min(coords[0].y,coords[1].y,coords[2].y,coords[3].y);
    bounds.max.x = Math.max(coords[0].x,coords[1].x,coords[2].x,coords[3].x);
    bounds.max.y = Math.max(coords[0].y,coords[1].y,coords[2].y,coords[3].y);

}