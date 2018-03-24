
export default class Scene {
  
  constructor(name) {

    this.name = name || 'New Scene';
    //this.childs = new EntityHierarchy("SceneHierarchy", this.game);
    /*this.camera = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.view = 0;*/


    /*if (myGame != null) {
      this.width = myGame.width;
      this.height = myGame.height;
    }*/
  }




  instanceDestroy(gameObject) {

    if (gameObject['destroy'])
      gameObject.destroy();

      //console.log("deleted " + gameObject._id)

    let index = this.instances.indexOf( gameObject);

    this.instances.splice( index, 1 );

  }

  addGameObject(gameObject, clone) {

    let obj;
    let cl = false;

    if (arguments.length == 0)
      obj = new scintilla.GameObject();
    else {

      if (clone === undefined)
        cl = false;
      else
        cl = clone;


        if (cl)
          obj = gameObject.clone();
        else
          obj = gameObject;

    }

    obj._id = this.instances.length;
    obj._game = this.game;
    this.instances.push(obj);

    obj.start();
    return obj;

  }

  setBounds(x,y,width,height) {

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    
  }

}



