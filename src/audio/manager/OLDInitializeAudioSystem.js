
export default function OLDInitializeAudioSystem() {
    
    if (!!window['AudioContext']) {
        try {
            this.context = new window['AudioContext']();
        } catch (error) {
            this.context = null;
            this.webAudio = false;

        }
    } else if (!!window['webkitAudioContext']) {
        try {
            this.context = new window['webkitAudioContext']();
        } catch (error) {
            this.context = null;
            this.webAudio = false;
        }
    }

    if (this.context === null) {

        this.noAudio = true;

    } else {

        this.webAudio = true;

        if (this.context.createGain === undefined) {
            this.masterVolume = this.context.createGainNode();
        } else {
            this.masterVolume = this.context.createGain();
        }

        this.masterVolume.gain.value = 1;
        this.masterVolume.connect(this.context.destination);

    }


}