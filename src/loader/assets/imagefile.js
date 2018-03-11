
import { LOADER_STATE, AssetTypeHandler} from '../loaderstate'
import File from '../file'
import URLObject from '../URLobject'
import Utils from '../../utils/utils'

export default class ImageFile extends File {
    

    constructor(tag, url, path, xhrSettings, config)
    {
        var assetTag = null;
        
        if (typeof tag === 'string')
        {
            assetTag = tag;
        }
        else
        {
            assetTag = Utils.getValue(tag, 'tag', '');
        }

        var fileConfig = {
            type: 'image',
            tag: assetTag,
            ext: Utils.getValue(tag, 'ext', Utils.getFileExtension(url)),
            url: Utils.getValue(tag, 'file', url),
            path: path,
            responseType: 'blob',
            xhrSettings: Utils.getValue(tag, 'xhr', xhrSettings),
            config: Utils.getValue(tag, 'config', config)
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

            self.state = LOADER_STATE.ERROR;

            processingCallback(self);

        };


        URLObject.create(this.data, this.xhrRequest.response, 'image/' + this.config.ext);
    }

}

AssetTypeHandler.register('image', function (tag, url, path, xhrSettings)
{


    this.addAsset(new ImageFile(tag, url, this.path, xhrSettings));

    return this;

});

module.exports = ImageFile;