import StartBufferSource from "./StartBufferSource";
import CreateBufferSource from "./CreateBufferSource";

export default function UpdateWebAudioSource(source) {

    if (source._ended === true) {

        source._ended = false;

        

        if (!source.loop) {
            source.stop();

        } else {
            source.playTime = source.startTime = 0;

           

            //let buffer = webAudioSource.buffer;

            source.buffer = CreateBufferSource(source);
            StartBufferSource(source,0);
                
            

        }

        if (source.once) {
            source.destroy();
            source._pendingRemoval = true;
        }
    }

}