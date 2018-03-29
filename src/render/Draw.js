import GameSystemManager from "../core/GameSystemManager";

export default class Draw {
  
  constructor(game) {
    this.game = game;
    this.cache = null;
    this.context = null;
  }

  init()
  {

    this.cache = this.game.system.cache;
    this.context = this.game.system.render.context;
    return this;
  }

  font(fontname,size) {

    this.context.font = size + "px " + fontname;

  }

  text(text,x,y,color) {

    if (color === undefined) color = 'black';

    this.context.fillStyle = color;
    this.context.fillText(text, x, y);

  }

  sprite(tag, x, y, anchor) {

      var img = this.cache.getAsset('images',tag);

      if (img != null) {

        if (anchor === undefined) {
          anchor[0] = 0;
          anchor[1] = 0;
        }

        var ctx = this.context;

      ctx.save();

      ctx.translate(x-img.width*anchor[0], y-img.height*anchor[1]);

    ctx.drawImage(img,
            0,
            0,
            img.width,
            img.height);


      ctx.restore();

    }

  }

  spriteTransformed(tag, x, y, xscale, yscale, angle) {


  }

  rectangle(x, y, width, height, color) {

    this.context.fillStyle=color;
    this.context.fillRect(x,y,width,height);

  }

  outlineRectangle(x,y,width,height,color,outlineWidth) {

    //this.context.beginPath();
    this.context.lineWidth=outlineWidth;
    //this.context.setLineDash([6]);
    this.context.strokeStyle=color;
    this.context.strokeRect(x, y, width, height);
    //this.context.rect(x,y,width,height);
    //this.context.stroke();

  }

  alpha(a) {

    this.context.globalAlpha = a;

  }

  color(color) {

    this.context.fillStyle = color;

  }

  bounds(bb,color) {

  if (color === undefined)
    color = 'red';
  this.context.setTransform(1,0,0,1,0,0);
  this.outlineRectangle(bb.min.x,bb.min.y,bb.max.x-bb.min.x,bb.max.y-bb.min.y,color,1);

  }

}

GameSystemManager.register('Draw',Draw,'draw');