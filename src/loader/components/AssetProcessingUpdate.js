import LoaderState from "../LoaderState";
import DeleteSucceedQueuedAsset from "./DeleteSucceedQueuedAsset";

export default function AssetProcessingUpdate(file) {

  if (file.state === LoaderState.ERROR) {
    this._failedFiles.insert(file);

    /*if (file.linkFile)
    {
        this.queue.delete(file.linkFile);
    }*/

    //return this.deleteFromSuccessQueue(file);
    // return DeleteSucceedQueuedAsset.call(this, file);
  } else {

    if (file.multiFile) {
      if (file.multiFile.isReadyToProcess()) {
        this._processedFiles.insert(file.multiFile);
      }
    } else {
      this._processedFiles.insert(file);
    }
  }



  return DeleteSucceedQueuedAsset.call(this, file);//this.deleteFromSuccessQueue(file);

}