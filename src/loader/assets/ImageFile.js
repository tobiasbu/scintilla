
import LoaderState from '../LoaderState'
import File from '../File'
import URLObject from '../URLObject'
import ObjectGet from '../../utils/object/ObjectGet'
import Path from '../../utils/Path'
import AssetsType from '../AssetsType';
import AddAsset from '../components/AddAsset';
import AssetTypeHandler from './AssetTypeHandler';

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
            assetTag = ObjectGet.value(tag, 'tag', '');
        }

        let fileConfig = {
            type: AssetsType.image,
            tag: assetTag,
            ext: ObjectGet.value(tag, 'ext', Path.getExtension(url)),
            url: ObjectGet.value(tag, 'file', url),
            path: path,
            responseType: 'blob',
            xhrSettings: ObjectGet.value(tag, 'xhr', xhrSettings),
            config: ObjectGet.value(tag, 'config', config)
        };

        super(fileConfig);
    }

    onProcessing(processingCallback)
    {
        this.state = LoaderState.PROCESSING;
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

            self.state = LoaderState.ERROR;

            processingCallback(self);

        };


        URLObject.createFromResponse(this.data, this.xhrRequest.response, 'image/' + this.config.ext);
    }

}

AssetTypeHandler.register('image', function (tag, url, path, xhrSettings, force)
{

    AddAsset.call(this, new ImageFile(tag, url, this.path, xhrSettings), force);

    return this;

});

module.exports = ImageFile;