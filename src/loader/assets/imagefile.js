

scintilla.ImageFile = scintilla.File.extend(function() {

this.constructor = function(tag, url, path, xhrSettings, config)
{
    var assetTag = null;
    
    if (typeof tag === 'string')
    {
        assetTag = tag;
    }
    else
    {
        assetTag = scintilla.Utils.getValue(tag, 'tag', '');
    }

    var fileConfig = {
        type: 'image',
        tag: assetTag,
        ext: scintilla.Utils.getValue(tag, 'ext', scintilla.Utils.getFileExtension(url)),
        url: scintilla.Utils.getValue(tag, 'file', url),
        path: path,
        responseType: 'blob',
        xhrSettings: scintilla.Utils.getValue(tag, 'xhr', xhrSettings),
        config: scintilla.Utils.getValue(tag, 'config', config)
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

        scintilla.URLObject.revoke(self.data);

        self.onDone();

        processingCallback(self);
    };

    this.data.onerror = function () {

        scintilla.URLObject.revoke(self.data);

        self.state = LOADER_STATE.ERROR;

        processingCallback(self);

    };


    scintilla.URLObject.create(this.data, this.xhrRequest.response, 'image/' + this.config.ext);
}

});

AssetTypeHandler.register('image', function (tag, url, path, xhrSettings)
{


    this.addAsset(new scintilla.ImageFile(tag, url, this.path, xhrSettings));

    return this;

});