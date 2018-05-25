import System from '../../core/system/System';
import InitializeVideoController from './InitializeVideoController';


function SetVideoToFullscreen() {

}

export default class VideoController {

    constructor(game) {

        this.game = game;
        this.fullscreenTarget = null;
        this.domCanvas = null;

        this.parentElement = null;
        this.parentWindow = false;
        this.supportFullscreen = false;

    }

    

}

System.register('VideoController', VideoController, 'video', InitializeVideoController);