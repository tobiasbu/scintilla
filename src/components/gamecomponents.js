
tobi.GameComponents = function(game) {

this.game = game;

}

tobi.GameComponents.prototype = {

sprite : function(tag) {


    var sprite;

    if (tag === undefined)
      sprite = null;
    else
      sprite = this.game.cache.getAsset('images',tag);

    return new tobi.Sprite(sprite);


},

tiledSprite : function(args) { //tag,width,height

  var sprite = this.game.cache.getAsset('images',args[0]);

  if (sprite == null) {
    console.warn("tobiJS.component: Can not create Component: tiledsprite: " + args[0]);
    return null;
  }



    return new tobi.TiledSprite(sprite,args[1],args[2]);

},

animationControl : function() {

    return new tobi.AnimationControl(this.game);

},

collider : function(args) { // type, shape

    var s;
    var type = args[0];


    if (type == "triangle")
      s = tobi.Polygon.makeTriangle(args[1],args[2]);
    else if (type == "rectangle")
      s = tobi.Polygon.makeRectangle(args[1],args[2]);

      var col = new tobi.Collider(s);


    return col;

},

body : function(shapeType, width, height) {

  /*var body = new tobi.Body();

  if (shapeType == ShapeType.Triangle)
    body.setShape(tobi.Polygon.makeTriangle(0,0,width,height));
  else if (shapeType == ShapeType.Rectangle)
    body.setShape(tobi.Polygon.makeRectangle(0,0,width,height));*/
},

}

tobi.GameComponents.prototype.constructor = tobi.GameComponents;
