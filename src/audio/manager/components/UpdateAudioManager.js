import AudioSystemType from "./AudioSystemType";
import UpdateWebAudioSource from '../../sound/components/UpdateWebAudioSource';

export default function UpdateAudioManager() {
    
    if (this._noAudio)
        return;


    for (let i = 0; i < this._sounds.length; i++) {

        let source = this._sounds.at(i);

        if (this._system.type === AudioSystemType.WEBAUDIO) {
            UpdateWebAudioSource(source);
        }

        if (source._requireRemoval) {
            this._removalList.push(i);
        }
    }

    // check removal
    let removalSize = this._removalList.length;

    if (removalSize === 0)
        return;

    this._sounds.eraseIndexedList(this._removalList);
    this._removalList.length = 0;
}