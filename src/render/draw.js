
Scintilla.Draw = function(game) {

this.game = game;
this.cache = game.cache;
this.context = game.context;

}

Scintilla.Draw.prototype = {

font : function(fontname,size) {

this.context.font = size + "px " + fontname;

},

text : function(text,x,y,color) {

  if (color === undefined) color = 'black';

  this.context.fillStyle = color;
  this.context.fillText(text, x, y);

},

sprite : function(tag, x, y, anchor) {

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

},

spriteTransformed : function(tag, x, y, xscale, yscale, angle) {


},

rectangle : function (x, y, width, height, color) {

  this.context.fillStyle=color;
  this.context.fillRect(x,y,width,height);

},

outlineRectangle : function (x,y,width,height,color,outlineWidth) {

  this.context.beginPath();
  this.context.lineWidth=outlineWidth;
  this.context.setLineDash([6]);
  this.context.strokeStyle=color;
  this.context.rect(x,y,width,height);
  this.context.stroke();

},

alpha : function(a) {

  this.context.globalAlpha = a;

},

color : function(color) {

  this.context.fillStyle = color;

},

boundingbox : function(bb,color) {

if (color === undefined)
  color = 'black';
  this.context.setTransform(1,0,0,1,0,0);
 this.outlineRectangle(bb.min.x,bb.min.y,bb.max.x-bb.min.x,bb.max.y-bb.min.y,color,2);

}



}

Scintilla.Draw.prototype.constructor = Scintilla.Draw;
