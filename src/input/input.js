

Scintilla.Input = function(game) {

this.game = game;
this.mouse = null;
this.keyboard = null;

}

Scintilla.Input.prototype = {

init : function() {

  //this.mouse = new tobiJS.Mouse(this.game);
  this.keyboard = new Scintilla.Keyboard(this.game);
  this.mouse = new Scintilla.Mouse(this.game);
  this.keyboard.init();
  this.mouse.init();

},

update : function() {

  this.keyboard.update();
  this.mouse.update();

},

reset : function()
{
  this.keyboard.reset();
  this.mouse.reset();
}


}

Scintilla.Input.prototype.constructor = Scintilla.Input;
