
export default class Color {
    
    constructor(r,g,b,a) {
        this.r = r || 0;
        this.g = g || r || 0;
        this.b = b || r || 0;
        this.a = a || 1;
    }

    set(r,g,b,a) {
        
    }

    toColor32() {

    }

    toCSS() {

    }

    toInt() {

    }

    toHex() {

    }

    static red = new Color(1,0,0);
    static green = new Color(0,1,0);
    static blue = new Color(0,0,1);
    static cyan = new Color(0,1,1);
    static magenta = new Color(1,0,1);
    static yellow = new Color(1,1,0);
    static black = new Color(0);
    static white = new Color(1);
    static gray = new Color(0.5);
    static transparent = new Color(0,0,0,0);
   
 

}