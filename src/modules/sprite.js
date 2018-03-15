


scintilla.Sprite = scintilla.Renderable.extend(function() {

this.constructor = function(source) {

  this.super();

  this.type = scintilla.RenderType.Sprite;
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
