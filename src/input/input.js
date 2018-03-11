

scintilla.Input = function(game) {

this.game = game;
this.mouse = null;
this.keyboard = null;

}

scintilla.Input.prototype = {

init : function() {

  //this.mouse = new tobiJS.Mouse(this.game);
  this.keyboard = new scintilla.Keyboard(this.game);
  this.mouse = new scintilla.Mouse(this.game);
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

scintilla.Input.prototype.constructor = scintilla.Input;
