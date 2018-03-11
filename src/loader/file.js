
Scintilla.File = Class.extend(function() {

    this.constructor = function(config) {

        this.type = Scintilla.Utils.getValue(config, 'type', null);
        this.tag = Scintilla.Utils.getValue(config, 'tag', null);

        if (this.type == null || this.tag == null)
        {
            throw new Error('Loader.File: Invalid tag \"' + tag + "\".");
        }

        this.url = Scintilla.Utils.getValue(config, 'url', null);

        if (this.url === undefined)
            this.url = Scintilla.Utils.getValue(config, 'path', '') + this.tag + '.' + GetFastValue(config, 'ext', '');
        else
            this.url = Scintilla.Utils.getValue(config, 'path', '').concat(this.url);

        this.xhrSettings = Scintilla.XHR.createSettings(Scintilla.Utils.getValue(config, 'responseType', undefined));
        
        if (Scintilla.Utils.getValue(config, 'xhrSettings', false))
            this.xhrSettings = Scintilla.XHR.merge(this.xhrSettings, Scintilla.Utils.getValue(config, 'xhrSettings', {}));

        
        console.log(this.xhrSettings);

        this.loader = null;
        this.state = LOADER_STATE.PENDING;
        this.totalBytes = 0;
        this.loadedBytes = 0;
        this.progress = 0;
        this.data = undefined;
        this.source = null;
        this.xhrRequest = null;
        this.config = Scintilla.Utils.getValue(config,'config',{});
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
           

            this.source = Scintilla.Utils.getURL(this.url, gameLoader.baseURL);

            
            if (this.source.indexOf('data:') === 0 || this.source == null)
            {
                console.warn("Loader.File.load: unsupported URI.");
            }
            else
            {
                this.xhrRequest = Scintilla.XHR.createFileRequest(this, gameLoader.xhr);
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

