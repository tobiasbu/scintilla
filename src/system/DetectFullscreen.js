export default function DetectFullscreen() {

    // https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API


    let fullscreenFeature = {
        available: false,
        cancel: '',
        //keyboard: false,
        request: ''
    };

    let vendorsActiveFullscreen = [
        'requestFullscreen',
        'requestFullScreen',
        'webkitRequestFullscreen',
        'webkitRequestFullScreen',
        'msRequestFullscreen',
        'msRequestFullScreen',
        'mozRequestFullScreen',
        'mozRequestFullscreen'
    ];


    let tempElement = document.createElement('div');

    for (let i = 0; i < vendorsActiveFullscreen.length; i++) {
        if (tempElement[vendorsActiveFullscreen[i]]) {
            fullscreenFeature.available = true;
            fullscreenFeature.request = vendorsActiveFullscreen[i];
            break;
        }
    }

    if (fullscreenFeature.available) {

        let vendorsCancelFullscreen = [
            'cancelFullScreen',
            'exitFullscreen',
            'webkitCancelFullScreen',
            'webkitExitFullscreen',
            'msCancelFullScreen',
            'msExitFullscreen',
            'mozCancelFullScreen',
            'mozExitFullscreen'
        ];

        for (let i = 0; i < vendorsCancelFullscreen.length; i++) {
            if (document[vendorsCancelFullscreen[i]]) {
                fullscreenFeature.cancel = vendorsCancelFullscreen[i];
                break;
            }
        }

    }

    return fullscreenFeature;

}