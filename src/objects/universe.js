

// display and update everything
tobi.Universe = tobi.Hierarchy.extend(function() {

this.backgroundColor = "rgb(231, 231, 231)";

  this.constructor = function(game) {

    this.super();

    this.game = game;
    this.name = "__universe";
    //tobi.Hierarchy.call(this,true);

  }


});

//tobi.Universe.prototype = Object.create(tobi.Hierarchy.prototype);
//tobi.Universe.prototype.constructor = tobi.Universe;
