import Renderable from "./Renderable";
import Rect from "../../math/Rect";
import DrawImage from "./components/DrawImage";
import ModuleProvider from "../ModuleProvider";
import UpdateTransformBounds from '../../transform/UpdateTransformBounds'


export default class Sprite extends Renderable {

    constructor(moduleManager)
    {
        super('sprite', moduleManager);

        //this._type = "sprite";
        this.resource = null;
        this.frame = new Rect();
   
    
    }

    get width() {return this.frame.width; }
    get height() {return this.frame.height; }

    setFrame(x, y, width, height)
    {
        this.frame.set(x,y,width,height);
        return this;
    }

    setFrameRect(rect) {
        this.frame.copy(rect);
        return this;
    }

    setSprite(tag) {

        if (this.entity !== null && this.entity !== undefined) {
            let sprite = this.entity.game.system.cache.image.get(tag);

            //if (sprite !== null) {
                this.setImage(sprite, true);

        } else {
            Console.warn("Sprite.setSprite: Could not set Sprite. The entity is null in the game");
        }
        return this;
        
    }

    setImage(image, fullFrame) {

        /*if (image === null)
        {
            Console.warn("Sprite.setImage: Could not set Sprite source image. The image is null.");
            return this;
        }*/

        if (fullFrame === undefined) fullFrame = true;
      
        if (this.resource !== image)
          this.resource = image;
      
        if (fullFrame === true && image !== null) {
            this.setFrame(0,0,this.resource.width,this.resource.height);
        }
      
        return this;
      
    }

    render(context)
    {
        if (!this._enabled)
            return false;

        if (!this.resource)
            return false;

        DrawImage(context, 
            this.resource.data, this.frame,
            this.entity.transform, this._originInPixels);
   
       return true;
    }
}

ModuleProvider.register('sprite', function(moduleManager, config) {

    var spr = new Sprite(moduleManager);

    if (config !== undefined) {
        if (config[0] !== undefined)
        {   
            spr.setSprite(config[0]);

            if (spr.resource !== null) {
                if (config[1] === undefined) config[1] = 0; // framex
                if (config[2] === undefined) config[2] = 0; // framey
                if (config[2] === undefined) config[3] = spr.resource.width; // framew
                if (config[4] === undefined) config[4] = spr.resource.height; // frameh

                spr.setFrame(config[1], config[2], config[3], config[4]);
            }
        } 
    }


    return spr;

});