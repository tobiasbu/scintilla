
export default function FeatureDetection(os) {

    let features = {
        canvas : false,
        svg : false,
        file : false,
        fileSystem : false,
        worker : false, // computationally expensive tasks
        pointerLock : false, // restrict mouse movement to an element
        vibration : false
    };

    features.canvas = !!window['CanvasRenderingContext2D'] || os.environment.cocoonJS;

    features.file = !!window['File'] && !!window['FileReader'] && !!window['FileList'] && !!window['Blob'];
    features.fileSystem = !!window['requestFileSystem'];

    features.worker = !!window['Worker'];

    features.pointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

    features.svg = (typeof SVGRect !== undefined && document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1')); 

    window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

    if (navigator.vibrate)  {
        features.vibration = true;
    }

    return features;
}