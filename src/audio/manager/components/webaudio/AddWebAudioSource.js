import WebAudioSource from "../../../sound/WebAudioSource";
import NullAudioSource from "../../../sound/NullAudioSource";

export default function AddWebAudioSource(tag, volume, loop, name) {

    let soundResource = this._soundCache.get(tag);
    let audioSource;

    if (soundResource === undefined || soundResource === null) {
        console.warn("AudioManager.add: Could not add audio source with tag: \'" + tag + "\.");
        audioSource = new NullAudioSource(this,null,tag);
    } else {

        audioSource = new WebAudioSource(this, soundResource, volume, loop, name);
        
    }

    this._sounds.push(audioSource);

    return audioSource;


}