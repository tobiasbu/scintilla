
Scintilla.GameComponents = function(game) {

this.game = game;

}

Scintilla.GameComponents.prototype = {

sprite : function(tag) {


    var sprite;

    if (tag === undefined)
      sprite = null;
    else
      sprite = this.game.cache.getAsset('images',tag);

    return new Scintilla.Sprite(sprite);


},

tiledSprite : function(args) { //tag,width,height

  var sprite = this.game.cache.getAsset('images',args[0]);

  if (sprite == null) {
    console.warn("tobiJS.component: Can not create Component: tiledsprite: " + args[0]);
    return null;
  }



    return new Scintilla.TiledSprite(sprite,args[1],args[2]);

},

animationControl : function() {

    return new Scintilla.AnimationControl(this.game);

},

collider : function(args) { // type, shape

    var s;
    var type = args[0];


    if (type == "triangle")
      s = Scintilla.Polygon.makeTriangle(args[1],args[2]);
    else if (type == "rectangle")
      s = Scintilla.Polygon.makeRectangle(args[1],args[2]);

      var col = new Scintilla.Collider(s);


    return col;

},

body : function(shapeType, width, height) {

  /*var body = new Scintilla.Body();

  if (shapeType == ShapeType.Triangle)
    body.setShape(Scintilla.Polygon.makeTriangle(0,0,width,height));
  else if (shapeType == ShapeType.Rectangle)
    body.setShape(Scintilla.Polygon.makeRectangle(0,0,width,height));*/
},

}

Scintilla.GameComponents.prototype.constructor = Scintilla.GameComponents;
