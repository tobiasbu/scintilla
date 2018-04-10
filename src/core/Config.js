
import ObjectGet from '../utils/object/ObjectGet';

export default class Config {

    constructor(config)
    {
        if (config === undefined) 
            config = {};

        var callback = ObjectGet.value;
        var callback_2 = ObjectGet.propertyValue;

        // view and canvas
        this.width = callback(config, 'width', 640);
        this.height = callback(config, 'height', 480);
        this.parent = callback(config, 'parent', null);
        this.debug =  callback(config, 'debug', false);
        this.pixelated = callback(config, 'pixelated', false);
        this.doubleBuffer = callback(config, 'doubleBuffer', true);

        this.roundPixels = callback(config, 'roundPixels', false);
        this.floorTiles = callback(config, 'floorTiles', false),

        // loader
        this.loader = {
            baseURL : callback_2(config, 'loader.baseURL', ''),
            path : callback_2(config, 'loader.path', ''),
            responseType : callback_2(config, 'loader.responseType', ''),
            async : callback_2(config, 'loader.async', true),
        };

        this.audio = {
            noAudio : callback_2(config, 'audio.noAudio', false),
            context : callback_2(config, 'audio.context', null),
            webAudio : callback_2(config, 'audio.webAudio', true),
        }

        this.fps = callback(config, 'fps', 60);
        this.time = {
            timeoutMode : callback_2(config, 'time.timeOutMode', false),
        };

        this.camera = {
            width : callback_2(config, 'camera.width', this.width),
            height : callback_2(config, 'camera.height', this.height)
        };

       
        /* this.loaderEnableParallel = GetValue(config, 'loader.enableParallel', true);
            this.loaderMaxParallelDownloads = GetValue(config, 'loader.maxParallelDownloads', 4);
            this.loaderCrossOrigin = GetValue(config, 'loader.crossOrigin', undefined);
            
            this.loaderUser = GetValue(config, 'loader.user', '');
            this.loaderPassword = GetValue(config, 'loader.password', '');
    this.loaderTimeout = GetValue(config, 'loader.timeout', 0);*/


    }

}