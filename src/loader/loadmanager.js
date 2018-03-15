
import { LOADER_STATE, AssetTypeHandler} from './loaderstate'
import Set from '../structures/set'
import XHR from './XHR'
import ObjectUtils from '../utils/objectutils';

// Class LoaderManager
export default class LoadManager {
  
  constructor(game) {

    this.game = game;
    this.cache = game.cache;

    this._filesQueue = new Set();
    this._successFiles = new Set();
    this._failedFiles = new Set();
    this._processedFiles = new Set();

    this._filesQueueCount = 0;
    this._loadedFilesCount = 0;

    this.isDownloading = false;
    this._totalFiles = 0;

    let gameConfig = game.config.loader;

    this.xhr = XHR.createSettings(
      ObjectUtils.getValue(config, 'responseType', gameConfig.responseType),
      ObjectUtils.getValue(config, 'async', gameConfig.async),
      //scintilla.ObjectUtils.getPropertyValue(config, 'user', gameConfig.loaderUser),
      //scintilla.ObjectUtils.getPropertyValue(config, 'password', gameConfig.loaderPassword),
      ObjectUtils.getValue(config, 'timeout', gameConfig.timeout)
  );


    this.progress = 0;
    this.path = '';
    this.baseURL = '';
    this.state = LOADER_STATE.IDLE;
  

    AssetTypeHandler.inject(this);

  }


  setPath(path) {
    if (path !== '' && path.substr(-1) !== '/')
        path = path.concat('/');

    this.path = path;

    return this;
  }

  setBaseURL(baseUrl) {
    if (baseUrl !== '' && baseUrl.substr(-1) !== '/')
    {
      baseUrl = baseUrl.concat('/');
    }

    this.baseURL = baseUrl || '';

    return this;
  }

  addAsset(asset) {
    if (!this.isOK())
        return -1;

    asset.path = this.path;
    this._filesQueue.set(asset);
    this._filesQueueCount++;
    return asset;

  }

  reset() {

    this.isDownloading = false;
    this._filesQueue.clear();
    this._successFiles.clear();
    this._failedFiles.clear();
    this._processedFiles.clear();

    this._filesQueueCount = 0;
    this._loadedFilesCount = 0;

    this.progress = 0
    this.state = LOADER_STATE.IDLE;

  }

  start() {

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

  }

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

  processFileQueue() {

    let self = this;

    this._filesQueue.each(function(file) {

      //var file = this._filesQueue[i];

      if (file.state === LOADER_STATE.FINISHED ||
         file.state === LOADER_STATE.PENDING) //  && this.inflight.size < this.maxParallelDownloads))
      {
        file.load(self);
      }

    });

  }

  next(concludedFile, hasError) {
      if (hasError)
          this._failedFiles.set(concludedFile);
      else 
          this._successFiles.set(concludedFile);
      

      this._filesQueue.delete(concludedFile);
      this._loadedFilesCount++;

      this.updateProgress();

      if (this._loadedFilesCount < this._filesQueueCount)
      {
          this.processFileQueue();
      } else  {
        
          this.loadFinished();
      }

  }

  loadFinished() {
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
     
      this._successFiles.each(function(file) {
        file.onProcessing(this.processingUpdate.bind(this));
      },this);
    }
   
  }


  processingUpdate(file) {
    
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

  }

  deleteFromSuccessQueue(file) {
    
      this._successFiles.delete(file);

      if (this._successFiles.size === 0 && this.state === LOADER_STATE.PROCESSING)
          this.processingDone();
  }

  processingDone() {
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
  }

  isLoading() {
    return (this.state === LOADER_STATE.LOADING || this.state === LOADER_STATE.PROCESSING);
  }

  isOK() {
    return (this.state === LOADER_STATE.IDLE || this.state === LOADER_STATE.DONE || this.state === LOADER_STATE.ERROR);
  }

  downloadIsDone() {
    return (this._filesQueue.length == (this._successCount + this._fileErrorCount));
  }

  updateProgress() {

    var progress = 0;

    if (this._filesQueueCount != 0)
    {
      this.progress = 1 - (this._loadedFilesCount / this._filesQueueCount);
    }
     //progress = parseFloat(this._successCount) / parseFloat(this._filesQueueCount);

    this.progress = progress;

  }


  get totalQueuedFiles() {
    return this._filesQueueCount - this._loadedFilesCount;
  }


};

