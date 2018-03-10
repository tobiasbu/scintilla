

tobi.XHR = {

    createFileRequest : function(file, settings)
    {
        var xhrSettings = tobi.XHR.merge(settings, file.xhrSettings);



        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open("GET", file.source, xhrSettings.async);

        xmlHttpRequest.responseType = file.xhrSettings.responseType;
        xmlHttpRequest.timeout = xhrSettings.timeout;

        xmlHttpRequest.onload = file.onLoad.bind(file);
        xmlHttpRequest.onerror = file.onError.bind(file);
        xmlHttpRequest.onprogress = file.onProgress.bind(file);

        

        xmlHttpRequest.send();

       

        return xmlHttpRequest;
    },

    createSettings : function(type, doAsync, timeout)
    {
        if (type === undefined) 
            type = '';

        if (doAsync === undefined) 
            doAsync = true;

        if (timeout === undefined)
            timeout = 0;

        var settings = {
            responseType: type,
            timeout: timeout,
            async: doAsync,
        }

        return settings;
    },

    merge : function(a, b)
    {
        var out = {};

        if (a === undefined)
            out = this.createSettings(); // : Extend(global);

        if (b)
        {
            for (var setting in b)
            {
                if (b[setting] !== undefined)
                    out[setting] = a[setting];
            }
        }
    
    return out;
    }



}