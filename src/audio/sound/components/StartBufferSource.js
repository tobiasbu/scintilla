
export default function StartBufferSource(webAudioSource, position) {

    if (position === undefined) position = 0;

    let start = webAudioSource._system.context.currentTime;
    let duration = webAudioSource.duration;
    let delay = 0;
    webAudioSource.playTime = start - position;
    webAudioSource.startTime = start;

    let buffer = webAudioSource.buffer;

    if (buffer.loop !== undefined) { 
        buffer.loop = webAudioSource.loop;
    }
       

    buffer.start(Math.max(0, start), Math.max(0, delay), Math.max(0, duration));
    webAudioSource.gainNode.gain.value = webAudioSource._volume;
}