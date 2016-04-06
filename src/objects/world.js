
// is the root node of the game
tobi.World = tobi.Instance.extend(function() {

  this.game = null;


  this.constructor = function(game) {

    this.super(game,null,"__world",true);

    this.camera = new tobi.Camera(this.game,0,0,this.game.width,this.game.height);
    this.worldBounds = new tobi.Rect(0,0,this.game.width,this.game.height);
  //tobi.Instance.call(this,game,null,"__world",true);

  // this._new();
    this.game = game;

  }

});

//tobi.World.prototype = Object.create(tobi.Instance.prototype);
//tobi.World.prototype.constructor = tobi.World;

tobi.World.prototype.start = function() {



  this.camera.root = this;
  this.game.camera = this.camera;

  this.game.universe.addNode(this);

  //console.log(this.game.universe);



}

//tobiJS.World.prototype.

tobi.World.prototype.reset = function() {

  this.camera.reset();

}
//this.root.children.push(obj);
