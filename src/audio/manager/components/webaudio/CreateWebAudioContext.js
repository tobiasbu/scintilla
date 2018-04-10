
export default function CreateWebAudioContext(audioSystem) {

    
    audioSystem.context = new AudioContext();

    if (audioSystem.context.createGain === undefined) {
        audioSystem.masterVolume = audioSystem.context.createGainNode();
    } else {
        audioSystem.masterVolume = audioSystem.context.createGain();
    }

    audioSystem.masterVolume.gain.value = 1;
    audioSystem.masterVolume.connect(audioSystem.context.destination);

    audioSystem.destination = audioSystem.masterVolume;

    audioSystem.locked = audioSystem.context.state === 'suspended' && 'ontouchstart' in window;
}