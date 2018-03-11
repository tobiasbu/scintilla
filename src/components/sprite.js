


Scintilla.Sprite = Scintilla.Renderable.extend(function() {

this.constructor = function(source) {

  this.super();

  this.type = Scintilla.RenderType.Sprite;
  this.source = source;

  if (source != null)
    this.setFrame(0,0,source.width,source.height);

}

this.setSprite = function(tag) {

  var sprite = this._gameObject.game.cache.getAsset('images',tag);

  if (sprite != null)
    this.setImage(sprite);

}

});
