
import MathUtils from '../../math/MathUtils'
import ParseColor from './components/ParseColor';
import Ease from '../../math/easing/Ease';
import EasingType from '../../math/easing/EasingType';


function ColorNormUpdate(color) {
    color._css = 'rgba(' + 
    MathUtils.floor(color.r * 255) + ',' + 
    MathUtils.floor(color.g * 255) + ',' +
    MathUtils.floor(color.b * 255) + ',' +
    color.a + ')';
}

function ColorUpdate(color) {
    color._css = 'rgba(' + 
    color.r + ',' + 
    color.g + ',' +
    color.b + ',' +
    color.a + ')';
}

class Color {

    constructor(r, g, b, a) {
        this.r = r || 0;
        this.g = g || r || 0;
        this.b = b || r || 0;
        this.a = a || 1;
        this._css = null;

        ColorUpdate(this);
    }

    get rgba() {return this._css;}
    set alpha(value) {
        this.a = value;
        ColorUpdate(this);
    }

    set(r, g, b, a) {

        if (r === undefined)
            return this;

        this.r = r;
        this.b = b || r;
        this.g = g || r;

        if (a !== undefined)
            this.a = a;

        ColorUpdate(this);

        return this;
    }

    setRGBA(r, g, b, a) {
        if (r === undefined)
            return;

        this.r = Math.round(r / 255.0);
        this.g = Math.round(g / 255.0);
        this.b = Math.round(b / 255.0);

        if (a !== undefined)
            this.a = Math.round(a / 255.0);

        ColorUpdate(this);

        return this;
    }

    setColor(color) {
        this.r = color.r;
        this.g = color.g;
        this.b = color.b;
        this.a = color.a;
        ColorUpdate(this);
        return this;
    }

    parse(value) {
        let parsedValue = ParseColor(value);
        this.r = parsedValue.r;
        this.g = parsedValue.g;
        this.b = parsedValue.b;
        this.a = parsedValue.a;
        ColorUpdate(this);
        return this;
    }

    lerp(toColor, t) {

        this.r = MathUtils.lerp(this.r, toColor.r);
        this.g = MathUtils.lerp(this.g, toColor.g);
        this.b = MathUtils.lerp(this.b, toColor.b);
        this.a = MathUtils.lerp(this.a, toColor.a);
        ColorUpdate(this);
        return this;

    }

    ease(toColor, t, easingType, easingMode, easingArg) {
         if (easingType === undefined) easingType = EasingType.LINEAR;
         if (easingMode === undefined) easingMode = 0;
         if (easingArg === undefined) easingArg = 1;
 
        let callback = Ease.in.by;

         switch (easingMode) {
             case 1: {
                callback = Ease.out.by;
                break;
             }
             case 2: {
                callback = Ease.inout.by;
                break;
             }
         }

         this.r = callback(easingType, this.r, to.r, t, easingArg);
         this.g = callback(easingType, this.g, to.g, t, easingArg);
         this.b = callback(easingType, this.b, to.b, t, easingArg);
         this.a = callback(easingType, this.a, to.a, t, easingArg);

         ColorUpdate(this);
         return this;
    }

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





}

Color.red = new Color(255, 0, 0);
Color.green = new Color(0, 255, 0);
Color.blue = new Color(0, 0, 255);
Color.cyan = new Color(0, 255, 255);
Color.magenta = new Color(255, 0, 255);
Color.yellow = new Color(255, 255, 0);
Color.black = new Color(0);
Color.white = new Color(255);
Color.gray = new Color(255/2.0);
Color.transparent = new Color(0, 0, 0, 0);

export default Color;