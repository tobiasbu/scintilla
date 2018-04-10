import DataList from "../../structures/List";

export default class AudioManager {

    constructor(game) {

        this.game = game;

        this._soundCache = game.system.cache.audio;
        this._noAudio = false;
        this._sounds = new DataList();
        this._system = null;

        this.add = null;

        this.volume = 1;
        this.mute = false;
        this.pauseOnBlur = true;
        this.masterVolume = null;
        
        this._removalList = [];
        
    }


    /*decode(tag, sound) {

        sound = sound || null;

        var soundData = this.game.cache.getAssetInfo('sounds', tag);

        if (soundData) {

            if (!soundData.decoded) {
                soundData.isDecoding = true;

                var self = this;

                try {

                    this.context.decodeAudioData(soundData.data, function (buffer) {

                        if (buffer) {
                            self.game.cache.soundDecoded(tag, buffer);
                            console.log("decoded!")
                            //_this.onSoundDecode.dispatch(key, sound);
                        }

                    })

                } catch (error) {

                }
            }
        }

    }*/

    /*add(tag, volume, loop, connect) {

        if (volume === undefined) {
            volume = 1;
        }
        if (loop === undefined) {
            loop = false;
        }
        if (connect === undefined) {
            connect = true;
        } // connect to master volume

        var sound = new scintilla.Sound(this.game, tag, volume, loop, connect);

        _sounds.push(sound);

        return sound;

    }*/

    play(tag, volume, loop) {

        if (this._noAudio)
            return null;

        let sound = this.add(tag, volume, loop);

        sound.play();

        return sound;

    }


    remove(sound) {

        var i = _sounds.length;

        while (i--) {
            if (_sounds[i] === sound) {
                _sounds[i].destroy(false);
                _sounds.splice(i, 1);
                return true;
            }
        }

        return false;

    }




    stopAll() {

        if (this.noAudio) {
            return;
        }

        for (var i = 0; i < _sounds.length; i++) {
            if (_sounds[i]) {
                _sounds[i].stop();
            }
        }

    }

    pauseAll() {

        if (this.noAudio) {
            return;
        }

        for (var i = 0; i < _sounds.length; i++) {
            if (_sounds[i]) {
                _sounds[i].pause();
            }
        }

    }

    resumeAll() {

        if (this.noAudio) {
            return;
        }

        for (var i = 0; i < _sounds.length; i++) {
            if (_sounds[i]) {
                _sounds[i].resume();
            }
        }

    }

    destroy() {

        if (this._system === null)
            return;

        this._system.destroy(); 

        this.stopAll();

        for (let i = 0; i < this._sounds.length; i++) {

            let sound = this._sounds.at(i)

            if (sound) {
                sound.destroy();
            }
        }

        this._sounds.clear();
    }

}

