import SoundSource from "./SoundSource";
import CreateAudioBuffer from "./components/CreateAudioBuffer";
import RemoveAudioBuffer from "./components/RemoveAudioBuffer";
import StartAudioBuffer from "./components/StartAudioBuffer";

export default class WebAudioSource extends SoundSource {

    constructor(manager, resource) {

        super(manager, resource);

        this.buffer = null;
        this.duration = resource.duration;
        this.gainNode = manager.context.createGain();
        this.gainNode.connect(manager.context);


    }

    get volume() {
        return this.gainNode.gain.value;
    }

    set volume() {

    }

    play() {
        super.play();

        RemoveAudioBuffer(this);
        this.buffer = CreateAudioBuffer(this);
        StartAudioBuffer(this);
    }

    pause() {

    }

    stop() {
        super.stop();

        RemoveAudioBuffer(this);

        return this;
    }

    destroy() {
        
        RemoveAudioBuffer(this);

        this.buffer = null;
        this.gainNode.disconnect();
        this.gainNode = null;
        
        super.destroy();

        
    }

}