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
    this.currentColor = '#FFF';
    this.currentTextAlign = 'center';
    this.disablePointTransform = false;
  }

  init() {

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

  set composite(value) {
    this.context.globalCompositeOperation = value;
  }

  defaultComposite() {
    this.context.globalCompositeOperation = 'source-over';
  }

  transformPosition(x, y, w, h) {

    if (this.disablePointTransform) {
      return {
        x: x,
        y: y,
        w: w || 0,
        h: h || 0,
      };
    } else {

      return {
        x: x - this.ui.viewport.x,
        y: y - this.ui.viewport.y,
        w: (w - this.ui.viewport.x) || 0,
        h: (h - this.ui.viewport.y) || 0,
      };
    }
  }

  font(fontname, size, style) {

    if (Validate.isNumber(size))
      size = size.toString() + 'px';

    if (style === undefined) style = "normal";

    this.context.font = style + " " + size + " \'" + fontname + "\'";

  }

  text(text, x, y, color, align) {

    if (color !== undefined)
      this.color = color;
    if (align !== undefined) 
      this.align = align;

    let pos = this.transformPosition(x, y);
    
    this.context.textAlign = align;

    //this.context.save();
    //this.context.translate(x, y);
    this.context.fillText(text, pos.x , pos.y);
    //this.context.restore();

  }

  image(source, x, y, scalex, scaley) {


    let pos = this.transformPosition(x, y);

    this.context.drawImage(source,
      0, 0,
      source.width, source.height,
      pos.x, pos.y,
      source.width, source.height
    );
  }

  imageExtra(source, x, y, scalex, scaley, halign, valign) {
    if (source === undefined || source === null) return;
    if (scalex === undefined) scalex = 1;
    if (scaley === undefined) scaley = 1;
    if (halign === undefined) halign = 0;
    if (valign === undefined) valign = 0;

    let pos = this.transformPosition(x, y);
    let dx = source.width * halign;
    let dy = source.height * valign;

    this.context.save();
    this.context.translate(pos.x, pos.y);
    this.context.scale(scalex, scaley);
    //this.context.rotate(scalex, scaley);

    this.context.drawImage(
      source,
      0, // sx - pos crop x 
      0, // sy - pos crop y
      source.width, // sWidth - crop width
      source.height, // sHeight - crop height
      -dx, // destination x
      -dy, // destination y
      source.width, source.height
    );

    this.context.restore();
  }

  sprite(tag, x, y, halign, valign) {

    let source = this.cache.image.get(tag);

    if (source !== null) {

      if (halign === undefined) halign = 0;
      if (valign === undefined) valign = 0;

      let pos = this.transformPosition(x, y);
      let dx = source.width * halign;
      let dy = source.height * valign;

      this.context.save();
      this.context.translate(pos.x, pos.y);
      this.context.drawImage(
        source.data,
        0, // sx - pos crop x 
        0, // sy - pos crop y
        source.width, // sWidth - crop width
        source.height, // sHeight - crop height
        -dx, // destination x
        -dy, // destination y
        source.width, source.height
      );
      this.context.restore();

    }

  }

  spriteScaled(tag, x, y, xscale, yscale, halign, valign) {

    let source = this.cache.image.get(tag);

    if (source !== null) {

      if (halign === undefined) halign = 0;
      if (valign === undefined) valign = 0;

      let pos = this.transformPosition(x, y);
      let dx = source.width * halign;
      let dy = source.height * valign;

      this.context.save();
      this.context.translate(pos.x, pos.y);
      this.context.scale(xscale, yscale);
      this.context.drawImage(
        source.data,
        0, // sx - pos crop x 
        0, // sy - pos crop y
        source.width, // sWidth - crop width
        source.height, // sHeight - crop height
        -dx, // destination x
        -dy, // destination y
        source.width, source.height
      );
      this.context.restore();

    }
  }

  spriteSkew(tag, x, y, skewX, skewY, halign, valign) {
    let source = this.cache.image.get(tag);

    if (source !== null) {

      if (halign === undefined) halign = 0;
      if (valign === undefined) valign = 0;

      let pos = this.transformPosition(x, y);
      let dx = source.width * halign;
      let dy = source.height * valign;

      this.context.save();
      this.context.transform(1, Math.tan(skewX), 0, 1, x, y);
      this.context.transform(1, 0, Math.tan(skewY), 1, 0, 0);
      this.context.drawImage(
        source.data,
        0, // sx - pos crop x 
        0, // sy - pos crop y
        source.width, // sWidth - crop width
        source.height, // sHeight - crop height
        -dx, // destination x
        -dy, // destination y
        source.width, source.height
      );
      this.context.restore();

    }
  }

  rect(x, y, width, height, color) {


    let pos = this.transformPosition(x, y, width, height);

    this.context.save();
    this.context.fillStyle = color || this.currentColor;
    this.context.translate(pos.x, pos.y);

    this.context.fillRect(0, 0, pos.w, pos.h)
    this.context.restore();

  }

  outlineRect(x, y, width, height, outlineWidth, color) {

    color = color || this.currentColor;

    let pos = this.transformPosition(x, y, width, height);
    //this.context.setLineDash([6]);
    this.context.save();
    this.context.translate(pos.x, pos.y);
    this.context.lineWidth = outlineWidth || 1;
    this.context.strokeStyle = color;
    this.context.strokeRect(0, 0, pos.w, pos.h);
    this.context.restore();
    //this.context.rect(x,y,width,height);
    //this.context.stroke();

  }

  bounds(bb, color) {

    if (color === undefined)
      color = 'red';
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.outlineRectangle(bb.min.x, bb.min.y, bb.max.x - bb.min.x, bb.max.y - bb.min.y, color, 1);

  }

}

//GameSystemManager.register('UIDrawer',UIDraw,'draw');