

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

this.onProcessing = function()
{
    this.state = LOADER_STATE.PROCESSING;
    this.data = new Image();

    var self = this;

    this.data.onload = function () {

        tobi.URLObject.revoke(self.data);

        self.onDone();
           /*if (file.data.onload)
           {
               //file.data.onload = null;
               //file.data.onerror = null;
               self.fileLogComplete(file);
           }*/
    };

    this.data.onerror = function () {

        tobi.URLObject.revoke(self.data);

        self.state = LOADER_STATE.ERROR;
            /*if (file.data.onload)
            {
                //file.data.onload = null;
                //file.data.onerror = null;
               
                self.fileLogError(file);
            }*/
    };

    tobi.URLObject.create(this.data, null, 'image/' + this.config.ext);
}

});

AssetTypeHandler.register('image', function (tag, url, path, xhrSettings)
{


    this.addAsset(new tobi.ImageFile(tag, url, this.path, xhrSettings));

    return this;

});