
import MathUtils from '../../math/MathUtils'
import ParseColor from './components/ParseColor';
import Ease from '../../math/easing/Ease';
import EasingType from '../../math/easing/EasingType';
import MakeImmutable from '../../utils/object/MakeImmutable';


function ColorNormUpdate(color) {
    color._css = 'rgba(' + 
    MathUtils.floor(color.r * 255) + ',' + 
    MathUtils.floor(color.g * 255) + ',' +
    MathUtils.floor(color.b * 255) + ',' +
    color.a + ')';
}

function ColorUpdate(color) {
    color._css = 'rgba(' + 
    color._r + ',' + 
    color._g + ',' +
    color._b + ',' +
    color._a + ')';
}

class Color {

    constructor(r, g, b, a) {
        this._r = r || 0;

        this._g = g || 0;
        this._b = b || 0;
        this._a = a || 1;
        this._css = null;

        ColorUpdate(this);
    }


    get rgba() {return this._css;}
    get r() {return this._r;}
    get g() {return this._g;}
    get b() {return this._b;}
    get a() {return this._a;}

        
    set a(value) {
        this._a = value;
        ColorUpdate(this);
    }

    set(r, g, b, a) {

        this._r = r || 0;    
        this._g = g || 0;
        this._b = b || 0;

        if (a !== undefined)
            this._a = a;

        ColorUpdate(this);

        return this;
    }

    setRGBA(r, g, b, a) {
        if (r === undefined)
            return;

        this._r = Math.round(r / 255.0);
        this._g = Math.round(g / 255.0);
        this._b = Math.round(b / 255.0);

        if (a !== undefined)
            this._a = Math.round(a / 255.0);

        ColorUpdate(this);

        return this;
    }

    setColor(color, a) {
        this._r = color.r;
        this._g = color.g;
        this._b = color.b;
        if (a !== undefined)
            this._a = a;
        else
            this._a = color.a;
        ColorUpdate(this);
        return this;
    }

    parse(value) {
        let parsedValue = ParseColor(value);
        this._r = parsedValue.r;
        this._g = parsedValue.g;
        this._b = parsedValue.b;
        this._a = parsedValue.a;
        ColorUpdate(this);
        return this;
    }

    lerp(toColor, t) {

        this._r = MathUtils.lerp(this._r, toColor.r);
        this._g = MathUtils.lerp(this._g, toColor.g);
        this._b = MathUtils.lerp(this._b, toColor.b);
        this._a = MathUtils.lerp(this._a, toColor.a);
        ColorUpdate(this);
        return this;

    }

    /*ease(to, t, easingType, easingMode, easingArg) {
         if (easingType === undefined) easingType = EasingType.LINEAR;
         if (easingMode === undefined) easingMode = 0;
         if (easingArg === undefined) easingArg = 1;
 
        let easer = Ease.in;

         switch (easingMode) {
             case 1: {
                easer = Ease.out;
                break;
             }
             case 2: {
                easer = Ease.inout;
                break;
             }
         }

         this._r = easer.by(easingType, this._r, to.r, t, easingArg);
         this._g = easer.by(easingType, this._g, to.g, t, easingArg);
         this._b = easer.by(easingType, this._b, to.b, t, easingArg);
         this._a = easer.by(easingType, this._a, to.a, t, easingArg);

         ColorUpdate(this);
         return this;
    }*/

    to32() {
        /// TODO
    }

    toCSS() {
        /// TODO
    }

    toInt() {
        /// TODO
    }

    toHex() {
        /// TODO
    }

    // static functions

    static ease(from, to, t, easingType, easingMode, easingArg, destinationColor) {

        if (easingType === undefined) easingType = EasingType.LINEAR;
        if (easingMode === undefined) easingMode = 0;
        if (easingArg === undefined) easingArg = 3;


       let easer = Ease.in;

        switch (easingMode) {
            case 1: {
               easer = Ease.out;
               break;
            }
            case 2: {
               easer = Ease.inout;
               break;
            }
        }

        if (destinationColor === undefined)
            destinationColor = new Color();

            destinationColor.set(
            easer.by(easingType, from.r, to.r, t, easingArg),
            easer.by(easingType, from.g, to.g, t, easingArg),
            easer.by(easingType, from.b, to.b, t, easingArg),
            easer.by(easingType, from.a, to.a, t, easingArg));

        return destinationColor;
    }

    static get red() {return new Color(255, 0, 0);}
    static get green() {return new Color(0, 255, 0);}
    static get blue() {return new Color(0, 0, 255);}
    static get cyan() {return new Color(0, 255, 255);}
    static get magenta() {return new Color(255, 0, 255);}
    static get yellow() {return new Color(255, 255, 0);}
    static get black() {return new Color(0);}
    static get white() {return new Color(255);}
    static get gray() {return new Color(255/2.0);}
    static get transparent() {return new Color(0, 0, 0, 0);}

    

}

export default Color;

/*MakeImmutable([
    Color.red,
    Color.green,
    Color.blue,
    Color.cyan,
    Color.magenta,
    Color.yellow,
    Color.black,
    Color.white,
    Color.gray,
    Color.transparent], false);*/

/*
MakeImmutable([
Color.red = new Color(255, 0, 0),
Color.green = new Color(0, 255, 0),
Color.blue = new Color(0, 0, 255),
Color.cyan = new Color(0, 255, 255),
Color.magenta = new Color(255, 0, 255),
Color.yellow = new Color(255, 255, 0),
Color.black = new Color(0),
Color.white = new Color(255),
Color.gray = new Color(255/2.0),
Color.transparent = new Color(0, 0, 0, 0),], true);*/

