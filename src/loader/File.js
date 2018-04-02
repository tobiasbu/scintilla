
import ObjectUtils from '../utils/ObjectUtils'
import XHR from './XHR'
import LoaderState from './LoaderState'
import AssetsType from './AssetsType';
import NextAsset from './components/NextAsset';

export default class File {

    constructor(config) {

        this.type = ObjectUtils.getValue(config, 'type', null);
        this.tag = ObjectUtils.getValue(config, 'tag', null);
        this.useExternal =  ObjectUtils.getValue(config, 'useExternal', false);

        if (this.type == null || this.tag == null)
        {
            throw new Error('Loader.File: Invalid tag \"' + tag + "\".");
        }

        this.url = ObjectUtils.getValue(config, 'url', undefined);

        if (this.url === undefined)
            this.url = ObjectUtils.getValue(config, 'path', '') + this.tag + '.' + ObjectUtils.getValue(config, 'ext', '');
        else if (typeof(this.url) !== 'function')
        {
            if (!this.useExternal || this.useExternal !== undefined)
                this.url = ObjectUtils.getValue(config, 'path', '').concat(this.url);

        }

        // Web fonts is managed by WebFontLoader provided by google
        // There is no need to create XHR settings and request
        if (this.type !== AssetsType.webFont) {

            this.xhrSettings = XHR.createSettings(ObjectUtils.getValue(config, 'responseType', undefined));
            
            if (ObjectUtils.getValue(config, 'xhrSettings', false))
                this.xhrSettings = XHR.merge(this.xhrSettings, ObjectUtils.getValue(config, 'xhrSettings', {}));
        }


        this.loader = null;
        this.state = LoaderState.PENDING;
        this.totalBytes = 0;
        this.loadedBytes = 0;
        this.progress = 0;
        this.data = undefined;
        this.source = null;
        this.xhrRequest = null;
        this.config = ObjectUtils.getValue(config,'config',{});
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

            this.source = ObjectUtils.getURL(this.url, gameLoader.baseURL);
            
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
       
        this.XHRreset();

        if (event.target && event.target.status !== 200)
        {
            //this.loader.next(this, true);
            NextAsset.call(this.loader, this);

        } else {
            
            if (this.onPostLoad !== undefined)
                this.onPostLoad(this.loader, this.xhrRequest);

            //this.loader.next(this, false);
            NextAsset.call(this.loader, this);
        }
      
    }

    onError(event)
    {
        console.error("Loader.File: Error on load file: " + this.url + ".")

        this.XHRreset();

        //this.loader.next(this, true);
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

        this.loader.event.dispatch('oncomplete_' + this.tag);

    }

    onProcessing(processingCallback)
    {
        this.state = LoaderState.PROCESSING;

        this.onDone();

        processingCallback(this);
    }


    XHRreset()
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

