import DetectOS from "./DetectOS";
import DetectBrowser from "./DetectBrowser";
import FeatureDetection from "./FeatureDetection";
import DetectAudioFeatures from "./DetectAudioFeatures";
import DeepFreeze from "../utils/object/DeepFreeze";
import DetectFullscreen from "./DetectFullscreen";


class PlatformEnvironment {

    constructor() {

        this._userAgent = navigator.userAgent;
        this._osInfo = DetectOS(this._userAgent);
        this._browser = DetectBrowser(this._userAgent);
        this._features = FeatureDetection(this._osInfo);
        this._audio = DetectAudioFeatures(this._browser);
        this._fullscreen = DetectFullscreen();

    }

    get info() {
        return this._userAgent;
    }

    get platformName() {
        return this._osInfo.name;
    }

    get mobile() {
        return this._osInfo.mobile;
    }

    get desktop() {
        return this._osInfo.desktop;
    }

    get os() {
        return this._osInfo.os;
    }

    get environment() {
        return this._osInfo.environment;
    }

    get browserName() {
        return this._browser.name;
    }

    get browserVersion() {
        return this._browser.version;
    }

    get features() {
        return this._features;
    }

    get fullscreenInfo() {
        return this._fullscreen;
    }

    get supportFullscreen() {
        return this._fullscreen.available;
    }

    get supportAudio() {
        return this._audio.audioData;
    }

    get supportWebAudio() {
        return this._audio.webAudio;
    }

    get audioFormats() {
        return this._audio.format;
    }



}

let Environment = new PlatformEnvironment();

DeepFreeze(Environment);

export default Environment;
