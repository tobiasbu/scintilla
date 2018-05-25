import Renderable from './../../Renderable';
import Color from '../../../../render/color/Color';
import ModuleProvider from '../../../ModuleProvider';
import DrawRectangle from './DrawRectangle';

export default class Rectangle extends Renderable {

    constructor(moduleManager, width, height) {

        super('rectangle', moduleManager);

        this._width = width || 100;
        this._height = height || 100;
        this._color = Color.magenta;

    }

    set width(value) {this._width = value;}
    set height(value) {this._height = value;}
    get width() {return this._width; }
    get height() {return this._height; }

    set color(value) {this._color.set(value);}
    get color() {return this._color;}

    get outlineColor() {return -1;}
    get outlineWidth() {return -1;}

    render(context) {

        if (!this._enabled)
            return false;

        return DrawRectangle(context, this.entity._transform, this);
    }

}

ModuleProvider.register('rectangle', function(moduleManager, config) {

    return new Rectangle(moduleManager, config[0], config[1]);

});