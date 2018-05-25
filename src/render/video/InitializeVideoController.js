import Environment from '../../system/PlatformEnvironment';

export default function InitializeVideoController() {

    this.domCanvas = this.game.render.domCanvas;
    this.supportFullscreen = Environment.supportFullscreen;

    if (Environment.supportFullscreen) {

        let requestFullscreen = function() {
            //SetVideoToFullscreen();
        };

        document.addEventListener(Environment.fullscreenInfo.request, requestFullscreen)
    }

}