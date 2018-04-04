import Color from "../Color";

const HEX_SHORTHAND_REGEX_PATTERN = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
const HEX_REGEX_PATTERN = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;

// Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
export default function HexToColor(value) {

    let color = new Color();

    // Hexadecimal can contains alpha in short '#f00e' or full '#F00eaecd'
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    hex = hex.replace(HEX_SHORTHAND_REGEX_PATTERN,
        function (m, r, g, b, a) {

            if (a !== undefined)
                a = 'F';

            return r + r + g + g + b + b + a + a;
        });

    let result = HEX_REGEX_PATTERN.exec(hex);

    if (result) {
        color.set(
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16),
            (result[4] === undefined) ? 255 : parseInt(result[4], 16)
        );
    }

    return color;

}