
export default function StartAudioBuffer(webAudioSource, position) {

    if (position === undefined) position = 0;

    let start = webAudioSource.manager.context.currentTime;
    let duration = webAudioSource.duration;
    let delay = 0;
    webAudioSource.playTime = start - position;
    webAudioSource.startTime = start;

    let buffer = webAudioSource.buffer;

    if (this.loop) 
        buffer.loop = true;
       

    buffer.start(Math.max(0, start), Math.max(0, delay), Math.max(0, duration));
    
}