import File from "../File";
import ObjectUtils from "../../utils/ObjectUtils";
import { LOADER_STATE, AssetTypeHandler } from "../LoaderState";
import AssetsType from "../AssetsType";

export default class JSONFile extends File {

    constructor(tag, url, path, xhrSettings, config) {

        var config = {
            type: AssetsType.json,
            ext: ObjectUtils.getValue(tag, 'ext', 'json'),
            responseType: 'text',
            tag: tag,
            url: ObjectUtils.getValue(tag, 'file', url),
            path: path,
            xhrSettings: ObjectUtils.getValue(tag, 'xhr', xhrSettings)
        };

        super(config);

        if (typeof config.url === 'object') {
            this.data = config.url;
            this.state = LOADER_STATE.DONE;
        }

    }

    onProcess(processingCallback) {
        this.state = LOADER_STATE.PROCESSING;
        this.data = JSON.parse(this.xhrLoader.responseText);
        this.onDone();
        callback(this);
    }

}

AssetTypeHandler.register('json', function (tag, url, path, xhrSettings) {
    this.addAsset(new JSONFile(tag, url, this.path, xhrSettings));
    return this;
});