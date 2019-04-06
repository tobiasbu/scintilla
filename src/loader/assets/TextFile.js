
import LoaderState from '../LoaderState'
import File from '../File'
import ObjectGet from '../../utils/object/ObjectGet'
import Path from '../../utils/Path'
import AssetsType from '../AssetsType';
import AddAsset from '../components/AddAsset';
import AssetTypeHandler from './AssetTypeHandler';

export default class TextFile extends File {

  constructor(tag, url, path, xhrSettings, config) {
    let assetTag = null;

    if (typeof tag === 'string') {
      assetTag = tag;
    }
    else {
      assetTag = ObjectGet.value(tag, 'tag', '');
    }

    let useExternal = false;

    if (path !== undefined) {
      if (typeof (path) === "boolean")
        useExternal = path;


    }

    let assetConfig = {
      type: AssetsType.text,
      tag: assetTag,
      ext: ObjectGet.value(tag, 'ext', Path.getExtension(url) || 'txt'),
      url: ObjectGet.value(tag, 'file', url),
      path: path,
      responseType: 'text',
      xhrSettings: ObjectGet.value(tag, 'xhr', xhrSettings),
      config: ObjectGet.value(tag, 'config', config),
      useExternal: useExternal
    };

    super(assetConfig);
  }

  onProcessing(processingCallback) {
    this.state = LoaderState.PROCESSING;
    //this.data = window.URL.createObjectURL(this.xhrRequest.response);
    this.data = this.xhrRequest.responseText;
    /*var style = document.createElement('style');
    style.innerHTML = this.data;
    document.head.appendChild(style)*/
    // console.log("data:" + this.data);
    this.onDone();

    processingCallback(this);
  }

}

AssetTypeHandler.register('text', function (tag, url, path, xhrSettings) {
  let endPointPath = this.path;

  if (path !== undefined) {

    if (typeof (path) === "boolean") // external link
      endPointPath = path;

  }

  AddAsset.call(this, new TextFile(tag, url, endPointPath, xhrSettings));
  //this.addAsset(new TextFile(tag, url, endPointPath, xhrSettings));

  return this;

});

module.exports = TextFile;