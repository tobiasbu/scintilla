
export default function UpdateWebAudioSource(source) {

    if (source._ended) {

        if (!source.loop) {
            source.stop();

        } else {
            source.playTime = source.startTime = 0;
        }

        if (source.once) {
            source.destroy();
            source._pendingRemoval = true;
        }
    }

}