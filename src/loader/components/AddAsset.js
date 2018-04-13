import AssetsType from "../AssetsType";
import ScriptFile from "../assets/ScriptFile";

export default function AddAsset(asset, check) {

    if (check === undefined) check = true;

    if (!this.isOK() && check)
        return -1;

    // is if web font, we should load the WebFontLoader
    if (asset.type === AssetsType.webFont && this.webFontLoader === undefined) {

      this.webFontLoader = new ScriptFile('webFontLoader',"https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js");
      this._filesQueue.set(this.webFontLoader);
      this._filesQueueCount++;



      this.events.create('onpostload_webFontLoader').subscribeOnce(
        () => {
        asset.fontLoad();
        });
      
    }


    asset.path = this.path;
    this._filesQueue.set(asset);
    this._filesQueueCount++;
    return asset;

}