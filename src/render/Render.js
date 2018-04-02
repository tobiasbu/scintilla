
import DataMap from '../structures/Map'
import RenderLayer from './RenderLayer'
import RenderLayerManagment from './RenderLayersManagement'
import Canvas from './canvas/Canvas'
import {RenderingType} from './Define'
import GameSystemManager from '../core/GameSystemManager';
import CanvasSmoothing from './canvas/Smoothing';
import DrawRenderLayer from './components/DrawRenderLayer';


export default class Render {
    

    constructor(game) {
        
        this.game = game;
        this.layer = new RenderLayerManagment(this.game);
        this.canvas = Canvas.create(this.game.parent,this.game.width,this.game.height);
        this.context = this.canvas.getContext("2d", { alpha: false });  
        this.imageRendering = (game.config.pixelated) ? RenderingType.NEAREST : RenderingType.LINEAR;
        this.smooth = new CanvasSmoothing(this.context);
        this.smooth.set(this.imageRendering);

        this._backgroundColor = '#000'       
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

GameSystemManager.register('Render', Render, 'render');