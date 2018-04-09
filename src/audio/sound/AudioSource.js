
export default class AudioSource {

    constructor(manager, resource) {

        this.manager = manager;
        this.resource = resource;
        //this.tag = tag;


        this.volume = 1;
        this.duration = 0;
        this.startTime = 0;
        this.currentTime = 0;
        this.position = 0;
        this.speed = 0; // rate

        this.isPlaying = false;
        this.isPaused = false;
        this.mute = false;
        this.loop = false;

        this._ended = false;

       
        this._requireRemoval = false;
    }

    play() {

        if (this.isPlaying)
            return;

        if (this.isPaused)
            this.isPaused = false;
        
        this.isPlaying = true;
       
        return this;
    }

    pause() {
        if (this.isPaused || !this.isPlaying) {
            return this;
        }

        this.isPlaying = false;
        this.isPaused = true;

        return this;

    }

    stop() {
        if (!this.isPaused && !this.isPlaying) {
            return this;
        }

        this.isPlaying = false;
        this.isPaused = false;

        return this;
    }

    destroy() {
        this._requireRemoval = true;
        this.isPlaying = false;
        this.isPaused = false;
        this.tag = undefined;
    }


}