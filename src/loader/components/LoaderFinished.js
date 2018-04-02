import LoaderState from "../LoaderState";
import ProcessDoneAssets from "./ProcessDoneAssets";
import AssetProcessingUpdate from "./AssetProcessingUpdate";

export default function LoaderFinished() {

    if (this.state === LoaderState.PROCESSING)
        return;
  
    this.progress = 1;
    this.isDownloading = false;
    this.state = LoaderState.PROCESSING;

    this._processedFiles.clear();

    if (this._successFiles.size === 0)
    {
        ProcessDoneAssets.call(this);// this.processingDone();

    } else {
     
      this._successFiles.each(function(file) {
        file.onProcessing(AssetProcessingUpdate.bind(this));
      },this);
    }
   
  }