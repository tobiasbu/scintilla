
import { LOADER_STATE, AssetTypeHandler} from '../LoaderState'
import File from '../File'
import ObjectUtils from '../../utils/ObjectUtils'
import Path from '../../utils/Path'
import AssetsType from '../AssetsType';

export default class TextFile extends File {

    constructor(tag, url, path, xhrSettings, config)
    {
        let assetTag = null;
        
        if (typeof tag === 'string')
        {
            assetTag = tag;
        }
        else
        {
            assetTag = ObjectUtils.getValue(tag, 'tag', '');
        }

        let useExternal = false;

        if (path !== undefined)
        {
            if (typeof(path) === "boolean")
                useExternal = path;

            
        }

        var fileConfig = {
            type: AssetsType.text,
            tag: assetTag,
            ext: ObjectUtils.getValue(tag, 'ext', Path.getExtension(url)),
            url: ObjectUtils.getValue(tag, 'file', url),
            path: path,
            responseType: '',
            xhrSettings: ObjectUtils.getValue(tag, 'xhr', xhrSettings),
            config: ObjectUtils.getValue(tag, 'config', config),
            useExternal : useExternal
        };

        super(fileConfig);
    }
    
    //onLoad(event) {}

    /*onReadyStateChange(event)
    {

        console.log(event.target);
        if (this.xhrRequest.status == 200)
        {
            if (this.xhrRequest.readyState == 4)
            {
                this.state = LOADER_STATE.PROCESSING;
                //this.data = window.URL.createObjectURL(this.xhrRequest.response);
                this.data = this.xhrRequest.responseText;
                
                //console.log(this.data);
                this.onDone();

                //processingCallback(this);
                super.onLoad(event);
            }  
        } else {
            super.onLoad(event);
        }
    }*/

    onProcessing(processingCallback)
    {
        this.state = LOADER_STATE.PROCESSING;
            //this.data = window.URL.createObjectURL(this.xhrRequest.response);
            this.data = this.xhrRequest.responseText;
            /*var style = document.createElement('style');
            style.innerHTML = this.data;
            document.head.appendChild(style)*/
           // console.log("data:" + this.data);
            this.onDone();

            processingCallback(this);
    }

}

AssetTypeHandler.register('text', function (tag, url, path, xhrSettings)
{
    let endPointPath = this.path;

    if (path !== undefined)
    {
        
        if (typeof(path) === "boolean") // external link
            endPointPath = path;
        
    }

    this.addAsset(new TextFile(tag, url, endPointPath, xhrSettings));

    return this;

});

module.exports = TextFile;