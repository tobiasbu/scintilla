import CreateWebAudioContext from "./CreateWebAudioContext";
import AudioSystemType from "../AudioSystemType";


export default class WebAudioSystem {

    constructor(manager) {
        this.manager = manager;

        this.context = null;
        this.masterVolume = null;
        this.destination = null;
        this.locked = null;
        this.type = AudioSystemType.WEBAUDIO;


        CreateWebAudioContext(this);
    }

    destroy() {
        this.destination = null;
        this.masterVolume.disconnect();
        this.masterVolume = null;
        //this.context.suspend();
        this.context.close();
        this.context = null;
    }

}