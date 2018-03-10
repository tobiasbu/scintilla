
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
        this.data = null;
        this.source = null;
        this.xhrRequest = null;
        this.config = tobi.Utils.getValue(config,'config',{});

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

            loader.nextFile(this);
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

    this.onLoad = function()
    {
        console.log("LOADED");
    }

    this.onError = function()
    {
        console.log("ERROR");
    }

    this.onDone = function()
    {
        console.log("DONE");
    }

    this.onProgress = function()
    {
        console.log("PROGRESS");
    }

    this.reset = function()
    {
        this.xhrRequest.onload = undefined;
        this.xhrRequest.onerror = undefined;
        this.xhrRequest.onprogress = undefined;
    }


});

