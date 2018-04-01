
import { LOADER_STATE, AssetTypeHandler} from '../LoaderState'
import File from '../File'
import URLObject from '../URLObject'
import ObjectUtils from '../../utils/ObjectUtils'
import Path from '../../utils/Path'
import AssetsType from '../AssetsType';

export default class ImageFile extends File {
    

    constructor(tag, url, path, xhrSettings, config)
    {
        let assetTag = null;
        
        if (typeof tag === 'string')
        {
            assetTag = tag;
        }
        else
        {
            assetTag = ObjectUtils.getValue(tag, 'tag', '');
        }

        let fileConfig = {
            type: AssetsType.image,
            tag: assetTag,
            ext: ObjectUtils.getValue(tag, 'ext', Path.getExtension(url)),
            url: ObjectUtils.getValue(tag, 'file', url),
            path: path,
            responseType: 'blob',
            xhrSettings: ObjectUtils.getValue(tag, 'xhr', xhrSettings),
            config: ObjectUtils.getValue(tag, 'config', config)
        };

        super(fileConfig);
    }

    onProcessing(processingCallback)
    {
        this.state = LOADER_STATE.PROCESSING;
        this.data = new Image();
        this.data.crossOrigin = this.crossOrigin;


        var self = this;

        this.data.onload = function () {

            URLObject.revoke(self.data);

            self.onDone();

            processingCallback(self);
        };

        this.data.onerror = function () {

            URLObject.revoke(self.data);

            console.warn("Loader.ImageFile: Error on load file: " + self.url + ".")

            self.state = LOADER_STATE.ERROR;

            processingCallback(self);

        };


        URLObject.createFromResponse(this.data, this.xhrRequest.response, 'image/' + this.config.ext);
    }

}

AssetTypeHandler.register('image', function (tag, url, path, xhrSettings, force)
{

    this.addAsset(new ImageFile(tag, url, this.path, xhrSettings), force);

    return this;

});

module.exports = ImageFile;