//import GameSystemManager from "../core/GameSystemManager";
import Validate from "../../utils/Validate";




export default class UIDrawer {
  
  constructor(game, ui) {
    this.game = game;
    this.cache = null;
    this.context = null;
    this.ui = ui;
    this.lastAlpha = 1;
    this.lastColor = '#000';
    this.currentColor = '#FFF'
    this.currentTextAlign = 'center';
  }

  init()
  {

    this.cache = this.game.system.cache;
    this.context = this.game.system.render.context;
    
    return this;
  }

  set color(value) {
    this.lastColor = this.context.fillStyle;
    this.context.fillStyle = value;
    this.currentColor = this.context.fillStyle;
  }

  set alpha(value) {
    this.lastAlpha = this.context.globalAlpha;
    this.context.globalAlpha = value;
  }

  set align(value) {
    this.context.textAlign = value;
    this.currentTextAlign = this.context.textAlign;
  }

  transformPosition(x, y, w, h) {
    return {
      x : x - this.ui.viewport.x,
      y : y - this.ui.viewport.y,
      w : (w - this.ui.viewport.x) || 0,
      h : (h - this.ui.viewport.y) || 0,
    };
  }

  font(fontname,size, style) {

    if (Validate.isNumber(size))
      size = size.toString() + 'px';

    if (style === undefined) style = "normal";

    this.context.font = style + " " + size + " \'" + fontname + "\'";

  }

  text(text, x, y, color, align) {

    if (color === undefined) color = this.currentColor;
    if (align === undefined) align = this.currentTextAlign;

    let pos = this.transformPosition(x,y);
    this.context.fillStyle = color;
    this.context.textAlign = align;
    this.context.fillText(text, pos.x, pos.y);

  }

  image(source, x, y) {

    if (source === undefined || source === null) return;

    //this.context.save();

    //this.context.translate(x, y);

    let pos = this.transformPosition(x,y);

    this.context.drawImage(source,
        0, 0,
        source.width, source.height,
        pos.x, pos.y,
        source.width, source.height,
      );
    //this.context.restore();
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

  rect(x, y, width, height, color) {

    this.context.fillStyle= color || this.currentColor;
    let pos = this.transformPosition(x,y, width, height);
    this.context.fillRect(pos.x, pos.y, pos.w, pos.h)

  }

  outlineRect(x,y,width,height,outlineWidth, color) {

    color = color || this.currentColor;
    this.context.lineWidth = outlineWidth || 1;
    let pos = this.transformPosition(x,y, width, height);
    //this.context.setLineDash([6]);
    this.context.strokeStyle=color;
    this.context.strokeRect(pos.x, pos.y, pos.w, pos.h);
    //this.context.rect(x,y,width,height);
    //this.context.stroke();

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

//GameSystemManager.register('UIDrawer',UIDraw,'draw');