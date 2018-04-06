
import File from "../File";
import ObjectGet from "../../utils/object/ObjectGet";
import AssetsType from "../AssetsType";
import Path from "../../utils/Path";
import LoaderState from "../LoaderState";
import AddAsset from "../components/AddAsset";
import AssetTypeHandler from "./AssetTypeHandler";
import URLObject from '../URLObject'

export default class SVGFile extends File {

    constructor(tag, url, path, xhrSettings) {

        var tag = (typeof tag === 'string') ? tag : ObjectGet.value(tag, 'key', '');

        let assetConfig = {
            type: AssetsType.svg,
            ext: ObjectGet.value(tag, 'ext', Path.getExtension(url) || 'svg'),
            responseType: 'text',
            tag: tagFile,
            url: ObjectGet.value(tag, 'file', url),
            path: path,
            xhrSettings: ObjectGet.value(tag, 'xhr', xhrSettings)
        };

        super(assetConfig);

    }

    onProcessing(processingCallback) {
        this.state = LoaderState.PROCESSING;

        let self = this;
        let svg = [ this.xhrLoader.responseText ];
        let blob;

        try {
            blob = new window.Blob(svg, { type: 'image/svg+xml;charset=utf-8' });
        } catch (e) {
            self.state = LoaderState.ERROR;
            processingCallback(self);
            return;
        }


        this.data = new Image();
        this.data.crossOrigin = this.crossOrigin;
       
        this.data.onload = function () {

            URLObject.revoke(self.data);

            self.onDone();

            processingCallback(self);
        };

        this.data.onerror = function () {

            URLObject.revoke(self.data);

            console.warn("Loader.SVGFile: Error on load file: " + self.url + ".")

            self.state = LoaderState.ERROR;

            processingCallback(self);

        };

        URLObject.createFromResponse(this.data, blob, 'image/svg+xml');
    }

}

AssetTypeHandler.register('svg', function (tag, url, path, xhrSettings) {
    AddAsset.call(this,new SVGFile(tag, url, this.path, xhrSettings));
    return this;
});