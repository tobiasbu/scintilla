import AssetTypeHandler from "./AssetTypeHandler";
import SpritesheetResource from "../../resources/animation/SpritesheetResource";
import AssetsType from "../AssetsType";
import AddAsset from "../components/AddAsset";
import File from "../File";
import LoaderState from "../LoaderState";
import NextAsset from "../components/NextAsset";
import AnimationMachineResource from "../../resources/animation/AnimationMachineResource";


export default class AdditionalLoaderResource extends File {

    constructor(tag, type, config) {

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

        if (this.type === AssetsType.spritesheet) {

            let image = this.loader.cache.image.get(this.config.imageTag);

            this.data = new SpritesheetResource(this.tag, image);
            this.data.addStrip(config.x, config.y, config.frameWidth, config.frameHeight, config.numberOfImages, config.framesPerRow, config.spacing);
        } else if (this.type === AssetsType.animMachine) {

            this.data = new AnimationMachineResource(this.tag);

            if (this.config.animations !== undefined) {

                let cache = this.loader.cache.animation;

                for (let i = 0; i < this.config.animations.length; i++) {

                    let anim = cache.get(this.config.animations[i]);

                    this.data.add(this.config.animations[i], anim);
                }
            }

        }

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