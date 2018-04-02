import GameSystemManager from "../core/GameSystemManager";

export default class AudioManager {

constructor(game) {

  this.game = game;

  this.webAudio = false;
  this.context = false;
  this.noAudio = false;
  
  this.channels = 24;
  
  
  this.masterVolume = null;
  this.volume = 1;
  var _sounds = [];
}

getSounds = function() {

  return _sounds;

}

start = function() {

    if (!!window['AudioContext'])
    {
        try {
            this.context = new window['AudioContext']();
        } catch (error) {
            this.context = null;
            this.webAudio = false;

        }
    }
    else if (!!window['webkitAudioContext'])
    {
        try {
            this.context = new window['webkitAudioContext']();
        } catch (error) {
            this.context = null;
            this.webAudio = false;
        }
    }

    if (this.context === null)
    {

      this.noAudio = true;

    } else {

      this.webAudio = true;

      if (this.context.createGain === undefined)
      {
          this.masterVolume = this.context.createGainNode();
      }
      else
      {
          this.masterVolume = this.context.createGain();
      }

      this.masterVolume.gain.value = 1;
      this.masterVolume.connect(this.context.destination);

  }

};

stopAll = function() {

  if (this.noAudio)
  {
      return;
  }

  for (var i = 0; i < _sounds.length; i++)
  {
      if (_sounds[i])
      {
          _sounds[i].stop();
      }
  }

};

pauseAll = function () {

  if (this.noAudio)
  {
      return;
  }

  for (var i = 0; i < _sounds.length; i++)
  {
      if (_sounds[i])
      {
          _sounds[i].pause();
      }
  }

};

resumeAll = function () {

  if (this.noAudio)
  {
      return;
  }

  for (var i = 0; i < _sounds.length; i++)
  {
      if (_sounds[i])
      {
          _sounds[i].resume();
      }
  }

};

decode = function(tag, sound) {

  sound = sound || null;

  var soundData = this.game.cache.getAssetInfo('sounds',tag);

  if (soundData) {

    if (!soundData.decoded) {
        soundData.isDecoding = true;

        var self = this;

        try {

            this.context.decodeAudioData(soundData.data, function(buffer) {

              if (buffer)
               {
                   self.game.cache.soundDecoded(tag, buffer);
                   console.log("decoded!")
                   //_this.onSoundDecode.dispatch(key, sound);
               }

            })

        } catch(error) {

        }
    }
  }

}

add = function(tag, volume, loop, connect) {

  if (volume === undefined) { volume = 1; }
  if (loop === undefined) { loop = false; }
  if (connect === undefined) { connect = true; } // connect to master volume

  var sound = new scintilla.Sound(this.game, tag, volume, loop, connect);

  _sounds.push(sound);

  return sound;

}

play = function(tag, volume, loop) {

  var sound = this.add(tag, volume, loop);

  sound.play();

  return sound;

}

update = function() {

  if (this.noAudio)
  {
      return;
  }

  for (var i = 0; i < _sounds.length; i++)
  {
      _sounds[i].update();
  }

}

remove = function(sound) {

  var i = _sounds.length;

   while (i--)
   {
       if (_sounds[i] === sound)
       {
           _sounds[i].destroy(false);
           _sounds.splice(i, 1);
           return true;
       }
   }

   return false;

}


destroy = function () {

        this.stopAll();

        for (var i = 0; i < this._sounds.length; i++)
        {
            if (_sounds[i])
            {
                _sounds[i].destroy();
            }
        }

        _sounds = [];

        this.context.close();


}



};

Object.defineProperty(scintilla.SoundManager.prototype, "length", {

get : function() {
  return this.getSounds().length;
}

});

GameSystemManager.register('AudioSystem',AudioManager, 'audio');