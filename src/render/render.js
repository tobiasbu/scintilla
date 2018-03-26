
import Map from '../structures/map'
import RenderLayer from './renderlayer'
import RenderLayerManagment from './renderlayersmanagement'
import Canvas from './canvas/canvas'
import {RENDERING_TYPE} from './define'
import GameSystemManager from '../core/gameSystemManager';
import CanvasSmoothing from './canvas/smoothing';


export default class Render {
    

    constructor(game) {
        
        this.game = game;
        this.layer = new RenderLayerManagment(this.game);
        this.canvas = Canvas.create(this.game.parent,this.game.width,this.game.height);
        this.context = this.canvas.getContext("2d", { alpha: false });  
        this.imageRendering = (game.config.pixelated) ? RENDERING_TYPE.NEAREST : RENDERING_TYPE.LINEAR;
        this.smooth = new CanvasSmoothing(this.context);
        this.smooth.set(this.imageRendering);

        this._backgroundColor = '#000'       
        this._alpha = 1;
        this._enable = true;
        this.clear = true;
        this.drawCalls = 0;
    }

    renderBegin() {
        
        if (this.clear)
        {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        this.context.fillStyle = this._backgroundColor;  
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.drawCalls = 0;
    }

    renderEnd() {
        this.context.globalAlpha = 1;
        this.context.globalCompositeOperation = 'source-over';
    }

    render(camera, delta) {
        
        if (!this._enable)
            return;

            let clip = (camera.x !== 0 ||
                 camera.y !== 0 ||
                 camera.width !== this.context.canvas.width ||
                 camera.height !== this.context.canvas.height);

        // alpha
        if (this._alpha !== 1)
        {
            ctx.globalAlpha = 1;
            this._alpha = 1;
        }

        // blend
        this.context.globalCompositeOperation = 'source-over';
       
        
        /*if (clip)
        {
            let resolution = 1;
            this.context.save();
            this.context.beginPath();
            this.context.rect(
                0,
                0,
                320 * resolution,
                240 * resolution);
            this.context.clip();
        }*/

        

        for (let i = 0; i < this.layer.renderLayers.length; i++)
        {
            let layer = this.layer.renderLayers.at(i);

            if (!layer.enable)
                continue;

            layer.render(this.context);
            
            this.drawCalls += layer.drawCalls;
        }

        this.context.setTransform(1, 0, 0, 1, 0, 0);

        this.game.scene.render();

       /* if (clip)
            this.context.restore();*/


       

        if (this.game.debug != null) {

            
            this.game.debug.test();
      
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

GameSystemManager.register('Render', Render, 'render');