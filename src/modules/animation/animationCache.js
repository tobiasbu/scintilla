
scintilla.AnimationCache = function(game) {

this.game = game;
//this.map = new scintilla.Multimap();

}

scintilla.AnimationCache.prototype = {

add : function(spritesheet,container,name) {

  var sprite = this.game.cache.getAsset('images',spritesheet);

  if (sprite == null) {
    console.warn("tobiJS.animationCache: Can not create Animation: sprite: " + spritesheet);
    return null;
  }

  var animation = new scintilla.Animation(sprite);



  //return this.map.set(container,name,animation);

},

get : function(container,name) {

 // return this.map.getValue(container,name);

}

}
