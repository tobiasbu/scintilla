
/**
* Simple class for rectangle. Usage for collision.
* @class Rect
* @constructor
*/

export default class Rect {
  
  constructor(x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
  }

  get center() {
    var vec = {};
    vec.x = this.x + this.width / 2;
    vec.y = this.y + this.height / 2;
    return vec;
  }

  intersects(rect) {
      return Rect.intersects(this, rect);
  }

  contains(x,y) {
    return Rect.contains(this,x,y);
  }

  set(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  static intersects(rect1, rect2) {

    if (rect1.width <= 0 || rect1.height <= 0 || rect2.width <= 0 || rect2.height <= 0)
      return false;
  
    return    !(rect1.x > rect2.x + rect2.width ||
               rect1.x + rect1.width < rect2.x ||
               rect1.y > rect2.y + rect2.height ||
               rect1.y + rect1.height < rect2.y);
  }

  static contains(rect, x, y) {
  
    if (rect.width <= 0 && rect.height <= 0 )
      return false;
  
    return (x > rect.x &&
            x < rect.x + rect.width &&
            y >= rect.y &&
            y < rect.y + rect.height);
  
  }
  
  static intersectionArea(rect1,rect2) {
  
      var out = new scintilla.Rect();
  
      if (scintilla.Rect.intersects(rect1,rect2)) {
  
         out.y = Math.max(a.y, b.y);
         out.x = Math.max(a.x, b.x);
         out.width = Math.min(a.x + a.width, b.x + b.width) - out.x;
         out.height = Math.min(a.y + a.height, b.y + b.height) - out.y;
  
      }
  
      return out;
  
  }
  

}



