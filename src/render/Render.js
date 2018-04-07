import RenderLayerManagment from './layer/RenderLayersManagement';

export default class Render {
    

    constructor(game) {
        
        this.game = game;
        this.doubleBuffer = false;
        this.smoothing = undefined;
        this.imageRendering = undefined;
        this.canvas = undefined;
        this.context = undefined;
        this.layer = new RenderLayerManagment(this.game);
        // dom canvas
        //this._domCanvas = Canvas.create(this.game.parent,this.game.width,this.game.height);
        //this._donContext = this.canvas.getContext("2d", { alpha: false });  
        // off screen canvas
        //this._canvas = Canvas.create();
        //this.imageRendering = (game.config.pixelated) ? RenderingType.NEAREST : RenderingType.LINEAR;
        //this.smooth = new CanvasSmoothing(this.context);
        //this.smooth.set(this.imageRendering);

        this._backgroundColor = '#000';     
        this._alpha = 1;
        this._enable = true;
        this.clear = true;
        this.drawCalls = 0;
    }

    get backgroundColor() {return this._backgroundColor;}
    set backgroundColor(value) {
        this._backgroundColor = value;
    }
    get alpha() {return this._alpha;}
    set alpha(value) {

        if (this._alpha !== value)
        {
            this.currentContext.globalAlpha = value;
            this._alpha = value;
        }

        return this._alpha;
    }
}

//System.register('Render', Render, 'render');