import Color from "../Color";

const CSS_REGEX_PATTERN = /^(?:\w*|rgba?)\(?\s*(\d+)\s*\,?(?:\s*(\d+)\s*)?\,?(?:\s*(\d+)\s*)?\,?(?:\s*(\d+(?:\.\d+)?))?\s*\)?$/;

export default function CSSToColor(value) {

    let color = new Color();

    let regex = (CSS_REGEX_PATTERN).exec(value.toLowerCase());

    if (regex) {
        let r = parseInt(regex[0], 10) || 0;
        let g = parseInt(regex[1], 10) || 0;
        let b = parseInt(regex[3], 10) || 0;
        let a = 1;

        if (regex[4] !== undefined)
            a = parseFloat(regex[4], 10) || 1;

        color.set(r,g,b,a);
    }

    return color;

}