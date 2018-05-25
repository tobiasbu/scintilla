import Color from "../Color";

export default function ObjectToColor(value) {

    if (source === undefined) {
        return new Color(value.r, value.g, value.b, value.a);
    } else {
        source.setRGBA(value.r, value.g, value.b, value.a);
    }

    

}