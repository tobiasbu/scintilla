import File from "../File";
import ObjectUtils from "../../utils/ObjectUtils";
import AssetsType from "../AssetsType";
import Path from "../../utils/Path";
import LoaderState from "../LoaderState";
import AddAsset from "../components/AddAsset";
import AssetTypeHandler from "./AssetTypeHandler";

export default class ScriptFile extends File {

    constructor(tag, url, path, xhrSettings, config) {

        let tagFile = (typeof tag === 'string') ? tag : ObjectUtils.getValue(tag, 'key', '');

        let assetConfig = {
            type: AssetsType.script,
            ext: ObjectUtils.getValue(tag, 'ext', Path.getExtension(url) || 'js'),
            responseType: 'text',
            tag: tagFile,
            url: ObjectUtils.getValue(tag, 'file', url),
            path: path,
            xhrSettings: ObjectUtils.getValue(tag, 'xhr', xhrSettings)
        };

        super(assetConfig);

    }

    onPostLoad(loader, xhrLoader) {
        this.state = LoaderState.PROCESSING;

        

        // create the element
        this.data = document.createElement('script');
        this.data.language = 'javascript';
        this.data.type = 'text/javascript';
        this.data.defer = false;
        this.data.text = this.xhrRequest.responseText;

        // append to html document
        document.head.appendChild(this.data);

        this.loader.event.dispatch('onpostload_' + this.tag);

        //this.onDone();

        //processingCallback(this);
    }

}

AssetTypeHandler.register('script', function (tag, url, path, xhrSettings) {
    //this.addAsset(new ScriptFile(tag, url, this.path, xhrSettings));
    AddAsset.call(this, new ScriptFile(tag, url, this.path, xhrSettings));
    return this;
});