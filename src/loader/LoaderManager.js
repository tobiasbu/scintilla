
import { LOADER_STATE, AssetTypeHandler} from './LoaderState'
import DataSet from '../structures/Set'
import XHR from './XHR'
import ObjectUtils from '../utils/ObjectUtils';
import GameSystemManager from '../core/GameSystemManager';
import AssetsType from './AssetsType';

// Class LoaderManager
export default class LoadManager {
  
  constructor(game) {

    this.game = game;
    this.cache = null;

    this._filesQueue = null;
    this._filesLoading = null;
    this._successFiles = null;
    this._failedFiles = null;
    this._processedFiles = null;

    this._filesQueueCount = null;
    this._loadedFilesCount = null;

    this.isDownloading = false;
    this._totalFiles = 0;

    this.progress = null;
    this.path = null;
    this.baseURL = null;
    this.state = null;

    let gameConfig = game.config.loader;

    this.xhr = XHR.createSettings(
      ObjectUtils.getValue(config, 'responseType', gameConfig.responseType),
      ObjectUtils.getValue(config, 'async', gameConfig.async),
      //scintilla.ObjectUtils.getPropertyValue(config, 'user', gameConfig.loaderUser),
      //scintilla.ObjectUtils.getPropertyValue(config, 'password', gameConfig.loaderPassword),
      ObjectUtils.getValue(config, 'timeout', gameConfig.timeout)
  );
  

    AssetTypeHandler.inject(this);

  }

  init()
  {
    this.cache = this.game.system.cache;

    this._filesQueue = new DataSet();
    this._filesLoading = new DataSet();
    this._successFiles = new DataSet();
    this._failedFiles = new DataSet();
    this._processedFiles = new DataSet();

    this._filesQueueCount = 0;
    this._loadedFilesCount = 0;

    this.progress = 0;
    this.path = '';
    this.baseURL = '';
    this.state = LOADER_STATE.IDLE;
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

  addAsset(asset, check) {

    if (check === undefined) check = true;

    if (!this.isOK() && check)
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
      //console.log(0);
      this.loadFinished();
    }
    else
    {
      this.isDownloading = true;
      this._successFiles.clear();
      this._failedFiles.clear();
      this._filesLoading.clear();

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

    var self = this;

    this._filesQueue.each(function(file) {

      //var file = this._filesQueue[i];

      if (file.state === LOADER_STATE.FINISHED ||
         file.state === LOADER_STATE.PENDING) //  && this.inflight.size < this.maxParallelDownloads))
      {
        

        self._filesLoading.set(file);

        self._filesQueue.delete(file);

        self.loadAsset(file);
      }

    });

  }

  loadAsset(file) {
    file.load(this);
  }

  next(concludedFile, hasError) {

      if (hasError)
          this._failedFiles.set(concludedFile);
      else 
          this._successFiles.set(concludedFile);
      

      this._filesLoading.delete(concludedFile);
      //this._filesQueue.delete(concludedFile);
      this._loadedFilesCount++;

      this.updateProgress();

      if (this._filesQueue.size > 0)//(this._loadedFilesCount < this._filesQueueCount)
      {
          this.processFileQueue();
      } else if (this._filesLoading.size === 0) {
        
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

    var cache = this.cache;

          

    if (this._processedFiles.size > 0)
    {

      // sort the assets by type priority 
      this._processedFiles.sort((a, b) => {
        return (a.type > b.type);
      });

      this._processedFiles.each(function(file) {

        switch (file.type)
        {
          default:
            break;

          case AssetsType.image: {
            cache.image.add(file.tag,file.data);
            break;
          }
          case AssetsType.audio: {

            file.data = requestXHR.response;

            cache.addSound(file.tag,file.url,file.data,true);

            if (file.autoDecode)
            {
                this.game.sound.decode(file.tag);
            }

            break;
          }
          case AssetsType.json: {
            cache.json.add(file.tag, file.data);
            break;
          }

          case AssetsType.tilemapJSON: {
            cache.tilemap.add(file.tag, file.data);
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

GameSystemManager.register('Loader',LoadManager,'load');