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
      
        if (fullFrame === true && resource !== null) {
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

ModuleProvider.register('sprite', function(moduleManager, tag) {

    var spr = new Sprite(moduleManager);

    if (tag !== undefined)
    {   
        spr.setSprite(tag);
    } 


    return spr;

});