
import DataSet from '../../structures/Set'
import EventManager from '../../event/EventManager';
import LoaderState from '../LoaderState';

export default function InitializeLoader() {

    this.cache = this.game.system.cache;

    this._filesQueue = new DataSet();
    this._filesLoading = new DataSet();
    this._successFiles = new DataSet();
    this._failedFiles = new DataSet();
    this._processedFiles = new DataSet();
    this.events = new EventManager();

    this._filesQueueCount = 0;
    this._loadedFilesCount = 0;

    this.progress = 0;
    this.path = '';
    this.baseURL = '';
    this.state = LoaderState.IDLE;
}