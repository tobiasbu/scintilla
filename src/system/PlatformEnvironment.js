import DetectOS from "./DetectOS";
import DetectBrowser from "./DetectBrowser";
import DeepFreeze from "../utils/object/DeepFreeze";

class PlatformEnvironment {

    constructor() {

        this._userAgent = navigator.userAgent;
        this._osInfo = DetectOS(this._userAgent);
        this._browser = DetectBrowser(this._userAgent);

    }

    get info() {
        return this._userAgent;
    }

    get browser() {
        return this._browser.name;
    }

    get OS() {
        return this._osInfo.name;
    }

    supportSVG() {
        return (typeof SVGRect !== undefined && document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1')); 
    }

}

var Platform = new PlatformEnvironment();

DeepFreeze(Platform);

export default Platform;