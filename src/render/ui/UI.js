
import System from '../../core/system/System';
import Rect from '../../math/Rect'
import AspectRatio from './AspectRatio';
import Matrix3 from '../../math/Matrix3';
import GUIResize from './UIResize';
import Debug from './Debug';
import MathUtils from '../../math/MathUtils';
import UIDrawer from './UIDrawer';
import InitializeUI from './InitializeUI';
import Color from '../color/Color';
import Vector2 from '../../math/Vector2';




export default class UI {

    constructor(game) {
        this.game = game;
        this.canvas = null;
        this.width = this.game.width;
        this.height = this.game.height;
        this.viewport = new Rect(0, 0, this.width, this.height);
        this.ratiobox = null;
        this.aspectRatio = this.width / this.height;
        this._resolution = 1;
        this._isDirty = true;
        this.matrix = new Matrix3(1);
        this.context = null;
        this._alpha = 1;
        this.viewportOffset = new Vector2();
        this.backgroundColor = Color.transparent;
        this.debug = null;
        this.draw = new UIDrawer(game, this);
    }

    get alpha() {return this._alpha; }
    set alpha(value) {this._alpha = value;}

    set resolution(value) {
      this._resolution = value;
      this.invertedResolution = 1 / value;
    }

    get resolution(){
      return this._resolution;
    }


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

        // TODO: IMPROVE THAT FUNCTION
        let canvasWidth = this.game.system.render.canvas.width;//this.game.system.render.canvas.clientWidth;
        let canvasHeight = this.game.system.render.canvas.height;//this.game.system.render.canvas.clientHeight

        this.ratiobox = AspectRatio.computeViewPort(canvasWidth / canvasHeight, aspectRatio);
        let borderX = 0;
        let borderY = 0;//rect.y * this.canvas.clientHeight;

        if (this.ratiobox.style === AspectRatio.Square) {
       
            this.viewport.set(
                0,
                0,
                this.ratiobox.w * canvasWidth,
                this.ratiobox.h * canvasHeight);

            // return this;

        } else {

            //let areaRatioX = this.width * (canvasWidth / this.width);
            //let areaRatioY = this.height * (canvasHeight / this.height);

            if (this.ratiobox.style === AspectRatio.Pillarbox)
                borderX = this.ratiobox.x * canvasWidth;//this.canvas.clientWidth;
            else if (this.ratiobox.style === AspectRatio.Letterbox)
                borderY = this.ratiobox.y * canvasHeight;//this.canvas.clientHeight;
            
            this.viewport.set(
                borderX,
                borderY,
                canvasWidth - (borderX*2),
                canvasHeight - (borderY*2));

        }
        
        let canvasRatioX = canvasWidth * (this.ratiobox.x * 2);
        let viewSize = (canvasWidth - canvasRatioX);
        //let canvasRatioY = canvasHeight * (this.ratiobox.y * 2);
        //console.log(canvasRatioX);
        //let areaRatio = (canvasWidth - canvasRatioX); / canvasHeight; // 1.48
        //console.log(areaRatio);
        
        //let orthoSize = (this.height / 2);// * 100; // 120
        //console.log(orthoSize);
        //let pixelUnit = (canvasHeight / (orthoSize * 2)) * areaRatio;
        
        let pixelUnit = viewSize / this.width;//canvasWidth;
        let invertedResolution = this.width / viewSize;
        this.viewportOffset.x = invertedResolution * borderX;
        this.viewportOffset.y = invertedResolution * borderY;
        this._resolution = pixelUnit;//(this.canvas.clientWidth - canvasRatioX) / this.width;
        this.invertedResolution = invertedResolution;
        //(this.canvas.clientHeight - canvasRatioY) / this.height;

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