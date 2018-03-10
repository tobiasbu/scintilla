 loadImageFile : function(file) {



    var self = this;

    file.data = new Image();
    file.data.name = file.tag;

    file.data.addEventListener("load", function() {
          self.fileLogComplete(file);
    }, false);

    file.data.addEventListener("error", function() {
          self.fileLogError(file);
    }, false);

    file.data.src = file.url;

  /*  file.data.onload = function () {
           if (file.data.onload)
           {
               file.data.onload = null;
               file.data.onerror = null;
               self.fileLogComplete(file);
           }
    };

    file.data.onerror = function () {
            if (file.data.onload)
            {
                file.data.onload = null;
                file.data.onerror = null;
                self.fileLogError(file);
            }
    };*/



    /*if (file.data.complete && file.data.width && file.data.height)
    {
            //file.data.onload = null;
            //file.data.onerror = null;
            this.fileLogComplete(file);
            if (this.downloadIsDone()) {
                this.endDownload();
            }
    }*/



  },

  loadAudioFile : function(file) {

    var self = this;
    var request = new XMLHttpRequest();
    request.open('GET', file.url, true);
    request.responseType = 'arraybuffer';

    request.onload = function () {

       if (request.readyState == 4 && request.status >= 400 && request.status <= 599) {
         self.fileLogError(file);
       } else {
          self.fileLogComplete(file,request);
        }

    }

    request.onerror = function () {
          self.fileLogError(file);
    }

    request.send();


  },

  fileLogError: function (file) {
      console.warn("tobiJS.load: Error to load asset from " + file.url);
      this.dowloadComplete(file,true);
  },

  /*fileLogComplete: function (file, requestXHR) {



    switch (file.type)
    {
      case 'image': {
        this.cache.addImage(file.tag,file.url,file.data);
        break;
      }
      case 'audio': {

        file.data = requestXHR.response;

        this.cache.addSound(file.tag,file.url,file.data,true);

        if (file.autoDecode)
        {
            this.game.sound.decode(file.tag);
        }

        break;
      }
    }

    this.dowloadComplete(file,false);

  },*/

  dowloadComplete : function(file, error) {

    if (error == true) {
      file.error = true;
      this._fileErrorCount++;
    } else {
      file.loaded = true;
      this._successCount++;
    }

    this.updateProgress();

    if (this.downloadIsDone()) {
        this.endDownload();
    }

  },

  
  /*image : function(tag,path) {

      this.queueAsset('image',tag,path);

  },

  audio : function(tag,path) {

      this.queueAsset('audio',tag,path,{ buffer: null, autoDecode: true });

  },*/

  getAssetQueueIndex : function(type,tag) {

    var found = -1;

        for (var i = 0; i < this._filesQueue.length; i++)
        {
            var file = this._filesQueue[i];

            if (file.type === type && file.name === tag)
            {
                found = i;

                // An already loaded/loading file may be superceded.
                if (!file.loaded && !file.loading)
                {
                    break;
                }
            }
        }

        return found;

  },

  


  /*queueAsset : function(type, tag, path, elements) {

    var file = {
      type:type,
      tag:tag,
      url:path,
      data:null,
      loaded: false,
      error: false,
      loading:false,
    };

    if (elements)
    {
        for (var prop in elements)
        {
            file[prop] = elements[prop];
        }
    }

    var fileIndex = this.getAssetQueueIndex(type, tag);

    if (fileIndex > -1)
    {
           var currentFile = this._filesQueue[fileIndex];

           if (!currentFile.loading && !currentFile.loaded)
           {
               this._filesQueue[fileIndex] = file;
           }
           else
           {
               this._filesQueue.push(file);
               this._filesQueueCount++;
           }
    }
    else if (fileIndex === -1)
    {
      this._filesQueue.push(file);
      this._filesQueueCount++;
    }

  },*/