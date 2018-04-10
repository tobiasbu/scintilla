
import ObjectGet from '../utils/object/ObjectGet'
import XHR from './XHR'
import LoaderState from './LoaderState'
import AssetsType from './AssetsType';
import NextAsset from './components/NextAsset';
import Path from '../utils/Path'

export default class File {

    constructor(config) {

        this.type = ObjectGet.value(config, 'type', null);
        this.tag = ObjectGet.value(config, 'tag', null);
        this.useExternal =  ObjectGet.value(config, 'useExternal', false);

        if (this.type == null || this.tag == null)
        {
            throw new Error('Loader.File: Invalid tag \"' + tag + "\".");
        }

        this.url = ObjectGet.value(config, 'url', undefined);

        if (this.url === undefined)
            this.url = ObjectGet.value(config, 'path', '') + this.tag + '.' + ObjectGet.value(config, 'ext', '');
        else if (typeof(this.url) !== 'function')
        {
            if (!this.useExternal || this.useExternal !== undefined)
                this.url = ObjectGet.value(config, 'path', '').concat(this.url);

        }

        // Web fonts is managed by WebFontLoader provided by google
        // There is no need to create XHR settings and request
        if (this.type !== AssetsType.webFont) {

            this.xhrSettings = XHR.createSettings(ObjectGet.value(config, 'responseType', undefined));
            
            if (ObjectGet.value(config, 'xhrSettings', false))
                this.xhrSettings = XHR.merge(this.xhrSettings, ObjectGet.value(config, 'xhrSettings', {}));
        }


        this.loader = null;
        this.state = LoaderState.PENDING;
        this.totalBytes = 0;
        this.loadedBytes = 0;
        this.progress = 0;
        this.data = undefined;
        this.source = null;
        this.xhrRequest = null;
        this.config = ObjectGet.value(config,'config',{});
        this.crossOrigin = undefined;

        this.onComplete = undefined;

    }

    load(gameLoader) {
        this.loader = gameLoader;

        if (this.state === LoaderState.FINISHED) {
            this.onDone();

            NextAsset.call(this.loader, this);
            //this.loader.next(this);
            
        }
        else
        {

            this.source = Path.getURL(this.url, gameLoader.baseURL);
            
            if (this.source.indexOf('data:') === 0 || this.source == null)
            {
                console.warn("Loader.File.load: unsupported URI.");
            }
            else
            {
                this.xhrRequest = XHR.createFileRequest(this, gameLoader.xhr);
            }
        }

    }

    onLoad(event) {
       
        this.clearXHR();

        if (event.target && event.target.status !== 200)
        {
            NextAsset.call(this.loader, this);

        } else {
            
            if (this.onPostLoad !== undefined)
                this.onPostLoad(this.loader, this.xhrRequest);

            NextAsset.call(this.loader, this);
        }
      
    }

    onError(event)
    {
        console.error("Loader.File: Error on load file: \"" + this.url + "\".")

        this.clearXHR();

        NextAsset.call(this.loader, this);
    }

    onProgress(event)
    {
        if (event.lengthComputable)
        {
            this.loadedBytes = event.loaded;
            this.totalBytes = event.total;

            this.progress = Math.min((this.loadedBytes / this.totalBytes), 1);

        }
    }

    onDone() {
        this.state = LoaderState.DONE;

        this.loader.events.dispatch('oncomplete_' + this.tag);

    }

    onProcessing(processingCallback)
    {
        this.state = LoaderState.PROCESSING;

        this.onDone();

        processingCallback(this);
    }


    clearXHR()
    {
        if (this.xhrRequest)
        {
            this.xhrRequest.onload = undefined;
            this.xhrRequest.onerror = undefined;
            this.xhrRequest.onprogress = undefined;
            //this.xhrRequest.onreadystatechange = undefined;
        }
    }


}

