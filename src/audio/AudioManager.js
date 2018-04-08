import InitializeAudioSystem from "./components/InitializeAudioSystem";
import System from "../core/system/System";

export default class AudioManager {

    constructor(game) {

        this.game = game;

        this.webAudio = false;
        this.context = null;
        this.noAudio = false;

        this.channels = 24;


        this.masterVolume = null;
        this.volume = 1;
        var _sounds = [];
    }

    getSounds() {

        return _sounds;

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

    };

    resumeAll() {

        if (this.noAudio) {
            return;
        }

        for (var i = 0; i < _sounds.length; i++) {
            if (_sounds[i]) {
                _sounds[i].resume();
            }
        }

    };

    decode(tag, sound) {

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

    }

    add(tag, volume, loop, connect) {

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

    }

    play(tag, volume, loop) {

        var sound = this.add(tag, volume, loop);

        sound.play();

        return sound;

    }

    update() {

        if (this.noAudio) {
            return;
        }

        for (var i = 0; i < _sounds.length; i++) {
            _sounds[i].update();
        }

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


    destroy() {

        this.stopAll();

        for (var i = 0; i < this._sounds.length; i++) {
            if (_sounds[i]) {
                _sounds[i].destroy();
            }
        }

        _sounds = [];

        this.context.close();


    }

}

System.register('AudioManager', AudioManager, 'audio', InitializeAudioSystem);