
scintilla.Injector = Class.extend(function() {

    this.list = {};

    this.inject = function(toObj)
    {
        for (var key in this.list)
        {
            toObj[key] = this.list[key];
        }
    }

    this.register = function(key, func)
    {
        this.list[key] = func;
    }

    this.destroy = function()
    {
        this.list = {};
    }

});