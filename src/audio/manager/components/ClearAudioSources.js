
export default function ClearAudioSources() {

    if (this._noAudio === true)
        return;

    for (let i = 0; i < this._sounds.length; i++) {

        let source = this._sounds.at(i);

        if (source.persistent === false || source.persistent === undefined || source._pendingRemoval === true) {
            source.stop();
            source.destroy();
            this._sounds.splice(i, 1);
        }
        
    }

    this._removalList.length = 0;

}