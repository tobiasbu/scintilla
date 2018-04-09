
export default function UpdateAudioManager() {
    
    if (this._noAudio)
        return;


    for (let i = 0; i < this._sounds.length; i++) {
        this._sounds[i].update();
    }

    // cehck removal

}