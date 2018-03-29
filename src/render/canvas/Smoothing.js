import { RENDERING_TYPE } from "../Define";


export default class CanvasSmoothing {

    constructor(context) {
        this.context = context;
        this.prefix = this.getPrefix(context);
    }

    getPrefix(context) {

        let vendors = [ 'i', 'webkitI', 'msI', 'mozI', 'oI' ];
        for (let i = 0; i < vendors.length; i++)
        {
            let s = vendors[i] + 'mageSmoothingEnabled';

            if (s in context)
                return s;
        }

        return null;
    }

    setEnable(flag) {

        if (flag === 'undefined') flag = true;

        if (this.prefix === '' || this.prefix === undefined)
            this.prefix = this.getPrefix(this.context);

        if (this.prefix)
            this.context[this.prefix] = flag;

        return this.context;
    }

    set(renderType) {
        if (renderType == RENDERING_TYPE.NEAREST)
            this.setEnable(false);
        else
            this.setEnable(true);
    }

}
