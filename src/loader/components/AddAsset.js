import AssetsType from "../AssetsType";
import ScriptFile from "../assets/ScriptFile";

let webFontLoader = null;

const webFontLoaderChecker = function (loader, asset) {

  if (asset.type !== AssetsType.webFont)
    return;

  if (webFontLoader !== null)
    return;

  if (WebFont !== undefined)
    return;

  webFontLoader = new ScriptFile('webFontLoader', "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js");
  loader._filesQueue.insert(webFontLoader);
  loader._filesQueueCount++;

  loader.game.events.create('file_postload_webFontLoader').subscribeOnce(
    () => {
      asset.fontLoad();
    });


};

/**
 * 
 * @param {File|File[]} asset 
 * @param {boolean} check 
 * @this {Loader}
 * @return {void}
 */
export default function AddAsset(asset, check) {

  if (check === undefined) check = true;

  if (!this.isOK() && check)
    return -1;

  if (!Array.isArray(asset)) {

    // is if web font, we should load the WebFontLoader
    webFontLoaderChecker(this, asset);

    asset.path = this.path;
    this._filesQueue.insert(asset);
    this._filesQueueCount++;
    // return asset;

  } else {

    
    for (let i = 0; i < asset.length; i += 1) {
      asset[i].path = this.path;
      this._filesQueue.insert(asset[i]);
      this._filesQueueCount++;
    }

  }



}