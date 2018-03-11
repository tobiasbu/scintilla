
scintilla.RenderType = {
Sprite : 1,
TiledSprite : 2,
CSSText : 3
}

scintilla.Renderable = Class.extend(function() {

this._gameObject = null;

this.constructor = function() {
  this.type = null;
  this.source = null;
  this.frame = new scintilla.Rect(0,0,1,1);
  this.alpha = 1;
}

this.setFrameRect = function(rect) {

  this.frame = rect;

}

this.setFrame = function(x,y,width,height) {

  this.frame.set(x,y,width,height);

}

this.setImage = function(image,changeFrame) {

  if (changeFrame === undefined) changeFrame = false;

  if (this.source != image)
    this.source = image;

  if (changeFrame)
      this.setFrame(0,0,this.source.width,this.source.height);


}

this.render = function(context) { // matrix,origin

  if (this.source != null) {

  var resolution = 1;
  var matrix = this._gameObject.matrix;
  var origin = this._gameObject.origin;

  // destination
  var dx = origin.x * -this.frame.width / resolution;
  var dy = origin.y * -this.frame.height / resolution;



  context.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.x * resolution, matrix.y * resolution);

  context.globalAlpha = this.alpha;

  context.drawImage(
        this.source, // image
        this.frame.x, // sx - pos crop x
        this.frame.y, // sy - pos crop y
        this.frame.width, // sWidth - crop width
        this.frame.height, // sHeight - crop height
        dx, // destination x
        dy, // destination y
        this.frame.width / resolution,
        this.frame.height / resolution
       );

  }

}


});
