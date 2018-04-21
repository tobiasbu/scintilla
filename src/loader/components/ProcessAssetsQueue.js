import LoaderState from "../LoaderState";

export default function ProcessAssetsQueue() {

    let self = this;

    this._filesQueue.each(function(file) {

      if (file.state === LoaderState.FINISHED ||
         file.state === LoaderState.PENDING) //  && this.inflight.size < this.maxParallelDownloads))
      {
        

        self._filesLoading.insert(file);

        self._filesQueue.erase(file);

        self.loadAsset(file);
      }

    });

}