
export default function UpdateAudioManager() {
    
    if (this._noAudio)
        return;


    for (let i = 0; i < this._sounds.length; i++) {

        let sound = this._sounds.at(i);

        sound.update();

        if (sound._requireRemoval) {
            this._removalList.push(i);
        }
    }

    // check removal
    if (this._removalList.length > 0) {

        this._sounds.eraseIndexesList(_removalList);
        _removalList.length = 0;
    }

}