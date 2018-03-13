
// is the root node of the game
scintilla.World = scintilla.Instance.extend(function() {

  this.game = null;
  this.camera = null;
  this.worldBounds = null;

  this.constructor = function(game) {

    this.super(game,null,"__world",true);

    this.camera = new scintilla.Camera(this.game,0,0,this.game.width,this.game.height);
    this.worldBounds = new scintilla.Rect(0,0,this.game.width,this.game.height);
    this.game = game;

  }

  this.preUpdate = function(time) {


    this.camera.update();


    for (var i = 0; i < this.children.length; i++)
    {
        this.children[i].preUpdate(time);
        this.children[i].z = i;



    }



  }

  this.update = function(time) {


      var destroyList = [];

    for (var i = 0; i < this.children.length; i++)
    {


        this.children[i].update();


        if (this.children[i].component['collider']) {
            this.children[i].component['collider'].update();
        }

        if (this.children[i]._selfDestroy) {
          destroyList.push(this.children[i]);
        }

    }

    for (var i = 0; i < destroyList.length; i++) {
      destroyList[i]._garbage();
    }

    // automatic sort depth
    if (this._changeDepth) {
      this._updateDepth();
      this._changeDepth = false;
    }

  }

  this._updateTransform = function() {

    this.updateTransform();


    for (var i = 0; i < this.children.length; i++)
    {

      this.children[i]._updateTransform();

    }

  }

  this.render = function(context) {

    var i = 0;

    while (i < this.children.length)
    {

      this.children[i].render(context);

      i++;

    }

  }



});

//scintilla.World.prototype = Object.create(scintilla.Instance.prototype);
//scintilla.World.prototype.constructor = scintilla.World;

scintilla.World.prototype.start = function() {



  this.camera.root = this;
  this.game.camera = this.camera;

  this.game.universe.addChild(this);

  //console.log(this.game.universe);



}

//tobiJS.World.prototype.

scintilla.World.prototype.reset = function() {

  this.camera.reset();

}
//this.root.children.push(obj);
