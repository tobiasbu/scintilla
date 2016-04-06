

tobi.Input = function(game) {

this.game = game;
this.mouse = null;
this.keyboard = null;

}

tobi.Input.prototype = {

init : function() {

  //this.mouse = new tobiJS.Mouse(this.game);
  this.keyboard = new tobi.Keyboard(this.game);
  this.mouse = new tobi.Mouse(this.game);
  this.keyboard.init();
  this.mouse.init();

},

update : function() {

  this.keyboard.update();
  this.mouse.update();

}


}

tobi.Input.prototype.constructor = tobi.Input;
