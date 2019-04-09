//import GameSystemManager from "../core/GameSystemManager";
import Validate from "../../utils/Validate";
import MathUtils from "../../math/MathUtils";




export default class UIDrawer {

  constructor(game, ui) {
    this.game = game;
    this.cache = null;
    this.context = null;
    this.canvas = null;
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
    this.canvas = this.game.system.render.canvas;

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

  // transformPosition(x, y, w, h) {

  //   if (this.disablePointTransform) {
  //     return {
  //       x: x,
  //       y: y,
  //       w: w || 0,
  //       h: h || 0,
  //     };
  //   } else {

  //     return {
  //       x: x, //x - this.ui.viewport.x,
  //       y: y,//y - this.ui.viewport.y,
  //       w: w,//(w - this.ui.viewport.x) || 0,
  //       h: h//(h - this.ui.viewport.y) || 0,
  //     };
  //   }
  // }

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


    this.context.textAlign = align;

    //this.context.save();
    //this.context.translate(x, y);
    this.context.fillText(text, x, y);
    //this.context.restore();

  }

  image(source, x, y, scalex, scaley) {



    this.context.drawImage(source,
      0, 0,
      source.width, source.height,
      x, y,
      source.width, source.height
    );
  }

  imageExtra(source, x, y, scalex, scaley, halign, valign) {
    if (source === undefined || source === null) return;
    if (scalex === undefined) scalex = 1;
    if (scaley === undefined) scaley = 1;
    if (halign === undefined) halign = 0;
    if (valign === undefined) valign = 0;

    let dx = source.width * halign;
    let dy = source.height * valign;

    this.context.save();
    this.context.translate(x, y);
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

      let dx = source.width * halign;
      let dy = source.height * valign;

      this.context.save();
      this.context.translate(x, y);
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

      let dx = source.width * halign;
      let dy = source.height * valign;

      this.context.save();
      this.context.translate(x, y);
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

  spriteTransformed(tag, x, y, xscale, yscale, angle, halign, valign) {

    let source = this.cache.image.get(tag);

    if (source !== null) {

      if (halign === undefined) halign = 0;
      if (valign === undefined) valign = 0;

      let dx = source.width * halign;
      let dy = source.height * valign;

      this.context.save();
      this.context.translate(x, y);
      this.context.scale(xscale, yscale);
      this.context.rotate(angle * MathUtils.toRadian);
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


  spriteAskew(tag, x, y, skewX, skewY, halign, valign) {
    let source = this.cache.image.get(tag);

    if (source !== null) {

      if (halign === undefined) halign = 0;
      if (valign === undefined) valign = 0;

      let dx = source.width * halign;
      let dy = source.height * valign;

      this.context.save();
      this.context.transform(1, Math.atan(skewX), 0, 1, x, y);
      this.context.transform(1, 0, Math.atan(skewY), 1, 0, 0);
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

  spriteRskew(tag, x, y, skewX, skewY, halign, valign) {
    let source = this.cache.image.get(tag);

    if (source !== null) {

      if (halign === undefined) halign = 0;
      if (valign === undefined) valign = 0;

      let dx = source.width * halign;
      let dy = source.height * valign;

      this.context.save();
      this.context.transform(1, skewX, 0, 1, x, y);
      this.context.transform(1, 0, skewY, 1, 0, 0);
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

  spritePart(tag, x, y, frameX, frameY, frameWidth, frameHeight, halign, valign) {
    let source = this.cache.image.get(tag);

    if (source !== null) {

      if (halign === undefined) halign = 0;
      if (valign === undefined) valign = 0;

      let dx = frameWidth * halign;
      let dy = frameHeight * valign;

      this.context.save();
      this.context.translate(x, y);
      this.context.drawImage(
        source.data,
        frameX, // sx - pos crop x 
        frameY, // sy - pos crop y
        frameWidth, // sWidth - crop width
        frameHeight, // sHeight - crop height
        -dx, // destination x
        -dy, // destination y
        frameWidth, frameHeight
      );
      this.context.restore();

    }
  }

  /**
   * 
   * @param {string} tag 
   * @param {string} text 
   * @param {number} x 
   * @param {number} y 
   */
  bitmapText(tag, text, x, y, index) {
    let source = this.cache.bitmapFont.get(tag);
    if (source !== null) {
      x = x || 0;
      y = y || 0;
      index = index || 0;
      this.context.save();
      this.context.translate(x, y);
      let cursorX = 0;
      let cursorY = 0;

      for (let i = 0; i < text.length; i += 1) {

        if (text[i] !== '\n') {

          const chr = source.getChar(text[i]);

          if (chr !== null) {

            this.context.drawImage(
              source.images[index].data,
              chr.x, // sx - pos crop x 
              chr.y, // sy - pos crop y
              chr.width, // sWidth - crop width
              chr.height, // sHeight - crop height
              cursorX + chr.xoffset, // destination x
              cursorY + chr.yoffset, // destination y
              chr.width, chr.height
            );
            cursorX += chr.xadvance;
          }
        } else {
          cursorY += source.metadata.baseLine;
          cursorX = 0;
        }



      }
      this.context.restore();
    }
  }

  spritesheet(tag, x, y, frameNumber, halign, valign, scale, scale_y) {

    let source = this.cache.animation.get(tag);

    if (source === null)
      return false;

    let key = source.get(frameNumber);

    if (key === null || key === undefined)
      return false;

    if (key.image === null)
      return false;

    let frame = key.frame;

    if (scale === undefined) scale = 1;
    if (scale_y === undefined) scale_y = scale;
    if (halign === undefined) halign = 0;
    if (valign === undefined) valign = 0;

    let dx = frame.width * halign;
    let dy = frame.height * valign;


    this.context.save();
    this.context.translate(x, y);
    this.context.scale(scale, scale_y);
    this.context.drawImage(
      key.image.data,
      frame.x, // sx - pos crop x 
      frame.y, // sy - pos crop y
      frame.width, // sWidth - crop width
      frame.height, // sHeight - crop height
      -dx, // destination x
      -dy, // destination y
      frame.width, frame.height
    );
    this.context.restore();

    return true;


  }

  patternTransformed(tag, x, y, width, height, scale_x, scale_y, angle, halign, valign) {

    let source = this.cache.pattern.get(tag);

    if (source === null)
      return false;

    if (!width) width = source.image.width;
    if (!height) height = source.image.height;
    if (scale_x === undefined) scale_x = 1;
    if (scale_y === undefined) scale_y = scale_x;
    if (halign === undefined) halign = 0;
    if (valign === undefined) valign = 0;

    let dx = width * halign;
    let dy = height * valign;
    let context = this.context;


    context.save();
    context.translate(x, y);
    context.scale(scale_x, scale_y);

    if (angle !== undefined)
      context.rotate(MathUtils.toRadian * angle);

    //context.translate(x - dx, y - dy);
    context.fillStyle = source.data;
    context.fillRect(0, 0, width, height);
    //context.fill();

    context.restore();

    return true;

  }

  rect(x, y, width, height, color) {


    this.context.save();
    this.context.fillStyle = color || this.currentColor;
    this.context.translate(x, y);

    this.context.fillRect(0, 0, width, height);
    this.context.restore();

  }

  outlineRect(x, y, width, height, outlineWidth, color) {

    color = color || this.currentColor;

    //this.context.setLineDash([6]);
    this.context.save();
    this.context.translate(x, y);
    this.context.lineWidth = outlineWidth || 1;
    this.context.strokeStyle = color;
    this.context.strokeRect(0, 0, width, height);
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