import File from "../File";
import ObjectGet from "../../utils/object/ObjectGet";
import AssetsType from "../AssetsType";
import Path from "../../utils/Path";
import LoaderState from "../LoaderState";
import AddAsset from "../components/AddAsset";
import AssetTypeHandler from "./AssetTypeHandler";

export default class ScriptFile extends File {

    constructor(tag, url, path, xhrSettings, config) {

        let tagFile = (typeof tag === 'string') ? tag : ObjectGet.value(tag, 'key', '');

        let assetConfig = {
            type: AssetsType.script,
            ext: ObjectGet.value(tag, 'ext', Path.getExtension(url) || 'js'),
            responseType: 'text',
            tag: tagFile,
            url: ObjectGet.value(tag, 'file', url),
            path: path,
            xhrSettings: ObjectGet.value(tag, 'xhr', xhrSettings)
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

        this.loader.events.dispatch('onpostload_' + this.tag);

        //this.onDone();

        //processingCallback(this);
    }

}

AssetTypeHandler.register('script', function (tag, url, path, xhrSettings) {
    //this.addAsset(new ScriptFile(tag, url, this.path, xhrSettings));
    AddAsset.call(this, new ScriptFile(tag, url, this.path, xhrSettings));
    return this;
});