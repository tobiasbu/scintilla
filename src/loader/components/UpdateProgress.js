
export default function UpdateProgress() {

    //var progress = 0;

    if (this._filesQueueCount != 0) {
      this.progress = 1 - (this._loadedFilesCount / this._filesQueueCount);
    } 
     //progress = parseFloat(this._successCount) / parseFloat(this._filesQueueCount);

    //this.progress = progress;

}