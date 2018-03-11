
Scintilla.textureCache = {};
Scintilla.textureCacheID = 0;

Scintilla.Texture = function(source,scaleMode) {

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

Scintilla.Texture.prototype.constructor = Scintilla.Texture;

Scintilla.Texture.createFromCanvas = function(canvas) {

  if (!canvas._id)
    {
        canvas._id = 'canvas_' + Scintilla.textureCacheID++;
    }

  if (canvas.width === 0)
  {
        canvas.width = 1;
  }

  if (canvas.height === 0)
  {
        canvas.height = 1;
  }

  var texture = Scintilla.textureCache[canvas._id];

  if (!texture)
  {
      texture = new Scintilla.Texture(canvas);
      Scintilla.textureCache[canvas._id] = texture;
  }

    return texture;

}
