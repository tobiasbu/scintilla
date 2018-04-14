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


AssetTypeHandler.register('spritesheet', function (tag, imageTag, x, y, frameWidth, frameHeight, numberOfImages, framesPerRow, spacing) {

    let resource = new AdditionalLoaderResource(tag, AssetsType.spritesheet, {
        imageTag: imageTag,
        x: x || 0,
        y: y || 0,
        frameWidth: frameWidth || 0,
        frameHeight: frameHeight || 0,
        numberOfImages: numberOfImages || 0,
        framesPerRow: framesPerRow,
        spacing: spacing
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