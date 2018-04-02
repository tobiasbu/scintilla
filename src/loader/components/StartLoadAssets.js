import LoaderFinished from "./LoaderFinished";
import ProcessAssetsQueue from "./ProcessAssetsQueue";
import LoaderState from "../LoaderState";

export default function StartLoadAssets() {

    if (!this.isOK())
    {
        return -1;
    }

    this.progress = 0;
    this._loadedFilesCount = 0;
    this.state = LoaderState.LOADING;
    this._filesQueueCount = this._filesQueue.size;

    if (this._filesQueue.size === 0)
    {
      //console.log(0);
      //this.loadFinished();
      LoaderFinished.call(this);
    }
    else
    {
      this.isDownloading = true;
      this._successFiles.clear();
      this._failedFiles.clear();
      this._filesLoading.clear();

      //this.processFileQueue();
      ProcessAssetsQueue.call(this);
    }

  }