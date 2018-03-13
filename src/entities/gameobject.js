
scintilla.GameObject = scintilla.Instance.extend(function() {

  this.game = null;
  this.pool = null;
  this.component = {}

  this.constructor = function(name) {

    if (name === undefined) name = 'gameobject';

    this.super(null,null,name);
    //scintilla.Instance.call(this,null,null,name,false);
    this.origin.set(0.5,0.5);

  }

  this.start = function() {};
  this.update = function() {};

  //this.onDestroy = function() {};


  this.addComponent = function(name, args) {

    switch (name) {

      case 'sprite': {
          if (!this.component['render']) {
              this.component['render'] = this.game.component.sprite(args);
          }
          this.component['render']._gameObject = this;
          return this.component['render'];
        break;
      }

      case 'tiledSprite': {
          if (!this.component['render']) {
              this.component['render'] = this.game.component.tiledSprite(args);
          }
          this.component['render']._gameObject = this;
          return this.component['render'];
        break;
      }

      case 'animation': {

          if (!this.component['render']) {
            this.component['render'] = this.game.component.sprite();
            this.component['render']._gameObject = this;
          }

          if (!this.component['animation']) {
              this.component['animation'] = this.game.component.animationControl();
              this.component['animation']._gameObject = this;
          }
          return this.component['animation'];
        break;
      }

      case 'collider': {

        if (!this.component['collider']) {
            this.component['collider'] = this.game.component.collider(args);
            this.component['collider']._gameObject = this;
        }
        return this.component['collider'];

      }

    }


  }

  this.getComponent = function(name) {

    var comp = this.component[name]

    if (this.component[name])
      return comp;
    else
      return null;


  }


  this.removeComponent = function(name) {

    if (this.component[name]) {

        //this.component[name].destroy();
        delete this.component[name];

    }

  }

  this.removeAllComponents = function() {

    for (var property in this.component) {

      this.removeComponent(property);

    }

  }

  




  //return this;

});


  //this.game = game;
  //this.context = game.canvas.getContext("2d");




    //draw self on canvas;
    //intended only to be called from update, should never
    //need to be deliberately called by user


 /*GI.context.drawImage(instance.sprite_index.image,
   instance.sprite_index.frameWidth*wLevel,
   instance.sprite_index.frameHeight*hLevel,
   instance.sprite_index.frameWidth,
   instance.sprite_index.frameHeight,
   instance.x-instance.sprite_index.xOrigin,
   instance.y-instance.sprite_index.yOrigin,
   instance.sprite_index.frameWidth,
   instance.sprite_index.frameHeight);*/

   // end draw function







//scintilla.GameObject.prototype = Object.create(scintilla.Instance.prototype);
//scintilla.GameObject.prototype.constructor = scintilla.GameObject;
/*
scintilla.GameObject.prototype.start = function() {};
scintilla.GameObject.prototype.update = function() {};
scintilla.GameObject.prototype.destroy = function() {};

scintilla.GameObject.prototype.draw = function(context) {

  if (this.renderComponent != null) {



      this.renderComponent.draw(context,this.matrix);

      //this.game.draw.boundingbox(this.bounds);

  }

}*/







/*  clone : function() {


    var me = this;

    var clone =  Object.assign({}, me);
    //var clone = Object.assign({ __proto__: me.__proto__ }, me);
    return clone;

  },*/
