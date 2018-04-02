import ProcessAssetsQueue from "./ProcessAssetsQueue";
import LoaderFinished from "./LoaderFinished";
import UpdateProgress from "./UpdateProgress";


export default function NextAsset(concludedFile, hasError) {

    if (hasError)
        this._failedFiles.set(concludedFile);
    else 
        this._successFiles.set(concludedFile);
    

    this._filesLoading.delete(concludedFile);
    this._loadedFilesCount++;

    //this.updateProgress();
    UpdateProgress.call(this);

    if (this._filesQueue.size > 0)//(this._loadedFilesCount < this._filesQueueCount)
    {
        //this.processFileQueue();
        ProcessAssetsQueue.call(this);
    } else if (this._filesLoading.size === 0) {
      
        //this.loadFinished();
        LoaderFinished.call(this);
    }

}