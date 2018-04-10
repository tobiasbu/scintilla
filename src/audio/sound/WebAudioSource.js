import AudioSource from "./AudioSource";
import CreateBufferSource from "./components/CreateBufferSource";
import RemoveBufferSource from "./components/RemoveBufferSource";
import StartBufferSource from "./components/StartBufferSource";


export default class WebAudioSource extends AudioSource {

    constructor(manager, resource, volume, loop) {

        super(manager, resource);


        this.buffer = null;
        this.duration = resource.duration;
        this.gainNode = this._system.context.createGain();
        this.gainNode.connect(this._system.destination);

        this.volume = volume || 1;
        this.loop = loop || false;


    }

    get volume() {
        return this.gainNode.gain.value;
    }

    set volume(value) {
        if (this.gainNode)
            this.gainNode.gain.setValueAtTime(value, 0);

        this._volume = value;
    }

    setVolume(value) {
        this._volume = value;
        return this;
    }

    play() {
        super.play();

        RemoveBufferSource(this);
        this.buffer = CreateBufferSource(this);
        StartBufferSource(this);
    }

    pause() {

    }

    stop() {
        super.stop();

        RemoveBufferSource(this);

        return this;
    }

    destroy() {
        
        RemoveBufferSource(this);

        this.buffer = null;
        this.gainNode.disconnect();
        this.gainNode = null;
        
        super.destroy();

        
    }

}