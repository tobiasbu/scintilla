

const XHR = {

    createFileRequest(file, settings) {
        var xhrSettings = XHR.merge(settings, file.xhrSettings);

        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open("GET", file.source, xhrSettings.async);

        if (file.xhrSettings.responseType !== undefined)
            xmlHttpRequest.responseType = file.xhrSettings.responseType;

        xmlHttpRequest.timeout = xhrSettings.timeout;

        xmlHttpRequest.onload = file.onLoad.bind(file);
        xmlHttpRequest.onerror = file.onError.bind(file);
        xmlHttpRequest.onprogress = file.onProgress.bind(file);
        
        if (file.onReadyStateChange !== undefined)
            xmlHttpRequest.onreadystatechange = file.onReadyStateChange.bind(file);

        xmlHttpRequest.send();

        return xmlHttpRequest;
    },

    createSettings(type, doAsync, timeout) {
        if (type === undefined) 
            type = '';

        if (doAsync === undefined) 
            doAsync = true;

        if (timeout === undefined)
            timeout = 0;

        let settings = {
            responseType: type,
            timeout: timeout,
            async: doAsync,
        };

        return settings;
    },

    merge(a, b) {
        let out = {};

        if (a === undefined)
            out = XHR.createSettings(); // : Extend(global);
        // else
            // do something cool

        if (b)
        {
            for (let setting in b)
            {
                if (b[setting] !== undefined)
                    out[setting] = b[setting];
            }
        }
    
        return out;
    }

};

export default XHR;

