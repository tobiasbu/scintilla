
scintilla.GameComponents = function(game) {

this.game = game;

}

scintilla.GameComponents.prototype = {

sprite : function(tag) {


    var sprite;

    if (tag === undefined)
      sprite = null;
    else
      sprite = this.game.cache.getAsset('images',tag);

    return new scintilla.Sprite(sprite);


},

tiledSprite : function(args) { //tag,width,height

  var sprite = this.game.cache.getAsset('images',args[0]);

  if (sprite == null) {
    console.warn("tobiJS.component: Can not create Component: tiledsprite: " + args[0]);
    return null;
  }



    return new scintilla.TiledSprite(sprite,args[1],args[2]);

},

animationControl : function() {

    return new scintilla.AnimationControl(this.game);

},

collider : function(args) { // type, shape

    var s;
    var type = args[0];


    if (type == "triangle")
      s = scintilla.Polygon.makeTriangle(args[1],args[2]);
    else if (type == "rectangle")
      s = scintilla.Polygon.makeRectangle(args[1],args[2]);

      var col = new scintilla.Collider(s);


    return col;

},

body : function(shapeType, width, height) {

  /*var body = new scintilla.Body();

  if (shapeType == ShapeType.Triangle)
    body.setShape(scintilla.Polygon.makeTriangle(0,0,width,height));
  else if (shapeType == ShapeType.Rectangle)
    body.setShape(scintilla.Polygon.makeRectangle(0,0,width,height));*/
},

}

scintilla.GameComponents.prototype.constructor = scintilla.GameComponents;
