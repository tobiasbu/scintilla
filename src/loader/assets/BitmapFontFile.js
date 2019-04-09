import MultiAsset from './MultiAsset';
import AssetTypeHandler from "./AssetTypeHandler";
import ImageFile from './ImageFile';
import TextFile from './TextFile';
import AddAsset from "../components/AddAsset";
import AssetsType from '../AssetsType';

class BitmapFontFile extends MultiAsset {

  constructor(tag, fontUrl, imageUrl, xhrSettings, config) {

    let image;
    let data = new TextFile(tag, fontUrl, '', xhrSettings);
    let files;
    if (!Array.isArray(imageUrl)) {
      image = new ImageFile(tag, imageUrl, '', xhrSettings);
      files = [data, image];
    } else {
      files = [data];
      for (let i = 0; i < imageUrl.length; i += 1) {
        files.push(new ImageFile(`${tag}_${i}`, imageUrl[i], '', xhrSettings))
      }
    }

    super(AssetsType.bitmapFont, tag, files);

  }

}

AssetTypeHandler.register('bitmapFont', function (tag, fontDataUrl, imageUrl, xhrSettings) {

  let multiAsset = new BitmapFontFile(tag, fontDataUrl, imageUrl, xhrSettings);

  AddAsset.call(this, multiAsset.assets);

  return this;
});

module.exports = BitmapFontFile;