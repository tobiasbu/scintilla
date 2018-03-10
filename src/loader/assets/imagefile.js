

tobi.ImageFile = tobi.File.extend(function() {

this.constructor = function(tag, url, path, xhrSettings, config)
{
    var assetTag = null;
    
    if (typeof tag === 'string')
    {
        assetTag = tag;
    }
    else
    {
        assetTag = tobi.Utils.getValue(tag, 'tag', '');
    }

    var fileConfig = {
        type: 'image',
        tag: assetTag,
        ext: tobi.Utils.getValue(tag, 'ext', tobi.Utils.getFileExtension(url)),
        url: tobi.Utils.getValue(tag, 'file', url),
        path: path,
        responseType: 'blob',
        xhrSettings: tobi.Utils.getValue(tag, 'xhr', xhrSettings),
        config: tobi.Utils.getValue(tag, 'config', config)
    };

    this.super(fileConfig);
}

this.onProcessing = function(processingCallback)
{
    this.state = LOADER_STATE.PROCESSING;
    this.data = new Image();
    this.data.crossOrigin = this.crossOrigin;


    var self = this;

    this.data.onload = function () {

        tobi.URLObject.revoke(self.data);

        self.onDone();

        processingCallback(self);
    };

    this.data.onerror = function () {

        tobi.URLObject.revoke(self.data);

        self.state = LOADER_STATE.ERROR;

        processingCallback(self);

    };


    tobi.URLObject.create(this.data, this.xhrRequest.response, 'image/' + this.config.ext);
}

});

AssetTypeHandler.register('image', function (tag, url, path, xhrSettings)
{


    this.addAsset(new tobi.ImageFile(tag, url, this.path, xhrSettings));

    return this;

});