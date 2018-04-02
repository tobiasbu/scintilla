

import DataSet from '../structures/Set'
import XHR from './XHR'
import ObjectUtils from '../utils/ObjectUtils';
import GameSystemManager from '../core/GameSystemManager';
import LoaderState from './LoaderState'
import EventManager from '../event/EventManager';
import AssetTypeHandler from './assets/AssetTypeHandler';

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
    this.webFontLoader = undefined;
    this.event = null;
    this.crossOrigin = undefined;

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

  get totalQueuedFiles() {
    return this._filesQueueCount - this._loadedFilesCount;
  }

  init() {
    this.cache = this.game.system.cache;

    this._filesQueue = new DataSet();
    this._filesLoading = new DataSet();
    this._successFiles = new DataSet();
    this._failedFiles = new DataSet();
    this._processedFiles = new DataSet();
    this.event = new EventManager();

    this._filesQueueCount = 0;
    this._loadedFilesCount = 0;

    this.progress = 0;
    this.path = '';
    this.baseURL = '';
    this.state = LoaderState.IDLE;
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

  setCrossOrigin(crossOrigin) {
    this.crossOrigin = crossOrigin;
    return this;
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
    this.state = LoaderState.IDLE;

  }



  /*end : function() {

    if (this.state === LoaderState.PROCESSING)
        return;
  
    this.progress = 1;
    this.isDownloading = false;
    this.state = LoaderState.PROCESSING;

    
    this._filesQueue.clear();
    this._failedFiles.length = 0;
    
    this.processFiles();

    this._successFiles.clear();

    this.state = LoaderState.DONE;
    //this.game.scene.preloadComplete();

  },*/



  loadAsset(file) {

      if (!file.crossOrigin) {
          file.crossOrigin = this.crossOrigin;
      }


    file.load(this);
  }

  isLoading() {
    return (this.state === LoaderState.LOADING || this.state === LoaderState.PROCESSING);
  }

  isOK() {
    return (this.state === LoaderState.IDLE || this.state === LoaderState.DONE || this.state === LoaderState.ERROR);
  }

  downloadIsDone() {
    return (this._filesQueue.length == (this._successCount + this._fileErrorCount));
  }


};

GameSystemManager.register('Loader',LoadManager,'load');