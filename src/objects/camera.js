
tobi.Camera = function(game,x,y,width,height) {

this.game = game;
this.view = new tobi.Rect(x,y,width,height);
this.root = null; // who is the node (world)
this.instancesInView = 0;

this.target = null;
this.scale = new tobi.Vector(1,1);
this.angle = 0;

this._width = width;
this._height = height;

}



tobi.Camera.prototype = {

  update : function() {

  this.instancesInView = 0;
  this.root.position.x = -this.view.x;
  this.root.position.y = -this.view.y;
  this.root.scale = this.scale;
  this.root.angle = this.angle;

},

setScale : function(x,y) {

  this.scale.set(x,y);
  //this.view.width = this._width * x;
  //this.view.height = this._height * y;

},

setPosition : function(x,y) {

  this.view.x = x;
  this.view.y = y;

},

setFocus : function(vector) {

  this.setPosition(Math.round(vector.x - (this.view.width/2)), Math.round(vector.y - (this.view.height/2)));

},

setFocusXY : function(x,y) {

  this.setPosition(Math.round(x - (this.view.width/2)), Math.round(y - (this.view.height/2)));

},

setTarget : function(target) {

  this.target = target;

},

reset: function () {

       this.target = null;
       this.view.x = 0;
       this.view.y = 0;
       this.angle = 0;
       this.scale.set(1,1)
}

}

tobi.Camera.prototype.constructor = tobi.Camera;
