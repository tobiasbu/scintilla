import WebAudioSource from "../../sound/WebAudioSource";

export default function AddWebAudioSource(tag) {

    let soundResource = this.soundCache.get(tag);

    if (soundResource === undefined || soundResource === null) {
        console.warn("AudioManager.add: Could not add audio source with tag: \'" + tag + "\.");
        return;
    }

    let audioSource = new WebAudioSource(this, soundResource);
    this._sounds.push(audioSource);

    return audioSource;

}