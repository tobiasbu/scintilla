


// Class LoaderManager
tobi.LoadManager = function(game) {

  this.game = game;
  this.cache = game.cache;

  this._fileQueue = [];
  this._filesCount = 0;
  this._filesLoaded = 0;
  this._fileErrorCount = 0;
  this.isDownloading = false;
  this._totalFiles = 0;

  var gameConfig = game.config.loader;

  this.xhr = tobi.XHR.createSettings(
    tobi.Utils.getValue(config, 'responseType', gameConfig.responseType),
    tobi.Utils.getValue(config, 'async', gameConfig.async),
    //tobi.Utils.getPropertyValue(config, 'user', gameConfig.loaderUser),
    //tobi.Utils.getPropertyValue(config, 'password', gameConfig.loaderPassword),
    tobi.Utils.getValue(config, 'timeout', gameConfig.timeout)
);


  this.progress = 0;
  this.path = '';
  this.baseURL = '';
  this.state = LOADER_STATE.IDLE;
 

  AssetTypeHandler.inject(this);

};

tobi.LoadManager.prototype = {



  queueAsset : function(type, tag, path, elements) {

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
           var currentFile = this._fileQueue[fileIndex];

           if (!currentFile.loading && !currentFile.loaded)
           {
               this._fileQueue[fileIndex] = file;
           }
           else
           {
               this._fileQueue.push(file);
               this._filesCount++;
           }
    }
    else if (fileIndex === -1)
    {
      this._fileQueue.push(file);
      this._filesCount++;
    }

  },


  setPath : function(path)
  {
    if (path !== '' && path.substr(-1) !== '/')
        path = path.concat('/');

    this.path = path;

    return this;
  },

  setBaseURL : function(baseUrl)
  {
    if (baseUrl !== '' && baseUrl.substr(-1) !== '/')
    {
      baseUrl = baseUrl.concat('/');
    }

    this.baseURL = baseUrl || '';

    return this;
  },

  addAsset : function(asset)
  {
    if (!this.isOK())
        return -1;

    asset.path = this.path;

    var fileIndex = this.getAssetQueueIndex(asset.type, asset.tag);

    if (fileIndex > -1)
    {
           var currentFile = this._fileQueue[fileIndex];

           if (!currentFile.loading && !currentFile.loaded)
           {
               this._fileQueue[fileIndex] = asset;
           }
           else
           {
               this._fileQueue.push(asset);
               this._filesCount++;
           }
    }
    else if (fileIndex === -1)
    {
      this._fileQueue.push(asset);
      this._filesCount++;
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

        for (var i = 0; i < this._fileQueue.length; i++)
        {
            var file = this._fileQueue[i];

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

  reset : function() {

    this.isDownloading = false;
    this._filesCount = 0;
    this._filesLoaded = 0;
    this._fileQueue.length = 0;
    this._fileErrorCount = 0;
    this.progress = 0
    this.state = LOADER_STATE.IDLE;


  },

  start : function() {

    //if (this.isDownloading)
    if (!this.isOK())
    {
        return -1;
    }

    this.progress = 0;
    this.state = LOADER_STATE.LOADING;
    this._filesCount = this._fileQueue.length;

    if (this._filesCount === 0)
    {
      console.log("NO FILE");
      this.end();
    }
    else
    {
      this.isDownloading = true;

      this.processFileQueue();
    }

  },

  end : function() {

    this.isDownloading = false;
    this.updateProgress();
    this.game.scene.preloadComplete();

  },

  processFileQueue : function() {


    for (var i = 0; i < this._fileQueue.length; i++) {

      var file = this._fileQueue[i];

      console.log(file);

      if (file.state === LOADER_STATE.FINISHED ||
         file.state === LOADER_STATE.PENDING) // && this.inflight.size < this.maxParallelDownloads))
      {
        file.load(this);
      }
      //file.loading = true;

     



    }

  },

  /*loadFile : function(file) {


    /*switch (file.type) {

      case 'image': this.loadImageFile(file); break;
      case 'audio': {

        // must check if audio tag or webaudio
        if (this.game.sound.webAudio)
          this.loadAudioFile(file);


        break;
      }

    }

  },*/

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

  fileLogComplete: function (file, requestXHR) {



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

  },

  dowloadComplete : function(file, error) {

    if (error == true) {
      file.error = true;
      this._fileErrorCount++;
    } else {
      file.loaded = true;
      this._filesLoaded++;
    }

    this.updateProgress();

    if (this.downloadIsDone()) {
        this.endDownload();
    }

  },

  isLoading : function()
  {
    return (this.state === LOADER_STATE.LOADING || this.state === LOADER_STATE.PROCESSING);
  },

  isOK : function()
  {
    return (this.state === LOADER_STATE.IDLE || this.state === LOADER_STATE.DONE || this.state === LOADER_STATE.ERROR);
  },

  downloadIsDone : function() {


    return (this._fileQueue.length == (this._filesLoaded + this._fileErrorCount));

  },

  updateProgress : function() {

    var progress = 0;



    if (this._filesCount != 0)
    {
      this.progress = 1 - (this._filesLoadedCount / this._filesCount);
    }
     //progress = parseFloat(this._filesLoaded) / parseFloat(this._filesCount);



    this.progress = progress;

  },


  totalQueuedFiles: function () {

        return this._filesCount - this._filesLoaded;

  }


};

tobi.LoadManager.prototype.constructor = tobi.LoadManager;
