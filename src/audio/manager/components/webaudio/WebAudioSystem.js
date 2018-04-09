import CreateWebAudioContext from "./CreateWebAudioContext";

export default class WebAudioSystem {

    constructor(manager) {
        this.manager = manager;

        this.context = null;
        this.masterVolume = null;
        this.destination = null;
        this.locked = null;


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