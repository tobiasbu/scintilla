import Color from "../Color";
import IntToColor from "./IntToColor";
import CSSToColor from "./CSSToColor";
import HexToColor from "./HexToColor";
import ObjectToColor from "./ObjectToColor";


export default function SetColor(source, value) {

    /*if ((source instanceof Color) === false) {
        source = new Color();
    }*/

    let type = typeof value;
  
    if (type === 'number') {
  
      return IntToColor(value, source);
  
    } else if (type === 'string') {
  
      if (value.substr(0, 3).toLowerCase() === 'rgb') {
        return CSSToColor(value, source);
      } else {
        return HexToColor(value, source);
      }
  
    } else if (type === 'object') {
  
        return ObjectToColor(value, source);
    } 
  
}