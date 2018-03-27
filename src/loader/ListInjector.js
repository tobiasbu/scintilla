
export default class ListInjector {

    constructor()
    {
        this.list = {};
    }

    inject(toObj)
    {
        for (var key in this.list)
        {
            toObj[key] = this.list[key];
        }
    }

    register(key, func)
    {
        this.list[key] = func;
    }

    destroyfunction()
    {
        this.list = {};
    }

};