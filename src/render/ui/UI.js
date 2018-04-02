
import System from '../../core/system/System';
import Rect from '../../math/Rect'
import AspectRatio from './AspectRatio';
import Matrix from '../../math/Matrix'
import GUIResize from './UIResize';
import Debug from './Debug';
import MathUtils from '../../math/MathUtils';
import UIDrawer from './UIDrawer';
import InitializeUI from './InitializeUI';




export default class UI {

    constructor(game) {
        this.game = game;
        this.canvas = null;
        this.width = this.game.width;
        this.height = this.game.height;
        this.viewport = new Rect(0, 0, this.width, this.height);
        this.ratiobox = null;
        this.aspectRatio = this.width / this.height;
        this.pixelUnit = {x:1,y:1};
        this._isDirty = true;
        this.matrix = new Matrix(1);
        this.context = null;
        this._alpha = 1;
        this.backgroundColor = '#000'
        this.backgroundAlpha = 0;
        this.debug = null;
        this.draw = new UIDrawer(game, this);
    }

    get alpha() {return this._alpha; }
    set alpha(value) {this._alpha = value;}


    setSize(width, height) {
        GUIResize(this, width, height);
        return this;
    }

    setViewport(x0, y0, x1, y1) {
        this.viewport.x = x0; 
        this.viewport.y = y0;
        this.viewport.width = x1;
        this.viewport.height = y1;
        this._isDirty = true;
        return this;
    }

    setViewportByAspectRatio(aspectRatio) {

        // TODO: IMPROVE THAT

        this.ratiobox = AspectRatio.computeViewPort(this.game.system.render.canvas.clientWidth / this.game.system.render.canvas.clientHeight, aspectRatio);
        let borderX = 0;
        let borderY = 0;//rect.y * this.canvas.clientHeight;

        if (this.ratiobox.style === AspectRatio.Square) {
            this.viewport.set(
                0,
                0,
                this.canvas.clientWidth,
                this.canvas.clientHeight);

            return this;

        } else {

            if (this.ratiobox.style === AspectRatio.Pillarbox)
                borderX = this.ratiobox.x * this.width;//this.canvas.clientWidth;
            else if (this.ratiobox.style === AspectRatio.Letterbox)
                borderY = this.ratiobox.y * this.height;//this.canvas.clientHeight;
            
            this.viewport.set(
                borderX,
                borderY,
                (this.width * (this.canvas.clientWidth / this.width)) - (borderX*2),
                (this.height * (this.canvas.clientHeight / this.height)) - (borderY*2));

        }
        
        let canvasRatioX = this.canvas.clientWidth * (this.ratiobox.x * 2);
        let canvasRatioY = this.canvas.clientHeight * (this.ratiobox.y * 2);
        let areaRatio = (this.canvas.clientWidth - canvasRatioX) / this.canvas.clientHeight;
        let orthoSize = this.height / 2;
        let pixelUnit = (this.canvas.clientHeight / (orthoSize * 2)) * areaRatio;
        
        this.pixelUnit.x = pixelUnit;//(this.canvas.clientWidth - canvasRatioX) / this.width;
        this.pixelUnit.y = pixelUnit;//(this.canvas.clientHeight - canvasRatioY) / this.height;

        this._isDirty = true;
        return this;
    }

    setSizeByCanvas() {
        GUIResize(this, this.game.system.render.canvas.width, this.game.system.render.canvas.height);
        return this;
    }

    setSizeByCamera() {
        GUIResize(this, this.game.system.camera.width, this.game.system.camera.height);
        return this;
    }

    setSizeByAspectRatio(aspectRatio) {
        GUIResize(this, this.game.system.render.canvas.width * aspectRatio, this.game.system.render.canvas.height * aspectRatio);
        return this;
    }

}

System.register('UserInterface', UI, 'ui', InitializeUI)