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
        this.source = null;
        this.frame = new Rect();
   
    
    }

    get width() {return this.frame.width; }
    get height() {return this.frame.height; }

    setFrame(x, y, width, height)
    {
        this.frame.set(x,y,width,height);
    }

    setFrameRect(rect)
    {
        this.frame.set(x,y,width,height);
    }

    setSprite(tag) {

        if (this.entity != null || this.entity !== undefined) {
            var sprite = this.entity.game.system.cache.image.get(tag);

            if (sprite != null) {
                this.setSource(sprite.data, true);
            }
        } else {
            throw new Error("Sprite.setSprite: Can not set Sprite. The entity is not in the game");
        }
        
    }

    setSource(image, changeFrame) {

        if (changeFrame === undefined) changeFrame = false;
      
        if (this.source != image)
          this.source = image;
      
        if (changeFrame)
            this.setFrame(0,0,this.source.width,this.source.height);
      
      
    }

    render(context)
    {
        if (!this._enabled)
            return false;

        DrawImage(context, 
            this.source, this.frame,
            this.entity.transform, this._originInPixels);
   
       return true;
    }
}

ModuleProvider.register('sprite', function(moduleManager, tag) {

    var spr = new Sprite(moduleManager);

    if (tag !== undefined)
    {   
        spr.setSprite(tag)
    } 


    return spr;

});