
export default function CreateBufferSource(webAudioSource) {

    let self = webAudioSource;
    let bufferSource = webAudioSource._system.context.createBufferSource();

    bufferSource.buffer = webAudioSource.resource;

    bufferSource.connect(webAudioSource.gainNode);

    bufferSource.onended = function(event) {
        if (event.target === self.source)
        {
                // sound ended
                self.hasEnded = true;     
        }
    };

    return bufferSource;
}