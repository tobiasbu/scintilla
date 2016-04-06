
tobi.TiledSprite = tobi.Renderable.extend(function() {


this.constructor = function(source,width,height) {

  this.super();

  this.type = tobi.RenderType.TiledSprite;

this.source = source;
this.setFrame(0,0,width,height);

this.tilePosition = new tobi.Vector(0,0);
this.tileScale = new tobi.Vector(1,1);
this.offset = new tobi.Vector(1,1);

this.tilePattern = null;

this.refresh = true;
this.canvasBuffer = null;
this.tiledTexture = null;

}

this.render = function(context) { //matrix,origin

  var wt = this._gameObject.matrix;
  var origin = this._gameObject.origin;
  var resolution = 1;

  context.setTransform(wt.a, wt.b, wt.c, wt.d, wt.x * resolution, wt.y * resolution);

  if (this.refresh) {

    this.createTilling();

    if (this.tiledTexture)
    {
        this.tilePattern = context.createPattern(this.tiledTexture.source, 'repeat');
    }
    else
    {
            return;
    }

  }

    var tilePosition = this.tilePosition;
    var tileScale = this.tileScale;

    tilePosition.x %= this.tiledTexture.source.width;
    tilePosition.y %= this.tiledTexture.source.height;

    context.scale(tileScale.x, tileScale.y);
    context.translate(tilePosition.x + (origin.x * -this.frame.width), tilePosition.y + (origin.y * -this.frame.height));

    context.fillStyle = this.tilePattern;
    context.globalAlpha = this.alpha;

      var tx = -tilePosition.x;
      var ty = -tilePosition.y;
      var tw = this.frame.width / tileScale.x;
      var th = this.frame.height / tileScale.y;

    context.fillRect(tx, ty, tw, th);

   //  Translate back again
   context.scale(1 / tileScale.x, 1 / tileScale.y);
   context.translate(-tilePosition.x + (origin.x * this.frame.width), -tilePosition.y + (origin.y * this.frame.height));

   this.refresh = false;

}

this.createTilling = function() {

  var source = this.source;

  var targetWidth = this.source.width;
  var targetHeight = this.source.height;

  if (this.canvasBuffer)
    {
        this.canvasBuffer.resize(targetWidth, targetHeight);
        this.tiledTexture.width = targetWidth;
        this.tiledTexture.height = targetHeight;
        this.tiledTexture.needsUpdate = true;
    }
    else
    {
        this.canvasBuffer = new tobi.CanvasBuffer(targetWidth, targetHeight);
        this.tiledTexture = tobi.Texture.createFromCanvas(this.canvasBuffer.canvas);
        this.tiledTexture.isTiling = true;
        this.tiledTexture.needsUpdate = true;
    }


    this.canvasBuffer.context.drawImage(this.source,
                          0,
                          0,
                          targetWidth,
                          targetWidth
                        );

    //this.tileScaleOffset.x = texture.width / targetWidth;
    //this.tileScaleOffset.y = texture.height / targetHeight;

}




});
