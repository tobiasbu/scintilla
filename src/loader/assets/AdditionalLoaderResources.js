import AssetTypeHandler from "./AssetTypeHandler";
import AssetsType from "../AssetsType";
import AddAsset from "../components/AddAsset";
import File from "../File";
import LoaderState from "../LoaderState";
import NextAsset from "../components/NextAsset";



export default class AdditionalLoaderResource extends File {

    constructor(tag, type, config) {

        config.type = type;

        let assetConfig = {
            type: type,
            tag: tag,
            config: config
        };

        super(assetConfig);
    }

    load(gameLoader) {
        this.loader = gameLoader;

        if (this.state === LoaderState.FINISHED) {
            this.onDone();

        }
        /// Do nothing
        NextAsset.call(this.loader, this);

    }

    onProcessing(processingCallback) {

        this.state = LoaderState.PROCESSING;
       
        this.data = this.config;
        
        this.onDone();

        processingCallback(this);
    }

}


AssetTypeHandler.register('spritesheet', function (tag, imageTag, config) {

    let resource;
    let options = config;

    if (!Array.isArray(config)) {

        options = Array.prototype.slice.call(arguments, 2, arguments.length - 2);

    }

        resource = new AdditionalLoaderResource(tag, AssetsType.spritesheet, {
            imageTag: imageTag,
            x: options[0] || 0,
            y: options[1] || 0,
            frameWidth: options[2] || 0,
            frameHeight: options[3] || 0,
            numberOfImages: options[4] || 0,
            framesPerRow: options[5] || undefined,
            spacing: options[6] || undefined,
            duration: options[7] || arguments[3],
        });


    AddAsset.call(this, resource);

    return this;
});

AssetTypeHandler.register('animMachine', function (tag, animations) {

    let resource = new AdditionalLoaderResource(tag, AssetsType.animMachine, {
        animations: animations || [],

    });

    AddAsset.call(this, resource);

    return this;
});