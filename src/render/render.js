
import Map from '../structures/map'
import RenderLayer from './renderlayer'
import RenderLayerManagment from './renderlayersmanagement'
import Canvas from './canvas/canvas'
import {RENDERING_TYPE} from './define'


export default class Render {
    

    constructor(game) {
        this.game = game;

        this._backgroundColor = '#000'
        this.canvas = Canvas.create(this.game.parent,this.game.width,this.game.height);
        this.context = this.canvas.getContext("2d", { alpha: false });    

        this.layer = new RenderLayerManagment(game);
        this.imageRendering = (game.config.pixelelated) ? RENDERING_TYPE.NEAREST : RENDERING_TYPE.LINEAR;
        this._alpha = 1;
        this._enable = true;
        this.clear = true;
    }

    renderBegin()
    {
        
        if (this.clear)
        {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        this.context.fillStyle = this._backgroundColor;  
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    renderEnd()
    {
        this.context.globalAlpha = 1;
        this.context.globalCompositeOperation = 'source-over';
    }

    render(scene)
    {
        if (!this._enable)
            return;

        this.context.setTransform(1, 0, 0, 1, 0, 0);

        // alpha
        if (this._alpha !== 1)
        {
            ctx.globalAlpha = 1;
            this._alpha = 1;
        }

        // blend
        this.context.globalCompositeOperation = 'source-over';
       
     

        for (let i = 0; i < this.layer.__renderLayers.length; i++)
        {
            if (this.layer.__renderLayers[i].enable)
            {
                this.layer.__renderLayers[i].render();
            }
        }

        this.game.scene.render();


        if (this.game.debug != null) {

            this.context.setTransform(1, 0, 0, 1, 0, 0);
            this.game.debug.test();
            //console.log("asdasd");
      
      }

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

