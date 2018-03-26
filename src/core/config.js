
import ObjectUtils from '../utils/objectutils';

export default class Config {

    constructor(config)
    {
        if (config === undefined) 
            config = {};

        var callback = ObjectUtils.getValue;
        var callback_2 = ObjectUtils.getPropertyValue;

        // view and canvas
        this.width = callback(config, 'width', 640);
        this.height = callback(config, 'height', 480);
        this.parent = callback(config, 'parent', null);
        this.debug =  callback(config, 'debug', false);
        
        // loader
        this.loader = {
            baseURL : callback_2(config, 'loader.baseURL', ''),
            path : callback_2(config, 'loader.path', ''),
            responseType : callback_2(config, 'loader.responseType', ''),
            async : callback_2(config, 'loader.async', true),
        }

        this.fps = callback(config, 'fps', 60);

        this.time = {
            timeoutMode : callback_2(config, 'time.timeOutMode', false),
           
        }

        this.camera = {
            width : callback_2(config, 'camera.width', this.width),
            height : callback_2(config, 'camera.height', this.height)
        }

        this.pixelated = callback(config, 'pixelated', false);
        /* this.loaderEnableParallel = GetValue(config, 'loader.enableParallel', true);
            this.loaderMaxParallelDownloads = GetValue(config, 'loader.maxParallelDownloads', 4);
            this.loaderCrossOrigin = GetValue(config, 'loader.crossOrigin', undefined);
            
            this.loaderUser = GetValue(config, 'loader.user', '');
            this.loaderPassword = GetValue(config, 'loader.password', '');
    this.loaderTimeout = GetValue(config, 'loader.timeout', 0);*/


    }

}