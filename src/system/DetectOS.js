
export default function DetectOS(userAgent) {

    let silk = (/Silk/).test(userAgent);

    // name, deviceType
    let info = { 
        name: undefined, // pretty name
        mobile: false, // is mobile
        desktop: false, // is desktop
        os : {  // operational system
            windows : false,
            windowsPhone : false,
            macOS : false,
            linux : false,
            android : false,
            iOS : false,
            chromeOS : false,
            kindle : false,
        },
        environment : { // environment
            node : false,
            electron : false,
            cordova : false,
            nodewebkit : false,
            cocoonJS : false,
            cocoonApp : false,
            ejecta : false
        }
    };

    if (/Windows/.test(userAgent)) {
        info.name = 'Windows';
        info.os.windows = true;
    } else if (/Mac OS/.test(userAgent))  {
        info.name = 'MacOS';
        info.os.macOS = true;
    }  else if (/Linux/.test(userAgent))  {
        info.name = 'Linux';
        info.os.linux = true;
    } else if (/Android/.test(userAgent)) {
        info.name = 'Android';
        info.os.android = true;
    } else if (/iP[ao]d|iPhone/i.test(userAgent)) {
        info.name = 'iOS';
        info.os.iOS = true;
    } else if (/Kindle/.test(userAgent) || (/\bKF[A-Z][A-Z]+/).test(userAgent) || (/Silk.*Mobile Safari/).test(userAgent)) {
        info.name = "Kindle";
        info.os.kindle = true;
      
    } else if (/CrOS/.test(userAgent)) {
        info.name = 'ChromeOS';
        info.os.chromeOS = true;
    }

    if (/Windows Phone/i.test(userAgent) || (/IEMobile/i).test(userAgent)) {
        info.name = 'Windows Phone';
        info.os.android = false;
        info.os.iOS = false;
        info.os.macOS = false;
        info.os.windows = true;
        info.os.windowsPhone = true;
    }

    if (info.os.windows || info.os.macOS || (info.os.linux && !silk) || info.os.chromeOS) {
        info.desktop = true;
        info.mobile = false;
    }

    if (info.os.windowsPhone || ((/Windows NT/i.test(userAgent)) && (/Touch/i.test(userAgent))))  {
        info.os.desktop = false;
        info.mobile = true;
    }

    if (window.cordova !== undefined) {
        info.environment.cordova = true;
    }
    
    if ((typeof process !== 'undefined') && (typeof process.versions.node !== 'undefined')) {
        info.environment.node = true;
    }
    
    if (info.environment.node && typeof process.versions === 'object') {
        info.environment.nodeWebkit = !!process.versions['node-webkit'];
        info.environment.electron = !!process.versions.electron;
    }
    
    if (navigator.isCocoonJS) {
        info.environment.cocoonJS = true;

        try {
            info.environment.cocoonApp = (typeof CocoonJS !== 'undefined');
        } catch (error) {
            info.environment.cocoonApp = false;
        }
    }

    if (window.ejecta !== undefined) {
        info.environment.ejecta = true;
    }

    return info;

}