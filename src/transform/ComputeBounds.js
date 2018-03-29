
export default function ComputeBounds(bounds, transform, width, height, origin) {
    
  if (origin === undefined) origin = {x:0,y:0}

    let top = transform.matrix.transformPoint(-origin.x, -origin.y);
    let left = transform.matrix.transformPoint(width - origin.x, -origin.y);
    let bottom = transform.matrix.transformPoint(-origin.x, height - origin.y);
    let right = transform.matrix.transformPoint(width - origin.x, height - origin.y);
  
    bounds.min.x = Math.min(top.x,left.x,bottom.x,right.x);
    bounds.min.y = Math.min(top.y,left.y,bottom.y,right.y);
    bounds.max.x = Math.max(top.x,left.x,bottom.x,right.x);
    bounds.max.y = Math.max(top.y,left.y,bottom.y,right.y);
  
  }