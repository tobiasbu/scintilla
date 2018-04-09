
export default function CreateAudioBuffer(webAudioSource) {

    let self = webAudioSource;
    let bufferSource = this.manager.context.createBufferSource();

    bufferSource.buffer = webAudioSource.resource;

    //bufferSource.connect();

    bufferSource.onended = function(event) {
        if (ev.target === self.source)
            {
                // sound ended
                self.hasEnded = true;
                
        }
    };

    return bufferSource;
}