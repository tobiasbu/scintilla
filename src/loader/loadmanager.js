


// Class LoaderManager
Scintilla.LoadManager = function(game) {

  this.game = game;
  this.cache = game.cache;

  this._filesQueue = new Scintilla.Set();
  this._successFiles = new Scintilla.Set();
  this._failedFiles = new Scintilla.Set();
  this._processedFiles = new Scintilla.Set();

  this._filesQueueCount = 0;
  this._loadedFilesCount = 0;

  this.isDownloading = false;
  this._totalFiles = 0;

  var gameConfig = game.config.loader;

  this.xhr = Scintilla.XHR.createSettings(
    Scintilla.Utils.getValue(config, 'responseType', gameConfig.responseType),
    Scintilla.Utils.getValue(config, 'async', gameConfig.async),
    //Scintilla.Utils.getPropertyValue(config, 'user', gameConfig.loaderUser),
    //Scintilla.Utils.getPropertyValue(config, 'password', gameConfig.loaderPassword),
    Scintilla.Utils.getValue(config, 'timeout', gameConfig.timeout)
);


  this.progress = 0;
  this.path = '';
  this.baseURL = '';
  this.state = LOADER_STATE.IDLE;
 

  AssetTypeHandler.inject(this);

};

Scintilla.LoadManager.prototype = {

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
    this._filesQueue.set(asset);
    this._filesQueueCount++;
    return asset;

  },

  reset : function() {

    this.isDownloading = false;
    this._filesQueueCount = 0;
    this._successCount = 0;
    this._filesQueue.length = 0;
    this._fileErrorCount = 0;
    this.progress = 0
    this.state = LOADER_STATE.IDLE;


  },

  start : function() {

    if (!this.isOK())
    {
        return -1;
    }

    this.progress = 0;
    this._loadedFilesCount = 0;
    this.state = LOADER_STATE.LOADING;
    this._filesQueueCount = this._filesQueue.size;

    if (this._filesQueue.size === 0)
    {
      console.log(0);
      this.loadFinished();
    }
    else
    {
      this.isDownloading = true;
      this._successFiles.clear();
      this._failedFiles.clear();
      //this._filesQueue.clear();

      this.processFileQueue();
    }

  },

  /*end : function() {

    if (this.state === LOADER_STATE.PROCESSING)
        return;
  
    this.progress = 1;
    this.isDownloading = false;
    this.state = LOADER_STATE.PROCESSING;

    
    this._filesQueue.clear();
    this._failedFiles.length = 0;
    
    this.processFiles();

    this._successFiles.clear();

    this.state = LOADER_STATE.DONE;
    //this.game.scene.preloadComplete();

  },*/

  processFileQueue : function() {

    var self = this;

    this._filesQueue.each(function(file) {

      //var file = this._filesQueue[i];

      if (file.state === LOADER_STATE.FINISHED ||
         file.state === LOADER_STATE.PENDING) //  && this.inflight.size < this.maxParallelDownloads))
      {
        file.load(self);
      }

    });

  },

  next : function(concludedFile, hasError)
  {
      if (hasError)
          this._failedFiles.set(concludedFile);
      else 
          this._successFiles.set(concludedFile);
      

      this._filesQueue.delete(concludedFile);
      this._loadedFilesCount++;

      this.updateProgress();

      if (this._loadedFilesCount < this._filesQueueCount)
      {
        console.log("asdasd");
          this.processFileQueue();
      } else  {
        
          this.loadFinished();
      }

  },

  loadFinished : function()
  {
    if (this.state === LOADER_STATE.PROCESSING)
        return;
  
    this.progress = 1;
    this.isDownloading = false;
    this.state = LOADER_STATE.PROCESSING;

    this._processedFiles.clear();

    if (this._successFiles.size === 0)
    {
     
        this.processingDone();
    } else {
     
      console.log("asdasd");
      this._successFiles.each(function(file) {
        file.onProcessing(this.processingUpdate.bind(this));
      },this);
    }
   
  },


  processingUpdate : function(file)
  {
    ;
    if (file.state === LOADER_STATE.ERROR)
    {
       this._failedFiles.set(file);

        /*if (file.linkFile)
        {
            this.queue.delete(file.linkFile);
        }*/

        
        

        return this.deleteFromSuccessQueue(file);
    }


    this._processedFiles.set(file);

    return this.deleteFromSuccessQueue(file);


  },

  deleteFromSuccessQueue : function (file) {
    
      this._successFiles.delete(file);

      if (this._successFiles.size === 0 && this.state === LOADER_STATE.PROCESSING)
          this.processingDone();
  },

  processingDone : function()
  {
    console.log("done")
    this._successFiles.clear();
    this._filesQueue.clear();

    var cache = this.game.cache;

    if (this._processedFiles.size > 0)
    {
      this._processedFiles.each(function(file) {

        switch (file.type)
        {
          case 'image': {
            cache.addImage(file.tag,file.url,file.data);
            break;
          }
          case 'audio': {

            file.data = requestXHR.response;

            cache.addSound(file.tag,file.url,file.data,true);

            if (file.autoDecode)
            {
                this.game.sound.decode(file.tag);
            }

            break;
          }
        }

      })

      this._processedFiles.clear();
    }

    this.state = LOADER_STATE.DONE;

    this.game.scene.preloadComplete();
    console.log("asdasd");

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


    return (this._filesQueue.length == (this._successCount + this._fileErrorCount));

  },

  updateProgress : function() {

    var progress = 0;



    if (this._filesQueueCount != 0)
    {
      this.progress = 1 - (this._loadedFilesCount / this._filesQueueCount);
    }
     //progress = parseFloat(this._successCount) / parseFloat(this._filesQueueCount);



    this.progress = progress;

  },


  totalQueuedFiles: function () {

        return this._filesQueueCount - this._successCount;

  }


};

Scintilla.LoadManager.prototype.constructor = Scintilla.LoadManager;
