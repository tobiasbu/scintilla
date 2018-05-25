import AssetsType from "../AssetsType";
import ScriptFile from "../assets/ScriptFile";

let webFontLoader = null;

const webFontLoaderChecker = function(loader, asset) {

    if (asset.type !== AssetsType.webFont)
        return;

    if (webFontLoader !== null)
        return;

    webFontLoader = new ScriptFile('webFontLoader',"https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js");
    loader._filesQueue.insert(webFontLoader);
    loader._filesQueueCount++;

    loader.game.events.create('file_postload_webFontLoader').subscribeOnce(
        () => {
        asset.fontLoad();
        });


};

export default function AddAsset(asset, check) {

    if (check === undefined) check = true;

    if (!this.isOK() && check)
        return -1;

    // is if web font, we should load the WebFontLoader
    webFontLoaderChecker(this, asset);


    asset.path = this.path;
    this._filesQueue.insert(asset);
    this._filesQueueCount++;
    return asset;

}