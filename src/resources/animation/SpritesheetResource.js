import Animation from "./AnimationResource";
import KeyFrame, { SpritesheetKeyFrame } from "./KeyFrame";
import Validate from '../../utils/Validate';
import ResourceType from "../ResourceType";

export default class SpritesheetResource extends Animation {

    constructor(name, image, duration) {

        super(name);

        this.mainImage = image || null;
        this.type = ResourceType.Spritesheet;

    }

    addFrame(x, y, width, height, image, duration) {

        if (image === undefined) {
            image = this.mainImage;
        } else {
            image = this.cache.image.get(image);
        }
    
        let keyFrame = new SpritesheetKeyFrame(
            this, 
            image,
            new Rect(x, y, width, height),
            duration || this._duration
        );

        this.keyFrames.push(keyFrame);
        this._size++;

        return this;
    }

    /** Add stripped images frames from the main image of the SpriteSheet animation.
     * 
     * @param {Number} x Initial x position of the strip
     * @param {Number} y Initial y position of the strip
     * @param {Number} frameWidth The frame image width.
     * @param {Number} frameHeight The frame image height.
     * @param {Number} numberOfImages The number of frames. Default: 1.
     * @param {Number} framesPerRow Frames per row. Default: Equal to numberOfImages
     * @param {Number|Object} [spacing] Optional: the spacing between the frames images. 
     * To define spacing for x and y axis, spacing should be defined as Object ie: {x:Number,y:Number}.
     */
    addStrip(x, y, frameWidth, frameHeight, numberOfImages, framesPerRow, spacing) {

        if (margin === undefined) margin = 0;
        if (spacing === undefined) {
            spacing = {x:0,y:0}
        } else if (Validate.isNumber(spacing)) {
            spacing = {x:spacing, y:spacing};
        }

        let verticalCount = 0;
        let horizontalCount = 0;
        let xx = x;
        let yy = y;

        for (let i = 0; i < numberOfImages; i++) {

            this.addFrame(
                xx,
                yy,
                frameWidth,
                frameHeight
            );

            this._size++;
            xx += spacing.x + frameWidth;

            if (i % framesPerRow == (framesPerRow - 1)) {
                xx = x;
                yy += spacing.y + frameHeight;
            }
        }

    }

    addImageStrip(image, x, y, frameWidth, frameHeight, numberOfImages, framesPerRow, spacing) {

    }

}