
Scintilla.Sound = Class.extend(function() {

this.constructor = function(game, tag, volume, loop, connect) {

this.game = game;
this.tag = tag;
this.loop = loop;
this._volume = volume;
this.context = null;
this.isDecoded = false;

this.duration = 0;
this.duration_mili = 0;
this.totalDuration = 0;
this.currentTime = 0;
this.startTime = 0;
this.position = 0;

this.paused = false;
this.isPlaying = false;
this.isFading = false;
this.pendingPlayback = false;


this._oldVolume = 0;
this._fade = false;
this._fadeDuration = 0;
this._fadeVolume = 0;
this._fadeTime = 0;
this._stopFadeEnd = false;

this.webAudio = this.game.sound.webAudio;
this.masterVolumeNode = null;
this.gainNode = null;

this._sound = null;
this._buffer = null;

if (this.webAudio){

    this.context = this.game.sound.context;
    this.masterVolumeNode = this.game.sound.masterVolume;

    if (this.context.createGain === undefined)    {
        this.gainNode = this.context.createGainNode();
    }    else    {
        this.gainNode = this.context.createGain();
    }

    this.gainNode.gain.value = volume * this.game.sound.volume;

    if (connect) // connect to master volume
        this.gainNode.connect(this.masterVolumeNode);

} else {

}


};

this.play = function(position,volume,loop) {

  if (this.isPlaying /*&& !this.allowMultiple && !forceRestart && !this.override*/)
   {
       //  Use Restart instead
       //console.log("as");
       return this;
   }

   if (this._sound && this.isPlaying/* && !this.allowMultiple && (this.override || forceRestart)*/)
  {


  }

  if (this.webAudio) {

    var sound = this.game.cache.getAssetInfo('sounds',this.tag);

    if (sound.decoded)
    {
      /*this.volume = volume;
      this.loop = loop;*/

      this._sound = this.context.createBufferSource();

      // external node...
      this._sound.connect(this.gainNode);

      this._buffer = sound.data;

      this._sound.buffer = this._buffer;

      if (this.loop)
        this._sound.loop = true;
      else
        this._sound.onended = this.onEnd

      this.totalDuration = this._sound.buffer.duration;

      if (this.duration === 0)
       {
           this.duration = this.totalDuration;
           this.duration_mili = Math.ceil(this.totalDuration * 1000);
       }

       // start


       if (this._sound.start === undefined)
        {
            this._sound.noteGrainOn(0, this.position, this.duration);
        } else {

         if (this.loop)
          {
              this._sound.start(0, 0);
          }
          else
          {
              this._sound.start(0, this.position, this.duration);
          }
      }

       // control time
       this.isPlaying = true;
       this.startTime = this.game.clock.time;
       this.currentTime = 0;
       this.stopTime = this.startTime + this.duration_mili;


    } else {

      this.pendingPlayback = true;

      if (!sound.isDecoding) {

          this.game.sound.decode(this.tag,this);


      }


    }



  }

  return this;

}

this.setFade = function(duration, volume, stopOnEnd) {

  if (stopOnEnd === undefined) stopOnEnd = false;

  if (!this.isPlaying || this.paused || volume === this._volume)
   {
       return;
   }

  this._fade = true;
  this._oldVolume = this._volume;
  this._fadeDuration = duration;
  this._fadeVolume = volume;
  this._fadeTime = 0;
  this.isFading = true;
  this._stopFadeEnd = stopOnEnd;

}

this.onEnd = function() {

  this._sound.onended = null;
  this.isPlaying = false;
  this.currentTime = this.duration_mili;
  this.stop();

}

this.stop = function() {

  if (this.isPlaying && this._sound)
   {
       if (this.webAudio)
       {
           if (this._sound.stop === undefined)
           {
               this._sound.noteOff(0);
           }
           else
           {
               try {
                   this._sound.stop(0);
               }
               catch (e)
               {
                   //  Thanks Android 4.4
               }
           }

           //if (this.externalNode)

               this._sound.disconnect(this.gainNode);

       }
     }

  this.isPlaying = false;

}

this.update = function() {

  // check cache
  //console.log("eu");

  if (!this.game.cache.tagExists('sounds',this.tag)) {

    this.destroy();
    return;

  }

  // check if is decoded
  //if (this.isDecoded) {}

  if (this.pendingPlayback && this.game.cache.getAssetInfo('sounds', this.tag).decoded)  {
      this.pendingPlayback = false;
      this.play(this._tempMarker, this._tempPosition, this._tempVolume, this._tempLoop);
  }

  if (this.isPlaying) {

      this.currentTime = this.game.clock.time - this.startTime;

      if (this.currentTime >= this.duration_mili) {

        if (this.webAudio) {

          if (this.loop)
          {

          }

        }

      }

      if (this._fade) {

        this._fadeTime += this.game.clock.deltaTime / this._fadeDuration;

        var t = this._fadeTime;

        if (t >= 1) {

          t = 1;
          this._fadeTime = 0;
          this._fadeDuration = 0;
          this._fade = false;
          this.isFading = false;
          if (this._stopFadeEnd) {
            this.stop();
            this._stopFadeEnd = false;
          }

        }


        var value = Scintilla.Math.lerp(this._oldVolume,this._fadeVolume,t);

        this.volume = value;

      }

  }


}

this.changeSound = function(tag,volume,loop) {

  if (volume === undefined) { volume = 1; }
  if (loop === undefined) { loop = false; }


  this.tag = tag;
  this.stop();
  this._sound = null;
  this._buffer = null;
  this.volume = volume;
  this.loop = loop;
  this.play(0,volume,loop);


};

this.destroy = function(remove) {

  if (remove === undefined) { remove = true; }

  this.stop();

  if (remove)
  {
      this.game.sound.remove(this);

  } else {

    this.context = null;
    this._buffer = null;


  }

}




});

Object.defineProperty(Scintilla.Sound.prototype, "volume", {

    get: function () {
        return this._volume;
    },

    set: function (value) {

        //  Causes an Index size error in Firefox if you don't clamp the value
        /*if (this.game.device.firefox && this.usingAudioTag)
        {
            value = this.game.math.clamp(value, 0, 1);
        }

        if (this._muted)
        {
            this._muteVolume = value;
            return;
        }

        this._tempVolume = value;
        this._volume = value;*/

        this._volume = value;

        if (this.webAudio)
        {
            this.gainNode.gain.value = value;
        }

        /*else if (this.usingAudioTag && this._sound)
        {
            this._sound.volume = value;
        }*/
    }

});
