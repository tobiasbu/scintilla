import Color from "../Color";

export default function IntToColor(value) {

    let color = new Color();
    let r, g, b, a;

    if (value >= 16777216) // 256 ^ 3
        a = color >>> 24;
    else
        a = 1;


    r = color >> 16 & 0xFF;
    g = color >> 8 & 0xFF;
    b = color & 0xFF;

    color.set(r, g, b, a);

    return color;

}