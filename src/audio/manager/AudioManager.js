import DataList from "../../structures/List";

export default class AudioManager {

    constructor(game) {

        this.game = game;

        this._soundCache = game.system.cache.audio;
        this._noAudio = game.config.audio.noAudio;
        this._sounds = null;

        //if (!this._noAudio) 
        this._sounds = new DataList();  
        this._removalList = [];
        this._system = null;
        this.add = null;

        this.volume = 1;
        this.mute = false;
        this.muteOnBlur = true;

        if (this._noAudio === false) {
            this.game.system.events.subscribe('blur', function () {

                if (this.muteOnBlur === false)
                    return;

                this._system.onBlur();

            }, this, 0);

            this.game.system.events.subscribe('focus', function () {

                if (this.muteOnBlur === false)
                    return;

                this._system.onFocus();

            }, this, 0);
        }


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

    at(index) {
        if (this._noAudio)
            return null;

        return this._sounds.at(index);
    }

    /*get(sourceName) {

    }*/

    play(tag, volume, loop, name) {

        if (this._noAudio) {
            return null;
        }

        let sound = this.add(tag, volume, loop, name);

        if (sound !== undefined && sound !== null) {
            sound.play();
            return sound;
        }


        return null;


    }

    playPersistent(tag, volume, loop, name) {

        let sound = this.play(tag, volume, loop, name);

        if (sound !== null)
            sound.persistent = true;


        return sound;

    }

    playOnce(tag, volume, loop, name) {
        let sound = this.play(tag, volume, loop, name);

        if (sound !== null)
            sound.once = true;

        return sound;
    }

    get(name) {

        return this._sounds.each((source) => {

            if (source.name === name) {
                return source;
            }

        }) || null;

    }


    remove(sound) {

        if (this._noAudio)
            return false;

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


    stopAll(destroy) {

        if (this._noAudio) {
            return;
        }

        if (destroy === undefined) destroy = false;

        for (let i = 0; i < this._sounds.length; i++) {

            let source = this._sounds.at(i);

            if (source) {
                source.stop();
                if (destroy === true) {
                    source.destroy();
                }
            }
        }

    }

    pauseAll() {

        if (this._noAudio) {
            return;
        }

        for (var i = 0; i < _sounds.length; i++) {
            if (_sounds[i]) {
                _sounds[i].pause();
            }
        }

    }

    resumeAll() {

        if (this._noAudio) {
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