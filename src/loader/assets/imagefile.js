
import { LOADER_STATE, AssetTypeHandler} from '../loaderstate'
import File from '../file'
import URLObject from '../URLobject'
import ObjectUtils from '../../utils/objectutils'
import PathUtils from '../../utils/pathutils'

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
            assetTag = ObjectUtils.getValue(tag, 'tag', '');
        }

        var fileConfig = {
            type: 'image',
            tag: assetTag,
            ext: ObjectUtils.getValue(tag, 'ext', PathUtils.getExtension(url)),
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


        URLObject.create(this.data, this.xhrRequest.response, 'image/' + this.config.ext);
    }

}

AssetTypeHandler.register('image', function (tag, url, path, xhrSettings, force)
{

    this.addAsset(new ImageFile(tag, url, this.path, xhrSettings), force);

    return this;

});

module.exports = ImageFile;