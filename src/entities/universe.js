

// display and update everything
scintilla.Universe = scintilla.Hierarchy.extend(function() {

this.backgroundColor = "rgb(231, 231, 231)";

  this.constructor = function(game) {

    this.super();

    this.game = game;
    this.name = "__universe";
    //scintilla.Hierarchy.call(this,true);

  }


});

//scintilla.Universe.prototype = Object.create(scintilla.Hierarchy.prototype);
//scintilla.Universe.prototype.constructor = scintilla.Universe;
