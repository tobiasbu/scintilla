
import Rect from '../../math/Rect';

export default class KeyFrame {
    
    constructor(animation) {
        this.animation = animation;
        this.duration = 0;
        this.progress = 0;
        this.type = 'key';
    }

    destroy() {
        this.animation = null;
    }

}

export class SpritesheetKeyFrame extends KeyFrame {

    constructor(animation, image, frame, duration) {
        super(animation);

        this.duration = duration || 1;
        this.type = 'sprite';
        this.frame = frame || new Rect();
        this.image = image || null;
    }

    destroy() {
        this.frame = null;
        this.image = null;
        this.animation = null;
    }

}