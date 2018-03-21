import Renderable from "./renderable";
import Rect from "../../math/rect";
import DrawImage from "./drawImage";
import ModuleProvider from "../moduleProvider";



export default class Sprite extends Renderable {

    constructor(moduleManager)
    {
        super(moduleManager);

        this._type = "sprite";
        this.frame = new Rect();
    }

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
            var sprite = this.entity.game.system.cache.getAsset('images',tag);
           
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

    moduleUpdate() {

        if (!this.entity.transform._isDirty)
            return;

        UpdateBounds(this.bounds, this.frame, this.entity.transform);
    }

    render(context)
    {
        if (!this._visible)
            return false;

        return DrawImage(context, this.source, this.entity.transform, this.frame);
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