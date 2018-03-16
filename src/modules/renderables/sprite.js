import Renderable from "./renderable";
import Rect from "../../math/rect";
import DrawImage from "./drawImage";
import ModuleRegister from "../moduleRegister";


export default class Sprite extends Renderable {

    constructor(moduleManager)
    {
        super(moduleManager);

        this.moduleName = "Sprite";
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

        if (this.entity != null) {
            var sprite = this.game.cache.getAsset('images',tag);
            
            if (sprite != null)
                this.setImage(sprite);
        } else {
            throw new Error("Sprite.setSprite: Can not set Sprite. The entity is not in the game");
        }
        
    }

    render()
    {
        if (!this._visible)
            return;

        //DrawImage(context, )
    }
}

ModuleRegister.register('sprite', (moduleManager, tag) => {

    var spr = new Sprite(moduleManager);
    return spr;

});