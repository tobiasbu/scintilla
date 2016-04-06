
tobi.Debug = function(game) {

this.game = game;
this.context = game.context;
this.x = 8;
this.y = 12;
this.lineHeight = 14;
this.column = 100;
this.font ="12px Verdana";
this.textColor = 'white';
this.bgcolor = 'black';
this.textShadow = 'black';

}

tobi.Debug.prototype = {

test : function() {

  this.context.setTransform(1, 0, 0, 1, 0, 0);
  this.context.strokeStyle = this.bgcolor;
  this.context.font = this.font;
  this.game.draw.alpha(0.5);
  this.game.draw.rectangle(0,0,this.game.width,(14 * 4)+ 16,this.bgcolor);
  this.game.draw.alpha(1);
  this.drawLine("FPS: " + Math.round(this.game.clock.fps) + " / 60");
  this.drawLine("Instances in view: " + this.game.camera.instancesInView);
  this.drawLine("Instances count " + this.game.world.length);
  this.drawLine("Colliders count " + this.game.physics.length);
  this.x += this.game.width / 2;
  this.y = 12+8;
  this.drawLine("Sounds count " + this.game.sound.length);
  this.x = 8;
  this.y = 12+8;

},

drawLine : function(text) {

  var xx = this.x;

          this.context.fillStyle = this.textShadow;
          this.context.fillText(text, xx + 1, this.y + 1);
          this.context.fillStyle = this.textColor;

      this.context.fillText(text, xx, this.y);


  this.y += this.lineHeight;

},



}
