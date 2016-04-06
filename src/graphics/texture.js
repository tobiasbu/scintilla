
tobi.textureCache = {};
tobi.textureCacheID = 0;

tobi.Texture = function(source,scaleMode) {

this.source = source;
this.loaded = false;
this.width = source.width;
this.height = source.height;
this.isTiling = false;


  if (!source)
  {
      return;
  }


/*if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height)
{
    this.loaded = true;
    this.width = this.source.naturalWidth || this.source.width;
    this.height = this.source.naturalHeight || this.source.height;
}*/

}

tobi.Texture.prototype.constructor = tobi.Texture;

tobi.Texture.createFromCanvas = function(canvas) {

  if (!canvas._id)
    {
        canvas._id = 'canvas_' + tobi.textureCacheID++;
    }

  if (canvas.width === 0)
  {
        canvas.width = 1;
  }

  if (canvas.height === 0)
  {
        canvas.height = 1;
  }

  var texture = tobi.textureCache[canvas._id];

  if (!texture)
  {
      texture = new tobi.Texture(canvas);
      tobi.textureCache[canvas._id] = texture;
  }

    return texture;

}
