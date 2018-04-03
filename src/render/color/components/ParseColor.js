import IntToColor from "./IntToColor";
import CSSColorToColor from "./CSSColorToColor";
import HexToColor from "./HexToColor";
import ObjectToColor from "./ObjectToColor";

export default function ParseColor(value) {

    let type = typeof value;
  
    if (type === 'number') {
  
      return IntToColor(value);
  
    } else if (type === 'string') {
  
      if (value.substr(0, 3).toLowerCase() === 'rgb') {
        return CSSColorToColor(value);
      } else {
        return HexToColor(value);
      }
  
    } else if (type === 'object') {
  
        return ObjectToColor(value);
    }
  
}