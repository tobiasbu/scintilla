

// display and update everything
Scintilla.Universe = Scintilla.Hierarchy.extend(function() {

this.backgroundColor = "rgb(231, 231, 231)";

  this.constructor = function(game) {

    this.super();

    this.game = game;
    this.name = "__universe";
    //Scintilla.Hierarchy.call(this,true);

  }


});

//Scintilla.Universe.prototype = Object.create(Scintilla.Hierarchy.prototype);
//Scintilla.Universe.prototype.constructor = Scintilla.Universe;
