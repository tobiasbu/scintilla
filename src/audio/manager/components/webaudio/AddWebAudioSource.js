import WebAudioSource from "../../../sound/WebAudioSource";

export default function AddWebAudioSource(tag, volume, loop, name) {

    let soundResource = this._soundCache.get(tag);

    if (soundResource === undefined || soundResource === null) {
        console.warn("AudioManager.add: Could not add audio source with tag: \'" + tag + "\.");
        return;
    }

    let audioSource = new WebAudioSource(this, soundResource, volume, loop, name);
    this._sounds.push(audioSource);

    return audioSource;

}