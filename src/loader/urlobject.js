
tobi.URLObject = {

    create : function(asset, response, type)
    {


        if (typeof URL === 'function')
        {
            asset.src = URL.createObjectURL(response);
        }
        else
        {
            var reader = new FileReader();

            reader.onload = function ()
            {
                asset.removeAttribute('crossOrigin');
                asset.src = 'data:' + (response.type || type) + ';base64,' + reader.result.split(',')[1];
            };

            reader.onerror = asset.onerror;

            reader.readAsDataURL(response);
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