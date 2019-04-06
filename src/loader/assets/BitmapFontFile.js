import MultiAsset from './MultiAsset';
import AssetTypeHandler from "./AssetTypeHandler";
import ImageFile from './ImageFile';
import TextFile from './TextFile';
import AddAsset from "../components/AddAsset";
import AssetsType from '../AssetsType';

class BitmapFontFile extends MultiAsset {

  constructor(tag, fontUrl, imageUrl, xhrSettings, config) {

    let image = new ImageFile(tag, imageUrl, '', xhrSettings);
    let data = new TextFile(tag, fontUrl, '', xhrSettings);

    super(AssetsType.bitmapFont, tag, [data]);

  }

}

AssetTypeHandler.register('bitmapFont', function (tag, fontDataUrl, imageUrl, xhrSettings) {

  let multiAsset = new BitmapFontFile(tag, fontDataUrl, imageUrl, xhrSettings);

  AddAsset.call(this, multiAsset.assets);

  return this;
});

module.exports = BitmapFontFile;