

scintilla.Scene = function(game) {

  var myGame = null;

  if (typeof game === 'undefined')
    myGame = null;
  else {
    myGame = game;
  }


  this.game = myGame;
  this.camera = null;
  this.x = 0;
  this.y = 0;
  this.width = 0;
  this.height = 0;
  this.view = 0;


  if (myGame != null) {
    this.width = myGame.width;
    this.height = myGame.height;
  }


};

scintilla.Scene.prototype = {


/*preload : function() {},
loading : function() {},
loadingRender : function() {},
start : function() {},
update : function() {},
render : function() {},
destroy : function() {},*/

_draw : function() {

  self.game.context.font ="12px Verdana";
  self.game.context.fillText("FPS: " + Math.round(this.game.clock.fps) + " / 60",0,12);
  self.game.context.fillText("Instances Count: " + this.instances.length,0,24);
  self.game.context.fillText("Instances in view: " + this.view,0,36);



},

instanceDestroy : function(gameObject) {

  if (gameObject['destroy'])
    gameObject.destroy();

    //console.log("deleted " + gameObject._id)

  var index = this.instances.indexOf( gameObject);

  this.instances.splice( index, 1 );

},

 addGameObject : function(gameObject, clone) {

   var obj;
   var cl = false;

   if (arguments.length == 0)
     obj = new scintilla.GameObject();
   else {

     if (clone === undefined)
      cl = false;
    else
      cl = clone;


      if (cl)
        obj = gameObject.clone();
      else
        obj = gameObject;

   }

   obj._id = this.instances.length;
   obj._game = this.game;
   this.instances.push(obj);

   obj.start();
   return obj;

},


}

scintilla.Scene.prototype.constructor = scintilla.Scene;

scintilla.Scene.prototype.setBounds = function(x,y,width,height) {

this.x = x;
this.y = y;
this.width = width;
this.height = height;

}
