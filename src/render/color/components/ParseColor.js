import IntToColor from "./IntToColor";
import CSSToColor from "./CSSToColor";
import HexToColor from "./HexToColor";
import ObjectToColor from "./ObjectToColor";

export default function ParseColor(value) {

    let type = typeof value;
  
    if (type === 'number') {
  
      return IntToColor(value);
  
    } else if (type === 'string') {
  
      if (value.substr(0, 3).toLowerCase() === 'rgb') {
        return CSSToColor(value);
      } else {
        return HexToColor(value);
      }
  
    } else if (type === 'object') {
  
        return ObjectToColor(value);
    }
  
}