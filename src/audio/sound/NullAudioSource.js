import AudioSource from "./AudioSource";

export default class NullAudioSource extends AudioSource {

    get volume() {
        return 1;
    }

    set volume(value) {
        this._volume = value;
    }

    setVolume(value) {
        this._volume = value;
        return this;
    }

    play() {
        super.play();
    }

    pause() {
    }

    stop() {
        super.stop();
    }

    destroy() {
   
        super.destroy();        
    }

}