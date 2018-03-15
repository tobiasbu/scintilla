import Renderable from "./renderable";
import Rect from "../../math/rect";
import { EntityType } from "../entitytype";
import DrawImage from "../../modules/draw/drawImage";


export default class Sprite extends Renderable {

    constructor(name, game)
    {
        super(name,game);

        this.frame = new Rect();
        this.type = EntityType.Sprite;
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

        if (this.game != null) {
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