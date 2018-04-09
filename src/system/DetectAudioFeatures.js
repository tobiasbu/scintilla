export default function DetectAudioFeatures(browser) {

    let audioFeatures = {
        webAudio: false,
        audioData: false,
        format: {
            ogg: false,
            mp3: false,
            wav: false,
            webm: false,
            dolby: false,
            opus: false,
        }
    }

    audioFeatures.audioData = !!(window['Audio']);
    audioFeatures.webAudio = !!(window['AudioContext'] || window['webkitAudioContext']);

    // test if we can play audio in the current document

    let element = document.createElement('audio');
    let result = !!element.canPlayType;

    if (result) {

        try {
            if (element.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''))
                audioFeatures.format.ogg = true;

            if (element.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') || element.canPlayType('audio/opus;').replace(/^no$/, ''))
                audioFeatures.format.opus = true;

            if (element.canPlayType('audio/mpeg;').replace(/^no$/, ''))
                audioFeatures.format.mp3 = true;

            //  Mimetypes accepted:
            //  developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
            //  bit.ly/iphoneoscodecs
            if (element.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''))
                audioFeatures.format.wav = true;

            if (element.canPlayType('audio/x-m4a;') || element.canPlayType('audio/aac;').replace(/^no$/, ''))
                audioFeatures.format.m4a = true;

            if (element.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''))
                audioFeatures.format.webm = true;

            if (element.canPlayType('audio/mp4;codecs="ec-3"') !== '') {
                if (browser.manufacturer.edge) {
                    audioFeatures.format.dolby = true;
                } else if (browser.manufacturer.safari && browser.version >= 9) {
                    if ((/Mac OS X (\d+)_(\d+)/).test(navigator.userAgent)) {
                        var major = parseInt(RegExp.$1, 10);
                        var minor = parseInt(RegExp.$2, 10);

                        if ((major === 10 && minor >= 11) || major > 10) {
                            audioFeatures.format.dolby = true;
                        }
                    }
                }
            }
            
        } catch (exception) {

        }

    }


    return audioFeatures;
}