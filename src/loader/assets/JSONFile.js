import File from "../File";
import ObjectUtils from "../../utils/ObjectUtils";
import { LOADER_STATE, AssetTypeHandler } from "../LoaderState";
import AssetsType from "../AssetsType";

export default class JSONFile extends File {

    constructor(tag, url, path, xhrSettings, config) {

        let assetConfig = {
            type: AssetsType.json,
            ext: ObjectUtils.getValue(tag, 'ext', 'json'),
            responseType: 'text',
            tag: tag,
            url: ObjectUtils.getValue(tag, 'file', url),
            path: path,
            xhrSettings: ObjectUtils.getValue(tag, 'xhr', xhrSettings)
        };

        super(assetConfig);

        if (typeof assetConfig.url === 'object') {
            this.data = assetConfig.url;
            this.state = LOADER_STATE.DONE;
        }

    }

    onProcessing(processingCallback) {
        this.state = LOADER_STATE.PROCESSING;
        this.data = JSON.parse(this.xhrRequest.responseText);
        this.onDone();
        processingCallback(this);
    }

}

AssetTypeHandler.register('json', function (tag, url, path, xhrSettings) {
    this.addAsset(new JSONFile(tag, url, this.path, xhrSettings));
    return this;
});