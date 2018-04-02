import LoaderState from "../LoaderState";
import ProcessDoneAssets from "./ProcessDoneAssets";

export default function DeleteSucceedQueuedAsset(file) {
    
    this._successFiles.delete(file);

    if (this._successFiles.size === 0 && this.state === LoaderState.PROCESSING)
        ProcessDoneAssets.call(this);
        
}