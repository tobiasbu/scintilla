
tobi.URLObject = {

    create : function(asset, obj, type)
    {
        if (typeof URL === 'function')
        {
            asset.src = URL.createObjectURL(obj);
        }
        else
        {
            var reader = new FileReader();

            reader.onload = function ()
            {
                asset.removeAttribute('crossOrigin');
                asset.src = 'data:' + (obj.type || type) + ';base64,' + reader.result.split(',')[1];
            };

            reader.onerror = asset.onerror;

            reader.readAsDataURL(obj);
        }   
    },

    revoke : function(data)
    {
        if (typeof URL === 'function')
        {
            URL.revokeObjectURL(data.src);
        }
    }
};