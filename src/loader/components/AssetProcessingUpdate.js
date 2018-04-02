import LoaderState from "../LoaderState";
import DeleteSucceedQueuedAsset from "./DeleteSucceedQueuedAsset";

export default function AssetProcessingUpdate(file) {
    
    if (file.state === LoaderState.ERROR)
    {
       this._failedFiles.set(file);

        /*if (file.linkFile)
        {
            this.queue.delete(file.linkFile);
        }*/

        //return this.deleteFromSuccessQueue(file);
        return DeleteSucceedQueuedAsset.call(this, file);
    }


    this._processedFiles.set(file);

    return  DeleteSucceedQueuedAsset.call(this, file);//this.deleteFromSuccessQueue(file);

  }