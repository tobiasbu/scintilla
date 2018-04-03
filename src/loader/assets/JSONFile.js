import File from "../File";
import ObjectGet from "../../utils/object/ObjectGet";
import LoaderState from "../LoaderState";
import AssetsType from "../AssetsType";
import AddAsset from "../components/AddAsset";
import AssetTypeHandler from "./AssetTypeHandler";

export default class JSONFile extends File {

    constructor(tag, url, path, xhrSettings, config) {

        let assetConfig = {
            type: AssetsType.json,
            ext: ObjectGet.value(tag, 'ext', 'json'),
            responseType: 'text',
            tag: tag,
            url: ObjectGet.value(tag, 'file', url),
            path: path,
            xhrSettings: ObjectGet.value(tag, 'xhr', xhrSettings)
        };

        super(assetConfig);

        if (typeof assetConfig.url === 'object') {
            this.data = assetConfig.url;
            this.state = LoaderState.DONE;
        }

    }

    onProcessing(processingCallback) {
        this.state = LoaderState.PROCESSING;
        this.data = JSON.parse(this.xhrRequest.responseText);
        this.onDone();
        processingCallback(this);
    }

}

AssetTypeHandler.register('json', function (tag, url, path, xhrSettings) {
    //this.addAsset(new JSONFile(tag, url, this.path, xhrSettings));
    AddAsset.call(this,new JSONFile(tag, url, this.path, xhrSettings));
    return this;
});