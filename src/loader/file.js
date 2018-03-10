
tobi.File = Class.extend(function() {

    this.constructor = function(config) {

        this.type = tobi.Utils.getValue(config, 'type', null);
        this.tag = tobi.Utils.getValue(config, 'tag', null);

        if (this.type == null || this.tag == null)
        {
            throw new Error('Loader.File: Invalid tag \"' + tag + "\".");
        }

        this.url = tobi.Utils.getValue(config, 'url', null);

        if (this.url === undefined)
            this.url = tobi.Utils.getValue(config, 'path', '') + this.tag + '.' + GetFastValue(config, 'ext', '');
        else
            this.url = tobi.Utils.getValue(config, 'path', '').concat(this.url);

        this.xhrSettings = tobi.XHR.createSettings(tobi.Utils.getValue(config, 'responseType', undefined));
        
        if (tobi.Utils.getValue(config, 'xhrSettings', false))
            this.xhrSettings = tobi.XHR.merge(this.xhrSettings, tobi.Utils.getValue(config, 'xhrSettings', {}));

        
        console.log(this.xhrSettings);

        this.loader = null;
        this.state = LOADER_STATE.PENDING;
        this.totalBytes = 0;
        this.loadedBytes = 0;
        this.progress = 0;
        this.data = undefined;
        this.source = null;
        this.xhrRequest = null;
        this.config = tobi.Utils.getValue(config,'config',{});
        this.crossOrigin = undefined;

        // callbacks
        //loaded: false,
        //error: false,
        //loading:false,

    }


    this.load = function(gameLoader)
    {
        this.loader = gameLoader;


        if (this.state === LOADER_STATE.FINISHED)
        {
            this.onDone();

            this.loader.nextFile(this);
        }
        else
        {
           

            this.source = tobi.Utils.getURL(this.url, gameLoader.baseURL);

            
            if (this.source.indexOf('data:') === 0 || this.source == null)
            {
                console.warn("Loader.File.load: unsupported URI.");
            }
            else
            {
                this.xhrRequest = tobi.XHR.createFileRequest(this, gameLoader.xhr);
            }
        }

    }

    this.onLoad = function(event)
    {
        this.XHRreset();

        if (event.target && event.target.status !== 200)
            this.loader.next(this, true);
        else
            this.loader.next(this, false);

    }

    this.onError = function()
    {
        this.XHRreset();

        this.loader.next(this, true);
    }

    this.onProgress = function(event)
    {
        if (event.lengthComputable)
        {
            this.loadedBytes = event.loaded;
            this.totalBytes = event.total;

            this.progress = Math.min((this.loadedBytes / this.totalBytes), 1);

            //this.loader.emit('fileprogress', this, this.progress);
        }
    }

    this.onDone = function()
    {
        this.state = LOADER_STATE.DONE;
    }

    this.onProcessing = function(processingCallback)
    {
        this.state = LOADER_STATE.PROCESSING;

        this.onDone();

        processingCallback(this);
    }


    this.XHRreset = function()
    {
        this.xhrRequest.onload = undefined;
        this.xhrRequest.onerror = undefined;
        this.xhrRequest.onprogress = undefined;
    }


});

